"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CTAStrip() {
  return (
    <section className="py-20 bg-bg-base relative overflow-hidden">
      {/* Subtle accent glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2
        w-[400px] h-[200px] rounded-t-full opacity-[0.04]"
        style={{
          background: "linear-gradient(to top, #007acc, transparent)",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
        >
          {/* Terminal prompt */}
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2
            border border-border-default rounded-md bg-bg-overlay">
            <span className="w-2 h-2 rounded-full bg-success" />
            <span className="text-[11px] text-text-muted font-mono">
              $ ssh guangyu-cloud --edge
            </span>
          </div>

          <h2 className="font-mono text-2xl font-bold text-text-primary mb-4">
            Deploy your first edge node
          </h2>

          <p className="text-[13px] text-text-secondary font-mono mb-8 max-w-[420px] mx-auto">
            <span className="text-syntax-comment"># </span>
            Register for free trial credits. No credit card required.
            <br />
            <span className="text-[11px] text-text-muted mt-1.5 block">
              Join 1000+ edge nodes in the network
            </span>
          </p>

          <Link href="/register" className="btn-primary text-[12px] !py-3 !px-8">
            <span className="text-[10px] text-white/60">$</span>
            ./deploy --free-trial
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
