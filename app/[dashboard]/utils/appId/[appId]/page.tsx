import Link from "next/link";
import { notFound } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { cookies } from "next/headers";
import { getRepoContents } from "@/lib/github-auth";

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
  const { appId } = await params;
  if (!appId) return notFound();

  const cookieStore = cookies();
  const accessToken = (await cookieStore).get("accessToken")?.value;

  if (!accessToken) {
    return notFound(); // or redirect to login
  }

  let files: WorkflowFile[] = [];
  let error = null;

  try {
    const filePath = `buckets/hv-central-config/audit-portal/prod/workflow-builder/workflows/appIds/${appId}`;
    files = await getRepoContents(
      accessToken,
      process.env.HV_CENTRAL_REPO!,
      filePath
    );
  } catch (err: unknown) {
    error =
      err instanceof Error
        ? err.message
        : "Something went wrong while fetching workflows.";
  }

  const jsonFiles = files.filter((f) => f.name.endsWith(".json"));

  return (
    <main className="max-w-5xl mx-auto py-10 px-6">
      <h1 className="text-2xl font-bold mb-6 text-foreground">
        Workflows available in{" "}
        <span className="text-primary font-mono">{appId}</span>
      </h1>

      {error ? (
        <div className="bg-destructive/10 border border-destructive text-destructive px-4 py-3 rounded">
          <strong className="font-bold">Error:</strong>{" "}
          <span className="block sm:inline">{error}</span>
        </div>
      ) : jsonFiles.length === 0 ? (
        <p className="text-muted-foreground">No workflow files found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {jsonFiles.map((file) => (
            <Link
              key={file.name}
              href={`/dashboard/utils/appId/${appId}/${file.name}`}
              className="group"
            >
              <Card className="transition border border-muted hover:border-primary shadow-sm group-hover:shadow-md">
                <CardContent className="p-4 space-y-2">
                  <div className="truncate font-mono text-sm text-foreground group-hover:text-primary">
                    {file.name}
                  </div>
                  <div className="text-xs text-muted-foreground group-hover:text-primary group-hover:underline">
                    View Details →
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      )}
    </main>
  );
}
