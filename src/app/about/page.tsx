import Navbar from "@/components/partials/Navbar";
import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Hero Section: The Architectural Monolith */}
        <section className="relative h-[707px] flex items-center overflow-hidden bg-primary">
          <div className="absolute inset-0 z-0 bg-primary">
            <img alt="Industrial Construction Site" className="w-full h-full object-cover opacity-30 grayscale mix-blend-multiply" src="/assets/about/img106.jpg"/>
          </div>
          <div className="container mx-auto px-8 relative z-10">
            <div className="max-w-4xl space-y-6">
              <span className="inline-block px-4 py-1 bg-primary-container text-on-primary-container text-[0.75rem] font-bold tracking-[0.2em] uppercase">Est. 1998</span>
              <h2 className="text-6xl md:text-8xl font-extrabold text-white leading-none tracking-tighter">STRUCTURAL<br/>INTEGRITY.</h2>
              <p className="text-xl text-primary-fixed-dim max-w-2xl font-light leading-relaxed">
                PT. Bahana Totalindo Teknik delivers high-precision engineering and construction solutions for Indonesia's industrial landscape. We build the skeleton of the future.
              </p>
            </div>
          </div>
        </section>

        {/* Company Profile: Asymmetric Modular Layout */}
        <section className="py-24 bg-surface px-8">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-5 space-y-8">
                <label className="text-[0.75rem] font-bold text-primary uppercase tracking-[0.3em]">The Blueprint</label>
                <h3 className="text-4xl font-bold text-on-surface leading-tight tracking-tight">Engineering excellence through meticulous site planning and technical precision.</h3>
                <div className="h-1 w-24 bg-primary"></div>
                <p className="text-secondary leading-relaxed">
                  Founded on the principles of mechanical robustness and architectural vision, PT. Bahana Totalindo Teknik has grown into a leader in industrial construction. Our multidisciplinary team bridges the gap between complex engineering requirements and physical execution.
                </p>
              </div>
              <div className="lg:col-span-7 grid grid-cols-2 gap-4">
                <div className="bg-surface-container-low p-8 space-y-4">
                  <span className="material-symbols-outlined text-primary text-4xl" data-icon="precision_manufacturing">precision_manufacturing</span>
                  <h4 className="font-bold text-lg">Mechanical Engineering</h4>
                  <p className="text-sm text-secondary">Precision-built systems designed for heavy industrial throughput and longevity.</p>
                </div>
                <div className="bg-primary text-white p-8 space-y-4 translate-y-8">
                  <span className="material-symbols-outlined text-white text-4xl" data-icon="architecture">architecture</span>
                  <h4 className="font-bold text-lg text-white">Structural Design</h4>
                  <p className="text-sm text-primary-fixed-dim">Developing robust frameworks that withstand extreme environmental conditions.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience: The Project Stat Block */}
        <section className="bg-surface-container-low py-20 px-8">
          <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-start p-8 bg-surface-container-lowest rounded-xl">
              <span className="text-5xl font-black text-primary tracking-tighter">500+</span>
              <span className="text-[0.65rem] font-bold text-secondary uppercase mt-2 tracking-widest">Projects Completed</span>
            </div>
            <div className="flex flex-col items-start p-8 bg-surface-container-lowest rounded-xl">
              <span className="text-5xl font-black text-primary tracking-tighter">25</span>
              <span className="text-[0.65rem] font-bold text-secondary uppercase mt-2 tracking-widest">Years Experience</span>
            </div>
            <div className="flex flex-col items-start p-8 bg-surface-container-lowest rounded-xl">
              <span className="text-5xl font-black text-primary tracking-tighter">12</span>
              <span className="text-[0.65rem] font-bold text-secondary uppercase mt-2 tracking-widest">Global Awards</span>
            </div>
            <div className="flex flex-col items-start p-8 bg-surface-container-lowest rounded-xl">
              <span className="text-5xl font-black text-primary tracking-tighter">0.0</span>
              <span className="text-[0.65rem] font-bold text-secondary uppercase mt-2 tracking-widest">Safety Incidents</span>
            </div>
          </div>
        </section>

        {/* Mission & Vision: Glassmorphism Modules */}
        <section className="py-32 relative overflow-hidden bg-white">
          <div className="absolute inset-0 opacity-20">
            <img src="/assets/about/img97.jpg" alt="Visi Misi Background" className="w-full h-full object-cover grayscale" />
          </div>
          <div className="absolute top-0 right-0 w-1/2 h-full bg-surface-container-low -skew-x-12 translate-x-24"></div>
          <div className="container mx-auto px-8 relative z-10 grid md:grid-cols-2 gap-16">
            <div className="space-y-6">
              <h3 className="text-6xl font-black text-surface-container-highest tracking-tighter select-none">VISI</h3>
              <div className="p-10 bg-primary/95 text-white shadow-2xl rounded-xl border border-white/20">
                <p className="text-lg font-medium leading-relaxed">
                  Menjadi perusahaan konstruksi dan engineering berskala nasional yang terpercaya, profesional, dan inovatif dalam memberikan solusi terbaik untuk setiap proyek skala industri maupun komersial.
                </p>
              </div>
            </div>
            <div className="space-y-6 md:mt-24">
              <h3 className="text-6xl font-black text-surface-container-highest tracking-tighter text-right select-none">MISI</h3>
              <div className="p-10 bg-white/80 backdrop-blur-xl shadow-2xl rounded-xl border border-white/20">
                <ul className="text-lg font-medium text-on-surface leading-relaxed list-disc list-inside space-y-3">
                  <li>Memberikan kualitas kerja standar nasional yang presisi dan aman.</li>
                  <li>Membangun kemitraan jangka panjang berbasis kepercayaan dengan seluruh klien.</li>
                  <li>Mengembangkan SDM engineering yang ahli dan adaptif terhadap teknologi terbaru.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications: Specification Grid */}
        <section className="py-24 bg-surface px-8">
          <div className="container mx-auto">
            <div className="mb-12">
              <h3 className="text-3xl font-bold tracking-tight text-primary">Compliance &amp; Certification</h3>
              <p className="text-secondary mt-2">Verified standards for international industrial operations.</p>
            </div>
            <div className="overflow-hidden bg-surface-container-low rounded-lg">
              <table className="w-full text-left border-collapse">
                <thead className="bg-surface-container-high">
                  <tr>
                    <th className="px-8 py-4 text-[0.75rem] font-bold uppercase tracking-widest text-on-surface">Certification Name</th>
                    <th className="px-8 py-4 text-[0.75rem] font-bold uppercase tracking-widest text-on-surface">Standard Code</th>
                    <th className="px-8 py-4 text-[0.75rem] font-bold uppercase tracking-widest text-on-surface">Valid Until</th>
                    <th className="px-8 py-4 text-[0.75rem] font-bold uppercase tracking-widest text-on-surface text-right">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-surface border-b border-surface-container">
                    <td className="px-8 py-6 font-bold">Quality Management System</td>
                    <td className="px-8 py-6 text-secondary font-mono">ISO 9001:2015</td>
                    <td className="px-8 py-6 text-secondary">Dec 2026</td>
                    <td className="px-8 py-6 text-right"><span className="px-3 py-1 bg-secondary-container text-on-secondary-fixed-variant text-[10px] font-bold rounded-full">ACTIVE</span></td>
                  </tr>
                  <tr className="bg-surface-container-lowest border-b border-surface-container">
                    <td className="px-8 py-6 font-bold">Environmental Management</td>
                    <td className="px-8 py-6 text-secondary font-mono">ISO 14001:2015</td>
                    <td className="px-8 py-6 text-secondary">May 2025</td>
                    <td className="px-8 py-6 text-right"><span className="px-3 py-1 bg-secondary-container text-on-secondary-fixed-variant text-[10px] font-bold rounded-full">ACTIVE</span></td>
                  </tr>
                  <tr className="bg-surface border-b border-surface-container">
                    <td className="px-8 py-6 font-bold">Occupational Health &amp; Safety</td>
                    <td className="px-8 py-6 text-secondary font-mono">ISO 45001:2018</td>
                    <td className="px-8 py-6 text-secondary">Aug 2027</td>
                    <td className="px-8 py-6 text-right"><span className="px-3 py-1 bg-secondary-container text-on-secondary-fixed-variant text-[10px] font-bold rounded-full">ACTIVE</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-8 bg-[#00236f] text-white overflow-hidden relative">
          <div className="absolute inset-0 opacity-20">
            <img alt="Engineering Workshop" className="w-full h-full object-cover mix-blend-luminosity" src="/assets/about/img111.jpg"/>
          </div>
          <div className="container mx-auto relative z-10 text-center space-y-8">
            <h3 className="text-4xl md:text-6xl font-bold tracking-tighter">READY TO BUILD THE IMPOSSIBLE?</h3>
            <p className="max-w-xl mx-auto text-primary-fixed-dim opacity-80">Consult with our lead engineering division for your next large-scale infrastructure project.</p>
            <button className="bg-white text-primary px-12 py-4 font-bold tracking-widest text-sm hover:bg-secondary-fixed transition-all active:scale-95">START CONSULTATION</button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-12 px-8 flex flex-col md:flex-row justify-between items-center bg-[#f2f4f6] dark:bg-slate-900 font-inter text-xs tracking-normal">
        <div className="flex flex-col items-center md:items-start gap-2 mb-6 md:mb-0">
          <span className="font-bold text-[#00236f] text-sm uppercase tracking-tighter">PT. Bahana Totalindo Teknik</span>
          <p className="text-[#505f76] opacity-80">© 2024 PT. Bahana Totalindo Teknik. Industrial Integrity.</p>
        </div>
        <div className="flex gap-8">
          <Link className="text-[#505f76] opacity-80 hover:opacity-100 hover:text-[#00236f] transition-all" href="#">Terms of Service</Link>
          <Link className="text-[#505f76] opacity-80 hover:opacity-100 hover:text-[#00236f] transition-all" href="#">Privacy Policy</Link>
          <Link className="text-[#505f76] opacity-80 hover:opacity-100 hover:text-[#00236f] transition-all" href="#">Technical Specs</Link>
        </div>
      </footer>
    </>
  );
}
