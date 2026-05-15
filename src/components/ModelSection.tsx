"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ArrowRight } from "lucide-react";
import Link from "next/link";
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
    <section id="models" className="py-20 bg-bg-overlay relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="ide-section-label">
            {/* src/models/registry.ts */}
          </p>
          <h2 className="ide-section-title">
            const modelRegistry: AIModel[]
          </h2>
          <p className="text-[13px] text-text-secondary font-mono max-w-[520px] mx-auto">
            <span className="text-syntax-comment">// </span>
            Production-ready AI models for multiple industries
          </p>
        </div>

        {/* Search + Tabs */}
        <div className="flex flex-col sm:flex-row items-center gap-3 mb-10">
          <div className="relative w-full sm:w-64">
            <Search size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" />
            <input
              type="text"
              placeholder="$ grep -r ..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 bg-bg-base border border-border-default rounded-md
                text-[12px] text-text-primary placeholder:text-text-muted
                font-mono focus:outline-none focus:border-accent/60
                transition-all duration-200"
            />
          </div>
          <div className="flex gap-1.5 flex-wrap">
            {modelCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-3 py-1.5 text-[11px] font-mono rounded-md border transition-all ${
                  activeTab === cat
                    ? "bg-accent text-white border-accent"
                    : "bg-bg-base text-text-secondary border-border-default hover:border-accent/40 hover:text-text-link"
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
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.15 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {filtered.length > 0 ? (
              filtered.map((m) => (
                <div
                  key={m.id}
                  className="p-4 border border-border-default rounded-lg bg-bg-base
                    hover:border-accent/20 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] px-2 py-0.5 bg-bg-overlay border border-border-muted
                      rounded-md text-syntax-function font-mono">
                      {m.category}
                    </span>
                  </div>
                  <h3 className="font-mono text-[13px] font-bold text-text-primary mb-2">
                    {m.name}
                  </h3>
                  <p className="text-[12px] text-text-secondary font-mono leading-relaxed mb-3">
                    {m.description}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {m.tags.map((tag) => (
                      <span key={tag} className="text-[10px] px-1.5 py-0.5 bg-bg-overlay
                        rounded-md text-text-muted font-mono">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full py-16 text-center">
                <p className="font-mono text-[13px] text-text-muted">
                  $ grep: no matches found
                </p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* View all link */}
        <div className="text-center mt-8">
          <Link
            href="/models"
            className="inline-flex items-center gap-1.5 text-[11px] font-mono
              text-text-link hover:underline transition-all"
          >
            view all {aiModels.length} models
            <ArrowRight size={12} />
          </Link>
        </div>
      </div>
    </section>
  );
}
