import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "关于我们 — 光宇云",
  description: "光宇是赛道领先型的全球化创新技术公司，以分布式技术为核心，构建 Web3.0 分布式存算网络",
};

export default function AboutPage() {
  return <AboutClient />;
}
