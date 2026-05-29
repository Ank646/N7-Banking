"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-[#050C17]">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-blue-600/8 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
      </div>

      <div className="container-custom w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* LEFT */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-slate-400 text-sm mb-4 uppercase tracking-widest"
            >
              Future of Banking Products built with Focus to deliver ambient user experience and a customer-centric approach.
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight text-white mb-6"
            >
              The new foundation<br />
              of modern banking.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="text-slate-400 text-base leading-relaxed max-w-lg mb-8"
            >
              N7 provides the complete cloud-native banking infrastructure — tailor-made for fintechs, digital banks, and financial institutions ready to move at the speed of innovation.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <a href="#" className="btn-primary inline-flex items-center gap-2 px-7 py-3 text-sm font-semibold">
                Discover
              </a>
              <a href="#" className="btn-outline inline-flex items-center gap-2 px-7 py-3 text-sm font-medium">
                Read More
                <ArrowRight size={14} />
              </a>
            </motion.div>
          </div>

          {/* RIGHT — actual hero image */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="absolute inset-0 bg-blue-500/10 rounded-full blur-3xl scale-90 pointer-events-none" />
            <Image
              src="/hero-image.png"
              alt="N7 Banking Platform"
              width={580}
              height={420}
              className="w-full max-w-lg h-auto object-contain relative drop-shadow-2xl"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
