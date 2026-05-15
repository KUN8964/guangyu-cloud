import type { Metadata } from "next";
import SolutionsIndexClient from "./SolutionsIndexClient";

export const metadata: Metadata = {
  title: "行业解决方案 — 光宇云",
  description: "12 大行业解决方案，覆盖政务、金融、制造、医疗、自动驾驶等核心领域",
};

export default function SolutionsIndexPage() {
  return <SolutionsIndexClient />;
}
