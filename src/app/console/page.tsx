"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  Server,
  HardDrive,
  Cpu,
  Activity,
  LogOut,
  Terminal,
  ChevronRight,
} from "lucide-react";
import IDEWindow from "@/components/IDEWindow";
import { useAuth } from "@/contexts/AuthContext";
import { mockConsoleStats, type ConsoleStats } from "@/data/mock-console";

/* ═══════════════════════════════════════════
   Console Dashboard — IDE Terminal Theme
   ═══════════════════════════════════════════ */

function StatCard({
  icon: Icon,
  label,
  value,
  sub,
  color,
  progress,
}: {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  label: string;
  value: string;
  sub: string;
  color: string;
  progress?: number;
}) {
  return (
    <div className="p-4 rounded-lg bg-bg-base border border-border-muted hover:border-border-default transition-all duration-200">
      <div className="flex items-center justify-between mb-2">
        <span className="text-[10px] text-text-muted font-mono uppercase tracking-wider">
          {label}
        </span>
        <Icon size={14} className={color} />
      </div>
      <div className="text-xl font-mono font-bold text-text-primary mb-0.5">
        {value}
      </div>
      <div className="text-[10px] text-text-muted font-mono">{sub}</div>
      {progress !== undefined && (
        <div className="mt-2 h-1 rounded-full bg-bg-overlay overflow-hidden">
          <div
            className={`h-full rounded-full transition-all duration-500 ${color.replace("text-", "bg-")}`}
            style={{ width: `${Math.min(100, progress)}%`, opacity: 0.6 }}
          />
        </div>
      )}
    </div>
  );
}

function UsageChart({ data }: { data: ConsoleStats["usageHistory"] }) {
  const maxStorage = Math.max(...data.map((d) => d.storage));
  const maxCompute = Math.max(...data.map((d) => d.compute));
  const max = Math.max(maxStorage, maxCompute) * 1.15;
  const recent = data.slice(-14); // 最近14天

  return (
    <div className="p-4 rounded-lg bg-bg-base border border-border-muted">
      <div className="flex items-center justify-between mb-3">
        <span className="text-[10px] text-text-muted font-mono uppercase tracking-wider">
          用量趋势 (14天)
        </span>
        <div className="flex items-center gap-3 text-[9px] font-mono">
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-sm bg-accent/60" /> 存储
          </span>
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-sm bg-syntax-keyword/60" /> 算力
          </span>
        </div>
      </div>
      <div className="flex items-end gap-[2px] h-24">
        {recent.map((d, i) => {
          const sH = (d.storage / max) * 100;
          const cH = (d.compute / max) * 100;
          return (
            <div
              key={i}
              className="flex-1 flex flex-col justify-end gap-[1px]"
              title={`${d.day}: 存储 ${d.storage}GB / 算力 ${d.compute} TFLOPS·h`}
            >
              <div
                className="w-full rounded-t-sm bg-accent/50 hover:bg-accent/70 transition-colors"
                style={{ height: `${sH}%`, minHeight: sH > 0 ? 2 : 0 }}
              />
              <div
                className="w-full rounded-t-sm bg-syntax-keyword/40 hover:bg-syntax-keyword/60 transition-colors"
                style={{ height: `${cH}%`, minHeight: cH > 0 ? 2 : 0 }}
              />
            </div>
          );
        })}
      </div>
      <div className="flex justify-between mt-1.5 text-[8px] text-text-muted font-mono">
        <span>14天前</span>
        <span>今天</span>
      </div>
    </div>
  );
}

function EventLog({ events }: { events: ConsoleStats["recentEvents"] }) {
  const typeIcons: Record<string, string> = {
    deploy: "📦",
    storage: "💾",
    compute: "⚡",
    alert: "⚠️",
    billing: "💰",
  };
  const typeColors: Record<string, string> = {
    deploy: "text-syntax-function",
    storage: "text-accent",
    compute: "text-warning",
    alert: "text-error",
    billing: "text-syntax-keyword",
  };

  return (
    <div className="rounded-lg bg-bg-base border border-border-muted overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2.5 bg-bg-bar border-b border-border-muted">
        <div className="flex items-center gap-2 text-[10px] text-text-muted font-mono">
          <Terminal size={11} />
          <span>RECENT EVENTS</span>
        </div>
        <span className="text-[9px] text-text-muted font-mono">
          {events.length} entries
        </span>
      </div>
      <div className="divide-y divide-border-muted">
        {events.map((e) => (
          <div
            key={e.id}
            className="flex items-center gap-3 px-4 py-2.5 hover:bg-bg-overlay/50 transition-colors"
          >
            <span className="text-xs shrink-0">{typeIcons[e.type] || "•"}</span>
            <span className="flex-1 text-[11px] text-text-secondary font-mono truncate">
              {e.message}
            </span>
            <span className="text-[9px] text-text-muted font-mono shrink-0">
              {e.time}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ConsolePage() {
  const router = useRouter();
  const { user, isAuthenticated, logout } = useAuth();
  const stats = mockConsoleStats;

  useEffect(() => {
    if (!isAuthenticated) router.replace("/login");
  }, [isAuthenticated, router]);

  if (!user) return null;

  const handleLogout = () => {
    logout();
    router.push("/");
  };

  const storagePercent = (stats.storageUsed / stats.storageQuota) * 100;
  const computePercent = (stats.computeUsed / stats.computeQuota) * 100;

  return (
    <div className="min-h-screen px-4 py-20">
      {/* Top bar */}
      <div className="max-w-5xl mx-auto mb-6 flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2 text-[11px] text-text-muted font-mono mb-1">
            <ChevronRight size={12} className="text-syntax-keyword" />
            <span>/console</span>
            <span className="text-syntax-comment">// 控制台</span>
          </div>
          <h1 className="text-sm text-text-primary font-mono">
            <span className="text-syntax-keyword">const</span>{" "}
            <span className="text-syntax-function">dashboard</span>{" "}
            <span className="text-text-muted">=</span>{" "}
            <span className="text-syntax-string">&quot;{user.phone}&quot;</span>
          </h1>
        </div>
        <button
          onClick={handleLogout}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-md
            border border-border-muted text-[11px] text-text-muted
            hover:text-error hover:border-error/40 font-mono
            transition-all duration-200"
        >
          <LogOut size={12} />
          退出登录
        </button>
      </div>

      {/* Stats grid */}
      <div className="max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
        <StatCard
          icon={Server}
          label="在线节点"
          value={`${stats.onlineNodes}`}
          sub={`/ ${stats.totalNodes} 总数`}
          color="text-success"
          progress={(stats.onlineNodes / stats.totalNodes) * 100}
        />
        <StatCard
          icon={HardDrive}
          label="存储用量"
          value={`${stats.storageUsed} GB`}
          sub={`${stats.storageQuota} GB 配额`}
          color="text-accent"
          progress={storagePercent}
        />
        <StatCard
          icon={Cpu}
          label="算力消耗"
          value={`${stats.computeUsed} TFLOPS·h`}
          sub={`${stats.computeQuota} 配额`}
          color="text-warning"
          progress={computePercent}
        />
        <StatCard
          icon={Activity}
          label="活跃任务"
          value={`${stats.activeJobs}`}
          sub="运行中"
          color="text-syntax-function"
        />
      </div>

      {/* Usage chart + Events */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4">
        <UsageChart data={stats.usageHistory} />
        <EventLog events={stats.recentEvents} />
      </div>

      {/* Footer */}
      <div className="max-w-5xl mx-auto mt-6 text-center">
        <span className="text-[10px] text-text-muted font-mono">
          guangyu-cloud v0.1.0 — 演示环境 · 数据为模拟值
        </span>
      </div>
    </div>
  );
}
