"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Cpu, MemoryStick, HardDrive } from "lucide-react";
import { gpuConfigs, type GPUConfig } from "@/data/gpu";

function GPUCard({ gpu, index }: { gpu: GPUConfig; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.08 }}
      className="group p-6 bg-card border border-border/40
        hover:border-neon-cyan/40 hover:shadow-[0_0_20px_rgba(0,240,255,0.1)]
        transition-all duration-300"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-5">
        <div>
          <h3 className="font-[family-name:var(--font-press-start)] text-sm tracking-wider
            text-neon-cyan">
            {gpu.name}
          </h3>
          <p className="font-[family-name:var(--font-vt323)] text-3xl neon-gold mt-2">
            {gpu.tflops.toLocaleString()}{" "}
            <span className="text-base text-text-muted">TFLOPS</span>
          </p>
        </div>
        {gpu.available ? (
          <span className="text-[10px] px-3 py-1 bg-neon-green/10 border border-neon-green/30
            text-neon-green font-[family-name:var(--font-press-start)] tracking-wider">
            ● 可预约
          </span>
        ) : (
          <span className="text-[10px] px-3 py-1 bg-neon-gold/10 border border-neon-gold/30
            text-neon-gold font-[family-name:var(--font-press-start)] tracking-wider">
            ◌ 即将上线
          </span>
        )}
      </div>

      {/* Specs — terminal style */}
      <div className="space-y-2.5 mb-6 p-4 bg-abyss/50 border border-border/20">
        <div className="flex items-center gap-2 text-xs">
          <Cpu size={13} className="text-neon-cyan/60 shrink-0" />
          <span className="text-text-muted font-[family-name:var(--font-vt323)]">CPU:</span>
          <span className="text-text-secondary font-[family-name:var(--font-vt323)] truncate text-xs">
            {gpu.cpu}
          </span>
        </div>
        <div className="flex items-center gap-2 text-xs">
          <MemoryStick size={13} className="text-neon-purple/60 shrink-0" />
          <span className="text-text-muted font-[family-name:var(--font-vt323)]">RAM:</span>
          <span className="text-text-secondary font-[family-name:var(--font-vt323)] truncate text-xs">
            {gpu.memory}
          </span>
        </div>
        <div className="flex items-center gap-2 text-xs">
          <HardDrive size={13} className="text-neon-gold/60 shrink-0" />
          <span className="text-text-muted font-[family-name:var(--font-vt323)]">SSD:</span>
          <span className="text-text-secondary font-[family-name:var(--font-vt323)] truncate text-xs">
            {gpu.storage}
          </span>
        </div>
      </div>

      {/* Action */}
      <Link
        href="#"
        className={`pixel-btn inline-flex w-full justify-center py-3 text-xs font-bold
          font-[family-name:var(--font-press-start)] tracking-wider transition-all duration-200 ${
            gpu.available
              ? "bg-neon-cyan text-abyss hover:shadow-[0_0_25px_rgba(0,240,255,0.5)]"
              : "bg-surface text-text-muted cursor-not-allowed"
          }`}
      >
        {gpu.available ? "▶ 立即预约" : "⌛ 敬请期待"}
      </Link>
    </motion.div>
  );
}

export default function GPUSection() {
  return (
    <section id="gpu" className="py-24 bg-void relative">
      <div className="absolute inset-0 bg-pixel-grid-large opacity-30" />

      <div className="relative max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="text-center mb-14"
        >
          <p className="font-[family-name:var(--font-vt323)] text-lg text-neon-magenta mb-3 tracking-widest">
            &gt; GPU_CLUSTER_
          </p>
          <h2 className="font-[family-name:var(--font-press-start)] text-2xl tracking-wider
            neon-cyan mb-4">
            算力集群
          </h2>
          <p className="text-text-secondary max-w-[480px] mx-auto text-sm">
            <span className="text-neon-purple">▸</span>{" "}
            NVIDIA / 昇腾多型号 GPU，满足大模型训练与高并发推理需求
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {gpuConfigs.map((g, i) => (
            <GPUCard key={g.id} gpu={g} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
