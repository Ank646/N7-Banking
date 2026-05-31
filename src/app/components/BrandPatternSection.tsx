"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { N7Mark } from "./N7Mark";

const GRID_MARKS = Array.from({ length: 12 });

export default function BrandPatternSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="bg-[#050C17] py-24 border-t border-white/[0.04] overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block mb-5 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-blue-500/10 text-blue-400 border border-blue-500/20">
              GET STARTED
            </span>
            <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight mb-6">
              Try N7 for free.<br />
              <span className="gradient-text">No card required.</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              Spin up a full sandbox environment in minutes. Test every API, explore the dashboard, and build your first integration — completely free.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#" className="btn-primary inline-flex items-center gap-2 px-6 py-3 text-sm">
                Start for free
                <ArrowRight size={15} />
              </a>
              <a href="#" className="btn-outline inline-flex items-center gap-2 px-6 py-3 text-sm">
                Book a demo
              </a>
            </div>
            <p className="text-slate-600 text-xs mt-5">
              Full sandbox · No credit card · SOC 2 certified
            </p>
          </motion.div>

          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="grid grid-cols-4 gap-6">
              {GRID_MARKS.map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.04 }}
                  className="w-12 h-12 flex items-center justify-center"
                >
                  <N7Mark
                    size={42}
                    className={`${
                      i % 3 === 0
                        ? "text-blue-500"
                        : i % 3 === 1
                        ? "text-blue-400/50"
                        : "text-blue-600/30"
                    }`}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
