import type { Metadata } from "next";
import ModelsClient from "./ModelsClient";

export const metadata: Metadata = {
  title: "AI 模型服务 — 光宇云",
  description: "面向智慧水务、智慧城市、智慧医疗、智慧农业等行业，提供开箱即用、高精准的分布式 AI 算法模型",
};

export default function ModelsPage() {
  return <ModelsClient />;
}
