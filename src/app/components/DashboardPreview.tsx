"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function DashboardPreview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative bg-[#030B15] overflow-hidden">
      
      <div
        className="absolute inset-0 pointer-events-none select-none"
        aria-hidden="true"
      >
        <div
          style={{
            position: "absolute",
            left: "6%",
            top: "50%",
            transform: "translateY(-50%)",
            fontSize: "28vw",
            fontWeight: 900,
            letterSpacing: "-0.08em",
            lineHeight: 1,
            color: "rgba(0,163,255,0.035)",
          }}
        >
          CB7
        </div>
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-8 lg:px-12">

        
        <div className="hidden lg:flex items-center min-h-[520px]">

          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="w-[42%] z-10"
          >
            <h2 className="text-white text-[46px] leading-[1.05] font-medium tracking-[-0.03em] mb-6">
              A complete cloud-based<br />core banking.
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed mb-10 max-w-[300px]">
              Faster time to market with our cloud-based<br />core banking services
            </p>
            <div className="flex flex-row flex-wrap items-center gap-5">
              <a
                href="#"
                className="inline-flex items-center justify-center px-10 h-12 rounded-lg text-white text-[11px] font-semibold tracking-[0.18em] uppercase hover:opacity-90 transition"
                style={{ background: "linear-gradient(135deg,#29B6FF,#1D4ED8)" }}
              >
                Request Demo
              </a>
              <a href="#" className="inline-flex items-center gap-2 text-[#00A3FF] text-xs tracking-[0.18em] uppercase hover:text-white transition">
                Learn More <ArrowRight size={12} />
              </a>
            </div>
          </motion.div>

          
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="absolute right-[-15%] top-1/2 -translate-y-1/2"
          >
            <Image
              src="/aml-tablet.png"
              alt="AML Dashboard"
              width={800}
              height={520}
              priority
              className="object-contain"
            />
          </motion.div>
        </div>

        
        <div className="lg:hidden py-16 flex flex-col gap-10">

          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-white text-4xl leading-tight font-medium tracking-tight mb-5">
              A complete cloud-based core banking.
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              Faster time to market with our cloud-based core banking services
            </p>
            <div className="flex flex-row flex-wrap items-center gap-5">
              <a
                href="#"
                className="inline-flex items-center justify-center px-8 h-11 rounded-lg text-white text-[11px] font-semibold tracking-[0.18em] uppercase hover:opacity-90 transition"
                style={{ background: "linear-gradient(135deg,#29B6FF,#1D4ED8)" }}
              >
                Request Demo
              </a>
              <a href="#" className="inline-flex items-center gap-2 text-[#00A3FF] text-xs tracking-[0.18em] uppercase hover:text-white transition">
                Learn More <ArrowRight size={12} />
              </a>
            </div>
          </motion.div>

          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="w-full"
          >
            <Image
              src="/aml-tablet.png"
              alt="AML Dashboard"
              width={800}
              height={520}
              className="w-full h-auto object-contain rounded-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
