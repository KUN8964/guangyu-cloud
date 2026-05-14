"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { solutions } from "@/data/solutions";

export default function SolutionSection() {
  return (
    <section id="solutions" className="py-24 bg-deep relative">
      <div className="absolute inset-0 bg-pixel-grid opacity-40" />
      {/* Side glow */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[300px] h-[500px] rounded-full opacity-10"
        style={{ background: "radial-gradient(circle, #FF2D95 0%, transparent 70%)", filter: "blur(80px)" }} />

      <div className="relative max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14"
        >
          <div>
            <p className="font-[family-name:var(--font-vt323)] text-lg text-neon-gold mb-3 tracking-widest">
              &gt; SOLUTIONS_
            </p>
            <h2 className="font-[family-name:var(--font-press-start)] text-2xl tracking-wider
              neon-magenta mb-3">
              行业解决方案
            </h2>
            <p className="text-text-secondary text-sm">
              <span className="text-neon-cyan">▸</span>{" "}
              为不同行业提供安全、高效、可扩展的数据与算力基础设施
            </p>
          </div>
          <Link
            href="/solutions/enterprise"
            className="inline-flex items-center gap-1.5 text-xs
              font-[family-name:var(--font-press-start)] tracking-wider
              neon-cyan hover:drop-shadow-[0_0_10px_#00F0FF] transition-all duration-200 shrink-0"
          >
            [全部方案]
            <ArrowRight size={12} />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((s, i) => {
            const colors = [
              "border-neon-cyan/30 hover:border-neon-cyan/60",
              "border-neon-magenta/30 hover:border-neon-magenta/60",
              "border-neon-purple/30 hover:border-neon-purple/60",
              "border-neon-gold/30 hover:border-neon-gold/60",
            ];
            const glows = [
              "hover:shadow-[0_0_20px_rgba(0,240,255,0.15)]",
              "hover:shadow-[0_0_20px_rgba(255,45,149,0.15)]",
              "hover:shadow-[0_0_20px_rgba(180,76,255,0.15)]",
              "hover:shadow-[0_0_20px_rgba(255,215,0,0.15)]",
            ];

            return (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.08 }}
                className={`group isometric p-8 bg-card border ${colors[i]} ${glows[i]}
                  transition-all duration-300`}
              >
                {/* Pixel number indicator */}
                <span className="font-[family-name:var(--font-press-start)] text-[10px]
                  text-text-muted mb-4 block tracking-widest">
                  [{String(i + 1).padStart(2, "0")}]
                </span>

                <h3 className="font-[family-name:var(--font-press-start)] text-sm tracking-wider
                  text-text-primary mb-4">
                  {s.name}
                </h3>

                <p className="text-sm text-text-secondary leading-relaxed mb-6">
                  {s.description}
                </p>

                <Link
                  href={s.href}
                  className="inline-flex items-center gap-1.5 text-xs
                    font-[family-name:var(--font-press-start)] tracking-wider
                    text-neon-cyan group-hover:drop-shadow-[0_0_8px_#00F0FF]
                    transition-all duration-200"
                >
                  [查看方案]
                  <ArrowRight size={12} />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
