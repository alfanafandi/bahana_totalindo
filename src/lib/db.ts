import fs from "fs";
import path from "path";
import { kv } from "@vercel/kv";

export interface CompanyInfo {
  name: string;
  email: string;
  phone: string;
  whatsapp: string;
  address: string;
  aboutText: string;
  vision: string;
  mission: string;
}

export interface StatItem {
  id: string;
  value: string;
  label: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: string;
}

export interface ProductItem {
  id: string;
  title: string;
  category: string;
  price: string;
  status: string;
  description: string;
  image: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  status: string;
  image: string;
}

export interface DatabaseSchema {
  company: CompanyInfo;
  stats: StatItem[];
  services: ServiceItem[];
  products: ProductItem[];
  portfolio: PortfolioItem[];
  clients: string[];
  equipment: string[];
}

const LOCAL_DB_PATH = path.join(process.cwd(), "src", "data", "db.json");
const KV_KEY = "bahana_totalindo_db";

// Helper to check if Vercel KV environment is configured
function isVercelKVActive(): boolean {
  return !!(process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN);
}

// Read local JSON file safely
function readLocalDb(): DatabaseSchema {
  try {
    if (fs.existsSync(LOCAL_DB_PATH)) {
      const dataStr = fs.readFileSync(LOCAL_DB_PATH, "utf8");
      return JSON.parse(dataStr);
    }
  } catch (error) {
    console.error("Error reading local db file, using fallback:", error);
  }
  
  // Return a minimal fallback if file reading completely fails
  return {
    company: { name: "", email: "", phone: "", whatsapp: "", address: "", aboutText: "", vision: "", mission: "" },
    stats: [],
    services: [],
    products: [],
    portfolio: [],
    clients: [],
    equipment: []
  };
}

// Write local JSON file safely
function writeLocalDb(data: DatabaseSchema): void {
  if (process.env.VERCEL) {
    throw new Error("Cannot write to local filesystem on Vercel. Please ensure Vercel KV is connected.");
  }
  try {
    const dir = path.dirname(LOCAL_DB_PATH);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(LOCAL_DB_PATH, JSON.stringify(data, null, 2), "utf8");
  } catch (error) {
    console.error("Error writing to local db file:", error);
  }
}

// Check and auto-populate initial portfolio from directory if database is empty
function populateInitialPortfolioIfEmpty(data: DatabaseSchema): DatabaseSchema {
  if (data.portfolio && data.portfolio.length > 0) {
    return data;
  }
  
  // If portfolio is empty, scan public/assets/portofolio directory
  const portfolioDir = path.join(process.cwd(), "public", "assets", "portofolio");
  try {
    if (fs.existsSync(portfolioDir)) {
      const files = fs.readdirSync(portfolioDir).filter(file => /\.(jpg|jpeg|png)$/i.test(file));
      const initialPortfolio: PortfolioItem[] = files.map((file, idx) => {
        // Distribute categories for visual variety
        const categories = ["Civil", "MEP", "HVAC", "Interior"];
        const category = categories[idx % categories.length];
        
        return {
          id: `port-${idx + 1}`,
          title: `Proyek BTT - ${file.replace(/\.[^/.]+$/, "")}`,
          category: category,
          status: "Selesai",
          image: file
        };
      });
      data.portfolio = initialPortfolio;
      
      // Save it back to storage if it's local
      if (!isVercelKVActive()) {
        writeLocalDb(data);
      }
    }
  } catch (err) {
    console.error("Failed to auto-populate portfolio:", err);
  }
  
  return data;
}

export async function getDb(): Promise<DatabaseSchema> {
  let dbData: DatabaseSchema;
  
  if (isVercelKVActive()) {
    try {
      const data = await kv.get<DatabaseSchema>(KV_KEY);
      if (data) {
        dbData = data;
      } else {
        // Initialize KV with local JSON data if KV is empty
        dbData = readLocalDb();
        await kv.set(KV_KEY, dbData);
      }
    } catch (error) {
      console.error("Vercel KV get error, falling back to local file:", error);
      dbData = readLocalDb();
    }
  } else {
    dbData = readLocalDb();
  }
  
  // Ensure portfolio is populated
  return populateInitialPortfolioIfEmpty(dbData);
}

export async function saveDb(data: DatabaseSchema): Promise<void> {
  if (isVercelKVActive()) {
    try {
      await kv.set(KV_KEY, data);
    } catch (error) {
      console.error("Vercel KV set error:", error);
      if (process.env.VERCEL) {
        throw new Error("Gagal menyimpan data ke Vercel KV. Silakan periksa log integrasi Vercel Anda.");
      }
      writeLocalDb(data);
    }
  } else {
    if (process.env.VERCEL) {
      throw new Error("Vercel KV tidak terdeteksi. Silakan hubungkan Vercel KV di tab Storage pada Vercel Dashboard dan lakukan redeploy.");
    }
    writeLocalDb(data);
  }
}
