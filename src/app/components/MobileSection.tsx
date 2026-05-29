"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Smartphone, Bell, ArrowRight, CheckCircle2, Star } from "lucide-react";

const features = [
  {
    icon: Bell,
    title: "Smart Notifications",
    desc: "Real-time push alerts for every transaction",
  },
  {
    icon: CheckCircle2,
    title: "Instant KYC/AML",
    desc: "AI-powered onboarding in under 60 seconds",
  },
  {
    icon: Star,
    title: "Personalized Insights",
    desc: "AI-driven financial advice and spending analysis",
  },
  {
    icon: ArrowRight,
    title: "Open Banking",
    desc: "Connect all your financial accounts in one place",
  },
];

const transactions = [
  { name: "Apple Store", amount: "-$99.00", negative: true, initials: "A" },
  { name: "Salary Credit", amount: "+$4,200.00", negative: false, initials: "S" },
  { name: "Netflix", amount: "-$15.99", negative: true, initials: "N" },
];

export default function MobileSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="bg-[#060B15] py-24 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-blue-500 opacity-10 blur-[120px] pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="container-custom relative z-10" ref={ref}>
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-medium mb-6">
            <Smartphone className="w-4 h-4" />
            MOBILE BANKING
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
            Let&apos;s transform your
            <br />
            banking with{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              AI.
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Experience the future of banking with our intelligent mobile platform designed for the modern era.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* LEFT COLUMN — Feature list */}
          <motion.div
            initial={{ x: -60, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { x: -60, opacity: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="space-y-6 mb-10">
              {features.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="font-bold text-white mb-1">{title}</p>
                    <p className="text-slate-400 text-sm">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* App Store + Google Play */}
            <div className="flex gap-4 flex-wrap">
              <div className="flex items-center gap-3 px-5 py-3 rounded-xl bg-white/5 border border-white/10 cursor-pointer hover:bg-white/10 transition-colors">
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <div>
                  <p className="text-[10px] text-slate-400 leading-none">Download on the</p>
                  <p className="text-white font-semibold text-sm">App Store</p>
                </div>
              </div>

              <div className="flex items-center gap-3 px-5 py-3 rounded-xl bg-white/5 border border-white/10 cursor-pointer hover:bg-white/10 transition-colors">
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.18 23.76c.3.17.65.19.97.06l12.39-7.17-2.7-2.7-10.66 9.81zm-1.37-20.4C1.61 3.67 1.5 4 1.5 4.37v15.26c0 .37.11.7.31.97l.05.05 8.55-8.55v-.2L1.81 3.36l-.01.01zm18.1 9.34l-2.51-1.45-2.97 2.97 2.97 2.97 2.51-1.46c.72-.41.72-1.62 0-2.03zm-17.12 9.7l10.66-9.81-2.7-2.7L1.81 20.48l.98.92z" />
                </svg>
                <div>
                  <p className="text-[10px] text-slate-400 leading-none">Get it on</p>
                  <p className="text-white font-semibold text-sm">Google Play</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN — Phone mockup */}
          <motion.div
            initial={{ x: 60, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { x: 60, opacity: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          >
            <div className="w-64 mx-auto relative">
              {/* Floating notification */}
              <motion.div
                initial={{ x: 80, opacity: 0 }}
                animate={isInView ? { x: 0, opacity: 1 } : { x: 80, opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.9 }}
                className="absolute -right-16 top-16 z-10 bg-white rounded-2xl shadow-2xl px-4 py-3 flex items-center gap-2 min-w-[200px]"
              >
                <div className="w-7 h-7 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-800 whitespace-nowrap">Payment sent</p>
                  <p className="text-[10px] text-gray-500">$500.00 to John</p>
                </div>
              </motion.div>

              {/* Phone shell */}
              <div className="rounded-[3rem] border-4 border-white/10 bg-[#0A0F1C] overflow-hidden shadow-2xl">
                {/* App screen */}
                <div className="bg-[#0A0F1C] min-h-[560px] px-4 pt-3 pb-6">
                  {/* Status bar */}
                  <div className="flex justify-between items-center mb-4 px-1">
                    <span className="text-white text-[10px] font-medium">9:41</span>
                    <div className="flex items-center gap-1">
                      <div className="flex gap-0.5 items-end">
                        <div className="w-1 h-1.5 bg-white rounded-sm" />
                        <div className="w-1 h-2 bg-white rounded-sm" />
                        <div className="w-1 h-2.5 bg-white rounded-sm" />
                        <div className="w-1 h-3 bg-white rounded-sm" />
                      </div>
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M1.5 8.5a13 13 0 0121 0M5 12a10 10 0 0114 0M8.5 15.5a6 6 0 017 0M12 19h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
                      </svg>
                      <div className="w-5 h-2.5 rounded-sm border border-white/60 flex items-center px-0.5">
                        <div className="w-3 h-1.5 bg-white rounded-sm" />
                      </div>
                    </div>
                  </div>

                  {/* App header */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 flex items-center justify-center text-white text-xs font-bold">
                        A
                      </div>
                      <div>
                        <p className="text-slate-400 text-[10px]">Welcome back</p>
                        <p className="text-white text-xs font-semibold">Good morning, Alex</p>
                      </div>
                    </div>
                    <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center">
                      <Bell className="w-3.5 h-3.5 text-white" />
                    </div>
                  </div>

                  {/* Balance card */}
                  <div className="rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 p-4 mb-5">
                    <p className="text-blue-200 text-[10px] mb-1">Total Balance</p>
                    <p className="text-white text-2xl font-bold mb-2">$12,847.00</p>
                    <div className="flex items-center gap-1">
                      <span className="text-green-400 text-[10px] font-semibold bg-green-400/20 px-2 py-0.5 rounded-full">+2.4%</span>
                      <span className="text-blue-200 text-[10px]">this month</span>
                    </div>
                  </div>

                  {/* Quick actions row */}
                  <div className="grid grid-cols-4 gap-2 mb-5">
                    {["Send", "Receive", "Pay", "More"].map((action) => (
                      <div key={action} className="flex flex-col items-center gap-1">
                        <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
                          <ArrowRight className="w-4 h-4 text-blue-400" />
                        </div>
                        <span className="text-slate-400 text-[9px]">{action}</span>
                      </div>
                    ))}
                  </div>

                  {/* Recent transactions */}
                  <div>
                    <p className="text-white text-xs font-semibold mb-3">Recent Transactions</p>
                    <div className="space-y-2.5">
                      {transactions.map(({ name, amount, negative, initials }) => (
                        <div key={name} className="flex items-center justify-between">
                          <div className="flex items-center gap-2.5">
                            <div className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center text-white text-xs font-bold">
                              {initials}
                            </div>
                            <div>
                              <p className="text-white text-[11px] font-medium">{name}</p>
                              <p className="text-slate-500 text-[9px]">Today</p>
                            </div>
                          </div>
                          <span
                            className={`text-[11px] font-semibold ${
                              negative ? "text-red-400" : "text-green-400"
                            }`}
                          >
                            {amount}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
