"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Solution, SolutionDetail } from "@/data/solutions";
import { solutions } from "@/data/solutions";

export default function SolutionDetailClient({
  solution,
  detail,
}: {
  solution: Solution;
  detail?: SolutionDetail;
}) {
  if (!detail) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-12">
        <p className="font-mono text-[13px] text-warning">
          $ cat {solution.id}.tsx → file not found
        </p>
      </div>
    );
  }

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
              href="/#solutions"
              className="inline-flex items-center gap-1.5 text-[11px] text-text-muted
                hover:text-text-link font-mono transition-colors"
            >
              <ArrowLeft size={12} />
              cd ../solutions
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.05 }}
          >
            <p className="font-mono text-[11px] text-warning mb-2">
              📄 src/solutions/{solution.id}.tsx
            </p>
            <h1 className="font-mono text-[26px] font-bold text-text-primary mb-3 tracking-tight">
              {solution.name} Solution
            </h1>
            <p className="text-[13px] text-text-secondary font-mono max-w-[560px] mb-8">
              <span className="text-syntax-comment">/** </span>
              {detail.heroTagline}
              <span className="text-syntax-comment"> */</span>
            </p>

            <div className="flex flex-wrap gap-3">
              <Link href="/register" className="btn-primary text-[12px]">
                $ schedule --demo
              </Link>
              <a href="#pain-points" className="btn-secondary text-[12px]">
                cat PAIN_POINTS.md
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══ PAIN POINTS ═══ */}
      <section id="pain-points" className="py-16 bg-bg-overlay">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-10">
            <p className="ide-section-label">type PainPoint</p>
            <h2 className="ide-section-title">Industry Pain Points</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {detail.painPoints.map((pp, i) => (
              <motion.div
                key={pp.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.2, delay: i * 0.06 }}
                className="p-5 border border-border-default rounded-lg bg-bg-base
                  hover:border-error/20 transition-all duration-300"
              >
                <span className="text-[10px] text-error font-mono block mb-3">
                  pain_point_{String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-mono text-[13px] font-bold text-text-primary mb-2">
                  {pp.title}
                </h3>
                <p className="text-[12px] text-text-secondary font-mono leading-relaxed">
                  <span className="text-syntax-comment">// </span>
                  {pp.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ ARCHITECTURE ═══ */}
      <section className="py-16 bg-bg-base">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-10">
            <p className="ide-section-label">class Architecture</p>
            <h2 className="ide-section-title">Solution Architecture</h2>
          </div>

          <div className="max-w-[700px] mx-auto">
            <p className="text-[12px] text-text-secondary font-mono leading-relaxed mb-8 text-center">
              <span className="text-syntax-comment">// </span>
              {detail.architecture.description}
            </p>

            {/* Step pipeline */}
            <div className="code-block">
              <div className="code-header">📄 pipeline.config.ts</div>
              <div className="p-5 font-mono text-[12px] leading-7">
                <span className="text-syntax-keyword">const</span>{" "}
                <span className="text-syntax-function">pipeline</span>{" "}
                <span className="text-text-muted">= [</span>
                {detail.architecture.steps.map((step, i) => (
                  <div key={i} className="ml-4">
                    <span className="text-syntax-string">&quot;{step}&quot;</span>
                    {i < detail.architecture.steps.length - 1 ? (
                      <span className="text-text-muted">,</span>
                    ) : ""}
                  </div>
                ))}
                <span className="text-text-muted">];</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ ADVANTAGES ═══ */}
      <section className="py-16 bg-bg-overlay">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-10">
            <p className="ide-section-label">interface Advantages</p>
            <h2 className="ide-section-title">Core Advantages</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {detail.advantages.map((adv, i) => (
              <motion.div
                key={adv.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.2, delay: i * 0.04 }}
                className="p-5 border border-border-default rounded-lg bg-bg-base
                  hover:border-accent/20 transition-all duration-300"
              >
                <p className="font-mono text-[13px] font-bold text-accent mb-2">
                  &gt; {adv.title}
                </p>
                <p className="text-[12px] text-text-secondary font-mono leading-relaxed">
                  <span className="text-syntax-comment">// </span>
                  {adv.desc}
                </p>
              </motion.div>
            ))}
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
            <div className="inline-flex items-center gap-2 mb-5 px-4 py-2
              border border-border-default rounded-md bg-bg-overlay">
              <span className="w-2 h-2 rounded-full bg-success" />
              <span className="text-[11px] text-text-muted font-mono">
                $ ssh {solution.id} --deploy
              </span>
            </div>

            <h2 className="font-mono text-xl font-bold text-text-primary mb-3">
              Start your {solution.name} transformation
            </h2>
            <p className="text-[12px] text-text-secondary font-mono mb-6">
              <span className="text-syntax-comment"># </span>
              Schedule a demo for a customized solution
            </p>

            <Link href="/register" className="btn-primary text-[12px] !py-2.5 !px-8">
              $ schedule --demo
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ═══ RELATED ═══ */}
      <section className="py-16 bg-bg-overlay">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-10 text-center">
            <p className="ide-section-label">import related</p>
            <h2 className="ide-section-title">Other Solutions</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-[700px] mx-auto">
            {solutions
              .filter((s) => s.id !== solution.id)
              .map((s) => (
                <Link
                  key={s.id}
                  href={s.href}
                  className="block p-4 border border-border-default rounded-lg bg-bg-base
                    text-center hover:border-accent/20 transition-all duration-300 group"
                >
                  <span className="font-mono text-lg text-text-muted block mb-2">
                    {s.id}
                  </span>
                  <h3 className="font-mono text-[12px] font-bold text-text-primary mb-1.5">
                    {s.name}
                  </h3>
                  <p className="text-[11px] text-text-muted font-mono mb-2 line-clamp-2">
                    {s.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-[11px] font-mono
                    text-text-link group-hover:underline">
                    open
                    <ArrowRight size={10} />
                  </span>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}
