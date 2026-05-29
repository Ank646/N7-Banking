"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const blogCards = [
  { tag: "GETTING STARTED", title: "How to transition from a traditional to a digital bank", author: "David Grohl", date: "17/08/24" },
  { tag: "GETTING STARTED", title: "How to transition from a traditional to a digital bank", author: "David Grohl", date: "17/08/24" },
];

export default function InsightsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="bg-[#050C17] py-24 border-t border-white/[0.04]">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16">

          {/* LEFT — heading + button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-start"
          >
            <h2 className="text-3xl lg:text-4xl font-black text-white leading-tight mb-8">
              Get yourself up-to-speed on all the things happening in fintech
            </h2>
            <a href="#" className="inline-flex items-center justify-center px-7 py-3 rounded-lg border border-white/20 text-white text-sm font-semibold hover:bg-white/5 transition-colors self-start tracking-widest uppercase">
              INSIGHTS
            </a>
          </motion.div>

          {/* RIGHT — Frame 54 image + 2 blog cards in a 2-col grid */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

              {/* Frame 54 image card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="rounded-2xl overflow-hidden"
              >
                <Image
                  src="/n7-marks-grid.png"
                  alt="N7 Brand Pattern"
                  width={400}
                  height={280}
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* First featured blog card (top right) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="flex flex-col justify-between bg-[#0A1225] rounded-2xl p-6 border border-white/[0.06] hover:border-blue-500/20 transition-colors"
              >
                <div>
                  <span className="text-xs font-bold tracking-widest text-blue-400/70 uppercase mb-3 block">{blogCards[0].tag}</span>
                  <h3 className="text-white font-semibold text-base leading-snug mb-4">{blogCards[0].title}</h3>
                  <div className="text-slate-500 text-xs mb-6">
                    <span className="text-slate-400 font-medium">{blogCards[0].author}</span> · <span>{blogCards[0].date}</span>
                  </div>
                </div>
                <button className="w-full py-2.5 rounded-xl border border-white/10 text-xs font-bold tracking-widest uppercase text-slate-400 hover:text-white hover:border-white/20 transition-colors">
                  READ MORE
                </button>
              </motion.div>

              {/* Second blog card (bottom left) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-col justify-between bg-[#0A1225] rounded-2xl p-6 border border-white/[0.06] hover:border-blue-500/20 transition-colors"
              >
                <div>
                  <span className="text-xs font-bold tracking-widest text-blue-400/70 uppercase mb-3 block">{blogCards[1].tag}</span>
                  <h3 className="text-white font-semibold text-base leading-snug mb-4">{blogCards[1].title}</h3>
                  <div className="text-slate-500 text-xs mb-6">
                    <span className="text-slate-400 font-medium">{blogCards[1].author}</span> · <span>{blogCards[1].date}</span>
                  </div>
                </div>
                <button className="w-full py-2.5 rounded-xl border border-white/10 text-xs font-bold tracking-widest uppercase text-slate-400 hover:text-white hover:border-white/20 transition-colors">
                  READ MORE
                </button>
              </motion.div>

              {/* READ ALL INSIGHTS link spans full width */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="sm:col-span-2 flex justify-end"
              >
                <a href="#" className="inline-flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 font-semibold transition-colors">
                  <span className="underline underline-offset-2">READ</span> ALL INSIGHTS <ArrowRight size={14} />
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
