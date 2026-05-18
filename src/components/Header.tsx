"use client";

import { useState, useEffect } from "react";
import { Menu, X, ChevronRight, LogOut } from "lucide-react";
import Link from "next/link";
import { useAuth } from "@/contexts/AuthContext";

const navLinks = [
  { label: "产品", href: "/#products", id: "products" },
  { label: "解决方案", href: "/solutions", id: "solutions" },
  { label: "算力集群", href: "/compute", id: "gpu" },
  { label: "AI模型", href: "/models", id: "models" },
  { label: "服务支持", href: "/support", id: "support" },
  { label: "合作伙伴", href: "/partners", id: "partners" },
  { label: "关于我们", href: "/about", id: "about" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { user, isAuthenticated, logout } = useAuth();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bg-base/95 backdrop-blur-md border-b border-border-default"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-12 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0 group">
          <span className="w-2 h-2 rounded-full bg-success shadow-[0_0_6px_rgba(63,185,80,0.4)]" />
          <span className="font-mono text-[13px] text-text-secondary group-hover:text-text-primary tracking-tight transition-colors">
            guangyu-cloud
          </span>
          <span className="font-mono text-[11px] text-text-muted ml-1">
            ~/main
          </span>
        </Link>

        {/* Desktop nav — IDE tabs style */}
        <div className="hidden lg:flex items-center">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="px-3 py-1.5 text-[12px] text-text-secondary hover:text-text-primary
                font-mono tracking-tight border-r border-transparent
                hover:bg-bg-overlay transition-all duration-150"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Auth — conditional on login state */}
        <div className="hidden lg:flex items-center gap-2">
          {isAuthenticated ? (
            <>
              <span className="text-[10px] text-success font-mono tracking-tight">
                ● {user?.maskedPhone}
              </span>
              <Link
                href="/console"
                className="btn-primary text-[12px] !py-1.5 !px-4"
              >
                控制台
              </Link>
              <button
                onClick={logout}
                className="text-[11px] text-text-muted hover:text-error font-mono transition-colors px-1"
                title="退出登录"
              >
                <LogOut size={14} />
              </button>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="text-[11px] text-text-muted hover:text-text-link
                  font-mono transition-colors px-2"
              >
                登录
              </Link>
              <Link
                href="/console"
                className="btn-primary text-[12px] !py-1.5 !px-4"
              >
                控制台
              </Link>
            </>
          )}
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-1.5 text-text-secondary hover:text-text-primary"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 top-12 z-40">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute right-0 top-0 h-full w-64 bg-bg-surface border-l border-border-default">
            <div className="flex flex-col p-4 gap-0.5">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-between py-2.5 px-3
                    text-[12px] text-text-secondary hover:text-text-primary hover:bg-bg-overlay
                    font-mono rounded-md transition-all duration-150"
                >
                  📄 {link.label}
                  <ChevronRight size={14} className="text-text-muted" />
                </Link>
              ))}
              <hr className="my-2 border-border-muted" />
              {isAuthenticated ? (
                <>
                  <div className="py-2.5 px-3 text-[11px] text-success font-mono">
                    ● {user?.maskedPhone}
                  </div>
                  <Link
                    href="/console"
                    onClick={() => setMobileOpen(false)}
                    className="py-2.5 px-4 bg-accent text-white text-center text-[12px] font-bold
                      font-mono rounded-md"
                  >
                    控制台
                  </Link>
                  <button
                    onClick={() => { logout(); setMobileOpen(false); }}
                    className="mt-2 py-2.5 px-3 text-[12px] text-text-muted hover:text-error
                      font-mono rounded-md transition-colors duration-150 text-center"
                  >
                    退出登录
                  </button>
                </>
              ) : (
                <>
                  <Link
                    href="/login"
                    onClick={() => setMobileOpen(false)}
                    className="py-2.5 px-3 text-[12px] text-text-muted hover:text-text-link
                      font-mono rounded-md transition-colors duration-150"
                  >
                    登录
                  </Link>
                  <Link
                    href="/console"
                    onClick={() => setMobileOpen(false)}
                    className="mt-2 py-2.5 px-4 bg-accent text-white text-center text-[12px] font-bold
                      font-mono rounded-md"
                  >
                    控制台
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
