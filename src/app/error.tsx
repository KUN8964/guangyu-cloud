"use client";

import IDEWindow from "@/components/IDEWindow";
import { useEffect, useState } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  // Extract file path from error stack if available
  const stackLines = error.stack?.split("\n") || [];
  const fileMatch = stackLines[1]?.match(/\((.+)\)/) || stackLines[1]?.match(/at (.+)/);
  const fileInfo = fileMatch ? fileMatch[0].replace(/[()]/g, "") : "unknown";

  // Simulate code snippet around the error line
  const [showIgnored, setShowIgnored] = useState(false);

  return (
    <html lang="zh-CN">
      <body className="min-h-screen bg-[#0d1117] flex items-center justify-center p-4">
        <IDEWindow
          title="Runtime Error — 光宇云"
          maxWidth="max-w-3xl"
          tabs={[
            { label: "error.tsx", active: true },
            { label: "layout.tsx", active: false },
            { label: "page.tsx", active: false },
          ]}
        >
          <div className="space-y-6">
            {/* Error type badge */}
            <div className="flex items-center gap-3">
              <span className="px-3 py-1.5 rounded-md bg-red-500/15 text-red-400 font-mono text-sm font-bold border border-red-500/30">
                {error.name || "RuntimeError"}
              </span>
              <span className="px-3 py-1.5 rounded-md bg-[#1e1e1e] text-[#999] font-mono text-xs border border-[#333]">
                Server Component
              </span>
              {error.digest && (
                <span className="px-3 py-1.5 rounded-md bg-[#1e1e1e] text-[#666] font-mono text-xs border border-[#333]">
                  digest: {error.digest.slice(0, 8)}
                </span>
              )}
            </div>

            {/* Error message */}
            <div>
              <h2 className="text-xl font-bold text-red-400 font-mono leading-relaxed">
                {error.message || "An unexpected error occurred"}
              </h2>
              <p className="text-[#666] text-sm mt-1 font-mono">
                {fileInfo}
              </p>
            </div>

            {/* Code snippet */}
            <div className="rounded-lg overflow-hidden border border-[#333] bg-[#0d1117]">
              <div className="flex items-center gap-3 px-4 py-2.5 bg-[#161b22] border-b border-[#333]">
                <span className="text-[#999] text-xs font-mono">
                  ⚛️ {fileInfo}
                </span>
              </div>

              <div className="p-4 font-mono text-sm leading-7 overflow-x-auto">
                <CodeBlock />
              </div>
            </div>

            {/* Call stack */}
            <div>
              <div className="flex items-center justify-between mb-2.5">
                <h3 className="text-sm font-bold text-[#ccc] font-mono">
                  Call Stack
                </h3>
                <button
                  onClick={() => setShowIgnored(!showIgnored)}
                  className="text-[#666] text-xs hover:text-[#999] font-mono transition-colors"
                >
                  {showIgnored ? "Hide" : "Show"} {stackLines.length - 1} frames
                </button>
              </div>

              {showIgnored && (
                <div className="rounded-lg border border-[#333] bg-[#0d1117] divide-y divide-[#1e1e1e]">
                  {stackLines.slice(1, 6).map((line, i) => (
                    <div key={i} className="px-4 py-2.5">
                      <div className="text-[#ccc] text-xs font-mono truncate">
                        {line.trim()}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Actions */}
            <div className="flex gap-3 pt-2">
              <button
                onClick={reset}
                className="px-5 py-2.5 rounded-md bg-[#007acc] text-white font-bold text-sm
                  hover:bg-[#1a8ad4] transition-colors font-mono
                  border border-[#007acc] shadow-lg shadow-[#007acc]/20"
              >
                Try Again
              </button>
              <button
                onClick={() => (window.location.href = "/")}
                className="px-5 py-2.5 rounded-md bg-[#333] text-white font-bold text-sm
                  hover:bg-[#444] transition-colors font-mono border border-[#444]"
              >
                Go Home
              </button>
            </div>

            {/* Dig deeper hint */}
            <p className="text-[#555] text-xs font-mono">
              This error happened while rendering the page. Check the server
              console for more details.
            </p>
          </div>
        </IDEWindow>
      </body>
    </html>
  );
}

/* ═══════════════════════════════════════════
   Simulated code block for demo
   ═══════════════════════════════════════════ */

function CodeBlock() {
  const code = [
    "import Link from 'next/link'",
    "import { Phone, Mail } from 'lucide-react'",
    "",
    "export default function Footer() {",
    "  return (",
    "    <footer className='bg-abyss border-t'>",
    "      <div className='max-w-6xl mx-auto px-6 py-16'>",
    "        <div className='flex items-center gap-3 mb-5'>",
    "          <Zap size={16} className='text-abyss' />  {/* ← Error */}",
    "          <span>光宇云</span>",
    "        </div>",
    "      </div>",
    "    </footer>",
    "  )",
    "}",
  ];

  const errorLine = 8; // 0-indexed: line 9 with the Zap component

  return (
    <>
      {code.map((line, i) => (
        <div
          key={i}
          className={`flex ${
            i === errorLine
              ? "bg-red-500/10 border-l-2 border-red-500 -mx-4 px-4"
              : ""
          }`}
        >
          <span className="text-[#444] w-10 text-right pr-4 select-none shrink-0">
            {i + 1}
          </span>
          <span
            className={
              i === errorLine
                ? "text-red-300"
                : "text-[#c9d1d9]"
            }
          >
            {line}
          </span>
        </div>
      ))}
    </>
  );
}
