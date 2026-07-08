import Link from "next/link";
import Navbar from "@/components/partials/Navbar";
import { getDb } from "@/lib/db";

export const dynamic = "force-dynamic";

export default async function ServicesPage() {
  const db = await getDb();
  const { services, products, company } = db;

  return (
    <>
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 md:px-12 py-16 font-inter">
        <header className="mb-24">
          <div className="inline-block px-3 py-1 bg-secondary-container text-on-secondary-container text-[10px] font-bold tracking-[0.2em] uppercase rounded-full mb-6">Industrial Precision</div>
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter text-primary leading-none mb-8">
              ENGINEERING<br/>
              EXCELLENCE.
          </h1>
          <p className="max-w-2xl text-lg text-secondary leading-relaxed font-medium">
              Integrated technical solutions for large-scale infrastructure, mechanical systems, and premium interior environments. We build the future with structural integrity.
          </p>
        </header>

        {/* Core Disciplines Bento Grid */}
        <section className="mb-32">
          <div className="flex items-baseline justify-between mb-12 border-b border-outline-variant/20 pb-6">
            <h2 className="text-3xl font-extrabold tracking-tight text-primary uppercase">Core Disciplines</h2>
            <span className="text-xs font-bold text-outline tracking-widest uppercase">01 // Expertise</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {services.map((service, idx) => {
              const bentoIndex = idx % 4;

              // Service 1 (Architecture style): Image background, bottom left content
              if (bentoIndex === 0) {
                return (
                  <div key={service.id} className="md:col-span-8 group relative overflow-hidden bg-surface-container-low rounded-xl h-[500px]">
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent z-10"></div>
                    <img alt={service.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src={service.image}/>
                    <div className="absolute bottom-0 left-0 p-12 z-20">
                      <span className="material-symbols-outlined text-white text-5xl mb-6">{service.icon}</span>
                      <h3 className="text-4xl font-bold text-white mb-4 uppercase">{service.title}</h3>
                      <p className="text-white/80 max-w-md mb-6">{service.description}</p>
                      <Link href="/portfolio">
                        <button className="bg-white text-primary px-8 py-3 font-bold text-sm tracking-widest uppercase rounded-sm hover:bg-primary hover:text-white transition-colors">View Projects</button>
                      </Link>
                    </div>
                  </div>
                );
              }

              // Service 2 (MEP style): Clean white card, list details
              if (bentoIndex === 1) {
                return (
                  <div key={service.id} className="md:col-span-4 bg-surface-container-lowest p-8 rounded-xl border-t-4 border-primary flex flex-col justify-between shadow-sm">
                    <div>
                      <span className="material-symbols-outlined text-primary text-4xl mb-6">{service.icon}</span>
                      <h3 className="text-2xl font-bold text-primary mb-4 uppercase">{service.title}</h3>
                      <p className="text-secondary text-sm leading-relaxed mb-6">{service.description}</p>
                      <ul className="space-y-3 text-xs font-bold text-outline uppercase tracking-wider">
                        <li className="flex items-center gap-2"><span className="w-1 h-1 bg-primary rounded-full"></span> Power Grid Design</li>
                        <li className="flex items-center gap-2"><span className="w-1 h-1 bg-primary rounded-full"></span> Fire Protection Systems</li>
                        <li className="flex items-center gap-2"><span className="w-1 h-1 bg-primary rounded-full"></span> High-Voltage Installations</li>
                      </ul>
                    </div>
                    <Link className="mt-8 text-primary font-bold text-xs uppercase tracking-widest flex items-center gap-2 hover:gap-4 transition-all" href="#">
                        Technical Specs <span className="material-symbols-outlined text-sm">arrow_forward</span>
                      </Link>
                  </div>
                );
              }

              // Service 3 (HVAC style): Solid primary background with bar indicator
              if (bentoIndex === 2) {
                return (
                  <div key={service.id} className="md:col-span-4 bg-primary text-white p-10 rounded-xl flex flex-col justify-center items-start">
                    <span className="material-symbols-outlined text-white/50 text-6xl mb-8">{service.icon}</span>
                    <h3 className="text-3xl font-black tracking-tight mb-4 uppercase">{service.title}</h3>
                    <p className="text-white/70 text-sm mb-8">{service.description}</p>
                    <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden">
                      <div className="w-3/4 h-full bg-white"></div>
                    </div>
                    <span className="mt-4 text-[10px] uppercase font-bold tracking-widest opacity-60">High Efficiency Standards</span>
                  </div>
                );
              }

              // Service 4 (Interior style): Dark image overlay, center text layout
              return (
                <div key={service.id} className="md:col-span-8 group relative overflow-hidden bg-surface-container-low rounded-xl h-[400px]">
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors z-10"></div>
                  <img alt={service.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src={service.image}/>
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-12 z-20">
                    <h3 className="text-4xl font-black text-white mb-2 tracking-tighter uppercase">{service.title}</h3>
                    <p className="text-white/90 font-medium max-w-lg mb-6">{service.description}</p>
                    <div className="flex gap-4">
                      <span className="px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold uppercase rounded-full">Bespoke Fitting</span>
                      <span className="px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold uppercase rounded-full">Acoustic Panels</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Dynamic Products Grid */}
        <section className="mb-32">
          <div className="flex items-baseline justify-between mb-12 border-b border-outline-variant/20 pb-6">
            <h2 className="text-3xl font-extrabold tracking-tight text-primary uppercase">Precision Components</h2>
            <span className="text-xs font-bold text-outline tracking-widest uppercase">02 // Equipment</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
            {products.map(product => (
              <div key={product.id} className="group cursor-pointer">
                <div className="aspect-[4/5] bg-surface-container-low rounded-sm overflow-hidden mb-6 relative">
                  <img alt={product.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src={product.image}/>
                  <div className="absolute top-4 right-4">
                    <span className="bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase">{product.status}</span>
                  </div>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-sm font-black uppercase text-primary tracking-tight">{product.title}</h4>
                    <p className="text-xs text-outline font-medium mt-1">{product.category}</p>
                  </div>
                  <span className="text-sm font-bold text-primary">{product.price}</span>
                </div>
                <p className="mt-4 text-xs text-secondary leading-relaxed">{product.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-16 flex justify-center">
            <button className="px-10 py-4 border-2 border-primary text-primary font-bold text-sm tracking-[0.2em] uppercase hover:bg-primary hover:text-white transition-all">Download Full Catalogue</button>
          </div>
        </section>

        {/* Static Company Legacy Numbers (Configurable where needed) */}
        <section className="mb-32 bg-secondary-container p-12 rounded-xl grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col border-l-4 border-primary pl-6">
            <span className="text-4xl font-black text-primary mb-2">500+</span>
            <span className="text-[10px] font-bold text-on-secondary-container uppercase tracking-widest">Projects Completed</span>
          </div>
          <div className="flex flex-col border-l-4 border-primary pl-6">
            <span className="text-4xl font-black text-primary mb-2">120+</span>
            <span className="text-[10px] font-bold text-on-secondary-container uppercase tracking-widest">Technical Staff</span>
          </div>
          <div className="flex flex-col border-l-4 border-primary pl-6">
            <span className="text-4xl font-black text-primary mb-2">15yr</span>
            <span className="text-[10px] font-bold text-on-secondary-container uppercase tracking-widest">Industry Legacy</span>
          </div>
          <div className="flex flex-col border-l-4 border-primary pl-6">
            <span className="text-4xl font-black text-primary mb-2">98%</span>
            <span className="text-[10px] font-bold text-on-secondary-container uppercase tracking-widest">Retention Rate</span>
          </div>
        </section>

        {/* CTA Contact section */}
        <section className="relative rounded-2xl overflow-hidden bg-primary-container p-1 md:p-2">
          <div className="absolute inset-0">
            <img alt="Consultation" className="w-full h-full object-cover opacity-30" src="/assets/portofolio/img161.jpg"/>
          </div>
          <div className="relative bg-white/10 backdrop-blur-2xl border border-white/20 rounded-xl p-12 md:p-24 flex flex-col items-center text-center">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter uppercase leading-tight">Ready to Engineer<br/>Your Vision?</h2>
            <p className="text-white/80 text-lg max-w-xl mb-12">Consult with our lead engineers on your next industrial or commercial development project.</p>
            <div className="flex flex-col sm:flex-row gap-6">
              <a href={`https://wa.me/${company.whatsapp}`} target="_blank" rel="noopener noreferrer">
                <button className="bg-white text-primary px-12 py-5 font-black text-sm tracking-widest uppercase hover:scale-105 transition-all w-full sm:w-auto">Schedule Consultation</button>
              </a>
              <Link href="/contact">
                <button className="border-2 border-white text-white px-12 py-5 font-black text-sm tracking-widest uppercase hover:bg-white hover:text-primary transition-all w-full sm:w-auto">Contact Us</button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-slate-900 dark:bg-black text-white w-full mt-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-12 py-16 border-t border-slate-800 max-w-7xl mx-auto">
          <div className="space-y-6">
            <span className="text-white font-bold tracking-tighter text-2xl uppercase">{company.name}</span>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">Penyedia solusi konstruksi dan engineering terintegrasi yang berfokus pada kualitas dan ketepatan waktu.</p>
            <div className="flex gap-4">
              <Link className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center hover:bg-white hover:text-slate-900 transition-colors" href="#">
                <span className="material-symbols-outlined text-sm">share</span>
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h5 className="label-md uppercase tracking-widest text-slate-400 font-bold text-xs mb-6">Directory</h5>
              <ul className="space-y-4">
                <li><Link className="text-slate-500 hover:text-white transition-opacity duration-300 text-sm font-medium" href="/">Home</Link></li>
                <li><Link className="text-white transition-opacity duration-300 text-sm font-medium" href="/services">Services</Link></li>
                <li><Link className="text-slate-500 hover:text-white transition-opacity duration-300 text-sm font-medium" href="/portfolio">Portfolio</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="label-md uppercase tracking-widest text-slate-400 font-bold text-xs mb-6">Company</h5>
              <ul className="space-y-4">
                <li><Link className="text-slate-500 hover:text-white transition-opacity duration-300 text-sm font-medium" href="/about">About</Link></li>
                <li><Link className="text-slate-500 hover:text-white transition-opacity duration-300 text-sm font-medium" href="/portfolio">Portfolio</Link></li>
                <li><Link className="text-slate-500 hover:text-white transition-opacity duration-300 text-sm font-medium" href="/contact">Contact</Link></li>
              </ul>
            </div>
          </div>
          <div className="bg-slate-800/50 p-8 rounded-lg">
            <h5 className="label-md uppercase tracking-widest text-white font-bold text-xs mb-4">Newsletter</h5>
            <p className="text-slate-400 text-xs mb-6">Receive technical updates and project insights monthly.</p>
            <div className="flex gap-2">
              <input className="bg-slate-900 border-none text-white text-xs px-4 py-3 flex-grow focus:ring-1 focus:ring-blue-500" placeholder="Email Address" type="email"/>
              <button className="bg-primary px-4 py-3"><span className="material-symbols-outlined">send</span></button>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-12 py-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="label-md uppercase tracking-widest text-slate-400 text-[10px]">© 2024 {company.name}. Engineering Excellence.</span>
          <div className="flex gap-8 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
            <Link className="hover:text-white" href="#">Privacy Policy</Link>
            <Link className="hover:text-white" href="#">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </>
  );
}
