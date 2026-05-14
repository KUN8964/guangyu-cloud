"use client";

import { useState, useEffect } from "react";
import { Menu, X, ChevronRight, Zap } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { label: "产品", href: "#products" },
  { label: "解决方案", href: "#solutions" },
  { label: "算力集群", href: "#gpu" },
  { label: "AI 模型", href: "#models" },
  { label: "合作伙伴", href: "#partners" },
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-deep/95 backdrop-blur-md border-b border-border/60 shadow-[0_0_20px_rgba(0,240,255,0.05)]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo — pixel-style */}
        <Link href="/" className="flex items-center gap-3 shrink-0 group">
          <div className="relative">
            <div className="w-9 h-9 bg-neon-cyan pixel-border-cyan flex items-center justify-center
              group-hover:shadow-[0_0_20px_rgba(0,240,255,0.5)] transition-shadow duration-300">
              <Zap size={16} className="text-abyss" />
            </div>
          </div>
          <span
            className="font-[family-name:var(--font-press-start)] text-sm neon-cyan tracking-wider"
          >
            光宇云
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="px-4 py-2 text-xs text-text-secondary hover:text-neon-cyan
                font-[family-name:var(--font-press-start)] tracking-wider
                transition-all duration-200 hover:drop-shadow-[0_0_8px_rgba(0,240,255,0.5)]"
            >
              [{link.label}]
            </Link>
          ))}
        </div>

        {/* Auth / CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="/login"
            className="text-xs text-text-secondary hover:text-neon-cyan
              font-[family-name:var(--font-press-start)] tracking-wider transition-colors duration-200"
          >
            [登录]
          </Link>
          <Link
            href="/console"
            className="pixel-btn text-xs px-5 py-2 bg-neon-cyan text-abyss font-bold
              font-[family-name:var(--font-press-start)] tracking-wider
              hover:shadow-[0_0_20px_rgba(0,240,255,0.5)] transition-shadow duration-200"
          >
            ▶ 控制台
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 text-neon-cyan"
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
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute right-0 top-0 h-full w-72 bg-deep border-l border-border
            shadow-[0_0_30px_rgba(0,240,255,0.1)]">
            <div className="flex flex-col p-6 gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-between py-3 px-4
                    text-xs text-text-secondary hover:text-neon-cyan hover:bg-surface
                    font-[family-name:var(--font-press-start)] tracking-wider
                    border border-transparent hover:border-border transition-all duration-150"
                >
                  [{link.label}]
                  <ChevronRight size={14} className="text-text-muted" />
                </Link>
              ))}
              <hr className="my-4 border-border" />
              <Link
                href="/login"
                onClick={() => setMobileOpen(false)}
                className="py-3 px-4 text-xs text-text-secondary hover:text-neon-cyan
                  font-[family-name:var(--font-press-start)] tracking-wider
                  transition-colors duration-150"
              >
                [登录]
              </Link>
              <Link
                href="/console"
                onClick={() => setMobileOpen(false)}
                className="mt-3 py-3 px-4 bg-neon-cyan text-abyss text-center text-xs font-bold
                  font-[family-name:var(--font-press-start)] tracking-wider
                  pixel-btn"
              >
                ▶ 控制台
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
