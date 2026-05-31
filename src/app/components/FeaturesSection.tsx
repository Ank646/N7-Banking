"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Lock, Cpu, Globe, RefreshCw, Shield, Database, Layers, Wifi } from "lucide-react";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
    },
  }),
};

const UPTIME_BARS = Array.from({ length: 60 }, (_, i) => {
  if (i === 14) return "yellow";
  if (i === 42) return "red";
  return i % 7 === 0 ? "blue" : "green";
});

export default function FeaturesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const uptimeBars = UPTIME_BARS;

  return (
    <section className="bg-gradient-to-b from-[#050C17] to-[#070E1C] py-24">
      <div className="container-custom" ref={ref}>
        
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-semibold tracking-widest text-blue-400 uppercase border border-blue-500/30 bg-blue-500/10 rounded-full px-4 py-1.5 mb-5">
            CAPABILITIES
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-5">
            Everything you need to
            <br />
            run a modern{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              bank
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            N7 provides a complete suite of banking infrastructure tools built for the demands of modern financial institutions.
          </p>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5">

          
          <motion.div
            custom={0}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={cardVariants}
            className="md:col-span-2 bg-gradient-to-br from-white/[0.03] to-transparent border border-white/[0.06] rounded-2xl p-6 lg:p-8 hover:border-blue-500/20 transition-all duration-300 border-l-2 border-l-blue-500"
          >
            <div className="mb-4">
              <span className="inline-flex items-center gap-2 text-xs font-medium text-blue-400 bg-blue-500/10 border border-blue-500/20 rounded-full px-3 py-1 mb-4">
                <Layers size={12} />
                API-First
              </span>
              <h3 className="text-xl font-bold text-white mb-2">API-First Architecture</h3>
              <p className="text-slate-400 text-sm mb-5">
                Every feature exposed via RESTful and GraphQL APIs. Integrate N7 into your stack in minutes, not months.
              </p>
            </div>
            <div className="bg-[#0A1628] border border-white/[0.07] rounded-xl p-4 font-mono text-xs overflow-x-auto">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-3 h-3 rounded-full bg-red-500/70"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-500/70"></span>
                <span className="w-3 h-3 rounded-full bg-green-500/70"></span>
                <span className="text-slate-500 ml-2 text-xs">request.http</span>
              </div>
              <div className="space-y-1">
                <p>
                  <span className="text-blue-400">GET</span>{" "}
                  <span className="text-green-400">/api/v2/accounts/</span>
                  <span className="text-yellow-400">{"{"}</span>
                  <span className="text-orange-300">id</span>
                  <span className="text-yellow-400">{"}"}</span>
                  <span className="text-green-400">/transactions</span>
                </p>
                <p className="text-slate-500">Authorization: Bearer &lt;token&gt;</p>
                <p className="text-slate-500">X-N7-Version: 2024-01</p>
                <p className="text-slate-600 mt-3">// Response</p>
                <p><span className="text-yellow-400">{"{"}</span></p>
                <p className="pl-4"><span className="text-blue-300">"status"</span>: <span className="text-green-300">"200 OK"</span>,</p>
                <p className="pl-4"><span className="text-blue-300">"data"</span>: <span className="text-yellow-400">{"{"}</span></p>
                <p className="pl-8"><span className="text-blue-300">"account_id"</span>: <span className="text-orange-300">"acc_9f3k2m"</span>,</p>
                <p className="pl-8"><span className="text-blue-300">"currency"</span>: <span className="text-orange-300">"USD"</span>,</p>
                <p className="pl-8"><span className="text-blue-300">"transactions"</span>: <span className="text-slate-400">[...]</span>,</p>
                <p className="pl-8"><span className="text-blue-300">"total"</span>: <span className="text-purple-300">142</span></p>
                <p className="pl-4"><span className="text-yellow-400">{"}"}</span></p>
                <p><span className="text-yellow-400">{"}"}</span></p>
              </div>
            </div>
          </motion.div>

          
          <motion.div
            custom={1}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={cardVariants}
            className="bg-gradient-to-br from-white/[0.03] to-transparent border border-white/[0.06] rounded-2xl p-6 lg:p-8 hover:border-blue-500/20 transition-all duration-300"
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-blue-500/15 border border-blue-500/20 mb-5">
              <Lock size={22} className="text-blue-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Bank-grade Security</h3>
            <p className="text-slate-400 text-sm mb-5">
              Military-grade encryption and hardware security modules protect every transaction and data point.
            </p>
            <div className="flex flex-wrap gap-2">
              {["256-bit AES", "TLS 1.3", "HSM"].map((badge) => (
                <span
                  key={badge}
                  className="text-xs font-semibold text-blue-300 bg-blue-500/10 border border-blue-500/20 rounded-full px-3 py-1"
                >
                  {badge}
                </span>
              ))}
            </div>
          </motion.div>

          
          <motion.div
            custom={2}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={cardVariants}
            className="bg-gradient-to-br from-white/[0.03] to-transparent border border-white/[0.06] rounded-2xl p-6 lg:p-8 hover:border-blue-500/20 transition-all duration-300"
          >
            <div className="relative flex items-center justify-center w-12 h-12 mb-5">
              <span className="absolute inline-flex h-12 w-12 rounded-full bg-blue-500/20 animate-ping opacity-40"></span>
              <span className="relative flex items-center justify-center w-12 h-12 rounded-xl bg-blue-500/15 border border-blue-500/20">
                <Cpu size={22} className="text-blue-400" />
              </span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">AI-Powered Risk Engine</h3>
            <p className="text-slate-400 text-sm mb-5">
              Machine learning models trained on billions of transactions identify suspicious patterns in milliseconds.
            </p>
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-green-300 bg-green-500/10 border border-green-500/20 rounded-full px-3 py-1">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
              Real-time fraud detection
            </span>
          </motion.div>

          
          <motion.div
            custom={3}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={cardVariants}
            className="md:row-span-2 bg-gradient-to-br from-white/[0.03] to-transparent border border-white/[0.06] rounded-2xl p-6 lg:p-8 hover:border-blue-500/20 transition-all duration-300"
          >
            <div className="relative flex items-center justify-center w-14 h-14 mb-5">
              <span className="absolute w-14 h-14 rounded-full border border-blue-500/30 animate-spin" style={{ animationDuration: "6s" }}></span>
              <span className="absolute w-10 h-10 rounded-full border border-blue-400/20 animate-spin" style={{ animationDuration: "4s", animationDirection: "reverse" }}></span>
              <span className="relative flex items-center justify-center w-12 h-12 rounded-xl bg-blue-500/15 border border-blue-500/20">
                <Globe size={22} className="text-blue-400" />
              </span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Global Compliance</h3>
            <p className="text-slate-400 text-sm mb-6">
              Stay compliant across jurisdictions with automated reporting and built-in regulatory frameworks for every major market.
            </p>
            <div className="flex flex-col gap-3">
              {["GDPR", "PCI DSS", "SOC 2", "ISO 27001", "Basel III"].map((standard) => (
                <div
                  key={standard}
                  className="flex items-center gap-3 bg-white/[0.03] border border-white/[0.05] rounded-xl px-4 py-2.5"
                >
                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-green-500/20 border border-green-500/30 flex-shrink-0">
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                      <path d="M1 4L3.5 6.5L9 1" stroke="#4ade80" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="text-sm font-medium text-slate-200">{standard}</span>
                </div>
              ))}
            </div>
          </motion.div>

          
          <motion.div
            custom={4}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={cardVariants}
            className="md:col-span-2 bg-gradient-to-br from-white/[0.03] to-transparent border border-white/[0.06] rounded-2xl p-6 lg:p-8 hover:border-blue-500/20 transition-all duration-300"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-500/15 border border-blue-500/20">
                    <Shield size={18} className="text-blue-400" />
                  </span>
                  <h3 className="text-xl font-bold text-white">99.99% Uptime SLA</h3>
                </div>
                <p className="text-slate-400 text-sm">
                  Redundant infrastructure across multiple regions ensures your banking operations never stop.
                </p>
              </div>
              <span className="flex items-center gap-1.5 text-xs font-semibold text-green-300 bg-green-500/10 border border-green-500/20 rounded-full px-3 py-1 flex-shrink-0 ml-4">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
                Operational
              </span>
            </div>
            <div className="mt-5">
              <div className="flex items-end gap-0.5 h-10">
                {uptimeBars.map((color, i) => (
                  <div
                    key={i}
                    className={`flex-1 rounded-sm transition-all duration-300 ${
                      color === "green"
                        ? "bg-green-500/70 hover:bg-green-400"
                        : color === "blue"
                        ? "bg-blue-500/70 hover:bg-blue-400"
                        : color === "yellow"
                        ? "bg-yellow-500/70 hover:bg-yellow-400"
                        : "bg-red-500/70 hover:bg-red-400"
                    }`}
                    style={{ height: `${70 + Math.random() * 30}%` }}
                    title={`Day ${i + 1}: ${color === "green" || color === "blue" ? "100% uptime" : color === "yellow" ? "Degraded" : "Incident"}`}
                  />
                ))}
              </div>
              <div className="flex justify-between mt-2">
                <span className="text-xs text-slate-500">60 days ago</span>
                <span className="text-xs text-slate-500">60-day uptime history</span>
                <span className="text-xs text-slate-500">Today</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
