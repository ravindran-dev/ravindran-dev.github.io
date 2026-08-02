import React from "react";
import Link from "next/link";
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
} from "lucide-react";

export const metadata = {
  title: "Projects | Ravindran S",
  description: "High-performance systems engineering, Edge AI inference models, and distributed pipelines built by Ravindran S.",
};

export default function ProjectsPage() {
  return (
    <PageWrapper className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-12">
      {/* Header */}
      <SectionHeader
        badge="Engineering Portfolio"
        title="Featured Projects"
        description="Deep dives into sub-1 GFLOP computer vision models, kernel-level eBPF package security in Rust, and real-time distributed IoT telemetry."
      />

      {/* Projects List */}
      <div className="space-y-10">
        {PROJECTS.map((project) => (
          <Card key={project.id} className="p-6 sm:p-8 space-y-6">
            {/* Top Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-border/60">
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <Badge variant="primary">{project.category}</Badge>
                  {project.featured && (
                    <span className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-semibold">
                      Featured
                    </span>
                  )}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-foreground font-heading">
                  {project.title}
                </h3>
                <p className="text-sm text-primary font-medium mt-0.5">
                  {project.subtitle}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2.5 shrink-0">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg border border-border bg-surface hover:bg-surface-muted text-xs font-mono font-medium transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>Source Code</span>
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-primary hover:bg-primary-hover text-white text-xs font-mono font-semibold transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </div>

            {/* Performance Metrics Banner */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-3.5 rounded-xl bg-surface-muted border border-border/70">
              {project.metrics.map((metric, mIdx) => (
                <div key={mIdx} className="space-y-0.5 text-center sm:text-left">
                  <span className="text-[10px] font-mono uppercase text-muted tracking-wider">
                    Metric {mIdx + 1}
                  </span>
                  <p className="text-xs sm:text-sm font-mono font-bold text-foreground">
                    {metric}
                  </p>
                </div>
              ))}
            </div>

            {/* Detailed Description */}
            <div className="space-y-3 text-xs sm:text-sm text-muted leading-relaxed">
              <h4 className="text-xs font-mono font-semibold text-foreground uppercase tracking-wide">
                Architectural Breakdown
              </h4>
              {project.description.map((point, pIdx) => (
                <div key={pIdx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>{point}</span>
                </div>
              ))}
            </div>

            {/* Technologies */}
            <div className="pt-4 border-t border-border/60 flex flex-wrap items-center gap-1.5">
              <span className="text-xs font-mono text-muted mr-2">Built With:</span>
              {project.technologies.map((tech) => (
                <Badge key={tech} size="sm">
                  {tech}
                </Badge>
              ))}
            </div>
          </Card>
        ))}
      </div>

      {/* GitHub Repository CTA */}
      <div className="p-6 rounded-xl border border-border bg-surface-muted/60 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="space-y-1 text-center sm:text-left">
          <h4 className="text-sm font-bold text-foreground font-heading">
            Looking for more repositories and experimental code?
          </h4>
          <p className="text-xs text-muted">
            Check out open-source toolkits, algorithms, and systems experiments on GitHub.
          </p>
        </div>
        <a
          href={PERSONAL_INFO.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-surface border border-border hover:bg-surface-muted text-xs font-mono font-medium transition-colors shrink-0"
        >
          <Github className="w-4 h-4" />
          <span>github.com/ravindran-dev</span>
        </a>
      </div>

      {/* Navigation CTA */}
      <div className="flex items-center justify-between pt-6 border-t border-border">
        <Link
          href="/experience"
          className="text-sm font-medium text-muted hover:text-foreground transition-colors"
        >
          ← Professional Experience
        </Link>
        <Link
          href="/skills"
          className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-primary-hover transition-colors"
        >
          <span>View Technical Toolkit</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </PageWrapper>
  );
}
