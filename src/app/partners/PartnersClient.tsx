"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const partners = [
  { name: "China Unicom", desc: "5G + Edge Computing integrated solutions" },
  { name: "Alibaba Cloud", desc: "Hybrid cloud & cloud-native deep collaboration" },
  { name: "Huawei Cloud", desc: "Ascend AI compute ecosystem strategic partner" },
  { name: "Baidu AI Cloud", desc: "AI LLM inference & knowledge base co-development" },
  { name: "Tencent Cloud", desc: "Audio/video & real-time communication ecosystem" },
  { name: "Inspur", desc: "Server hardware & data center co-delivery" },
  { name: "China Telecom", desc: "e-Surfing Cloud + edge node network" },
  { name: "iFLYTEK", desc: "Voice AI & NLP model adaptation" },
  { name: "Hikvision", desc: "Intelligent vision & edge inference solutions" },
  { name: "Zhejiang Univ.", desc: "Distributed systems & AI algorithms research" },
  { name: "H3C", desc: "Network infrastructure & security compliance" },
  { name: "Yonyou", desc: "Enterprise ERP & distributed storage integration" },
];

const coopModes = [
  {
    title: "核心技术",
    desc: "聚焦分布式存算核心技术领域，汇聚深度产品研发、技术适配与集成实施的核心伙伴，共同打造行业领先的技术解决方案。",
    tags: ["R&D", "技术适配", "集成实施", "标准共建"],
  },
  {
    title: "云服务与渠道代理商",
    desc: "覆盖云服务代理、软件分销、渠道拓展等全链路合作，依托双方渠道资源，实现产品全国化覆盖与高效交付。",
    tags: ["云代理", "分销", "渠道拓展", "全国覆盖"],
  },
  {
    title: "基础设施与公共事业",
    desc: "联合硬件代理、弱电工程、政府及公共事业等机构，共建基础设施服务与行业解决方案，拓展政企及公共领域合作版图。",
    tags: ["硬件代理", "弱电工程", "政企合作", "公共事业"],
  },
  {
    title: "企业软件与方案服务商",
    desc: "整合 ERP、OA、CRM、财务、低代码等企业级软件服务商，通过方案集成与联合实施，助力企业全场景数字化转型。",
    tags: ["ERP/OA", "CRM", "低代码", "方案集成"],
  },
];

export default function PartnersClient() {
  return (
    <div className="min-h-screen">
      {/* ═══ HERO ═══ */}
      <section className="relative pt-20 pb-16 bg-bg-base">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p className="font-mono text-[11px] text-accent mb-2">
              📄 src/config/partners.config.ts
            </p>
            <h1 className="font-mono text-[26px] font-bold text-text-primary mb-3 tracking-tight">
              开放合作 · 共赢未来 · 生态赋能
            </h1>
            <p className="text-[13px] text-text-secondary font-mono max-w-[520px] mx-auto mb-2">
              <span className="text-syntax-comment">// </span>
              携手多家行业伙伴，共建分布式存算一体产业生态，赋能千行百业数字化转型
            </p>
            <p className="text-[11px] text-text-muted font-mono mb-8">
              Telecom · Cloud · AI · Hardware · Academia
            </p>

            <Link href="/register" className="btn-primary text-[12px]">
              $ join --as-partner
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ═══ PARTNER GRID ═══ */}
      <section className="py-16 bg-bg-overlay">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-10">
            <p className="ide-section-label">const partners: Partner[]</p>
            <h2 className="ide-section-title">合作伙伴</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
            {partners.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.2, delay: i * 0.03 }}
                className="p-4 border border-border-default rounded-lg bg-bg-base
                  hover:border-accent/20 transition-all duration-300 group"
              >
                <div className="flex items-center justify-center py-3 mb-3
                  border border-border-muted rounded-md bg-bg-overlay
                  group-hover:border-accent/20 transition-colors">
                  <span className="font-mono text-[13px] text-text-muted group-hover:text-text-primary
                    transition-colors font-bold">
                    {p.name}
                  </span>
                </div>
                <p className="text-[10px] text-text-muted font-mono leading-relaxed">
                  <span className="text-syntax-comment">// </span>
                  {p.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ COOPERATION MODES ═══ */}
      <section className="py-16 bg-bg-base">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-10 text-center">
            <p className="ide-section-label">enum CooperationMode</p>
            <h2 className="ide-section-title">合作模式</h2>
            <p className="text-[12px] text-text-secondary font-mono">
              <span className="text-syntax-comment">// </span>
              Four flexible modes for partners at any stage
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {coopModes.map((mode, i) => (
              <motion.div
                key={mode.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.2, delay: i * 0.06 }}
                className="p-5 border border-border-default rounded-lg bg-bg-overlay
                  hover:border-accent/20 transition-all duration-300"
              >
                <h3 className="font-mono text-[13px] font-bold text-accent mb-2">
                  {mode.title}
                </h3>
                <p className="text-[12px] text-text-secondary font-mono leading-relaxed mb-3">
                  {mode.desc}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {mode.tags.map((t) => (
                    <span key={t} className="text-[10px] px-1.5 py-0.5 bg-bg-base
                      border border-border-muted rounded-md text-text-muted font-mono">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ JOIN BENEFITS ═══ */}
      <section className="py-16 bg-bg-overlay">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-10 text-center">
            <p className="ide-section-label">interface PartnerBenefits</p>
            <h2 className="ide-section-title">合作权益</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { num: "01", title: "技术支持", desc: "获取前沿分布式存算技术，优先研发接入" },
              { num: "02", title: "商业收益", desc: "阶梯佣金 + 联合营销，共享客户资源" },
              { num: "03", title: "品牌赋能", desc: "官网展示 + 联合活动 + 行业白皮书" },
              { num: "04", title: "生态网络", desc: "1000+ 边缘节点网络效应 + 联盟资源" },
            ].map((item, i) => (
              <motion.div
                key={item.num}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.2, delay: i * 0.04 }}
                className="p-5 border border-border-default rounded-lg bg-bg-base text-center
                  hover:border-accent/20 transition-all duration-300"
              >
                <span className="font-mono text-2xl text-text-muted block mb-2">
                  {item.num}
                </span>
                <h3 className="font-mono text-[12px] font-bold text-accent mb-2">
                  {item.title}
                </h3>
                <p className="text-[11px] text-text-muted font-mono leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="py-16 bg-bg-base text-center">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 mb-5 px-4 py-2
              border border-border-default rounded-md bg-bg-overlay">
              <span className="w-2 h-2 rounded-full bg-success" />
              <span className="text-[11px] text-text-muted font-mono">
                $ ssh partners@guangyu-cloud
              </span>
            </div>

            <h2 className="font-mono text-xl font-bold text-text-primary mb-3">
              立即体验我们的云服务
            </h2>
            <p className="text-[12px] text-text-secondary font-mono mb-6 max-w-[440px] mx-auto">
              <span className="text-syntax-comment"># </span>
              注册即可获得免费试用额度，无需信用卡
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/register" className="btn-primary text-[12px] !py-2.5 !px-8">
                免费试用
              </Link>
              <Link href="/#solutions" className="btn-secondary text-[12px] !py-2.5 !px-8">
                cat README.md
                <ArrowRight size={12} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
