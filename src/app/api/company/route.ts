import { NextResponse } from "next/server";
import { getDb, saveDb } from "@/lib/db";
import { checkAuth } from "@/lib/auth";

export async function GET() {
  const db = await getDb();
  return NextResponse.json({
    company: db.company,
    stats: db.stats,
    equipment: db.equipment,
  });
}

export async function POST(request: Request) {
  if (!(await checkAuth())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const db = await getDb();
    const body = await request.json();
    const { company, stats, equipment } = body;

    if (company) {
      db.company = {
        ...db.company,
        ...company,
      };
    }

    if (Array.isArray(stats)) {
      db.stats = stats;
    }

    if (Array.isArray(equipment)) {
      db.equipment = equipment;
    }

    await saveDb(db);

    return NextResponse.json({
      success: true,
      company: db.company,
      stats: db.stats,
      equipment: db.equipment,
    });
  } catch (error: any) {
    console.error("POST company error:", error);
    return NextResponse.json({ error: error.message || "Internal server error" }, { status: 500 });
  }
}
