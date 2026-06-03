"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

// Define Types locally for safety
interface CompanyInfo {
  name: string;
  email: string;
  phone: string;
  whatsapp: string;
  address: string;
  aboutText: string;
  vision: string;
  mission: string;
}

interface StatItem {
  id: string;
  value: string;
  label: string;
}

interface ServiceItem {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: string;
}

interface ProductItem {
  id: string;
  title: string;
  category: string;
  price: string;
  status: string;
  description: string;
  image: string;
}

interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  status: string;
  image: string;
}

interface ToastState {
  show: boolean;
  message: string;
  type: "success" | "error";
}

export default function AdminDashboardPage() {
  const router = useRouter();
  
  // Navigation State
  const [activeTab, setActiveTab] = useState<"overview" | "services" | "products" | "portfolio" | "clients" | "settings">("overview");

  // Core Data State
  const [company, setCompany] = useState<CompanyInfo>({
    name: "", email: "", phone: "", whatsapp: "", address: "", aboutText: "", vision: "", mission: ""
  });
  const [stats, setStats] = useState<StatItem[]>([]);
  const [services, setServices] = useState<ServiceItem[]>([]);
  const [products, setProducts] = useState<ProductItem[]>([]);
  const [portfolio, setPortfolio] = useState<PortfolioItem[]>([]);
  const [clients, setClients] = useState<string[]>([]);
  const [equipment, setEquipment] = useState<string[]>([]);

  // Page States
  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState(false);
  const [toast, setToast] = useState<ToastState>({ show: false, message: "", type: "success" });

  // Modal / Form States
  const [activeEditId, setActiveEditId] = useState<string | null>(null);
  
  // Services form state
  const [serviceForm, setServiceForm] = useState({ title: "", description: "", image: "", icon: "foundation" });
  // Products form state
  const [productForm, setProductForm] = useState({ title: "", category: "Mechanical Series", price: "POA", status: "In Stock", description: "", image: "" });
  // Portfolio form state
  const [portfolioForm, setPortfolioForm] = useState({ title: "", category: "Civil", status: "Selesai", image: "" });
  // Clients input state
  const [newClient, setNewClient] = useState("");
  // Equipment input state
  const [newEquip, setNewEquip] = useState("");

  // Portfolio Smart Layout States
  const [portfolioSearch, setPortfolioSearch] = useState("");
  const [portfolioFilterCategory, setPortfolioFilterCategory] = useState("all");
  const [portfolioPage, setPortfolioPage] = useState(1);
  const [portfolioViewMode, setPortfolioViewMode] = useState<"grid" | "table">("grid");
  const portfolioPerPage = 12;

  // Reset pagination to page 1 on search or filter change
  useEffect(() => {
    setPortfolioPage(1);
  }, [portfolioSearch, portfolioFilterCategory]);

  // Toast Helper
  const showToast = (message: string, type: "success" | "error" = "success") => {
    setToast({ show: true, message, type });
    setTimeout(() => {
      setToast(prev => ({ ...prev, show: false }));
    }, 4000);
  };

  // Fetch all database information
  const fetchData = async () => {
    setLoading(true);
    try {
      // Parallel fetches for speed
      const [resServices, resProducts, resPortfolio, resClients, resCompany] = await Promise.all([
        fetch("/api/services").then(r => r.json()),
        fetch("/api/products").then(r => r.json()),
        fetch("/api/portfolio").then(r => r.json()),
        fetch("/api/clients").then(r => r.json()),
        fetch("/api/company").then(r => r.json()),
      ]);

      setServices(resServices);
      setProducts(resProducts);
      setPortfolio(resPortfolio);
      setClients(resClients);
      setCompany(resCompany.company);
      setStats(resCompany.stats);
      setEquipment(resCompany.equipment);
    } catch (err) {
      console.error("Failed to load dashboard data:", err);
      showToast("Gagal memuat data dari database.", "error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Admin Logout Action
  const handleLogout = async () => {
    if (!confirm("Apakah Anda yakin ingin keluar dari panel admin?")) return;
    try {
      const res = await fetch("/api/admin/logout", { method: "POST" });
      if (res.ok) {
        router.push("/admin/login");
        router.refresh();
      }
    } catch (err) {
      console.error("Logout failed:", err);
      showToast("Gagal keluar. Coba lagi.", "error");
    }
  };

  // Image Upload Helper
  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>, targetForm: "service" | "product" | "portfolio") => {
    const file = e.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    showToast("Mengunggah gambar...", "success");

    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (res.ok && data.success) {
        if (targetForm === "service") {
          setServiceForm(prev => ({ ...prev, image: data.url }));
        } else if (targetForm === "product") {
          setProductForm(prev => ({ ...prev, image: data.url }));
        } else if (targetForm === "portfolio") {
          setPortfolioForm(prev => ({ ...prev, image: data.url }));
        }
        showToast("Gambar berhasil diunggah!", "success");
      } else {
        showToast(data.error || "Gagal mengunggah gambar.", "error");
      }
    } catch (err) {
      console.error("Upload error:", err);
      showToast("Gagal mengunggah gambar karena gangguan koneksi.", "error");
    }
  };

  // ================= SERVICES CRUD =================
  const handleServiceSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setActionLoading(true);
    const isEdit = !!activeEditId;
    const url = "/api/services";
    const method = isEdit ? "PUT" : "POST";
    const payload = isEdit ? { id: activeEditId, ...serviceForm } : serviceForm;

    try {
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        showToast(isEdit ? "Layanan berhasil diperbarui!" : "Layanan baru ditambahkan!");
        setServiceForm({ title: "", description: "", image: "", icon: "foundation" });
        setActiveEditId(null);
        fetchData();
      } else {
        showToast(data.error || "Gagal menyimpan layanan.", "error");
      }
    } catch (err) {
      showToast("Gangguan koneksi.", "error");
    } finally {
      setActionLoading(false);
    }
  };

  const handleEditService = (item: ServiceItem) => {
    setActiveEditId(item.id);
    setServiceForm({
      title: item.title,
      description: item.description,
      image: item.image,
      icon: item.icon,
    });
  };

  const handleDeleteService = async (id: string) => {
    if (!confirm("Apakah Anda yakin ingin menghapus layanan ini?")) return;
    try {
      const res = await fetch(`/api/services?id=${id}`, { method: "DELETE" });
      if (res.ok) {
        showToast("Layanan berhasil dihapus!");
        fetchData();
      } else {
        showToast("Gagal menghapus layanan.", "error");
      }
    } catch (err) {
      showToast("Gangguan koneksi.", "error");
    }
  };

  // ================= PRODUCTS CRUD =================
  const handleProductSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setActionLoading(true);
    const isEdit = !!activeEditId;
    const url = "/api/products";
    const method = isEdit ? "PUT" : "POST";
    const payload = isEdit ? { id: activeEditId, ...productForm } : productForm;

    try {
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        showToast(isEdit ? "Produk berhasil diperbarui!" : "Produk baru ditambahkan!");
        setProductForm({ title: "", category: "Mechanical Series", price: "POA", status: "In Stock", description: "", image: "" });
        setActiveEditId(null);
        fetchData();
      } else {
        showToast(data.error || "Gagal menyimpan produk.", "error");
      }
    } catch (err) {
      showToast("Gangguan koneksi.", "error");
    } finally {
      setActionLoading(false);
    }
  };

  const handleEditProduct = (item: ProductItem) => {
    setActiveEditId(item.id);
    setProductForm({
      title: item.title,
      category: item.category,
      price: item.price,
      status: item.status,
      description: item.description,
      image: item.image,
    });
  };

  const handleDeleteProduct = async (id: string) => {
    if (!confirm("Apakah Anda yakin ingin menghapus produk ini?")) return;
    try {
      const res = await fetch(`/api/products?id=${id}`, { method: "DELETE" });
      if (res.ok) {
        showToast("Produk berhasil dihapus!");
        fetchData();
      } else {
        showToast("Gagal menghapus produk.", "error");
      }
    } catch (err) {
      showToast("Gangguan koneksi.", "error");
    }
  };

  // ================= PORTFOLIO CRUD =================
  const handlePortfolioSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!portfolioForm.image) {
      showToast("Harap pilih atau unggah gambar portofolio terlebih dahulu.", "error");
      return;
    }
    setActionLoading(true);
    const isEdit = !!activeEditId;
    const url = "/api/portfolio";
    const method = isEdit ? "PUT" : "POST";
    const payload = isEdit ? { id: activeEditId, ...portfolioForm } : portfolioForm;

    try {
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        showToast(isEdit ? "Portofolio berhasil diperbarui!" : "Portofolio baru ditambahkan!");
        setPortfolioForm({ title: "", category: "Civil", status: "Selesai", image: "" });
        setActiveEditId(null);
        fetchData();
      } else {
        showToast(data.error || "Gagal menyimpan portofolio.", "error");
      }
    } catch (err) {
      showToast("Gangguan koneksi.", "error");
    } finally {
      setActionLoading(false);
    }
  };

  const handleEditPortfolio = (item: PortfolioItem) => {
    setActiveEditId(item.id);
    setPortfolioForm({
      title: item.title,
      category: item.category,
      status: item.status,
      image: item.image,
    });
  };

  const handleDeletePortfolio = async (id: string) => {
    if (!confirm("Apakah Anda yakin ingin menghapus proyek portofolio ini?")) return;
    try {
      const res = await fetch(`/api/portfolio?id=${id}`, { method: "DELETE" });
      if (res.ok) {
        showToast("Portofolio berhasil dihapus!");
        fetchData();
      } else {
        showToast("Gagal menghapus portofolio.", "error");
      }
    } catch (err) {
      showToast("Gangguan koneksi.", "error");
    }
  };

  // ================= CLIENTS & EQUIPMENT MANAGEMENT =================
  const handleAddClient = async () => {
    if (!newClient.trim()) return;
    const updated = [...clients, newClient.trim()];
    try {
      const res = await fetch("/api/clients", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ clients: updated }),
      });
      if (res.ok) {
        setClients(updated);
        setNewClient("");
        showToast("Klien berhasil ditambahkan!");
      }
    } catch (err) {
      showToast("Gagal menambah klien.", "error");
    }
  };

  const handleRemoveClient = async (index: number) => {
    const updated = clients.filter((_, idx) => idx !== index);
    try {
      const res = await fetch("/api/clients", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ clients: updated }),
      });
      if (res.ok) {
        setClients(updated);
        showToast("Klien berhasil dihapus!");
      }
    } catch (err) {
      showToast("Gagal menghapus klien.", "error");
    }
  };

  const handleAddEquipment = async () => {
    if (!newEquip.trim()) return;
    const updated = [...equipment, newEquip.trim()];
    try {
      const res = await fetch("/api/company", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ equipment: updated }),
      });
      if (res.ok) {
        setEquipment(updated);
        setNewEquip("");
        showToast("Alat pendukung berhasil ditambahkan!");
      }
    } catch (err) {
      showToast("Gagal menambah alat.", "error");
    }
  };

  const handleRemoveEquipment = async (index: number) => {
    const updated = equipment.filter((_, idx) => idx !== index);
    try {
      const res = await fetch("/api/company", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ equipment: updated }),
      });
      if (res.ok) {
        setEquipment(updated);
        showToast("Alat pendukung berhasil dihapus!");
      }
    } catch (err) {
      showToast("Gagal menghapus alat.", "error");
    }
  };

  // ================= COMPANY INFO & STATS =================
  const handleCompanySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setActionLoading(true);
    try {
      const res = await fetch("/api/company", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ company, stats }),
      });
      if (res.ok) {
        showToast("Setelan perusahaan berhasil diperbarui!");
        fetchData();
      } else {
        showToast("Gagal menyimpan setelan.", "error");
      }
    } catch (err) {
      showToast("Gangguan koneksi.", "error");
    } finally {
      setActionLoading(false);
    }
  };

  const handleStatChange = (id: string, value: string) => {
    setStats(prev => prev.map(item => item.id === id ? { ...item, value } : item));
  };

  // Filter and paginate portfolio data
  const filteredPortfolio = portfolio.filter(item => {
    const matchesSearch = !portfolioSearch || item.title.toLowerCase().includes(portfolioSearch.toLowerCase());
    const matchesCategory = portfolioFilterCategory === "all" || item.category === portfolioFilterCategory;
    return matchesSearch && matchesCategory;
  });

  const totalPortfolioPages = Math.max(1, Math.ceil(filteredPortfolio.length / portfolioPerPage));
  const paginatedPortfolio = paginatedPortfolioHelper(filteredPortfolio, portfolioPage, portfolioPerPage);

  function paginatedPortfolioHelper(list: PortfolioItem[], page: number, perPage: number) {
    const start = (page - 1) * perPage;
    return list.slice(start, start + perPage);
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex font-inter">
      {/* Toast Alert */}
      {toast.show && (
        <div className={`fixed bottom-6 right-6 z-[999] px-6 py-4 rounded-xl border shadow-2xl flex items-center gap-3 transition-all duration-300 transform translate-y-0 ${
          toast.type === "success" 
            ? "bg-white border-blue-200 text-blue-600" 
            : "bg-white border-red-200 text-red-650"
        }`}>
          <span className="material-symbols-outlined text-lg">
            {toast.type === "success" ? "check_circle" : "error"}
          </span>
          <span className="text-sm font-semibold">{toast.message}</span>
        </div>
      )}

      {/* Sidebar Navigation */}
      <aside className="w-80 border-r border-slate-200 bg-white p-8 flex flex-col justify-between hidden lg:flex sticky top-0 h-screen">
        <div className="space-y-12">
          {/* Logo Brand */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center">
              <span className="material-symbols-outlined text-white text-xl">architecture</span>
            </div>
            <div>
              <h2 className="text-sm font-black tracking-tighter uppercase text-slate-900 leading-none">BTT TEKNIK</h2>
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1 block">ADMIN CONSOLE</span>
            </div>
          </div>

          {/* Nav Items */}
          <nav className="flex flex-col gap-2">
            {[
              { id: "overview", label: "Overview", icon: "dashboard" },
              { id: "services", label: "Services Jasa", icon: "foundation" },
              { id: "products", label: "Components & Products", icon: "handyman" },
              { id: "portfolio", label: "Master Portfolio", icon: "gallery_thumbnail" },
              { id: "clients", label: "Clients & Equip", icon: "group" },
              { id: "settings", label: "Company Settings", icon: "settings" },
            ].map(item => (
              <button
                key={item.id}
                onClick={() => { setActiveTab(item.id as any); setActiveEditId(null); }}
                className={`flex items-center gap-4 px-4 py-3.5 rounded-lg text-sm font-bold uppercase tracking-wider transition-all duration-200 text-left ${
                  activeTab === item.id 
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/10" 
                    : "text-slate-500 hover:text-slate-900 hover:bg-slate-100"
                }`}
              >
                <span className="material-symbols-outlined text-lg">{item.icon}</span>
                {item.label}
              </button>
            ))}
          </nav>
        </div>

        {/* User Stats & Logout */}
        <div className="space-y-6 pt-6 border-t border-slate-100">
          <div className="flex items-center gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
            <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center">
              <span className="material-symbols-outlined text-slate-500">person</span>
            </div>
            <div>
              <h4 className="text-xs font-black text-slate-800 uppercase">Administrator</h4>
              <span className="text-[10px] text-green-600 font-semibold uppercase tracking-wider">Online</span>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-3 py-3 border-2 border-slate-200 hover:border-red-500 hover:bg-red-50 text-slate-500 hover:text-red-650 rounded-lg text-xs font-bold uppercase tracking-widest transition-all"
          >
            <span className="material-symbols-outlined text-sm">logout</span>
            Keluar Sesi
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 min-h-screen flex flex-col bg-slate-50">
        {/* Top Header */}
        <header className="px-12 py-6 border-b border-slate-200 bg-white/80 backdrop-blur-md sticky top-0 z-40 flex justify-between items-center">
          <div className="flex items-center gap-4 lg:hidden">
            {/* Mobile Brand indicator */}
            <div className="w-8 h-8 rounded bg-blue-600 flex items-center justify-center">
              <span className="material-symbols-outlined text-white text-sm">architecture</span>
            </div>
            <h1 className="text-xs font-black uppercase text-slate-850 tracking-widest">BTT ADMIN</h1>
          </div>
          
          <h1 className="text-lg font-black tracking-tight text-slate-900 uppercase hidden lg:block">
            {activeTab === "overview" && "DASHBOARD OVERVIEW"}
            {activeTab === "services" && "LAYANAN (SERVICES) MANAGER"}
            {activeTab === "products" && "PRODUK & KOMPONEN MANAGER"}
            {activeTab === "portfolio" && "MASTER PORTFOLIO GALLERY"}
            {activeTab === "clients" && "CLIENTS & SUPPORTING EQUIPMENT"}
            {activeTab === "settings" && "COMPANY PROFILE SETTINGS"}
          </h1>

          {/* Quick Info bar */}
          <div className="flex gap-4 items-center">
            <button 
              onClick={fetchData} 
              className="p-2 border border-slate-200 hover:border-slate-350 text-slate-500 hover:text-slate-900 rounded-lg transition-colors flex items-center bg-white"
              title="Refresh Data"
            >
              <span className="material-symbols-outlined text-lg">refresh</span>
            </button>
            <a 
              href="/" 
              target="_blank" 
              className="px-4 py-2 border-2 border-blue-600 hover:bg-blue-600 hover:text-white text-blue-600 rounded-lg text-xs font-bold uppercase tracking-widest transition-all flex items-center gap-2 bg-white"
            >
              <span>Live Site</span>
              <span className="material-symbols-outlined text-sm">open_in_new</span>
            </a>
          </div>
        </header>

        {/* Page Inner Content */}
        <div className="px-12 py-10 max-w-7xl w-full mx-auto flex-grow">
          {loading ? (
            <div className="h-96 flex flex-col items-center justify-center gap-4">
              <div className="w-12 h-12 border-4 border-blue-600/20 border-t-blue-500 rounded-full animate-spin"></div>
              <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Memuat database...</p>
            </div>
          ) : (
            <>
              {/* ================= TAB 1: OVERVIEW ================= */}
              {activeTab === "overview" && (
                <div className="space-y-10">
                  {/* Status Grid Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="bg-white border border-slate-200 p-6 rounded-2xl flex items-center justify-between shadow-sm">
                      <div>
                        <span className="text-[10px] font-black uppercase text-slate-400 tracking-wider">Total Layanan</span>
                        <h3 className="text-3xl font-black text-slate-900 mt-1">{services.length}</h3>
                      </div>
                      <div className="w-12 h-12 bg-blue-50 border border-blue-100 text-blue-600 rounded-xl flex items-center justify-center">
                        <span className="material-symbols-outlined">foundation</span>
                      </div>
                    </div>

                    <div className="bg-white border border-slate-200 p-6 rounded-2xl flex items-center justify-between shadow-sm">
                      <div>
                        <span className="text-[10px] font-black uppercase text-slate-400 tracking-wider">Total Komponen</span>
                        <h3 className="text-3xl font-black text-slate-900 mt-1">{products.length}</h3>
                      </div>
                      <div className="w-12 h-12 bg-indigo-50 border border-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center">
                        <span className="material-symbols-outlined">handyman</span>
                      </div>
                    </div>

                    <div className="bg-white border border-slate-200 p-6 rounded-2xl flex items-center justify-between shadow-sm">
                      <div>
                        <span className="text-[10px] font-black uppercase text-slate-400 tracking-wider">Foto Portofolio</span>
                        <h3 className="text-3xl font-black text-slate-900 mt-1">{portfolio.length}</h3>
                      </div>
                      <div className="w-12 h-12 bg-emerald-55 text-emerald-600 rounded-xl flex items-center justify-center border border-emerald-100">
                        <span className="material-symbols-outlined">gallery_thumbnail</span>
                      </div>
                    </div>

                    <div className="bg-white border border-slate-200 p-6 rounded-2xl flex items-center justify-between shadow-sm">
                      <div>
                        <span className="text-[10px] font-black uppercase text-slate-400 tracking-wider">Mitra Klien</span>
                        <h3 className="text-3xl font-black text-slate-900 mt-1">{clients.length}</h3>
                      </div>
                      <div className="w-12 h-12 bg-amber-50 border border-amber-100 text-amber-600 rounded-xl flex items-center justify-center">
                        <span className="material-symbols-outlined">group</span>
                      </div>
                    </div>
                  </div>

                  {/* Company Quick Glance card */}
                  <div className="bg-white border border-slate-200 rounded-2xl p-8 grid md:grid-cols-2 gap-8 items-center shadow-sm">
                    <div>
                      <span className="text-blue-600 font-bold uppercase tracking-widest text-[10px]">Identitas Perusahaan</span>
                      <h2 className="text-2xl font-black text-slate-900 tracking-tight mt-2 uppercase">{company.name}</h2>
                      <p className="text-slate-600 text-sm leading-relaxed mt-4">{company.aboutText}</p>
                      
                      <div className="grid grid-cols-2 gap-6 mt-8">
                        <div>
                          <span className="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">WhatsApp</span>
                          <span className="text-sm font-semibold text-slate-800">+{company.whatsapp}</span>
                        </div>
                        <div>
                          <span className="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Telepon Kantor</span>
                          <span className="text-sm font-semibold text-slate-800">{company.phone}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 space-y-4">
                      <h4 className="text-xs font-black uppercase text-slate-800 tracking-widest border-b border-slate-200 pb-3">Statistik Halaman Utama</h4>
                      <div className="space-y-4">
                        {stats.map(item => (
                          <div key={item.id} className="flex justify-between items-center text-xs">
                            <span className="text-slate-500 font-semibold">{item.label}</span>
                            <span className="bg-white border border-slate-200 px-3 py-1 text-slate-800 font-bold tracking-tight rounded">{item.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* ================= TAB 2: SERVICES ================= */}
              {activeTab === "services" && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                  {/* Left Form */}
                  <div className="lg:col-span-5 bg-white border border-slate-200 p-8 rounded-2xl sticky top-28 shadow-sm">
                    <h3 className="text-md font-black text-slate-950 uppercase mb-6 tracking-wide">
                      {activeEditId ? "EDIT LAYANAN" : "TAMBAH LAYANAN BARU"}
                    </h3>
                    <form onSubmit={handleServiceSubmit} className="space-y-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase text-slate-500 tracking-wider">Nama Layanan (Title)</label>
                        <input
                          type="text"
                          required
                          value={serviceForm.title}
                          onChange={(e) => setServiceForm({ ...serviceForm, title: e.target.value })}
                          placeholder="Contoh: HVAC Installation"
                          className="w-full bg-white border border-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-lg px-4 py-3 text-sm text-slate-800 outline-none"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase text-slate-500 tracking-wider">Deskripsi Singkat</label>
                        <textarea
                          required
                          rows={4}
                          value={serviceForm.description}
                          onChange={(e) => setServiceForm({ ...serviceForm, description: e.target.value })}
                          placeholder="Jelaskan spesifikasi pengerjaan layanan..."
                          className="w-full bg-white border border-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-lg px-4 py-3 text-sm text-slate-800 outline-none resize-none"
                        ></textarea>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="text-[10px] font-black uppercase text-slate-500 tracking-wider">Icon Material</label>
                          <select
                            value={serviceForm.icon}
                            onChange={(e) => setServiceForm({ ...serviceForm, icon: e.target.value })}
                            className="w-full bg-white border border-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-lg px-4 py-3 text-sm text-slate-800 outline-none"
                          >
                            <option value="foundation">Foundation (Sipil)</option>
                            <option value="electric_bolt">Bolt (MEP)</option>
                            <option value="ac_unit">HVAC (Tata Udara)</option>
                            <option value="format_paint">Paint (Interior)</option>
                            <option value="construction">Tools</option>
                            <option value="engineering">Helmet</option>
                          </select>
                        </div>

                        <div className="space-y-2">
                          <label className="text-[10px] font-black uppercase text-slate-500 tracking-wider">Gambar Cover</label>
                          <label className="w-full bg-slate-50 border border-slate-250 hover:bg-slate-100 rounded-lg px-4 py-3 text-xs text-slate-650 cursor-pointer flex items-center justify-center gap-2 font-bold uppercase transition-colors">
                            <span className="material-symbols-outlined text-sm">upload</span>
                            <span>PILIH FOTO</span>
                            <input
                              type="file"
                              accept="image/*"
                              onChange={(e) => handleImageUpload(e, "service")}
                              className="hidden"
                            />
                          </label>
                        </div>
                      </div>

                      {serviceForm.image && (
                        <div className="relative rounded-lg overflow-hidden border border-slate-200 h-40">
                          <img src={serviceForm.image} alt="Preview" className="w-full h-full object-cover" />
                          <button 
                            type="button"
                            onClick={() => setServiceForm(prev => ({ ...prev, image: "" }))}
                            className="absolute top-2 right-2 bg-red-500 hover:bg-red-650 text-white rounded-full p-1"
                          >
                            <span className="material-symbols-outlined text-xs">close</span>
                          </button>
                        </div>
                      )}

                      <div className="flex gap-4 pt-2">
                        {activeEditId && (
                          <button
                            type="button"
                            onClick={() => {
                              setActiveEditId(null);
                              setServiceForm({ title: "", description: "", image: "", icon: "foundation" });
                            }}
                            className="w-1/3 border-2 border-slate-200 hover:bg-slate-100 text-slate-500 rounded-lg text-xs font-bold uppercase tracking-wider py-4 transition-colors"
                          >
                            BATAL
                          </button>
                        )}
                        <button
                          type="submit"
                          disabled={actionLoading}
                          className="flex-1 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 text-white rounded-lg text-xs font-bold uppercase tracking-[0.2em] py-4 transition-all"
                        >
                          {actionLoading ? "MENYIMPAN..." : "SIMPAN LAYANAN"}
                        </button>
                      </div>
                    </form>
                  </div>

                  {/* Right List Grid */}
                  <div className="lg:col-span-7 space-y-4">
                    {services.map(item => (
                      <div key={item.id} className="bg-white border border-slate-200 rounded-2xl p-6 flex gap-6 items-center shadow-sm">
                        <div className="w-24 h-24 rounded-xl overflow-hidden bg-slate-100 border border-slate-200 flex-shrink-0">
                          <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-grow">
                          <div className="flex items-center gap-2 text-slate-400">
                            <span className="material-symbols-outlined text-sm">{item.icon}</span>
                            <span className="text-[10px] font-bold uppercase tracking-wider">{item.icon}</span>
                          </div>
                          <h4 className="text-md font-black text-slate-900 uppercase mt-1">{item.title}</h4>
                          <p className="text-slate-650 text-xs mt-2 line-clamp-2">{item.description}</p>
                        </div>
                        <div className="flex flex-col gap-2">
                          <button
                            onClick={() => handleEditService(item)}
                            className="p-2 bg-slate-50 border border-slate-200 hover:border-blue-500 text-slate-500 hover:text-blue-600 rounded-lg transition-colors flex items-center justify-center"
                            title="Edit"
                          >
                            <span className="material-symbols-outlined text-sm">edit</span>
                          </button>
                          <button
                            onClick={() => handleDeleteService(item.id)}
                            className="p-2 bg-slate-50 border border-slate-200 hover:border-red-500 text-slate-500 hover:text-red-600 rounded-lg transition-colors flex items-center justify-center"
                            title="Delete"
                          >
                            <span className="material-symbols-outlined text-sm">delete</span>
                          </button>
                        </div>
                      </div>
                    ))}
                    {services.length === 0 && (
                      <p className="text-center text-slate-400 py-16 text-sm">Belum ada data layanan.</p>
                    )}
                  </div>
                </div>
              )}

              {/* ================= TAB 3: PRODUCTS ================= */}
              {activeTab === "products" && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                  {/* Left Form */}
                  <div className="lg:col-span-5 bg-white border border-slate-200 p-8 rounded-2xl sticky top-28 shadow-sm">
                    <h3 className="text-md font-black text-slate-950 uppercase mb-6 tracking-wide">
                      {activeEditId ? "EDIT PRODUK" : "TAMBAH PRODUK BARU"}
                    </h3>
                    <form onSubmit={handleProductSubmit} className="space-y-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase text-slate-500 tracking-wider">Nama Produk (Title)</label>
                        <input
                          type="text"
                          required
                          value={productForm.title}
                          onChange={(e) => setProductForm({ ...productForm, title: e.target.value })}
                          placeholder="Contoh: Industrial Turbine V2"
                          className="w-full bg-white border border-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-lg px-4 py-3 text-sm text-slate-800 outline-none"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="text-[10px] font-black uppercase text-slate-500 tracking-wider">Kategori (Series)</label>
                          <input
                            type="text"
                            required
                            value={productForm.category}
                            onChange={(e) => setProductForm({ ...productForm, category: e.target.value })}
                            placeholder="Contoh: Mechanical Series"
                            className="w-full bg-white border border-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-lg px-4 py-3 text-sm text-slate-800 outline-none"
                          />
                        </div>

                        <div className="space-y-2">
                          <label className="text-[10px] font-black uppercase text-slate-500 tracking-wider">Status Stok</label>
                          <select
                            value={productForm.status}
                            onChange={(e) => setProductForm({ ...productForm, status: e.target.value })}
                            className="w-full bg-white border border-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-lg px-4 py-3 text-sm text-slate-800 outline-none"
                          >
                            <option value="In Stock">In Stock</option>
                            <option value="Out of Stock">Out of Stock</option>
                            <option value="Indent">Indent</option>
                            <option value="Pre-Order">Pre-Order</option>
                          </select>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="text-[10px] font-black uppercase text-slate-500 tracking-wider">Harga (e.g. POA / IDR)</label>
                          <input
                            type="text"
                            required
                            value={productForm.price}
                            onChange={(e) => setProductForm({ ...productForm, price: e.target.value })}
                            placeholder="Contoh: POA"
                            className="w-full bg-white border border-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-lg px-4 py-3 text-sm text-slate-800 outline-none"
                          />
                        </div>

                        <div className="space-y-2">
                          <label className="text-[10px] font-black uppercase text-slate-500 tracking-wider">Gambar Produk</label>
                          <label className="w-full bg-slate-50 border border-slate-250 hover:bg-slate-100 rounded-lg px-4 py-3 text-xs text-slate-650 cursor-pointer flex items-center justify-center gap-2 font-bold uppercase transition-colors">
                            <span className="material-symbols-outlined text-sm">upload</span>
                            <span>PILIH FOTO</span>
                            <input
                              type="file"
                              accept="image/*"
                              onChange={(e) => handleImageUpload(e, "product")}
                              className="hidden"
                            />
                          </label>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase text-slate-500 tracking-wider">Deskripsi Singkat</label>
                        <textarea
                          required
                          rows={3}
                          value={productForm.description}
                          onChange={(e) => setProductForm({ ...productForm, description: e.target.value })}
                          placeholder="Jelaskan kegunaan/spesifikasi komponen secara detail..."
                          className="w-full bg-white border border-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-lg px-4 py-3 text-sm text-slate-800 outline-none resize-none"
                        ></textarea>
                      </div>

                      {productForm.image && (
                        <div className="relative rounded-lg overflow-hidden border border-slate-200 h-40">
                          <img src={productForm.image} alt="Preview" className="w-full h-full object-cover" />
                          <button 
                            type="button"
                            onClick={() => setProductForm(prev => ({ ...prev, image: "" }))}
                            className="absolute top-2 right-2 bg-red-500 hover:bg-red-650 text-white rounded-full p-1"
                          >
                            <span className="material-symbols-outlined text-xs">close</span>
                          </button>
                        </div>
                      )}

                      <div className="flex gap-4 pt-2">
                        {activeEditId && (
                          <button
                            type="button"
                            onClick={() => {
                              setActiveEditId(null);
                              setProductForm({ title: "", category: "Mechanical Series", price: "POA", status: "In Stock", description: "", image: "" });
                            }}
                            className="w-1/3 border-2 border-slate-200 hover:bg-slate-100 text-slate-500 rounded-lg text-xs font-bold uppercase tracking-wider py-4 transition-colors"
                          >
                            BATAL
                          </button>
                        )}
                        <button
                          type="submit"
                          disabled={actionLoading}
                          className="flex-1 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 text-white rounded-lg text-xs font-bold uppercase tracking-[0.2em] py-4 transition-all"
                        >
                          {actionLoading ? "MENYIMPAN..." : "SIMPAN PRODUK"}
                        </button>
                      </div>
                    </form>
                  </div>

                  {/* Right List Grid */}
                  <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {products.map(item => (
                      <div key={item.id} className="bg-white border border-slate-200 rounded-2xl overflow-hidden flex flex-col justify-between shadow-sm">
                        <div>
                          <div className="h-44 bg-slate-100 relative">
                            <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                            <span className="absolute top-3 right-3 bg-blue-600 text-white text-[9px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">{item.status}</span>
                          </div>
                          <div className="p-6">
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{item.category}</span>
                            <h4 className="text-sm font-black text-slate-900 uppercase mt-1 leading-tight">{item.title}</h4>
                            <p className="text-slate-600 text-xs mt-3 leading-relaxed line-clamp-2">{item.description}</p>
                          </div>
                        </div>
                        <div className="px-6 pb-6 pt-2 border-t border-slate-100 flex justify-between items-center">
                          <span className="text-xs font-bold text-blue-600">Harga: {item.price}</span>
                          <div className="flex gap-2">
                            <button
                              onClick={() => handleEditProduct(item)}
                              className="p-2 bg-slate-50 border border-slate-200 hover:border-blue-500 text-slate-500 hover:text-blue-600 rounded-lg transition-colors flex items-center justify-center"
                            >
                              <span className="material-symbols-outlined text-xs">edit</span>
                            </button>
                            <button
                              onClick={() => handleDeleteProduct(item.id)}
                              className="p-2 bg-slate-50 border border-slate-200 hover:border-red-500 text-slate-500 hover:text-red-600 rounded-lg transition-colors flex items-center justify-center"
                            >
                              <span className="material-symbols-outlined text-xs">delete</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                    {products.length === 0 && (
                      <p className="text-center text-slate-400 py-16 text-sm col-span-2">Belum ada data produk.</p>
                    )}
                  </div>
                </div>
              )}

              {/* ================= TAB 4: PORTFOLIO ================= */}
              {activeTab === "portfolio" && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                  {/* Left Form */}
                  <div className={`lg:col-span-5 bg-white border p-8 rounded-2xl sticky top-28 shadow-sm transition-all duration-300 ${
                    activeEditId ? "border-blue-500 ring-2 ring-blue-500/10" : "border-slate-200"
                  }`}>
                    <h3 className="text-md font-black text-slate-950 uppercase mb-6 tracking-wide flex items-center justify-between">
                      <span>{activeEditId ? "EDIT PORTOFOLIO" : "TAMBAH PROYEK BARU"}</span>
                      {activeEditId && (
                        <span className="text-[10px] bg-blue-50 text-blue-600 px-2.5 py-1 rounded font-bold uppercase tracking-wider animate-pulse">
                          Edit Mode
                        </span>
                      )}
                    </h3>
                    <form onSubmit={handlePortfolioSubmit} className="space-y-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase text-slate-500 tracking-wider">Nama Proyek (Title)</label>
                        <input
                          type="text"
                          required
                          value={portfolioForm.title}
                          onChange={(e) => setPortfolioForm({ ...portfolioForm, title: e.target.value })}
                          placeholder="Contoh: Pemasangan MOT Ruang Isolasi"
                          className="w-full bg-white border border-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-lg px-4 py-3 text-sm text-slate-800 outline-none"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="text-[10px] font-black uppercase text-slate-500 tracking-wider">Kategori Bidang</label>
                          <select
                            value={portfolioForm.category}
                            onChange={(e) => setPortfolioForm({ ...portfolioForm, category: e.target.value })}
                            className="w-full bg-white border border-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-lg px-4 py-3 text-sm text-slate-800 outline-none"
                          >
                            <option value="Civil">Civil Construction</option>
                            <option value="MEP">MEP Engineering</option>
                            <option value="HVAC">HVAC Solutions</option>
                            <option value="Interior">Interior Design</option>
                          </select>
                        </div>

                        <div className="space-y-2">
                          <label className="text-[10px] font-black uppercase text-slate-500 tracking-wider">Status Proyek</label>
                          <input
                            type="text"
                            required
                            value={portfolioForm.status}
                            onChange={(e) => setPortfolioForm({ ...portfolioForm, status: e.target.value })}
                            placeholder="Contoh: Selesai / 80%"
                            className="w-full bg-white border border-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-lg px-4 py-3 text-sm text-slate-800 outline-none"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase text-slate-500 tracking-wider">Foto Proyek</label>
                        <label className="w-full bg-slate-50 border border-slate-250 hover:bg-slate-100 rounded-lg px-4 py-3 text-xs text-slate-650 cursor-pointer flex items-center justify-center gap-2 font-bold uppercase transition-colors">
                          <span className="material-symbols-outlined text-sm">upload</span>
                          <span>UNGGAH FOTO PROYEK</span>
                          <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => handleImageUpload(e, "portfolio")}
                            className="hidden"
                          />
                        </label>
                      </div>

                      {portfolioForm.image && (
                        <div className="relative rounded-lg overflow-hidden border border-slate-200 h-48">
                          <img 
                            src={portfolioForm.image.startsWith("/") ? portfolioForm.image : `/assets/portofolio/${portfolioForm.image}`} 
                            alt="Preview" 
                            className="w-full h-full object-cover" 
                          />
                          <button 
                            type="button"
                            onClick={() => setPortfolioForm(prev => ({ ...prev, image: "" }))}
                            className="absolute top-2 right-2 bg-red-500 hover:bg-red-650 text-white rounded-full p-1"
                          >
                            <span className="material-symbols-outlined text-xs">close</span>
                          </button>
                        </div>
                      )}

                      <div className="flex gap-4 pt-2">
                        {activeEditId && (
                          <button
                            type="button"
                            onClick={() => {
                              setActiveEditId(null);
                              setPortfolioForm({ title: "", category: "Civil", status: "Selesai", image: "" });
                            }}
                            className="w-1/3 border-2 border-slate-200 hover:bg-slate-100 text-slate-500 rounded-lg text-xs font-bold uppercase tracking-wider py-4 transition-colors"
                          >
                            BATAL
                          </button>
                        )}
                        <button
                          type="submit"
                          disabled={actionLoading}
                          className="flex-1 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 text-white rounded-lg text-xs font-bold uppercase tracking-[0.2em] py-4 transition-all"
                        >
                          {actionLoading ? "MENYIMPAN..." : "SIMPAN PROYEK"}
                        </button>
                      </div>
                    </form>
                  </div>

                  {/* Right List Grid with Smart Layout */}
                  <div className="lg:col-span-7">
                    {/* Control Panel */}
                    <div className="flex flex-col md:flex-row gap-4 mb-6 items-center justify-between bg-white border border-slate-200 p-4 rounded-2xl shadow-sm">
                      {/* Search and Filter */}
                      <div className="flex flex-1 flex-col sm:flex-row gap-2 w-full">
                        <div className="relative flex-1">
                          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">search</span>
                          <input
                            type="text"
                            placeholder="Cari nama proyek..."
                            value={portfolioSearch}
                            onChange={(e) => setPortfolioSearch(e.target.value)}
                            className="w-full bg-white border border-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-lg pl-9 pr-4 py-2 text-xs text-slate-800 outline-none transition-all"
                          />
                        </div>
                        <select
                          value={portfolioFilterCategory}
                          onChange={(e) => setPortfolioFilterCategory(e.target.value)}
                          className="bg-white border border-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-lg px-3 py-2 text-xs text-slate-705 outline-none transition-all cursor-pointer"
                        >
                          <option value="all">Semua Kategori</option>
                          <option value="Civil">Civil Construction</option>
                          <option value="MEP">MEP Engineering</option>
                          <option value="HVAC">HVAC Solutions</option>
                          <option value="Interior">Interior Design</option>
                        </select>
                      </div>

                      {/* View Mode Toggle and Count */}
                      <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end border-t md:border-t-0 pt-3 md:pt-0 border-slate-100">
                        <span className="text-[10px] font-bold text-slate-400 uppercase whitespace-nowrap">
                          {filteredPortfolio.length} Proyek
                        </span>
                        <div className="flex border border-slate-200 rounded-lg overflow-hidden bg-white">
                          <button
                            onClick={() => setPortfolioViewMode("grid")}
                            className={`p-2 flex items-center justify-center transition-colors ${
                              portfolioViewMode === "grid" 
                                ? "bg-blue-600 text-white" 
                                : "text-slate-400 hover:text-slate-700 hover:bg-slate-50"
                            }`}
                            title="Grid View"
                          >
                            <span className="material-symbols-outlined text-sm">grid_view</span>
                          </button>
                          <button
                            onClick={() => setPortfolioViewMode("table")}
                            className={`p-2 flex items-center justify-center transition-colors ${
                              portfolioViewMode === "table" 
                                
                                ? "bg-blue-600 text-white" 
                                : "text-slate-400 hover:text-slate-700 hover:bg-slate-50"
                            }`}
                            title="Table View"
                          >
                            <span className="material-symbols-outlined text-sm">table_rows</span>
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Data Display */}
                    {paginatedPortfolio.length === 0 ? (
                      <div className="bg-white border border-slate-200 rounded-2xl p-12 text-center shadow-sm">
                        <span className="material-symbols-outlined text-slate-300 text-4xl mb-2">search_off</span>
                        <p className="text-slate-450 text-xs font-bold uppercase tracking-wider">Tidak ada data portofolio ditemukan</p>
                        <p className="text-slate-400 text-xs mt-1">Coba sesuaikan kata kunci pencarian atau kategori filter Anda.</p>
                      </div>
                    ) : portfolioViewMode === "grid" ? (
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {paginatedPortfolio.map(item => (
                          <div 
                            key={item.id} 
                            className={`bg-white border rounded-xl overflow-hidden shadow-sm flex flex-col justify-between transition-all duration-200 ${
                              activeEditId === item.id 
                                ? "border-blue-500 ring-2 ring-blue-500/20" 
                                : "border-slate-200 hover:shadow-md hover:border-slate-300"
                            }`}
                          >
                            <div>
                              <div className="h-32 bg-slate-50 relative overflow-hidden">
                                <img 
                                  src={item.image.startsWith("/") ? item.image : `/assets/portofolio/${item.image}`} 
                                  alt={item.title} 
                                  className="w-full h-full object-cover" 
                                />
                                <span className="absolute top-2 left-2 text-[8px] font-bold bg-blue-600 text-white px-2 py-0.5 rounded uppercase tracking-wider">
                                  {item.category}
                                </span>
                              </div>
                              <div className="p-3.5">
                                <h5 className="text-slate-800 text-xs font-bold leading-snug line-clamp-2 uppercase" title={item.title}>
                                  {item.title}
                                </h5>
                                <span className="text-[9px] text-slate-400 font-semibold tracking-wider uppercase block mt-1">
                                  Status: {item.status}
                                </span>
                              </div>
                            </div>
                            <div className="px-3.5 pb-3.5 pt-2 border-t border-slate-100 flex gap-2">
                              <button
                                onClick={() => handleEditPortfolio(item)}
                                className={`flex-1 py-1.5 px-2 text-[9px] font-bold uppercase rounded border transition-all flex items-center justify-center gap-1 ${
                                  activeEditId === item.id
                                    ? "bg-blue-600 border-blue-600 text-white"
                                    : "bg-slate-50 hover:bg-blue-50 border-slate-200 hover:border-blue-200 text-slate-600 hover:text-blue-600"
                                }`}
                              >
                                <span className="material-symbols-outlined text-[10px]">{activeEditId === item.id ? "check" : "edit"}</span>
                                <span>{activeEditId === item.id ? "Mengedit" : "Edit"}</span>
                              </button>
                              <button
                                onClick={() => handleDeletePortfolio(item.id)}
                                className="py-1.5 px-2 bg-slate-50 hover:bg-red-50 border border-slate-200 hover:border-red-200 text-slate-500 hover:text-red-600 rounded transition-all flex items-center justify-center"
                                title="Hapus Proyek"
                              >
                                <span className="material-symbols-outlined text-[10px]">delete</span>
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
                        <div className="overflow-x-auto">
                          <table className="w-full text-left border-collapse">
                            <thead>
                              <tr className="bg-slate-50 border-b border-slate-200 text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                                <th className="p-4 w-16 text-center">Foto</th>
                                <th className="p-4">Nama Proyek</th>
                                <th className="p-4">Kategori</th>
                                <th className="p-4">Status</th>
                                <th className="p-4 text-right">Aksi</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100 text-xs">
                              {paginatedPortfolio.map(item => (
                                <tr 
                                  key={item.id} 
                                  className={`hover:bg-slate-50/50 transition-colors ${
                                    activeEditId === item.id ? "bg-blue-50/40" : ""
                                  }`}
                                >
                                  <td className="p-4">
                                    <div className="w-12 h-12 rounded overflow-hidden bg-slate-100 border border-slate-200 mx-auto">
                                      <img 
                                        src={item.image.startsWith("/") ? item.image : `/assets/portofolio/${item.image}`} 
                                        alt={item.title} 
                                        className="w-full h-full object-cover" 
                                      />
                                    </div>
                                  </td>
                                  <td className="p-4 font-bold text-slate-800 uppercase">{item.title}</td>
                                  <td className="p-4">
                                    <span className="text-[9px] font-bold bg-slate-100 border border-slate-200 px-2 py-0.5 rounded uppercase tracking-wider text-slate-600">
                                      {item.category}
                                    </span>
                                  </td>
                                  <td className="p-4 font-semibold text-slate-500 uppercase">{item.status}</td>
                                  <td className="p-4 text-right">
                                    <div className="flex gap-2 justify-end">
                                      <button
                                        onClick={() => handleEditPortfolio(item)}
                                        className={`p-1.5 border rounded transition-all flex items-center justify-center ${
                                          activeEditId === item.id
                                            ? "bg-blue-600 border-blue-600 text-white"
                                            : "bg-slate-50 hover:bg-blue-50 border-slate-200 hover:border-blue-200 text-slate-500 hover:text-blue-600"
                                        }`}
                                        title="Edit Proyek"
                                      >
                                        <span className="material-symbols-outlined text-[12px]">{activeEditId === item.id ? "check" : "edit"}</span>
                                      </button>
                                      <button
                                        onClick={() => handleDeletePortfolio(item.id)}
                                        className="p-1.5 bg-slate-50 hover:bg-red-50 border border-slate-200 hover:border-red-200 text-slate-500 hover:text-red-650 rounded transition-all flex items-center justify-center"
                                        title="Hapus Proyek"
                                      >
                                        <span className="material-symbols-outlined text-[12px]">delete</span>
                                      </button>
                                    </div>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    )}

                    {/* Pagination Controls */}
                    {totalPortfolioPages > 1 && (
                      <div className="flex flex-col sm:flex-row items-center justify-between border-t border-slate-200 pt-6 mt-8 gap-4">
                        <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
                          Halaman {portfolioPage} dari {totalPortfolioPages}
                        </span>
                        <div className="flex flex-wrap gap-1">
                          <button
                            onClick={() => setPortfolioPage(p => Math.max(1, p - 1))}
                            disabled={portfolioPage === 1}
                            className="px-3 py-1.5 border border-slate-200 rounded-lg text-xs font-bold text-slate-600 hover:bg-slate-100 disabled:opacity-50 disabled:hover:bg-transparent transition-colors flex items-center gap-1 cursor-pointer"
                          >
                            <span className="material-symbols-outlined text-sm">chevron_left</span>
                            Sebelumnya
                          </button>
                          
                          {/* Generate quick page numbers */}
                          {Array.from({ length: totalPortfolioPages }, (_, i) => i + 1)
                            .filter(p => p === 1 || p === totalPortfolioPages || Math.abs(p - portfolioPage) <= 1)
                            .map((p, index, arr) => {
                              const elements = [];
                              if (index > 0 && p - arr[index - 1] > 1) {
                                elements.push(
                                  <span key={`dots-${p}`} className="px-2 py-1 text-xs text-slate-400 flex items-end">...</span>
                                );
                              }
                              elements.push(
                                <button
                                  key={p}
                                  onClick={() => setPortfolioPage(p)}
                                  className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                                    portfolioPage === p 
                                      ? "bg-blue-600 text-white shadow-md shadow-blue-600/10" 
                                      : "border border-slate-200 text-slate-600 hover:bg-slate-100"
                                  }`}
                                >
                                  {p}
                                </button>
                              );
                              return elements;
                            })}

                          <button
                            onClick={() => setPortfolioPage(p => Math.min(totalPortfolioPages, p + 1))}
                            disabled={portfolioPage === totalPortfolioPages}
                            className="px-3 py-1.5 border border-slate-200 rounded-lg text-xs font-bold text-slate-600 hover:bg-slate-100 disabled:opacity-50 disabled:hover:bg-transparent transition-colors flex items-center gap-1 cursor-pointer"
                          >
                            Selanjutnya
                            <span className="material-symbols-outlined text-sm">chevron_right</span>
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* ================= TAB 5: CLIENTS & EQUIP ================= */}
              {activeTab === "clients" && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  {/* Clients List card */}
                  <div className="bg-white border border-slate-200 p-8 rounded-2xl space-y-6 shadow-sm">
                    <div>
                      <h3 className="text-md font-black text-slate-950 uppercase tracking-wide">MITRA STRATEGIS (CLIENTS)</h3>
                      <p className="text-slate-500 text-xs mt-1">Daftar instansi/pabrik klien yang tampil pada running marquee di halaman utama.</p>
                    </div>

                    <div className="flex gap-3">
                      <input
                        type="text"
                        value={newClient}
                        onChange={(e) => setNewClient(e.target.value)}
                        placeholder="Masukkan nama klien baru..."
                        className="flex-grow bg-white border border-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-lg px-4 py-3 text-sm text-slate-800 outline-none"
                        onKeyDown={(e) => { if (e.key === "Enter") handleAddClient(); }}
                      />
                      <button
                        onClick={handleAddClient}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors"
                      >
                        TAMBAH
                      </button>
                    </div>

                    <div className="h-96 overflow-y-auto border border-slate-200 bg-white rounded-xl p-4 flex flex-wrap gap-2 shadow-inner">
                      {clients.map((client, idx) => (
                        <span key={idx} className="inline-flex items-center gap-2 bg-slate-50 hover:bg-slate-100 text-xs font-semibold px-3.5 py-1.5 rounded-full border border-slate-200 text-slate-700">
                          <span>{client}</span>
                          <button onClick={() => handleRemoveClient(idx)} className="text-slate-400 hover:text-red-500">
                            <span className="material-symbols-outlined text-xs">close</span>
                          </button>
                        </span>
                      ))}
                      {clients.length === 0 && (
                        <p className="text-center text-slate-400 py-16 text-xs w-full">Belum ada data klien.</p>
                      )}
                    </div>
                  </div>

                  {/* Supporting Equipment List card */}
                  <div className="bg-white border border-slate-200 p-8 rounded-2xl space-y-6 shadow-sm">
                    <div>
                      <h3 className="text-md font-black text-slate-950 uppercase tracking-wide">KELENGKAPAN PENDUKUNG (EQUIPMENT)</h3>
                      <p className="text-slate-500 text-xs mt-1">Daftar produk spesifik pendukung (seperti Air Shower, Pass Box) yang tertera pada halaman About.</p>
                    </div>

                    <div className="flex gap-3">
                      <input
                        type="text"
                        value={newEquip}
                        onChange={(e) => setNewEquip(e.target.value)}
                        placeholder="Contoh: Air Shower SUS304..."
                        className="flex-grow bg-white border border-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-lg px-4 py-3 text-sm text-slate-800 outline-none"
                        onKeyDown={(e) => { if (e.key === "Enter") handleAddEquipment(); }}
                      />
                      <button
                        onClick={handleAddEquipment}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors"
                      >
                        TAMBAH
                      </button>
                    </div>

                    <div className="h-96 overflow-y-auto border border-slate-200 bg-white rounded-xl p-4 space-y-2 shadow-inner">
                      {equipment.map((item, idx) => (
                        <div key={idx} className="flex justify-between items-center bg-slate-50 border border-slate-150 hover:bg-slate-100 px-4 py-3 rounded-lg text-xs font-medium">
                          <span className="text-slate-700">{item}</span>
                          <button onClick={() => handleRemoveEquipment(idx)} className="text-slate-400 hover:text-red-500">
                            <span className="material-symbols-outlined text-sm">delete</span>
                          </button>
                        </div>
                      ))}
                      {equipment.length === 0 && (
                        <p className="text-center text-slate-400 py-16 text-xs w-full">Belum ada data alat pendukung.</p>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* ================= TAB 6: SETTINGS ================= */}
              {activeTab === "settings" && (
                <form onSubmit={handleCompanySubmit} className="space-y-10">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    {/* General Company profile Info card */}
                    <div className="bg-white border border-slate-200 p-8 rounded-2xl space-y-6 shadow-sm">
                      <h3 className="text-md font-black text-slate-905 uppercase tracking-wide border-b border-slate-100 pb-3">Profil &amp; Kontak</h3>
                      
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase text-slate-500 tracking-wider">Nama Perusahaan</label>
                        <input
                          type="text"
                          required
                          value={company.name}
                          onChange={(e) => setCompany({ ...company, name: e.target.value })}
                          className="w-full bg-white border border-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-lg px-4 py-3 text-sm text-slate-800 outline-none"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="text-[10px] font-black uppercase text-slate-500 tracking-wider">Email Kontak</label>
                          <input
                            type="email"
                            required
                            value={company.email}
                            onChange={(e) => setCompany({ ...company, email: e.target.value })}
                            className="w-full bg-white border border-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-lg px-4 py-3 text-sm text-slate-800 outline-none"
                          />
                        </div>

                        <div className="space-y-2">
                          <label className="text-[10px] font-black uppercase text-slate-500 tracking-wider">Nomor Telepon Kantor</label>
                          <input
                            type="text"
                            required
                            value={company.phone}
                            onChange={(e) => setCompany({ ...company, phone: e.target.value })}
                            className="w-full bg-white border border-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-lg px-4 py-3 text-sm text-slate-800 outline-none"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase text-slate-500 tracking-wider">Nomor WhatsApp (Direct Link - Mulai dengan 62)</label>
                        <input
                          type="text"
                          required
                          value={company.whatsapp}
                          onChange={(e) => setCompany({ ...company, whatsapp: e.target.value })}
                          placeholder="Contoh: 6281282404353"
                          className="w-full bg-white border border-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-lg px-4 py-3 text-sm text-slate-800 outline-none"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase text-slate-500 tracking-wider">Alamat Lengkap Kantor &amp; Workshop</label>
                        <textarea
                          required
                          rows={3}
                          value={company.address}
                          onChange={(e) => setCompany({ ...company, address: e.target.value })}
                          className="w-full bg-white border border-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-lg px-4 py-3 text-sm text-slate-800 outline-none resize-none"
                        ></textarea>
                      </div>
                    </div>

                    {/* Editorial Text fields (Visi / Misi / About) */}
                    <div className="bg-white border border-slate-200 p-8 rounded-2xl space-y-6 shadow-sm">
                      <h3 className="text-md font-black text-slate-905 uppercase tracking-wide border-b border-slate-100 pb-3">Narasi &amp; Visi Misi</h3>
                      
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase text-slate-500 tracking-wider">Tentang Kami (About Text)</label>
                        <textarea
                          required
                          rows={3}
                          value={company.aboutText}
                          onChange={(e) => setCompany({ ...company, aboutText: e.target.value })}
                          className="w-full bg-white border border-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-lg px-4 py-3 text-sm text-slate-800 outline-none resize-none"
                        ></textarea>
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase text-slate-500 tracking-wider">Visi Perusahaan</label>
                        <textarea
                          required
                          rows={2.5}
                          value={company.vision}
                          onChange={(e) => setCompany({ ...company, vision: e.target.value })}
                          className="w-full bg-white border border-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-lg px-4 py-3 text-sm text-slate-800 outline-none resize-none"
                        ></textarea>
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase text-slate-500 tracking-wider">Misi Perusahaan</label>
                        <textarea
                          required
                          rows={3}
                          value={company.mission}
                          onChange={(e) => setCompany({ ...company, mission: e.target.value })}
                          className="w-full bg-white border border-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-lg px-4 py-3 text-sm text-slate-800 outline-none resize-none"
                        ></textarea>
                      </div>
                    </div>
                  </div>

                  {/* Stats Counter values card */}
                  <div className="bg-white border border-slate-200 p-8 rounded-2xl space-y-6 shadow-sm">
                    <h3 className="text-md font-black text-slate-905 uppercase tracking-wide border-b border-slate-100 pb-3">Statistik Halaman Utama</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {stats.map(item => (
                        <div key={item.id} className="bg-slate-50 border border-slate-200 p-6 rounded-xl space-y-4">
                          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{item.label}</span>
                          <div className="space-y-2">
                            <label className="text-[9px] uppercase tracking-wider text-slate-400 block font-semibold">Nilai Capaian (e.g. 500+ / 15yr)</label>
                            <input
                              type="text"
                              required
                              value={item.value}
                              onChange={(e) => handleStatChange(item.id, e.target.value)}
                              className="w-full bg-white border border-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded px-3 py-2 text-sm text-slate-800 font-bold tracking-tight outline-none"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Save Settings submit button */}
                  <div className="flex justify-end pt-4">
                    <button
                      type="submit"
                      disabled={actionLoading}
                      className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 text-white rounded-lg text-xs font-bold uppercase tracking-[0.2em] px-12 py-5 shadow-xl transition-all"
                    >
                      {actionLoading ? "MENYIMPAN SETELAN..." : "SIMPAN SEMUA PERUBAHAN PROFILE"}
                    </button>
                  </div>
                </form>
              )}
            </>
          )}
        </div>
      </main>
    </div>
  );
}
