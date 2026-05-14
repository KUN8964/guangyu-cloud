"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Cpu,
  Zap,
  Network,
  Shield,
  Lock,
  HardDrive,
  MapPin,
  TrendingDown,
  Layers,
  BarChart3,
  Gauge,
  Database,
  Maximize,
  Home,
  Users,
  Cloud,
  ShieldCheck,
  FileKey,
  ArrowUpDown,
  type LucideIcon,
} from "lucide-react";
import type { Product, ProductDetail } from "@/data/products";
import { products } from "@/data/products";
import { productPixels } from "@/components/ProductPixels";

/* ═══════════════════════════════════════════
   Icon name → component mapping
   ═══════════════════════════════════════════ */

const iconMap: Record<string, LucideIcon> = {
  Cpu, Zap, Network, Shield, Lock, HardDrive, MapPin, TrendingDown,
  Layers, BarChart3, Gauge, Database, Maximize, Home, Users, Cloud,
  ShieldCheck, FileKey, ArrowUpDown,
};

/* ═══════════════════════════════════════════
   Color cycling helper
   ═══════════════════════════════════════════ */

const neonColors = [
  { border: "border-neon-cyan/20", glow: "neon-box-cyan", text: "text-neon-cyan", bg: "bg-neon-cyan/10" },
  { border: "border-neon-magenta/20", glow: "neon-box-magenta", text: "text-neon-magenta", bg: "bg-neon-magenta/10" },
  { border: "border-neon-purple/20", glow: "neon-box-purple", text: "text-neon-purple", bg: "bg-neon-purple/10" },
  { border: "border-neon-gold/20", glow: "neon-box-purple", text: "text-neon-gold", bg: "bg-neon-gold/10" },
];

/* ═══════════════════════════════════════════
   Floating particles (same as Hero)
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

export default function ProductDetailClient({
  product,
  detail,
}: {
  product: Product;
  detail?: ProductDetail;
}) {
  const PixelArt = productPixels[product.id];
  if (!detail) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-16">
        <p className="font-[family-name:var(--font-press-start)] text-neon-gold text-sm">
          [PRODUCT_DETAIL_COMING_SOON]
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
        {/* Background */}
        <div className="absolute inset-0 bg-abyss bg-pixel-grid">
          <div
            className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2
              w-[700px] h-[700px] rounded-full opacity-15"
            style={{
              background:
                "radial-gradient(circle, #00F0FF 0%, #B44CFF 30%, #FF2D95 60%, transparent 80%)",
              filter: "blur(80px)",
            }}
          />
          <DataParticles />
        </div>

        <div className="relative max-w-[1200px] mx-auto px-6">
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="mb-10"
          >
            <Link
              href="/#products"
              className="inline-flex items-center gap-2 text-xs text-text-muted
                hover:text-neon-cyan font-[family-name:var(--font-press-start)] tracking-wider
                transition-colors duration-200"
            >
              <ArrowLeft size={14} />
              [返回产品列表]
            </Link>
          </motion.div>

          {/* Hero content — two column layout */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <p className="font-[family-name:var(--font-vt323)] text-lg text-neon-cyan mb-3 tracking-widest">
                &gt; {product.subtitle}
            </p>
            <h1 className="font-[family-name:var(--font-press-start)] text-[28px] leading-[1.5]
              neon-purple mb-6 tracking-wider">
              {product.name}
            </h1>
            <p className="text-text-secondary text-base leading-relaxed max-w-[600px] mb-8">
              <span className="neon-gold">▸</span>{" "}
              {detail.heroTagline}
            </p>

            {/* Highlights */}
            <div className="flex flex-wrap gap-3 mb-10">
              {product.highlights.map((h) => (
                <span
                  key={h}
                  className="text-xs px-4 py-2 bg-surface border border-border/40
                    text-text-secondary font-[family-name:var(--font-vt323)] tracking-wider"
                >
                  {h}
                </span>
              ))}
            </div>

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
              <a
                href="#features"
                className="inline-flex items-center gap-2 px-8 py-4
                  border border-neon-purple/50 text-neon-purple
                  font-[family-name:var(--font-press-start)] text-xs tracking-wider
                  hover:bg-neon-purple/10 transition-all duration-200"
              >
                了解更多
                <ArrowRight size={14} />
              </a>
            </div>
            </motion.div>

            {/* Right: Pixel art illustration */}
            {PixelArt && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                className="hidden lg:flex items-center justify-center"
              >
                <PixelArt size={200} className="drop-shadow-[0_0_25px_rgba(0,240,255,0.3)]" />
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CORE FEATURES
          ═══════════════════════════════════════ */}
      <section id="features" className="py-24 bg-deep relative">
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
              &gt; FEATURES_
            </p>
            <h2 className="font-[family-name:var(--font-press-start)] text-2xl tracking-wider
              neon-purple mb-4">
              核心能力
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {detail.features.map((feat, i) => {
              const IconComp = iconMap[feat.icon] || Cpu;
              const color = neonColors[i % neonColors.length];
              return (
                <motion.div
                  key={feat.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.08 }}
                  className={`group isometric p-8 bg-card border ${color.border} ${color.glow}`}
                >
                  <div
                    className={`w-12 h-12 flex items-center justify-center mb-5 ${color.bg} border border-current/20`}
                  >
                    <IconComp size={24} className={color.text} />
                  </div>
                  <h3 className="font-[family-name:var(--font-press-start)] text-xs tracking-wider
                    text-text-primary mb-2">
                    [{feat.title}]
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {feat.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SPECIFICATIONS
          ═══════════════════════════════════════ */}
      {detail.specs.length > 0 && (
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
              <p className="font-[family-name:var(--font-vt323)] text-lg text-neon-magenta mb-3 tracking-widest">
                &gt; SPECS_
              </p>
              <h2 className="font-[family-name:var(--font-press-start)] text-2xl tracking-wider
                neon-cyan mb-4">
                技术规格
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              className="max-w-[800px] mx-auto bg-card border border-border/40"
            >
              {detail.specs.map((spec, i) => (
                <div
                  key={spec.label}
                  className={`flex items-center px-6 py-5 ${
                    i < detail.specs.length - 1 ? "border-b border-border/20" : ""
                  }`}
                >
                  <span className="w-[180px] shrink-0 text-xs text-text-muted
                    font-[family-name:var(--font-press-start)] tracking-wider">
                    [{spec.label}]
                  </span>
                  <span className="text-sm text-text-secondary font-[family-name:var(--font-vt323)]
                    tracking-wide leading-relaxed">
                    {spec.value}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* ═══════════════════════════════════════
          USE CASES
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
            <p className="font-[family-name:var(--font-vt323)] text-lg text-neon-gold mb-3 tracking-widest">
              &gt; USE_CASES_
            </p>
            <h2 className="font-[family-name:var(--font-press-start)] text-2xl tracking-wider
              neon-magenta mb-4">
              适用场景
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {detail.useCases.map((uc, i) => {
              const color = neonColors[i % neonColors.length];
              return (
                <motion.div
                  key={uc}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.08 }}
                  className={`group isometric p-6 bg-card border ${color.border} ${color.glow}
                    text-center hover:translate-y-[-4px] transition-all duration-300`}
                >
                  <span className="font-[family-name:var(--font-press-start)] text-[10px]
                    text-text-muted block mb-3 tracking-widest">
                    [{String(i + 1).padStart(2, "0")}]
                  </span>
                  <p className={`font-[family-name:var(--font-press-start)] text-xs tracking-wider
                    ${color.text}`}>
                    {uc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CTA STRIP
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
            <Zap
              size={32}
              className="mx-auto mb-6 text-neon-gold
                drop-shadow-[0_0_12px_rgba(255,215,0,0.6)]"
            />

            <h2 className="font-[family-name:var(--font-press-start)] text-2xl tracking-wider
              neon-cyan mb-6">
              准备好体验了吗？
            </h2>

            <p className="text-text-secondary mb-10 max-w-[480px] mx-auto text-sm">
              <span className="neon-gold">▸</span>{" "}
              注册即可获得免费试用额度，无需信用卡
            </p>

            <Link
              href="/register"
              className="pixel-btn inline-flex items-center gap-3 px-10 py-4
                bg-neon-magenta text-white font-bold
                font-[family-name:var(--font-press-start)] text-sm tracking-wider
                hover:shadow-[0_0_40px_rgba(255,45,149,0.6)] transition-shadow duration-200"
            >
              ▶ 免费试用
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          RELATED PRODUCTS
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
              相关产品
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products
              .filter((p) => p.id !== product.id)
              .map((p, i) => {
                const color = neonColors[i % neonColors.length];
                return (
                  <motion.div
                    key={p.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.08 }}
                  >
                    <Link
                      href={p.href}
                      className={`block isometric p-6 bg-card border ${color.border} ${color.glow}
                        h-full group hover:translate-y-[-4px] transition-all duration-300`}
                    >
                      <p className="font-[family-name:var(--font-vt323)] text-xs text-text-muted mb-2 tracking-wide">
                        &gt; {p.subtitle}
                      </p>
                      <h3 className="font-[family-name:var(--font-press-start)] text-xs tracking-wider
                        text-text-primary mb-3">
                        {p.name}
                      </h3>
                      <p className="text-sm text-text-secondary leading-relaxed mb-4 line-clamp-2">
                        {p.description}
                      </p>
                      <span className={`inline-flex items-center gap-1.5 text-xs
                        font-[family-name:var(--font-press-start)] tracking-wider ${color.text}
                        group-hover:drop-shadow-[0_0_8px_currentColor] transition-all duration-200`}>
                        [详细了解]
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
