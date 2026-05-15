"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const regions = [
  { name: "华北", nodes: 286, status: "online" },
  { name: "华东", nodes: 412, status: "online" },
  { name: "华南", nodes: 198, status: "online" },
  { name: "西南", nodes: 145, status: "online" },
  { name: "华中", nodes: 167, status: "online" },
  { name: "西北", nodes: 89, status: "pending" },
  { name: "东北", nodes: 73, status: "pending" },
];

export default function NodeMapSection() {
  return (
    <section className="py-20 bg-bg-overlay relative overflow-hidden">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="ide-section-label">
            {/* src/network/topology.ts */}
          </p>
          <h2 className="ide-section-title">
            interface NodeTopology
          </h2>
          <p className="text-[13px] text-text-secondary font-mono max-w-[520px] mx-auto">
            <span className="text-syntax-comment">// </span>
            全国代理商节点及分布式 Web3.0 网络拓扑
          </p>
        </div>

        {/* Region grid — terminal table style */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3 mb-10">
          {regions.map((region, i) => (
            <motion.div
              key={region.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.25, delay: i * 0.04 }}
              className="group p-4 border border-border-default rounded-lg bg-bg-base
                hover:border-accent/30 transition-all duration-300 text-center"
            >
              <MapPin
                size={16}
                className={`mx-auto mb-2 ${
                  region.status === "online"
                    ? "text-success"
                    : "text-warning"
                }`}
              />
              <p className="font-mono text-[12px] text-text-primary font-bold">
                {region.name}
              </p>
              <p className="font-mono text-[20px] text-accent font-bold mt-1">
                {region.nodes}
              </p>
              <p className="text-[10px] text-text-muted font-mono mt-0.5">
                {region.status === "online" ? "● online" : "◌ deploying"}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Summary status bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-4 text-center"
        >
          <div className="px-4 py-2 border border-border-default rounded-md bg-bg-base">
            <p className="text-[10px] text-text-muted font-mono">
              $ nodes --count
            </p>
            <p className="font-mono text-sm text-success font-bold">
              {regions.reduce((sum, r) => sum + r.nodes, 0).toLocaleString()}+
            </p>
          </div>
          <div className="px-4 py-2 border border-border-default rounded-md bg-bg-base">
            <p className="text-[10px] text-text-muted font-mono">
              $ nodes --status online
            </p>
            <p className="font-mono text-sm text-success font-bold">
              {regions.filter((r) => r.status === "online").length}/7 regions
            </p>
          </div>
          <div className="px-4 py-2 border border-border-default rounded-md bg-bg-base">
            <p className="text-[10px] text-text-muted font-mono">
              $ uptime --avg
            </p>
            <p className="font-mono text-sm text-accent font-bold">99.99%</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
