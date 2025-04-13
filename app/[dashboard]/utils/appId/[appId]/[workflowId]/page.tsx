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
import { getRepoContents } from "@/lib/github-auth";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ShieldCheck } from "lucide-react";

type WorkflowFile = {
  name: string;
  download_url: string;
  type: string;
};

type PageParams = {
  [key: string]: string;
};

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
      else if (rawUrl.includes("uat")) env = "uat";
      else if (rawUrl.includes("test")) env = "test";
      else if (rawUrl.includes("stage") || rawUrl.includes("staging"))
        env = "staging";
      return { url: m.properties.url, env };
    });

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
                                className={`inline-block px-2 py-0.5 text-xs font-semibold rounded-md ${
                                  issue.type === "ERROR"
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
                    <CardTitle className="text-left">SDK Responses</CardTitle>
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
    </main>
  );
}
