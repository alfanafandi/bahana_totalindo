"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        router.push("/admin");
        router.refresh();
      } else {
        setError(data.error || "Gagal masuk. Silakan coba lagi.");
      }
    } catch (err) {
      console.error("Login error:", err);
      setError("Koneksi bermasalah. Coba lagi.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center relative overflow-hidden px-6 font-inter">
      {/* Decorative Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40 z-0"></div>
      
      {/* Glowing Blob Decoration */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-100 rounded-full blur-[10rem] opacity-75 z-0"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-indigo-100 rounded-full blur-[10rem] opacity-60 z-0"></div>

      {/* Login Card */}
      <div className="relative w-full max-w-md bg-white/80 backdrop-blur-xl border border-slate-200/80 p-8 rounded-2xl shadow-2xl z-10">
        <div className="flex flex-col items-center mb-8">
          <div className="w-16 h-16 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-4">
            <span className="material-symbols-outlined text-blue-600 text-3xl">
              admin_panel_settings
            </span>
          </div>
          <h1 className="text-2xl font-black tracking-tighter text-slate-900 uppercase text-center">
            BTT ADMIN PORTAL
          </h1>
          <p className="text-slate-500 text-xs mt-2 text-center uppercase tracking-widest font-bold">
            PT. BAHANA TOTALINDO TEKNIK
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">
                Sandi Akses
              </label>
              <span className="text-[9px] text-slate-400 font-medium">Default: admin123</span>
            </div>
            <div className="relative">
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                className="w-full bg-white border border-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-lg px-4 py-3.5 text-sm text-slate-900 placeholder-slate-400 outline-none transition-all pr-10"
              />
              <span className="material-symbols-outlined text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 text-lg">
                lock
              </span>
            </div>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-100 text-red-600 text-xs px-4 py-3 rounded-lg flex items-center gap-2">
              <span className="material-symbols-outlined text-sm flex-shrink-0">
                error
              </span>
              <p className="font-semibold">{error}</p>
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-500 disabled:bg-blue-300 disabled:cursor-not-allowed text-white py-4 font-bold uppercase tracking-[0.2em] text-xs rounded-lg shadow-lg hover:shadow-blue-500/20 transition-all flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span>MEMUTUSKAN...</span>
              </>
            ) : (
              <>
                <span>MASUK SEKARANG</span>
                <span className="material-symbols-outlined text-sm">login</span>
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
