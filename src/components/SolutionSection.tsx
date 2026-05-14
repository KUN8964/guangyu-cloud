"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { solutions } from "@/data/solutions";

export default function SolutionSection() {
  return (
    <section id="solutions" className="py-20 bg-bg-overlay relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <p className="ide-section-label">
              {/* src/app/solutions/[id]/page.tsx */}
            </p>
            <h2 className="ide-section-title">
              enum IndustrySolution
            </h2>
            <p className="text-[13px] text-text-secondary font-mono">
              <span className="text-syntax-comment">// </span>
              Secure, efficient, scalable infrastructure for every industry
            </p>
          </div>
          <Link
            href="/solutions/manufacturing"
            className="inline-flex items-center gap-1.5 text-[11px] font-mono text-text-link
              hover:underline transition-all shrink-0"
          >
            view all solutions
            <ArrowRight size={12} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {solutions.map((s, i) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.06 }}
              className="group p-5 border border-border-default rounded-lg bg-bg-base
                hover:border-accent/20 transition-all duration-300"
            >
              <span className="text-[10px] text-text-muted font-mono block mb-2">
                case {i}:
              </span>
              <h3 className="font-mono text-[13px] font-bold text-text-primary mb-3">
                {s.name}
              </h3>
              <p className="text-[12px] text-text-secondary font-mono leading-relaxed mb-5">
                <span className="text-syntax-comment">/* </span>
                {s.description}
                <span className="text-syntax-comment"> */</span>
              </p>
              <Link
                href={s.href}
                className="inline-flex items-center gap-1.5 text-[11px] font-mono
                  text-text-link group-hover:underline transition-all"
              >
                open solution
                <ArrowRight size={12} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
