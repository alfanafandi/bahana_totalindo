import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-slate-50/80 dark:bg-slate-950/80 backdrop-blur-xl sticky top-0 z-50 transition-all duration-300">
      <nav className="flex justify-between items-center px-8 py-4 max-w-full mx-auto">
        <Link href="/" className="flex items-center gap-3">
          <img src="/assets/services/img21.jpg" alt="BTT Logo" className="h-10 w-auto object-contain rounded" />
          <h1 className="text-xl font-black text-blue-900 dark:text-white tracking-tighter uppercase font-inter hidden sm:block">
            BAHANA TOTALINDO TEKNIK
          </h1>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link className="font-inter tracking-tight uppercase font-bold text-sm text-slate-500 dark:text-slate-400 hover:text-blue-800 transition-colors" href="/">
            Home
          </Link>
          <div className="relative group py-2">
            <Link className="font-inter tracking-tight uppercase font-bold text-sm text-slate-500 dark:text-slate-400 group-hover:text-blue-800 transition-colors flex items-center gap-1" href="/about">
              About
              <span className="material-symbols-outlined text-sm transition-transform group-hover:rotate-180">arrow_drop_down</span>
            </Link>
            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 hidden group-hover:block w-56">
              <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-2xl rounded-xl overflow-hidden flex flex-col p-2 gap-1 relative before:absolute before:-top-2 before:left-1/2 before:-translate-x-1/2 before:border-8 before:border-transparent before:border-b-white dark:before:border-b-slate-900">
                <Link href="/about" className="px-4 py-3 text-xs font-bold text-slate-600 dark:text-slate-300 hover:text-blue-700 hover:bg-blue-50 dark:hover:bg-slate-800 rounded-lg flex items-center gap-3 transition-colors">
                  <span className="material-symbols-outlined text-[18px]">business</span>
                  Company Profile
                </Link>
                <Link href="/legality" className="px-4 py-3 text-xs font-bold text-slate-600 dark:text-slate-300 hover:text-blue-700 hover:bg-blue-50 dark:hover:bg-slate-800 rounded-lg flex items-center gap-3 transition-colors">
                  <span className="material-symbols-outlined text-[18px]">gavel</span>
                  Legality &amp; Certs
                </Link>
              </div>
            </div>
          </div>
          <Link className="font-inter tracking-tight uppercase font-bold text-sm text-slate-500 dark:text-slate-400 hover:text-blue-800 transition-colors" href="/services">
            Services
          </Link>
          <Link className="font-inter tracking-tight uppercase font-bold text-sm text-slate-500 dark:text-slate-400 hover:text-blue-800 transition-colors" href="/portfolio">
            Portfolio
          </Link>
          <Link className="font-inter tracking-tight uppercase font-bold text-sm text-slate-500 dark:text-slate-400 hover:text-blue-800 transition-colors" href="/contact">
            Contact
          </Link>

        </div>
        <button className="md:hidden p-2 text-primary">
          <span className="material-symbols-outlined">menu</span>
        </button>
      </nav>
    </header>
  );
}
