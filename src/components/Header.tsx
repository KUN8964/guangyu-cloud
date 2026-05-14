"use client";

import { useState, useEffect } from "react";
import { Menu, X, ChevronRight } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { label: "Products", href: "/#products" },
  { label: "Solutions", href: "/#solutions" },
  { label: "GPU", href: "/#gpu" },
  { label: "Models", href: "/#models" },
  { label: "Partners", href: "/partners" },
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
              {link.label}.tsx
            </Link>
          ))}
        </div>

        {/* Auth — IDE status bar buttons */}
        <div className="hidden lg:flex items-center gap-2">
          <Link
            href="/login"
            className="text-[11px] text-text-muted hover:text-text-link
              font-mono transition-colors px-2"
          >
            Sign In
          </Link>
          <Link
            href="/console"
            className="btn-primary text-[12px] !py-1.5 !px-4"
          >
            $ console
          </Link>
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
                  📄 {link.label}.tsx
                  <ChevronRight size={14} className="text-text-muted" />
                </Link>
              ))}
              <hr className="my-2 border-border-muted" />
              <Link
                href="/login"
                onClick={() => setMobileOpen(false)}
                className="py-2.5 px-3 text-[12px] text-text-muted hover:text-text-link
                  font-mono rounded-md transition-colors duration-150"
              >
                Sign In
              </Link>
              <Link
                href="/console"
                onClick={() => setMobileOpen(false)}
                className="mt-2 py-2.5 px-4 bg-accent text-white text-center text-[12px] font-bold
                  font-mono rounded-md"
              >
                $ console
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
