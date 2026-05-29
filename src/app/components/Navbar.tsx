"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Platform", href: "#platform" },
  { label: "Solutions", href: "#solutions" },
  { label: "Customers", href: "#customers" },
  { label: "Pricing", href: "#pricing" },
  { label: "Docs", href: "#docs" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "backdrop-blur-xl bg-[#050C17]/80 border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* LEFT: Logo */}
            <a href="/" className="flex items-center gap-2">
              <span className="relative flex items-center gap-1.5">
                <span className="font-black text-2xl bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent tracking-tight">
                  N7
                </span>
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-400" />
                </span>
              </span>
            </a>

            {/* CENTER: Desktop nav links */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="relative text-sm font-medium text-white/70 hover:text-blue-400 transition-colors duration-200 group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-blue-400 transition-all duration-200 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* RIGHT: CTA buttons (desktop) */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href="#signin"
                className="text-sm font-medium text-white/70 hover:text-white transition-colors duration-200"
              >
                Sign in
              </a>
              <a
                href="#get-started"
                className="text-sm font-semibold px-5 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 text-white transition-all duration-200 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30"
              >
                Get Started
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg text-white/70 hover:text-white hover:bg-white/5 transition-colors duration-200"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile nav overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-nav"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="fixed inset-0 z-40 flex flex-col backdrop-blur-xl bg-[#050C17]/95 pt-16"
          >
            <nav className="flex flex-col mt-4">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.2 }}
                  className="py-4 px-6 text-lg font-medium text-white/80 hover:text-blue-400 hover:bg-white/5 border-b border-white/5 transition-colors duration-200"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>

            <div className="flex flex-col gap-3 px-6 mt-8">
              <a
                href="#signin"
                className="w-full text-center py-3 rounded-lg text-sm font-medium text-white/70 hover:text-white border border-white/10 hover:border-white/20 transition-colors duration-200"
                onClick={() => setMobileOpen(false)}
              >
                Sign in
              </a>
              <a
                href="#get-started"
                className="w-full text-center py-3 rounded-lg text-sm font-semibold bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 text-white transition-all duration-200 shadow-lg shadow-blue-500/20"
                onClick={() => setMobileOpen(false)}
              >
                Get Started
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
