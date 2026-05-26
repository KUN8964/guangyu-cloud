"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Clock, ChevronRight } from "lucide-react";
import type { PromotionDetail } from "@/data/promotions";

export default function PromotionDetailClient({
  promo,
  bodyHtml,
}: {
  promo: PromotionDetail;
  bodyHtml: string;
}) {
  return (
    <div className="min-h-screen bg-bg-base">
      {/* ═══ HERO ═══ */}
      <section className="relative pt-20 pb-12 bg-bg-base">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2 }}
            className="mb-6"
          >
            <Link
              href="/promotions"
              className="inline-flex items-center gap-1.5 text-[11px] text-text-muted
                hover:text-text-link font-mono transition-colors"
            >
              <ArrowLeft size={12} />
              cd ../promotions
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.05 }}
          >
            <div className="flex items-center gap-3 mb-3">
              <span
                className={`text-[10px] font-mono px-2 py-0.5 rounded border ${promo.bgTag} ${promo.tagColor}`}
              >
                {promo.tag}
              </span>
              <span className="text-[10px] text-text-muted font-mono flex items-center gap-1">
                <Clock size={10} />
                截止 {promo.endDate}
              </span>
            </div>

            <h1 className="font-mono text-[26px] font-bold text-text-primary mb-2">
              {promo.title}
            </h1>
            <p className="text-[14px] text-syntax-function font-mono mb-3">
              {promo.subtitle}
            </p>
            <p className="text-[13px] text-text-secondary font-mono leading-relaxed max-w-[600px]">
              <span className="text-syntax-comment">// </span>
              {promo.desc}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══ BODY (server-rendered markdown → HTML) ═══ */}
      <section className="pb-16">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <div
              className="prose-ide"
              dangerouslySetInnerHTML={{ __html: bodyHtml }}
            />
          </motion.div>
        </div>
      </section>

      {/* ═══ BOTTOM CTA ═══ */}
      <section className="pb-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-bg-surface border border-border-default rounded-lg p-6">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <p className="font-mono text-[11px] text-text-muted mb-1">
                  $ ssh guangyu-cloud --join
                </p>
                <h3 className="font-mono text-[15px] font-semibold text-text-primary">
                  立即参与「{promo.title}」
                </h3>
              </div>
              <Link
                href="/register"
                className="inline-flex items-center gap-2 bg-accent text-white px-5 py-2.5
                  rounded-md font-mono text-[13px] font-semibold hover:bg-accent/90
                  transition-colors duration-200 shrink-0"
              >
                免费注册参与
                <ChevronRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
