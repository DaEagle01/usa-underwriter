import CostEffectiveInsurance from "@/components/CostEffectiveInsurance";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-full max-w-[90rem] mx-auto px-3 md:px-8 lg:px-20 pt-3 md:pt-10">
      <Hero />
      <Features />
      <CostEffectiveInsurance />
    </div>
  );
}
