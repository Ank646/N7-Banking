"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const posts = [
  {
    tag: "GETTING STARTED",
    title: "How to transition from a traditional to a digital bank",
    author: "David Grohl",
    date: "17/08/24",
  },
  {
    tag: "GETTING STARTED",
    title: "How to transition from a traditional to a digital bank",
    author: "David Grohl",
    date: "17/08/24",
  },
  {
    tag: "GETTING STARTED",
    title: "How to transition from a traditional to a digital bank",
    author: "David Grohl",
    date: "17/08/24",
  },
  {
    tag: "GETTING STARTED",
    title: "How to transition from a traditional to a digital bank",
    author: "David Grohl",
    date: "17/08/24",
  },
];

export default function CaseStudies() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-[#050C17] py-24 border-t border-white/[0.04]">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl font-black text-white">Our Case Studies</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {posts.map((post, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex flex-col bg-[#0A1225] rounded-2xl p-6 border border-white/[0.06] hover:border-blue-500/20 transition-all duration-300 group cursor-pointer"
            >
              <div className="flex-1">
                <span className="text-xs font-semibold tracking-widest text-blue-400/70 uppercase mb-4 block">
                  {post.tag}
                </span>
                <h3 className="text-white font-semibold text-base leading-snug mb-6">
                  {post.title}
                </h3>
                <div className="flex items-center gap-2 text-slate-500 text-xs mb-6">
                  <span className="font-medium text-slate-400">{post.author}</span>
                  <span>·</span>
                  <span>{post.date}</span>
                </div>
              </div>
              <button className="w-full py-2.5 rounded-xl border border-white/10 text-xs font-semibold tracking-widest uppercase text-slate-400 hover:text-white hover:border-white/20 transition-colors">
                READ MORE
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
