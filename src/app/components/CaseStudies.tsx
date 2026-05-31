"use client";

import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";

const slides = [
  {
    tag: "GETTING STARTED",
    title: "How we help brand reach out to more people",
    company: "Zoomerr",
    companyIcon: "⚡",
  },
  {
    tag: "GETTING STARTED",
    title: "How to transition from a traditional to a digital bank",
    company: "FinCo",
    companyIcon: "🏦",
  },
  {
    tag: "GETTING STARTED",
    title: "Scaling a neo-bank from 0 to 1 million users",
    company: "NovaPay",
    companyIcon: "💳",
  },
  {
    tag: "GETTING STARTED",
    title: "Building regulatory compliance into digital banking",
    company: "TrustBank",
    companyIcon: "🔒",
  },
];

export default function CaseStudies() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  const next = () =>
    setCurrent((prev) => (prev + 1) % slides.length);

  return (
    <section
      ref={ref}
      className="bg-[#030B15] py-10 overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-6">

        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center text-white text-[42px] lg:text-[56px] font-medium tracking-[-0.03em] mb-15"
        >
          Our Case Studies
        </motion.h2>

      
<div className="relative h-[500px] flex items-center justify-center overflow-visible">
  {slides.map((slide, index) => {
    const relative =
      (index - current + slides.length) % slides.length;

    let pos = relative;

    if (pos > slides.length / 2) {
      pos -= slides.length;
    }

    return (
      <motion.div
        key={index}
        animate={{
          x:
            pos === 0
              ? 0
              : pos < 0
              ? -140
              : 140,
          y: Math.abs(pos) * 14,
          scale: pos === 0 ? 1 : 0.92,
          opacity:
            pos === 0
              ? 1
              : Math.abs(pos) === 1
              ? 0.45
              : 0,
          zIndex: 30 - Math.abs(pos),
        }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
        className="absolute"
      >
        <div
          className="
            w-[1000px]
            h-[320px]
            bg-[#07111B]
            rounded-[32px]
            border border-white/[0.03]
            flex items-center
            p-6
            shadow-[0_30px_90px_rgba(0,0,0,0.55)]
          "
        >
          
          <div className="w-[350px] h-[350px] rounded-2xl overflow-hidden flex-shrink-0 bg-[#081D4A]">
            <Image
              src="/n7-marks-grid.png"
              alt=""
              width={350}
              height={350}
              className="w-full h-full object-cover"
            />
          </div>

          
          <div className="flex-1 px-10 flex flex-col justify-center">
            <p className="text-[10px] tracking-[0.25em] uppercase text-[#00A3FF] mb-4">
              {slide.tag}
            </p>

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25 }}
              >
                <h3 className="text-white text-[34px] leading-[1.15] font-light max-w-[460px] mb-6">
                  {slide.title}
                </h3>

                <div className="flex items-center gap-3 mb-8">
                  <div className="w-9 h-9 rounded-full bg-slate-700 flex items-center justify-center text-sm">
                    {slide.companyIcon}
                  </div>

                  <span className="text-slate-400 text-lg">
                    {slide.company}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>

            <button className="w-full h-12 border border-white/15 rounded-xl text-[11px] tracking-[0.18em] text-slate-400 hover:text-white hover:border-white/30 transition">
              READ MORE
            </button>
          </div>
        </div>
      </motion.div>
    );
  })}
</div>

        
        <div className="mt-14 flex items-center justify-between">

          <div />

          <div className="flex items-center gap-5">

            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-[#00A3FF] text-[#00A3FF] flex items-center justify-center hover:bg-[#00A3FF]/10 transition"
            >
              <ArrowLeft size={16} />
            </button>

            <div className="flex items-center gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`transition-all rounded-full ${
                    current === i
                      ? "w-8 h-2 bg-[#00A3FF]"
                      : "w-2 h-2 bg-white/20"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-[#00A3FF] text-[#00A3FF] flex items-center justify-center hover:bg-[#00A3FF]/10 transition"
            >
              <ArrowRight size={16} />
            </button>
          </div>

          <a
            href="#"
            className="inline-flex items-center gap-2 text-[#00A3FF] text-xs tracking-[0.18em] uppercase hover:text-white transition"
          >
            View All
            <ArrowRight size={12} />
          </a>
        </div>

      </div>
    </section>
  );
}