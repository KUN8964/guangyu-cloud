import type { Metadata } from "next";
import SupportClient from "./SupportClient";

export const metadata: Metadata = {
  title: "服务支持与定价 — 光宇云",
  description: "开发文档、技术支持、价格计算器，注册即获免费试用额度",
};

export default function SupportPage() {
  return <SupportClient />;
}
