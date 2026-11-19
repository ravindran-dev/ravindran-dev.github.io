"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ACHIEVEMENTS, PERSONAL_INFO } from "@/data/portfolioData";
import { PageWrapper } from "@/components/ui/PageWrapper";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Marquee } from "@/components/ui/Marquee";
import {
  Trophy,
  Award,
  Flame,
  Code2,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  ExternalLink,
  ShieldCheck,
  GitPullRequest,
  GraduationCap,
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function AchievementsPage() {
  const [activeTab, setActiveTab] = useState<string>("All");

  const categories = [
    "All",
    "Competitive Programming",
    "Hackathon",
    "Certification",
    "Open Source",
  ];

  const filteredAchievements =
    activeTab === "All"
      ? ACHIEVEMENTS
      : ACHIEVEMENTS.filter((item) => item.category === activeTab);

  return (
    <PageWrapper className="w-full max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 py-12 sm:py-16 space-y-14">
      {/* Header */}
      <SectionHeader
        badge="Honors & Accolades"
        title="Achievements & Contests"
        description="Competitive programming rankings, national hackathon championships, Cisco professional certifications, and open source milestones."
      />

      {/* Accolades Marquee Banner */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-mono text-muted uppercase tracking-wider">
            <Flame className="w-4 h-4 text-amber-500 animate-pulse" />
            <span>Honors &amp; Milestones Stream</span>
          </div>
          <span className="text-xs font-mono text-muted">Hover to pause</span>
        </div>

        <div className="rounded-2xl border border-border/80 bg-surface-muted/30 p-2 overflow-hidden shadow-2xs">
          <Marquee speed="normal" pauseOnHover={true} className="py-1.5">
            {ACHIEVEMENTS.map((item) => (
              <div
                key={item.id}
                className="w-72 sm:w-80 shrink-0 p-4 rounded-xl border border-border bg-card shadow-2xs flex flex-col justify-between mx-2"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono text-[#ffe17c] font-bold uppercase tracking-wider">
                      {item.category}
                    </span>
                    {item.badgeText && (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#ffe17c]/20 text-[#171e19] dark:text-[#ffe17c] font-bold border border-[#ffe17c]/40">
                        {item.badgeText}
                      </span>
                    )}
                  </div>
                  <h4 className="text-sm font-bold text-foreground font-heading">
                    {item.title}
                  </h4>
                  <p className="text-xs text-muted mt-1 line-clamp-2">
                    {item.description}
                  </p>
                </div>
                <div className="pt-3 mt-3 border-t border-border/60 flex items-center justify-between text-xs font-mono text-foreground font-semibold">
                  <span className="truncate max-w-[150px]">{item.organization}</span>
                  <span className="text-[#ffe17c] shrink-0 font-bold">{item.metric}</span>
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex items-center justify-start gap-1.5 sm:gap-2 overflow-x-auto pb-2 scrollbar-none">
        {categories.map((cat) => {
          const isSelected = activeTab === cat;
          const count =
            cat === "All"
              ? ACHIEVEMENTS.length
              : ACHIEVEMENTS.filter((item) => item.category === cat).length;

          return (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveTab(cat)}
              className={cn(
                "px-4 py-2 rounded-full text-xs font-semibold transition-all shrink-0 select-none flex items-center gap-1.5",
                isSelected
                  ? "bg-[#ffe17c] text-[#171e19] shadow-xs font-bold"
                  : "bg-surface-muted border border-border/80 text-muted hover:text-foreground hover:bg-surface"
              )}
            >
              <span>{cat === "Hackathon" ? "Hackathons" : cat}</span>
              <span
                className={cn(
                  "text-[10px] px-1.5 py-0.2 rounded-full font-mono",
                  isSelected
                    ? "bg-[#171e19]/15 text-[#171e19] font-bold"
                    : "bg-surface border border-border/60 text-muted"
                )}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Achievements Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredAchievements.map((item) => {
            const isCP = item.category === "Competitive Programming";
            const isHack = item.category === "Hackathon";
            const isCert = item.category === "Certification";

            return (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                <Card
                  className={cn(
                    "p-6 space-y-4 h-full flex flex-col justify-between transition-all duration-200 border-border/80 hover:border-[#ffe17c]/50",
                    item.highlight && "ring-1 ring-[#ffe17c]/40 bg-[#ffe17c]/[0.03]"
                  )}
                >
                  <div className="space-y-3.5">
                    {/* Header Row */}
                    <div className="flex items-center justify-between gap-2 pb-3 border-b border-border/60">
                      <div className="flex items-center gap-2">
                        {isCP ? (
                          <Code2 className="w-4 h-4 text-[#ffe17c]" />
                        ) : isHack ? (
                          <Trophy className="w-4 h-4 text-[#ffe17c]" />
                        ) : isCert ? (
                          <ShieldCheck className="w-4 h-4 text-[#ffe17c]" />
                        ) : (
                          <GitPullRequest className="w-4 h-4 text-[#ffe17c]" />
                        )}
                        <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-muted">
                          {item.organization}
                        </span>
                      </div>

                      {item.badgeText && (
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full font-bold border bg-[#ffe17c]/15 text-[#171e19] dark:text-[#ffe17c] border-[#ffe17c]/30">
                          {item.badgeText}
                        </span>
                      )}
                    </div>

                    {/* Title & Metric */}
                    <div className="space-y-1">
                      <h4 className="text-base sm:text-lg font-bold text-foreground font-heading">
                        {item.title}
                      </h4>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-mono font-bold text-[#171e19] dark:text-[#ffe17c]">
                          {item.metric}
                        </span>
                        {item.date && (
                          <span className="text-[11px] font-mono text-muted">
                            • {item.date}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-muted leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Card Bottom Tag */}
                  <div className="pt-3 border-t border-border/50 flex items-center justify-between text-xs font-mono text-muted">
                    <span className="flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                      <span>{item.category}</span>
                    </span>
                    {item.highlight && (
                      <span className="text-[10px] font-bold text-primary uppercase">
                        Key Highlight
                      </span>
                    )}
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Navigation CTA */}
      <div className="flex items-center justify-between pt-6 border-t border-border">
        <Link
          href="/skills"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-muted hover:text-foreground transition-colors px-3 py-2 rounded-lg hover:bg-surface-muted"
        >
          <span>← Technical Skills</span>
        </Link>
        <Link
          href="/contact"
          className="inline-flex items-center gap-1.5 text-sm font-bold text-[#171e19] bg-[#ffe17c] hover:bg-[#f5d45d] px-4 py-2 rounded-xl shadow-xs transition-all hover:scale-105"
        >
          <span>Get in Touch</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </PageWrapper>
  );
}
