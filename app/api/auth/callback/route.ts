import { NextResponse } from "next/server";
import { getAccessToken, getUserInfo } from "@/lib/github-auth";

export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const code = url.searchParams.get("code");

    if (!code) {
      return NextResponse.json({ error: "No code provided" }, { status: 400 });
    }

    // Exchange code for access token
    const accessToken = await getAccessToken(code);

    // Get user info
    const userInfo = await getUserInfo(accessToken);

    // Store the token and user info in session
    // For testing purpose, just set it in a cookie
    const response = NextResponse.redirect(new URL("/dashboard", request.url));
    response.cookies.set("accessToken", accessToken, {
      httpOnly: true,
      path: "/",
      secure: process.env.NODE_ENV === "production",
    });
    response.cookies.set("userInfo", JSON.stringify(userInfo), {
      httpOnly: false,
      path: "/",
      secure: process.env.NODE_ENV === "production",
    });

    return response;
  } catch (error) {
    console.error("GitHub OAuth error:", error);
    return NextResponse.json(
      { error: "Failed to authenticate with GitHub" },
      { status: 500 }
    );
  }
}
