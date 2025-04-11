import { NextRequest, NextResponse } from "next/server";
import { getInstallationToken } from "@/lib/github-auth";

export async function GET(req: NextRequest) {
  const appId = req.nextUrl.searchParams.get("appId");
  if (!appId)
    return NextResponse.json({ error: "Missing appId" }, { status: 400 });

  try {
    const accessToken = await getInstallationToken();
    console.log("Got installation token");

    const filePath = `buckets/hv-central-config/audit-portal/prod/workflow-builder/workflows/appIds/${appId}`;
    const url = `https://api.github.com/repos/${process.env.GITHUB_REPO_OWNER}/${process.env.HV_CENTRAL_REPO}/contents/${filePath}?ref=main`;

    const res = await fetch(url, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        Accept: "application/vnd.github.v3+json",
      },
    });

    if (!res.ok) {
      const text = await res.text();
      console.error("GitHub API error:", text);
      return NextResponse.json(
        { error: "GitHub fetch failed", details: text },
        { status: res.status }
      );
    }

    const files = await res.json();
    return NextResponse.json(files);
  } catch (err: any) {
    console.error("GitHub API Error:", err);
    return NextResponse.json(
      { error: "GitHub Auth or Fetch failed", details: err.message },
      { status: 500 }
    );
  }
}
