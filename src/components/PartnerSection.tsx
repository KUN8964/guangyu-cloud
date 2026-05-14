"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const partners = [
  { name: "中国联通", logo: "联通" },
  { name: "阿里云", logo: "阿里云" },
  { name: "华为云", logo: "华为" },
  { name: "百度智能云", logo: "百度" },
  { name: "腾讯云", logo: "腾讯" },
  { name: "浪潮", logo: "浪潮" },
];

export default function PartnerSection() {
  return (
    <section id="partners" className="py-24 bg-deep relative">
      <div className="absolute inset-0 bg-pixel-grid opacity-50" />

      <div className="relative max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="text-center mb-4"
        >
          <p className="font-[family-name:var(--font-vt323)] text-lg text-neon-gold mb-3 tracking-widest">
            &gt; PARTNERS_
          </p>
          <h2 className="font-[family-name:var(--font-press-start)] text-2xl tracking-wider
            neon-magenta mb-4">
            合作伙伴
          </h2>
          <p className="text-text-secondary max-w-[520px] mx-auto mb-14 text-sm">
            <span className="text-neon-cyan">▸</span>{" "}
            携手多家行业伙伴，共建分布式存算一体产业生态，赋能千行百业数字化转型
          </p>
        </motion.div>

        {/* Logo grid — pixel style */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 mb-14">
          {partners.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.06 }}
              className="flex items-center justify-center h-20 bg-card border border-border/30
                hover:border-neon-cyan/40 hover:shadow-[0_0_15px_rgba(0,240,255,0.1)]
                transition-all duration-300 group"
            >
              <span className="font-[family-name:var(--font-press-start)] text-xs
                text-text-muted group-hover:text-neon-cyan tracking-wider
                transition-colors duration-300">
                [{p.logo}]
              </span>
            </motion.div>
          ))}
        </div>

        {/* Cooperation modes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "技术合作", desc: "联合研发与代码贡献", color: "neon-cyan" },
            { title: "渠道代理", desc: "产品分销与市场拓展", color: "neon-magenta" },
            { title: "解决方案", desc: "行业方案联合交付", color: "neon-purple" },
            { title: "生态共建", desc: "开放平台与标准制定", color: "neon-gold" },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.08 }}
              className={`isometric p-6 bg-card border border-${item.color}/20
                hover:border-${item.color}/40 hover:shadow-[0_0_15px_var(--color-${item.color})/0.1]
                text-center transition-all duration-300`}
            >
              <span className={`font-[family-name:var(--font-vt323)] text-lg text-${item.color}
                tracking-widest block mb-3`}>
                &gt; {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-[family-name:var(--font-press-start)] text-xs tracking-wider
                text-text-primary mb-3">
                {item.title}
              </h3>
              <p className="text-sm text-text-secondary">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link
            href="/partners"
            className="inline-flex items-center gap-1.5 text-xs
              font-[family-name:var(--font-press-start)] tracking-wider
              neon-cyan hover:drop-shadow-[0_0_10px_#00F0FF] transition-all duration-200"
          >
            [了解更多合作模式]
            <ArrowRight size={12} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
