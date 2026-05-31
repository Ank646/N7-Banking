"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#030B15]">
      
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-[8%] top-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#007BFF]/15 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-[1440px] mx-auto px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[48%_52%] items-center gap-8 pt-28 lg:pt-20 pb-10">

          
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-center text-center lg:items-start lg:text-left"
          >
            
            <h1
              className="text-white leading-[1.05] tracking-[-0.03em] mb-6"
              style={{
                fontSize: "clamp(3.2rem, 5vw, 3.5rem)",
                fontWeight: 500,
              }}
            >
              The new foundation<br />
              of modern banking
            </h1>

            
            <p
              className="text-slate-400 leading-[1.7] mb-14"
              style={{ fontSize: "1rem", maxWidth: "30rem" }}
            >
              We drive innovation and growth, provide seamless
              customer experience and operational excellence
            </p>

            
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-14">
              <a
                href="#"
                className="inline-flex items-center justify-center h-12 px-10 rounded-lg text-white text-[11px] font-semibold tracking-[0.18em] uppercase transition hover:opacity-90"
                style={{ background: "linear-gradient(135deg,#1EA7FF 0%,#1D4ED8 100%)" }}
              >
                Request Demo
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center h-12 px-10 rounded-lg text-white text-[11px] font-semibold tracking-[0.18em] uppercase border border-white/40 hover:bg-white/60 transition"
              >
                Contact Us
              </a>
            </div>

            
            <div className="flex flex-col items-center lg:items-start">
              <p className="text-slate-400 text-sm mb-4">Trusted By:</p>
              <Image
                src="/trusted-by-row.png"
                alt="Trusted companies"
                width={620}
                height={32}
                className="h-6 w-auto max-w-full object-contain"
              />
            </div>
          </motion.div>

          
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative flex justify-center lg:justify-center overflow-visible"
          >
            <div className="relative w-full">
              <div className="absolute inset-0 bg-[#007BFF]/20 blur-[120px] rounded-full scale-90" />
              <Image
                src="/hero-image.png"
                alt="N7 Banking Platform"
                width={950}
                height={700}
                priority
                className="relative z-10 h-auto object-contain w-full lg:w-[125%] lg:-ml-[10%]"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
