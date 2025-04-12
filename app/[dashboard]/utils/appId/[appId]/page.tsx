import Link from "next/link";
import { notFound } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";

type WorkflowFile = {
  name: string;
  download_url: string;
  type: string;
};

export default async function AppPage({
  params,
}: {
  params: { appId: string };
}) {
  const { appId } = await params;
  if (!appId) return notFound();

  let files: WorkflowFile[] = [];
  let error = null;

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/workflows?appId=${appId}`,
      { cache: "no-store" }
    );
    if (!res.ok) {
      throw new Error(`GitHub returned ${res.status}`);
    }
    files = await res.json();
  } catch (err: any) {
    error = err.message || "Something went wrong while fetching workflows.";
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
