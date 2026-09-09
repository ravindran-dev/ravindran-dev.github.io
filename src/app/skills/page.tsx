import React from "react";
import Link from "next/link";
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
  CheckCircle2,
} from "lucide-react";

export const metadata = {
  title: "Skills | Ravindran S",
  description: "Languages, machine learning frameworks, systems architecture, and infrastructure tooling proficiently used by Ravindran S.",
};

const CATEGORY_ICONS: Record<string, any> = {
  Languages: Code2,
  "ML / AI": Cpu,
  "Systems & Infrastructure": Server,
  "Web & Full-Stack": Globe,
  "Core Competencies": Binary,
};

export default function SkillsPage() {
  return (
    <PageWrapper className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-12">
      {/* Header */}
      <SectionHeader
        badge="Technical Matrix"
        title="Skills & Tooling"
        description="Comprehensive breakdown of programming languages, edge deep learning runtimes, kernel systems, and cloud infrastructure."
      />

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {SKILL_CATEGORIES.map((category) => {
          const Icon = CATEGORY_ICONS[category.category] || Code2;

          return (
            <Card key={category.category} className="p-6 space-y-5 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center gap-3 pb-3 border-b border-border/60">
                  <div className="w-9 h-9 rounded-lg bg-surface-muted text-primary flex items-center justify-center border border-border/80 shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-foreground font-heading">
                      {category.category}
                    </h3>
                    <p className="text-xs text-muted">
                      {category.description}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-2.5 rounded-lg bg-surface-muted/60 border border-border/60 flex items-center justify-between text-xs"
                    >
                      <span className="font-medium text-foreground">
                        {skill.name}
                      </span>
                      {skill.level && (
                        <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-surface border border-border/80 text-muted font-normal">
                          {skill.level}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-border/40 text-[11px] font-mono text-muted flex items-center justify-between">
                <span>{category.skills.length} competencies listed</span>
                <span className="text-primary font-semibold">Production Ready</span>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Daily Tooling & Environment */}
      <Card className="p-6 space-y-4 bg-surface-muted/40">
        <h3 className="text-sm font-bold font-heading text-foreground uppercase tracking-wide">
          Development Environment &amp; Hardware
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
          <div>
            <span className="font-mono text-muted block mb-1">Primary OS</span>
            <span className="font-semibold text-foreground">Arch Linux / Ubuntu LTS</span>
          </div>
          <div>
            <span className="font-mono text-muted block mb-1">Editors &amp; Tools</span>
            <span className="font-semibold text-foreground">Neovim, VS Code, GDB, Valgrind</span>
          </div>
          <div>
            <span className="font-mono text-muted block mb-1">Hardware Targets</span>
            <span className="font-semibold text-foreground">NVIDIA Jetson, x86_64, ARM64</span>
          </div>
          <div>
            <span className="font-mono text-muted block mb-1">Version Control</span>
            <span className="font-semibold text-foreground">Git, GitHub Actions CI</span>
          </div>
        </div>
      </Card>

      {/* Navigation CTA */}
      <div className="flex items-center justify-between pt-6 border-t border-border">
        <Link
          href="/projects"
          className="text-sm font-medium text-muted hover:text-foreground transition-colors"
        >
          ← Featured Projects
        </Link>
        <Link
          href="/achievements"
          className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-primary-hover transition-colors"
        >
          <span>View Achievements &amp; Contests</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </PageWrapper>
  );
}
