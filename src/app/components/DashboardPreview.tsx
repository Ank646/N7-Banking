"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function DashboardPreview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} id="products" className="bg-[#050C17] py-24 border-t border-white/[0.04]">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* LEFT — text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block mb-5 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-blue-500/10 text-blue-400 border border-blue-500/20">
              PLATFORM
            </span>
            <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight mb-6">
              A complete<br />
              <span className="gradient-text">cloud-based</span><br />
              core banking.
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              N7&apos;s fully cloud-native core banking engine handles everything — from ledger management and multi-currency settlements to AML compliance and regulatory reporting. One platform. Every capability.
            </p>
            <a href="#" className="btn-primary inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold">
              Discover Platform
              <ArrowRight size={15} />
            </a>
          </motion.div>

          {/* RIGHT — MacBook with AML Dashboard */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative flex justify-center"
          >
            <div className="absolute inset-0 bg-blue-500/8 rounded-full blur-3xl scale-110 pointer-events-none" />
            <Image
              src="/macbook.png"
              alt="N7 AML Dashboard on MacBook Pro"
              width={700}
              height={450}
              className="w-full max-w-lg h-auto object-contain drop-shadow-2xl relative"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
