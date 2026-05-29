"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden py-24">
      {/* Background layers */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-[#0A1628] to-blue-950" />

        {/* Top gradient line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

        {/* Bottom gradient line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

        {/* Radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(99,179,237,1) 1px, transparent 1px), linear-gradient(90deg, rgba(99,179,237,1) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      {/* Decorative left orb */}
      <motion.div
        className="absolute left-[-80px] top-1/2 -translate-y-1/2 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl pointer-events-none"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Decorative right orb */}
      <motion.div
        className="absolute right-[-80px] top-1/2 -translate-y-1/2 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl pointer-events-none"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      {/* Main content */}
      <motion.div
        className="container-custom text-center relative z-10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {/* Sparkles icon */}
        <motion.div
          className="flex justify-center mb-4"
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        >
          <Sparkles className="text-blue-400 w-8 h-8" />
        </motion.div>

        {/* Heading */}
        <h2 className="text-4xl lg:text-6xl font-black text-white leading-tight">
          {"Tired of the future?"}
          <br />
          {"Let's kick the future "}
          <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
            now.
          </span>
        </h2>

        {/* Subtext */}
        <p className="text-slate-400 max-w-2xl mx-auto mt-4 text-lg leading-relaxed">
          Stop waiting for the perfect moment. The tools are ready, the infrastructure is live, and
          your competitors are already moving. Join thousands of teams shipping faster with less
          effort.
        </p>

        {/* Button row */}
        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          <button className="btn-primary flex items-center gap-2 px-8 py-4 text-lg font-semibold rounded-xl bg-blue-600 hover:bg-blue-500 text-white transition-colors duration-200">
            Start for free
            <ArrowRight className="w-5 h-5" />
          </button>
          <button className="btn-outline flex items-center gap-2 px-8 py-4 text-lg font-semibold rounded-xl border border-blue-500/50 text-blue-300 hover:bg-blue-500/10 hover:border-blue-400 transition-colors duration-200">
            Talk to sales
          </button>
        </div>

        {/* Trust text */}
        <p className="mt-6 text-sm text-slate-500 tracking-wide">
          No credit card required · SOC 2 certified · GDPR compliant
        </p>
      </motion.div>
    </section>
  );
}
