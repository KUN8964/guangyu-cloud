"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { products, type Product } from "@/data/products";

function ProductCard({ product, index }: { product: Product; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.08 }}
      className="group p-8 rounded-xl border border-black/5 bg-white hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-200"
    >
      <p className="text-xs text-[#8E8E9A] mb-2">{product.subtitle}</p>
      <h3 className="text-xl font-semibold text-[#1A1A2E] mb-3">
        {product.name}
      </h3>
      <p className="text-sm text-[#4A4A5E] leading-relaxed mb-4">
        {product.description}
      </p>
      <div className="flex flex-wrap gap-2 mb-5">
        {product.highlights.map((h) => (
          <span
            key={h}
            className="text-xs px-2.5 py-1 rounded-full bg-[#F6F6F6] text-[#4A4A5E]"
          >
            {h}
          </span>
        ))}
      </div>
      <Link
        href={product.href}
        className="inline-flex items-center gap-1.5 text-sm font-medium text-[#2D5BFF] hover:text-[#1E40D8] transition-colors duration-150"
      >
        了解详情
        <ArrowRight size={14} />
      </Link>
    </motion.div>
  );
}

export default function ProductSection() {
  return (
    <section id="products" className="py-20 bg-[#F6F6F6]">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="text-center mb-12"
        >
          <h2 className="text-[28px] font-semibold text-[#1A1A2E] mb-4">
            产品与服务
          </h2>
          <p className="text-[#4A4A5E] max-w-[480px] mx-auto">
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
