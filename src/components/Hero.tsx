"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Server, Cpu, Cloud, HardDrive } from "lucide-react";

/* ═══════════════════════════════════════════
   Isometric Server Rack — CSS pixel art
   Each "rack unit" is a div with isometric styling
   ═══════════════════════════════════════════ */

function IsometricServerRack() {
  return (
    <div className="relative w-[320px] h-[360px] mx-auto
      transform perspective-[800px] rotateX(55deg) rotateZ(-45deg)
      preserve-3d">
      {/* Base platform */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-border-glow
        shadow-[0_0_20px_rgba(180,76,255,0.4)]" />

      {/* Rack frame — left pillar */}
      <div className="absolute left-0 top-0 bottom-2 w-2
        bg-gradient-to-b from-neon-cyan/80 via-neon-purple/60 to-neon-magenta/80
        shadow-[0_0_10px_rgba(0,240,255,0.3)]" />

      {/* Rack frame — right pillar */}
      <div className="absolute right-0 top-0 bottom-2 w-2
        bg-gradient-to-b from-neon-cyan/80 via-neon-purple/60 to-neon-magenta/80
        shadow-[0_0_10px_rgba(0,240,255,0.3)]" />

      {/* Rack frame — top bar */}
      <div className="absolute left-2 right-2 top-0 h-2
        bg-neon-cyan/70 shadow-[0_0_8px_rgba(0,240,255,0.4)]" />

      {/* Server units — 6 blades */}
      {[...Array(6)].map((_, i) => (
        <div key={i} className="absolute left-2 right-2 flex items-center gap-1 px-2"
          style={{ top: `${14 + i * 52}px`, height: "44px" }}>
          {/* Blade body */}
          <div className={`flex-1 h-full border border-border/50
            ${i % 3 === 0
              ? "bg-neon-cyan/10 border-neon-cyan/30 shadow-[0_0_8px_rgba(0,240,255,0.15)]"
              : i % 3 === 1
                ? "bg-neon-purple/10 border-neon-purple/30 shadow-[0_0_8px_rgba(180,76,255,0.15)]"
                : "bg-neon-magenta/10 border-neon-magenta/30 shadow-[0_0_8px_rgba(255,45,149,0.15)]"
            }`}>
            {/* Blinking indicator LEDs */}
            <div className="flex gap-1.5 p-1.5">
              <span className={`w-1 h-1 rounded-none ${i % 2 === 0 ? "bg-neon-green" : "bg-neon-gold"}
                shadow-[0_0_3px_currentColor] animate-pulse`}
                style={{ animationDelay: `${i * 0.2}s` }} />
              <span className="w-1 h-1 rounded-none bg-neon-cyan/50" />
              <span className="w-1 h-1 rounded-none bg-neon-magenta/50" />
            </div>
            {/* Vent lines */}
            <div className="flex gap-0.5 px-1.5 pb-1.5">
              {[...Array(8)].map((_, j) => (
                <div key={j} className="flex-1 h-2 bg-border/30" />
              ))}
            </div>
          </div>
          {/* Chip / CPU block */}
          <div className="w-8 h-8 bg-abyss border border-neon-gold/40
            flex items-center justify-center shadow-[0_0_5px_rgba(255,215,0,0.2)]">
            <Cpu size={12} className="text-neon-gold/70" />
          </div>
        </div>
      ))}

      {/* Cloud overlay at top */}
      <div className="absolute -top-12 left-1/2 -translate-x-1/2
        px-4 py-1.5 bg-surface/90 border border-neon-cyan/40
        shadow-[0_0_15px_rgba(0,240,255,0.2)]">
        <Cloud size={18} className="text-neon-cyan" />
      </div>

      {/* Storage pods at bottom */}
      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="w-5 h-5 bg-deep border border-neon-purple/40
            shadow-[0_0_6px_rgba(180,76,255,0.2)] flex items-center justify-center">
            <HardDrive size={8} className="text-neon-purple/60" />
          </div>
        ))}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════
   Floating data particles
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
          style={{
            left: p.x,
            top: p.y,
            width: p.s,
            height: p.s,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
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
   Main Hero Component
   ═══════════════════════════════════════════ */

export default function Hero() {
  return (
    <section className="relative min-h-[700px] pt-32 pb-20 flex items-center overflow-hidden">
      {/* Background: pixel grid + gradient */}
      <div className="absolute inset-0 bg-abyss bg-pixel-grid">
        {/* Radial synthwave glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2
          w-[700px] h-[700px] rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, #00F0FF 0%, #B44CFF 30%, #FF2D95 60%, transparent 80%)",
            filter: "blur(80px)",
          }} />
        {/* Secondary glow */}
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full opacity-15"
          style={{
            background: "radial-gradient(circle, #FFD700 0%, transparent 70%)",
            filter: "blur(60px)",
          }} />

        <DataParticles />
      </div>

      {/* Horizon line */}
      <div className="absolute bottom-[380px] left-0 right-0 h-[1px] section-divider opacity-40" />

      <div className="relative max-w-[1200px] mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: text content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8
              border border-neon-cyan/30 bg-neon-cyan/5
              font-[family-name:var(--font-press-start)] text-[10px] tracking-[0.2em] neon-cyan">
              <span className="w-2 h-2 bg-neon-cyan animate-pulse shadow-[0_0_6px_#00F0FF]" />
              WEB3.0 分布式存算网络
            </div>

            <h1 className="font-[family-name:var(--font-press-start)] text-[36px] leading-[1.4]
              tracking-wider mb-6">
              <span className="neon-cyan">分布式存算</span>
              <br />
              <span className="neon-purple">AI 推理网络</span>
            </h1>

            <p className="text-text-secondary text-base leading-relaxed mb-4 max-w-[500px]">
              <span className="neon-gold">▸</span> 大规模分布式节点架构
            </p>
            <p className="text-text-secondary text-base leading-relaxed mb-4 max-w-[500px]">
              <span className="neon-cyan">▸</span> 高安全 • 高可用 • 低成本存算一体
            </p>
            <p className="text-text-secondary text-base leading-relaxed mb-10 max-w-[500px]">
              <span className="neon-magenta">▸</span> 边缘 AI 推理 — 延迟 &lt; 50ms
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/register"
                className="pixel-btn inline-flex items-center gap-2 px-8 py-4
                  bg-neon-cyan text-abyss font-bold
                  font-[family-name:var(--font-press-start)] text-xs tracking-wider
                  hover:shadow-[0_0_30px_rgba(0,240,255,0.6)] transition-shadow duration-200"
              >
                ▶ 立即体验
              </Link>
              <Link
                href="#products"
                className="inline-flex items-center gap-2 px-8 py-4
                  border border-neon-purple/50 text-neon-purple
                  font-[family-name:var(--font-press-start)] text-xs tracking-wider
                  hover:bg-neon-purple/10 hover:shadow-[0_0_20px_rgba(180,76,255,0.2)]
                  transition-all duration-200"
              >
                了解更多
                <ArrowRight size={14} />
              </Link>
            </div>

            {/* Stats row */}
            <div className="flex gap-8 mt-12 pt-8 border-t border-border/40">
              {[
                { val: "99.99%", label: "可用性", color: "neon-cyan" },
                { val: "<50ms", label: "推理延迟", color: "neon-magenta" },
                { val: "1000+", label: "边缘节点", color: "neon-gold" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className={`font-[family-name:var(--font-vt323)] text-2xl text-${stat.color}
                    drop-shadow-[0_0_6px_var(--color-${stat.color})]`}>
                    {stat.val}
                  </p>
                  <p className="text-xs text-text-muted font-[family-name:var(--font-press-start)]
                    tracking-wider mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Isometric Server Rack Art */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="hidden lg:flex items-center justify-center"
          >
            <IsometricServerRack />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
