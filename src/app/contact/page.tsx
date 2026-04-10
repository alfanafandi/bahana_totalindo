import Navbar from "@/components/partials/Navbar";
import Link from "next/link";

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen">
        {/* Hero Section / Context Header */}
        <section className="bg-primary-container text-white py-24 px-8 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-[url('/assets/portofolio/img336.jpg')] bg-cover bg-top" data-alt="close up of industrial architectural blueprints with professional engineering tools and drafting compass on a clean desk"></div>
          <div className="relative z-10 max-w-6xl mx-auto">
            <p className="uppercase tracking-widest text-on-primary-container font-bold text-sm mb-4">Inquiry &amp; Consultation</p>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-none mb-6">Build the Future <br/>With Precision.</h2>
            <div className="w-24 h-2 bg-on-tertiary-container mb-8"></div>
          </div>
        </section>

        {/* Main Content Canvas */}
        <section className="max-w-7xl mx-auto px-8 -mt-16 relative z-20 pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 shadow-2xl overflow-hidden rounded-lg">
            {/* Contact Form Section */}
            <div className="lg:col-span-7 bg-surface-container-lowest p-8 md:p-16">
              <h3 className="text-3xl font-bold text-primary mb-2 tracking-tight">Send a Specification</h3>
              <p className="text-secondary mb-10">Our technical team typically responds within one business day to discuss project requirements.</p>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-[0.75rem] font-bold uppercase tracking-widest text-secondary">Full Name</label>
                    <input className="bg-surface-container-low border-none focus:ring-2 focus:ring-primary p-4 rounded" placeholder="e.g. Ir. Ahmad Sudirman" type="text"/>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[0.75rem] font-bold uppercase tracking-widest text-secondary">Email Address</label>
                    <input className="bg-surface-container-low border-none focus:ring-2 focus:ring-primary p-4 rounded" placeholder="corporate@company.com" type="email"/>
                  </div>
                </div>
                
                <div className="flex flex-col gap-2">
                  <label className="text-[0.75rem] font-bold uppercase tracking-widest text-secondary">Service Type</label>
                  <select className="bg-surface-container-low border-none focus:ring-2 focus:ring-primary p-4 rounded appearance-none">
                    <option>General Contracting</option>
                    <option>Mechanical &amp; Electrical Engineering</option>
                    <option>Civil Works &amp; Infrastructure</option>
                    <option>Technical Maintenance</option>
                    <option>Other Inquiry</option>
                  </select>
                </div>
                
                <div className="flex flex-col gap-2">
                  <label className="text-[0.75rem] font-bold uppercase tracking-widest text-secondary">Technical Message</label>
                  <textarea className="bg-surface-container-low border-none focus:ring-2 focus:ring-primary p-4 rounded" placeholder="Describe your project scope or maintenance requirements..." rows={4}></textarea>
                </div>
                
                <button className="w-full md:w-auto bg-gradient-to-r from-primary to-primary-container text-white font-bold py-4 px-12 rounded-md hover:shadow-lg transition-all flex items-center justify-center gap-2 group" type="submit">
                  <span>SUBMIT INQUIRY</span>
                  <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform" data-icon="arrow_forward">arrow_forward</span>
                </button>
              </form>
            </div>
            
            {/* Contact Sidebar */}
            <div className="lg:col-span-5 bg-surface-container p-8 md:p-16 flex flex-col justify-between">
              <div>
                <h3 className="text-3xl font-bold text-primary mb-8 tracking-tight">Kantor & Workshop</h3>
                <div className="space-y-8">
                  {/* Address Block */}
                  <div className="flex gap-4">
                    <div className="bg-primary-container p-3 h-fit rounded">
                      <span className="material-symbols-outlined text-white">location_on</span>
                    </div>
                    <div>
                      <p className="text-[0.75rem] font-black uppercase text-secondary tracking-widest mb-1">Kantor & Workshop</p>
                      <p className="text-on-surface font-medium leading-relaxed">
                        Harapan Indah, Ruko Symphony Blok HX No.15,<br/>
                        Jl. Symphony Pusaka Rakyat,<br/>
                        Kecamatan Tarumajaya, Bekasi, Jawa Barat.
                      </p>
                    </div>
                  </div>

                  {/* Phone Block */}
                  <div className="flex gap-4">
                    <div className="bg-secondary-container p-3 h-fit rounded">
                      <span className="material-symbols-outlined text-on-secondary-fixed-variant">call</span>
                    </div>
                    <div>
                      <p className="text-[0.75rem] font-black uppercase text-secondary tracking-widest mb-1">Telepon</p>
                      <a href="tel:02189442250" className="text-on-surface font-bold text-xl hover:text-primary transition-colors">021 - 89442250</a>
                    </div>
                  </div>

                  {/* WhatsApp Block */}
                  <div className="flex gap-4">
                    <div className="bg-[#25D366] p-3 h-fit rounded">
                      <span className="material-symbols-outlined text-white">chat</span>
                    </div>
                    <div>
                      <p className="text-[0.75rem] font-black uppercase text-secondary tracking-widest mb-1">WhatsApp</p>
                      <a
                        href="https://wa.me/6281282404353"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-[#25D366]/10 text-[#075E54] font-bold py-2 px-4 rounded-full hover:bg-[#25D366]/20 transition-colors"
                      >
                        0812 82 404 353
                      </a>
                    </div>
                  </div>

                  {/* Email Block */}
                  <div className="flex gap-4">
                    <div className="bg-primary p-3 h-fit rounded">
                      <span className="material-symbols-outlined text-white">mail</span>
                    </div>
                    <div>
                      <p className="text-[0.75rem] font-black uppercase text-secondary tracking-widest mb-1">Email</p>
                      <a href="mailto:bahana.tteknik@gmail.com" className="text-on-surface font-bold hover:text-primary transition-colors">
                        bahana.tteknik@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* Social Media Block */}
                  <div className="flex gap-4">
                    <div className="bg-[#1877F2] p-3 h-fit rounded">
                      <span className="material-symbols-outlined text-white">public</span>
                    </div>
                    <div>
                      <p className="text-[0.75rem] font-black uppercase text-secondary tracking-widest mb-1">Media Sosial</p>
                      <div className="flex flex-col gap-2 mt-1">
                        <a
                          href="https://facebook.com/PT.BahanaTotalindoTeknik"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-[#1877F2] font-bold text-sm hover:underline"
                        >
                          <span className="material-symbols-outlined text-[16px]">thumb_up</span>
                          PT. BAHANA TOTALINDO TEKNIK
                        </a>
                        <a
                          href="https://instagram.com/bahana.totalindo.teknik"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-[#E1306C] font-bold text-sm hover:underline"
                        >
                          <span className="material-symbols-outlined text-[16px]">photo_camera</span>
                          bahana.totalindo.teknik
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Stat Block Component */}
              <div className="mt-12 bg-secondary-container p-6 rounded-xl border-l-4 border-primary">
                <span className="text-display-sm text-primary font-black text-4xl block">15+</span>
                <span className="text-label-sm uppercase font-bold text-on-secondary-fixed-variant tracking-widest">Tahun Pengalaman Industri</span>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section (Asymmetric) */}
        <section className="bg-surface-container-low py-20 px-8">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/3 order-2 md:order-1">
              <h4 className="text-4xl font-bold tracking-tighter text-primary mb-6">Lokasi Strategis di Pusat Industri.</h4>
              <p className="text-secondary leading-relaxed mb-8">
                Terletak di jantung koridor industri Indonesia, kantor pusat kami memungkinkan mobilisasi tim teknis secara cepat ke berbagai situs proyek utama di Jakarta, Bekasi, maupun Cikarang.
              </p>
              <div className="bg-white p-6 shadow-md inline-block border-l-4 border-on-tertiary-container">
                <p className="font-bold text-primary">Jangkauan Operasional</p>
                <ul className="text-sm text-secondary mt-2 space-y-1">
                  <li>• Wilayah Jabodetabek</li>
                  <li>• Kawasan Industri Jawa Barat</li>
                  <li>• Proyek Infrastruktur Nasional</li>
                </ul>
              </div>
            </div>
            
            <div className="w-full md:w-2/3 order-1 md:order-2 h-[450px] bg-slate-300 rounded-lg shadow-inner overflow-hidden relative transition-all duration-700">
              <iframe 
                src="https://maps.google.com/maps?q=Ruko%20Symphony%20Blok%20HX%20No.15%20Harapan%20Indah%20Bekasi&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-12 px-8 flex flex-col md:flex-row justify-between items-center bg-[#f2f4f6] dark:bg-slate-900">
        <div className="mb-6 md:mb-0">
          <p className="font-bold text-[#00236f] text-lg">PT. Bahana Totalindo Teknik</p>
          <p className="font-inter text-xs tracking-normal text-[#505f76] opacity-80 mt-1">© 2024 PT. Bahana Totalindo Teknik. Industrial Integrity.</p>
        </div>
        <div className="flex gap-8">
          <Link className="font-inter text-xs tracking-normal text-[#505f76] opacity-80 hover:opacity-100 hover:text-[#00236f] transition-colors" href="#">Terms of Service</Link>
          <Link className="font-inter text-xs tracking-normal text-[#505f76] opacity-80 hover:opacity-100 hover:text-[#00236f] transition-colors" href="#">Privacy Policy</Link>
          <Link className="font-inter text-xs tracking-normal text-[#505f76] opacity-80 hover:opacity-100 hover:text-[#00236f] transition-colors" href="#">Technical Specs</Link>
        </div>
      </footer>
    </>
  );
}
