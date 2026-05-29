"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const companies = [
  "HSBC",
  "Standard Chartered",
  "ING Direct",
  "Revolut",
  "N26",
  "Starling Bank",
  "Monzo",
  "Wise",
  "Stripe",
  "Adyen",
  "Klarna",
  "Chime",
];

export default function TrustSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const allCompanies = [...companies, ...companies];

  return (
    <section className="py-12 border-y border-white/5 bg-[#050C17]/50">
      <div className="container-custom">
        <motion.p
          ref={ref}
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.5 }}
          className="text-center text-slate-500 text-sm uppercase tracking-widest mb-8"
        >
          Trusted by 500+ financial institutions worldwide
        </motion.p>

        <div className="overflow-hidden">
          <div className="flex gap-0 animate-marquee whitespace-nowrap">
            {allCompanies.map((name, index) => (
              <span
                key={index}
                className="font-semibold text-slate-600 hover:text-slate-400 transition-colors text-lg px-8 cursor-default"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
