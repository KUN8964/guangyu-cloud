"use client";

import { motion } from "framer-motion";
import { Shield, Fingerprint, PiggyBank, Zap } from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "更安全",
    desc: "抗单点风险，降低攻击与故障影响",
    borderColor: "pixel-border-cyan",
    glowClass: "neon-box-cyan",
    iconColor: "text-neon-cyan",
    bgColor: "bg-neon-cyan/10",
  },
  {
    icon: Fingerprint,
    title: "更可信",
    desc: "数据不可篡改，信任基于规则而非单一机构",
    borderColor: "pixel-border-magenta",
    glowClass: "neon-box-magenta",
    iconColor: "text-neon-magenta",
    bgColor: "bg-neon-magenta/10",
  },
  {
    icon: PiggyBank,
    title: "更经济",
    desc: "降低硬件投入与运维成本，优化资源利用率",
    borderColor: "pixel-border-gold",
    glowClass: "neon-box-purple",
    iconColor: "text-neon-gold",
    bgColor: "bg-neon-gold/10",
  },
  {
    icon: Zap,
    title: "更高效",
    desc: "提高响应速度、并行处理能力与资源利用率",
    borderColor: "pixel-border-purple",
    glowClass: "neon-box-purple",
    iconColor: "text-neon-purple",
    bgColor: "bg-neon-purple/10",
  },
];

export default function ValueCards() {
  return (
    <section className="py-20 bg-void relative">
      {/* Subtle bg grid */}
      <div className="absolute inset-0 bg-pixel-grid-large opacity-30" />

      <div className="relative max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.08 }}
              className={`group isometric p-8 bg-card ${v.borderColor} ${v.glowClass}
                cursor-default`}
            >
              {/* Icon */}
              <div className={`w-12 h-12 flex items-center justify-center mb-5 ${v.bgColor} border border-current/20`}>
                <v.icon size={22} className={v.iconColor} />
              </div>

              {/* Title */}
              <h3 className="font-[family-name:var(--font-press-start)] text-xs tracking-wider
                text-text-primary mb-3">
                {v.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-text-secondary leading-relaxed">
                {v.desc}
              </p>

              {/* Pixel corner accents */}
              <div className={`absolute top-0 right-0 w-3 h-3 ${v.iconColor.replace("text", "bg")}/30`} />
              <div className={`absolute bottom-0 left-0 w-3 h-3 ${v.iconColor.replace("text", "bg")}/30`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
