import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const userInfoCookie = request.cookies.get("userInfo")?.value;

  if (!userInfoCookie) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  let user = {
    name: "Guest",
    email: "guest@example.com",
    avatar: "/avatars/default.jpg",
  };

  try {
    const parsed = JSON.parse(decodeURIComponent(userInfoCookie));
    if (parsed?.login && parsed?.email && parsed?.avatar_url) {
      user = {
        name: parsed.name || parsed.login,
        email: parsed.email,
        avatar: parsed.avatar_url,
      };
    }
  } catch (e) {
    console.error("Error parsing userInfo cookie", e);
  }

  const response = NextResponse.next();
  response.headers.set("x-user-name", user.name);
  response.headers.set("x-user-email", user.email);
  response.headers.set("x-user-avatar", user.avatar);

  return response;
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
