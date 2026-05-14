"use client";

import IDEWindow from "@/components/IDEWindow";

export default function IDEDemoPage() {
  return (
    <div className="min-h-screen bg-[#0d1117] flex flex-col items-center justify-center gap-16 p-8">
      {/* ═══ Demo 1: IDEWindow with code ═══ */}
      <IDEWindow
        title="光宇云 IDE Theme Preview"
        tabs={[
          { label: "design-system.tsx", active: true },
          { label: "globals.css", active: false },
          { label: "tailwind.config.ts", active: false },
        ]}
      >
        <div className="space-y-8">
          {/* Color palette */}
          <div>
            <h3 className="text-[#ccc] text-sm font-bold font-mono mb-4">
              // Color Palette
            </h3>
            <div className="grid grid-cols-4 sm:grid-cols-8 gap-3">
              {[
                { color: "#0d1117", label: "bg-base" },
                { color: "#161b22", label: "bg-overlay" },
                { color: "#1e1e1e", label: "bg-surface" },
                { color: "#2d2d2d", label: "bg-bar" },
                { color: "#007acc", label: "accent" },
                { color: "#f85149", label: "error" },
                { color: "#3fb950", label: "success" },
                { color: "#d29922", label: "warning" },
              ].map((item) => (
                <div key={item.label} className="text-center">
                  <div
                    className="w-12 h-12 rounded-lg border border-[#333] mx-auto mb-1.5"
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-[#666] text-[10px] font-mono">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Typography */}
          <div>
            <h3 className="text-[#ccc] text-sm font-bold font-mono mb-4">
              // Typography
            </h3>
            <div className="space-y-3 font-mono">
              <p className="text-white text-lg font-bold">
                Heading — Inter / JetBrains Mono Bold 18px
              </p>
              <p className="text-[#c9d1d9] text-sm">
                Body text — Consolas / Fira Code 14px, leading-relaxed
              </p>
              <p className="text-[#999] text-xs">
                Secondary — Monospace 12px, used for metadata
              </p>
              <p className="text-[#666] text-[11px]">
                Tertiary — 11px, file paths, line numbers
              </p>
            </div>
          </div>

          {/* Code snippet example */}
          <div>
            <h3 className="text-[#ccc] text-sm font-bold font-mono mb-4">
              // Code Block
            </h3>
            <div className="rounded-lg border border-[#333] bg-[#0d1117] overflow-hidden">
              <div className="flex items-center px-4 py-2 bg-[#161b22] border-b border-[#333]">
                <span className="text-[#999] text-xs font-mono">
                  📄 src/components/IDEWindow.tsx
                </span>
              </div>
              <div className="p-5 font-mono text-sm leading-7 overflow-x-auto">
                {[
                  { n: 1, t: 'import { type ReactNode } from "react"', h: false },
                  { n: 2, t: "", h: false },
                  { n: 3, t: "export default function IDEWindow({", h: false },
                  { n: 4, t: "  title,", h: false },
                  { n: 5, t: "  children,", h: false },
                  { n: 6, t: '  showDots = true,', h: true },
                  { n: 7, t: "}: IDEWindowProps) {", h: false },
                  { n: 8, t: "  return (", h: false },
                  { n: 9, t: '    <div className="rounded-xl border">', h: false },
                  { n: 10, t: "      {/* Title bar */}", h: false },
                  { n: 11, t: "      <div className='flex items-center'>", h: false },
                  { n: 12, t: "        {showDots && <Dots />}", h: false },
                  { n: 13, t: "        <span>{title}</span>", h: false },
                ].map((line) => (
                  <div
                    key={line.n}
                    className={`flex ${
                      line.h ? "bg-[#007acc]/10 border-l-2 border-[#007acc] -mx-5 px-5" : ""
                    }`}
                  >
                    <span className="text-[#444] w-8 text-right pr-4 select-none shrink-0">
                      {line.n}
                    </span>
                    <span className={line.h ? "text-[#79c0ff]" : "text-[#c9d1d9]"}>
                      {line.t}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Interactive elements */}
          <div>
            <h3 className="text-[#ccc] text-sm font-bold font-mono mb-4">
              // Actions
            </h3>
            <div className="flex flex-wrap gap-3">
              <button className="px-5 py-2.5 rounded-md bg-[#007acc] text-white font-bold text-sm
                hover:bg-[#1a8ad4] transition-colors font-mono border border-[#007acc]">
                Primary Action
              </button>
              <button className="px-5 py-2.5 rounded-md bg-[#333] text-white font-bold text-sm
                hover:bg-[#444] transition-colors font-mono border border-[#444]">
                Secondary
              </button>
              <button className="px-5 py-2.5 rounded-md border border-red-500/30 text-red-400
                font-bold text-sm hover:bg-red-500/10 transition-colors font-mono">
                Destructive
              </button>
              <span className="px-3 py-1.5 rounded-md bg-[#1e1e1e] text-[#999]
                font-mono text-xs border border-[#333] inline-flex items-center">
                Badge / Tag
              </span>
            </div>
          </div>
        </div>
      </IDEWindow>

      {/* ═══ Demo 2: IDEWindow minimal ═══ */}
      <IDEWindow
        title="Minimal Window — no dots, no tabs"
        showDots={false}
        maxWidth="max-w-md"
      >
        <div className="text-center py-8">
          <p className="text-[#c9d1d9] font-mono text-sm mb-4">
            This is a minimal IDEWindow variant.
          </p>
          <p className="text-[#666] font-mono text-xs">
            Used for simple modals, notifications, or widgets.
          </p>
        </div>
      </IDEWindow>
    </div>
  );
}
