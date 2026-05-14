"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[600px] pt-32 pb-20 flex items-center overflow-hidden">
      {/* Background: subtle grid + radial glow */}
      <div className="absolute inset-0 bg-[#F8FAFB]">
        {/* SVG grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(45,91,255,0.3) 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
        {/* Radial glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(45,91,255,0.06) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative max-w-[1200px] mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="max-w-[640px]"
        >
          <h1 className="text-[56px] leading-[1.1] font-bold text-[#1A1A2E] tracking-tight mb-6">
            企业级云存储
            <br />
            解决方案
          </h1>
          <p className="text-lg text-[#4A4A5E] leading-relaxed mb-10">
            安全可靠的数据存储服务，助力企业数字化转型。
            <br />
            基于大规模分布式节点架构，提供高安全、高可用、低成本的存算一体服务。
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/register"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#2D5BFF] text-white font-medium rounded-lg hover:bg-[#1E40D8] active:scale-[0.98] transition-all duration-200"
            >
              立即体验
              <ArrowRight size={18} />
            </Link>
            <Link
              href="#products"
              className="inline-flex items-center gap-2 px-8 py-3.5 border border-black/10 text-[#1A1A2E] font-medium rounded-lg hover:bg-[#F6F6F6] active:scale-[0.98] transition-all duration-200"
            >
              了解更多
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
