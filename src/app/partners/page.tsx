import type { Metadata } from "next";
import PartnersClient from "./PartnersClient";

export const metadata: Metadata = {
  title: "合作伙伴 — 光宇云",
  description:
    "携手多家行业伙伴，共建分布式存算一体产业生态，赋能千行百业数字化转型。",
};

export default function PartnersPage() {
  return <PartnersClient />;
}
