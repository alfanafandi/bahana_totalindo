import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/partials/Navbar";
import { getDb } from "@/lib/db";

export const dynamic = "force-dynamic";

export default async function Home() {
  const db = await getDb();
  const { company, stats, services, clients } = db;

  return (
    <>
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="relative min-h-[795px] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              alt="Industrial Construction"
              className="w-full h-full object-cover object-top"
              src="/assets/portofolio/img337.jpg"
            />
            <div className="absolute inset-0 hero-gradient"></div>
          </div>
          <div className="container mx-auto px-8 relative z-10">
            <div className="max-w-4xl">
              <span className="inline-block bg-primary-container text-on-primary-container px-4 py-1 text-xs font-black tracking-[0.2em] uppercase mb-6 rounded-sm">
                Kontraktor Sipil Terkemuka
              </span>
              <h2 className="text-5xl md:text-8xl font-black text-white leading-[1.1] tracking-tighter mb-8">
                Keunggulan Teknik. <br />
                <span className="text-secondary-fixed">
                  Membangun Masa Depan.
                </span>
              </h2>
              <p className="text-xl md:text-2xl text-slate-200 font-light max-w-2xl mb-12 leading-relaxed">
                Kontraktor Spesialis Konstruksi Sipil, Mekanikal Elektrikal
                (MEP), Tata Udara (HVAC), dan Desain Interior dengan tingkat
                presisi yang tinggi.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  className="bg-white text-primary px-10 py-5 font-bold uppercase tracking-widest text-sm rounded-md shadow-2xl hover:bg-slate-100 transition-all flex items-center justify-center gap-2 group"
                  href="#services"
                >
                  Lihat Layanan
                  <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </Link>
                <Link
                  className="border border-white/30 backdrop-blur-md text-white px-10 py-5 font-bold uppercase tracking-widest text-sm rounded-md hover:bg-white/10 transition-all text-center"
                  href="#contact"
                >
                  Hubungi Kami
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Block (Asymmetric Layout) */}
        <section className="relative -mt-20 z-20 px-8 container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 bg-surface-container-lowest shadow-2xl rounded-lg overflow-hidden">
            {stats.slice(0, 3).map((stat, idx) => (
              <div 
                key={stat.id} 
                className={`p-10 ${idx < 2 ? "border-r border-surface-container" : ""} ${idx === 1 ? "bg-surface-container-low" : ""}`}
              >
                <h3 className="text-4xl font-black text-primary mb-2">{stat.value}</h3>
                <p className="text-xs uppercase tracking-[0.2em] font-bold text-secondary">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* About Section (Editorial Style) */}
        <section className="py-32 px-8 container mx-auto" id="about">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="relative">
              <div className="aspect-[4/5] bg-surface-container-high rounded-lg overflow-hidden">
                <img
                  alt="Engineering Precision"
                  className="w-full h-full object-cover mix-blend-multiply grayscale hover:grayscale-0 transition-all duration-700"
                  src="/assets/about/img121.jpg"
                />
              </div>
              <div className="absolute -bottom-12 -right-12 w-2/3 aspect-video bg-primary p-8 rounded-lg shadow-xl hidden md:block">
                <p className="text-white italic text-lg leading-relaxed">
                  &quot;Kami tidak hanya membangun struktur, kami membangun
                  kepercayaan melalui integritas teknis.&quot;
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="h-[1px] w-12 bg-white/50"></div>
                  <span className="text-xs uppercase tracking-widest text-white/70 font-bold">
                    Direktur Utama
                  </span>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <div className="space-y-4">
                <span className="text-primary font-black uppercase tracking-[0.3em] text-sm">
                  About BTT
                </span>
                <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-on-surface">
                  Commitment to Structural Integrity.
                </h2>
              </div>
              <p className="text-lg text-on-surface-variant leading-relaxed">
                {company.aboutText}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
                <div className="flex gap-4">
                  <span className="material-symbols-outlined text-primary">
                    verified
                  </span>
                  <div>
                    <h4 className="font-bold text-sm uppercase">
                      Sertifikasi Nasional
                    </h4>
                    <p className="text-xs text-on-surface-variant">
                      Memenuhi standar ISO dan regulasi konstruksi terkini.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="material-symbols-outlined text-primary">
                    engineering
                  </span>
                  <div>
                    <h4 className="font-bold text-sm uppercase">
                      Tim Ahli Terpadu
                    </h4>
                    <p className="text-xs text-on-surface-variant">
                      Insinyur berpengalaman di bidang MEP, Sipil, dan
                      Arsitektur.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section (Bento Grid) */}
        <section className="py-32 bg-surface-container-low" id="services">
          <div className="container mx-auto px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
              <div className="max-w-2xl">
                <span className="text-primary font-black uppercase tracking-[0.3em] text-sm">
                  Our Expertise
                </span>
                <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-on-surface mt-4">
                  Integrated Engineering Solutions.
                </h2>
              </div>
              <p className="text-on-surface-variant max-w-sm mb-2">
                Kami menyediakan layanan hulu ke hilir untuk memastikan
                konsistensi kualitas pada setiap tahap proyek Anda.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              {services.map((service, idx) => {
                // Layout pattern: Service 1 (span 8), Service 2 (span 4), Service 3 (span 4), Service 4 (span 8)
                const spanClass = idx % 4 === 0 || idx % 4 === 3 ? "md:col-span-8" : "md:col-span-4";
                
                // Keep the styling matching the design system
                // Second item (idx 1) is high contrast primary solid bg
                const isPrimaryBg = idx % 4 === 1;
                // Fourth item (idx 3) uses card-overlay layout with text inside
                const isOverlayCard = idx % 4 === 3;

                return (
                  <div 
                    key={service.id}
                    className={`${spanClass} group relative rounded-xl overflow-hidden min-h-[400px] flex items-end ${
                      isPrimaryBg ? "bg-primary text-white" : "bg-surface-container-lowest"
                    }`}
                  >
                    {!isPrimaryBg && !isOverlayCard && (
                      <>
                        <img
                          alt={service.title}
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          src={service.image}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent"></div>
                      </>
                    )}

                    {isPrimaryBg && (
                      <div className="absolute inset-0 opacity-20 pointer-events-none">
                        <img
                          alt={service.title}
                          className="w-full h-full object-cover"
                          src={service.image}
                        />
                      </div>
                    )}

                    {isOverlayCard && (
                      <>
                        <img
                          alt={service.title}
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          src={service.image}
                        />
                        <div className="absolute inset-0 bg-white/10 group-hover:bg-transparent transition-colors"></div>
                      </>
                    )}

                    {isOverlayCard ? (
                      <div className="relative p-12 w-full bg-surface-container-lowest/80 backdrop-blur-md md:max-w-md m-6 rounded-lg text-on-surface">
                        <span className="material-symbols-outlined text-primary text-4xl mb-4">
                          {service.icon}
                        </span>
                        <h3 className="text-2xl font-black mb-2 uppercase">
                          {service.title}
                        </h3>
                        <p className="text-on-surface-variant text-sm">
                          {service.description}
                        </p>
                      </div>
                    ) : (
                      <div className="relative p-10 w-full z-10">
                        <span className={`material-symbols-outlined ${isPrimaryBg ? "text-secondary-fixed" : "text-white"} text-5xl mb-6`}>
                          {service.icon}
                        </span>
                        <h3 className="text-2xl md:text-3xl font-black text-white mb-4 uppercase">
                          {service.title}
                        </h3>
                        <p className={`${isPrimaryBg ? "text-white/70" : "text-white/80"} text-sm leading-relaxed`}>
                          {service.description}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Clients Section */}
        <section
          className="py-24 bg-white border-y border-slate-100 overflow-hidden"
          id="clients"
        >
          <div className="container mx-auto px-8 mb-12 text-center">
            <span className="text-primary font-black uppercase tracking-[0.3em] text-xs">
              Mitra Strategis
            </span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-on-surface mt-4">
              Client Kami.
            </h2>
          </div>

          {/* Infinite Marquee */}
          <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
            <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll whitespace-nowrap py-4">
              {clients.map((client, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center border border-slate-200">
                    <span className="material-symbols-outlined text-slate-400">
                      domain
                    </span>
                  </div>
                  <span className="text-xl font-bold font-inter text-slate-800 tracking-tight">
                    {client}
                  </span>
                </li>
              ))}
            </ul>
            <ul
              className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll whitespace-nowrap py-4"
              aria-hidden="true"
            >
              {clients.map((client, i) => (
                <li
                  key={i + 100}
                  className="flex items-center gap-3 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center border border-slate-200">
                    <span className="material-symbols-outlined text-slate-400">
                      domain
                    </span>
                  </div>
                  <span className="text-xl font-bold font-inter text-slate-800 tracking-tight">
                    {client}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA Section */}
        <section
          className="py-32 px-8 bg-slate-900 overflow-hidden relative"
          id="contact"
        >
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
            <span
              className="material-symbols-outlined text-[40rem] text-white"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              architecture
            </span>
          </div>
          <div className="container mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-tight mb-8">
                  Siap Memulai Proyek Anda Berikutnya?
                </h2>
                <p className="text-xl text-slate-400 mb-12">
                  Konsultasikan kebutuhan konstruksi dan teknik Anda dengan tim
                  profesional kami hari ini.
                </p>
                <div className="space-y-6">
                  <a
                    className="flex items-center gap-6 p-6 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all group"
                    href={`https://wa.me/${company.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center">
                      <span className="material-symbols-outlined text-white text-3xl">
                        chat
                      </span>
                    </div>
                    <div>
                      <h4 className="text-white font-bold uppercase tracking-widest text-xs">
                        WhatsApp Direct
                      </h4>
                      <p className="text-slate-400 text-lg">+{company.whatsapp.replace(/(\d{2})(\d{3})(\d{4})(\d+)/, "$1 $2-$3-$4")}</p>
                    </div>
                    <span className="material-symbols-outlined text-white/30 ml-auto group-hover:text-white transition-colors">
                      open_in_new
                    </span>
                  </a>
                  <div className="flex items-center gap-6 p-6 bg-white/5 border border-white/10 rounded-xl">
                    <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center">
                      <span className="material-symbols-outlined text-white text-3xl">
                        mail
                      </span>
                    </div>
                    <div>
                      <h4 className="text-white font-bold uppercase tracking-widest text-xs">
                        Email Inquiry
                      </h4>
                      <p className="text-slate-400 text-lg">
                        {company.email}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white p-12 rounded-xl shadow-2xl text-on-surface">
                <h3 className="text-2xl font-black text-primary mb-8 uppercase">
                  Kirim Pesan
                </h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">
                        Nama Lengkap
                      </label>
                      <input
                        className="w-full border-b border-slate-200 py-3 focus:border-primary outline-none text-sm bg-transparent"
                        type="text"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">
                        Email
                      </label>
                      <input
                        className="w-full border-b border-slate-200 py-3 focus:border-primary outline-none text-sm bg-transparent"
                        type="email"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">
                      Layanan
                    </label>
                    <select className="w-full border-b border-slate-200 py-3 focus:border-primary outline-none text-sm bg-transparent">
                      {services.map(s => (
                        <option key={s.id}>{s.title}</option>
                      ))}
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">
                      Pesan
                    </label>
                    <textarea
                      className="w-full border-b border-slate-200 py-3 focus:border-primary outline-none text-sm bg-transparent resize-none"
                      rows={4}
                    ></textarea>
                  </div>
                  <button className="w-full bg-primary text-white py-5 font-black uppercase tracking-[0.2em] text-sm rounded-md hover:bg-primary-container transition-all">
                    Kirim Sekarang
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 dark:bg-black text-white w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-12 py-16 border-t border-slate-800">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-blue-400 text-3xl">
                architecture
              </span>
              <h3 className="text-white font-bold tracking-tighter text-xl uppercase">
                {company.name}
              </h3>
            </div>
            <p className="text-slate-500 label-md uppercase tracking-widest leading-loose">
              Penyedia solusi konstruksi dan engineering terintegrasi yang
              berfokus pada kualitas dan ketepatan waktu.
            </p>
            <div className="flex gap-4">
              <Link
                className="w-10 h-10 border border-slate-800 flex items-center justify-center rounded-full hover:border-blue-500 transition-colors"
                href="#"
              >
                <span className="material-symbols-outlined text-sm">
                  public
                </span>
              </Link>
              <Link
                className="w-10 h-10 border border-slate-800 flex items-center justify-center rounded-full hover:border-blue-500 transition-colors"
                href="#"
              >
                <span className="material-symbols-outlined text-sm">share</span>
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-xs font-black uppercase tracking-[0.3em] mb-8 text-white">
                Navigation
              </h4>
              <ul className="space-y-4">
                <li>
                  <Link
                    className="text-slate-500 hover:text-white transition-opacity duration-300 label-md uppercase tracking-widest"
                    href="#"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-slate-500 hover:text-white transition-opacity duration-300 label-md uppercase tracking-widest"
                    href="/about"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-slate-500 hover:text-white transition-opacity duration-300 label-md uppercase tracking-widest"
                    href="/services"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-slate-500 hover:text-white transition-opacity duration-300 label-md uppercase tracking-widest"
                    href="/portfolio"
                  >
                    Portfolio
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-black uppercase tracking-[0.3em] mb-8 text-white">
                Technical
              </h4>
              <ul className="space-y-4">
                {services.map(s => (
                  <li key={s.id}>
                    <Link
                      className="text-slate-500 hover:text-white transition-opacity duration-300 label-md uppercase tracking-widest block truncate max-w-[150px]"
                      href="/services"
                    >
                      {s.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.3em] mb-8 text-white">
              Kantor & Workshop
            </h4>
            <div className="space-y-4 text-slate-500 label-md uppercase tracking-widest leading-loose">
              <p className="normal-case">
                {company.address}
              </p>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">call</span>
                <a
                  href={`tel:${company.phone.replace(/\s+/g, "")}`}
                  className="hover:text-white transition-colors"
                >
                  {company.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">chat</span>
                <a
                  href={`https://wa.me/${company.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  +{company.whatsapp.replace(/(\d{2})(\d{3})(\d{4})(\d+)/, "$1 $2-$3-$4")}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">mail</span>
                <a
                  href={`mailto:${company.email}`}
                  className="normal-case hover:text-white transition-colors"
                >
                  {company.email}
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="px-12 py-8 bg-black border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="label-md uppercase tracking-widest text-slate-400">
            © 2024 PT. Bahana Totalindo Teknik. Engineering Excellence.
          </p>
          <div className="flex gap-8 text-[10px] font-bold uppercase tracking-widest text-slate-600">
            <Link className="hover:text-white" href="#">
              Privacy Policy
            </Link>
            <Link className="hover:text-white" href="#">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>

      {/* FAB for WhatsApp */}
      <a
        className="fixed bottom-8 right-8 z-[100] bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform active:scale-95 flex items-center justify-center"
        href={`https://wa.me/${company.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="material-symbols-outlined text-3xl">chat</span>
      </a>
    </>
  );
}
