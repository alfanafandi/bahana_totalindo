import { NextResponse } from "next/server";
import { getDb, saveDb, ProductItem } from "@/lib/db";
import { checkAuth } from "@/lib/auth";

export async function GET() {
  const db = await getDb();
  return NextResponse.json(db.products);
}

export async function POST(request: Request) {
  if (!(await checkAuth())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const db = await getDb();
    const body = await request.json();
    const { title, category, price, status, description, image } = body;

    if (!title || !category || !description) {
      return NextResponse.json({ error: "Title, category, and description are required" }, { status: 400 });
    }

    const newProduct: ProductItem = {
      id: `product-${Date.now()}`,
      title,
      category,
      price: price || "POA",
      status: status || "In Stock",
      description,
      image: image || "/assets/services/img44.jpg",
    };

    db.products.push(newProduct);
    await saveDb(db);

    return NextResponse.json({ success: true, product: newProduct });
  } catch (error) {
    console.error("POST products error:", error);
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
    const { id, title, category, price, status, description, image } = body;

    if (!id || !title || !category || !description) {
      return NextResponse.json({ error: "ID, Title, Category, and Description are required" }, { status: 400 });
    }

    const index = db.products.findIndex((p) => p.id === id);
    if (index === -1) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    db.products[index] = {
      ...db.products[index],
      title,
      category,
      price: price || db.products[index].price,
      status: status || db.products[index].status,
      description,
      image: image || db.products[index].image,
    };

    await saveDb(db);
    return NextResponse.json({ success: true, product: db.products[index] });
  } catch (error) {
    console.error("PUT products error:", error);
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

    const filteredProducts = db.products.filter((p) => p.id !== id);
    if (filteredProducts.length === db.products.length) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    db.products = filteredProducts;
    await saveDb(db);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("DELETE products error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
