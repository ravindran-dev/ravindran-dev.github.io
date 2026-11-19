"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Cpu, Download, HardDrive, Layers, Package, Search, ShieldCheck, Terminal } from "lucide-react";
import { ProductCard } from "@/components/products/ProductCard";
import { ProductSpotlightBanner } from "@/components/products/ProductSpotlightBanner";
import { getPublishedProducts } from "@/data/productRegistry";

const CATEGORIES = [
  "All Products",
  "Developer Tools",
  "Linux Systems",
  "Desktop & Mobile"
] as const;

export default function ProductsPage() {
  const allProducts = useMemo(() => getPublishedProducts(), []);
  const [selectedCategory, setSelectedCategory] = useState<string>("All Products");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = useMemo(() => {
    return allProducts.filter((product) => {
      const matchesCategory =
        selectedCategory === "All Products" ||
        (selectedCategory === "Developer Tools" && product.category.includes("Developer")) ||
        (selectedCategory === "Desktop & Mobile" && product.category.includes("Desktop")) ||
        (selectedCategory === "Linux Systems" && product.category.includes("Linux"));

      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        product.name.toLowerCase().includes(query) ||
        product.shortName.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.stack.some((tech) => tech.toLowerCase().includes(query)) ||
        product.languages.some((lang) => lang.toLowerCase().includes(query)) ||
        product.platforms.some((plat) => plat.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [allProducts, selectedCategory, searchQuery]);

  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 sm:py-16 lg:px-10">
      {/* Top Breadcrumb */}
      <div className="flex items-center gap-2 text-xs font-mono text-muted">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
        >
          <ArrowLeft size={14} /> Portfolio
        </Link>
        <span>/</span>
        <span className="text-foreground font-semibold">Official Product Releases</span>
      </div>

      {/* Hero Showcase Header */}
      <div className="mt-8 max-w-4xl space-y-4">
        <div className="inline-flex items-center gap-2.5 rounded-full border border-[#171e19]/15 dark:border-[#b7c6c2]/20 bg-white/80 dark:bg-[#171e19]/80 px-3.5 py-1 text-xs font-mono font-bold uppercase tracking-widest text-foreground shadow-2xs">
          <span className="w-2 h-2 rounded-full bg-[#ffe17c] animate-pulse" />
          <span>OFFICIAL RELEASE CATALOG &amp; TOOLCHAINS</span>
        </div>
        <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl uppercase text-foreground leading-[0.9] tracking-tight">
          SYSTEMS, RUNTIMES &amp;{" "}
          <span className="relative inline-block px-3 sm:px-4 mx-1">
            <span className="absolute inset-0 bg-[#ffe17c] -rotate-1 rounded-sm -z-10 shadow-xs" />
            <span className="text-[#171e19]">TOOLCHAINS.</span>
          </span>
        </h1>
        <p className="text-base sm:text-lg text-[#171e19]/75 dark:text-[#b7c6c2] max-w-2xl leading-relaxed pt-1 font-sans">
          Production software engineered for low-level performance, offline privacy, and developer toolchains.
        </p>
      </div>

      {/* Engineering Highlights Strip */}
      <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:gap-4">
        <div className="rounded-2xl border border-[#171e19]/15 dark:border-[#b7c6c2]/15 bg-card p-5 transition-all hover:border-[#ffe17c]">
          <div className="flex items-center gap-2 text-[#ffe17c]">
            <Layers size={18} />
            <span className="text-2xl font-display uppercase tracking-normal text-foreground">{allProducts.length}</span>
          </div>
          <p className="mt-2 text-xs font-bold uppercase tracking-wide text-foreground">Engineered Products</p>
          <p className="text-[11px] text-muted">Active repositories &amp; toolchains</p>
        </div>

        <div className="rounded-2xl border border-[#171e19]/15 dark:border-[#b7c6c2]/15 bg-card p-5 transition-all hover:border-[#ffe17c]">
          <div className="flex items-center gap-2 text-[#ffe17c]">
            <HardDrive size={18} />
            <span className="text-2xl font-display uppercase tracking-normal text-foreground">Linux &amp; OS</span>
          </div>
          <p className="mt-2 text-xs font-bold uppercase tracking-wide text-foreground">Systems Engineering</p>
          <p className="text-[11px] text-muted">Wayland, evdev &amp; eBPF sandboxing</p>
        </div>

        <div className="rounded-2xl border border-[#171e19]/15 dark:border-[#b7c6c2]/15 bg-card p-5 transition-all hover:border-[#ffe17c]">
          <div className="flex items-center gap-2 text-[#ffe17c]">
            <Terminal size={18} />
            <span className="text-2xl font-display uppercase tracking-normal text-foreground">SDKs &amp; APIs</span>
          </div>
          <p className="mt-2 text-xs font-bold uppercase tracking-wide text-foreground">Developer Toolchains</p>
          <p className="text-[11px] text-muted">Native C11, Rust &amp; Python SDKs</p>
        </div>

        <div className="rounded-2xl border border-[#171e19]/15 dark:border-[#b7c6c2]/15 bg-card p-5 transition-all hover:border-[#ffe17c]">
          <div className="flex items-center gap-2 text-[#ffe17c]">
            <ShieldCheck size={18} />
            <span className="text-2xl font-display uppercase tracking-normal text-foreground">100%</span>
          </div>
          <p className="mt-2 text-xs font-bold uppercase tracking-wide text-foreground">Verified Checksums</p>
          <p className="text-[11px] text-muted">SHA-256 audited release artifacts</p>
        </div>
      </div>

      {/* Flagship Release Spotlight Advertisement Banner */}
      <div className="mt-10">
        <ProductSpotlightBanner variant="hero" targetProductSlug="localmind" />
      </div>

      {/* Filter and Search Bar */}
      <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-border/70 pb-5">
        {/* Category Pills */}
        <div className="flex flex-wrap gap-1.5">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`rounded-xl px-4 py-2 text-xs font-semibold transition-all ${
                selectedCategory === cat
                  ? "bg-[#ffe17c] text-[#171e19] shadow-xs"
                  : "bg-surface-muted text-muted hover:text-foreground hover:bg-black/5 dark:hover:bg-white/5 border border-border/70"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative sm:w-64">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted" size={14} />
          <input
            type="text"
            placeholder="Search products or stack..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-xl border border-border/80 bg-surface-muted pl-9 pr-3.5 py-2 text-xs text-foreground placeholder:text-muted focus:border-[#ffe17c] focus:outline-none focus:ring-1 focus:ring-[#ffe17c]"
          />
        </div>
      </div>

      {/* Products Grid */}
      <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {filteredProducts.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="mt-12 rounded-2xl border border-dashed border-border py-16 text-center">
          <Package className="mx-auto text-muted" size={32} />
          <h3 className="mt-3 text-sm font-semibold text-foreground">No matching products found</h3>
          <p className="mt-1 text-xs text-muted">Try clearing your search query or choosing another category.</p>
          <button
            onClick={() => {
              setSelectedCategory("All Products");
              setSearchQuery("");
            }}
            className="mt-4 inline-flex items-center gap-1.5 rounded-lg bg-surface-muted px-3 py-1.5 text-xs font-medium text-foreground hover:bg-border/60"
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* Release Notice Footer */}
      <div className="mt-14 rounded-xl border border-border/60 bg-surface-muted/60 p-5 text-xs leading-relaxed text-muted">
        <div className="flex items-center gap-2 font-semibold text-foreground">
          <CheckCircle2 size={15} className="text-emerald-500" />
          Release Integrity &amp; Provenance Guarantee
        </div>
        <p className="mt-2">
          All installable file systems, kernel binaries, APK packages, and SDK tarballs distributed through this portal are built directly from their respective open-source checkouts.
          Cryptographic SHA-256 hashes are displayed alongside every asset for independent verification prior to system execution.
        </p>
      </div>
    </main>
  );
}
