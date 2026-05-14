"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Users, Handshake, Lightbulb, Globe, Zap } from "lucide-react";

/* ═══════════════════════════════════════════
   Data
   ═══════════════════════════════════════════ */

const partners = [
  { name: "中国联通", desc: "联合打造 5G + 边缘计算一体化解决方案" },
  { name: "阿里云", desc: "混合云架构与云原生技术深度合作" },
  { name: "华为云", desc: "昇腾 AI 算力生态战略合作伙伴" },
  { name: "百度智能云", desc: "AI 大模型推理与知识库联合研发" },
  { name: "腾讯云", desc: "音视频与实时通信技术生态合作" },
  { name: "浪潮", desc: "服务器硬件与数据中心联合交付" },
  { name: "中国电信", desc: "天翼云 + 边缘节点网络共建" },
  { name: "科大讯飞", desc: "语音 AI 与自然语言处理模型适配" },
  { name: "海康威视", desc: "智能视觉分析与边缘推理联合方案" },
  { name: "浙江大学", desc: "分布式系统与 AI 算法产学研合作" },
  { name: "新华三", desc: "网络基础设施与安全合规联合方案" },
  { name: "用友", desc: "企业 ERP 与分布式存储深度集成" },
];

const cooperationModes = [
  {
    icon: Handshake,
    title: "技术合作",
    desc: "联合研发与开源代码贡献，共同推进分布式存算技术前沿。包括算法优化、系统架构设计、标准制定等领域深度协作。",
    color: "neon-cyan",
    highlights: ["联合技术研发", "开源社区贡献", "技术标准共建", "学术论文合著"],
  },
  {
    icon: Users,
    title: "渠道代理",
    desc: "产品分销与市场拓展合作，共享光宇云全栈产品矩阵的销售权益。提供完善的代理商培训、技术支持和市场物料。",
    color: "neon-magenta",
    highlights: ["区域独家代理", "阶梯返佣政策", "售前技术支持", "联合市场活动"],
  },
  {
    icon: Lightbulb,
    title: "解决方案",
    desc: "行业方案联合交付，将光宇云的分布式存算能力融入您的行业解决方案。覆盖制造、政务、金融、互联网等领域。",
    color: "neon-purple",
    highlights: ["行业方案联创", "联合项目交付", "定制化开发", "长期运维支持"],
  },
  {
    icon: Globe,
    title: "生态共建",
    desc: "开放平台与产业生态共建，基于光宇云开放 API 和 SDK 构建应用生态。共享 1000+ 边缘节点的网络效应。",
    color: "neon-gold",
    highlights: ["开放 API/SDK", "应用市场入驻", "联合品牌推广", "产业联盟共建"],
  },
];

/* ═══════════════════════════════════════════
   Particles
   ═══════════════════════════════════════════ */

function DataParticles() {
  const particles = [
    { x: "10%", y: "20%", s: 3, d: 3, c: "bg-neon-cyan" },
    { x: "85%", y: "15%", s: 2, d: 4, c: "bg-neon-magenta" },
    { x: "70%", y: "70%", s: 4, d: 3.5, c: "bg-neon-purple" },
    { x: "15%", y: "80%", s: 2, d: 5, c: "bg-neon-gold" },
    { x: "50%", y: "50%", s: 3, d: 2.5, c: "bg-neon-cyan" },
    { x: "30%", y: "35%", s: 2, d: 4.5, c: "bg-neon-purple" },
    { x: "90%", y: "55%", s: 3, d: 3, c: "bg-neon-magenta" },
    { x: "60%", y: "85%", s: 2, d: 4, c: "bg-neon-gold" },
  ];
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-none ${p.c} opacity-30`}
          style={{ left: p.x, top: p.y, width: p.s, height: p.s }}
          animate={{ y: [0, -20, 0], opacity: [0.2, 0.5, 0.2] }}
          transition={{
            duration: p.d,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        />
      ))}
    </div>
  );
}

/* ═══════════════════════════════════════════
   Main Component
   ═══════════════════════════════════════════ */

export default function PartnersClient() {
  return (
    <div className="min-h-screen">
      {/* ═══════════════════════════════════════
          HERO
          ═══════════════════════════════════════ */}
      <section className="relative pt-28 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-abyss bg-pixel-grid">
          <div
            className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2
              w-[700px] h-[700px] rounded-full opacity-15"
            style={{
              background:
                "radial-gradient(circle, #FFD700 0%, #B44CFF 30%, #00F0FF 60%, transparent 80%)",
              filter: "blur(80px)",
            }}
          />
          <DataParticles />
        </div>

        <div className="relative max-w-[1200px] mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <p className="font-[family-name:var(--font-vt323)] text-lg text-neon-gold mb-3 tracking-widest">
              &gt; PARTNERS_
            </p>
            <h1 className="font-[family-name:var(--font-press-start)] text-[28px] leading-[1.5]
              neon-magenta mb-6 tracking-wider">
              合作伙伴
            </h1>
            <p className="text-text-secondary text-base leading-relaxed max-w-[560px] mx-auto mb-4">
              <span className="neon-cyan">▸</span>{" "}
              携手行业领军者，共建分布式存算一体产业生态
            </p>
            <p className="text-text-muted text-sm max-w-[480px] mx-auto mb-10">
              覆盖通信、云计算、AI、硬件制造、高校科研等全产业链
            </p>

            <Link
              href="/register"
              className="pixel-btn inline-flex items-center gap-2 px-8 py-4
                bg-neon-cyan text-abyss font-bold
                font-[family-name:var(--font-press-start)] text-xs tracking-wider
                hover:shadow-[0_0_30px_rgba(0,240,255,0.6)] transition-shadow duration-200"
            >
              ▶ 成为合作伙伴
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          PARTNER GRID
          ═══════════════════════════════════════ */}
      <section className="py-24 bg-deep relative">
        <div className="absolute inset-0 bg-pixel-grid opacity-40" />

        <div className="relative max-w-[1200px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="text-center mb-14"
          >
            <p className="font-[family-name:var(--font-vt323)] text-lg text-neon-cyan mb-3 tracking-widest">
              &gt; OUR_PARTNERS_
            </p>
            <h2 className="font-[family-name:var(--font-press-start)] text-2xl tracking-wider
              neon-purple mb-4">
              合作伙伴名录
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {partners.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                className="group p-5 bg-card border border-border/30
                  hover:border-neon-cyan/40 hover:shadow-[0_0_20px_rgba(0,240,255,0.08)]
                  transition-all duration-300"
              >
                {/* Logo placeholder */}
                <div className="w-full h-16 mb-4 bg-surface border border-border/20
                  flex items-center justify-center
                  group-hover:border-neon-cyan/30 transition-colors duration-300">
                  <span className="font-[family-name:var(--font-press-start)] text-sm
                    text-text-muted group-hover:text-neon-cyan tracking-wider
                    transition-colors duration-300">
                    [{p.name}]
                  </span>
                </div>


                <p className="text-xs text-text-secondary leading-relaxed
                  font-[family-name:var(--font-vt323)] tracking-wide">
                  {p.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          COOPERATION MODES
          ═══════════════════════════════════════ */}
      <section className="py-24 bg-void relative">
        <div className="absolute inset-0 bg-pixel-grid-large opacity-20" />

        <div className="relative max-w-[1200px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="text-center mb-14"
          >
            <p className="font-[family-name:var(--font-vt323)] text-lg text-neon-magenta mb-3 tracking-widest">
              &gt; COOPERATION_MODES_
            </p>
            <h2 className="font-[family-name:var(--font-press-start)] text-2xl tracking-wider
              neon-cyan mb-4">
              合作模式
            </h2>
            <p className="text-text-secondary text-sm max-w-[520px] mx-auto">
              <span className="neon-purple">▸</span>{" "}
              四种合作模式，灵活匹配不同阶段和类型的合作伙伴
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cooperationModes.map((mode, i) => (
              <motion.div
                key={mode.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
                className={`group isometric p-8 bg-card border border-${mode.color}/20
                  hover:border-${mode.color}/40 transition-all duration-300
                  hover:shadow-[0_0_20px_var(--color-${mode.color})/0.1]`}
              >
                <div className="flex items-start gap-5">
                  <div className={`w-14 h-14 shrink-0 flex items-center justify-center
                    bg-${mode.color}/10 border border-${mode.color}/20`}>
                    <mode.icon size={24} className={`text-${mode.color}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className={`font-[family-name:var(--font-press-start)] text-sm tracking-wider
                      text-${mode.color} mb-3`}>
                      [{mode.title}]
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed mb-4">
                      {mode.desc}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {mode.highlights.map((h) => (
                        <span
                          key={h}
                          className="text-[10px] px-2 py-1 bg-surface border border-border/20
                            text-text-muted font-[family-name:var(--font-vt323)] tracking-wider"
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          JOIN US - BENEFITS
          ═══════════════════════════════════════ */}
      <section className="py-24 bg-deep relative">
        <div className="absolute inset-0 bg-pixel-grid opacity-40" />

        <div className="relative max-w-[1200px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="text-center mb-14"
          >
            <p className="font-[family-name:var(--font-vt323)] text-lg text-neon-gold mb-3 tracking-widest">
              &gt; WHY_JOIN_
            </p>
            <h2 className="font-[family-name:var(--font-press-start)] text-2xl tracking-wider
              neon-magenta mb-4">
              加入我们
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: "01", title: "技术赋能", desc: "共享前沿分布式存算技术，联合研发优先接入", color: "neon-cyan" },
              { num: "02", title: "商业共赢", desc: "阶梯返佣 + 联合营销，共享千行百业客户资源", color: "neon-magenta" },
              { num: "03", title: "品牌联名", desc: "官网展示 + 联名发布会 + 行业白皮书合著", color: "neon-purple" },
              { num: "04", title: "生态网络", desc: "1000+ 边缘节点网络效应 + 产业联盟资源共享", color: "neon-gold" },
            ].map((item, i) => (
              <motion.div
                key={item.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.08 }}
                className={`group isometric p-7 bg-card border border-${item.color}/20
                  text-center hover:border-${item.color}/40
                  hover:shadow-[0_0_20px_var(--color-${item.color})/0.1]
                  transition-all duration-300`}
              >
                <span className={`font-[family-name:var(--font-press-start)] text-lg text-${item.color}
                  tracking-widest block mb-4`}>
                  [{item.num}]
                </span>
                <h3 className="font-[family-name:var(--font-press-start)] text-xs tracking-wider
                  text-text-primary mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CTA
          ═══════════════════════════════════════ */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-abyss">
          <div className="absolute inset-0 bg-pixel-grid opacity-50" />
          <div
            className="absolute bottom-0 left-0 right-0 h-1/2"
            style={{
              background:
                "linear-gradient(to top, #FF2D95 0%, #B44CFF 30%, transparent 100%)",
              opacity: 0.12,
            }}
          />
          <div className="absolute bottom-[140px] left-0 right-0 h-[2px] section-divider" />
        </div>

        <div className="relative max-w-[1200px] mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
          >
            <Zap size={32} className="mx-auto mb-6 text-neon-gold
              drop-shadow-[0_0_12px_rgba(255,215,0,0.6)]" />

            <h2 className="font-[family-name:var(--font-press-start)] text-2xl tracking-wider
              neon-cyan mb-6">
              成为光宇云合作伙伴
            </h2>

            <p className="text-text-secondary mb-10 max-w-[480px] mx-auto text-sm">
              <span className="neon-gold">▸</span>{" "}
              无论您是技术厂商、渠道商还是解决方案集成商
              <br />
              <span className="text-text-muted text-xs mt-2 block">
                我们期待与您携手共建分布式存算生态
              </span>
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/register"
                className="pixel-btn inline-flex items-center gap-3 px-10 py-4
                  bg-neon-magenta text-white font-bold
                  font-[family-name:var(--font-press-start)] text-sm tracking-wider
                  hover:shadow-[0_0_40px_rgba(255,45,149,0.6)] transition-shadow duration-200"
              >
                ▶ 申请加入
              </Link>
              <Link
                href="/#solutions"
                className="inline-flex items-center gap-2 px-8 py-4
                  border border-neon-cyan/50 text-neon-cyan
                  font-[family-name:var(--font-press-start)] text-xs tracking-wider
                  hover:bg-neon-cyan/10 transition-all duration-200"
              >
                了解更多
                <ArrowRight size={14} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
