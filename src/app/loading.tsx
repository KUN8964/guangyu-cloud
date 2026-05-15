"use client";

export default function Loading() {
  return (
    <div className="min-h-screen bg-[#0d1117] flex items-center justify-center">
      <div className="text-center space-y-6">
        {/* Terminal cursor */}
        <div className="inline-flex items-center gap-3 px-4 py-2 border border-[#333] rounded-md bg-[#1e1e1e]">
          <span className="w-2 h-2 rounded-full bg-warning shadow-[0_0_6px_rgba(210,153,34,0.4)]" />
          <span className="text-[13px] text-[#999] font-mono">
            $ next build --watch
          </span>
          <span className="w-2 h-4 bg-accent animate-pulse rounded-sm" />
        </div>

        {/* Progress bar */}
        <div className="w-48 h-1 bg-[#21262d] rounded-full mx-auto overflow-hidden">
          <div className="h-full bg-accent rounded-full animate-[loading_1.5s_ease-in-out_infinite]"
            style={{
              animation: "loading 1.5s ease-in-out infinite",
            }}
          />
        </div>

        <p className="text-[11px] text-[#484f58] font-mono">
          Compiling...
        </p>

        <style>{`
          @keyframes loading {
            0% { width: 0%; margin-left: 0; }
            50% { width: 60%; margin-left: 20%; }
            100% { width: 0%; margin-left: 100%; }
          }
        `}</style>
      </div>
    </div>
  );
}
