import { cookies } from "next/headers";

async function hashSHA256(text: string): Promise<string> {
  const msgBuffer = new TextEncoder().encode(text);
  const hashBuffer = await crypto.subtle.digest("SHA-256", msgBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, "0")).join("");
}

export async function checkAuth(): Promise<boolean> {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("admin_token")?.value;
    
    if (!token) return false;
    
    const adminPassword = process.env.ADMIN_PASSWORD || "admin123";
    const expectedToken = await hashSHA256(adminPassword);
    
    return token === expectedToken;
  } catch (error) {
    console.error("Auth check error:", error);
    return false;
  }
}
