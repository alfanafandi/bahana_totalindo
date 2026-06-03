import { NextResponse } from "next/server";
import { getDb, saveDb, PortfolioItem } from "@/lib/db";
import { checkAuth } from "@/lib/auth";

export async function GET() {
  const db = await getDb();
  return NextResponse.json(db.portfolio);
}

export async function POST(request: Request) {
  if (!(await checkAuth())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const db = await getDb();
    const body = await request.json();
    const { title, category, status, image } = body;

    if (!title || !category || !image) {
      return NextResponse.json({ error: "Title, category, and image are required" }, { status: 400 });
    }

    const newPortfolioItem: PortfolioItem = {
      id: `port-${Date.now()}`,
      title,
      category,
      status: status || "Selesai",
      image,
    };

    db.portfolio.push(newPortfolioItem);
    await saveDb(db);

    return NextResponse.json({ success: true, item: newPortfolioItem });
  } catch (error: any) {
    console.error("POST portfolio error:", error);
    return NextResponse.json({ error: error.message || "Internal server error" }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  if (!(await checkAuth())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const db = await getDb();
    const body = await request.json();
    const { id, title, category, status, image } = body;

    if (!id || !title || !category || !image) {
      return NextResponse.json({ error: "ID, Title, Category, and Image are required" }, { status: 400 });
    }

    const index = db.portfolio.findIndex((p) => p.id === id);
    if (index === -1) {
      return NextResponse.json({ error: "Portfolio item not found" }, { status: 404 });
    }

    db.portfolio[index] = {
      ...db.portfolio[index],
      title,
      category,
      status: status || db.portfolio[index].status,
      image,
    };

    await saveDb(db);
    return NextResponse.json({ success: true, item: db.portfolio[index] });
  } catch (error: any) {
    console.error("PUT portfolio error:", error);
    return NextResponse.json({ error: error.message || "Internal server error" }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  if (!(await checkAuth())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const db = await getDb();
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ error: "ID is required" }, { status: 400 });
    }

    const filteredPortfolio = db.portfolio.filter((p) => p.id !== id);
    if (filteredPortfolio.length === db.portfolio.length) {
      return NextResponse.json({ error: "Portfolio item not found" }, { status: 404 });
    }

    db.portfolio = filteredPortfolio;
    await saveDb(db);

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("DELETE portfolio error:", error);
    return NextResponse.json({ error: error.message || "Internal server error" }, { status: 500 });
  }
}
