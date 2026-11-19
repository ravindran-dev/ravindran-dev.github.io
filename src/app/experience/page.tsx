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
    <PageWrapper className="w-full max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 py-12 sm:py-16 space-y-12">
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
            <div className="absolute -left-[30px] sm:-left-[38px] top-1.5 w-6 sm:w-8 h-6 sm:h-8 rounded-full border-2 border-[#ffe17c] bg-white dark:bg-[#171e19] flex items-center justify-center text-[#171e19] dark:text-[#ffe17c] shadow-xs group-hover:scale-110 transition-transform">
              {idx === 0 ? (
                <Cpu className="w-3 sm:w-3.5 h-3 sm:h-3.5" />
              ) : idx === 1 ? (
                <Layers className="w-3 sm:w-3.5 h-3 sm:h-3.5" />
              ) : (
                <GitPullRequest className="w-3 sm:w-3.5 h-3 sm:h-3.5" />
              )}
            </div>

            {/* Experience Card */}
            <Card className="p-4 sm:p-7 space-y-4 sm:space-y-5 hover:border-[#ffe17c]/40 transition-all">
              {/* Header Details */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 pb-4 border-b border-border/60">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-[#171e19] dark:text-[#ffe17c] uppercase tracking-wide font-bold">
                      {exp.type}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-foreground font-heading">
                    {exp.role}
                  </h3>
                  <p className="text-sm font-medium text-foreground">
                    {exp.company}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1 text-xs font-mono px-2.5 py-1 rounded-lg bg-surface-muted border border-border text-muted">
                    <Calendar className="w-3 h-3" />
                    {exp.period}
                  </span>
                  {exp.location && (
                    <span className="inline-flex items-center gap-1 text-xs font-mono px-2.5 py-1 rounded-lg bg-surface-muted border border-border text-muted">
                      <MapPin className="w-3 h-3" />
                      {exp.location}
                    </span>
                  )}
                </div>
              </div>

              {/* Highlight callout if present */}
              {exp.highlight && (
                <div className="p-3.5 rounded-xl bg-[#ffe17c]/10 border border-[#ffe17c]/30 dark:bg-[#202a24] flex items-start gap-2 text-xs sm:text-sm text-foreground">
                  <Sparkles className="w-4 h-4 text-[#ffe17c] shrink-0 mt-0.5" />
                  <span><strong>Key Deliverable:</strong> {exp.highlight}</span>
                </div>
              )}

              {/* Bullet points */}
              <div className="space-y-2 text-xs sm:text-sm text-muted leading-relaxed">
                {exp.description.map((desc, dIdx) => (
                  <div key={dIdx} className="flex items-start gap-2.5">
                    <span className="text-[#ffe17c] font-bold mt-0.5">•</span>
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
          className="inline-flex items-center gap-1.5 text-sm font-medium text-muted hover:text-foreground transition-colors px-3 py-2 rounded-lg hover:bg-surface-muted"
        >
          <span>← About &amp; Education</span>
        </Link>
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#171e19] bg-[#ffe17c] hover:bg-[#f5d45d] px-5 py-2.5 rounded-xl shadow-xs transition-transform hover:scale-105"
        >
          <span>View Featured Projects</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </PageWrapper>
  );
}
