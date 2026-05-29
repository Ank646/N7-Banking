"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

// Decorative SVG icons matching Frame 87
function SpiralIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="text-slate-400">
      <path d="M16 4C9.373 4 4 9.373 4 16s5.373 12 12 12 12-5.373 12-12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M16 8C11.582 8 8 11.582 8 16s3.582 8 8 8 8-3.582 8-8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M16 12c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

function N7Icon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="text-slate-400">
      <line x1="16" y1="2" x2="16" y2="30" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      <line x1="2" y1="16" x2="30" y2="16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      <line x1="5.5" y1="5.5" x2="26.5" y2="26.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      <line x1="26.5" y1="5.5" x2="5.5" y2="26.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  );
}

function CircleArrowIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="text-slate-400">
      <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="16" cy="16" r="7" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M16 4 A12 12 0 0 1 28 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"/>
      <path d="M28 13 L28 16 L25 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function StarIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="text-slate-400">
      <path d="M16 3L18.5 13.5L29 16L18.5 18.5L16 29L13.5 18.5L3 16L13.5 13.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    </svg>
  );
}

function CrossIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="text-slate-400">
      <path d="M8 8L24 24M24 8L8 24" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      <path d="M16 4V28M4 16H28" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  );
}

const products = [
  {
    icon: <SpiralIcon />,
    title: "Core Banking CB7",
    desc: "CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations for your employees, improve risk management, increase productivity, and ensure full regulatory compliance.",
  },
  {
    icon: <N7Icon />,
    title: "Digital Banking N7",
    desc: "N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients.",
  },
  {
    icon: <CircleArrowIcon />,
    title: "Open Banking",
    desc: "Our API banking helps you to gain actionable insights, enable account aggregation, streamline customer onboarding, KYC, and payment initiation, offer predictive budgeting tools, and introduce enhanced credit scoring.",
  },
  {
    icon: <StarIcon />,
    title: "Loan Origination System",
    desc: "N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients.",
  },
  {
    icon: <CrossIcon />,
    title: "Loan Management System",
    desc: "N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients.",
  },
];

export default function WhyN7Section() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} id="solutions" className="bg-[#050C17] py-24 border-t border-white/[0.04]">
      <div className="container-custom">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
        >
          <div>
            <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight mb-4">
              All of our solutions are tailor-<br />made to your needs.
            </h2>
            <p className="text-slate-400 text-base max-w-xl">
              From core banking to open banking APIs — every N7 solution is built to adapt to the exact requirements of your institution.
            </p>
          </div>
          <a href="#" className="flex-shrink-0 inline-flex items-center gap-2 px-7 py-3 rounded-lg border border-white/20 text-white text-sm font-semibold hover:bg-white/5 transition-colors">
            Request Demo
          </a>
        </motion.div>

        {/* Product cards — 2-col grid, last item full width on odd */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/[0.05] rounded-2xl overflow-hidden">
          {products.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className={`bg-[#050C17] p-8 group hover:bg-[#070F1E] transition-colors ${
                i === products.length - 1 && products.length % 2 !== 0 ? "md:col-span-2" : ""
              }`}
            >
              <div className="mb-5">{p.icon}</div>
              <h3 className="text-white font-bold text-lg mb-3">{p.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-5">{p.desc}</p>
              <a href="#" className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-blue-400 hover:text-blue-300 transition-colors">
                LEARN MORE <ArrowRight size={12} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
