"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

function SpiralIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <path d="M14 3C7.925 3 3 7.925 3 14s4.925 11 11 11 11-4.925 11-11" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M14 7C9.582 7 6 10.582 6 15s3.582 8 8 8 8-3.582 8-8" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M14 11c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}
function N7Icon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <line x1="14" y1="2" x2="14" y2="26" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="2" y1="14" x2="26" y2="14" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="5" y1="5" x2="23" y2="23" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="23" y1="5" x2="5" y2="23" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}
function CircleArrowIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <circle cx="14" cy="14" r="11" stroke="#94A3B8" strokeWidth="1.5"/>
      <circle cx="14" cy="14" r="6" stroke="#94A3B8" strokeWidth="1.5"/>
      <path d="M14 3 A11 11 0 0 1 25 14" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round"/>
      <path d="M23 11L25 14L22 14" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
function StarIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <path d="M14 3L16 11.5L25 14L16 16.5L14 25L12 16.5L3 14L12 11.5Z" stroke="#94A3B8" strokeWidth="1.5" strokeLinejoin="round"/>
    </svg>
  );
}
function CrossIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <path d="M7 7L21 21M21 7L7 21" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M14 3V25M3 14H25" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round"/>
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
  const isInView = useInView(ref, { once: true, margin: "-200px" });

  return (
    <section ref={ref} className="bg-[#050C17] border-t border-white/[0.04]">
      <div className="w-full max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[38%_62%] min-h-0">

          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55 }}
            className="px-6 lg:px-12 pt-10 pb-16 border-r border-white/[0.05] lg:sticky lg:top-20 lg:self-start"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight mb-8">
              All of our solutions are tailor-made to your needs
            </h2>
            <a
              href="#"
              className="inline-flex items-center justify-center px-10 py-3 rounded-lg border border-white/50 hover:border-white/50 text-white text-xs font-bold tracking-widest uppercase transition-colors"
            >
              Request Demo
            </a>
          </motion.div>

          
          <div className="px-8 lg:px-12 pt-10 pb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/[0.05]">
              {products.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 16 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.45, delay: i * 0.06 }}
                  className={`bg-[#050C17] p-8 hover:bg-[#06101E] transition-colors ${
                    i === products.length - 1 && products.length % 2 !== 0
                      ? "md:col-span-2"
                      : ""
                  }`}
                >
                  <div className="mb-4">{p.icon}</div>
                  <h3 className="text-white font-semibold text-base mb-3">{p.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-5">{p.desc}</p>
                  <a href="#" className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest uppercase text-blue-400 hover:text-blue-300 transition-colors">
                    LEARN MORE <ArrowRight size={11} />
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
