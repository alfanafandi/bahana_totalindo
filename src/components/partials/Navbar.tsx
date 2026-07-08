"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  return (
    <header className="bg-slate-50/80 dark:bg-slate-950/80 backdrop-blur-xl sticky top-0 z-50 transition-all duration-300">
      <nav className="flex justify-between items-center px-4 sm:px-8 py-4 max-w-full mx-auto">
        <Link href="/" className="flex items-center gap-3">
          <img src="/assets/services/img21.jpg" alt="BTT Logo" className="h-10 w-auto object-contain rounded" />
          <h1 className="text-xl font-black text-blue-900 dark:text-white tracking-tighter uppercase font-inter hidden lg:block">
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
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden p-2 text-primary dark:text-white hover:bg-slate-100 dark:hover:bg-slate-850 rounded-lg transition-colors focus:outline-none"
          aria-label="Toggle Menu"
        >
          <span className="material-symbols-outlined transition-transform duration-200">
            {isOpen ? "close" : "menu"}
          </span>
        </button>
      </nav>

      {/* Mobile Drawer */}
      <div 
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col p-6 gap-4">
          <Link 
            className="font-inter tracking-tight uppercase font-bold text-sm text-slate-600 dark:text-slate-350 hover:text-blue-800 dark:hover:text-blue-400 transition-colors py-2" 
            href="/"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          
          <div className="flex flex-col">
            <button 
              onClick={() => setIsAboutOpen(!isAboutOpen)}
              className="font-inter tracking-tight uppercase font-bold text-sm text-slate-600 dark:text-slate-350 hover:text-blue-800 dark:hover:text-blue-400 transition-colors py-2 flex items-center justify-between w-full text-left"
            >
              <span>About</span>
              <span className={`material-symbols-outlined text-sm transition-transform duration-200 ${isAboutOpen ? "rotate-180" : ""}`}>
                arrow_drop_down
              </span>
            </button>
            
            <div 
              className={`pl-4 flex flex-col gap-2 overflow-hidden transition-all duration-200 ${
                isAboutOpen ? "max-h-28 opacity-100 mt-1" : "max-h-0 opacity-0"
              }`}
            >
              <Link 
                href="/about" 
                className="px-4 py-2 text-xs font-bold text-slate-500 dark:text-slate-400 hover:text-blue-700 dark:hover:text-blue-400 hover:bg-blue-50/50 dark:hover:bg-slate-800/50 rounded-lg flex items-center gap-3 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <span className="material-symbols-outlined text-[18px]">business</span>
                Company Profile
              </Link>
              <Link 
                href="/legality" 
                className="px-4 py-2 text-xs font-bold text-slate-500 dark:text-slate-400 hover:text-blue-700 dark:hover:text-blue-400 hover:bg-blue-50/50 dark:hover:bg-slate-800/50 rounded-lg flex items-center gap-3 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <span className="material-symbols-outlined text-[18px]">gavel</span>
                Legality &amp; Certs
              </Link>
            </div>
          </div>

          <Link 
            className="font-inter tracking-tight uppercase font-bold text-sm text-slate-600 dark:text-slate-350 hover:text-blue-800 dark:hover:text-blue-400 transition-colors py-2" 
            href="/services"
            onClick={() => setIsOpen(false)}
          >
            Services
          </Link>
          <Link 
            className="font-inter tracking-tight uppercase font-bold text-sm text-slate-600 dark:text-slate-350 hover:text-blue-800 dark:hover:text-blue-400 transition-colors py-2" 
            href="/portfolio"
            onClick={() => setIsOpen(false)}
          >
            Portfolio
          </Link>
          <Link 
            className="font-inter tracking-tight uppercase font-bold text-sm text-slate-600 dark:text-slate-350 hover:text-blue-800 dark:hover:text-blue-400 transition-colors py-2" 
            href="/contact"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
}
