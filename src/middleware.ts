import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Helper to hash password using Web Crypto API (supported in Edge Runtime)
async function hashSHA256(text: string): Promise<string> {
  const msgBuffer = new TextEncoder().encode(text);
  const hashBuffer = await crypto.subtle.digest("SHA-256", msgBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, "0")).join("");
}

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  // Protect all paths starting with /admin, except /admin/login
  if (path.startsWith("/admin") && path !== "/admin/login") {
    const adminToken = request.cookies.get("admin_token")?.value;
    const adminPassword = process.env.ADMIN_PASSWORD || "admin123";
    const expectedToken = await hashSHA256(adminPassword);

    if (!adminToken || adminToken !== expectedToken) {
      const loginUrl = new URL("/admin/login", request.url);
      
      // Redirect to login page and clean up any bad cookie
      const response = NextResponse.redirect(loginUrl);
      response.cookies.delete("admin_token");
      return response;
    }
  }

  return NextResponse.next();
}

// Apply middleware only to /admin routes
export const config = {
  matcher: ["/admin/:path*"],
};
