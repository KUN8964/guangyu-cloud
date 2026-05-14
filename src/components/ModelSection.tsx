"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search } from "lucide-react";
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
    <section id="models" className="py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="text-center mb-10"
        >
          <h2 className="text-[28px] font-semibold text-[#1A1A2E] mb-3">
            AI 模型服务
          </h2>
          <p className="text-[#4A4A5E] max-w-[520px] mx-auto">
            面向智慧水务等多行业，提供开箱即用、高精准的分布式 AI 算法模型
          </p>
        </motion.div>

        {/* Search + Tabs */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-10">
          <div className="relative w-full sm:w-64">
            <Search
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8E8E9A]"
            />
            <input
              type="text"
              placeholder="输入关键词搜索模型"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-black/6 bg-[#F8FAFB] text-sm text-[#1A1A2E] placeholder:text-[#8E8E9A] focus:outline-none focus:border-[#2D5BFF] focus:ring-1 focus:ring-[#2D5BFF]/20 transition-all duration-150"
            />
          </div>
          <div className="flex gap-1.5 flex-wrap">
            {modelCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-150 ${
                  activeTab === cat
                    ? "bg-[#2D5BFF] text-white"
                    : "bg-[#F6F6F6] text-[#4A4A5E] hover:bg-[#EDEDED]"
                }`}
              >
                {cat}
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
                  className="group p-6 rounded-xl border border-black/5 bg-white hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-200"
                >
                  <span className="text-xs px-2 py-0.5 rounded-full bg-[#2D5BFF]/10 text-[#2D5BFF] font-medium">
                    {m.category}
                  </span>
                  <h3 className="text-lg font-semibold text-[#1A1A2E] mt-3 mb-2">
                    {m.name}
                  </h3>
                  <p className="text-sm text-[#4A4A5E] leading-relaxed mb-3">
                    {m.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {m.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-0.5 rounded bg-[#F6F6F6] text-[#8E8E9A]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full py-16 text-center">
                <p className="text-[#8E8E9A]">没有找到匹配的模型</p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
