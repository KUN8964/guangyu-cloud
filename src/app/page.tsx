import Hero from "@/components/Hero";
import ValueCards from "@/components/ValueCards";
import NodeMapSection from "@/components/NodeMapSection";
import ProductSection from "@/components/ProductSection";
import SolutionSection from "@/components/SolutionSection";
import GPUSection from "@/components/GPUSection";
import ModelSection from "@/components/ModelSection";
import PartnerSection from "@/components/PartnerSection";
import CTAStrip from "@/components/CTAStrip";

export default function Home() {
  return (
    <>
      <Hero />
      <ValueCards />
      <NodeMapSection />
      <ProductSection />
      <SolutionSection />
      <GPUSection />
      <ModelSection />
      <PartnerSection />
      <CTAStrip />
    </>
  );
}
