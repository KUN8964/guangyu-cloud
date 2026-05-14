"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const partners = [
  "China Unicom", "Alibaba Cloud", "Huawei Cloud", "Baidu AI Cloud",
  "Tencent Cloud", "Inspur", "China Telecom", "iFLYTEK",
  "Hikvision", "Zhejiang Univ.", "H3C", "Yonyou",
];

const coopModes = [
  { title: "Tech Partner", desc: "Joint R&D and open source contributions", color: "text-accent" },
  { title: "Channel", desc: "Product distribution and market expansion", color: "text-success" },
  { title: "Solution", desc: "Industry solution co-delivery", color: "text-syntax-function" },
  { title: "Ecosystem", desc: "Open platform and standards", color: "text-warning" },
];

export default function PartnerSection() {
  return (
    <section id="partners" className="py-20 bg-bg-overlay relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="ide-section-label">
            {/* src/config/partners.config.ts */}
          </p>
          <h2 className="ide-section-title">
            export const partners: Partner[]
          </h2>
          <p className="text-[13px] text-text-secondary font-mono max-w-[520px] mx-auto mb-12">
            <span className="text-syntax-comment">// </span>
            Building the distributed compute ecosystem with industry leaders
          </p>
        </div>

        {/* Logo grid — code imports style */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 mb-12">
          {partners.map((p, i) => (
            <motion.div
              key={p}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.2, delay: i * 0.03 }}
              className="flex items-center justify-center py-4 px-2 border border-border-default
                rounded-md bg-bg-base hover:border-accent/30 transition-all duration-300 group"
            >
              <span className="font-mono text-[11px] text-text-muted group-hover:text-text-primary
                transition-colors">
                import &quot;{p}&quot;
              </span>
            </motion.div>
          ))}
        </div>

        {/* Cooperation modes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {coopModes.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.06 }}
              className="p-5 border border-border-default rounded-lg bg-bg-base text-center
                hover:border-accent/20 transition-all duration-300"
            >
              <span className="font-mono text-2xl text-text-muted block mb-2">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className={`font-mono text-[12px] font-bold ${item.color} mb-2`}>
                {item.title}
              </h3>
              <p className="text-[11px] text-text-muted font-mono">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/partners"
            className="inline-flex items-center gap-1.5 text-[11px] font-mono
              text-text-link hover:underline transition-all"
          >
            view all partners
            <ArrowRight size={12} />
          </Link>
        </div>
      </div>
    </section>
  );
}
