"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Check } from "lucide-react";
import Image from "next/image";
import { CTABanner } from "./CTASection";
import Frame38Separator from "./Frame38Separator";

const rows = [
  {
    phoneImg: "/iphone-home.png",
    phoneAlt: "Fully compliant",
    phoneSide: "left" as const,
    title: "Fully compliant with regulatory requirement",
    desc: "The governance of risk management with regulations is achieved by our risk management framework that is fully integrated to work with digital bank's operational risk protocols and practices.",
    bullets: [
      "An Integrated Security System",
      "Fully Compliant With Regulatory Requirement",
      "Digitally Connected Core",
    ],
  },
  {
    phoneImg: "/iphone-transaction.png",
    phoneAlt: "No legacy IT",
    phoneSide: "right" as const,
    title: "No legacy IT systems",
    desc: "Our Digital Banking solution and multidimensional platform help financial institutions take advantage of digital transformation by ensuring customer trust and regulatory compliance.",
    bullets: [
      "Adaptable & Intelligent API",
      "Ambient User Experience",
      "Cloud-native With lower TCO",
    ],
  },
  {
    phoneImg: "/iphone-profile.png",
    phoneAlt: "No traditional branches",
    phoneSide: "left" as const,
    title: "No traditional branches",
    desc: "Our Digital Banking out of the box helps you to accelerate innovation while reducing risks and optimising operational costs for a seamless, branchless experience.",
    bullets: [
      "Branchless & Paperless Banking",
      "Digital Transformation Capability",
      "Optimised, Adaptable and Scalable",
    ],
  },
];

export default function MobileSection() {
  const leftRef = useRef(null);
  const leftInView = useInView(leftRef, { once: true, margin: "-60px" });
  // separate ref for desktop sticky column so mobile ref isn't overwritten
  const desktopLeftRef = useRef(null);
  const desktopLeftInView = useInView(desktopLeftRef, { once: true, margin: "-60px" });

  return (
    <div>
      
      <Frame38Separator />

      <div className="bg-white">
        
        <div className="w-full max-w-[1400px] mx-auto">
          
          <motion.div
            ref={leftRef}
            initial={{ opacity: 0, y: 16 }}
            animate={leftInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:hidden px-6 pt-14 pb-10 text-center"
          >
            <h2 className="text-3xl font-bold text-gray-900 leading-tight mb-4">
              Digital banking<br />out-of-the-box
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-8 max-w-sm mx-auto">
              N7 helps your financial institution improve the client experience, automate and optimize procedures
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2">
              <a
                href="#"
                className="inline-flex items-center justify-center px-8 py-3 rounded-lg text-white text-lg font-bold tracking-widest uppercase transition-all hover:opacity-90"
                style={{ background: "linear-gradient(135deg, #3B82F6, #1D4ED8)" }}
              >
                Request Demo
              </a>
              <a href="#" className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest uppercase text-blue-600 hover:text-blue-500 transition-colors">
                LEARN MORE <ArrowRight size={11} />
              </a>
            </div>
          </motion.div>

          
          <div className="lg:hidden relative overflow-hidden">
            
            <Image
              src="/N7.png"
              alt="" aria-hidden="true"
              width={800} height={340}
              className="absolute pointer-events-none select-none object-contain w-full"
              style={{ top: "5%", left: 0, zIndex: 0, opacity: 0.4, mixBlendMode: "multiply" }}
            />
            <div className="relative z-10">
              {rows.map((row, idx) => (
                <PhoneRow key={row.title} row={row} idx={idx} />
              ))}
            </div>
          </div>

          
          <div className="relative hidden lg:grid lg:grid-cols-[30%_70%] overflow-hidden">

            
            <Image
              src="/N7.png"
              alt="" aria-hidden="true"
              width={1200} height={500}
              className="absolute pointer-events-none select-none object-contain"
              style={{
                top: "1%",
                left: "15%",
                width: "50%",
                zIndex: 0,
                opacity: 0.5,
                mixBlendMode: "multiply",
              }}
            />

            
            <motion.div
              ref={desktopLeftRef}
              initial={{ opacity: 0, x: -20 }}
              animate={desktopLeftInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="relative z-10 px-8 lg:pl-16 lg:pr-8 pt-20 pb-10 border-r border-gray-100 lg:sticky lg:top-20 lg:self-start"
            >
              <h2 className="text-4xl font-bold text-gray-900 leading-tight mb-5">
                Digital banking<br />out-of-the-box
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-8">
                N7 helps your financial institution improve the client experience, automate and optimize procedures
              </p>
              <a
                href="#"
                className="inline-flex items-center justify-center px-8 py-3 rounded-lg text-white text-xs font-bold tracking-widest uppercase transition-all mr-4 hover:opacity-90 mb-4 block w-fit"
                style={{ background: "linear-gradient(135deg, #3B82F6, #1D4ED8)" }}
              >
                Request Demo
              </a>
              <a href="#" className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest uppercase text-blue-600 hover:text-blue-500 transition-colors">
                LEARN MORE <ArrowRight size={11} />
              </a>
            </motion.div>

            
            <div className="relative z-10">
              {rows.map((row, idx) => (
                <PhoneRow key={row.title} row={row} idx={idx} />
              ))}
            </div>
          </div>
        </div>

        
        <div className="bg-white px-6 lg:px-10 pt-8 pb-12">
          <CTABanner brand="N7" />
        </div>
      </div>
    </div>
  );
}

function PhoneRow({
  row,
  idx,
}: {
  row: typeof rows[0];
  idx: number;
}) {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    margin: "-80px",
  });

  const phoneLeft = row.phoneSide === "left";

  return (
    <div
      ref={ref}
      className="relative"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 items-center min-h-0 md:min-h-[420px]">

        
        <motion.div
          initial={{
            opacity: 0,
            x: phoneLeft ? -20 : 20,
          }}
          animate={
            isInView
              ? {
                  opacity: 1,
                  x: 0,
                }
              : {}
          }
          transition={{
            duration: 0.6,
          }}
          className={`
            flex
            justify-center
            py-12
            px-6
            ${phoneLeft ? "order-1" : "order-2"}
          `}
        >
          <Image
            src={row.phoneImg}
            alt={row.phoneAlt}
            width={320}
            height={650}
            className="
              h-auto
              object-contain
              drop-shadow-2xl
            "
          />
        </motion.div>

        
        <motion.div
          initial={{
            opacity: 0,
            x: phoneLeft ? 20 : -20,
          }}
          animate={
            isInView
              ? {
                  opacity: 1,
                  x: 0,
                }
              : {}
          }
          transition={{
            duration: 0.6,
            delay: 0.1,
          }}
          className={`
            py-12
            px-12
            ${phoneLeft ? "order-2" : "order-1"}
          `}
        >
          <h3 className="text-[32px] font-medium text-gray-900 leading-[1.15] mb-5">
            {row.title}
          </h3>

          <p className="text-gray-500 text-[15px] leading-7 mb-8 max-w-[420px]">
            {row.desc}
          </p>

          <ul className="space-y-5">
            {row.bullets.map((b) => (
              <li
                key={b}
                className="flex items-start gap-3"
              >
                <span
                  className="
                    flex-shrink-0
                    w-5
                    h-5
                    rounded-full
                    flex
                    items-center
                    justify-center
                    mt-1
                  "
                  style={{
                    background:
                      "linear-gradient(135deg,#3B82F6,#1D4ED8)",
                  }}
                >
                  <Check
                    size={10}
                    className="text-white"
                    strokeWidth={3}
                  />
                </span>

                <span className="text-gray-700 text-[15px] leading-7">
                  {b}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
}
