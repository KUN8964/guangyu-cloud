"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Trophy, BookOpen, Newspaper, Calendar, ChevronRight } from "lucide-react";

const timeline = [
  {
    year: "2019 年 | 启航",
    events: [
      "企业初创：在西安正式成立",
      "技术布局：莫斯科算法实验室成立，开启核心技术探索",
    ],
  },
  {
    year: "2020 年 | 成长",
    events: [
      "产业协同：与中国联通达成战略合作",
      "基地落地：西部联合实验室、深圳生产基地相继成立",
      "布局完善：初步构建产学研一体化的研发与生产生态",
    ],
  },
  {
    year: "2021-2022 年 | 奋进",
    events: [
      "研发深化：分布式存储研究中心成立，深耕核心技术",
      "生态共建：创工委首届核心委员加入；成为阿里云飞天生态伙伴",
      "产品落地：Web3 存算网络实践发布，获高新技术企业认证，首款智能硬件正式面世",
    ],
  },
  {
    year: "2023-2024 年 | 坚持",
    events: [
      "地域扩张：深圳研究所成立，强化华南研发能力",
      "技术突破：实现从联网到组网的核心跨越；团队度过至暗时刻，完成关键技术沉淀",
      "核心成果：HalomeOS 操作系统发布；分布式智能终端定型；首批 22 家运营中心落地",
    ],
  },
  {
    year: "2025 年 | 新起点",
    events: [
      "协议成熟：HUFS 协议完成测试，穿透性组网达成",
      "战略升级：公司总部迁至杭州，立足数字经济核心枢纽",
      "商业落地：第三代云服务实现商用，开启全球化布局",
      "生态完善：全球开发者社区正式建立",
    ],
  },
  {
    year: "2030 年 | 飞跃",
    events: [
      "全球覆盖：业务网络覆盖全球主要地区",
      "网络成型：全球最大分布式网络全面建成",
    ],
  },
  {
    year: "2033 年 | 骄阳",
    events: [
      "行业定位：成为全球数字基础设施领域的世界级科技公司",
      "终极目标：建成全球最大规模分布式智能网络，成为新一代世界级数字基础设施",
    ],
  },
];

const honors = [
  { title: "高新技术企业认证", year: "2022" },
  { title: "阿里云飞天生态伙伴", year: "2021" },
  { title: "创工委首届核心委员", year: "2021" },
  { title: "中国联通战略合作", year: "2020" },
];

const brandTechNews = [
  { title: "从SpaceX IPO看分布式未来", date: "2026/4/8" },
  { title: "分布式 AI：从大模型下沉到端侧的小模型策略", date: "2026/3/19" },
  { title: "零信任安全：全分布式系统如何确保可信与数据主权", date: "2026/3/4" },
  { title: "赋能数智印控行业 | 光宇云定制化存储方案，海量数据存储的安心之选", date: "2026/2/3" },
  { title: "HUFS：为AI时代打造的\u201c超高速数据大动脉\u201d", date: "2026/1/30" },
  { title: "内容寻址与CID：让数据脱离\u201c位置\u201d的下一代范式", date: "2026/1/22" },
];

const industryNews = [
  { title: "光宇云科技新增6项软件著作权", date: "2026/3/5" },
  { title: "2026杭州市政府工作报告锚定杭城AI新蓝图，光宇分布式存算技术赋能高质量发展", date: "2026/2/10" },
  { title: "刘飞飞：Web3+AI驱动智能时代，光宇以\u201c村村通\u201d新型数字基建为AI铺就普惠之路", date: "2026/2/6" },
  { title: "自主创新再添证！光宇云计算15款系统获国家软件著作权", date: "2026/1/13" },
  { title: "光宇云计算斩获三大ISO认证，筑牢信息安全管理与服务双基石", date: "2025/11/5" },
  { title: "2025全球数算产业论坛圆桌会议：分布式存算重塑全球数字经济新生态", date: "2025/9/30" },
];

export default function AboutClient() {
  const [activeTab, setActiveTab] = useState<"about" | "news">("about");
  const [newsSubTab, setNewsSubTab] = useState<"brand" | "industry">("brand");

  const newsData = newsSubTab === "brand" ? brandTechNews : industryNews;

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
              📄 src/about/company.tsx
            </p>
            <h1 className="font-mono text-[26px] font-bold text-text-primary mb-4">
              关于我们
            </h1>
            <p className="text-[13px] text-text-secondary font-mono max-w-[680px] leading-relaxed">
              <span className="text-syntax-comment">/** </span>
              光宇是赛道领先型的全球化创新技术公司，是全球第一个将第三代互联网（Web3.0）
              技术实现产业化的公司。以分布式技术为核心，构建 Web3.0 分布式存算网络，
              为个人、家庭、企业、政府、开发者提供安全、可信、经济、高效、智能的
              存算一体、边缘计算、智能存储、AI 多模态等产品及服务。
              <span className="text-syntax-comment"> */</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══ TABS ═══ */}
      <section className="bg-bg-base sticky top-12 z-30 border-b border-border-default">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex gap-1">
            {[
              { id: "about" as const, label: "了解我们", icon: BookOpen },
              { id: "news" as const, label: "资讯", icon: Newspaper },
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-3 text-[12px] font-mono
                    border-b-2 transition-all ${
                      activeTab === tab.id
                        ? "border-accent text-text-primary"
                        : "border-transparent text-text-muted hover:text-text-secondary"
                    }`}
                >
                  <Icon size={13} />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {activeTab === "about" && (
        <>
          {/* ═══ TIMELINE ═══ */}
          <section className="py-16 bg-bg-overlay">
            <div className="max-w-6xl mx-auto px-6">
              <div className="mb-10">
                <p className="ide-section-label">const history: Timeline[]</p>
                <h2 className="ide-section-title">成长历程</h2>
              </div>

              <div className="max-w-[700px] mx-auto space-y-0">
                {timeline.map((item, i) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.1 }}
                    className="relative pl-8 pb-10 border-l border-border-default last:border-l-0"
                  >
                    <div className="absolute left-0 top-1 -translate-x-1/2 w-2.5 h-2.5
                      rounded-full bg-accent border-2 border-bg-overlay" />
                    <h3 className="font-mono text-[14px] font-bold text-accent mb-3">
                      {item.year}
                    </h3>
                    <ul className="space-y-2">
                      {item.events.map((ev) => (
                        <li key={ev} className="text-[12px] text-text-secondary font-mono leading-relaxed">
                          <span className="text-text-muted mr-2">○</span>
                          {ev}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* ═══ HONORS ═══ */}
          <section className="py-16 bg-bg-base">
            <div className="max-w-6xl mx-auto px-6">
              <div className="mb-10">
                <p className="ide-section-label">const honors: Honor[]</p>
                <h2 className="ide-section-title">公司荣誉</h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {honors.map((honor, i) => (
                  <motion.div
                    key={honor.title}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.2, delay: i * 0.06 }}
                    className="p-5 border border-border-default rounded-lg bg-bg-overlay text-center
                      hover:border-accent/20 transition-all duration-300 group"
                  >
                    <Trophy size={18} className="text-warning mx-auto mb-3" />
                    <h3 className="font-mono text-[12px] font-bold text-text-primary mb-1.5">
                      {honor.title}
                    </h3>
                    <span className="text-[10px] text-text-muted font-mono">
                      {honor.year}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {activeTab === "news" && (
        <>
          {/* ═══ NEWS SUB-TABS ═══ */}
          <section className="bg-bg-overlay border-b border-border-default">
            <div className="max-w-6xl mx-auto px-6">
              <div className="flex gap-1">
                {[
                  { id: "brand" as const, label: "品牌技术" },
                  { id: "industry" as const, label: "行业资讯" },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setNewsSubTab(tab.id)}
                    className={`px-4 py-3 text-[11px] font-mono border-b-2 transition-all ${
                      newsSubTab === tab.id
                        ? "border-accent text-accent"
                        : "border-transparent text-text-muted hover:text-text-secondary"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* ═══ NEWS LIST ═══ */}
          <section className="py-12 bg-bg-overlay">
            <div className="max-w-6xl mx-auto px-6">
              <div className="max-w-[800px] mx-auto space-y-1">
                {newsData.map((item, i) => (
                  <motion.a
                    key={item.title}
                    href="#"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, delay: i * 0.04 }}
                    className="flex items-start justify-between gap-4 p-4 border border-border-default
                      rounded-lg bg-bg-base hover:border-accent/20 transition-all duration-300 group"
                  >
                    <div className="min-w-0">
                      <h3 className="font-mono text-[13px] font-bold text-text-primary
                        group-hover:text-accent transition-colors leading-relaxed">
                        {item.title}
                      </h3>
                    </div>
                    <div className="flex items-center gap-1.5 text-[10px] text-text-muted font-mono shrink-0 mt-0.5">
                      <Calendar size={10} />
                      {item.date}
                      <ChevronRight size={11} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* More link */}
              <div className="text-center mt-8">
                <span className="inline-flex items-center gap-2 text-[11px] text-text-muted font-mono">
                  扫码关注更多资讯
                </span>
              </div>
            </div>
          </section>
        </>
      )}

      {/* ═══ CTA ═══ */}
      <section className="py-16 bg-bg-base text-center">
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
