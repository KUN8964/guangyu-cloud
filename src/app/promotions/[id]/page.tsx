import type { Metadata } from "next";
import { marked } from "marked";
import { promotions, getPromotionById } from "@/data/promotions";
import PromotionDetailClient from "./PromotionDetailClient";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return promotions.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const promo = getPromotionById(id);
  if (!promo) return { title: "活动未找到 — 光宇云" };
  return {
    title: `${promo.title} — 光宇云`,
    description: promo.desc,
  };
}

export default async function PromotionDetailPage({ params }: Props) {
  const { id } = await params;
  const promo = getPromotionById(id);

  if (!promo) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-bg-base">
        <p className="font-mono text-sm text-error">
          [404_PROMOTION_NOT_FOUND]
        </p>
      </div>
    );
  }

  const bodyHtml = await marked(promo.body);

  return <PromotionDetailClient promo={promo} bodyHtml={bodyHtml} />;
}
