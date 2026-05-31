"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface CTABannerProps {
  brand?: "CB7" | "N7";
}

export function CTABanner({ brand = "N7" }: CTABannerProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden rounded-3xl bg-[#050C17]"
    >
      
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at left center, rgba(59,130,246,0.18), transparent 55%)",
        }}
      />

      
      <div
        className="absolute right-0 top-1/2 pointer-events-none select-none"
        style={{
          fontSize: "32vw",
          fontWeight: 900,
          color: "rgba(59,130,246,0.05)",
          lineHeight: 1,
          letterSpacing: "-0.06em",
          transform: "translateY(-50%) translateX(18%)",
        }}
        aria-hidden="true"
      >
        {brand}
      </div>

      
      <div className="absolute inset-0 opacity-10">
        <div className="absolute left-1/2 top-0 h-full w-px bg-blue-500" />
        <div className="absolute right-1/4 top-0 h-full w-px bg-blue-500" />
      </div>

      <div className="relative z-10 px-8 md:px-12 lg:px-16 py-14 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10"
        >
          
          <div className="max-w-2xl">
            <h2
              className="font-semibold text-white leading-[1.1] mb-6"
              style={{ fontSize: "clamp(1.6rem, 4vw, 3.5rem)", textWrap: "balance" } as React.CSSProperties}
            >
              Take the full advantage of going paper-less now.
            </h2>

            <p className="text-slate-400 text-sm leading-relaxed max-w-md">
              {brand === "CB7"
                ? "CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations."
                : "N7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations."}
            </p>
          </div>

          
          <div className="flex flex-row flex-wrap gap-3 lg:flex-shrink-0">
            <a
              href="#"
              className="inline-flex items-center justify-center h-12 min-w-[120px] rounded-lg border border-white/60 text-white text-xs font-semibold uppercase tracking-[0.15em] transition-all hover:border-white/60 hover:bg-white/5"
            >
              Contact Us
            </a>

            <a
              href="#"
              className="inline-flex items-center justify-center h-12 min-w-[120px] rounded-lg bg-gradient-to-r from-blue-500 to-blue-700 text-white text-xs font-semibold uppercase tracking-[0.15em] transition-all hover:scale-[1.02]"
            >
              Request Demo
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function CTASection() {
  return (
    <div className="w-full px-4 md:px-6 lg:px-8 py-12">
      <CTABanner brand="N7" />
    </div>
  );
}