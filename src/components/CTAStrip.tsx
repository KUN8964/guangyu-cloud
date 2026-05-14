"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Zap } from "lucide-react";

export default function CTAStrip() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Synthwave sun background */}
      <div className="absolute inset-0 bg-abyss">
        {/* Neon grid ground */}
        <div className="absolute inset-0 bg-pixel-grid opacity-60" />
        {/* Sunset gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-1/2"
          style={{
            background: "linear-gradient(to top, #FF2D95 0%, #B44CFF 30%, transparent 100%)",
            opacity: 0.15,
          }} />
        {/* Neon sun */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2
          w-[600px] h-[300px] rounded-t-full opacity-20"
          style={{
            background: "linear-gradient(to top, #FFD700, #FF2D95, transparent)",
            filter: "blur(40px)",
          }} />

        {/* Horizon line */}
        <div className="absolute bottom-[140px] left-0 right-0 h-[2px] section-divider" />
      </div>

      <div className="relative max-w-[1200px] mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
        >
          <Zap size={32} className="mx-auto mb-6 text-neon-gold
            drop-shadow-[0_0_12px_rgba(255,215,0,0.6)]" />

          <h2 className="font-[family-name:var(--font-press-start)] text-2xl tracking-wider
            neon-cyan mb-6">
            立即体验分布式算力
          </h2>

          <p className="text-text-secondary mb-10 max-w-[480px] mx-auto text-sm">
            <span className="neon-gold">▸</span>{" "}
            注册即可获得免费试用额度，无需信用卡
            <br />
            <span className="text-text-muted text-xs mt-2 block">
              加入 1000+ 边缘节点网络
            </span>
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
  );
}
