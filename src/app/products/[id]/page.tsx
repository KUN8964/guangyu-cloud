import type { Metadata } from "next";
import { products, getProductById, getProductDetail } from "@/data/products";
import ProductDetailClient from "./ProductDetailClient";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return products.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const product = getProductById(id);
  if (!product) return { title: "产品未找到 — 光宇云" };
  return {
    title: `${product.name} — 光宇云`,
    description: product.description,
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { id } = await params;
  const product = getProductById(id);
  const detail = getProductDetail(id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="font-[family-name:var(--font-press-start)] text-neon-magenta text-sm">
          [404_PRODUCT_NOT_FOUND]
        </p>
      </div>
    );
  }

  return <ProductDetailClient product={product} detail={detail} />;
}
