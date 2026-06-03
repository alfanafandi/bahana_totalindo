import { NextResponse } from "next/server";
import { getDb, saveDb, ServiceItem } from "@/lib/db";
import { checkAuth } from "@/lib/auth";

export async function GET() {
  const db = await getDb();
  return NextResponse.json(db.services);
}

export async function POST(request: Request) {
  if (!(await checkAuth())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const db = await getDb();
    const body = await request.json();
    const { title, description, image, icon } = body;

    if (!title || !description) {
      return NextResponse.json({ error: "Title and description are required" }, { status: 400 });
    }

    const newService: ServiceItem = {
      id: `service-${Date.now()}`,
      title,
      description,
      image: image || "/assets/portofolio/img181.jpg",
      icon: icon || "foundation",
    };

    db.services.push(newService);
    await saveDb(db);

    return NextResponse.json({ success: true, service: newService });
  } catch (error) {
    console.error("POST services error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  if (!(await checkAuth())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const db = await getDb();
    const body = await request.json();
    const { id, title, description, image, icon } = body;

    if (!id || !title || !description) {
      return NextResponse.json({ error: "ID, Title and description are required" }, { status: 400 });
    }

    const index = db.services.findIndex((s) => s.id === id);
    if (index === -1) {
      return NextResponse.json({ error: "Service not found" }, { status: 404 });
    }

    db.services[index] = {
      ...db.services[index],
      title,
      description,
      image: image || db.services[index].image,
      icon: icon || db.services[index].icon,
    };

    await saveDb(db);
    return NextResponse.json({ success: true, service: db.services[index] });
  } catch (error) {
    console.error("PUT services error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
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

    const filteredServices = db.services.filter((s) => s.id !== id);
    if (filteredServices.length === db.services.length) {
      return NextResponse.json({ error: "Service not found" }, { status: 404 });
    }

    db.services = filteredServices;
    await saveDb(db);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("DELETE services error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
