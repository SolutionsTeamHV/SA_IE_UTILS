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

export default async function WorkflowPage({
  params,
}: {
  params: { appId: string; workflowId: string };
}) {
  const { appId, workflowId } = await params;

  // ... (unchanged: fetching and result parsing)
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/workflows?appId=${appId}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    return (
      <Alert variant="destructive">
        <AlertTitle>Error loading workflows</AlertTitle>
        <AlertDescription>AppId: {appId}</AlertDescription>
      </Alert>
    );
  }

  const files = await res.json();
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
        Deep insights for <span className="text-yellow-400">{workflowId}</span>
      </h1>

      <div className="grid grid-cols-1">
        <div className="space-y-4">
          <Card className="bg-background border mt-4">
            <CardHeader>
              <CardTitle className="text-muted-foreground">
                Validation Status
              </CardTitle>
            </CardHeader>

            <CardContent className="flex flex-wrap items-center gap-3">
              {result.success ? (
                <Badge
                  variant="default"
                  className="bg-green-600 hover:bg-green-700 text-white px-3 py-1.5"
                >
                  ✅ Passed
                </Badge>
              ) : (
                <>
                  <Badge
                    variant="outline"
                    className="bg-red-500/10 border-red-500 text-red-400 flex items-center gap-1 px-3 py-1.5 text-sm"
                  >
                    ❌ Errors: {errorCount}
                  </Badge>
                  <Badge
                    variant="outline"
                    className="bg-yellow-500/10 border-yellow-500 text-yellow-400 flex items-center gap-1 px-3 py-1.5 text-sm"
                  >
                    ⚠️ Warnings: {warningCount}
                  </Badge>
                </>
              )}
            </CardContent>
          </Card>
        </div>

        {!result.success && (
          <Dialog>
            <DialogTrigger asChild>
              <button className="text-sm text-blue-400 underline hover:text-blue-300 cursor-pointer transition mt-4">
                View Validation Details
              </button>
            </DialogTrigger>

            {/* Custom Overlay with Blur */}
            <DialogOverlay className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40" />

            <DialogContent className="max-w-6xl bg-zinc-900 border border-zinc-700 z-50">
              <DialogHeader>
                <DialogTitle className="text-white">
                  Validation Issues
                </DialogTitle>
                <DialogDescription className="text-sm text-zinc-400">
                  These issues were detected during validation.
                </DialogDescription>
              </DialogHeader>

              <div className="mt-4 max-h-[400px] overflow-y-auto">
                <ul className="space-y-4 text-sm">
                  {issues.map((issue: any, idx: number) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span
                        className={`inline-block px-2 py-0.5 text-xs font-semibold rounded-md ${
                          issue.type === "ERROR"
                            ? "bg-red-500/10 text-red-500 border border-red-400"
                            : "bg-yellow-500/10 text-yellow-500 border border-yellow-400"
                        }`}
                      >
                        {issue.type?.toUpperCase() ?? "ISSUE"}
                      </span>
                      <div className="text-white leading-snug">
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
        )}
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
          <CardHeader>
            <CardTitle>SDK Responses</CardTitle>
          </CardHeader>
          <CardContent>
            <SDKResponseList responses={sdkResponses} />
          </CardContent>
        </Card>
      </div>

      {/* URLs Used */}
      <div className="grid grid-cols-1">
        <Card>
          <CardHeader>
            <CardTitle>URLs Used</CardTitle>
          </CardHeader>
          <CardContent>
            <URLList urls={urls} />
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
