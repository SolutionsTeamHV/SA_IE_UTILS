import { getAuthorizationUrl } from "@/lib/github-auth";
import { NextResponse } from "next/server";

export async function GET() {
  const { url } = await getAuthorizationUrl(crypto.randomUUID());
  console.log(url);
  return NextResponse.redirect(url);
}
