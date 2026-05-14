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
    title: "Tech Partner",
    desc: "Joint R&D and open source contributions. Algorithm optimization, system architecture design, standards development.",
    tags: ["R&D", "Open Source", "Standards", "Papers"],
  },
  {
    title: "Channel",
    desc: "Product distribution and market expansion. Training, technical support, and marketing materials provided.",
    tags: ["Exclusive", "Commission", "Pre-sales", "Marketing"],
  },
  {
    title: "Solution Partner",
    desc: "Industry solution co-delivery. Integrate Guangyu Cloud capabilities into your solutions.",
    tags: ["Co-creation", "Delivery", "Custom", "Support"],
  },
  {
    title: "Ecosystem",
    desc: "Open platform and industry ecosystem. Build on our APIs and SDKs across 1000+ edge nodes.",
    tags: ["API/SDK", "Marketplace", "Branding", "Alliance"],
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
              export const partners
            </h1>
            <p className="text-[13px] text-text-secondary font-mono max-w-[480px] mx-auto mb-2">
              <span className="text-syntax-comment">// </span>
              Building the distributed compute ecosystem with industry leaders
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
            <h2 className="ide-section-title">Partner Directory</h2>
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
            <h2 className="ide-section-title">Cooperation Modes</h2>
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
            <h2 className="ide-section-title">Why Join</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { num: "01", title: "Technology", desc: "Access cutting-edge distributed compute tech, priority R&D access" },
              { num: "02", title: "Revenue", desc: "Tiered commission + co-marketing, shared customer resources" },
              { num: "03", title: "Branding", desc: "Website listing + joint events + industry whitepapers" },
              { num: "04", title: "Network", desc: "1000+ edge nodes network effect + alliance resources" },
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
              Become a Guangyu Cloud Partner
            </h2>
            <p className="text-[12px] text-text-secondary font-mono mb-6 max-w-[440px] mx-auto">
              <span className="text-syntax-comment"># </span>
              Whether you&apos;re a tech vendor, channel partner, or solution integrator
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/register" className="btn-primary text-[12px] !py-2.5 !px-8">
                $ join --now
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
