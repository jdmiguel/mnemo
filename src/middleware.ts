import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";
import { env } from "@/env.mjs";

export async function middleware(req: NextRequest) {
  const session = await getToken({ req, secret: env.NEXTAUTH_SECRET });

  if (!session) {
    const requestedPage = req.nextUrl.pathname;
    const url = req.nextUrl.clone();
    url.pathname = "/auth/signin";
    url.search = `page=${requestedPage}`;
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/dashboard", "/notes"],
};
