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
      className="group p-6 rounded-xl border border-black/5 bg-white hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-200"
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-xl font-bold text-[#1A1A2E]">{gpu.name}</h3>
          <p className="text-2xl font-bold text-[#2D5BFF] mt-1">
            {gpu.tflops.toLocaleString()}{" "}
            <span className="text-sm font-normal text-[#8E8E9A]">TFLOPS</span>
          </p>
        </div>
        {gpu.available ? (
          <span className="text-xs px-2 py-1 rounded-full bg-[#10B981]/10 text-[#10B981] font-medium">
            可预约
          </span>
        ) : (
          <span className="text-xs px-2 py-1 rounded-full bg-[#F59E0B]/10 text-[#F59E0B] font-medium">
            即将上线
          </span>
        )}
      </div>

      <div className="space-y-2 mb-5 text-sm text-[#4A4A5E]">
        <div className="flex items-center gap-2">
          <Cpu size={14} className="text-[#8E8E9A] shrink-0" />
          <span className="truncate">{gpu.cpu}</span>
        </div>
        <div className="flex items-center gap-2">
          <MemoryStick size={14} className="text-[#8E8E9A] shrink-0" />
          <span className="truncate">{gpu.memory}</span>
        </div>
        <div className="flex items-center gap-2">
          <HardDrive size={14} className="text-[#8E8E9A] shrink-0" />
          <span className="truncate">{gpu.storage}</span>
        </div>
      </div>

      <Link
        href="#"
        className={`inline-flex w-full justify-center py-2.5 rounded-md text-sm font-medium transition-all duration-150 ${
          gpu.available
            ? "bg-[#2D5BFF] text-white hover:bg-[#1E40D8] active:scale-[0.98]"
            : "bg-[#F6F6F6] text-[#8E8E9A] cursor-not-allowed"
        }`}
      >
        {gpu.available ? "立即预约" : "敬请期待"}
      </Link>
    </motion.div>
  );
}

export default function GPUSection() {
  return (
    <section id="gpu" className="py-20 bg-[#F6F6F6]">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="text-center mb-12"
        >
          <h2 className="text-[28px] font-semibold text-[#1A1A2E] mb-4">
            算力集群
          </h2>
          <p className="text-[#4A4A5E] max-w-[480px] mx-auto">
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
