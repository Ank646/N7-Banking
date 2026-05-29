"use client";

import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const caseStudies = [
  {
    initials: "MB",
    company: "MetroBank Digital",
    flag: "🇬🇧",
    country: "UK",
    type: "Retail Bank",
    title: "Launched in 6 months",
    description:
      "MetroBank partnered with N7 to build a fully compliant digital banking platform from scratch. The modular architecture enabled rapid deployment without compromising on regulatory requirements.",
    metricValue: "3x faster",
    metricLabel: "time to market",
  },
  {
    initials: "NP",
    company: "NovoPay",
    flag: "🇸🇬",
    country: "Singapore",
    type: "Neo Bank",
    title: "Zero-downtime migration",
    description:
      "NovoPay migrated its entire core banking stack to N7 without a single minute of downtime. Customers experienced seamless continuity while the backend was completely modernized.",
    metricValue: "99.99%",
    metricLabel: "uptime achieved",
  },
  {
    initials: "PC",
    company: "Pacific CU",
    flag: "🇦🇺",
    country: "Australia",
    type: "Credit Union",
    title: "AI fraud prevention",
    description:
      "Pacific Credit Union deployed N7's AI-powered fraud detection engine across all transaction channels. Real-time scoring and automated blocking dramatically reduced member losses.",
    metricValue: "67%",
    metricLabel: "fraud reduction",
  },
  {
    initials: "SP",
    company: "SwiftPay",
    flag: "🇩🇪",
    country: "Germany",
    type: "Payments",
    title: "Scale to 10M users",
    description:
      "SwiftPay leveraged N7's elastic infrastructure to support explosive growth across Europe. The platform now handles billions of transactions annually with consistent sub-100ms latency.",
    metricValue: "4B",
    metricLabel: "transactions/year",
  },
];

const typeBadgeColors: Record<string, string> = {
  "Retail Bank": "bg-blue-500/10 text-blue-400 border border-blue-500/20",
  "Neo Bank": "bg-purple-500/10 text-purple-400 border border-purple-500/20",
  "Credit Union": "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",
  Payments: "bg-orange-500/10 text-orange-400 border border-orange-500/20",
};

const initialsGradients = [
  "from-blue-500 to-cyan-400",
  "from-purple-500 to-blue-400",
  "from-emerald-500 to-teal-400",
  "from-orange-500 to-yellow-400",
];

export default function CaseStudies() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 32 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55 },
    },
  };

  return (
    <section className="bg-[#050C17] py-24">
      <div className="container-custom">
        {/* Top */}
        <div className="mb-16 text-center">
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-blue-500/10 text-blue-400 border border-blue-500/20">
            CASE STUDIES
          </span>
          <h2 className="text-4xl font-black text-white mb-4">
            Our Case Studies
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            See how leading financial institutions have transformed with N7
          </p>
        </div>

        {/* Cards grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {caseStudies.map((cs, i) => (
            <motion.div
              key={cs.company}
              variants={cardVariants}
              className="group relative bg-gradient-to-b from-[#0A1628] to-[#050C17] rounded-2xl p-6 border border-white/[0.06] hover:border-blue-500/20 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              {/* Arrow icon — top right, visible on hover */}
              <div className="absolute top-5 right-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ArrowUpRight className="w-4 h-4 text-blue-400" />
              </div>

              {/* Logo placeholder */}
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${initialsGradients[i]} flex items-center justify-center mb-4`}
              >
                <span className="text-white font-black text-lg">{cs.initials}</span>
              </div>

              {/* Company type badge */}
              <span
                className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold mb-3 ${typeBadgeColors[cs.type]}`}
              >
                {cs.type}
              </span>

              {/* Title */}
              <h3 className="text-white font-bold text-base mb-2 leading-snug">
                {cs.title}
              </h3>

              {/* Description */}
              <p className="text-white/40 text-sm leading-relaxed mb-5">
                {cs.description}
              </p>

              {/* Key metric */}
              <div className="mb-4">
                <span
                  className={`text-2xl font-black bg-gradient-to-r ${initialsGradients[i]} bg-clip-text text-transparent`}
                >
                  {cs.metricValue}
                </span>
                <p className="text-white/40 text-xs mt-0.5">{cs.metricLabel}</p>
              </div>

              {/* Divider */}
              <div className="border-t border-white/[0.06] pt-4">
                {/* Company name + flag */}
                <p className="text-white/50 text-xs font-medium">
                  {cs.flag} {cs.company}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View all link */}
        <div className="mt-12 text-center">
          <a
            href="#"
            className="text-blue-400 font-semibold hover:text-blue-300 transition-colors duration-200"
          >
            View all case studies →
          </a>
        </div>
      </div>
    </section>
  );
}
