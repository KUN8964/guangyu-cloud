"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTAStrip() {
  return (
    <section className="py-20 bg-[#2D5BFF]">
      <div className="max-w-[1200px] mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
        >
          <h2 className="text-[28px] font-semibold text-white mb-4">
            立即体验我们的云服务
          </h2>
          <p className="text-white/70 mb-8 max-w-[480px] mx-auto">
            注册即可获得免费试用额度，无需信用卡
          </p>
          <Link
            href="/register"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-[#2D5BFF] font-medium rounded-lg hover:bg-white/90 active:scale-[0.98] transition-all duration-200"
          >
            免费试用
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
