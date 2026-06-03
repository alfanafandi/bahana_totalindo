import { NextResponse } from "next/server";
import { getDb, saveDb } from "@/lib/db";
import { checkAuth } from "@/lib/auth";

export async function GET() {
  const db = await getDb();
  return NextResponse.json(db.clients);
}

export async function POST(request: Request) {
  if (!(await checkAuth())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const db = await getDb();
    const body = await request.json();
    const { clients } = body;

    if (!Array.isArray(clients)) {
      return NextResponse.json({ error: "Clients must be an array of strings" }, { status: 400 });
    }

    db.clients = clients;
    await saveDb(db);

    return NextResponse.json({ success: true, clients: db.clients });
  } catch (error: any) {
    console.error("POST clients error:", error);
    return NextResponse.json({ error: error.message || "Internal server error" }, { status: 500 });
  }
}
