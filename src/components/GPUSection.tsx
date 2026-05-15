"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Cpu, MemoryStick, HardDrive, ArrowRight } from "lucide-react";
import { gpuConfigs, type GPUConfig } from "@/data/gpu";

function GPUCard({ gpu, index }: { gpu: GPUConfig; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.06 }}
      className="p-5 border border-border-default rounded-lg bg-bg-base
        hover:border-accent/20 transition-all duration-300"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="font-mono text-[14px] font-bold text-accent">
            {gpu.name}
          </h3>
          <p className="font-mono text-2xl text-text-primary font-bold mt-1.5">
            {gpu.tflops.toLocaleString()}{" "}
            <span className="text-[12px] text-text-muted font-normal">TFLOPS</span>
          </p>
        </div>
        {gpu.available ? (
          <span className="text-[10px] px-2 py-0.5 bg-success-bg border border-success/20
            text-success font-mono rounded-md">
            ● available
          </span>
        ) : (
          <span className="text-[10px] px-2 py-0.5 bg-warning-bg border border-warning/20
            text-warning font-mono rounded-md">
            ◌ coming soon
          </span>
        )}
      </div>

      {/* Terminal specs */}
      <div className="space-y-2 mb-5 p-3 bg-bg-overlay border border-border-muted rounded-md font-mono">
        <div className="flex items-center gap-2 text-[11px]">
          <Cpu size={12} className="text-text-muted shrink-0" />
          <span className="text-text-muted">$ cpu:</span>
          <span className="text-text-secondary truncate">{gpu.cpu}</span>
        </div>
        <div className="flex items-center gap-2 text-[11px]">
          <MemoryStick size={12} className="text-text-muted shrink-0" />
          <span className="text-text-muted">$ ram:</span>
          <span className="text-text-secondary truncate">{gpu.memory}</span>
        </div>
        <div className="flex items-center gap-2 text-[11px]">
          <HardDrive size={12} className="text-text-muted shrink-0" />
          <span className="text-text-muted">$ ssd:</span>
          <span className="text-text-secondary truncate">{gpu.storage}</span>
        </div>
      </div>

      <Link
        href="#"
        className={`inline-flex w-full justify-center py-2.5 text-[11px] font-mono font-bold
          rounded-md transition-all ${
            gpu.available
              ? "btn-primary"
              : "bg-bg-overlay text-text-muted cursor-not-allowed border border-border-default"
          }`}
      >
        {gpu.available ? "$ deploy --gpu" : "// coming soon"}
      </Link>
    </motion.div>
  );
}

export default function GPUSection() {
  const previewGpus = gpuConfigs.slice(0, 4);
  return (
    <section id="gpu" className="py-20 bg-bg-base relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="ide-section-label">
            {/* src/config/gpu.config.ts */}
          </p>
          <h2 className="ide-section-title">
            interface GPUConfig
          </h2>
          <p className="text-[13px] text-text-secondary font-mono max-w-[480px] mx-auto">
            <span className="text-syntax-comment">// </span>
            NVIDIA / Ascend GPU fleet for model training & high-concurrency inference
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {previewGpus.map((g, i) => (
            <GPUCard key={g.id} gpu={g} index={i} />
          ))}
        </div>

        {/* View all link */}
        <div className="text-center mt-8">
          <Link
            href="/compute"
            className="inline-flex items-center gap-1.5 text-[11px] font-mono
              text-text-link hover:underline transition-all"
          >
            view all 8 GPU configurations
            <ArrowRight size={12} />
          </Link>
        </div>
      </div>
    </section>
  );
}
