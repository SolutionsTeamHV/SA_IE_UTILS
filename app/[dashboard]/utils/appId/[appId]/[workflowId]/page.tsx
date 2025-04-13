import { notFound } from "next/navigation";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BuilderAndCountries,
  ModuleList,
  NameDescription,
  SDKResponseList,
  URLList,
} from "@/components/WorkflowMetadata";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cookies } from "next/headers";
import { getRepoContents, getRepoFileContent } from "@/lib/github-auth";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ShieldCheck, CheckCircle } from "lucide-react";
import VkycConfigFetcher from "@/components/VkycConfigFetcher";
import ThomasConfigFetcher from "@/components/ThomasConfigFetcher";

type WorkflowFile = {
  name: string;
  download_url: string;
  type: string;
};

interface WorkflowConfig {
  steps: {
    title: string;
    message: string;
    documentType: string;
    category?: string;
  }[];
}

type PageParams = {
  [key: string]: string;
};

interface ProfessionalQuestions {
  question: string;
  answer: string;
}
interface PersonalQuestions {
  question: string;
  answer: string;
}

interface ModuleAuditStatus {
  module: string;
  pushToAuditPortal: boolean | null;
}

interface ThomasConfigFetcherProps {
  auditStatuses: ModuleAuditStatus[];
}

export default async function WorkflowPage({
  params,
}: {
  params: Promise<PageParams>;
}) {
  const { appId, workflowId } = await params;

  const cookieStore = cookies();
  const accessToken = (await cookieStore).get("accessToken")?.value;

  if (!accessToken) {
    return notFound(); // or redirect to login
  }

  let files: WorkflowFile[] = [];

  try {
    const filePath = `buckets/hv-central-config/audit-portal/prod/workflow-builder/workflows/appIds/${appId}`;
    files = await getRepoContents(
      accessToken,
      process.env.HV_CENTRAL_REPO!,
      filePath
    );
  } catch (err: unknown) {
    return (
      <Alert variant="destructive">
        <AlertTitle>Error loading workflows</AlertTitle>
        <AlertDescription>
          WorkflowId: {workflowId} -{" "}
          {err instanceof Error ? err.message : "Unknown error"}
        </AlertDescription>
      </Alert>
    );
  }

  const match = files.find((f: any) => f.name === workflowId);
  if (!match) return notFound();

  const encodedUrl = encodeURIComponent(match.download_url);
  const validationRes = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/workflow-detail?download_url=${encodedUrl}`,
    { cache: "no-store" }
  );

  if (!validationRes.ok) {
    return (
      <Alert variant="destructive">
        <AlertTitle>Validation failed</AlertTitle>
        <AlertDescription>{workflowId}</AlertDescription>
      </Alert>
    );
  }

  const personalQuestions: PersonalQuestions[] = [];
  const professionalQuestions: ProfessionalQuestions[] = [];
  let workflowConfig: WorkflowConfig = { steps: [] };
  const thomasConfigs: Record<string, any> = {};
  const result = await validationRes.json();
  const issues = result.issues ?? [];
  const workflow = result.workflow;
  const properties = workflow?.properties || {};
  const modules = workflow?.modules || [];

  const errorCount = issues.filter((i: any) => i.type === "ERROR").length;
  const warningCount = issues.filter((i: any) => i.type === "WARNING").length;

  const countries: string[] = modules[0]?.properties?.countriesSupported || [];
  const subTypes = modules.map((m: any) => m.subType as string);
  const moduleTypes: string[] = [...new Set<string>(subTypes)];
  const sdkResponses: string[] = Object.keys(workflow?.sdkResponse || {});
  const urls: { url: string; env: string }[] = modules
    .filter((m: any) => m.subtype !== "dynamicForm" && m.properties?.url)
    .map((m: any) => {
      const rawUrl = m.properties.url.toLowerCase();
      let env = "prod";
      if (rawUrl.includes("dev")) env = "dev";
      else if (rawUrl.includes("uat") || rawUrl.includes("demo")) env = "uat";
      else if (rawUrl.includes("test")) env = "test";
      else if (rawUrl.includes("stage") || rawUrl.includes("staging"))
        env = "staging";
      return { url: m.properties.url, env };
    });

  const thomasEndpoints: string[] = Array.from(
    new Set(
      modules
        .filter(
          (m: any) =>
            m.subtype !== "dynamicForm" &&
            typeof m.properties?.url === "string" &&
            m.properties.url.includes("thomas")
        )
        .map((m: any) => {
          const parts = m.properties.url.split("/");
          return parts[parts.length - 1]; // get the last segment
        })
    )
  ) as string[];

  console.log("thomasEndpoints", thomasEndpoints);

  let thomasFetchError = null;
  try {
    for (const endpoint of thomasEndpoints as string[]) {
      const configPath = `sync_buckets/${endpoint}/default/ClientConfig.json`;

      try {
        const configRaw = await getRepoFileContent(
          accessToken,
          process.env.THOMAS_CONFIG_REPO!,
          configPath
        );
        thomasConfigs[endpoint] = JSON.parse(configRaw);
      } catch (err) {
        console.warn(`Failed to fetch config for ${endpoint}:`, err);
        thomasConfigs[endpoint] = null;
      }
    }
    console.log(thomasConfigs);
  } catch (err: unknown) {
    thomasFetchError =
      err instanceof Error
        ? err.message
        : "Something went wrong while fetching thomas.";
    console.log(thomasFetchError);
  }

  const thomasAuditFlags: Record<string, boolean> = {};

  for (const [endpoint, config] of Object.entries(thomasConfigs)) {
    if (!config) {
      thomasAuditFlags[endpoint] = false;
      continue;
    }

    const defaultConfig = config["default"];
    const appConfig = config[appId];

    const defaultFlag = defaultConfig?.config?.pushToAuditPortal === true;
    const appFlag = appConfig?.config?.pushToAuditPortal === true;

    thomasAuditFlags[endpoint] = defaultFlag || appFlag;
  }

  console.log("thomasAuditFlags", thomasAuditFlags);

  const auditStatuses: ModuleAuditStatus[] = thomasEndpoints.map((endpoint) => ({
    module: endpoint,
    pushToAuditPortal:
      thomasConfigs[endpoint] === null
        ? null
        : thomasAuditFlags[endpoint] ?? false,
  }));

  const thomasProps: ThomasConfigFetcherProps = {
  auditStatuses,
};

  const verificationInfoModule = modules.find(
    (m: any) =>
      m.subtype !== "dynamicForm" &&
      typeof m.properties?.url === "string" &&
      m.properties.url.endsWith("/verificationInfo")
  );

  const isVkycFlow: boolean = urls.some(({ url }) =>
    url.toLowerCase().includes("vcip")
  );
  let vkycError = null;
  if (isVkycFlow) {
    try {
      const filePath = `buckets/videokyc-configs/workflow_configs/workflow_${appId}.json`;
      const raw = await getRepoFileContent(
        accessToken,
        process.env.VKYC_CONFIG_REPO!,
        filePath
      );
      const vkycWorklow = JSON.parse(raw);
      workflowConfig = {
        steps: vkycWorklow.workflow.steps.map((step: any) => ({
          title: step.title,
          message: step.message,
          documentType: step.documentType,
          category: step.category, // Optional, will be undefined if not present
        })),
      };
      console.log(vkycWorklow);
    } catch (err: unknown) {
      vkycError =
        err instanceof Error
          ? err.message
          : "Something went wrong while fetching vkyc.";
      console.log(vkycError);
    }

    const verificationInfo =
      verificationInfoModule?.properties?.requestBody?.verificationInfo ?? [];

    verificationInfo.forEach((item: any) => {
      console.log(item)
      const qa = {
        question: item.text,
        answer: item.originalValue,
      };

      if (item.category === "personal") {
        personalQuestions.push(qa);
      } else if (item.category === "professional") {
        professionalQuestions.push(qa);
      }
    });

    console.log(professionalQuestions);
    console.log(personalQuestions);
  }
  return (
    <main className="max-w-5xl mx-auto py-10 px-4 space-y-6">
      <h1 className="text-2xl font-bold">
        Deep insights for <span className="text-primary">{workflowId}</span>
      </h1>

      <div className="grid grid-cols-1">
        <div className="space-y-4">
          <Card className="mt-4">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-muted-foreground">
                <ShieldCheck className="w-5 h-5 text-green-600 dark:text-green-400" />
                Validation Status
                <span className="italic text-sm text-muted-foreground">
                  (Validated using validatorv2)
                </span>
              </CardTitle>
            </CardHeader>

            <CardContent className="flex flex-wrap items-center gap-3">
              {result.success ? (
                <Badge
                  variant="outline"
                  className="border-green-600 text-green-600 px-3 py-1.5 text-sm"
                >
                  ✅ Passed
                </Badge>
              ) : (
                <>
                  <Badge
                    variant="outline"
                    className="border-destructive text-destructive px-3 py-1.5 text-sm"
                  >
                    ❌ Errors: {errorCount}
                  </Badge>
                  <Badge
                    variant="outline"
                    className="border-yellow-500 text-yellow-500 px-3 py-1.5 text-sm"
                  >
                    ⚠️ Warnings: {warningCount}
                  </Badge>

                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        variant="outline"
                        className="ml-2 text-sm px-3 py-1.5 cursor-pointer"
                      >
                        View Validation Logs
                      </Button>
                    </DialogTrigger>

                    <DialogOverlay className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40" />
                    <DialogContent className="max-w-6xl z-50">
                      <DialogHeader>
                        <DialogTitle className="text-foreground">
                          Validation Issues
                        </DialogTitle>
                        <DialogDescription className="text-sm text-muted-foreground">
                          These issues were detected during validation.
                        </DialogDescription>
                      </DialogHeader>

                      <div className="mt-4 max-h-[400px] overflow-y-auto pr-1">
                        <ul className="space-y-4 text-sm">
                          {issues.map((issue: any, idx: number) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span
                                className={`inline-block px-2 py-0.5 text-xs font-semibold rounded-md ${issue.type === "ERROR"
                                    ? "text-destructive border border-destructive bg-destructive/10"
                                    : "text-yellow-600 border border-yellow-500 bg-yellow-500/10"
                                  }`}
                              >
                                {issue.type?.toUpperCase() ?? "ISSUE"}
                              </span>
                              <div className="text-foreground leading-snug">
                                <span className="font-semibold">
                                  {issue.code ?? "Issue"}:
                                </span>{" "}
                                {issue.text}
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </DialogContent>
                  </Dialog>
                </>
              )}
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Metadata - 3 column layout */}
      <div className="grid md:grid-cols-3 gap-6 ">
        <Card>
          <CardHeader>
            <CardTitle>Name & Description</CardTitle>
          </CardHeader>
          <CardContent>
            <NameDescription
              name={properties.name}
              description={properties.description}
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Builder Info & Countries</CardTitle>
          </CardHeader>
          <CardContent>
            <BuilderAndCountries
              isBuiltOnBuilder={properties.isBuiltOnBuilder ?? false}
              countries={countries}
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Modules Used</CardTitle>
          </CardHeader>
          <CardContent>
            <ModuleList modules={moduleTypes} />
          </CardContent>
        </Card>
      </div>

      {/* SDK Responses */}
      <div className="grid grid-cols-1">
        <Card>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="sdk-responses">
              <AccordionTrigger className="flex items-center justify-between w-full p-2 cursor-pointer">
                <div className="flex-1">
                  <CardHeader className="p-2">
                    <CardTitle className="text-left">
                      SDK Response Keys
                    </CardTitle>
                  </CardHeader>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <CardContent>
                  <SDKResponseList responses={sdkResponses} />
                </CardContent>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </Card>
      </div>

      {/* URLs Used */}
      <div className="grid grid-cols-1">
        <Card>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="urls-used">
              <AccordionTrigger className="flex items-center justify-between w-full p-2 cursor-pointer">
                <CardHeader className="p-0 flex-1">
                  <CardTitle className="text-left">URLs Used</CardTitle>
                </CardHeader>
              </AccordionTrigger>
              <AccordionContent>
                <CardContent>
                  <URLList urls={urls} />
                </CardContent>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </Card>
      </div>

      {isVkycFlow && vkycError !== null ? (
        <Alert variant="destructive">
          <AlertTitle>VKYC Config Error</AlertTitle>
          <AlertDescription>
            {vkycError}. This may indicate that VKYC config has not been added
            yet, which could break the flow.
          </AlertDescription>
        </Alert>
      ) : (
        isVkycFlow &&
        vkycError === null && (
          <div className="grid grid-cols-1">
            <Alert variant="default">
              <CheckCircle className="h-5 w-5 text-green-500" />
              <AlertTitle>VKYC Flow Detected</AlertTitle>
              {personalQuestions.length > 0 ||
                professionalQuestions.length > 0 ? (
                <AlertDescription>
                  Personal / professional questions found under Video PD module.
                </AlertDescription>
              ) : (
                <AlertDescription>
                  Video PD module is not used.
                </AlertDescription>
              )}
            </Alert>
            <VkycConfigFetcher
              workflowConfig={workflowConfig}
              professionalQuestions={professionalQuestions}
              personalQuestions={personalQuestions}
            />
          </div>
        )
      )}

      {thomasFetchError !== null ? (
        <Alert variant="destructive">
          <AlertTitle>Thomas Config Error</AlertTitle>
          <AlertDescription>
            {thomasFetchError}
          </AlertDescription>
        </Alert>
      ) : <ThomasConfigFetcher {...thomasProps} />}
    </main>
  );
}
