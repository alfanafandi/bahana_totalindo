import Navbar from "@/components/partials/Navbar";
import Link from "next/link";

export default function PortfolioPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen pb-24">
        {/* Hero Section */}
        <section className="relative h-[530px] flex items-end px-8 pb-20 overflow-hidden bg-primary-container">
          <div className="absolute inset-0 z-0">
            <img 
              className="w-full h-full object-cover opacity-40 mix-blend-overlay" 
              data-alt="Modern high-tech construction site with steel beams and heavy machinery under a dramatic industrial sunset sky" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD25HP4ztda0nZL_UFtI3M-08-Wsmung6HjzJLehOpDvPePe0setAQrvj6a7ReDZtaopawjD3MGO_nxpysYlglskIiGQIBKE21f4Fy75Xq6dlG76sx0PRU8L44EutdBdj2eJ-RQ_JvMQBXWU1ffUkDlbwQ9wBVSobOPZmxE0PeQP-eG_-0PnqhnN63K-_ctUqadcipQPZmEpJT-e3tlRB1p5wmWfLtdTXbh5HiXenI8M0TBy4NWZreob-_tTg7FpV1y5TbLvQMWr_eH"
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

          {/* Bento Layout Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Large Featured Project */}
            <div className="md:col-span-8 group relative overflow-hidden bg-surface-container-low aspect-[16/9]">
              <img 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" 
                data-alt="Interior view of a massive modern manufacturing plant" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCoINhf9eQalZ_jFgfJlKMB-mqbjXAWHn-vNBrDdvoalYpsV0NDwktIPEdsL9P8P24JPGov4qc-WkXBjNp_owHZiWn-uX_phnMNX3BTaFWZr0g63ayD3Us1O8YMwbSMu1PGJcVQW-cxbibsv1uqe3mmlNS6WLx5hs7bopX6Ht39WU4Jbpc6_-jteSZDbFNH2BhFI5cQqp6ffhkO4Mf17sg5wtP9Yi1QF_-jIRZxJVvIE6xBnKY57pS-zeu1h3SqQswFYhYoJKbNAgtX"
                alt="Cikarang Logistics Hub"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-10">
                <span className="text-white/60 text-xs font-bold uppercase tracking-[0.3em] mb-2">Civil Construction</span>
                <h3 className="text-white text-3xl font-bold mb-4">Cikarang Logistics Hub</h3>
                <p className="text-white/80 max-w-lg text-sm mb-6">Structural assembly and architectural finishing for a 25,000 sqm distribution center with heavy-load flooring specifications.</p>
                <div className="flex items-center gap-2">
                  <span className="text-white text-[10px] font-bold uppercase tracking-widest">Client: PT. Logistik Indonesia</span>
                </div>
              </div>
            </div>

            {/* Secondary Project */}
            <div className="md:col-span-4 group relative overflow-hidden bg-surface-container-low aspect-square">
              <img 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
                data-alt="Close up of high-precision industrial HVAC ducting" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxKw9C2lajTCooqjmpRYZwjXsjndYUMPgBBIYkdWRovrANebLFr7LIPQAZrejC3qPJdqUmJLTVINjRSXVwLxNcGvRkJgWTPYTW6pNSeT-dsTh1HtAsq7dG1BpGQauE3F3Nozr8P7Tl8IX63m85d4jgj0jLlvqEaqGR4nh7dTs54RJIDlapM4y1vRdt9flapLnQnQVb1BrpY025dmw2be4ZQcSsmxFIFkwLZlSMo9WGY3Fze82ZZAvf72DtGWF2Qi5GnEtHkuIuc9Sq"
                alt="Pharma Clean Room"
              />
              <div className="absolute inset-0 bg-white/70 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center text-center p-8">
                <span className="text-primary text-[10px] font-bold uppercase tracking-[0.2em] mb-3">HVAC Systems</span>
                <h3 className="text-primary text-xl font-bold mb-4">Pharma Clean Room</h3>
                <p className="text-secondary text-xs mb-4">Integrated HEPA filtration and climate control system for medical-grade production.</p>
                <Link className="text-primary border-b border-primary text-[10px] font-bold uppercase tracking-widest" href="#">View Specs</Link>
              </div>
            </div>

            {/* Triple Row */}
            <div className="md:col-span-4 group relative overflow-hidden bg-surface-container-low aspect-square">
              <img 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
                data-alt="Electrical control panels" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxNTxhv07JZ5IvMqv5LDIKeIxqI_fxQoW58VbOBpo1fdqkSMgS56W8XA8lNDU0AgOHofLYetExn9gBmzKMBG9mRd4JT6cYg6z5BXPCBUWQ8oV8RDjnpupj_Kphy2Mz0Wwm85nSKswOKfUn18-ki38v4yio26onu3ngzheDGjNDaoK1ITRA2JaMVcp0e2y5XEsJ7TXzNT5qR9ZsJSkNMA1tUOhjv91WpIt0wAFezYIO30ZNx3bW4jSlb-D6CrJ4dKEje_3CdymFKbsy"
                alt="Power Grid MEP"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-white p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-primary text-lg font-bold">Power Grid MEP</h3>
                <p className="text-secondary text-xs mb-2">Data Center electrical backbone installation.</p>
                <span className="text-on-tertiary-container text-[10px] font-bold uppercase">Technical Verified</span>
              </div>
            </div>
            
            <div className="md:col-span-4 group relative overflow-hidden bg-surface-container-low aspect-square">
              <img 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
                data-alt="Minimalist modern office lobby" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBlcPx7_cFfrqcwGvrxwc6AoZRL-jiSXbCNePp0AeIHdm5rEOX7e7FbN5PAGqjhQ6od9tcKPpCiYSHM-zBLNveZQR-jotgBpECeLDajq_3ejVPZQKdf6ELxFDE6EgUCUjc5uL__xIpK6CI5ZOoSD8l0aP8R-3YIfDBAt8aYNLyRJawn6ykfGqoOyme5MN4eMNW_aA6G0BOcYNtWXFj3Q5vl8Gz9tb6nhTuf2E-V4L_zcVPGYBfc2l9mkzs6YI6zxv0U_1YDYKz-N8WI"
                alt="Corporate HQ"
              />
              <div className="absolute top-0 right-0 p-4">
                <div className="bg-primary px-3 py-1">
                  <span className="text-white text-[10px] font-bold uppercase tracking-widest">Interior</span>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 p-8">
                <h3 className="text-white text-2xl font-bold drop-shadow-md">Corporate HQ</h3>
                <p className="text-white/90 text-sm">Industrial aesthetic interior fit-out.</p>
              </div>
            </div>
            
            <div className="md:col-span-4 group relative overflow-hidden bg-surface-container-low aspect-square">
              <img 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
                data-alt="Cooling towers" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYp64tXqyO91jyJBxj2BskCY_3E1InuIJfusYkq8fBFAwiz2O8LDTpiLJNHeM90ThF1uNsMnkL48QMwiCmPQH0vCr4ntZ16p2-e7O0H7HWkZi2WqTLF7RyhsRCzhTANBEbSioWGB-ffK-Emt7pD1mQuZey3EAg2pj-fcsfJe5CfC16P1NC-4FXWUJhkkGDwbURVFonMR6GqRbDLNOIVTFLsoL4WVraDisiN09XOLXNKXuFJGK92ucD5Yb77hUx_1whYTSOi8h_w9s6"
                alt="Industrial Utility"
              />
              <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors"></div>
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <h3 className="text-white text-lg font-bold">Industrial Utility</h3>
                <p className="text-white/70 text-xs">Full-scale HVAC cooling tower assembly.</p>
              </div>
            </div>
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
