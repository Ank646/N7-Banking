"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const companies = ["HSBC", "Standard Chartered", "ING Direct", "Revolut", "N26", "Starling Bank", "Monzo", "Wise", "Stripe", "Adyen", "Klarna", "Chime"];
const doubled = [...companies, ...companies];

export default function TrustSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-10 border-y border-white/[0.05] bg-[#050C17]/80">
      <div className="container-custom mb-6">
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center text-slate-500 text-xs uppercase tracking-widest"
        >
          Trusted by leading financial institutions worldwide
        </motion.p>
      </div>
      <div className="overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {doubled.map((name, i) => (
            <span key={i} className="text-slate-600 hover:text-slate-400 transition-colors font-semibold text-base px-8 cursor-default">
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
