"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { KeyRound, ShieldCheck } from "lucide-react";
import IDEWindow from "@/components/IDEWindow";
import { useAuth } from "@/contexts/AuthContext";

const CODE = "888888"; // 模拟固定验证码
const COOLDOWN = 60; // 重发冷却秒数

export default function LoginPage() {
  const router = useRouter();
  const { login, isAuthenticated } = useAuth();

  const [phone, setPhone] = useState("");
  const [code, setCode] = useState("");
  const [sent, setSent] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // 已登录则直接跳转控制台
  useEffect(() => {
    if (isAuthenticated) router.replace("/console");
  }, [isAuthenticated, router]);

  // 焦聚输入框
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // 倒计时
  useEffect(() => {
    if (countdown <= 0) return;
    const t = setTimeout(() => setCountdown((c) => c - 1), 1000);
    return () => clearTimeout(t);
  }, [countdown]);

  const formatPhone = (raw: string) =>
    raw.replace(/\D/g, "").slice(0, 11);

  const isValidPhone = (p: string) =>
    /^1[3-9]\d{9}$/.test(p);

  const handleSendCode = useCallback(() => {
    if (countdown > 0) return;
    if (!isValidPhone(phone)) {
      setError("请输入正确的手机号");
      return;
    }
    setError("");
    setSent(true);
    setCountdown(COOLDOWN);
    setCode("");
  }, [phone, countdown]);

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      if (!isValidPhone(phone)) {
        setError("请输入正确的手机号");
        return;
      }
      if (!sent) {
        setError("请先获取验证码");
        return;
      }
      if (code.length !== 6) {
        setError("请输入6位验证码");
        return;
      }
      if (code !== CODE) {
        setError("验证码错误，演示环境请使用 888888");
        return;
      }

      setSubmitting(true);
      setError("");
      // 模拟网络延迟
      await new Promise((r) => setTimeout(r, 800));
      login(phone);
      router.push("/console");
    },
    [phone, code, sent, login, router],
  );

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 pt-12">
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/5 blur-[120px]" />
      </div>

      <IDEWindow
        title="auth — guangyu-cloud"
        maxWidth="max-w-md"
        showDots
        tabs={[
          { label: "🔑 手机登录", active: true },
          { label: "📱 注册", active: false },
        ]}
      >
        <div className="font-mono">
          {/* Header */}
          <div className="mb-6">
            <div className="flex items-center gap-2 text-[11px] text-text-muted mb-1">
              <KeyRound size={12} />
              <span>authentication</span>
            </div>
            <div className="text-[13px] text-text-primary">
              <span className="text-syntax-keyword">fn</span>
              <span className="text-syntax-function"> login</span>
              <span className="text-text-muted">()</span>
              <span className="text-text-muted"> {"{"}</span>
            </div>
          </div>

          {/* Error */}
          {error && (
            <div className="mb-4 px-3 py-2 rounded-md bg-error-bg border border-error/30 text-[12px] text-error flex items-center gap-2">
              <span className="text-[11px]">✕</span>
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Phone */}
            <div>
              <label className="block text-[11px] text-syntax-comment mb-1.5">
                // 手机号
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[12px] text-text-muted">
                  +86
                </span>
                <input
                  ref={inputRef}
                  type="tel"
                  value={phone}
                  onChange={(e) => {
                    setPhone(formatPhone(e.target.value));
                    setError("");
                  }}
                  placeholder="请输入手机号"
                  maxLength={11}
                  className="w-full pl-12 pr-4 py-2.5 rounded-md bg-bg-input border border-border-default
                    text-[13px] text-text-primary placeholder:text-text-muted font-mono
                    focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30
                    transition-all duration-200"
                />
              </div>
              {phone.length === 11 && isValidPhone(phone) && (
                <p className="mt-1 text-[10px] text-success font-mono">
                  ✓ 手机号格式正确
                </p>
              )}
            </div>

            {/* SMS code */}
            {sent && (
              <div>
                <label className="block text-[11px] text-syntax-comment mb-1.5">
                  // 验证码
                </label>
                <div className="flex gap-3">
                  <input
                    type="text"
                    inputMode="numeric"
                    value={code}
                    onChange={(e) => {
                      setCode(e.target.value.replace(/\D/g, "").slice(0, 6));
                      setError("");
                    }}
                    placeholder="888888"
                    maxLength={6}
                    className="flex-1 px-4 py-2.5 rounded-md bg-bg-input border border-border-default
                      text-[13px] text-text-primary placeholder:text-text-muted font-mono tracking-[0.3em]
                      focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30
                      transition-all duration-200"
                  />
                  <button
                    type="button"
                    onClick={handleSendCode}
                    disabled={countdown > 0}
                    className="px-4 py-2.5 rounded-md border border-border-default
                      text-[11px] text-text-secondary hover:text-accent hover:border-accent
                      disabled:text-text-muted disabled:cursor-not-allowed
                      font-mono transition-all duration-200 shrink-0"
                  >
                    {countdown > 0 ? `${countdown}s` : "获取验证码"}
                  </button>
                </div>
                <p className="mt-1 text-[10px] text-text-muted font-mono">
                  演示环境验证码：<span className="text-syntax-function">888888</span>
                </p>
              </div>
            )}

            {/* Send code button (when not yet sent) */}
            {!sent && (
              <button
                type="button"
                onClick={handleSendCode}
                disabled={!isValidPhone(phone)}
                className="w-full py-2.5 rounded-md bg-bg-overlay border border-border-default
                  text-[12px] text-text-secondary hover:text-accent hover:border-accent
                  disabled:text-text-muted disabled:cursor-not-allowed
                  font-mono transition-all duration-200"
              >
                获取验证码
              </button>
            )}

            {/* Submit */}
            {sent && (
              <button
                type="submit"
                disabled={submitting || code.length !== 6}
                className="w-full py-2.5 rounded-md bg-accent hover:bg-accent-hover
                  disabled:bg-border-muted disabled:text-text-muted disabled:cursor-not-allowed
                  text-[12px] text-white font-mono font-bold
                  transition-all duration-200 flex items-center justify-center gap-2"
              >
                {submitting ? (
                  <>
                    <span className="inline-block w-3 h-3 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                    验证中...
                  </>
                ) : (
                  <>
                    <ShieldCheck size={14} />
                    登录 / 注册
                  </>
                )}
              </button>
            )}
          </form>

          {/* Footer */}
          <div className="mt-6 pt-4 border-t border-border-muted">
            <div className="text-[11px] text-text-muted font-mono">
              <span className="text-syntax-comment">{"// "}</span>
              首次登录即自动注册。演示环境无需真实手机号。
            </div>
          </div>
        </div>
      </IDEWindow>

      {/* Back link */}
      <a
        href="/"
        className="mt-6 text-[11px] text-text-muted hover:text-text-link font-mono transition-colors"
      >
        ← 返回首页
      </a>
    </div>
  );
}
