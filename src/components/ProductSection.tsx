"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { products, type Product } from "@/data/products";
import SpotlightCard from "./SpotlightCard";

const accentColors = [
  "text-accent border-accent/20",
  "text-warning border-warning/20",
  "text-syntax-function border-syntax-function/20",
  "text-success border-success/20",
  "text-accent border-accent/20",
];

function ProductCard({ product, index }: { product: Product; index: number }) {
  const accent = accentColors[index % accentColors.length];
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.06 }}
      className="group p-5 border border-border-default rounded-lg bg-bg-base
        hover:border-border-accent/20 hover:shadow-[0_0_20px_rgba(0,122,204,0.06)]
        transition-all duration-300"
    >
      <SpotlightCard className="rounded-lg -m-5 p-5">
      {/* File name — IDE tab style */}
      <div className="flex items-center gap-2 mb-3">
        <span className="text-[10px] text-text-muted font-mono">
          📄 {product.id}.tsx
        </span>
      </div>

      {/* Headline */}
      <p className={`font-mono text-[11px] ${accent} mb-2`}>
        {product.subtitle}
      </p>
      <h3 className="font-mono text-[14px] font-bold text-text-primary mb-3">
        {product.name}
      </h3>
      <p className="text-[12px] text-text-secondary font-mono leading-relaxed mb-4">
        <span className="text-syntax-comment">/** </span>
        {product.description}
        <span className="text-syntax-comment"> */</span>
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mb-5">
        {product.highlights.map((h) => (
          <span key={h} className="text-[10px] px-2 py-0.5 bg-bg-overlay border border-border-muted
            rounded-md text-text-muted font-mono">
            {h}
          </span>
        ))}
      </div>

      <Link
        href={product.href}
        className={`inline-flex items-center gap-1.5 text-[11px] font-mono font-semibold
          ${accent} hover:underline transition-all`}
      >
        open {product.id}.tsx
        <ArrowRight size={12} />
      </Link>
      </SpotlightCard>
    </motion.div>
  );
}

export default function ProductSection() {
  return (
    <section id="products" className="py-20 bg-bg-base relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <p className="ide-section-label">
            {/* src/app/products/[id]/page.tsx */}
          </p>
          <h2 className="ide-section-title">
            产品与服务
          </h2>
          <p className="text-[13px] text-text-secondary font-mono">
            <span className="text-syntax-comment">// </span>
            Full-stack product matrix: edge compute, storage, AI knowledge base, enterprise drive
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
