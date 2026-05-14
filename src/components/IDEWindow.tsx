"use client";

import { type ReactNode } from "react";

/* ═══════════════════════════════════════════
   IDEWindow — IDE-style window frame
   Inspired by VS Code / JetBrains dark theme
   ═══════════════════════════════════════════ */

type IDEWindowProps = {
  title: string;
  children: ReactNode;
  className?: string;
  /** Show traffic light dots (red/yellow/green) */
  showDots?: boolean;
  /** Optional tabs row below title bar */
  tabs?: { label: string; active?: boolean }[];
  /** Window width constraint */
  maxWidth?: string;
};

export default function IDEWindow({
  title,
  children,
  className = "",
  showDots = true,
  tabs,
  maxWidth = "max-w-4xl",
}: IDEWindowProps) {
  return (
    <div className={`w-full ${maxWidth} mx-auto ${className}`}>
      {/* Window frame */}
      <div className="rounded-xl overflow-hidden border border-[#333] bg-[#1e1e1e] shadow-2xl shadow-black/50">
        {/* ═══ Title bar ═══ */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-[#2d2d2d] border-b border-[#333] select-none">
          {/* Left: traffic lights */}
          <div className="flex items-center gap-2.5">
            {showDots && (
              <>
                <span className="w-3 h-3 rounded-full bg-[#ff5f56] cursor-default" />
                <span className="w-3 h-3 rounded-full bg-[#ffbd2e] cursor-default" />
                <span className="w-3 h-3 rounded-full bg-[#27c93f] cursor-default" />
              </>
            )}
            {/* Title */}
            <span className="text-[13px] text-[#ccc] font-medium ml-2 tracking-wide">
              {title}
            </span>
          </div>

          {/* Right: window controls (optional) */}
          <div className="flex items-center gap-2 text-[#666] text-xs">
            <span className="w-4 h-4 flex items-center justify-center hover:text-[#ccc] cursor-pointer">
              ─
            </span>
            <span className="w-4 h-4 flex items-center justify-center hover:text-[#ccc] cursor-pointer">
              □
            </span>
            <span className="w-4 h-4 flex items-center justify-center hover:text-[#ff5f56] cursor-pointer">
              ✕
            </span>
          </div>
        </div>

        {/* ═══ Tabs (optional) ═══ */}
        {tabs && tabs.length > 0 && (
          <div className="flex bg-[#252526] border-b border-[#333] overflow-x-auto">
            {tabs.map((tab, i) => (
              <div
                key={i}
                className={`flex items-center gap-2 px-4 py-2 text-[13px] border-r border-[#333]
                  cursor-pointer select-none transition-colors
                  ${
                    tab.active
                      ? "bg-[#1e1e1e] text-white border-t-2 border-t-[#007acc]"
                      : "text-[#999] hover:bg-[#2a2a2a]"
                  }`}
              >
                <span className="text-[11px] opacity-50">
                  {tab.active ? "●" : "○"}
                </span>
                {tab.label}
                {tab.active && (
                  <span className="text-[#666] hover:text-[#ccc] ml-1">×</span>
                )}
              </div>
            ))}
            {/* Empty space after last tab */}
            <div className="flex-1" />
          </div>
        )}

        {/* ═══ Content ═══ */}
        <div className="p-6">{children}</div>
      </div>

      {/* Subtle reflection / ambient glow */}
      <div
        className="h-px mx-8 opacity-30"
        style={{
          background:
            "linear-gradient(90deg, transparent, #3a3a3a, transparent)",
        }}
      />
    </div>
  );
}
