"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Tag, Calendar, Gift, Zap, ChevronRight, Clock, TrendingUp } from "lucide-react";

const promotions = [
  {
    id: "summer-gpu",
    icon: Zap,
    title: "夏日算力狂欢季",
    subtitle: "GPU 算力限时 5 折",
    desc: "H100 / A100 / 昇腾 910B2 全线产品限时优惠，新用户首月 5 折，老用户续费 7 折。",
    tag: "限时优惠",
    tagColor: "text-syntax-keyword",
    bgTag: "bg-syntax-keyword/10 border-syntax-keyword/30",
    endDate: "2026.08.31",
    href: "/promotions/summer-gpu",
  },
  {
    id: "new-user-gift",
    icon: Gift,
    title: "新用户注册礼包",
    subtitle: "注册即送 ¥500 体验金",
    desc: "完成注册 + 实名认证，即获 ¥500 体验金 + 50GB 免费存储空间，无需绑定信用卡。",
    tag: "长期活动",
    tagColor: "text-success",
    bgTag: "bg-success/10 border-success/30",
    endDate: "长期有效",
    href: "/promotions/new-user-gift",
  },
  {
    id: "model-free-trial",
    icon: TrendingUp,
    title: "AI 模型免费试用",
    subtitle: "12 款行业模型 0 元体验",
    desc: "智慧水务、智慧医疗、智慧农业等 12 款边缘 AI 模型免费试用 30 天，不限调用次数。",
    tag: "限时优惠",
    tagColor: "text-syntax-keyword",
    bgTag: "bg-syntax-keyword/10 border-syntax-keyword/30",
    endDate: "2026.09.30",
    href: "/promotions/model-free-trial",
  },
  {
    id: "partner-referral",
    icon: Gift,
    title: "推荐有礼 · 双向返佣",
    subtitle: "推荐朋友各得 ¥200 代金券",
    desc: "邀请好友注册并完成首单，双方各获 ¥200 代金券。上不封顶，多推多得。",
    tag: "长期活动",
    tagColor: "text-success",
    bgTag: "bg-success/10 border-success/30",
    endDate: "长期有效",
    href: "/promotions/partner-referral",
  },
];

const events = [
  {
    id: "web3-summit",
    title: "Web3.0 分布式存算生态峰会",
    date: "2026.06.15",
    location: "杭州 · 国际博览中心",
    status: "火热报名中",
    statusColor: "text-accent",
    desc: "聚焦分布式存储、边缘计算、AI 推理三大主题，汇聚行业领袖与技术专家。",
  },
  {
    id: "dev-workshop",
    title: "边缘 AI 开发者训练营",
    date: "2026.07.08",
    location: "线上直播",
    status: "即将开营",
    statusColor: "text-syntax-function",
    desc: "手把手教你用光宇云边缘节点部署 AI 模型，实操 + 答疑，免费参加。",
  },
  {
    id: "partner-day",
    title: "生态合作伙伴开放日",
    date: "2026.07.22",
    location: "深圳 · 光宇云总部",
    status: "预约中",
    statusColor: "text-syntax-function",
    desc: "深度了解产品路线图，与技术团队面对面交流，探讨行业合作机会。",
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.06 },
  },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.25 } },
};

export default function PromotionsClient() {
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
              📄 src/promotions/active.tsx
            </p>
            <h1 className="font-mono text-[26px] font-bold text-text-primary mb-3">
              促销及活动
            </h1>
            <p className="text-[13px] text-text-secondary font-mono max-w-[520px]">
              <span className="text-syntax-comment">// </span>
              实时掌握光宇云最新优惠、限时促销与生态大会动态
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══ 限时促销 ═══ */}
      <section className="pb-20 bg-bg-base">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="mb-8"
          >
            <p className="font-mono text-[11px] text-syntax-comment mb-2">
              INTERFACE IPROMOTION[]
            </p>
            <h2 className="font-mono text-[18px] font-semibold text-text-primary flex items-center gap-2">
              <Tag size={16} className="text-syntax-keyword" />
              限时促销
            </h2>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {promotions.map((promo) => {
              const Icon = promo.icon;
              return (
                <motion.div
                  key={promo.id}
                  variants={item}
                  className="group bg-bg-surface border border-border-default rounded-lg p-5
                    hover:border-border-strong transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-md bg-bg-overlay border border-border-muted
                        flex items-center justify-center">
                        <Icon size={16} className="text-accent" />
                      </div>
                      <div>
                        <h3 className="font-mono text-[14px] font-semibold text-text-primary">
                          {promo.title}
                        </h3>
                        <p className="text-[12px] text-syntax-function font-mono mt-0.5">
                          {promo.subtitle}
                        </p>
                      </div>
                    </div>
                    <span className={`shrink-0 text-[10px] font-mono px-2 py-1 
                      rounded border ${promo.bgTag} ${promo.tagColor}`}>
                      {promo.tag}
                    </span>
                  </div>

                  <p className="text-[12px] text-text-secondary font-mono leading-relaxed mb-4">
                    {promo.desc}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-text-muted font-mono flex items-center gap-1">
                      <Clock size={10} />
                      截止 {promo.endDate}
                    </span>
                    <Link
                      href={promo.href}
                      className="text-[11px] text-accent hover:text-text-link font-mono
                        flex items-center gap-1 transition-colors"
                    >
                      立即参与
                      <ChevronRight size={12} />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ═══ 活动日历 ═══ */}
      <section className="pb-20 bg-bg-overlay border-t border-b border-border-default">
        <div className="max-w-6xl mx-auto px-6 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="mb-8"
          >
            <p className="font-mono text-[11px] text-syntax-comment mb-2">
              CONST EVENTS: EVENT_CALENDAR[]
            </p>
            <h2 className="font-mono text-[18px] font-semibold text-text-primary flex items-center gap-2">
              <Calendar size={16} className="text-syntax-function" />
              活动日历
            </h2>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-3"
          >
            {events.map((event, i) => (
              <motion.div
                key={event.id}
                variants={item}
                className="group flex items-start gap-5 bg-bg-surface border border-border-default
                  rounded-lg p-5 hover:border-border-strong transition-all duration-300"
              >
                {/* Date block */}
                <div className="shrink-0 w-16 text-center">
                  <div className="font-mono text-[20px] font-bold text-text-primary leading-none">
                    {event.date.split(".")[2]}
                  </div>
                  <div className="font-mono text-[10px] text-text-muted mt-1">
                    {event.date.split(".")[0]}.{event.date.split(".")[1]}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-mono text-[14px] font-semibold text-text-primary">
                      {event.title}
                    </h3>
                    <span className={`text-[10px] font-mono px-2 py-0.5 rounded 
                      border ${event.statusColor} bg-bg-overlay border-current/20`}>
                      {event.status}
                    </span>
                  </div>
                  <p className="text-[12px] text-text-secondary font-mono leading-relaxed mb-2">
                    {event.desc}
                  </p>
                  <p className="text-[10px] text-text-muted font-mono">
                    📍 {event.location}
                  </p>
                </div>

                {/* Arrow */}
                <ChevronRight
                  size={16}
                  className="shrink-0 mt-1 text-text-muted group-hover:text-accent
                    transition-colors"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══ BOTTOM CTA ═══ */}
      <section className="py-16 bg-bg-base">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="bg-bg-surface border border-border-default rounded-lg p-8
            max-w-[420px] mx-auto">
            <div className="font-mono text-[11px] text-text-muted mb-3">
              $ ssh guangyu-cloud --subscribe
            </div>
            <h2 className="font-mono text-[18px] font-semibold text-text-primary mb-3">
              订阅活动通知
            </h2>
            <p className="text-[12px] text-text-muted font-mono mb-5">
              <span className="text-syntax-comment"># </span>
              第一时间获取促销信息与技术峰会邀请
            </p>
            <Link
              href="/register"
              className="inline-flex items-center gap-2 bg-accent text-white px-6 py-2.5
                rounded-md font-mono text-[13px] font-semibold hover:bg-accent/90
                transition-colors duration-200"
            >
              免费注册
              <ChevronRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
