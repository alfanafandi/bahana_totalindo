import Link from "next/link";
import Navbar from "@/components/partials/Navbar";

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <header className="mb-24">
          <div className="inline-block px-3 py-1 bg-secondary-container text-on-secondary-container text-[10px] font-bold tracking-[0.2em] uppercase rounded-full mb-6">Industrial Precision</div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-primary leading-none mb-8">
              ENGINEERING<br/>
              EXCELLENCE.
          </h1>
          <p className="max-w-2xl text-lg text-secondary leading-relaxed font-medium">
              Integrated technical solutions for large-scale infrastructure, mechanical systems, and premium interior environments. We build the future with structural integrity.
          </p>
        </header>

        <section className="mb-32">
          <div className="flex items-baseline justify-between mb-12 border-b border-outline-variant/20 pb-6">
            <h2 className="text-3xl font-extrabold tracking-tight text-primary uppercase">Core Disciplines</h2>
            <span className="text-xs font-bold text-outline tracking-widest uppercase">01 // Expertise</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-8 group relative overflow-hidden bg-surface-container-low rounded-xl h-[500px]">
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent z-10"></div>
              <img alt="Civil Engineering" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="large scale construction site with cranes and steel framework during sunset with industrial atmospheric lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTNTWwSBY86RBg-1ZnMByM9CyOnQNMtjPoD9xPi9-9HL_7_OlkSyGclZjoVcBcWQsttDELT_3sbZw_o4nhugY3fHiU9XT7vyeEuUwlSFrv9k9x_RmHz2_XcnCmAW91je7gbQy51Rqztv-YbRZHT1ln0Xp_H2r2vf0gCRiHcsLI8l8Crb4kvGtvFYNTo3sktzWuVYen-if0NP_UzigMnuEDDVKDMA3z73uCWsQMJNtR8bI6oRGutFHdN6RO8uRD5s752xHz2WdS9tt4"/>
              <div className="absolute bottom-0 left-0 p-12 z-20">
                <span className="material-symbols-outlined text-white text-5xl mb-6" data-icon="foundation">foundation</span>
                <h3 className="text-4xl font-bold text-white mb-4">Civil Infrastructure</h3>
                <p className="text-white/80 max-w-md mb-6">Structural development, foundation engineering, and heavy machinery logistics for industrial facilities.</p>
                <button className="bg-white text-primary px-8 py-3 font-bold text-sm tracking-widest uppercase rounded-sm hover:bg-primary hover:text-white transition-colors">View Projects</button>
              </div>
            </div>

            <div className="md:col-span-4 bg-surface-container-lowest p-8 rounded-xl border-t-4 border-primary flex flex-col justify-between shadow-sm">
              <div>
                <span className="material-symbols-outlined text-primary text-4xl mb-6" data-icon="electric_bolt">electric_bolt</span>
                <h3 className="text-2xl font-bold text-primary mb-4">MEP Systems</h3>
                <p className="text-secondary text-sm leading-relaxed mb-6">Mechanical, Electrical, and Plumbing engineering. Integrated power distribution and piping systems designed for maximum efficiency.</p>
                <ul className="space-y-3 text-xs font-bold text-outline uppercase tracking-wider">
                  <li className="flex items-center gap-2"><span className="w-1 h-1 bg-primary rounded-full"></span> Power Grid Design</li>
                  <li className="flex items-center gap-2"><span className="w-1 h-1 bg-primary rounded-full"></span> Fire Protection Systems</li>
                  <li className="flex items-center gap-2"><span className="w-1 h-1 bg-primary rounded-full"></span> High-Voltage Installations</li>
                </ul>
              </div>
              <Link className="mt-8 text-primary font-bold text-xs uppercase tracking-widest flex items-center gap-2 hover:gap-4 transition-all" href="#">
                  Technical Specs <span className="material-symbols-outlined text-sm" data-icon="arrow_forward">arrow_forward</span>
              </Link>
            </div>

            <div className="md:col-span-4 bg-primary text-white p-10 rounded-xl flex flex-col justify-center items-start">
              <span className="material-symbols-outlined text-white/50 text-6xl mb-8" data-icon="ac_unit">ac_unit</span>
              <h3 className="text-3xl font-black tracking-tight mb-4 uppercase">Industrial HVAC</h3>
              <p className="text-white/70 text-sm mb-8">Climate control solutions for cleanrooms, server halls, and industrial warehouses.</p>
              <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden">
                <div className="w-3/4 h-full bg-white"></div>
              </div>
              <span className="mt-4 text-[10px] uppercase font-bold tracking-widest opacity-60">High Efficiency Standards</span>
            </div>

            <div className="md:col-span-8 group relative overflow-hidden bg-surface-container-low rounded-xl h-[400px]">
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors z-10"></div>
              <img alt="Interior Design" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="minimalist corporate office interior with architectural lighting, wood panels, and large glass windows" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAypYUTtErRpR34ycRyxaJLO9Bf2RuzE2pM5ueH66zSDUCfijJH3J5I4gMIzDyGeynZbczimTrVu0nBGGcFNn0eavnNdZYT2XCr0lwKggD5YLGjd625EJrGSI_vODcOTMdikDNO29vuL9H-lLxDI3foB1mhI07Ns9RQTw_oht8rm_cWiRipVPCF7IA7OVf2zu4i_i5G42xvrTYVjp-Tye2Dpgx880OcLD6dOheSi_jmb3Fkz5Yrph-HoB4hZNINb9VJg_umGjE76x-2"/>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-12 z-20">
                <h3 className="text-4xl font-black text-white mb-2 tracking-tighter uppercase">Interior Architecture</h3>
                <p className="text-white/90 font-medium max-w-lg mb-6">Fusing industrial durability with high-end aesthetic precision for commercial spaces.</p>
                <div className="flex gap-4">
                  <span className="px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold uppercase rounded-full">Bespoke Fitting</span>
                  <span className="px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold uppercase rounded-full">Acoustic Panels</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-32">
          <div className="flex items-baseline justify-between mb-12 border-b border-outline-variant/20 pb-6">
            <h2 className="text-3xl font-extrabold tracking-tight text-primary uppercase">Precision Components</h2>
            <span className="text-xs font-bold text-outline tracking-widest uppercase">02 // Equipment</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
            <div className="group cursor-pointer">
              <div className="aspect-[4/5] bg-surface-container-low rounded-sm overflow-hidden mb-6 relative">
                <img alt="Product" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" data-alt="industrial metal turbine component with high precision machining and metallic sheen" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTLMtJKSpHfXO_LN2gQ4s32pocGKAJGhLiPa3sAUUuXe3JOgVC3foZD0VmZtIydAxkSZYf-xfuvK-1Td0J7DDS1Bj_6m15qKV_Yhe9okAjVyEhp8ffJRKpSizNGjIm7plZ_7Z3J3koW6UvxvD1okVGYa0Lr6Te9svzZvMiwSZ2gzH70V8KNax_xttkO_j5faATqfXAUsJODCko7JX17Hb35f4KH7rqOOTtV92kcqh80OxfOnUlvQfhdl8mvSaEx30UQ_r4zxzFThfY"/>
                <div className="absolute top-4 right-4">
                  <span className="bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase">In Stock</span>
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-sm font-black uppercase text-primary tracking-tight">Industrial Turbine V2</h4>
                  <p className="text-xs text-outline font-medium mt-1">Mechanical Series</p>
                </div>
                <span className="text-sm font-bold text-primary">POA</span>
              </div>
              <p className="mt-4 text-xs text-secondary leading-relaxed">High-performance air distribution unit for heavy-duty industrial ventilation systems.</p>
            </div>

            <div className="group cursor-pointer">
              <div className="aspect-[4/5] bg-surface-container-low rounded-sm overflow-hidden mb-6 relative">
                <img alt="Product" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" data-alt="modern electrical circuit breaker panel with clean wiring and technical switches" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUNxd1lm8ZGnM4ygW41XmAPrr7QfbUwy7mdh9CTGp7-8I1BT4GAPhi9Yz-ft-HG2PlvX_MAxfOrqH9lz2bAB21uSg5f2fDhicLwgKpApQ8G831KULGXZIbllI9NdKZbROPJHcLEUcTeA730gPOOuwIRL6K3MS3EbpYOkN6liBtH7HC44AK8iknEFdvw4K9V09V_Mdnt3KCXr0TTqzHExyhfNZLs1JPc4tFMdI2We8Wm8Ue1YpxGXd2Mr9PcHbWvL9CdhTjx_9j7nSP"/>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-sm font-black uppercase text-primary tracking-tight">Smart Grid Panel</h4>
                  <p className="text-xs text-outline font-medium mt-1">Electrical Tier</p>
                </div>
                <span className="text-sm font-bold text-primary">POA</span>
              </div>
              <p className="mt-4 text-xs text-secondary leading-relaxed">Automated power management system with real-time diagnostic reporting capabilities.</p>
            </div>

            <div className="group cursor-pointer">
              <div className="aspect-[4/5] bg-surface-container-low rounded-sm overflow-hidden mb-6 relative">
                <img alt="Product" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" data-alt="architectural concrete finish samples showing different textures and shades of gray" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDYKf1j-SOTAvvh2esJkTtEGWVxrtZJXWeE-bySeVK8efMJyip42-POrBS8bdb27lKp3ZPm6rrjvy50LZBq9l6xlnDYg6wDxKrRh2nJ7y0YX0fmqaNIzakPSDW_iGxe3qiV_rZV31ctW5hP-HcuIBiBzmFMasDkgkPLjqGMUI6ls9sfgSZUCe6AHOrswZwl7GQQ9Gyj-QNA9c0xFQH7-F0r0H3nI1q3fJsM7FWxKb8GJyRZ-DYNavz2Rqg8W5SQZJ-7COgNzzimBGg"/>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-sm font-black uppercase text-primary tracking-tight">Cast Architectural Slab</h4>
                  <p className="text-xs text-outline font-medium mt-1">Civil Finish</p>
                </div>
                <span className="text-sm font-bold text-primary">POA</span>
              </div>
              <p className="mt-4 text-xs text-secondary leading-relaxed">Custom-poured high-strength concrete slabs with precision edge detailing for modern exteriors.</p>
            </div>

            <div className="group cursor-pointer">
              <div className="aspect-[4/5] bg-surface-container-low rounded-sm overflow-hidden mb-6 relative">
                <img alt="Product" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" data-alt="professional plumbing copper pipe manifold with precision joints and valves" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAAd4MRHoydDwrvW-wdVl3VAvVpB8hYk77krVMcY1fr-IfYWMDWjDqnrcnF05BvsK7Vtt01-3XEz--4QS7L8m6bJ7_6CXv3TElrMasvSeWEiWTVYmwVHLw6KV31vwahx8tTF3Tc2crT6ZNHsP13L8BSIY8VqnepGFNjYm2b_d7-JHSwYExjTGSPAec3W1X1yVz_6MObdNV2MZeuXs5ZQOLUkX7FQLu2yHCapK9Lcr3Cfw_EIGe8xuq6nX7iJq9BOp8bl8s-YiZTaaru"/>
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors"></div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-sm font-black uppercase text-primary tracking-tight">Flow-Max Manifold</h4>
                  <p className="text-xs text-outline font-medium mt-1">MEP Utility</p>
                </div>
                <span className="text-sm font-bold text-primary">POA</span>
              </div>
              <p className="mt-4 text-xs text-secondary leading-relaxed">Precision copper piping manifold for multi-zone hydraulic heating and cooling networks.</p>
            </div>
          </div>
          <div className="mt-16 flex justify-center">
            <button className="px-10 py-4 border-2 border-primary text-primary font-bold text-sm tracking-[0.2em] uppercase hover:bg-primary hover:text-white transition-all">Download Full Catalogue</button>
          </div>
        </section>

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

        <section className="relative rounded-2xl overflow-hidden bg-primary-container p-1 md:p-2">
          <div className="absolute inset-0">
            <img alt="Consultation" className="w-full h-full object-cover opacity-30" data-alt="modern architectural team meeting in a high-tech conference room with blue lighting and large blueprints" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3uhEJ_lYkl3d-21ipjQkgxRASYd4FtI6UZZ8PuRE84He1PZ31TorxSK9h4bzxU8wmqbaKghuPo5HRrt6TcBCqjjd0S3OOQv6shc65Oc7nven9LGxhJLywV1hQJHXwfsupoZ_W7EwQfasvrry8gfBeRL02KdJ4Xa8kpYdvi3366GqpqFoRGkMdlBu2HAScws63F-1ziOygJKq15qdxSJf39aCa-28SwPr8qimZ3QC8pceRWrM5HfZdDl3ED44rQ5rPILtzXllW1ymw"/>
          </div>
          <div className="relative bg-white/10 backdrop-blur-2xl border border-white/20 rounded-xl p-12 md:p-24 flex flex-col items-center text-center">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter uppercase leading-tight">Ready to Engineer<br/>Your Vision?</h2>
            <p className="text-white/80 text-lg max-w-xl mb-12">Consult with our lead engineers on your next industrial or commercial development project.</p>
            <div className="flex flex-col sm:flex-row gap-6">
              <button className="bg-white text-primary px-12 py-5 font-black text-sm tracking-widest uppercase hover:scale-105 transition-all">Schedule Consultation</button>
              <button className="border-2 border-white text-white px-12 py-5 font-black text-sm tracking-widest uppercase hover:bg-white hover:text-primary transition-all">Contact Us</button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-slate-900 dark:bg-black text-white w-full mt-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-12 py-16 border-t border-slate-800 max-w-7xl mx-auto">
          <div className="space-y-6">
            <span className="text-white font-bold tracking-tighter text-2xl uppercase">BAHANA TOTALINDO TEKNIK</span>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">Leading general contracting and technical services firm specializing in integrated engineering solutions across Southeast Asia.</p>
            <div className="flex gap-4">
              <Link className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center hover:bg-white hover:text-slate-900 transition-colors" href="#">
                <span className="material-symbols-outlined text-sm" data-icon="share">share</span>
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h5 className="label-md uppercase tracking-widest text-slate-400 font-bold text-xs mb-6">Directory</h5>
              <ul className="space-y-4">
                <li><Link className="text-slate-500 hover:text-white transition-opacity duration-300 text-sm font-medium" href="/">Home</Link></li>
                <li><Link className="text-white transition-opacity duration-300 text-sm font-medium" href="/services">Services</Link></li>
                <li><Link className="text-slate-500 hover:text-white transition-opacity duration-300 text-sm font-medium" href="/products">Products</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="label-md uppercase tracking-widest text-slate-400 font-bold text-xs mb-6">Company</h5>
              <ul className="space-y-4">
                <li><Link className="text-slate-500 hover:text-white transition-opacity duration-300 text-sm font-medium" href="#about">About</Link></li>
                <li><Link className="text-slate-500 hover:text-white transition-opacity duration-300 text-sm font-medium" href="#portfolio">Portfolio</Link></li>
                <li><Link className="text-slate-500 hover:text-white transition-opacity duration-300 text-sm font-medium" href="#contact">Contact</Link></li>
              </ul>
            </div>
          </div>
          <div className="bg-slate-800/50 p-8 rounded-lg">
            <h5 className="label-md uppercase tracking-widest text-white font-bold text-xs mb-4">Newsletter</h5>
            <p className="text-slate-400 text-xs mb-6">Receive technical updates and project insights monthly.</p>
            <div className="flex gap-2">
              <input className="bg-slate-900 border-none text-white text-xs px-4 py-3 flex-grow focus:ring-1 focus:ring-blue-500" placeholder="Email Address" type="email"/>
              <button className="bg-primary px-4 py-3"><span className="material-symbols-outlined" data-icon="send">send</span></button>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-12 py-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="label-md uppercase tracking-widest text-slate-400 text-[10px]">© 2024 PT. Bahana Totalindo Teknik. Engineering Excellence.</span>
          <div className="flex gap-8 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
            <Link className="hover:text-white" href="#">Privacy Policy</Link>
            <Link className="hover:text-white" href="#">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </>
  );
}
