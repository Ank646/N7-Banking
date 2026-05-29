"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BarChart3, ArrowUpRight, CreditCard, Building2, CheckCircle } from "lucide-react";

const features = [
  {
    icon: CreditCard,
    title: "Multi-currency Accounts",
    desc: "Support 150+ currencies with real-time FX conversion and settlement",
  },
  {
    icon: Building2,
    title: "Core Banking Engine",
    desc: "Full-featured ledger, GL management, and regulatory reporting",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    desc: "Real-time business intelligence with customizable dashboards",
  },
  {
    icon: ArrowUpRight,
    title: "Open Banking APIs",
    desc: "PSD2-compliant REST APIs with sandbox environments",
  },
];

const barHeights = [40, 65, 50, 80, 60, 90, 70];

const metricCards = [
  { label: "Total Assets", value: "$847.3M", change: "+4.1%", color: "text-emerald-400", changeColor: "text-emerald-400" },
  { label: "Active Loans", value: "$234.1M", change: "+2.7%", color: "text-blue-400", changeColor: "text-blue-400" },
  { label: "Net Revenue", value: "$12.4M", change: "+8.2%", color: "text-white", changeColor: "text-emerald-400" },
];

const recentTransactions = [
  { name: "Wire Transfer", amount: "-$45,200", time: "2m ago" },
  { name: "FX Conversion", amount: "+$12,800", time: "8m ago" },
  { name: "Loan Disbursement", amount: "-$150,000", time: "15m ago" },
];

const quickActions = [
  "Initiate Transfer",
  "Generate Report",
  "Manage Accounts",
];

export default function DashboardPreview() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  const leftRef = useRef(null);
  const leftInView = useInView(leftRef, { once: true, margin: "-60px" });

  const rightRef = useRef(null);
  const rightInView = useInView(rightRef, { once: true, margin: "-60px" });

  const barsRef = useRef(null);
  const barsInView = useInView(barsRef, { once: true, margin: "-40px" });

  return (
    <section ref={sectionRef} className="bg-[#050C17] py-24">
      <div className="container-custom">
        {/* Top text */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-semibold tracking-widest uppercase"
          >
            Platform Overview
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="text-4xl lg:text-5xl font-black text-white leading-tight mb-4"
          >
            A complete{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent">
              cloud core
            </span>{" "}
            banking.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.18 }}
            className="max-w-2xl mx-auto text-slate-400 text-lg"
          >
            N7 delivers a modern, cloud-native core banking platform built for
            fintechs, digital banks, and financial institutions ready to move at
            the speed of innovation.
          </motion.p>
        </div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT: Feature list */}
          <div ref={leftRef} className="flex flex-col gap-8">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: -28 }}
                  animate={leftInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex gap-4 items-start"
                >
                  <div className="flex-shrink-0 bg-blue-500/10 rounded-lg p-2.5 text-blue-400">
                    <Icon size={22} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-base mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}

            <motion.a
              initial={{ opacity: 0, y: 10 }}
              animate={leftInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.45 }}
              href="#"
              className="mt-8 text-blue-400 hover:text-blue-300 font-semibold text-sm transition-colors w-fit"
            >
              Explore all features →
            </motion.a>
          </div>

          {/* RIGHT: Dashboard mockup */}
          <motion.div
            ref={rightRef}
            initial={{ opacity: 0, x: 40 }}
            animate={rightInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
          >
            {/* Browser bar */}
            <div className="bg-[#0A1628] px-4 py-3 flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-yellow-400/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-400/80 inline-block" />
              <div className="ml-3 flex-1 bg-white/5 rounded-md px-3 py-1 text-xs text-slate-500 font-mono select-none">
                app.n7banking.com/dashboard
              </div>
            </div>

            {/* Dashboard content */}
            <div className="bg-[#0D1F3C] p-6 space-y-5">
              {/* Header row */}
              <div className="flex items-center justify-between">
                <span className="text-white font-bold text-base">
                  Banking Dashboard
                </span>
                <span className="text-slate-400 text-xs">
                  May 29, 2026
                </span>
              </div>

              {/* 3 metric cards */}
              <div className="grid grid-cols-3 gap-3">
                {metricCards.map((card) => (
                  <div
                    key={card.label}
                    className="bg-white/5 rounded-xl p-3 border border-white/5"
                  >
                    <p className="text-slate-400 text-xs mb-1">{card.label}</p>
                    <p className={`font-bold text-base ${card.color}`}>
                      {card.value}
                    </p>
                    <p className={`text-xs mt-0.5 ${card.changeColor}`}>
                      {card.change}
                    </p>
                  </div>
                ))}
              </div>

              {/* Chart area */}
              <div
                ref={barsRef}
                className="bg-white/5 rounded-xl p-4 border border-white/5"
              >
                <p className="text-slate-300 text-xs font-semibold mb-4">
                  Transaction Volume
                </p>
                <div className="flex items-end gap-2 h-20">
                  {barHeights.map((height, i) => (
                    <motion.div
                      key={i}
                      initial={{ scaleY: 0, originY: 1 }}
                      animate={barsInView ? { scaleY: 1 } : {}}
                      transition={{
                        duration: 0.55,
                        delay: 0.1 + i * 0.07,
                        ease: "easeOut",
                      }}
                      style={{ height: `${height}%` }}
                      className="flex-1 rounded-t-md origin-bottom"
                    >
                      <div
                        className="w-full h-full rounded-t-md"
                        style={{
                          background:
                            "linear-gradient(to top, #2563eb, #60a5fa)",
                        }}
                      />
                    </motion.div>
                  ))}
                </div>
                <div className="flex justify-between mt-2">
                  {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(
                    (d) => (
                      <span key={d} className="text-slate-500 text-xs flex-1 text-center">
                        {d}
                      </span>
                    )
                  )}
                </div>
              </div>

              {/* Bottom row */}
              <div className="grid grid-cols-2 gap-3">
                {/* Recent Transactions */}
                <div className="bg-white/5 rounded-xl p-3 border border-white/5">
                  <p className="text-slate-300 text-xs font-semibold mb-3">
                    Recent Transactions
                  </p>
                  <div className="space-y-2">
                    {recentTransactions.map((tx) => (
                      <div
                        key={tx.name}
                        className="flex items-center justify-between"
                      >
                        <div>
                          <p className="text-white text-xs font-medium leading-tight">
                            {tx.name}
                          </p>
                          <p className="text-slate-500 text-xs">{tx.time}</p>
                        </div>
                        <span
                          className={`text-xs font-semibold ${
                            tx.amount.startsWith("-")
                              ? "text-red-400"
                              : "text-emerald-400"
                          }`}
                        >
                          {tx.amount}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="bg-white/5 rounded-xl p-3 border border-white/5">
                  <p className="text-slate-300 text-xs font-semibold mb-3">
                    Quick Actions
                  </p>
                  <div className="space-y-2">
                    {quickActions.map((action) => (
                      <button
                        key={action}
                        className="w-full flex items-center gap-2 text-left text-xs text-slate-300 hover:text-white bg-white/5 hover:bg-blue-500/20 rounded-lg px-3 py-1.5 transition-colors"
                      >
                        <CheckCircle size={12} className="text-blue-400 flex-shrink-0" />
                        {action}
                      </button>
                    ))}
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
