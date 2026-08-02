import React from "react";
import Link from "next/link";
import { EXPERIENCES, PERSONAL_INFO } from "@/data/portfolioData";
import { PageWrapper } from "@/components/ui/PageWrapper";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import {
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  GitPullRequest,
  Cpu,
  Layers,
} from "lucide-react";

export const metadata = {
  title: "Experience | Ravindran S",
  description: "Work history, engineering internships, research roles, and open source contributions of Ravindran S.",
};

export default function ExperiencePage() {
  return (
    <PageWrapper className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-12">
      {/* Header */}
      <SectionHeader
        badge="Career & Contributions"
        title="Experience & Research"
        description="Hands-on engineering across competitive hardware teams, production-grade API systems, and core open source infrastructure."
      />

      {/* Timeline Section */}
      <div className="relative pl-6 sm:pl-8 space-y-12 before:absolute before:left-[11px] sm:before:left-[15px] before:top-3 before:bottom-3 before:w-[2px] before:bg-border">
        {EXPERIENCES.map((exp, idx) => (
          <div key={idx} className="relative group">
            {/* Timeline Node Icon */}
            <div className="absolute -left-[30px] sm:-left-[38px] top-1.5 w-6 sm:w-8 h-6 sm:h-8 rounded-full border-2 border-white dark:border-zinc-950 bg-primary flex items-center justify-center text-white shadow-xs group-hover:scale-110 transition-transform">
              {idx === 0 ? (
                <Cpu className="w-3 sm:w-3.5 h-3 sm:h-3.5" />
              ) : idx === 1 ? (
                <Layers className="w-3 sm:w-3.5 h-3 sm:h-3.5" />
              ) : (
                <GitPullRequest className="w-3 sm:w-3.5 h-3 sm:h-3.5" />
              )}
            </div>

            {/* Experience Card */}
            <Card className="p-6 sm:p-7 space-y-5">
              {/* Header Details */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 pb-4 border-b border-border/60">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-primary uppercase tracking-wide font-semibold">
                      {exp.type}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-foreground font-heading">
                    {exp.role}
                  </h3>
                  <p className="text-sm font-medium text-foreground/90">
                    {exp.company}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1 text-xs font-mono px-2.5 py-1 rounded bg-surface-muted border border-border text-muted">
                    <Calendar className="w-3 h-3" />
                    {exp.period}
                  </span>
                  {exp.location && (
                    <span className="inline-flex items-center gap-1 text-xs font-mono px-2.5 py-1 rounded bg-surface-muted border border-border text-muted">
                      <MapPin className="w-3 h-3" />
                      {exp.location}
                    </span>
                  )}
                </div>
              </div>

              {/* Highlight callout if present */}
              {exp.highlight && (
                <div className="p-3 rounded-lg bg-blue-50/70 border border-blue-100 dark:bg-blue-950/30 dark:border-blue-900/50 flex items-start gap-2 text-xs sm:text-sm text-blue-900 dark:text-blue-200">
                  <Sparkles className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span><strong>Key Deliverable:</strong> {exp.highlight}</span>
                </div>
              )}

              {/* Bullet points */}
              <div className="space-y-2.5 text-xs sm:text-sm text-muted leading-relaxed">
                {exp.description.map((desc, dIdx) => (
                  <div key={dIdx} className="flex items-start gap-2.5">
                    <span className="text-primary font-bold mt-0.5">•</span>
                    <span>{desc}</span>
                  </div>
                ))}
              </div>

              {/* Technology Badges */}
              <div className="pt-3 border-t border-border/60 flex flex-wrap items-center gap-1.5">
                <span className="text-xs font-mono text-muted mr-1.5">Stack:</span>
                {exp.technologies.map((tech) => (
                  <Badge key={tech} size="sm">
                    {tech}
                  </Badge>
                ))}
              </div>
            </Card>
          </div>
        ))}
      </div>

      {/* Navigation CTA */}
      <div className="flex items-center justify-between pt-6 border-t border-border">
        <Link
          href="/about"
          className="text-sm font-medium text-muted hover:text-foreground transition-colors"
        >
          ← About &amp; Education
        </Link>
        <Link
          href="/projects"
          className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-primary-hover transition-colors"
        >
          <span>View Featured Projects</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </PageWrapper>
  );
}
