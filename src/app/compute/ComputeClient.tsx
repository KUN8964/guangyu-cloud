"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Cpu, MemoryStick, HardDrive, Zap, ArrowLeft } from "lucide-react";
import { gpuConfigs, gpuUseCases } from "@/data/gpu";

export default function ComputeClient() {
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
              href="/"
              className="inline-flex items-center gap-1.5 text-[11px] text-text-muted
                hover:text-text-link font-mono transition-colors"
            >
              <ArrowLeft size={12} />
              cd /
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p className="font-mono text-[11px] text-accent mb-2">
              📄 src/compute/gpu.config.ts
            </p>
            <h1 className="font-mono text-[26px] font-bold text-text-primary mb-3">
              算力集群
            </h1>
            <p className="text-[13px] text-text-secondary font-mono max-w-[560px]">
              <span className="text-syntax-comment">// </span>
              GPU 算力解析 · FP16 精度模型性能对比
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══ GPU LIST ═══ */}
      <section className="py-16 bg-bg-overlay">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-10">
            <p className="ide-section-label">interface GPUConfig[]</p>
            <h2 className="ide-section-title">生态合作资源对比</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {gpuConfigs.map((gpu, i) => (
              <motion.div
                key={gpu.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                className="p-5 border border-border-default rounded-lg bg-bg-base
                  hover:border-accent/20 transition-all duration-300"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-mono text-[14px] font-bold text-accent">
                      {gpu.name}
                    </h3>
                    <p className="font-mono text-xl text-text-primary font-bold mt-1">
                      {gpu.tflops.toLocaleString()}{" "}
                      <span className="text-[11px] text-text-muted font-normal">
                        TFLOPS
                      </span>
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

                {/* Specs */}
                <div className="space-y-2 mb-5 p-3 bg-bg-overlay border border-border-muted rounded-md font-mono">
                  <div className="flex items-start gap-2 text-[10px]">
                    <Cpu size={11} className="text-text-muted shrink-0 mt-0.5" />
                    <span className="text-text-muted shrink-0">$ cpu:</span>
                    <span className="text-text-secondary break-all">{gpu.cpu}</span>
                  </div>
                  <div className="flex items-start gap-2 text-[10px]">
                    <Zap size={11} className="text-text-muted shrink-0 mt-0.5" />
                    <span className="text-text-muted shrink-0">$ gpu:</span>
                    <span className="text-text-secondary break-all">{gpu.gpu}</span>
                  </div>
                  <div className="flex items-start gap-2 text-[10px]">
                    <MemoryStick size={11} className="text-text-muted shrink-0 mt-0.5" />
                    <span className="text-text-muted shrink-0">$ ram:</span>
                    <span className="text-text-secondary break-all">{gpu.memory}</span>
                  </div>
                  <div className="flex items-start gap-2 text-[10px]">
                    <HardDrive size={11} className="text-text-muted shrink-0 mt-0.5" />
                    <span className="text-text-muted shrink-0">$ ssd:</span>
                    <span className="text-text-secondary break-all">{gpu.storage}</span>
                  </div>
                </div>

                <Link
                  href="/register"
                  className={`inline-flex w-full justify-center py-2.5 text-[11px] font-mono font-bold
                    rounded-md transition-all ${
                      gpu.available
                        ? "btn-primary"
                        : "bg-bg-overlay text-text-muted cursor-not-allowed border border-border-default"
                    }`}
                >
                  {gpu.available ? "立即预约" : "// coming soon"}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ USE CASES ═══ */}
      <section className="py-16 bg-bg-base">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-10">
            <p className="ide-section-label">enum UseCase</p>
            <h2 className="ide-section-title">典型应用场景</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {gpuUseCases.map((uc, i) => (
              <motion.div
                key={uc.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.2, delay: i * 0.06 }}
                className="p-5 border border-border-default rounded-lg bg-bg-overlay
                  hover:border-accent/20 transition-all duration-300"
              >
                <p className="font-mono text-[13px] font-bold text-accent mb-2">
                  &gt; {uc.title}
                </p>
                <p className="text-[12px] text-text-secondary font-mono leading-relaxed">
                  <span className="text-syntax-comment">// </span>
                  {uc.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="py-16 bg-bg-overlay text-center">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 mb-5 px-4 py-2
              border border-border-default rounded-md bg-bg-base">
              <span className="w-2 h-2 rounded-full bg-success" />
              <span className="text-[11px] text-text-muted font-mono">
                $ ssh gpu-cluster --status
              </span>
            </div>

            <h2 className="font-mono text-xl font-bold text-text-primary mb-3">
              立即体验我们的云服务
            </h2>
            <p className="text-[12px] text-text-secondary font-mono mb-6">
              <span className="text-syntax-comment"># </span>
              注册即可获得免费试用额度，无需信用卡
            </p>

            <Link href="/register" className="btn-primary text-[12px] !py-2.5 !px-8">
              免费试用
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
