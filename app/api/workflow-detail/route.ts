// app/api/workflow-detail/route.ts
import { NextRequest, NextResponse } from "next/server";
import { validateWorkflowFromUrl } from "@/lib/validation/main";

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const downloadUrl = searchParams.get("download_url");

  if (!downloadUrl) {
    return NextResponse.json(
      { success: false, issues: ["Missing download_url"] },
      { status: 400 }
    );
  }

  try {
    const result = await validateWorkflowFromUrl(downloadUrl);
    return NextResponse.json(result);
  } catch (error: any) {
    console.error("Validation exception:", error);
    return NextResponse.json(
      {
        success: false,
        issues: ["Internal error occurred during workflow validation"],
      },
      { status: 500 }
    );
  }
}
