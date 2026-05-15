"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Cpu, Shield, Zap, Database, Eye, Car, Box, Wrench, Building } from "lucide-react";
import { solutions } from "@/data/solutions";

const solutionIcons: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  general: Cpu,
  government: Shield,
  education: Zap,
  "security-chain": Eye,
  finance: Database,
  internet: Cpu,
  "smart-city": Eye,
  manufacturing: Wrench,
  healthcare: Shield,
  "autonomous-driving": Car,
  "embodied-ai": Box,
  enterprise: Building,
};

export default function SolutionsIndexClient() {
  return (
    <div className="min-h-screen">
      {/* ═══ HERO ═══ */}
      <section className="relative pt-20 pb-16 bg-bg-base">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2 }}
            className="mb-8"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-[11px] text-text-muted
                hover:text-text-link font-mono transition-colors"
            >
              <ArrowLeft size={12} />
              cd /
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p className="font-mono text-[11px] text-accent mb-2">
              📄 src/solutions/index.ts
            </p>
            <h1 className="font-mono text-[26px] font-bold text-text-primary mb-3">
              行业解决方案
            </h1>
            <p className="text-[13px] text-text-secondary font-mono max-w-[560px]">
              <span className="text-syntax-comment">// </span>
              覆盖 {solutions.length} 大行业，通过统一算力调度与智能运维平台，
              保障业务连续性，提升资源利用效率
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══ SOLUTION GRID ═══ */}
      <section className="py-16 bg-bg-overlay">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-10">
            <p className="ide-section-label">const solutions: Solution[]</p>
            <h2 className="ide-section-title">全部方案</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {solutions.map((s, i) => {
              const Icon = solutionIcons[s.id] || Cpu;
              return (
                <motion.div
                  key={s.id}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.2, delay: i * 0.03 }}
                >
                  <Link
                    href={s.href}
                    className="block p-5 border border-border-default rounded-lg bg-bg-base
                      hover:border-accent/20 transition-all duration-300 group h-full"
                  >
                    <Icon size={18} className="text-accent mb-3" />
                    <h3 className="font-mono text-[13px] font-bold text-text-primary mb-2
                      group-hover:text-accent transition-colors">
                      {s.name}
                    </h3>
                    <p className="text-[11px] text-text-secondary font-mono leading-relaxed mb-3">
                      {s.description}
                    </p>
                    <span className="inline-flex items-center gap-1 text-[10px] font-mono
                      text-text-link group-hover:underline">
                      open solution
                      <ArrowRight size={10} />
                    </span>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="py-16 bg-bg-base text-center">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-mono text-xl font-bold text-text-primary mb-3">
              立即体验我们的云服务
            </h2>
            <p className="text-[12px] text-text-secondary font-mono mb-6">
              <span className="text-syntax-comment"># </span>
              注册即可获得免费试用额度，无需信用卡
            </p>
            <Link href="/register" className="btn-primary text-[12px] !py-2.5 !px-8">
              免费试用
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
