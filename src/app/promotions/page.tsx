import type { Metadata } from "next";
import PromotionsClient from "./PromotionsClient";

export const metadata: Metadata = {
  title: "促销及活动 — 光宇云",
  description: "光宇云最新促销活动、限时优惠、技术峰会和生态大会信息",
};

export default function PromotionsPage() {
  return <PromotionsClient />;
}
