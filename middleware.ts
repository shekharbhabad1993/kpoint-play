import { NextRequest, NextResponse } from "next/server";

const PUBLIC_PATHS = ["/login", "/api/auth"];
const ADMIN_PREFIX = "/admin";
const PARTNER_PREFIX = "/partner";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Allow public paths and static assets
  if (
    PUBLIC_PATHS.some((p) => pathname.startsWith(p)) ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api/kpoint") ||
    pathname === "/favicon.ico"
  ) {
    return NextResponse.next();
  }

  // Check session cookie
  const sessionCookie = request.cookies.get("kpoint_session");

  if (!sessionCookie?.value) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  let session;
  try {
    session = JSON.parse(sessionCookie.value);
  } catch {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  const role = session.role;

  // Role-based access control
  if (pathname.startsWith(ADMIN_PREFIX) && role !== "admin") {
    return NextResponse.redirect(new URL("/partner/dashboard", request.url));
  }

  if (pathname.startsWith(PARTNER_PREFIX) && role !== "partner") {
    return NextResponse.redirect(new URL("/admin/dashboard", request.url));
  }

  // Redirect root to role-specific dashboard
  if (pathname === "/") {
    const target =
      role === "admin" ? "/admin/dashboard" : "/partner/dashboard";
    return NextResponse.redirect(new URL(target, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for:
     * - _next/static (static files)
     * - _next/image (image optimization)
     * - favicon.ico (favicon)
     */
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
