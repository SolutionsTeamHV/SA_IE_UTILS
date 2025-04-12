import { NextRequest, NextResponse } from "next/server";
import { getRepoContents } from "@/lib/github-auth";

export async function GET(req: NextRequest) {
  const appId = req.nextUrl.searchParams.get("appId");
  if (!appId)
    return NextResponse.json({ error: "Missing appId" }, { status: 400 });

  try {
    const accessToken = req.cookies.get("accessToken");
    if (!accessToken)
      return NextResponse.json({ error: "Missing accessToken" }, { status: 400 });

    console.log("Got installation token");

    // Use the getRepoContents function
    const filePath = `buckets/hv-central-config/audit-portal/prod/workflow-builder/workflows/appIds/${appId}`;
    const files = await getRepoContents(
      accessToken.value,
      process.env.HV_CENTRAL_REPO!,
      filePath
    );

    return NextResponse.json(files);
  } catch (err: unknown) {
    console.error("GitHub API Error:", err);
    return NextResponse.json(
      { error: "GitHub Auth or Fetch failed", details: err instanceof Error ? err.message : "Unknown error" },
      { status: 500 }
    );
  }
}
