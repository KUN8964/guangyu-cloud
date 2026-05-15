"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, BookOpen, Headphones, Calculator, ChevronRight } from "lucide-react";

const supportItems = [
  {
    icon: BookOpen,
    title: "开发文档",
    desc: "产品 API 文档、SDK 指南、最佳实践",
    href: "#",
    color: "text-accent",
  },
  {
    icon: Headphones,
    title: "技术支持",
    desc: "7×24 小时工单支持，专属技术经理",
    href: "#",
    color: "text-success",
  },
  {
    icon: Calculator,
    title: "价格计算器",
    desc: "按需估算成本，灵活配置方案",
    href: "#",
    color: "text-syntax-function",
  },
];

const pricingTiers = [
  { name: "免费试用", price: "¥0", period: "/月", desc: "注册即获免费额度", features: ["5GB 存储空间", "基础 API 调用", "社区支持"], cta: "立即注册", href: "/register", highlight: false },
  { name: "标准版", price: "¥299", period: "/月起", desc: "适合中小团队", features: ["100GB 存储空间", "10 万次 API 调用", "标准技术支持", "3 个边缘节点"], cta: "立即咨询", href: "#", highlight: false },
  { name: "企业版", price: "定制", period: "", desc: "适合大型企业", features: ["无限存储空间", "无限 API 调用", "专属技术经理", "SLA 99.99%", "私有化部署可选"], cta: "联系我们", href: "#", highlight: true },
];

export default function SupportClient() {
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
              📄 src/support/index.tsx
            </p>
            <h1 className="font-mono text-[26px] font-bold text-text-primary mb-3">
              服务支持与定价
            </h1>
            <p className="text-[13px] text-text-secondary font-mono max-w-[520px]">
              <span className="text-syntax-comment">// </span>
              从文档到技术支持，助您快速上手光宇云服务
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══ SUPPORT ITEMS ═══ */}
      <section className="py-16 bg-bg-overlay">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {supportItems.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.2, delay: i * 0.06 }}
                  className="group p-6 border border-border-default rounded-lg bg-bg-base
                    hover:border-accent/20 transition-all duration-300"
                >
                  <Icon size={20} className={`${item.color} mb-4`} />
                  <h3 className="font-mono text-[14px] font-bold text-text-primary mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[12px] text-text-secondary font-mono leading-relaxed mb-4">
                    {item.desc}
                  </p>
                  <span className="inline-flex items-center gap-1 text-[11px] font-mono
                    text-text-link group-hover:underline">
                    查看详情
                    <ChevronRight size={12} />
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ PRICING ═══ */}
      <section className="py-16 bg-bg-base">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-10 text-center">
            <p className="ide-section-label">type PricingTier</p>
            <h2 className="ide-section-title">定价方案</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-[900px] mx-auto">
            {pricingTiers.map((tier, i) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.08 }}
                className={`p-6 border rounded-lg transition-all duration-300 ${
                  tier.highlight
                    ? "border-accent/40 bg-accent/3 shadow-[0_0_20px_rgba(0,122,204,0.06)]"
                    : "border-border-default bg-bg-overlay hover:border-accent/20"
                }`}
              >
                <h3 className="font-mono text-[14px] font-bold text-text-primary mb-1">
                  {tier.name}
                </h3>
                <div className="mb-4">
                  <span className="font-mono text-2xl font-bold text-text-primary">
                    {tier.price}
                  </span>
                  <span className="text-[11px] text-text-muted font-mono ml-1">
                    {tier.period}
                  </span>
                </div>
                <p className="text-[11px] text-text-secondary font-mono mb-4">
                  {tier.desc}
                </p>
                <ul className="space-y-2 mb-6">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-[11px] text-text-muted font-mono">
                      <span className="w-1 h-1 rounded-full bg-success shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href={tier.href}
                  className={`block text-center py-2.5 text-[11px] font-mono font-bold rounded-md transition-all ${
                    tier.highlight
                      ? "btn-primary"
                      : "border border-border-default text-text-secondary hover:bg-bg-base"
                  }`}
                >
                  {tier.cta}
                </Link>
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
