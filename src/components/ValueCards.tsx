"use client";

import { motion } from "framer-motion";

const values = [
  { icon: "🔒", key: "secure", title: "More Secure", desc: "Anti single-point failure. Reduce attack and fault impact." },
  { icon: "✓", key: "trusted", title: "More Trusted", desc: "Immutable data. Trust based on rules, not institutions." },
  { icon: "⬇", key: "economical", title: "More Economical", desc: "Lower hardware & ops cost. Optimize resource utilization." },
  { icon: "⚡", key: "efficient", title: "More Efficient", desc: "Higher throughput, parallel processing, better resource usage." },
];

export default function ValueCards() {
  return (
    <section className="py-20 bg-bg-overlay relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header — IDE style */}
        <div className="mb-12">
          <p className="ide-section-label">
            {/* src/components/ValueCards.tsx */}
          </p>
          <h2 className="ide-section-title">
            export const values: Value[]
          </h2>
          <p className="text-[13px] text-text-secondary font-mono">
            <span className="text-syntax-comment">// </span>
            Four core principles of the distributed network
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {values.map((v, i) => (
            <motion.div
              key={v.key}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.06 }}
              className="group p-5 border border-border-default rounded-lg bg-bg-base
                hover:border-accent/30 hover:shadow-[0_0_20px_rgba(0,122,204,0.06)]
                transition-all duration-300"
            >
              {/* Key — syntax highlighted */}
              <p className="font-mono text-[11px] text-syntax-keyword mb-3">
                {v.icon} {v.key}
              </p>

              <h3 className="font-mono text-[13px] font-bold text-text-primary mb-2">
                {v.title}
              </h3>

              <p className="text-[12px] text-text-secondary font-mono leading-relaxed">
                {v.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
