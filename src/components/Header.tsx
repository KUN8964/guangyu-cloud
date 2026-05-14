"use client";

import { useState, useEffect } from "react";
import { Menu, X, ChevronRight } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { label: "产品", href: "#products" },
  { label: "解决方案", href: "#solutions" },
  { label: "算力集群", href: "#gpu" },
  { label: "AI 模型服务", href: "#models" },
  { label: "合作伙伴", href: "#partners" },
  { label: "关于我们", href: "#about" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-250 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-[0_1px_3px_rgba(0,0,0,0.04)] border-b border-black/5"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <div className="w-8 h-8 rounded-lg bg-[#2D5BFF] flex items-center justify-center">
            <span className="text-white font-bold text-sm">光</span>
          </div>
          <span className="font-semibold text-[#1A1A2E] text-lg">光宇云</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="px-3 py-2 text-sm text-[#4A4A5E] hover:text-[#1A1A2E] rounded-md hover:bg-[#F6F6F6] transition-colors duration-150"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Auth buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/login"
            className="text-sm text-[#4A4A5E] hover:text-[#1A1A2E] transition-colors duration-150"
          >
            登录
          </Link>
          <Link
            href="/register"
            className="text-sm text-[#4A4A5E] hover:text-[#1A1A2E] transition-colors duration-150"
          >
            注册
          </Link>
          <Link
            href="/console"
            className="text-sm px-4 py-2 bg-[#2D5BFF] text-white rounded-md hover:bg-[#1E40D8] active:scale-[0.98] transition-all duration-150"
          >
            控制台
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 text-[#4A4A5E]"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 top-16 z-40">
          <div
            className="absolute inset-0 bg-black/20"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute right-0 top-0 h-full w-72 bg-white shadow-lg animate-slide-in-right">
            <div className="flex flex-col p-6 gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-between py-3 px-4 text-[#1A1A2E] hover:bg-[#F6F6F6] rounded-lg transition-colors duration-150"
                >
                  {link.label}
                  <ChevronRight size={16} className="text-[#8E8E9A]" />
                </Link>
              ))}
              <hr className="my-4 border-black/5" />
              <Link
                href="/login"
                onClick={() => setMobileOpen(false)}
                className="py-3 px-4 text-[#4A4A5E] hover:bg-[#F6F6F6] rounded-lg"
              >
                登录
              </Link>
              <Link
                href="/register"
                onClick={() => setMobileOpen(false)}
                className="py-3 px-4 text-[#4A4A5E] hover:bg-[#F6F6F6] rounded-lg"
              >
                注册
              </Link>
              <Link
                href="/console"
                onClick={() => setMobileOpen(false)}
                className="mt-2 py-3 px-4 bg-[#2D5BFF] text-white text-center rounded-lg hover:bg-[#1E40D8]"
              >
                控制台
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
