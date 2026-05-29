"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Check } from "lucide-react";

const items = [
  ["Customer-On Boarding", "CRM Activities"],
  ["Managing deposits and withdrawals", "Configuring New Banking Products"],
  ["Transaction management", "Loan disbursal and Loan management"],
  ["Interest Calculation", "Establishing criteria for minimum balances, interest rates, number of withdrawals allowed and so on."],
  ["Payments processing (cash, cheques, mandates, NEFT, RTGS etc)", ""],
];

export default function CoreBankingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-[#050C17] py-24 border-t border-white/[0.04]">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT — KYC Dashboard image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-blue-500/8 rounded-full blur-3xl scale-90 pointer-events-none" />
            <div className="relative rounded-2xl overflow-hidden border border-blue-500/20 shadow-2xl">
              <Image
                src="/kyc-dashboard.png"
                alt="KYC Dashboard"
                width={680}
                height={480}
                className="w-full h-auto object-contain"
              />
            </div>
          </motion.div>

          {/* RIGHT — text + checklist */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <h2 className="text-3xl lg:text-4xl font-black text-white leading-tight mb-6">
              Run a more efficient, flexible, and digitally connected corebanking system
            </h2>
            <p className="text-slate-400 text-sm font-semibold mb-6 uppercase tracking-wider">
              What you will get:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
              {items.map(([left, right]) => (
                <>
                  {left && (
                    <div key={left} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center mt-0.5">
                        <Check size={11} className="text-white" strokeWidth={3} />
                      </span>
                      <span className="text-slate-300 text-sm leading-snug">{left}</span>
                    </div>
                  )}
                  {right && (
                    <div key={right} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center mt-0.5">
                        <Check size={11} className="text-white" strokeWidth={3} />
                      </span>
                      <span className="text-slate-300 text-sm leading-snug">{right}</span>
                    </div>
                  )}
                </>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
