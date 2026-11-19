"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { PROJECTS, PERSONAL_INFO } from "@/data/portfolioData";
import { PageWrapper } from "@/components/ui/PageWrapper";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import {
  Github,
  ExternalLink,
  Cpu,
  Shield,
  Layers,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Activity,
  Zap,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { ProductSpotlightBanner } from "@/components/products/ProductSpotlightBanner";

const CATEGORY_ICONS: Record<string, React.ElementType> = {
  "Edge AI & ML": Cpu,
  "Systems & Security": Shield,
  "IoT & Full-Stack": Layers,
};

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Edge AI & ML", "Systems & Security", "IoT & Full-Stack"];

  const filteredProjects =
    selectedCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <PageWrapper className="w-full max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 py-12 sm:py-16 space-y-12">
      {/* Header */}
      <SectionHeader
        badge="Engineering Portfolio"
        title="Featured Projects"
        description="Deep dives into sub-1 GFLOP computer vision models for drones, kernel-level eBPF package security in Rust, and real-time distributed IoT telemetry."
      />

      {/* Cross-Promotion Product Release Banner */}
      <div>
        <ProductSpotlightBanner variant="compact" targetProductSlug="localmind" />
      </div>

      {/* Category Filter Pills */}
      <div className="flex items-center justify-start gap-1.5 sm:gap-2 overflow-x-auto pb-2 scrollbar-none">
        {categories.map((cat) => {
          const isSelected = selectedCategory === cat;
          const count =
            cat === "All"
              ? PROJECTS.length
              : PROJECTS.filter((p) => p.category === cat).length;

          return (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={cn(
                "px-4 py-2 rounded-full text-xs font-semibold transition-all shrink-0 select-none flex items-center gap-1.5",
                isSelected
                  ? "bg-[#ffe17c] text-[#171e19] shadow-xs font-bold"
                  : "bg-surface-muted border border-border/80 text-muted hover:text-foreground hover:bg-surface"
              )}
            >
              <span>{cat}</span>
              <span
                className={cn(
                  "text-[10px] px-1.5 py-0.2 rounded-full font-mono",
                  isSelected
                    ? "bg-[#171e19]/15 text-[#171e19]"
                    : "bg-surface border border-border/60 text-muted"
                )}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Projects List */}
      <div className="space-y-8">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => {
            const Icon = CATEGORY_ICONS[project.category] || Cpu;

            return (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25 }}
              >
                <Card className="p-4 sm:p-8 space-y-5 sm:space-y-6 border-border/80 hover:border-[#ffe17c]/50 transition-all">
                  {/* Top Bar with Title, Category, and Action Buttons */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-5 border-b border-border/60">
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2.5">
                        <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-[#ffe17c]/15 text-[#171e19] dark:text-[#ffe17c] border border-[#ffe17c]/30">
                          <Icon className="w-3.5 h-3.5" />
                          <span>{project.category}</span>
                        </span>
                        {project.featured && (
                          <span className="inline-flex items-center gap-1 text-[11px] font-mono text-[#171e19] dark:text-[#ffe17c] font-bold px-2 py-0.5 rounded bg-[#ffe17c]/25 border border-[#ffe17c]/40">
                            <Zap className="w-3 h-3 text-[#ffe17c]" />
                            <span>Featured Project</span>
                          </span>
                        )}
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-bold text-foreground font-heading tracking-tight">
                        {project.title}
                      </h3>
                      <p className="text-sm sm:text-base text-foreground font-medium">
                        {project.subtitle}
                      </p>
                    </div>

                    {/* Action Buttons with Proper Alignment */}
                    <div className="flex items-center gap-2.5 shrink-0 self-start md:self-center">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-border bg-surface hover:bg-surface-muted text-xs font-mono font-medium transition-colors shadow-2xs"
                        >
                          <Github className="w-4 h-4 text-muted" />
                          <span>View Repository</span>
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#ffe17c] hover:bg-[#f5d45d] text-[#171e19] text-xs font-mono font-bold shadow-xs transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span>Live Demo</span>
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Performance Metrics Glass Strip */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 p-4 rounded-xl bg-surface-muted/60 border border-border/80">
                    {project.metrics.map((metric, mIdx) => (
                      <div key={mIdx} className="space-y-1 text-center md:text-left">
                        <span className="text-[10px] font-mono uppercase text-muted tracking-wider block">
                          Verified Metric {mIdx + 1}
                        </span>
                        <p className="text-xs sm:text-sm font-mono font-bold text-foreground">
                          {metric}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Architectural Breakdown (Resume v5 Accurate) */}
                  <div className="space-y-3.5">
                    <h4 className="text-xs font-mono font-semibold text-foreground uppercase tracking-wide flex items-center gap-2">
                      <Sparkles className="w-3.5 h-3.5 text-[#ffe17c]" />
                      <span>Technical Architecture &amp; Implementation Details</span>
                    </h4>
                    <div className="space-y-2 text-xs sm:text-sm text-muted leading-relaxed">
                      {project.description.map((point, pIdx) => (
                        <div key={pIdx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-4 h-4 text-[#ffe17c] shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technology Tags */}
                  <div className="pt-4 border-t border-border/60 flex flex-wrap items-center gap-2">
                    <span className="text-xs font-mono text-muted mr-1.5">Stack:</span>
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md text-xs font-mono bg-surface-muted border border-border/70 text-foreground font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* GitHub Repository CTA */}
      <div className="p-6 sm:p-7 rounded-xl border border-border bg-surface-muted/60 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="space-y-1 text-center sm:text-left">
          <h4 className="text-sm font-bold text-foreground font-heading">
            Looking for more repositories and systems code?
          </h4>
          <p className="text-xs text-muted">
            Explore autonomous vision pipelines, Rust utilities, and algorithmic contest solutions on GitHub.
          </p>
        </div>
        <a
          href={PERSONAL_INFO.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-surface border border-border hover:bg-surface-muted text-xs font-mono font-medium transition-colors shrink-0 shadow-2xs"
        >
          <Github className="w-4 h-4 text-foreground" />
          <span>github.com/ravindran-dev</span>
        </a>
      </div>

      {/* Navigation CTA */}
      <div className="flex items-center justify-between pt-6 border-t border-border">
        <Link
          href="/experience"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-muted hover:text-foreground transition-colors px-3 py-2 rounded-lg hover:bg-surface-muted"
        >
          <span>← Professional Experience</span>
        </Link>
        <Link
          href="/skills"
          className="inline-flex items-center gap-1.5 text-sm font-bold text-[#171e19] bg-[#ffe17c] hover:bg-[#f5d45d] px-4 py-2 rounded-xl shadow-xs transition-all hover:scale-105"
        >
          <span>View Technical Skills</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </PageWrapper>
  );
}
