import Navbar from "@/components/partials/Navbar";
import Link from "next/link";
import fs from 'fs';
import path from 'path';

export default function PortfolioPage() {
  const portfolioDir = path.join(process.cwd(), 'public', 'assets', 'portofolio');
  let images: string[] = [];
  try {
    images = fs.readdirSync(portfolioDir).filter(file => /\.(jpg|jpeg|png)$/i.test(file));
  } catch (error) {
    console.error('Failed to read portfolio images:', error);
  }
  return (
    <>
      <Navbar />

      <main className="min-h-screen pb-24">
        {/* Hero Section */}
        <section className="relative h-[530px] flex items-end px-8 pb-20 overflow-hidden bg-primary-container">
          <div className="absolute inset-0 z-0">
            <img 
              className="w-full h-full object-cover opacity-40 mix-blend-overlay" 
              src="/assets/portofolio/img181.jpg"
              alt="Engineering Portfolio Hero"
            />
          </div>
          <div className="relative z-10 max-w-4xl">
            <p className="font-inter text-xs font-bold uppercase tracking-[0.2em] text-on-primary-container mb-4">Engineering Portfolio</p>
            <h1 className="text-white font-headline text-5xl md:text-7xl font-bold tracking-tight leading-none mb-6">Built for Industrial Integrity.</h1>
            <div className="h-1 w-24 bg-on-tertiary-container"></div>
          </div>
        </section>

        {/* Filter / Stats Bar */}
        <section className="px-8 -translate-y-1/2 flex flex-wrap gap-4 z-20 relative">
          <div className="bg-surface-container-lowest p-6 flex flex-col items-start min-w-[200px] shadow-2xl">
            <span className="text-primary font-headline text-3xl font-extrabold tracking-tight">500+</span>
            <span className="text-secondary text-[10px] font-bold uppercase tracking-widest">Projects Delivered</span>
          </div>
          <div className="bg-surface-container-lowest p-6 flex flex-col items-start min-w-[200px] shadow-2xl">
            <span className="text-primary font-headline text-3xl font-extrabold tracking-tight">12</span>
            <span className="text-secondary text-[10px] font-bold uppercase tracking-widest">Global Partners</span>
          </div>
          <div className="bg-surface-container-lowest p-6 flex flex-col items-start min-w-[200px] shadow-2xl border-l-4 border-primary">
            <span className="text-primary font-headline text-3xl font-extrabold tracking-tight">ISO-9001</span>
            <span className="text-secondary text-[10px] font-bold uppercase tracking-widest">Certified Quality</span>
          </div>
        </section>

        {/* Project Grid */}
        <section className="px-8 mt-12">
          <div className="flex items-center justify-between mb-16">
            <h2 className="font-inter text-4xl font-bold tracking-tight text-primary">Master Gallery</h2>
            <div className="flex gap-4">
              <button className="bg-surface-container-high px-4 py-2 text-secondary text-xs font-bold uppercase tracking-widest hover:bg-secondary hover:text-white transition-all">All</button>
              <button className="px-4 py-2 text-secondary text-xs font-bold uppercase tracking-widest hover:text-primary transition-all">Civil</button>
              <button className="px-4 py-2 text-secondary text-xs font-bold uppercase tracking-widest hover:text-primary transition-all">HVAC</button>
              <button className="px-4 py-2 text-secondary text-xs font-bold uppercase tracking-widest hover:text-primary transition-all">MEP</button>
            </div>
          </div>

          {/* Dynamic Masonry Layout Project Grid */}
          <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4 pb-10">
            {images.map((img, idx) => (
              <div key={idx} className="group relative overflow-hidden bg-surface-container-low rounded-md break-inside-avoid shadow-sm hover:shadow-xl transition-shadow duration-300">
                <img 
                  className="w-full h-auto object-cover transition-all duration-700 group-hover:scale-105 group-hover:shadow-lg" 
                  src={`/assets/portofolio/${img}`}
                  alt={`Portfolio ${idx}`}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 pointer-events-none">
                  <h3 className="text-white text-md font-bold leading-tight">Proyek BTT</h3>
                  <span className="text-white/80 text-[9px] font-bold uppercase tracking-widest mt-1">Selesai</span>
                </div>
              </div>
            ))}
            {images.length === 0 && (
              <div className="py-20 text-center text-secondary w-full block">
                Belum ada gambar portofolio.
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-8 mt-24 mb-12">
          <div className="bg-surface-container-low p-16 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="max-w-2xl">
              <h2 className="text-primary font-headline text-4xl font-bold tracking-tight mb-4">Request Technical Specifications</h2>
              <p className="text-secondary text-lg">In-depth project documentations and engineering reports are available for qualified procurement partners.</p>
            </div>
            <button className="bg-gradient-to-r from-primary to-primary-container text-white px-10 py-5 font-bold uppercase tracking-[0.2em] rounded-none hover:-translate-y-[2px] transition-transform shadow-xl">
              Download Portfolio PDF
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-12 px-8 flex flex-col md:flex-row justify-between items-center bg-[#f2f4f6] dark:bg-slate-900 border-t border-transparent">
        <div className="flex flex-col gap-2 mb-8 md:mb-0">
          <span className="font-bold text-[#00236f] text-lg font-inter">PT. Bahana Totalindo Teknik</span>
          <p className="text-[#505f76] opacity-80 font-inter text-xs tracking-normal">© 2024 PT. Bahana Totalindo Teknik. Industrial Integrity.</p>
        </div>
        <div className="flex gap-8">
          <Link className="text-[#505f76] opacity-80 hover:opacity-100 hover:text-[#00236f] font-inter text-xs tracking-normal transition-colors" href="#">Terms of Service</Link>
          <Link className="text-[#505f76] opacity-80 hover:opacity-100 hover:text-[#00236f] font-inter text-xs tracking-normal transition-colors" href="#">Privacy Policy</Link>
          <Link className="text-[#505f76] opacity-80 hover:opacity-100 hover:text-[#00236f] font-inter text-xs tracking-normal transition-colors" href="#">Technical Specs</Link>
        </div>
      </footer>
    </>
  );
}
