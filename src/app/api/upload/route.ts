import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { put } from "@vercel/blob";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File | null;

    if (!file) {
      return NextResponse.json({ success: false, error: "No file uploaded" }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const fileExtension = path.extname(file.name);
    const fileNameWithoutExt = path.basename(file.name, fileExtension);
    const sanitizedFileName = fileNameWithoutExt.replace(/[^a-zA-Z0-9]/g, "-").toLowerCase();
    const uniqueFileName = `${Date.now()}-${sanitizedFileName}${fileExtension}`;

    if (process.env.BLOB_READ_WRITE_TOKEN) {
      try {
        const blob = await put(uniqueFileName, buffer, {
          access: "public",
          contentType: file.type,
        });
        return NextResponse.json({ success: true, url: blob.url });
      } catch (blobError) {
        console.error("Vercel Blob upload failed:", blobError);
        return NextResponse.json({ 
          success: false, 
          error: "Unggah gambar ke Vercel Blob gagal. Silakan periksa log integrasi Vercel Anda." 
        }, { status: 500 });
      }
    }

    if (process.env.VERCEL) {
      return NextResponse.json({ 
        success: false, 
        error: "Vercel Blob tidak terdeteksi. Pastikan Anda telah menghubungkan Vercel Blob di tab Storage dan melakukan redeploy." 
      }, { status: 400 });
    }

    const uploadsDir = path.join(process.cwd(), "public", "uploads");
    if (!fs.existsSync(uploadsDir)) {
      fs.mkdirSync(uploadsDir, { recursive: true });
    }

    const filePath = path.join(uploadsDir, uniqueFileName);
    fs.writeFileSync(filePath, buffer);
    const localUrl = `/uploads/${uniqueFileName}`;

    return NextResponse.json({ success: true, url: localUrl });
  } catch (error) {
    console.error("Upload API error:", error);
    return NextResponse.json({ success: false, error: "Internal server error" }, { status: 500 });
  }
}
