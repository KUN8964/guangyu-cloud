"use client";

import IDEWindow from "@/components/IDEWindow";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[calc(100vh-96px)] flex items-center justify-center py-8">
      <IDEWindow
        title="404 Not Found — 光宇云"
        maxWidth="max-w-2xl"
        tabs={[
          { label: "404.tsx", active: true },
          { label: "router.ts", active: false },
          { label: "sitemap.xml", active: false },
        ]}
      >
        <div className="space-y-6">
          {/* Status badge */}
          <div className="flex items-center gap-3">
            <span className="px-3 py-1.5 rounded-md bg-warning-bg text-warning font-mono text-sm font-bold border border-warning/20">
              404
            </span>
            <span className="px-3 py-1.5 rounded-md bg-[#1e1e1e] text-[#999] font-mono text-xs border border-[#333]">
              Client Error
            </span>
            <span className="px-3 py-1.5 rounded-md bg-[#1e1e1e] text-[#666] font-mono text-xs border border-[#333]">
              HTTP_NOT_FOUND
            </span>
          </div>

          {/* Error message */}
          <div>
            <h2 className="text-xl font-bold text-warning font-mono leading-relaxed">
              Error: ENOTFOUND — 页面未找到
            </h2>
            <p className="text-[#666] text-sm mt-1 font-mono">
              The requested path could not be resolved
            </p>
          </div>

          {/* Code block */}
          <div className="rounded-lg overflow-hidden border border-[#333] bg-[#0d1117]">
            <div className="flex items-center gap-3 px-4 py-2.5 bg-[#161b22] border-b border-[#333]">
              <span className="text-[#999] text-xs font-mono">
                ⚛️ src/app/not-found.tsx
              </span>
            </div>

            <div className="p-4 font-mono text-sm leading-7 overflow-x-auto">
              {[
                { n: 1, t: 'export default function NotFound() {', h: false },
                { n: 2, t: '  const path = usePathname()', h: false },
                { n: 3, t: "", h: false },
                { n: 4, t: "  // Route resolution failed", h: false },
                { n: 5, t: '  if (!isValidRoute(path)) {', h: false },
                { n: 6, t: '    throw new NotFoundError(', h: true },
                { n: 7, t: '      `Route "${path}" not found`', h: true },
                { n: 8, t: "    )", h: true },
                { n: 9, t: "  }", h: false },
                { n: 10, t: "}", h: false },
              ].map((line) => (
                <div
                  key={line.n}
                  className={`flex ${
                    line.h ? "bg-warning/5 border-l-2 border-warning -mx-4 px-4" : ""
                  }`}
                >
                  <span className="text-[#444] w-8 text-right pr-4 select-none shrink-0">
                    {line.n}
                  </span>
                  <span className={line.h ? "text-[#d29922]" : "text-[#c9d1d9]"}>
                    {line.t}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Suggestions */}
          <div>
            <h3 className="text-sm font-bold text-[#ccc] font-mono mb-3">
              // Possible Solutions
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { cmd: "cd /", desc: "返回首页" },
                { cmd: "ls /products", desc: "浏览产品" },
                { cmd: "ls /solutions", desc: "查看方案" },
                { cmd: "grep sitemap", desc: "站点地图" },
              ].map((item) => (
                <div
                  key={item.cmd}
                  className="flex items-start gap-3 p-3 border border-[#333] rounded-lg bg-[#1e1e1e]
                    hover:border-accent/20 transition-all duration-200"
                >
                  <span className="text-[10px] text-[#666] font-mono mt-0.5 shrink-0">$</span>
                  <div>
                    <p className="text-[12px] text-[#c9d1d9] font-mono">{item.cmd}</p>
                    <p className="text-[10px] text-[#555] font-mono mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-2">
            <Link
              href="/"
              className="px-5 py-2.5 rounded-md bg-[#007acc] text-white font-bold text-sm
                hover:bg-[#1a8ad4] transition-colors font-mono
                border border-[#007acc] shadow-lg shadow-[#007acc]/20"
            >
              cd / (返回首页)
            </Link>
            <Link
              href="/solutions"
              className="px-5 py-2.5 rounded-md bg-[#333] text-white font-bold text-sm
                hover:bg-[#444] transition-colors font-mono border border-[#444]"
            >
              浏览方案
            </Link>
          </div>

          <p className="text-[#555] text-xs font-mono">
            If you believe this is an error, please contact support.
          </p>
        </div>
      </IDEWindow>
    </div>
  );
}
