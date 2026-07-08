import Navbar from "@/components/partials/Navbar";
import Link from "next/link";
import DocumentCards from "./DocumentCards";

export default function LegalityPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative h-[530px] flex items-center overflow-hidden bg-primary overflow-hidden">
          <div className="absolute inset-0 z-0 bg-primary">
            <img 
              alt="Architectural details" 
              className="w-full h-full object-cover opacity-40 mix-blend-multiply grayscale" 
              src="/assets/about/img104.jpg"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent"></div>
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
            <div className="max-w-3xl">
              <span className="inline-block px-3 py-1 bg-primary-container text-white text-[10px] tracking-[0.3em] font-bold uppercase mb-6 rounded-sm">Regulatory Compliance</span>
              <h2 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white leading-[1.1] tracking-tight mb-6">LEGALITAS &amp; SERTIFIKASI</h2>
              <p className="text-xl text-primary-fixed-dim font-light leading-relaxed max-w-2xl border-l-4 border-primary-container pl-6">
                Menjamin integritas operasional dan standar kualitas tinggi melalui kepatuhan hukum yang menyeluruh serta sertifikasi internasional.
              </p>
            </div>
          </div>
        </section>

        {/* Document Grid Section */}
        <section className="py-24 bg-surface">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
              <div className="max-w-2xl">
                <h3 className="text-sm font-bold tracking-[0.2em] text-secondary uppercase mb-4">Official Documentation</h3>
                <p className="text-3xl font-bold text-primary tracking-tight">Katalog Legalitas Utama</p>
              </div>
              <div className="flex gap-4">
                <button className="flex items-center gap-2 px-6 py-3 bg-surface-container-high text-on-surface-variant font-bold text-sm tracking-widest uppercase hover:bg-surface-container transition-colors">
                  <span className="material-symbols-outlined text-sm">filter_list</span> Filter
                </button>
              </div>
            </div>

            {/* Bento Grid of Documents - Client Component with modal */}
            <DocumentCards />
          </div>
        </section>

        {/* Verification Portal Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="lg:w-1/2">
                <div className="bg-surface-container-low p-12 rounded-lg relative">
                  <span className="material-symbols-outlined text-primary-container text-6xl absolute -top-8 -left-4 bg-white p-2 rounded-full shadow-lg" style={{ fontVariationSettings: "'FILL' 1" }}>shield_with_heart</span>
                  <h3 className="text-3xl font-black text-primary mb-6 leading-tight uppercase">TRANSPARANSI &amp; AUDIT</h3>
                  <p className="text-on-surface-variant leading-relaxed mb-8">
                    Kami memahami pentingnya kepatuhan dalam kemitraan industri skala besar. Semua dokumen legalitas PT. Bahana Totalindo Teknik telah melewati proses verifikasi ketat dan tersedia untuk diaudit oleh tim procurement mitra kami melalui portal verifikasi digital kami.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 p-4 bg-white border-l-4 border-primary">
                      <span className="material-symbols-outlined text-primary">check_circle</span>
                      <span className="font-bold text-sm tracking-wide text-primary">Validitas Dokumen Real-time</span>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-white border-l-4 border-primary">
                      <span className="material-symbols-outlined text-primary">check_circle</span>
                      <span className="font-bold text-sm tracking-wide text-primary">Akses Penuh Audit Kepatuhan</span>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-white border-l-4 border-primary">
                      <span className="material-symbols-outlined text-primary">check_circle</span>
                      <span className="font-bold text-sm tracking-wide text-primary">Standar Mutu Internasional (ISO)</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 space-y-8">
                <h4 className="text-sm font-bold tracking-[0.3em] text-secondary uppercase">Compliance Assistance</h4>
                <p className="text-4xl font-extrabold text-primary leading-tight">Butuh berkas lengkap untuk keperluan tender?</p>
                <p className="text-lg text-secondary leading-relaxed">
                  Kami menyediakan paket kepatuhan penuh (Full Compliance Pack) yang mencakup salinan legalitas terlegalisir, portofolio keuangan, dan dokumen pendukung lainnya.
                </p>
                <div className="pt-4">
                  <Link href="#" className="bg-primary text-white px-10 py-5 font-black text-sm tracking-widest uppercase flex items-center justify-center gap-4 hover:bg-primary-container transition-all shadow-xl">
                    Request Full Compliance Pack
                    <span className="material-symbols-outlined">arrow_forward</span>
                  </Link>
                </div>
                <div className="flex gap-12 pt-8">
                  <div>
                    <p className="text-3xl font-black text-primary">100%</p>
                    <p className="text-xs font-bold text-secondary uppercase tracking-widest">Compliant</p>
                  </div>
                  <div>
                    <p className="text-3xl font-black text-primary">24H</p>
                    <p className="text-xs font-bold text-secondary uppercase tracking-widest">Support Response</p>
                  </div>
                  <div>
                    <p className="text-3xl font-black text-primary">Global</p>
                    <p className="text-xs font-bold text-secondary uppercase tracking-widest">Standards</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Project Stat Block Section */}
        <section className="py-12 bg-surface-container-high">
          <div className="max-w-7xl mx-auto px-10 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="p-8 bg-secondary-container rounded-xl flex flex-col items-center text-center">
              <p className="text-5xl font-black text-primary mb-2">15+</p>
              <p className="text-[10px] font-bold text-on-secondary-container tracking-widest uppercase">Tahun Pengalaman</p>
            </div>
            <div className="p-8 bg-secondary-container rounded-xl flex flex-col items-center text-center">
              <p className="text-5xl font-black text-primary mb-2">500+</p>
              <p className="text-[10px] font-bold text-on-secondary-container tracking-widest uppercase">Proyek Selesai</p>
            </div>
            <div className="p-8 bg-secondary-container rounded-xl flex flex-col items-center text-center">
              <p className="text-5xl font-black text-primary mb-2">0</p>
              <p className="text-[10px] font-bold text-on-secondary-container tracking-widest uppercase">Legal Disputes</p>
            </div>
            <div className="p-8 bg-secondary-container rounded-xl flex flex-col items-center text-center">
              <p className="text-5xl font-black text-primary mb-2">3</p>
              <p className="text-[10px] font-bold text-on-secondary-container tracking-widest uppercase">ISO Certifications</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-slate-900 dark:bg-black text-white w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-12 py-16 max-w-7xl mx-auto">
          <div className="space-y-6">
            <span className="text-white font-bold tracking-tighter text-2xl uppercase">BAHANA TOTALINDO TEKNIK</span>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">Leading general contracting and technical services firm specializing in integrated engineering solutions across Southeast Asia.</p>
            <div className="flex gap-4">
              <Link className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center hover:bg-white hover:text-slate-900 transition-colors" href="#">
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>share</span>
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h5 className="uppercase tracking-widest text-slate-400 font-bold text-xs mb-6">Directory</h5>
              <ul className="space-y-4">
                <li><Link className="text-slate-500 hover:text-white transition-opacity duration-300 text-sm font-medium" href="/">Home</Link></li>
                <li><Link className="text-slate-500 hover:text-white transition-opacity duration-300 text-sm font-medium" href="/about">About</Link></li>
                <li><Link className="text-slate-500 hover:text-white transition-opacity duration-300 text-sm font-medium" href="/services">Services</Link></li>
                <li><Link className="text-slate-500 hover:text-white transition-opacity duration-300 text-sm font-medium" href="/portfolio">Portfolio</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="uppercase tracking-widest text-slate-400 font-bold text-xs mb-6">Company</h5>
              <ul className="space-y-4">
                <li><Link className="text-slate-500 hover:text-white transition-opacity duration-300 text-sm font-medium" href="/legality">Legality</Link></li>
                <li><Link className="text-slate-500 hover:text-white transition-opacity duration-300 text-sm font-medium" href="/contact">Contact</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-12 py-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="uppercase tracking-widest text-slate-400 text-[10px]">© 2024 PT. Bahana Totalindo Teknik. Engineering Excellence.</span>
          <div className="flex gap-8 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
            <Link className="hover:text-white" href="#">Privacy Policy</Link>
            <Link className="hover:text-white" href="#">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </>
  );
}
