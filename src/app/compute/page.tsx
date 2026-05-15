import type { Metadata } from "next";
import ComputeClient from "./ComputeClient";

export const metadata: Metadata = {
  title: "算力集群 — 光宇云",
  description: "H100 / H200 / A100 / 昇腾 910B2 / RTX 4090 多规格 GPU 算力集群，支持大模型训练、AI 推理、科学计算",
};

export default function ComputePage() {
  return <ComputeClient />;
}
