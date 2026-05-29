"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, TrendingUp, Shield, Zap } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center pt-32 pb-24 overflow-hidden"
      style={{ backgroundColor: "#050C17" }}
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] rounded-full opacity-10 blur-3xl bg-blue-600" />
        <div className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] rounded-full opacity-5 blur-3xl bg-blue-400" />
      </div>

      <div className="container-custom w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT COLUMN */}
          <div className="flex flex-col">

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex self-start"
            >
              <span className="rounded-full border border-blue-500/30 bg-white/5 backdrop-blur-sm px-4 py-1.5 text-sm text-blue-300 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-400 inline-block" />
                Trusted by 500+ financial institutions
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-5xl md:text-6xl lg:text-7xl font-black leading-tight"
            >
              <span className="text-white block">The new</span>
              <span className="text-white block">foundations</span>
              <span className="text-white block">of modern</span>
              <span className="gradient-text block">banking.</span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-6 text-lg text-slate-400 max-w-lg"
            >
              N7 provides the complete cloud-native core banking infrastructure that enables financial institutions to launch, scale, and innovate at unprecedented speed.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8 flex gap-4 flex-wrap"
            >
              <button className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200">
                Start Building
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="inline-flex items-center gap-2 border border-white/10 bg-white/5 hover:bg-white/10 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200 backdrop-blur-sm">
                <span className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center">
                  <Play className="w-3 h-3 fill-white text-white" />
                </span>
                Watch Demo
              </button>
            </motion.div>

            {/* Trust Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-12 flex items-center gap-6 flex-wrap"
            >
              <div className="flex items-center gap-1.5 text-xs text-slate-500">
                <Shield className="w-3.5 h-3.5 text-slate-400" />
                SOC 2 Type II
              </div>
              <div className="flex items-center gap-1.5 text-xs text-slate-500">
                <TrendingUp className="w-3.5 h-3.5 text-slate-400" />
                99.99% uptime
              </div>
              <div className="flex items-center gap-1.5 text-xs text-slate-500">
                <Zap className="w-3.5 h-3.5 text-slate-400" />
                &lt; 50ms latency
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative flex items-center justify-center"
          >
            {/* Background radial glow behind card */}
            <div
              className="absolute inset-0 pointer-events-none"
              aria-hidden="true"
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-20 blur-3xl bg-blue-500" />
            </div>

            {/* Floating: Payment Processed pill (top-right) */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="absolute -top-4 -right-2 z-10"
            >
              <span className="inline-flex items-center gap-1.5 rounded-full bg-green-950/80 border border-green-500/30 text-green-400 text-xs font-medium px-3 py-1.5 backdrop-blur-sm shadow-lg whitespace-nowrap">
                <span className="text-green-400">&#10003;</span>
                Payment Processed
              </span>
            </motion.div>

            {/* Floating: Bank-grade Security pill (bottom-left) */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1.1 }}
              className="absolute -bottom-4 -left-2 z-10"
            >
              <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-950/80 border border-blue-500/30 text-blue-300 text-xs font-medium px-3 py-1.5 backdrop-blur-sm shadow-lg whitespace-nowrap">
                <span>&#128274;</span>
                Bank-grade Security
              </span>
            </motion.div>

            {/* Dashboard Card */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-full max-w-md rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-950/30 to-slate-900/50 p-4 shadow-2xl glow-blue backdrop-blur-sm"
            >
              {/* Top bar */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-400/80" />
                  <span className="w-3 h-3 rounded-full bg-yellow-400/80" />
                  <span className="w-3 h-3 rounded-full bg-green-400/80" />
                </div>
                <span className="text-xs text-slate-400 font-medium">N7 Dashboard</span>
                <div className="w-16" />
              </div>

              {/* Balance Display */}
              <div className="rounded-xl bg-blue-950/40 border border-blue-500/10 p-4 mb-4">
                <p className="text-xs text-slate-500 mb-1">Total Balance</p>
                <div className="flex items-end gap-3">
                  <span className="text-2xl font-black text-white">$2,847,293.41</span>
                  <span className="mb-0.5 inline-flex items-center gap-0.5 rounded-full bg-green-500/15 border border-green-500/20 text-green-400 text-xs font-semibold px-2 py-0.5">
                    +12.4%
                  </span>
                </div>
              </div>

              {/* Chart strip */}
              <div className="rounded-xl overflow-hidden mb-4 h-16 relative bg-blue-950/20 border border-blue-500/10">
                <svg
                  viewBox="0 0 300 64"
                  preserveAspectRatio="none"
                  className="w-full h-full"
                  aria-hidden="true"
                >
                  <defs>
                    <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.5" />
                      <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <polyline
                    points="0,50 40,38 80,42 120,25 160,30 200,15 240,18 300,8"
                    fill="none"
                    stroke="#3b82f6"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                  <polygon
                    points="0,50 40,38 80,42 120,25 160,30 200,15 240,18 300,8 300,64 0,64"
                    fill="url(#chartGradient)"
                  />
                </svg>
              </div>

              {/* Stat tiles */}
              <div className="grid grid-cols-3 gap-2">
                {[
                  { label: "Active Accounts", value: "18,492" },
                  { label: "Daily Transactions", value: "94.3K" },
                  { label: "API Calls", value: "2.1M" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-lg bg-blue-950/30 border border-blue-500/10 p-2.5 text-center"
                  >
                    <p className="text-xs text-slate-500 mb-1 leading-tight">{stat.label}</p>
                    <p className="text-sm font-bold text-white">{stat.value}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
