"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { products, type Product } from "@/data/products";

const accentColors = [
  { border: "border-neon-cyan/30", glow: "neon-box-cyan", link: "neon-cyan" },
  { border: "border-neon-magenta/30", glow: "neon-box-magenta", link: "neon-magenta" },
  { border: "border-neon-purple/30", glow: "neon-box-purple", link: "neon-purple" },
  { border: "border-neon-gold/30", glow: "neon-box-purple", link: "neon-gold" },
  { border: "border-neon-cyan/30", glow: "neon-box-cyan", link: "neon-cyan" },
];

function ProductCard({ product, index }: { product: Product; index: number }) {
  const acc = accentColors[index % accentColors.length];
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.08 }}
      className={`group isometric p-8 bg-card border ${acc.border} ${acc.glow}
        hover:translate-y-[-4px] hover:scale-[1.02] transition-all duration-300`}
    >
      {/* Subtitle */}
      <p className="font-[family-name:var(--font-vt323)] text-base text-text-muted mb-2 tracking-wide">
        &gt; {product.subtitle}
      </p>

      {/* Name */}
      <h3 className="font-[family-name:var(--font-press-start)] text-sm tracking-wider
        text-text-primary mb-4">
        {product.name}
      </h3>

      {/* Description */}
      <p className="text-sm text-text-secondary leading-relaxed mb-5">
        {product.description}
      </p>

      {/* Highlights — pixel tag style */}
      <div className="flex flex-wrap gap-2 mb-6">
        {product.highlights.map((h) => (
          <span key={h}
            className="text-[10px] px-2 py-1 bg-surface border border-border/40
              text-text-secondary font-[family-name:var(--font-vt323)] tracking-wider">
            {h}
          </span>
        ))}
      </div>

      {/* Link */}
      <Link
        href={product.href}
        className={`inline-flex items-center gap-1.5 text-xs font-[family-name:var(--font-press-start)]
          tracking-wider ${acc.link} hover:drop-shadow-[0_0_8px_currentColor] transition-all duration-200`}
      >
        [了解详情]
        <ArrowRight size={12} />
      </Link>
    </motion.div>
  );
}

export default function ProductSection() {
  return (
    <section id="products" className="py-24 bg-deep relative">
      {/* Background */}
      <div className="absolute inset-0 bg-pixel-grid opacity-50" />

      <div className="relative max-w-[1200px] mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="text-center mb-14"
        >
          <p className="font-[family-name:var(--font-vt323)] text-lg text-neon-cyan mb-3 tracking-widest">
            &gt; PRODUCTS_
          </p>
          <h2 className="font-[family-name:var(--font-press-start)] text-2xl tracking-wider
            neon-purple mb-4">
            产品与服务
          </h2>
          <p className="text-text-secondary max-w-[480px] mx-auto text-sm">
            <span className="text-neon-cyan">▸</span>{" "}
            覆盖边缘算力、分布式存储、AI 知识库和企业云盘的全栈产品矩阵
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
