"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

const solutions = [
  "Core Banking CB7",
  "Digital Banking N7",
  "Open Banking",
  "Loan Origination System",
  "Loan Management System",
  "Digital Transformation",
];

const n7Links = [
  "About Us",
  "Solutions",
  "Contact",
  "Company",
  "Careers",
  "Insights",
  "Core Team",
  "Brand Center",
];

const socials = ["LinkedIn", "X"];

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  return (
    <footer
      ref={ref}
      className="bg-[#030B15] overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-10 lg:px-14 py-20">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-[350px_1fr_1fr_1fr] gap-20"
        >

          
          <div>
            <h1
              className="
                text-[180px]
                lg:text-[220px]
                font-black
                leading-none
                tracking-[-0.08em]
                select-none
              "
              style={{
                background:
                  "linear-gradient(180deg,#24D2FF 0%,#189CFF 35%,#2448FF 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              N7
            </h1>
          </div>

          
          <div>
            <h3 className="text-white text-sm font-medium mb-4">
              London
            </h3>

            <p className="text-slate-300 text-[13px] leading-6 whitespace-pre-line">
              Linktia Infosystems Ltd – CB7,
              {"\n"}
              26 Main Road Sundridge,
              {"\n"}
              TN14 6EP,
              {"\n"}
              England, United Kingdom.
            </p>

            <div className="mt-16">
              <h4 className="text-white text-sm mb-5">
                Solutions
              </h4>

              <ul className="space-y-3">
                {solutions.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="flex items-center justify-between text-slate-300 hover:text-white text-[13px] transition-colors"
                    >
                      <span>{item}</span>
                      <ArrowRight
                        size={12}
                        className="text-[#00A3FF]"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          
          <div>
            <h3 className="text-white text-sm font-medium mb-4">
              Dubai
            </h3>

            <p className="text-slate-300 text-[13px] leading-6 whitespace-pre-line">
              Linktia Infosystems Ltd –
              {"\n"}
              CB7, Jumeirah Business,
              {"\n"}
              Center 5 Cluster W,
              {"\n"}
              Jumeirah Lakes Towers,
              {"\n"}
              Dubai, United Arab Emirates
            </p>

            <div className="mt-16">
              <h4 className="text-white text-sm mb-5">
                N7 Banking
              </h4>

              <ul className="space-y-3">
                {n7Links.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="flex items-center justify-between text-slate-300 hover:text-white text-[13px] transition-colors"
                    >
                      <span>{item}</span>
                      <ArrowRight
                        size={12}
                        className="text-[#00A3FF]"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          
          <div>
            <h3 className="text-white text-sm font-medium mb-4">
              India
            </h3>

            <p className="text-slate-300 text-[13px] leading-6 whitespace-pre-line">
              Linktia Infosystems Ltd –
              {"\n"}
              CB7, Nirmal,
              {"\n"}
              Anand Nagar,
              {"\n"}
              Suncity Road,
              {"\n"}
              Pune, Maharashtra,
              {"\n"}
              411041, India
            </p>

            <div className="mt-16">
              <h4 className="text-white text-sm mb-5">
                Our Socials
              </h4>

              <ul className="space-y-3">
                {socials.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="flex items-center justify-between text-slate-300 hover:text-white text-[13px] transition-colors"
                    >
                      <span>{item}</span>
                      <ArrowRight
                        size={12}
                        className="text-[#00A3FF]"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
          </div>

        </motion.div>
 <div className="grid lg:grid-cols-[350px_1fr_1fr_1fr] gap-20 mt-16">
  <div />

  <div className="lg:col-span-3">
    <p className="text-[14px] text-slate-500 leading-relaxed max-w-[850px]">
      Copyright © 2022 by Linktia Infosystems Limited —
      [CB7 and N7 as Commercial Brand] —
      [Registered under the Companies Act 2006 in England and Wales |
      Number of Incorporation 13100992]
    </p>
  </div>
</div>

      </div>
    </footer>
  );
}