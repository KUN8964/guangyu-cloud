"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { solutions } from "@/data/solutions";

export default function SolutionSection() {
  return (
    <section id="solutions" className="py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12"
        >
          <div>
            <h2 className="text-[28px] font-semibold text-[#1A1A2E] mb-3">
              行业解决方案
            </h2>
            <p className="text-[#4A4A5E]">
              为不同行业提供安全、高效、可扩展的数据与算力基础设施
            </p>
          </div>
          <Link
            href="/solutions/enterprise"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-[#2D5BFF] hover:text-[#1E40D8] transition-colors duration-150 shrink-0"
          >
            企业通用解决方案
            <ArrowRight size={14} />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((s, i) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.08 }}
              className="group p-8 rounded-xl border border-black/5 bg-white hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-200"
            >
              <h3 className="text-lg font-semibold text-[#1A1A2E] mb-3">
                {s.name}
              </h3>
              <p className="text-sm text-[#4A4A5E] leading-relaxed mb-4">
                {s.description}
              </p>
              <Link
                href={s.href}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-[#2D5BFF] hover:text-[#1E40D8] transition-colors duration-150"
              >
                查看方案
                <ArrowRight size={14} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
