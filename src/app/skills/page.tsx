"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { SKILL_CATEGORIES, PERSONAL_INFO } from "@/data/portfolioData";
import { PageWrapper } from "@/components/ui/PageWrapper";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import {
  Code2,
  Cpu,
  Server,
  Globe,
  Binary,
  ArrowRight,
  Terminal,
  CheckCircle2,
  Sparkles,
  Layers,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { ProductSpotlightBanner } from "@/components/products/ProductSpotlightBanner";

const CATEGORY_META: Record<
  string,
  {
    icon: React.ElementType;
    badgeColor: string;
    gradient: string;
    borderAccent: string;
  }
> = {
  Languages: {
    icon: Code2,
    badgeColor: "text-[#171e19] dark:text-[#ffe17c] bg-[#ffe17c]/15 border-[#ffe17c]/30 font-bold",
    gradient: "from-[#ffe17c]/10 via-transparent to-transparent",
    borderAccent: "group-hover:border-[#ffe17c]/50",
  },
  "ML / AI": {
    icon: Cpu,
    badgeColor: "text-[#171e19] dark:text-[#ffe17c] bg-[#ffe17c]/15 border-[#ffe17c]/30 font-bold",
    gradient: "from-[#ffe17c]/10 via-transparent to-transparent",
    borderAccent: "group-hover:border-[#ffe17c]/50",
  },
  "Systems & Infrastructure": {
    icon: Server,
    badgeColor: "text-[#171e19] dark:text-[#ffe17c] bg-[#ffe17c]/15 border-[#ffe17c]/30 font-bold",
    gradient: "from-[#ffe17c]/10 via-transparent to-transparent",
    borderAccent: "group-hover:border-[#ffe17c]/50",
  },
  "Web & Full-Stack": {
    icon: Globe,
    badgeColor: "text-[#171e19] dark:text-[#ffe17c] bg-[#ffe17c]/15 border-[#ffe17c]/30 font-bold",
    gradient: "from-[#ffe17c]/10 via-transparent to-transparent",
    borderAccent: "group-hover:border-[#ffe17c]/50",
  },
  "Core Competencies": {
    icon: Binary,
    badgeColor: "text-[#171e19] dark:text-[#ffe17c] bg-[#ffe17c]/15 border-[#ffe17c]/30 font-bold",
    gradient: "from-[#ffe17c]/10 via-transparent to-transparent",
    borderAccent: "group-hover:border-[#ffe17c]/50",
  },
};

export default function SkillsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const totalSkillsCount = SKILL_CATEGORIES.reduce(
    (acc, cat) => acc + cat.skills.length,
    0
  );

  const filteredCategories =
    selectedCategory === "All"
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((cat) => cat.category === selectedCategory);

  return (
    <PageWrapper className="w-full max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 py-12 sm:py-16 space-y-12">
      {/* Header */}
      <SectionHeader
        badge="Technical Matrix"
        title="Skills & Tooling"
        description="Low-level systems programming, Edge AI quantization, kernel tracing with eBPF, and production cloud infrastructure."
      />

      {/* High-Level Capabilities Matrix Banner */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
        <div className="p-4 rounded-2xl border border-[#171e19]/15 dark:border-[#b7c6c2]/15 bg-card space-y-1 transition-all hover:border-[#ffe17c]">
          <div className="flex items-center justify-between text-[#ffe17c]">
            <Code2 className="w-4 h-4" />
            <span className="text-[10px] font-mono uppercase font-bold tracking-wider">
              Languages
            </span>
          </div>
          <p className="text-xl sm:text-2xl font-bold font-heading text-foreground">
            7 Stacks
          </p>
          <p className="text-[11px] text-muted">C, C++, Rust, Python, TS</p>
        </div>

        <div className="p-4 rounded-2xl border border-[#171e19]/15 dark:border-[#b7c6c2]/15 bg-card space-y-1 transition-all hover:border-[#ffe17c]">
          <div className="flex items-center justify-between text-[#ffe17c]">
            <Cpu className="w-4 h-4" />
            <span className="text-[10px] font-mono uppercase font-bold tracking-wider">
              AI / Inference
            </span>
          </div>
          <p className="text-xl sm:text-2xl font-bold font-heading text-foreground">
            TensorRT &amp; TFLite
          </p>
          <p className="text-[11px] text-muted">Sub-1 GFLOP &amp; INT8 Edge</p>
        </div>

        <div className="p-4 rounded-2xl border border-[#171e19]/15 dark:border-[#b7c6c2]/15 bg-card space-y-1 transition-all hover:border-[#ffe17c]">
          <div className="flex items-center justify-between text-[#ffe17c]">
            <Server className="w-4 h-4" />
            <span className="text-[10px] font-mono uppercase font-bold tracking-wider">
              Kernel &amp; Systems
            </span>
          </div>
          <p className="text-xl sm:text-2xl font-bold font-heading text-foreground">
            Linux &amp; eBPF
          </p>
          <p className="text-[11px] text-muted">Syscall monitoring &amp; MQTT</p>
        </div>

        <div className="p-4 rounded-2xl border border-[#171e19]/15 dark:border-[#b7c6c2]/15 bg-card space-y-1 transition-all hover:border-[#ffe17c]">
          <div className="flex items-center justify-between text-[#ffe17c]">
            <Binary className="w-4 h-4" />
            <span className="text-[10px] font-mono uppercase font-bold tracking-wider">
              Competencies
            </span>
          </div>
          <p className="text-xl sm:text-2xl font-bold font-heading text-foreground">
            AOSP &amp; Vision
          </p>
          <p className="text-[11px] text-muted">RAG Agents &amp; Concurrency</p>
        </div>
      </div>

      {/* Production Systems Showcase Banner */}
      <div>
        <ProductSpotlightBanner variant="compact" targetProductSlug="keynix" />
      </div>

      {/* Interactive Domain Filter Pill Bar */}
      <div className="flex items-center justify-start gap-1.5 sm:gap-2 overflow-x-auto pb-2 scrollbar-none">
        <button
          type="button"
          onClick={() => setSelectedCategory("All")}
          className={cn(
            "px-4 py-2 rounded-full text-xs font-semibold transition-all shrink-0 select-none",
            selectedCategory === "All"
              ? "bg-[#ffe17c] text-[#171e19] shadow-xs font-bold"
              : "bg-surface-muted border border-border/80 text-muted hover:text-foreground hover:bg-surface"
          )}
        >
          All Domains ({totalSkillsCount})
        </button>

        {SKILL_CATEGORIES.map((cat) => {
          const isSelected = selectedCategory === cat.category;
          return (
            <button
              key={cat.category}
              type="button"
              onClick={() => setSelectedCategory(cat.category)}
              className={cn(
                "px-3.5 py-2 rounded-full text-xs font-semibold transition-all shrink-0 select-none flex items-center gap-1.5",
                isSelected
                  ? "bg-[#ffe17c] text-[#171e19] shadow-xs font-bold"
                  : "bg-surface-muted border border-border/80 text-muted hover:text-foreground hover:bg-surface"
              )}
            >
              <span>{cat.category}</span>
              <span
                className={cn(
                  "text-[10px] px-1.5 py-0.2 rounded-full",
                  isSelected
                    ? "bg-[#171e19]/15 text-[#171e19] font-mono font-bold"
                    : "bg-surface border border-border/60 text-muted font-mono"
                )}
              >
                {cat.skills.length}
              </span>
            </button>
          );
        })}
      </div>

      {/* Enhanced Skills Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
        <AnimatePresence mode="popLayout">
          {filteredCategories.map((category) => {
            const meta = CATEGORY_META[category.category] || CATEGORY_META["Languages"];
            const Icon = meta.icon;

            return (
              <motion.div
                key={category.category}
                layout
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="group"
              >
                <Card
                  className={cn(
                    "p-6 sm:p-7 space-y-6 h-full flex flex-col justify-between transition-all duration-300 relative overflow-hidden",
                    meta.borderAccent
                  )}
                >
                  {/* Subtle decorative background gradient */}
                  <div
                    className={cn(
                      "absolute top-0 right-0 w-64 h-32 bg-gradient-to-bl pointer-events-none opacity-60 rounded-tr-xl",
                      meta.gradient
                    )}
                  />

                  <div className="space-y-5 relative z-10">
                    {/* Category Title Bar */}
                    <div className="flex items-start justify-between gap-3 pb-4 border-b border-border/60">
                      <div className="flex items-center gap-3.5">
                        <div
                          className={cn(
                            "w-10 h-10 rounded-xl flex items-center justify-center border shrink-0",
                            meta.badgeColor
                          )}
                        >
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-foreground font-heading">
                            {category.category}
                          </h3>
                          <p className="text-xs text-muted leading-relaxed">
                            {category.description}
                          </p>
                        </div>
                      </div>

                      <span
                        className={cn(
                          "text-[11px] font-mono px-2 py-0.5 rounded-full border shrink-0",
                          meta.badgeColor
                        )}
                      >
                        {category.skills.length} items
                      </span>
                    </div>

                    {/* Skill Cards Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {category.skills.map((skill) => (
                        <div
                          key={skill.name}
                          className="p-3 rounded-xl bg-surface-muted/50 hover:bg-surface-muted border border-border/70 hover:border-border transition-all flex flex-col justify-between gap-1.5 group/chip"
                        >
                          <div className="flex items-center justify-between gap-2">
                            <span className="font-semibold text-sm text-foreground tracking-tight">
                              {skill.name}
                            </span>
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                          </div>

                          {skill.highlight && (
                            <span className="text-[11px] text-muted line-clamp-1 font-mono">
                              {skill.highlight}
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Bottom Meta Bar */}
                  <div className="pt-4 border-t border-border/50 text-xs font-mono text-muted flex items-center justify-between relative z-10">
                    <span className="flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                      <span>Verified in Resume v5</span>
                    </span>
                    <span className="text-primary font-semibold text-[11px]">
                      Production Ready
                    </span>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Development Environment & Architecture Stack */}
      <Card className="p-6 sm:p-8 space-y-6 bg-surface-muted/40 border-border/80">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-border/60">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-surface border border-border flex items-center justify-center text-primary">
              <Terminal className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold font-heading text-foreground">
                Workstation &amp; Execution Environment
              </h3>
              <p className="text-xs text-muted">
                Optimized toolchain for low-level systems engineering and accelerated neural network inference.
              </p>
            </div>
          </div>
          <span className="text-xs font-mono px-2.5 py-1 rounded bg-surface border border-border text-emerald-600 dark:text-emerald-400 font-semibold self-start sm:self-auto">
            POSIX / Linux Native
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
          <div className="p-3.5 rounded-lg bg-surface border border-border/60 space-y-1">
            <span className="font-mono text-muted uppercase text-[10px] tracking-wider block">
              Primary OS
            </span>
            <span className="font-bold text-foreground text-sm block">
              Arch Linux / Ubuntu LTS
            </span>
            <p className="text-[11px] text-muted">
              Kernel 6.x+, systemd, eBPF toolchain
            </p>
          </div>

          <div className="p-3.5 rounded-lg bg-surface border border-border/60 space-y-1">
            <span className="font-mono text-muted uppercase text-[10px] tracking-wider block">
              Development Tooling
            </span>
            <span className="font-bold text-foreground text-sm block">
              Neovim, VS Code, GDB
            </span>
            <p className="text-[11px] text-muted">
              Valgrind, perf, bpftrace, LLVM/Clang
            </p>
          </div>

          <div className="p-3.5 rounded-lg bg-surface border border-border/60 space-y-1">
            <span className="font-mono text-muted uppercase text-[10px] tracking-wider block">
              Target Hardware
            </span>
            <span className="font-bold text-foreground text-sm block">
              NVIDIA Jetson, x86_64, ARM64
            </span>
            <p className="text-[11px] text-muted">
              ESP32 microcontrollers, CUDA cores
            </p>
          </div>

          <div className="p-3.5 rounded-lg bg-surface border border-border/60 space-y-1">
            <span className="font-mono text-muted uppercase text-[10px] tracking-wider block">
              CI / CD &amp; Telemetry
            </span>
            <span className="font-bold text-foreground text-sm block">
              Git, GitHub Actions, MQTT
            </span>
            <p className="text-[11px] text-muted">
              Docker automated integration builds
            </p>
          </div>
        </div>
      </Card>

      {/* Navigation CTA */}
      <div className="flex items-center justify-between pt-6 border-t border-border">
        <Link
          href="/projects"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-muted hover:text-foreground transition-colors px-3 py-2 rounded-lg hover:bg-surface-muted"
        >
          <span>← Featured Projects</span>
        </Link>
        <Link
          href="/achievements"
          className="inline-flex items-center gap-1.5 text-sm font-bold text-[#171e19] bg-[#ffe17c] hover:bg-[#f5d45d] px-4 py-2 rounded-xl shadow-xs transition-all hover:scale-105"
        >
          <span>View Achievements &amp; Contests</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </PageWrapper>
  );
}
