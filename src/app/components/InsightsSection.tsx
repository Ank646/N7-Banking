"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const article = {
  tag: "GETTING STARTED",
  title: "How to transition from a traditional to a digital bank",
  author: "David Grohl",
  date: "17/08/24",
};

export default function InsightsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      ref={ref}
      className="bg-[#030B15] py-24 overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-6">
        <div className="grid lg:grid-cols-[40%_50%] gap-12">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-white text-[35px] leading-[1.1] font-medium ">
              Get yourself up-to-speed on all the things happening in fintech
            </h2>

            <button className="mt-12 h-12 px-10 border border-white rounded-lg text-white text-xs tracking-[0.2em] uppercase">
              Insights
            </button>
          </motion.div>

          
          <div className="grid grid-cols-2 gap-6">

            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="col-span-2 bg-[#07111B] rounded-3xl p-4 flex gap-6 border border-white/[0.03]"
            >
              
              <div className="w-[210px] h-[150px] rounded-xl overflow-hidden flex-shrink-0">
                <Image
                  src="/n7-marks-grid.png"
                  alt=""
                  width={210}
                  height={150}
                  className="w-full h-full object-cover"
                />
              </div>

              
              <div className="flex flex-col justify-between flex-1">
                <div>
                  <div className="text-[10px] tracking-[0.2em] uppercase text-blue-400 mb-3">
                    {article.tag}
                  </div>

                  <h3 className="text-white text-[34px] leading-tight max-w-[420px]">
                    {article.title}
                  </h3>

                  <div className="mt-5 text-sm text-slate-500">
                    {article.author} &nbsp; | &nbsp; {article.date}
                  </div>
                </div>

                <button className="h-11 border border-white/5 rounded-lg text-[11px] tracking-[0.15em] text-slate-400">
                  READ MORE
                </button>
              </div>
            </motion.div>

            
            <div className="bg-[#07111B] rounded-3xl p-6 border border-white/[0.03]">
              <div className="text-[10px] tracking-[0.2em] uppercase text-blue-400 mb-4">
                GETTING STARTED
              </div>

              <h3 className="text-white text-3xl leading-tight mb-6">
                How to transition from a traditional to a digital bank
              </h3>

              <div className="text-sm text-slate-500 mb-8">
                David Grohl &nbsp; | &nbsp; 17/08/24
              </div>

              <button className="w-full h-11 border border-white/15 rounded-lg text-[11px] tracking-[0.15em] text-slate-400">
                READ MORE
              </button>
            </div>

            
            <div className="bg-[#07111B] rounded-3xl p-6 border border-white/[0.03]">
              <div className="text-[10px] tracking-[0.2em] uppercase text-blue-400 mb-4">
                GETTING STARTED
              </div>

              <h3 className="text-white text-3xl leading-tight mb-6">
                How to transition from a traditional to a digital bank
              </h3>

              <div className="text-sm text-slate-500 mb-8">
                David Grohl &nbsp; | &nbsp; 17/08/24
              </div>

              <button className="w-full h-11 border border-white/15 rounded-lg text-[11px] tracking-[0.15em] text-slate-400">
                READ MORE
              </button>
            </div>

            
            <div className="col-span-2 flex justify-end">
              <a
                href="#"
                className="flex items-center gap-2 text-[#00A3FF] text-sm tracking-[0.12em] uppercase"
              >
                Read All Insights
                <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}