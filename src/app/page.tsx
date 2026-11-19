"use client";

import React from "react";
import { EditorialHero } from "@/components/portfolio/EditorialHero";
import { AbstractUIMockup } from "@/components/portfolio/AbstractUIMockup";
import { ProductShowcase } from "@/components/products/ProductShowcase";
import { BentoFeatureGrid } from "@/components/portfolio/BentoFeatureGrid";
import { HowItWorksSection } from "@/components/portfolio/HowItWorksSection";
import { FinalCTA } from "@/components/portfolio/FinalCTA";

export default function HomePage() {
  return (
    <main className="w-full overflow-hidden">
      {/* 1. Hero Section & Abstract UI Mockup (Edge-to-Edge 40px Grid Pattern Background) */}
      <section
        id="overview"
        className="w-full relative bg-grid-pattern pt-8 pb-14 sm:pt-12 sm:pb-20 bg-white dark:bg-[#171e19] border-b border-[#171e19]/10 dark:border-[#b7c6c2]/10"
      >
        <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-10">
          <EditorialHero />

          {/* Abstract UI Mockup Frame (Gray traffic lights, sidebar, #FFE17C swatch, centered card) */}
          <div id="architecture" className="pt-10 sm:pt-14">
            <div className="text-center mb-6">
              <span className="font-mono text-xs uppercase tracking-widest text-[#171e19]/60 dark:text-[#b7c6c2]">
                Interactive Architecture &amp; Runtimes
              </span>
            </div>
            <AbstractUIMockup />
          </div>
        </div>
      </section>

      {/* 2. Interactive Product Showcase & Software Releases (Animations & Live Toolchains) */}
      <section
        id="products-showcase"
        className="w-full relative bg-grid-pattern py-14 sm:py-20 bg-[#f8f9fa] dark:bg-[#1b241e] border-b border-[#171e19]/10 dark:border-[#b7c6c2]/10"
      >
        <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-10">
          <ProductShowcase />
        </div>
      </section>

      {/* 3. Bento Feature Grid (CHARCOAL Background: #171e19 - High-Contrast Dark Section) */}
      <section
        id="features"
        className="w-full relative bg-grid-pattern bg-[#171e19] text-white py-16 sm:py-24 border-b border-[#b7c6c2]/10"
      >
        <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-10">
          <BentoFeatureGrid />
        </div>
      </section>

      {/* 4. How It Works (WHITE Background: #ffffff - Alternating High-Contrast Light Section) */}
      <section
        id="how-it-works"
        className="w-full relative bg-grid-pattern bg-white dark:bg-[#202a24] text-foreground py-16 sm:py-24 border-b border-[#171e19]/10 dark:border-[#b7c6c2]/10"
      >
        <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-10">
          <HowItWorksSection />
        </div>
      </section>

      {/* 5. Final High-Energy CTA (WHITE/CHARCOAL Background Housing the Golden Yellow #ffe17c banner) */}
      <section id="cta" className="w-full relative bg-grid-pattern bg-white dark:bg-[#171e19] py-12 sm:py-20">
        <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-10">
          <FinalCTA />
        </div>
      </section>
    </main>
  );
}
