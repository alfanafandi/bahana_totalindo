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
            <img alt="Industrial Construction Site" className="w-full h-full object-cover object-top opacity-50 mix-blend-multiply" src="/assets/portofolio/img337.jpg"/>
          </div>
          <div className="container mx-auto px-8 relative z-10">
            <div className="max-w-4xl space-y-6">
              <h2 className="text-6xl md:text-8xl font-extrabold text-white leading-none tracking-tighter">INTEGRITAS<br/>STRUKTURAL.</h2>
              <p className="text-xl text-primary-fixed-dim max-w-2xl font-light leading-relaxed">
                PT. Bahana Totalindo Teknik menghadirkan solusi rekayasa dan konstruksi dengan tingkat presisi tinggi untuk lanskap industri Indonesia. Kami membangun fondasi untuk masa depan.
              </p>
            </div>
          </div>
        </section>

        {/* Company Profile: Tentang Kami */}
        <section className="py-24 bg-surface px-8">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Left: Description + Services */}
              <div className="lg:col-span-6 space-y-8">
                <label className="text-[0.75rem] font-bold text-primary uppercase tracking-[0.3em]">Tentang Kami</label>
                <h3 className="text-4xl font-bold text-on-surface leading-tight tracking-tight">PT. BAHANA TOTALINDO TEKNIK</h3>
                <div className="h-1 w-24 bg-primary"></div>
                <p className="text-secondary leading-relaxed">
                  merupakan perusahaan yang bergerak dibidang pengadaan barang dan jasa yang meliputi:
                </p>
                <ul className="space-y-3">
                  {[
                    'Kontraktor/Sub. Kontraktor sipil kontruksi (renovasi RS, Pabrik, Farmasi, dll).',
                    'Spesialis Sandwich Panel installer (EPS, PU, PIR).',
                    'Cleanroom HVAC system (MOT, Lab, Lab IVF, isolasi bertekanan negative, dll).',
                    'Interior dan eksterior.',
                    'HVAC, gas medis hospital, mep.',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-green-600 mt-0.5 flex-shrink-0" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                      <span className="text-on-surface font-medium">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 p-6 bg-surface-container-low rounded-xl border-l-4 border-primary">
                  <p className="text-secondary leading-relaxed italic">
                    Seiring dengan perkembangan teknologi dalam bidang perencanaan/pembangunan di mana pengembangan gedung perkantoran, gedung rumah sakit, laboratorium / farmasi serta perluasan gedung lainya yang berkembang pesat di kota-kota seluruh Indonesia.
                  </p>
                </div>
              </div>

              {/* Right: Supporting Equipment */}
              <div className="lg:col-span-6">
                <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8">
                  <h4 className="text-xl font-black text-primary mb-6 uppercase tracking-wide flex items-center gap-2">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>handyman</span>
                    Pendukung Kelengkapan
                  </h4>
                  <ul className="space-y-4">
                    {[
                      'Air Shower (custome bahan SUS & MS Powder Coating)',
                      'Pass box type static & dinamix',
                      'Scrubstation, zink (custome)',
                      'Operating timer digital',
                      'Pintu swing, sliding otomatik (Panel Sandwich & SUS).',
                      'Fan Filter Unit (FFU)',
                      'Filter AHU hospital, farmasi, (custome)',
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="material-symbols-outlined text-primary flex-shrink-0" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                        <span className="text-on-surface font-medium text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <img src="/assets/about/img118.jpg" alt="Workshop BTT" className="w-full h-48 object-cover object-center" />
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
        <section className="py-32 relative overflow-hidden bg-surface-container-lowest">
          <div className="absolute inset-0 opacity-10">
            <img src="/assets/about/img97.jpg" alt="Visi Misi Background" className="w-full h-full object-cover grayscale" />
          </div>
          <div className="absolute top-0 right-0 w-1/2 h-full bg-surface-container-low/50 -skew-x-12 translate-x-24"></div>
          <div className="container mx-auto px-8 relative z-10 grid md:grid-cols-2 gap-16">
            <div className="space-y-6">
              <h3 className="text-6xl font-black text-primary/10 tracking-tighter select-none">VISI</h3>
              <div className="p-10 bg-primary/95 text-white shadow-2xl rounded-xl border border-white/20">
                <p className="text-lg font-medium leading-relaxed">
                  berkomitmen memberikan pelayanan yang terbaik dibidangnya serta Memberikan solusi dan kepuasan pelanggan yang utama.
                </p>
              </div>
            </div>
            <div className="space-y-6 md:mt-24">
              <h3 className="text-6xl font-black text-primary/10 tracking-tighter text-right select-none">MISI</h3>
              <div className="p-10 bg-white shadow-2xl rounded-xl border border-surface-container">
                <p className="text-lg font-medium text-on-surface leading-relaxed">
                  selalu mempertahankan integritas, loyalitas dan dedikasi yang tinggi terhadap pelanggan, serta memberikan layanan jasa yang prima dengan mengedepankan kepuasan pelanggan, hasil yang berkualitas dengan standar yang ada.
                </p>
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
