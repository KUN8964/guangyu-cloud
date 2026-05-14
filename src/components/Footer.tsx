import Link from "next/link";
import { Phone, Mail } from "lucide-react";

const footerLinks = [
  {
    title: "产品与服务",
    links: [
      "智能边缘服务器",
      "分布式云存储",
      "分布式算力",
      "AI 知识库",
      "企业云盘",
    ],
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
    <footer className="bg-[#0F172A] text-white">
      <div className="max-w-[1200px] mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Contact */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-[#2D5BFF] flex items-center justify-center">
                <span className="text-white font-bold text-sm">光</span>
              </div>
              <span className="font-semibold text-white text-lg">光宇云</span>
            </div>
            <p className="text-sm text-white/60 mb-4 leading-relaxed">
              全球领先的 Web3.0 分布式存算网络服务商
            </p>
            <div className="space-y-2 text-sm text-white/60">
              <div className="flex items-center gap-2">
                <Phone size={14} />
                <span>联系我们</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={14} />
                <span>关注光宇云公众号</span>
              </div>
            </div>
          </div>

          {/* Link columns */}
          {footerLinks.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold text-white mb-3">
                {col.title}
              </h4>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-sm text-white/50 hover:text-white/80 transition-colors duration-150"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ICP */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-xs text-white/30 text-center leading-relaxed">
            浙 ICP 备 2025184107 号 - 1 浙公网安备 33010202005126 号
            <br />
            Copyright &copy; 2025 光宇云计算科技有限公司
          </p>
        </div>
      </div>
    </footer>
  );
}
