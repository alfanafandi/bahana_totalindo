import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-slate-50/80 dark:bg-slate-950/80 backdrop-blur-xl sticky top-0 z-50 transition-all duration-300">
      <nav className="flex justify-between items-center px-8 py-4 max-w-full mx-auto">
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-blue-900 dark:text-blue-400 text-3xl">architecture</span>
          <h1 className="text-xl font-black text-blue-900 dark:text-white tracking-tighter uppercase font-inter">
            BAHANA TOTALINDO TEKNIK
          </h1>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <Link className="font-inter tracking-tight uppercase font-bold text-sm text-slate-500 dark:text-slate-400 hover:text-blue-800 transition-colors" href="/">
            Home
          </Link>
          <Link className="font-inter tracking-tight uppercase font-bold text-sm text-slate-500 dark:text-slate-400 hover:text-blue-800 transition-colors" href="/about">
            About
          </Link>
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
