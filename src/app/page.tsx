import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/partials/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="relative min-h-[795px] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              alt="Industrial Construction" 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTR20BILKY03Vwn1Q6P1Eru-D-jWJqVV3LwgnPQWQVjQuIg8jOEh5YnA2Hbl3qN4IyvWJIxUETlaF2wt3S-gdbJd7mf9imCf0NZeqDHLFlLU17aGJVRDhfmgJ75iD7PXSuBlvniVifnod-lwNmWtf4KrLdEBPTROM8QddL1hCai3WEVjgmZT1Iu_1HN88FLQCfTyw7WmZEJWUkjQ5UrtMT5JUl5j6iiU1Bcrzm6wDtLVbDhK6C7z-cLQjmH4-z0O5Qpw__rYEdyB7R"
            />
            <div className="absolute inset-0 hero-gradient"></div>
          </div>
          <div className="container mx-auto px-8 relative z-10">
            <div className="max-w-4xl">
              <span className="inline-block bg-primary-container text-on-primary-container px-4 py-1 text-xs font-black tracking-[0.2em] uppercase mb-6 rounded-sm">Leading General Contractor</span>
              <h2 className="text-5xl md:text-8xl font-black text-white leading-[1.1] tracking-tighter mb-8">
                Engineering Excellence. <br />
                <span className="text-secondary-fixed">Building the Future.</span>
              </h2>
              <p className="text-xl md:text-2xl text-slate-200 font-light max-w-2xl mb-12 leading-relaxed">
                General Contractor specializing in Civil Construction, MEP, HVAC, and Interior Design with uncompromising precision.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link className="bg-white text-primary px-10 py-5 font-bold uppercase tracking-widest text-sm rounded-md shadow-2xl hover:bg-slate-100 transition-all flex items-center justify-center gap-2 group" href="#services">
                  Lihat Layanan
                  <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </Link>
                <Link className="border border-white/30 backdrop-blur-md text-white px-10 py-5 font-bold uppercase tracking-widest text-sm rounded-md hover:bg-white/10 transition-all text-center" href="#contact">
                  Hubungi Kami
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Block (Asymmetric Layout) */}
        <section className="relative -mt-20 z-20 px-8 container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 bg-surface-container-lowest shadow-2xl rounded-lg overflow-hidden">
            <div className="p-10 border-r border-surface-container">
              <h3 className="text-4xl font-black text-primary mb-2">500+</h3>
              <p className="text-xs uppercase tracking-[0.2em] font-bold text-secondary">Projects Completed</p>
            </div>
            <div className="p-10 border-r border-surface-container bg-surface-container-low">
              <h3 className="text-4xl font-black text-primary mb-2">15+</h3>
              <p className="text-xs uppercase tracking-[0.2em] font-bold text-secondary">Years Experience</p>
            </div>
            <div className="p-10">
              <h3 className="text-4xl font-black text-primary mb-2">100%</h3>
              <p className="text-xs uppercase tracking-[0.2em] font-bold text-secondary">Precision Quality</p>
            </div>
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
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbk4IOPzHV9Pp0KDCNYjTqRo5QslWVH_D8o7ZYEQB_Ny2kQf8Orh_itTMS_tdlWNl0J8BYZjdYRm2t21TqVWVXpHk6JTBh1NZFGgNh9JNy2ezR8_snr2-9GH9md6PtWPybHU1RNUww479IzztoPZYZ7q7Pn2pdlJFv7dWNKrqJxRc58rVJFMEa_OmGI7n2oh4gljIenj_DRRQbeivoGcbgLqWoA7hC6eKMCG2anqv_HRwZtEKsUNh2JBNlMYtAMBDRa4soFExgCJnm"
                />
              </div>
              <div className="absolute -bottom-12 -right-12 w-2/3 aspect-video bg-primary p-8 rounded-lg shadow-xl hidden md:block">
                <p className="text-white italic text-lg leading-relaxed">
                  &quot;Kami tidak hanya membangun struktur, kami membangun kepercayaan melalui integritas teknis.&quot;
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="h-[1px] w-12 bg-white/50"></div>
                  <span className="text-xs uppercase tracking-widest text-white/70 font-bold">Direktur Utama</span>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <div className="space-y-4">
                <span className="text-primary font-black uppercase tracking-[0.3em] text-sm">About BTT</span>
                <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-on-surface">Commitment to Structural Integrity.</h2>
              </div>
              <p className="text-lg text-on-surface-variant leading-relaxed">
                PT. Bahana Totalindo Teknik berdiri sebagai pilar dalam industri konstruksi umum di Indonesia. Fokus kami adalah memberikan solusi teknis yang komprehensif, mulai dari pondasi sipil hingga detail interior yang rumit. 
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
                <div className="flex gap-4">
                  <span className="material-symbols-outlined text-primary">verified</span>
                  <div>
                    <h4 className="font-bold text-sm uppercase">Sertifikasi Nasional</h4>
                    <p className="text-xs text-on-surface-variant">Memenuhi standar ISO dan regulasi konstruksi terkini.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="material-symbols-outlined text-primary">engineering</span>
                  <div>
                    <h4 className="font-bold text-sm uppercase">Tim Ahli Terpadu</h4>
                    <p className="text-xs text-on-surface-variant">Insinyur berpengalaman di bidang MEP, Sipil, dan Arsitektur.</p>
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
                <span className="text-primary font-black uppercase tracking-[0.3em] text-sm">Our Expertise</span>
                <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-on-surface mt-4">Integrated Engineering Solutions.</h2>
              </div>
              <p className="text-on-surface-variant max-w-sm mb-2">Kami menyediakan layanan hulu ke hilir untuk memastikan konsistensi kualitas pada setiap tahap proyek Anda.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              {/* Service 1: Civil */}
              <div className="md:col-span-8 group relative bg-surface-container-lowest rounded-xl overflow-hidden min-h-[400px] flex items-end">
                <img 
                  alt="Civil Construction" 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvYnQyZgevackKt-wE_MNm3IrM5pIP6J695CQgyq4EH0NHp22RruYUF0d46zhvidsfNOZR6qDirm8blInOmC1GTr7xH8bOf4oJUPVMoY-_Tqe5Oo0e-YxoaiTdR39Au8Jk-IxjWV3XeDYq67n4QR5gG5jaJ9fLpJs_RthimzuRyWVQ4BG9evJFTTEpx-SQiSXT5KopS5_gyz823r2zbjg1QOENNQtUKrvseo1hemZGe3sJ9ShMUDyX6JK-TDvgn4gAQLc92zB8txTV"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent"></div>
                <div className="relative p-12 w-full">
                  <span className="material-symbols-outlined text-white text-5xl mb-6">foundation</span>
                  <h3 className="text-3xl font-black text-white mb-4 uppercase">Civil Construction</h3>
                  <p className="text-white/80 max-w-md">Pembangunan infrastruktur skala besar, gedung perkantoran, dan fasilitas industri dengan fokus pada durabilitas jangka panjang.</p>
                </div>
              </div>
              {/* Service 2: MEP */}
              <div className="md:col-span-4 group relative bg-primary rounded-xl overflow-hidden min-h-[400px] flex items-end">
                <div className="absolute inset-0 opacity-20 pointer-events-none">
                  <img 
                    alt="MEP Engineering" 
                    className="w-full h-full object-cover" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYrPi49TG8GLmeMCONSm9f4iJBksUWYUU0DS_jKgQPXYp29WUjAHr3KxteTppvUbY5HTPxWGFKOhJedYO5ITeEIkNhnlmE4OrII1sIL-HqoYUcHd4Cbfefw2HPhA9KaJxDnWPBkn5z-sYh7TsHs6cR46vjDjDgiYK7HvhhthV1Ja-t2GOW-A1Z3TanNJ73Ayn0GXxQssoPXOfOh7tDxhPczqZWikJb1hmICOp3WHIVSTb57YVQ6vTMoEkP-sNno1Of_bCBXn7rbmLp"
                  />
                </div>
                <div className="relative p-10 w-full">
                  <span className="material-symbols-outlined text-secondary-fixed text-5xl mb-6">electric_bolt</span>
                  <h3 className="text-2xl font-black text-white mb-4 uppercase">MEP Systems</h3>
                  <p className="text-white/70 text-sm">Mechanical, Electrical, and Plumbing engineering yang efisien dan aman.</p>
                </div>
              </div>
              {/* Service 3: HVAC */}
              <div className="md:col-span-4 group relative bg-surface-container-lowest border border-surface-container rounded-xl overflow-hidden min-h-[400px] flex items-end">
                <div className="p-10 w-full">
                  <span className="material-symbols-outlined text-primary text-5xl mb-6">ac_unit</span>
                  <h3 className="text-2xl font-black text-on-surface mb-4 uppercase">HVAC Solutions</h3>
                  <p className="text-on-surface-variant text-sm">Sistem sirkulasi udara dan kontrol suhu presisi untuk kenyamanan optimal dalam gedung.</p>
                  <div className="mt-8 pt-8 border-t border-surface-container flex items-center justify-between group">
                    <span className="text-xs font-bold uppercase tracking-widest text-primary">Details</span>
                    <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">arrow_forward</span>
                  </div>
                </div>
              </div>
              {/* Service 4: Interior */}
              <div className="md:col-span-8 group relative bg-surface-container-highest rounded-xl overflow-hidden min-h-[400px] flex items-end">
                <img 
                  alt="Interior Design" 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJbiZm60fJIzaCF1SrmZdSY1EwGJgy5TiwIbQPUaoVCAe9_GJZE9VldieMawtmyEwMZIAlVW9S5tTDzw4G_KtJCnDm9MoQGkawYEOc3f7X67W1ryDUnp-cFQHvYJWpEqEnaUr_KDlLijqHmmTBTgYZor4KJOA1aaRTl1LnTmcFjrZXRI3O20SFM4A2MmFBAd5q2EMxvkg9dDcbNFrAet9lsBBs9wouJX3pFV46-KMP31LoXX1iWDAf_rInSXUbeHMsqTP24_9duv6I"
                />
                <div className="absolute inset-0 bg-white/10 group-hover:bg-transparent transition-colors"></div>
                <div className="relative p-12 w-full bg-surface-container-lowest/80 backdrop-blur-md md:max-w-md m-6 rounded-lg">
                  <span className="material-symbols-outlined text-primary text-4xl mb-4">format_paint</span>
                  <h3 className="text-2xl font-black text-on-surface mb-2 uppercase">Interior Design</h3>
                  <p className="text-on-surface-variant text-sm">Transformasi ruang interior yang menggabungkan estetika modern dengan fungsionalitas ruang kerja.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 px-8 bg-slate-900 overflow-hidden relative" id="contact">
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
            <span className="material-symbols-outlined text-[40rem] text-white" style={{fontVariationSettings: "'FILL' 1"}}>architecture</span>
          </div>
          <div className="container mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-tight mb-8">Siap Memulai Proyek Anda Berikutnya?</h2>
                <p className="text-xl text-slate-400 mb-12">Konsultasikan kebutuhan konstruksi dan teknik Anda dengan tim profesional kami hari ini.</p>
                <div className="space-y-6">
                  <a className="flex items-center gap-6 p-6 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all group" href="https://wa.me/628123456789">
                    <div className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center">
                      <span className="material-symbols-outlined text-white text-3xl">chat</span>
                    </div>
                    <div>
                      <h4 className="text-white font-bold uppercase tracking-widest text-xs">WhatsApp Direct</h4>
                      <p className="text-slate-400 text-lg">+62 812 3456 789</p>
                    </div>
                    <span className="material-symbols-outlined text-white/30 ml-auto group-hover:text-white transition-colors">open_in_new</span>
                  </a>
                  <div className="flex items-center gap-6 p-6 bg-white/5 border border-white/10 rounded-xl">
                    <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center">
                      <span className="material-symbols-outlined text-white text-3xl">mail</span>
                    </div>
                    <div>
                      <h4 className="text-white font-bold uppercase tracking-widest text-xs">Email Inquiry</h4>
                      <p className="text-slate-400 text-lg">info@btt-teknik.co.id</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white p-12 rounded-xl shadow-2xl">
                <h3 className="text-2xl font-black text-primary mb-8 uppercase">Kirim Pesan</h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Nama Lengkap</label>
                      <input className="w-full border-b border-slate-200 py-3 focus:border-primary outline-none text-sm bg-transparent" type="text" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Email</label>
                      <input className="w-full border-b border-slate-200 py-3 focus:border-primary outline-none text-sm bg-transparent" type="email" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Layanan</label>
                    <select className="w-full border-b border-slate-200 py-3 focus:border-primary outline-none text-sm bg-transparent">
                      <option>Civil Construction</option>
                      <option>MEP Systems</option>
                      <option>HVAC Solutions</option>
                      <option>Interior Design</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Pesan</label>
                    <textarea className="w-full border-b border-slate-200 py-3 focus:border-primary outline-none text-sm bg-transparent resize-none" rows={4}></textarea>
                  </div>
                  <button className="w-full bg-primary text-white py-5 font-black uppercase tracking-[0.2em] text-sm rounded-md hover:bg-primary-container transition-all">Kirim Sekarang</button>
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
              <span className="material-symbols-outlined text-blue-400 text-3xl">architecture</span>
              <h3 className="text-white font-bold tracking-tighter text-xl uppercase">BAHANA TOTALINDO TEKNIK</h3>
            </div>
            <p className="text-slate-500 label-md uppercase tracking-widest leading-loose">
              Penyedia solusi konstruksi dan engineering terintegrasi yang berfokus pada kualitas dan ketepatan waktu.
            </p>
            <div className="flex gap-4">
              <Link className="w-10 h-10 border border-slate-800 flex items-center justify-center rounded-full hover:border-blue-500 transition-colors" href="#">
                <span className="material-symbols-outlined text-sm">public</span>
              </Link>
              <Link className="w-10 h-10 border border-slate-800 flex items-center justify-center rounded-full hover:border-blue-500 transition-colors" href="#">
                <span className="material-symbols-outlined text-sm">share</span>
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-xs font-black uppercase tracking-[0.3em] mb-8 text-white">Navigation</h4>
              <ul className="space-y-4">
                <li><Link className="text-slate-500 hover:text-white transition-opacity duration-300 label-md uppercase tracking-widest" href="#">Home</Link></li>
                <li><Link className="text-slate-500 hover:text-white transition-opacity duration-300 label-md uppercase tracking-widest" href="#about">About</Link></li>
                <li><Link className="text-slate-500 hover:text-white transition-opacity duration-300 label-md uppercase tracking-widest" href="#services">Services</Link></li>
                <li><Link className="text-slate-500 hover:text-white transition-opacity duration-300 label-md uppercase tracking-widest" href="#">Portfolio</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-black uppercase tracking-[0.3em] mb-8 text-white">Technical</h4>
              <ul className="space-y-4">
                <li><Link className="text-slate-500 hover:text-white transition-opacity duration-300 label-md uppercase tracking-widest" href="#">Civil</Link></li>
                <li><Link className="text-slate-500 hover:text-white transition-opacity duration-300 label-md uppercase tracking-widest" href="#">MEP</Link></li>
                <li><Link className="text-slate-500 hover:text-white transition-opacity duration-300 label-md uppercase tracking-widest" href="#">HVAC</Link></li>
                <li><Link className="text-slate-500 hover:text-white transition-opacity duration-300 label-md uppercase tracking-widest" href="#">Interior</Link></li>
              </ul>
            </div>
          </div>
          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.3em] mb-8 text-white">Head Office</h4>
            <div className="space-y-6 text-slate-500 label-md uppercase tracking-widest leading-loose">
              <p>Jl. Engineering Excellence No. 88<br />Kawasan Industri Terpadu<br />Jakarta Selatan, Indonesia</p>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">call</span>
                <span>(021) 555-0123</span>
              </div>
            </div>
          </div>
        </div>
        <div className="px-12 py-8 bg-black border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="label-md uppercase tracking-widest text-slate-400">© 2024 PT. Bahana Totalindo Teknik. Engineering Excellence.</p>
          <div className="flex gap-8 text-[10px] font-bold uppercase tracking-widest text-slate-600">
            <Link className="hover:text-white" href="#">Privacy Policy</Link>
            <Link className="hover:text-white" href="#">Terms of Service</Link>
          </div>
        </div>
      </footer>

      {/* FAB for WhatsApp */}
      <a className="fixed bottom-8 right-8 z-[100] bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform active:scale-95 flex items-center justify-center" href="https://wa.me/628123456789">
        <span className="material-symbols-outlined text-3xl">chat</span>
      </a>
    </>
  );
}
