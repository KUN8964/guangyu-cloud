import Link from "next/link";
import { Phone, Mail } from "lucide-react";
import { LightningLogoPixel } from "@/components/ProductPixels";

const footerLinks = [
  {
    title: "产品与服务",
    links: ["智能边缘服务器", "分布式云存储", "分布式算力", "AI 知识库", "企业云盘"],
  },
  {
    title: "解决方案",
    links: ["制造业", "政府", "金融", "互联网"],
  },
  {
    title: "帮助与支持",
    links: ["开发文档", "技术支持", "价格计算器"],
  },
];

export default function Footer() {
  return (
    <footer className="bg-abyss border-t border-border/40">
      <div className="max-w-[1200px] mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <LightningLogoPixel size={36} />
              <span className="font-[family-name:var(--font-press-start)] text-sm neon-cyan tracking-wider">
                光宇云
              </span>
            </div>

            <p className="text-sm text-text-muted mb-5 leading-relaxed">
              全球领先的 Web3.0 分布式存算网络服务商
            </p>

            <div className="space-y-3 text-sm text-text-muted font-[family-name:var(--font-vt323)] tracking-wider">
              <div className="flex items-center gap-2 hover:text-neon-cyan transition-colors duration-200 cursor-pointer">
                <Phone size={14} />
                <span>&gt; 联系我们</span>
              </div>
              <div className="flex items-center gap-2 hover:text-neon-purple transition-colors duration-200 cursor-pointer">
                <Mail size={14} />
                <span>&gt; 关注公众号</span>
              </div>
            </div>
          </div>

          {/* Link columns */}
          {footerLinks.map((col) => (
            <div key={col.title}>
              <h4 className="font-[family-name:var(--font-press-start)] text-[10px] tracking-wider
                text-neon-cyan mb-4">
                [{col.title}]
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-sm text-text-muted hover:text-neon-purple
                        font-[family-name:var(--font-vt323)] tracking-wider
                        transition-colors duration-150"
                    >
                      &gt; {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-border/30">
          <p className="text-[10px] text-text-muted text-center leading-relaxed
            font-[family-name:var(--font-vt323)] tracking-wider">
            浙 ICP 备 2025184107 号 - 1 浙公网安备 33010202005126 号
            <br />
            <span className="text-neon-cyan/50">
              &copy; 2025 光宇云计算科技有限公司 | GUANGYU CLOUD COMPUTING TECHNOLOGY CO., LTD.
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
