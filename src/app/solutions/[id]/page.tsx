import type { Metadata } from "next";
import { solutions, getSolutionById, getSolutionDetail } from "@/data/solutions";
import SolutionDetailClient from "./SolutionDetailClient";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return solutions.map((s) => ({ id: s.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const solution = getSolutionById(id);
  if (!solution) return { title: "方案未找到 — 光宇云" };
  return {
    title: `${solution.name}解决方案 — 光宇云`,
    description: solution.description,
  };
}

export default async function SolutionDetailPage({ params }: Props) {
  const { id } = await params;
  const solution = getSolutionById(id);
  const detail = getSolutionDetail(id);

  if (!solution) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="font-[family-name:var(--font-press-start)] text-neon-magenta text-sm">
          [404_SOLUTION_NOT_FOUND]
        </p>
      </div>
    );
  }

  return <SolutionDetailClient solution={solution} detail={detail} />;
}
