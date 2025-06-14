

import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import { secret } from "./config/setting";

/**
 * @param {import('next/server').NextRequest} req
 */
export async function middleware(req) {
  const { pathname } = req.nextUrl;

  // Skip static files and API routes
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/favicon.ico") ||
    pathname.startsWith("/images") ||
    pathname.startsWith("/static")
  ) {
    return NextResponse.next();
  }
  const t = await getToken({ req, secret });
  // console.log(t);

  const isProtectedRoute =
    pathname.startsWith("/user") ||
    pathname === "/checkout" ||
    pathname.startsWith("/order");

  const isAuthRoute = pathname.startsWith("/auth");

  if (isProtectedRoute || isAuthRoute) {
    const token = await getToken({ req, secret });

    if (isProtectedRoute && !token) {
      return NextResponse.redirect(new URL("/auth/login", req.url));
    }

    if (isAuthRoute && token) {
      return NextResponse.redirect(new URL("/", req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/user/:path*",
    "/checkout/:path*",
    "/order/:path*",
    "/auth/:path*",
    "/", // homepage
  ],
};
