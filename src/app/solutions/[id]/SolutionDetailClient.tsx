"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Zap,
  Eye,
  Activity,
  HardDrive,
  TrendingUp,
  Shield,
  Database,
  Video,
  Server,
  Gauge,
  Lock,
  ShieldCheck,
  FileText,
  Image,
  Maximize,
  type LucideIcon,
} from "lucide-react";
import type { Solution, SolutionDetail } from "@/data/solutions";
import { solutions } from "@/data/solutions";

/* ═══════════════════════════════════════════
   Icon map
   ═══════════════════════════════════════════ */

const iconMap: Record<string, LucideIcon> = {
  Eye, Activity, HardDrive, TrendingUp, Shield, Database, Video, Server,
  Gauge, Lock, ShieldCheck, FileText, Image, Maximize, Zap,
};

/* ═══════════════════════════════════════════
   Color palette
   ═══════════════════════════════════════════ */

const neonColors = [
  { border: "border-neon-cyan/20", glow: "neon-box-cyan", text: "text-neon-cyan", bg: "bg-neon-cyan/10" },
  { border: "border-neon-magenta/20", glow: "neon-box-magenta", text: "text-neon-magenta", bg: "bg-neon-magenta/10" },
  { border: "border-neon-purple/20", glow: "neon-box-purple", text: "text-neon-purple", bg: "bg-neon-purple/10" },
  { border: "border-neon-gold/20", glow: "neon-box-purple", text: "text-neon-gold", bg: "bg-neon-gold/10" },
];

/* ═══════════════════════════════════════════
   Particles
   ═══════════════════════════════════════════ */

function DataParticles() {
  const particles = [
    { x: "10%", y: "20%", s: 3, d: 3, c: "bg-neon-cyan" },
    { x: "85%", y: "15%", s: 2, d: 4, c: "bg-neon-magenta" },
    { x: "70%", y: "70%", s: 4, d: 3.5, c: "bg-neon-purple" },
    { x: "15%", y: "80%", s: 2, d: 5, c: "bg-neon-gold" },
    { x: "50%", y: "50%", s: 3, d: 2.5, c: "bg-neon-cyan" },
    { x: "30%", y: "35%", s: 2, d: 4.5, c: "bg-neon-purple" },
    { x: "90%", y: "55%", s: 3, d: 3, c: "bg-neon-magenta" },
    { x: "60%", y: "85%", s: 2, d: 4, c: "bg-neon-gold" },
  ];
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-none ${p.c} opacity-30`}
          style={{ left: p.x, top: p.y, width: p.s, height: p.s }}
          animate={{ y: [0, -20, 0], opacity: [0.2, 0.5, 0.2] }}
          transition={{
            duration: p.d,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        />
      ))}
    </div>
  );
}

/* ═══════════════════════════════════════════
   Main Component
   ═══════════════════════════════════════════ */

export default function SolutionDetailClient({
  solution,
  detail,
}: {
  solution: Solution;
  detail?: SolutionDetail;
}) {
  if (!detail) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-16">
        <p className="font-[family-name:var(--font-press-start)] text-neon-gold text-sm">
          [SOLUTION_DETAIL_COMING_SOON]
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* ═══════════════════════════════════════
          HERO BANNER
          ═══════════════════════════════════════ */}
      <section className="relative pt-28 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-abyss bg-pixel-grid">
          <div
            className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2
              w-[700px] h-[700px] rounded-full opacity-15"
            style={{
              background:
                "radial-gradient(circle, #B44CFF 0%, #00F0FF 30%, #FFD700 60%, transparent 80%)",
              filter: "blur(80px)",
            }}
          />
          <DataParticles />
        </div>

        <div className="relative max-w-[1200px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="mb-10"
          >
            <Link
              href="/#solutions"
              className="inline-flex items-center gap-2 text-xs text-text-muted
                hover:text-neon-cyan font-[family-name:var(--font-press-start)] tracking-wider
                transition-colors duration-200"
            >
              <ArrowLeft size={14} />
              [返回方案列表]
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <p className="font-[family-name:var(--font-vt323)] text-lg text-neon-gold mb-3 tracking-widest">
              &gt; INDUSTRY_SOLUTION_
            </p>
            <h1 className="font-[family-name:var(--font-press-start)] text-[28px] leading-[1.5]
              neon-purple mb-6 tracking-wider">
              {solution.name}解决方案
            </h1>
            <p className="text-text-secondary text-base leading-relaxed max-w-[600px] mb-10">
              <span className="neon-cyan">▸</span>{" "}
              {detail.heroTagline}
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/register"
                className="pixel-btn inline-flex items-center gap-2 px-8 py-4
                  bg-neon-magenta text-white font-bold
                  font-[family-name:var(--font-press-start)] text-xs tracking-wider
                  hover:shadow-[0_0_30px_rgba(255,45,149,0.6)] transition-shadow duration-200"
              >
                ▶ 预约演示
              </Link>
              <a
                href="#pain-points"
                className="inline-flex items-center gap-2 px-8 py-4
                  border border-neon-cyan/50 text-neon-cyan
                  font-[family-name:var(--font-press-start)] text-xs tracking-wider
                  hover:bg-neon-cyan/10 transition-all duration-200"
              >
                了解详情
                <ArrowRight size={14} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          PAIN POINTS
          ═══════════════════════════════════════ */}
      <section id="pain-points" className="py-24 bg-deep relative">
        <div className="absolute inset-0 bg-pixel-grid opacity-40" />

        <div className="relative max-w-[1200px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="text-center mb-14"
          >
            <p className="font-[family-name:var(--font-vt323)] text-lg text-neon-magenta mb-3 tracking-widest">
              &gt; PAIN_POINTS_
            </p>
            <h2 className="font-[family-name:var(--font-press-start)] text-2xl tracking-wider
              neon-cyan mb-4">
              行业痛点
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[960px] mx-auto">
            {detail.painPoints.map((pp, i) => (
              <motion.div
                key={pp.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
                className="group p-6 bg-card border border-neon-magenta/20
                  hover:border-neon-magenta/40 neon-box-magenta
                  transition-all duration-300"
              >
                <span className="font-[family-name:var(--font-press-start)] text-[10px]
                  text-neon-magenta block mb-4 tracking-widest">
                  [PAIN_{String(i + 1).padStart(2, "0")}]
                </span>
                <h3 className="font-[family-name:var(--font-press-start)] text-xs tracking-wider
                  text-text-primary mb-3">
                  {pp.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {pp.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          ARCHITECTURE
          ═══════════════════════════════════════ */}
      <section className="py-24 bg-void relative">
        <div className="absolute inset-0 bg-pixel-grid-large opacity-20" />

        <div className="relative max-w-[1200px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="text-center mb-14"
          >
            <p className="font-[family-name:var(--font-vt323)] text-lg text-neon-purple mb-3 tracking-widest">
              &gt; ARCHITECTURE_
            </p>
            <h2 className="font-[family-name:var(--font-press-start)] text-2xl tracking-wider
              neon-gold mb-4">
              方案架构
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="max-w-[800px] mx-auto"
          >
            <p className="text-sm text-text-secondary leading-relaxed mb-10 text-center">
              {detail.architecture.description}
            </p>

            {/* Step flow — pixel terminal style */}
            <div className="space-y-0">
              {detail.architecture.steps.map((step, i) => {
                const colors = ["neon-cyan", "neon-purple", "neon-magenta", "neon-gold"];
                const color = colors[i % colors.length];
                return (
                  <div key={i} className="flex items-start gap-4">
                    {/* Left: number + line */}
                    <div className="flex flex-col items-center shrink-0">
                      <div
                        className={`w-10 h-10 flex items-center justify-center
                          border border-${color}/40 bg-${color}/10`}
                      >
                        <span className={`font-[family-name:var(--font-press-start)] text-xs
                          text-${color} tracking-wider`}>
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </div>
                      {i < detail.architecture.steps.length - 1 && (
                        <div className={`w-[1px] h-10 bg-${color}/30 my-1`} />
                      )}
                    </div>
                    {/* Right: content */}
                    <div className={`pt-2.5 pb-8 ${i === detail.architecture.steps.length - 1 ? "pb-0" : ""}`}>
                      <p className="font-[family-name:var(--font-vt323)] text-base text-text-secondary
                        tracking-wide leading-relaxed">
                        {step}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          ADVANTAGES
          ═══════════════════════════════════════ */}
      <section className="py-24 bg-deep relative">
        <div className="absolute inset-0 bg-pixel-grid opacity-40" />

        <div className="relative max-w-[1200px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="text-center mb-14"
          >
            <p className="font-[family-name:var(--font-vt323)] text-lg text-neon-cyan mb-3 tracking-widest">
              &gt; ADVANTAGES_
            </p>
            <h2 className="font-[family-name:var(--font-press-start)] text-2xl tracking-wider
              neon-magenta mb-4">
              核心优势
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {detail.advantages.map((adv, i) => {
              const IconComp = iconMap[adv.icon] || Zap;
              const color = neonColors[i % neonColors.length];
              return (
                <motion.div
                  key={adv.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.08 }}
                  className={`group isometric p-8 bg-card border ${color.border} ${color.glow}`}
                >
                  <div className={`w-12 h-12 flex items-center justify-center mb-5 ${color.bg} border border-current/20`}>
                    <IconComp size={24} className={color.text} />
                  </div>
                  <h3 className="font-[family-name:var(--font-press-start)] text-xs tracking-wider
                    text-text-primary mb-2">
                    [{adv.title}]
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {adv.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CTA
          ═══════════════════════════════════════ */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-abyss">
          <div className="absolute inset-0 bg-pixel-grid opacity-50" />
          <div
            className="absolute bottom-0 left-0 right-0 h-1/2"
            style={{
              background:
                "linear-gradient(to top, #FF2D95 0%, #B44CFF 30%, transparent 100%)",
              opacity: 0.12,
            }}
          />
          <div className="absolute bottom-[140px] left-0 right-0 h-[2px] section-divider" />
        </div>

        <div className="relative max-w-[1200px] mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
          >
            <Zap size={32} className="mx-auto mb-6 text-neon-gold
              drop-shadow-[0_0_12px_rgba(255,215,0,0.6)]" />

            <h2 className="font-[family-name:var(--font-press-start)] text-2xl tracking-wider
              neon-cyan mb-6">
              开启您的{solution.name}数字化之旅
            </h2>

            <p className="text-text-secondary mb-10 max-w-[480px] mx-auto text-sm">
              <span className="neon-gold">▸</span>{" "}
              预约产品演示，获取专属解决方案
            </p>

            <Link
              href="/register"
              className="pixel-btn inline-flex items-center gap-3 px-10 py-4
                bg-neon-magenta text-white font-bold
                font-[family-name:var(--font-press-start)] text-sm tracking-wider
                hover:shadow-[0_0_40px_rgba(255,45,149,0.6)] transition-shadow duration-200"
            >
              ▶ 预约演示
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          RELATED SOLUTIONS
          ═══════════════════════════════════════ */}
      <section className="py-24 bg-void relative">
        <div className="absolute inset-0 bg-pixel-grid-large opacity-20" />

        <div className="relative max-w-[1200px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="text-center mb-14"
          >
            <p className="font-[family-name:var(--font-vt323)] text-lg text-neon-purple mb-3 tracking-widest">
              &gt; RELATED_
            </p>
            <h2 className="font-[family-name:var(--font-press-start)] text-2xl tracking-wider
              neon-cyan mb-4">
              其他行业方案
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-[800px] mx-auto">
            {solutions
              .filter((s) => s.id !== solution.id)
              .map((s, i) => {
                const color = neonColors[i % neonColors.length];
                return (
                  <motion.div
                    key={s.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.08 }}
                  >
                    <Link
                      href={s.href}
                      className={`block isometric p-6 bg-card border ${color.border} ${color.glow}
                        text-center h-full group hover:translate-y-[-4px]
                        transition-all duration-300`}
                    >
                      <span className="font-[family-name:var(--font-press-start)] text-[10px]
                        text-text-muted block mb-4 tracking-widest">
                        [{String(i + 1).padStart(2, "0")}]
                      </span>
                      <h3 className="font-[family-name:var(--font-press-start)] text-xs tracking-wider
                        text-text-primary mb-3">
                        {s.name}
                      </h3>
                      <p className="text-xs text-text-secondary leading-relaxed mb-4">
                        {s.description}
                      </p>
                      <span className={`inline-flex items-center gap-1.5 text-xs
                        font-[family-name:var(--font-press-start)] tracking-wider ${color.text}
                        group-hover:drop-shadow-[0_0_8px_currentColor] transition-all duration-200`}>
                        [查看方案]
                        <ArrowRight size={12} />
                      </span>
                    </Link>
                  </motion.div>
                );
              })}
          </div>
        </div>
      </section>
    </div>
  );
}
