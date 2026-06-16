"use client";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import EnergySection from "@/components/EnergySection";
import AccessoriesSection from "@/components/AccessoriesSection";

export default function Home() {
  return (
    <main>
      {/* 1. Full-screen vehicle hero slider */}
      <HeroSection />

      {/* 2. Key stats strip */}
      <StatsSection />

      {/* 3. Energy products grid */}
      <EnergySection />

      {/* 4. Accessories shop */}
      <AccessoriesSection />
    </main>
  );
}
