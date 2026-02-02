import { NextResponse } from "next/server";

export function middleware(request: any) {
  console.log("Middleware hit:", request.nextUrl.pathname);
  return NextResponse.next();
}

export const config = {
  matcher: ["/api/:path*"],
};