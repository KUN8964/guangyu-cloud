import Link from "next/link";

const footerCols = [
  {
    title: "Products",
    links: [
      { label: "edge-server.tsx", href: "/products/edge-server" },
      { label: "cloud-storage.tsx", href: "/products/cloud-storage" },
      { label: "distributed-compute.tsx", href: "/products/distributed-compute" },
      { label: "ai-knowledge.tsx", href: "/products/ai-knowledge" },
      { label: "enterprise-drive.tsx", href: "/products/enterprise-drive" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "manufacturing.tsx", href: "/solutions/manufacturing" },
      { label: "government.tsx", href: "/solutions/government" },
      { label: "finance.tsx", href: "/solutions/finance" },
      { label: "internet.tsx", href: "/solutions/internet" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "docs.md", href: "#" },
      { label: "support.md", href: "#" },
      { label: "pricing.tsx", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-bg-overlay border-t border-border-default">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-success shadow-[0_0_6px_rgba(63,185,80,0.4)]" />
              <span className="font-mono text-[13px] text-text-primary font-semibold tracking-tight">
                guangyu-cloud
              </span>
            </div>

            <p className="text-[12px] text-text-muted leading-relaxed mb-4 font-mono">
              Web3.0 Distributed Storage & Compute Network
            </p>

            <div className="space-y-2 text-[12px] text-text-muted font-mono">
              <div className="flex items-center gap-2 hover:text-text-link cursor-pointer transition-colors">
                <span className="text-[10px]">$</span>
                <span>contact --help</span>
              </div>
              <div className="flex items-center gap-2 hover:text-text-link cursor-pointer transition-colors">
                <span className="text-[10px]">$</span>
                <span>wechat --subscribe</span>
              </div>
            </div>
          </div>

          {/* Link columns */}
          {footerCols.map((col) => (
            <div key={col.title}>
              <h4 className="font-mono text-[11px] text-text-muted mb-3 uppercase tracking-wider">
                // {col.title}
              </h4>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[12px] text-text-secondary hover:text-text-link
                        font-mono transition-colors duration-150"
                    >
                      📄 {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom status bar */}
        <div className="mt-10 pt-6 border-t border-border-muted flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-[10px] text-text-muted font-mono">
            浙ICP备2025184107号-1 浙公网安备33010202005126号
          </p>
          <p className="text-[10px] text-text-muted font-mono flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-success" />
            © 2025 GUANGYU CLOUD COMPUTING TECHNOLOGY CO., LTD.
            <span className="text-accent ml-2">main</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
