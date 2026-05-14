"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Cpu } from "lucide-react";
import { aiModels, modelCategories } from "@/data/solutions";

export default function ModelSection() {
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
    <section id="models" className="py-24 bg-void relative">
      <div className="absolute inset-0 bg-pixel-grid-large opacity-30" />

      <div className="relative max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="text-center mb-12"
        >
          <p className="font-[family-name:var(--font-vt323)] text-lg text-neon-purple mb-3 tracking-widest">
            &gt; AI_MODELS_
          </p>
          <h2 className="font-[family-name:var(--font-press-start)] text-2xl tracking-wider
            neon-cyan mb-4">
            AI 模型服务
          </h2>
          <p className="text-text-secondary max-w-[520px] mx-auto text-sm">
            <span className="text-neon-gold">▸</span>{" "}
            面向多行业，提供开箱即用、高精准的分布式 AI 算法模型
          </p>
        </motion.div>

        {/* Search + Tabs */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-12">
          <div className="relative w-full sm:w-72">
            <Search
              size={14}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-neon-cyan/50"
            />
            <input
              type="text"
              placeholder="> 输入关键词搜索..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-abyss border border-border/40
                text-sm text-text-primary placeholder:text-text-muted
                font-[family-name:var(--font-vt323)] tracking-wider
                focus:outline-none focus:border-neon-cyan/60 focus:shadow-[0_0_12px_rgba(0,240,255,0.15)]
                transition-all duration-200"
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            {modelCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-4 py-2 text-xs font-[family-name:var(--font-press-start)] tracking-wider
                  border transition-all duration-200 ${
                    activeTab === cat
                      ? "bg-neon-cyan text-abyss border-neon-cyan shadow-[0_0_12px_rgba(0,240,255,0.3)]"
                      : "bg-surface text-text-secondary border-border/30 hover:border-neon-cyan/40 hover:text-neon-cyan"
                  }`}
              >
                [{cat}]
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab + search}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.length > 0 ? (
              filtered.map((m, i) => (
                <div
                  key={m.id}
                  className="group p-6 bg-card border border-border/30
                    hover:border-neon-purple/40 hover:shadow-[0_0_20px_rgba(180,76,255,0.1)]
                    transition-all duration-300"
                >
                  {/* Category badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] px-3 py-1 bg-neon-purple/10 border border-neon-purple/20
                      text-neon-purple font-[family-name:var(--font-press-start)] tracking-wider">
                      {m.category}
                    </span>
                    <Cpu size={14} className="text-text-muted group-hover:text-neon-purple
                      transition-colors duration-300" />
                  </div>

                  <h3 className="font-[family-name:var(--font-press-start)] text-xs tracking-wider
                    text-text-primary mb-3">
                    {m.name}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed mb-4">
                    {m.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {m.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] px-2 py-1 bg-surface border border-border/20
                          text-text-muted font-[family-name:var(--font-vt323)] tracking-wider"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full py-20 text-center">
                <p className="font-[family-name:var(--font-vt323)] text-lg text-text-muted tracking-wider">
                  &gt; 404_MODEL_NOT_FOUND_
                </p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
