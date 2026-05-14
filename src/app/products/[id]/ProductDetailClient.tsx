"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Product, ProductDetail } from "@/data/products";
import { products } from "@/data/products";

/* ═══════════════════════════════════════════
   Syntax-colored feature icons (emoji mapping)
   ═══════════════════════════════════════════ */

const featureIcons: Record<string, string> = {
  Cpu: "🖥", Zap: "⚡", Network: "🌐", Shield: "🛡",
  Lock: "🔐", HardDrive: "💾", MapPin: "📍", TrendingDown: "📉",
  Layers: "📚", BarChart3: "📊", Gauge: "⏱", Database: "🗄",
  Maximize: "📐", Home: "🏠", Users: "👥", Cloud: "☁️",
  ShieldCheck: "✅", FileKey: "🔑", ArrowUpDown: "↕",
};

export default function ProductDetailClient({
  product,
  detail,
}: {
  product: Product;
  detail?: ProductDetail;
}) {
  if (!detail) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-12">
        <p className="font-mono text-[13px] text-warning">
          $ cat {product.id}.tsx → file not found
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* ═══ HERO ═══ */}
      <section className="relative pt-20 pb-16 bg-bg-base">
        <div className="max-w-6xl mx-auto px-6">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2 }}
            className="mb-8"
          >
            <Link
              href="/#products"
              className="inline-flex items-center gap-1.5 text-[11px] text-text-muted
                hover:text-text-link font-mono transition-colors"
            >
              <ArrowLeft size={12} />
              cd ../products
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.05 }}
          >
            <p className="font-mono text-[11px] text-accent mb-2">
              📄 src/products/{product.id}.tsx
            </p>
            <h1 className="font-mono text-[26px] font-bold text-text-primary mb-3 tracking-tight">
              {product.name}
            </h1>
            <p className="text-[13px] text-text-secondary font-mono max-w-[560px] mb-6">
              <span className="text-syntax-comment">/** </span>
              {detail.heroTagline}
              <span className="text-syntax-comment"> */</span>
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 mb-8">
              {product.highlights.map((h) => (
                <span key={h} className="text-[10px] px-2 py-0.5 bg-bg-overlay border border-border-muted
                  rounded-md text-text-muted font-mono">
                  {h}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <Link href="/register" className="btn-primary text-[12px]">
                $ deploy --now
              </Link>
              <a href="#features" className="btn-secondary text-[12px]">
                cat FEATURES.md
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══ FEATURES ═══ */}
      <section id="features" className="py-16 bg-bg-overlay">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-10">
            <p className="ide-section-label">interface ProductFeatures</p>
            <h2 className="ide-section-title">Core Capabilities</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {detail.features.map((feat, i) => (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.2, delay: i * 0.04 }}
                className="p-5 border border-border-default rounded-lg bg-bg-base
                  hover:border-accent/20 transition-all duration-300"
              >
                <p className="font-mono text-[13px] font-bold text-text-primary mb-2">
                  {featureIcons[feat.icon] || "▪"} {feat.title}
                </p>
                <p className="text-[12px] text-text-secondary font-mono leading-relaxed">
                  <span className="text-syntax-comment">// </span>
                  {feat.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SPECS ═══ */}
      {detail.specs.length > 0 && (
        <section className="py-16 bg-bg-base">
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-10">
              <p className="ide-section-label">type SpecTable</p>
              <h2 className="ide-section-title">Technical Specifications</h2>
            </div>

            <div className="max-w-[700px] code-block">
              <div className="code-header">
                📄 specs.json
              </div>
              <div className="p-5 font-mono text-[12px] leading-7">
                <span className="text-syntax-keyword">{"{"}</span>
                {detail.specs.map((spec, i) => (
                  <div key={spec.label} className="flex ml-4">
                    <span className="text-syntax-string">&quot;{spec.label}&quot;</span>
                    <span className="text-text-muted">: </span>
                    <span className="text-syntax-string">&quot;{spec.value}&quot;</span>
                    {i < detail.specs.length - 1 ? <span className="text-text-muted">,</span> : ""}
                  </div>
                ))}
                <span className="text-syntax-keyword">{"}"}</span>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ═══ USE CASES ═══ */}
      <section className="py-16 bg-bg-overlay">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-10">
            <p className="ide-section-label">enum UseCase</p>
            <h2 className="ide-section-title">Use Cases</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {detail.useCases.map((uc, i) => (
              <motion.div
                key={uc}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.2, delay: i * 0.04 }}
                className="p-5 border border-border-default rounded-lg bg-bg-base text-center
                  hover:border-accent/20 transition-all duration-300"
              >
                <span className="font-mono text-[18px] text-text-muted block mb-2">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="font-mono text-[12px] text-accent font-semibold">
                  {uc}
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
                $ ssh edge-node-01 --deploy
              </span>
            </div>

            <h2 className="font-mono text-xl font-bold text-text-primary mb-3">
              Ready to deploy?
            </h2>
            <p className="text-[12px] text-text-secondary font-mono mb-6">
              <span className="text-syntax-comment"># </span>
              Free trial. No credit card.
            </p>

            <Link href="/register" className="btn-primary text-[12px] !py-2.5 !px-8">
              $ ./deploy --free-trial
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ═══ RELATED PRODUCTS ═══ */}
      <section className="py-16 bg-bg-overlay">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-10">
            <p className="ide-section-label">import related</p>
            <h2 className="ide-section-title">Related Products</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {products
              .filter((p) => p.id !== product.id)
              .map((p) => (
                <Link
                  key={p.id}
                  href={p.href}
                  className="block p-4 border border-border-default rounded-lg bg-bg-base
                    hover:border-accent/20 transition-all duration-300 group"
                >
                  <p className="text-[10px] text-text-muted font-mono mb-1.5">
                    📄 {p.id}.tsx
                  </p>
                  <p className="text-[11px] text-text-secondary font-mono mb-1.5">
                    {p.subtitle}
                  </p>
                  <h3 className="font-mono text-[13px] font-bold text-text-primary mb-2">
                    {p.name}
                  </h3>
                  <p className="text-[11px] text-text-muted font-mono leading-relaxed line-clamp-2 mb-2">
                    {p.description}
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
