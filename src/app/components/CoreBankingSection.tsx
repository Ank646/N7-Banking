"use client";

import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";
import Image from "next/image";
import { Check } from "lucide-react";

const leftItems = [
  "Customer-On Boarding",
  "Managing deposits and withdrawals",
  "Transaction management",
  "Interest Calculation",
  "Payments processing (cash, cheques, mandates, NEFT, RTGS etc)",
];

const rightItems = [
  "CRM Activities",
  "Configuring New Banking Products",
  "Loan disbursal and Loan management",
  "Establishing criteria for minimum balances, interest rates, number of withdrawals allowed and so on.",
];

function FeatureItem({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-3">
      <span className="flex-shrink-0 w-4 h-4 rounded-full bg-[#007BFF] flex items-center justify-center mt-1">
        <Check size={9} className="text-white" strokeWidth={3} />
      </span>
      <span className="text-slate-300 text-[14px] leading-snug">{text}</span>
    </div>
  );
}

export default function CoreBankingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="bg-[#030B15] overflow-x-hidden">

      
      <div className="hidden lg:block py-28">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-12">
          <div className="grid lg:grid-cols-[55%_45%] gap-8 items-center">

            
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="relative h-[520px]"
            >
              <div className="relative -ml-[100px]">
                <Image
                  src="/kyc-dashboard.png"
                  alt="KYC Dashboard"
                  width={600}
                  height={420}
                  priority
                />
              </div>
            </motion.div>

            
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="max-w-[650px]"
            >
              <h2 className="text-white text-[30px] leading-[1.1] font-medium tracking-[-0.02em] mb-8">
                Run a more efficient, flexible,<br />
                and digitally connected<br />
                core banking system
              </h2>
              <p className="text-white text-sm font-semibold mb-8">What you will get:</p>
              <div className="grid md:grid-cols-2 gap-x-12">
                <div className="space-y-5">
                  {leftItems.map((item) => <FeatureItem key={item} text={item} />)}
                </div>
                <div className="space-y-5 mt-5 md:mt-0">
                  {rightItems.map((item) => <FeatureItem key={item} text={item} />)}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      
      <div className="lg:hidden py-14 px-6">
        <div className="flex flex-col gap-10">

          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="w-full"
          >
            <Image
              src="/kyc-dashboard.png"
              alt="KYC Dashboard"
              width={800}
              height={560}
              className="w-full h-auto object-contain rounded-xl border border-blue-500/20"
            />
          </motion.div>

          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <h2 className="text-white text-3xl leading-tight font-medium mb-6">
              Run a more efficient, flexible, and digitally connected core banking system
            </h2>
            <p className="text-white text-sm font-semibold mb-6">What you will get:</p>
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
              {[...leftItems, ...rightItems].map((item) => <FeatureItem key={item} text={item} />)}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
