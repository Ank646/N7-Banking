"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Check } from "lucide-react";
import Image from "next/image";
import { NewsletterStrip } from "./CTASection";

const phoneRows = [
  {
    phone: "/iphone-home.png",
    phoneAlt: "N7 App Home",
    side: "right",
    title: "Fully compliant with regulatory requirement",
    desc: "The governance of risk management with regulations is achieved by our risk management framework that is fully integrated to work with digital bank's operational risk protocols and practices.",
    bullets: [
      "An Integrated Security System",
      "Fully Compliant With Regulatory Requirement",
      "Digitally Connected Core",
    ],
  },
  {
    phone: "/iphone-transaction.png",
    phoneAlt: "N7 App Transactions",
    side: "left",
    title: "No legacy IT systems",
    desc: "Our Digital Banking solution and multidimensional platform help financial institutions take advantage of digital transformation by ensuring customer trust and regulatory compliance.",
    bullets: [
      "Adaptable & Intelligent API",
      "Ambient User Experience",
      "Cloud-native With lower TCO",
    ],
  },
  {
    phone: "/iphone-profile.png",
    phoneAlt: "N7 App Profile",
    side: "right",
    title: "No traditional branches",
    desc: "Our Digital Banking out of the box helps financial institutions take the operational costs for a seamless, frictionless experience.",
    bullets: [
      "Branchless & Paperless Banking",
      "Digital Transformation Capability",
      "Connected, Adaptable and Scalable",
    ],
  },
];

function PhoneFeatureRow({ row, idx }: { row: typeof phoneRows[0]; idx: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const phoneFirst = row.side === "left";

  return (
    <section ref={ref} className={`py-20 ${idx % 2 === 0 ? "bg-gray-50" : "bg-white"}`}>
      <div className="container-custom">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center`}>
          {/* Phone */}
          <motion.div
            initial={{ opacity: 0, x: phoneFirst ? -30 : 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: phoneFirst ? 0.1 : 0 }}
            className={`flex justify-center relative ${phoneFirst ? "" : "lg:order-2"}`}
          >
            <div className="absolute inset-0 bg-blue-200/20 rounded-full blur-3xl scale-75 pointer-events-none" />
            <Image
              src={row.phone}
              alt={row.phoneAlt}
              width={260}
              height={520}
              className="h-auto object-contain drop-shadow-2xl relative"
              style={{ maxHeight: 520 }}
            />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: phoneFirst ? 30 : -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: phoneFirst ? 0 : 0.1 }}
            className={phoneFirst ? "" : "lg:order-1"}
          >
            <h3 className="text-3xl lg:text-4xl font-black text-gray-900 leading-tight mb-4">
              {row.title}
            </h3>
            <p className="text-gray-500 text-base leading-relaxed mb-6">{row.desc}</p>
            <ul className="space-y-3">
              {row.bullets.map((b) => (
                <li key={b} className="flex items-center gap-3 text-sm text-gray-700">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center">
                    <Check size={11} className="text-white" strokeWidth={3} />
                  </span>
                  {b}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default function MobileSection() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true, margin: "-80px" });

  return (
    <div>
      {/* Hero "Digital banking out of the box" */}
      <section ref={heroRef} className="bg-gray-50 pt-24 pb-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl lg:text-5xl font-black text-gray-900 leading-tight mb-4">
                Digital banking<br />
                <span className="text-blue-600">out of the box.</span>
              </h2>
              <p className="text-gray-500 text-base leading-relaxed mb-8">
                Give your customers the modern banking experience they deserve. N7&apos;s white-label mobile app ships with everything pre-built — cards, transfers, analytics, and more.
              </p>
              <a href="#" className="inline-flex items-center gap-2 px-7 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold transition-colors">
                Request Demo
                <ArrowRight size={15} />
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="flex justify-center relative"
            >
              <div className="absolute inset-0 bg-blue-200/20 rounded-full blur-3xl scale-75 pointer-events-none" />
              <Image
                src="/iphone-home.png"
                alt="N7 Mobile Banking App"
                width={280}
                height={560}
                className="h-auto object-contain drop-shadow-2xl relative"
                style={{ maxHeight: 520 }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3 phone feature rows (Frame 85) */}
      {phoneRows.map((row, idx) => (
        <PhoneFeatureRow key={row.title} row={row} idx={idx} />
      ))}

      {/* Embedded CTA strip */}
      <NewsletterStrip />
    </div>
  );
}
