"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

function NewsletterStrip({ dark = true }: { dark?: boolean }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [email, setEmail] = useState("");

  const bg = dark ? "bg-[#050C17]" : "bg-[#050C17]";

  return (
    <section ref={ref} className={`${bg} py-16 border-t border-white/[0.06]`}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="flex flex-col md:flex-row md:items-center justify-between gap-8"
        >
          <div>
            <h3 className="text-2xl lg:text-3xl font-black text-white mb-1">
              Take the full advantage of going paper-less now.
            </h3>
            <p className="text-slate-400 text-sm max-w-lg">
              Join thousands of forward-thinking financial institutions already building the future with N7.
            </p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="bg-white/[0.06] border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500/50 w-64 min-w-0"
            />
            <a href="#" className="btn-primary inline-flex items-center gap-2 px-5 py-2.5 text-sm whitespace-nowrap flex-shrink-0">
              Subscribe
              <ArrowRight size={14} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function CTASection() {
  return <NewsletterStrip />;
}

export { NewsletterStrip };
