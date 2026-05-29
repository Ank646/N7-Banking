"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { TrendingUp, Globe, Users, Clock } from "lucide-react";

const stats = [
  {
    value: "$2.3T+",
    label: "Assets Under Management",
    icon: TrendingUp,
  },
  {
    value: "500+",
    label: "Financial Institutions",
    icon: Globe,
  },
  {
    value: "4B+",
    label: "Annual Transactions",
    icon: Clock,
  },
  {
    value: "99.99%",
    label: "Platform Uptime SLA",
    icon: Users,
  },
];

function StatCard({
  value,
  label,
  icon: Icon,
  index,
  isLast,
}: {
  value: string;
  label: string;
  icon: React.ElementType;
  index: number;
  isLast: boolean;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ duration: 0.6, delay: index * 0.12, ease: "easeOut" }}
      className={`flex flex-col items-center gap-2 px-6 py-4${
        !isLast ? " border-r border-white/5" : ""
      }`}
    >
      <Icon className="text-blue-500/50 mb-1" size={22} />
      <motion.span
        initial={{ opacity: 0, scale: 0.85 }}
        animate={
          isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.85 }
        }
        transition={{
          duration: 0.5,
          delay: index * 0.12 + 0.15,
          ease: "easeOut",
        }}
        className="font-black text-4xl lg:text-5xl gradient-text"
      >
        {value}
      </motion.span>
      <span className="text-slate-400 text-sm uppercase tracking-widest mt-1 text-center">
        {label}
      </span>
    </motion.div>
  );
}

export default function StatsSection() {
  return (
    <section className="border-t border-white/5 bg-gradient-to-r from-blue-950/20 via-transparent to-blue-950/20 py-16">
      <div className="container-custom">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <StatCard
              key={stat.label}
              value={stat.value}
              label={stat.label}
              icon={stat.icon}
              index={index}
              isLast={index === stats.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
