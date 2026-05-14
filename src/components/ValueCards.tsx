"use client";

import { motion } from "framer-motion";
import { Shield, Fingerprint, PiggyBank, Zap } from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "更安全",
    desc: "抗单点风险，降低攻击与故障影响",
    color: "#2D5BFF",
  },
  {
    icon: Fingerprint,
    title: "更可信",
    desc: "数据不可篡改，信任基于规则而非单一机构",
    color: "#10B981",
  },
  {
    icon: PiggyBank,
    title: "更经济",
    desc: "降低硬件投入与运维成本，优化资源利用率",
    color: "#F59E0B",
  },
  {
    icon: Zap,
    title: "更高效",
    desc: "提高响应速度、并行处理能力与资源利用率",
    color: "#8B5CF6",
  },
];

export default function ValueCards() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.08 }}
              className="group p-8 rounded-xl border border-black/5 bg-white hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-200"
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                style={{ backgroundColor: `${v.color}10` }}
              >
                <v.icon size={20} style={{ color: v.color }} />
              </div>
              <h3 className="text-lg font-semibold text-[#1A1A2E] mb-2">
                {v.title}
              </h3>
              <p className="text-sm text-[#4A4A5E] leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
