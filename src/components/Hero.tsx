"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[620px] pt-24 pb-16 flex items-center overflow-hidden">
      {/* Background — subtle grid */}
      <div className="absolute inset-0 bg-bg-base">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        {/* Ambient glow */}
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2
          w-[500px] h-[500px] rounded-full opacity-[0.04]"
          style={{
            background:
              "radial-gradient(circle, #007acc 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 w-full">
        <div className="max-w-[640px]">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {/* Status badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-8
              border border-border-default rounded-md bg-bg-overlay">
              <span className="w-2 h-2 rounded-full bg-success shadow-[0_0_6px_rgba(63,185,80,0.4)]" />
              <span className="text-[11px] text-text-muted font-mono tracking-wide">
                system.status = ONLINE
              </span>
            </div>

            <h1 className="font-mono text-[32px] leading-[1.3] font-bold mb-4 tracking-tight">
              <span className="text-text-primary">Web3.0</span>
              <br />
              <span className="text-accent">Distributed Storage</span>
              <br />
              <span className="text-text-secondary">& Compute Network</span>
            </h1>

            <div className="space-y-2 mb-10">
              {[
                { icon: "▶", text: "Massive distributed node architecture", color: "text-success" },
                { icon: "●", text: "High security · High availability · Low cost", color: "text-accent" },
                { icon: "■", text: "Edge AI inference — latency < 50ms", color: "text-warning" },
              ].map((item) => (
                <p key={item.text} className="text-[13px] text-text-secondary font-mono leading-relaxed">
                  <span className={item.color}>{item.icon}</span>{" "}
                  {item.text}
                </p>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <Link href="/register" className="btn-primary">
                <span className="text-[10px] text-white/60">$</span>
                ./deploy --now
                <ArrowRight size={14} />
              </Link>
              <Link href="#products" className="btn-secondary">
                <span className="text-[10px] text-text-muted">$</span>
                cat README.md
              </Link>
            </div>

            {/* Stats */}
            <div className="flex gap-8 mt-12 pt-8 border-t border-border-muted">
              {[
                { val: "99.99%", label: "uptime", suffix: "" },
                { val: "<50ms", label: "latency", suffix: "p99" },
                { val: "1000+", label: "nodes", suffix: "edge" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-mono text-xl text-text-primary font-bold tracking-tight">
                    {stat.val}
                  </p>
                  <p className="text-[10px] text-text-muted font-mono mt-0.5">
                    {stat.label}
                    {stat.suffix && (
                      <span className="text-accent ml-1">.{stat.suffix}</span>
                    )}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
