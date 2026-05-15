"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Search, ArrowLeft } from "lucide-react";
import { aiModels, modelCategories } from "@/data/solutions";

export default function ModelsClient() {
  const [activeTab, setActiveTab] = useState("全部");
  const [search, setSearch] = useState("");

  const filtered = aiModels.filter((m) => {
    const matchTab = activeTab === "全部" || m.category === activeTab;
    const matchSearch =
      !search ||
      m.name.includes(search) ||
      m.description.includes(search) ||
      m.tags.some((t) => t.includes(search));
    return matchTab && matchSearch;
  });

  return (
    <div className="min-h-screen">
      {/* ═══ HERO ═══ */}
      <section className="relative pt-20 pb-12 bg-bg-base">
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
              📄 src/models/registry.ts
            </p>
            <h1 className="font-mono text-[26px] font-bold text-text-primary mb-3">
              AI 模型服务
            </h1>
            <p className="text-[13px] text-text-secondary font-mono max-w-[560px]">
              <span className="text-syntax-comment">// </span>
              面向智慧水务等多行业，提供开箱即用、高精准的分布式 AI 算法模型，助力业务智能化升级
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══ FILTERS ═══ */}
      <section className="pb-8 bg-bg-base sticky top-12 z-30 border-b border-border-default bg-bg-base/95 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
            {/* Tabs */}
            <div className="flex flex-wrap gap-1.5">
              {modelCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className={`px-3 py-1.5 text-[11px] font-mono rounded-md border transition-all ${
                    activeTab === cat
                      ? "bg-accent text-white border-accent"
                      : "bg-bg-overlay text-text-secondary border-border-muted hover:border-border-default"
                  }`}
                >
                  {cat === "全部" ? "全部" : cat}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative w-full sm:w-64">
              <Search size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" />
              <input
                type="text"
                placeholder="输入关键词搜索模型"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-8 pr-3 py-1.5 bg-bg-overlay border border-border-default
                  rounded-md text-[11px] font-mono text-text-primary
                  placeholder:text-text-muted focus:outline-none focus:border-accent/30"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ MODEL GRID ═══ */}
      <section className="py-12 bg-bg-overlay">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatePresence mode="wait">
            {filtered.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <p className="font-mono text-[13px] text-text-muted">
                  $ grep &quot;{search}&quot; models/ → 0 results
                </p>
              </motion.div>
            ) : (
              <motion.div
                key={activeTab + search}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
              >
                {filtered.map((model, i) => (
                  <motion.div
                    key={model.id}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, delay: i * 0.04 }}
                    className="p-5 border border-border-default rounded-lg bg-bg-base
                      hover:border-accent/20 transition-all duration-300 group"
                  >
                    {/* Model type badge */}
                    <div className="flex items-center justify-between mb-3">
                      <span className={`text-[10px] px-2 py-0.5 rounded-md font-mono border ${
                        model.tags[1] === "标准型"
                          ? "text-accent bg-accent/5 border-accent/20"
                          : "text-success bg-success-bg border-success/20"
                      }`}>
                        {model.tags[1]}
                      </span>
                      <span className="text-[10px] text-text-muted font-mono">
                        {model.category}
                      </span>
                    </div>

                    <h3 className="font-mono text-[13px] font-bold text-text-primary mb-2">
                      {model.name}
                    </h3>

                    <p className="text-[11px] text-text-secondary font-mono leading-relaxed mb-3">
                      <span className="text-syntax-comment">// </span>
                      {model.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1">
                      {model.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="text-[9px] px-1.5 py-0.5 bg-bg-overlay border border-border-muted
                            rounded text-text-muted font-mono"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* ═══ STATS ═══ */}
      <section className="py-12 bg-bg-base">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { label: "models.count", val: aiModels.length },
              { label: "categories", val: modelCategories.length - 1 },
              { label: "avg.latency", val: "<50ms" },
              { label: "edge.deploy", val: "✓" },
            ].map((stat) => (
              <div key={stat.label} className="text-center p-4 border border-border-default rounded-lg bg-bg-overlay">
                <p className="font-mono text-xl text-accent font-bold">
                  {stat.val}
                </p>
                <p className="text-[10px] text-text-muted font-mono mt-1">
                  {stat.label}
                </p>
              </div>
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
            <div className="inline-flex items-center gap-2 mb-5 px-4 py-2
              border border-border-default rounded-md bg-bg-base">
              <span className="w-2 h-2 rounded-full bg-success" />
              <span className="text-[11px] text-text-muted font-mono">
                $ ssh edge-node --deploy-model
              </span>
            </div>

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
