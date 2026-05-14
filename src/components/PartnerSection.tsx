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
    <section id="partners" className="py-20 bg-[#F6F6F6]">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="text-center mb-4"
        >
          <h2 className="text-[28px] font-semibold text-[#1A1A2E] mb-3">
            合作伙伴
          </h2>
          <p className="text-[#4A4A5E] max-w-[520px] mx-auto mb-12">
            携手多家行业伙伴，共建分布式存算一体产业生态，赋能千行百业数字化转型
          </p>
        </motion.div>

        {/* Logo grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 mb-12">
          {partners.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.06 }}
              className="flex items-center justify-center h-20 rounded-xl border border-black/5 bg-white hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)] transition-all duration-200"
            >
              <span className="text-sm font-medium text-[#8E8E9A]">{p.logo}</span>
            </motion.div>
          ))}
        </div>

        {/* Cooperation modes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "技术合作", desc: "联合研发与代码贡献" },
            { title: "渠道代理", desc: "产品分销与市场拓展" },
            { title: "解决方案", desc: "行业方案联合交付" },
            { title: "生态共建", desc: "开放平台与标准制定" },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.08 }}
              className="p-6 rounded-xl border border-black/5 bg-white text-center"
            >
              <h3 className="font-semibold text-[#1A1A2E] mb-2">{item.title}</h3>
              <p className="text-sm text-[#4A4A5E]">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.3 }}
          className="text-center mt-10"
        >
          <Link
            href="/partners"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-[#2D5BFF] hover:text-[#1E40D8] transition-colors duration-150"
          >
            了解更多合作模式
            <ArrowRight size={14} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
