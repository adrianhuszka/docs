import { NextRequest, NextResponse } from "next/server";
import { withAuth } from "next-auth/middleware";
import { getToken } from "next-auth/jwt";

const authMiddleware = withAuth({
  callbacks: {
    authorized: ({ token }) => !!token,
  },
  pages: {
    signIn: "/api/auth/signin",
    error: "/api/auth/signin",
  },
});

export default async function middleware(req: NextRequest) {
  const restrictedPathnameRegex = RegExp(`^/admin/.*$`, "i");
  const apiPathnameRegex = RegExp(`^/api/(?!auth|login).*$`, "i");
  const token = await getToken({ req });
  const isAuthenticated = !!token;
  const isRestrictedPage = restrictedPathnameRegex.test(req.nextUrl.pathname);
  const isApiPage = apiPathnameRegex.test(req.nextUrl.pathname);

  console.log("req.nextUrl", req.nextUrl.pathname);
  console.log("isAuthenticated", isAuthenticated);
  console.log("isRestrictedPage", isRestrictedPage);
  console.log("token", token);
  console.log("isApiPage", isApiPage);

  if (
    isRestrictedPage &&
    (!isAuthenticated ||
      (isAuthenticated &&
        token.userRole !== "ADMIN" &&
        token.userRole !== "USER"))
  ) {
    return NextResponse.redirect(new URL("/api/auth/signin", req.nextUrl));
  }

  if (
    isApiPage &&
    (!isAuthenticated ||
      (isAuthenticated &&
        token.userRole !== "ADMIN" &&
        token.userRole !== "USER")) &&
    req.method !== "GET"
  ) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  if (
    isRestrictedPage &&
    isAuthenticated &&
    (token.role === "admin" || token.role === "user")
  ) {
    return (authMiddleware as any)(req);
  }
}

export const config = {
  // Skip all paths that should not be internationalized
  matcher: ["/((?!_next|.*\\..*).*)"],
};
