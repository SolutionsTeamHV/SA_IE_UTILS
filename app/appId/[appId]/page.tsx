import { notFound } from "next/navigation";

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
    <main className="max-w-3xl mx-auto py-10 px-4">
      <h1 className="text-2xl font-semibold mb-4">
        Workflows for <code>{appId}</code>
      </h1>

      {error ? (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          <strong className="font-bold">Error:</strong>{" "}
          <span className="block sm:inline">{error}</span>
        </div>
      ) : jsonFiles.length === 0 ? (
        <p>No workflow files found.</p>
      ) : (
        <ul className="space-y-3">
          {jsonFiles.map((file) => (
            <li
              key={file.name}
              className="border rounded p-4 hover:bg-gray-100 transition"
            >
              <div className="flex justify-between items-center">
                <span className="font-medium">{file.name}</span>
                <a
                  href={file.download_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline text-sm"
                >
                  View Raw
                </a>
              </div>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
