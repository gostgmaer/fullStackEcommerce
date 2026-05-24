// import { getToken } from "next-auth/jwt";
// import { NextResponse } from "next/server";
// import { secret } from "./config/setting";
// export async function middleware(req, res) {
//   const authorised = await getToken({ req, secret: secret });

//   const { pathname ,origin} = req.nextUrl;

//   if (
//     pathname.startsWith("/user") ||
//     pathname === "/checkout" ||
//     pathname.startsWith("/order")
//   ) {
//     if (!authorised) {
//       // return NextResponse.redirect(new URL(`/auth/login`, req.url));

//       const callbackUrl = encodeURIComponent(req.nextUrl.pathname);

//       // return NextResponse.redirect(
//       //   `${origin}/auth/login?callbackUrl=${callbackUrl}`
//       // );

//       return NextResponse.redirect(new URL(`/auth/login`, req.url));
//     }
//   }
//   if (pathname.startsWith("/auth") && authorised) {
//     return NextResponse.redirect(new URL("/", req.url));
//   }
// }

// export const config = {
//   matcher: [
//     '/user/:path*',
//     '/checkout/:path*',
//      '/order/:path*',
//     '/auth/:path*',
//     '/', // homepage
//   ],
// };
import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import { secret } from "./config/setting";
// import { getServerSession } from "next-auth";
// import { authOptions } from "./app/api/auth/authOptions";


export async function middleware(request) {
  const authorised = await getToken({ req: request, secret });
  const { pathname } = request.nextUrl;
  if (
    pathname.startsWith("/user") ||
    pathname === "/checkout" ||
    pathname.startsWith("/order")
  ) {
    if (!authorised) {
      // const requestedUrl = request.nextUrl.clone();
      // const callbackUrl = requestedUrl.pathname + requestedUrl.search;

      const loginUrl = new URL("/auth/login", request.url);
      loginUrl.searchParams.set("callbackUrl", pathname);

      return NextResponse.redirect(loginUrl);
    }
  }
  if (pathname.startsWith("/auth") && authorised) {
    var rawCallbackUrl = request.nextUrl.searchParams.get("callbackUrl");

    // Prevent open redirect — only allow relative paths
    const safeCallback =
      rawCallbackUrl && rawCallbackUrl.startsWith("/") && !rawCallbackUrl.startsWith("//")
        ? rawCallbackUrl
        : "/";

    return NextResponse.redirect(
      new URL(safeCallback, request.nextUrl.origin)
    );
  }
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
