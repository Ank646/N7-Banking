"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Solutions", href: "#solutions", hasDropdown: true },
  { label: "Resources", href: "#resources", hasDropdown: true },
  { label: "About Us", href: "#about", hasDropdown: false },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-[31px] pointer-events-none">
        
        <motion.nav
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="hidden md:grid items-center pointer-events-auto relative"
          style={{
            gridTemplateColumns: "1fr auto 1fr",
            width: "716px",
            height: "47px",
            background: "#2F2F2FB2",
            borderRadius: "12px",
            padding: "0 16px",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          
          <a href="/" className="flex-shrink-0 text-white font-bold text-lg tracking-tight">
            N7
          </a>

          
          <div className="flex items-center gap-7">
            {navLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="flex items-center gap-1 text-[11px] font-semibold tracking-widest uppercase text-white/80 hover:text-white transition-colors whitespace-nowrap"
              >
                {l.label}
                {l.hasDropdown && <ChevronDown size={11} className="opacity-60" />}
              </a>
            ))}
          </div>

          
          <div className="flex justify-end">
            <a
              href="#"
              className="inline-flex items-center justify-center px-4 py-1.5 rounded-lg border border-white/40 hover:border-white/70 text-white text-[11px] font-semibold tracking-widest uppercase transition-colors"
            >
              Request Demo
            </a>
          </div>
        </motion.nav>

        
        <div
          className="md:hidden flex items-center justify-between w-full pointer-events-auto px-6 py-3 mx-4 rounded-xl"
          style={{
            background: "#2F2F2FB2",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <a href="/" className="text-white font-bold text-lg tracking-tight">N7</a>
          <button className="text-white/80 hover:text-white p-1" onClick={() => setOpen((v) => !v)}>
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="fixed top-20 left-4 right-4 z-40 rounded-xl overflow-hidden md:hidden"
            style={{ background: "#1C1C1CE6", backdropFilter: "blur(16px)", border: "1px solid rgba(255,255,255,0.1)" }}
          >
            {navLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between px-5 py-4 text-white/80 hover:text-white text-sm font-semibold tracking-widest uppercase border-b border-white/[0.06] transition-colors"
              >
                {l.label}
                {l.hasDropdown && <ChevronDown size={14} />}
              </a>
            ))}
            <a
              href="#"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center m-4 py-3 rounded-lg border border-white/30 text-white text-[11px] font-bold tracking-widest uppercase"
            >
              Request Demo
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
