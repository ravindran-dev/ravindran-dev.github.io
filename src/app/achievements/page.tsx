import React from "react";
import Link from "next/link";
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
} from "lucide-react";

export const metadata = {
  title: "Achievements | Ravindran S",
  description: "Competitive programming ratings (LeetCode Knight 2085), Hackathon championships, Cisco certifications, and open source milestones.",
};

export default function AchievementsPage() {
  const competitiveProgramming = ACHIEVEMENTS.filter(
    (a) => a.category === "Competitive Programming"
  );
  const hackathons = ACHIEVEMENTS.filter((a) => a.category === "Hackathon");
  const certificationsAndOS = ACHIEVEMENTS.filter(
    (a) => a.category === "Certification" || a.category === "Open Source"
  );

  return (
    <PageWrapper className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-16">
      {/* Header */}
      <SectionHeader
        badge="Honors & Recognition"
        title="Achievements & Contests"
        description="Competitive programming rankings, national hackathon championships, Cisco professional certifications, and open source contributions."
      />

      {/* Horizontally Animated Marquee Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-mono text-muted uppercase tracking-wider">
            <Flame className="w-4 h-4 text-amber-500 animate-pulse" />
            <span>Live Highlights &amp; Accolades</span>
          </div>
          <span className="text-xs font-mono text-muted">Hover to pause</span>
        </div>

        {/* Marquee Track 1 */}
        <div className="rounded-xl border border-border/80 bg-surface-muted/30 p-2 overflow-hidden">
          <Marquee speed="normal" pauseOnHover={true} className="py-2">
            {ACHIEVEMENTS.map((item) => (
              <div
                key={item.id}
                className="w-72 sm:w-80 shrink-0 p-4 rounded-xl border border-border bg-card shadow-xs flex flex-col justify-between mx-2"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-mono text-primary font-medium uppercase">
                      {item.category}
                    </span>
                    {item.badgeText && (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-50 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300 font-semibold">
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
                  <span>{item.organization}</span>
                  <span className="text-primary">{item.metric}</span>
                </div>
              </div>
            ))}
          </Marquee>

          {/* Marquee Track 2 (Reverse Direction for Dynamic Flow) */}
          <Marquee speed="slow" direction="right" pauseOnHover={true} className="py-2">
            {[...ACHIEVEMENTS].reverse().map((item) => (
              <div
                key={`rev-${item.id}`}
                className="w-72 sm:w-80 shrink-0 p-3.5 rounded-xl border border-border/70 bg-card shadow-xs flex items-center justify-between gap-3 mx-2"
              >
                <div className="space-y-0.5 truncate">
                  <span className="text-[10px] font-mono text-muted uppercase">
                    {item.organization}
                  </span>
                  <p className="text-xs font-bold text-foreground truncate font-heading">
                    {item.title}
                  </p>
                </div>
                <Badge variant="primary" size="sm" className="shrink-0 font-bold">
                  {item.metric}
                </Badge>
              </div>
            ))}
          </Marquee>
        </div>
      </div>

      {/* Competitive Programming Showcase */}
      <section className="space-y-6">
        <div className="flex items-center gap-2 pb-3 border-b border-border/60">
          <Code2 className="w-5 h-5 text-primary" />
          <h3 className="text-lg sm:text-xl font-bold text-foreground font-heading">
            Competitive Programming
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {competitiveProgramming.map((cp) => (
            <Card key={cp.id} className="p-6 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-border/60">
                <div>
                  <h4 className="text-base font-bold text-foreground font-heading">
                    {cp.organization}
                  </h4>
                  <p className="text-xs text-muted">{cp.title}</p>
                </div>
                <div className="text-right">
                  <span className="text-lg font-mono font-bold text-primary block">
                    {cp.metric}
                  </span>
                  {cp.badgeText && (
                    <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-medium">
                      {cp.badgeText}
                    </span>
                  )}
                </div>
              </div>

              <p className="text-xs sm:text-sm text-muted leading-relaxed">
                {cp.description}
              </p>
            </Card>
          ))}
        </div>
      </section>

      {/* Hackathons & Championships */}
      <section className="space-y-6">
        <div className="flex items-center gap-2 pb-3 border-b border-border/60">
          <Trophy className="w-5 h-5 text-amber-500" />
          <h3 className="text-lg sm:text-xl font-bold text-foreground font-heading">
            Hackathons &amp; Competitions
          </h3>
        </div>

        <div className="space-y-4">
          {hackathons.map((hack) => (
            <Card key={hack.id} className="p-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-border/60">
                <div className="space-y-0.5">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-amber-600 dark:text-amber-400 font-semibold uppercase">
                      Championship
                    </span>
                    {hack.badgeText && (
                      <Badge variant="warning" size="sm">
                        {hack.badgeText}
                      </Badge>
                    )}
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-foreground font-heading">
                    {hack.title}
                  </h4>
                </div>
                <span className="font-mono text-sm sm:text-base font-bold text-primary">
                  {hack.metric}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-muted leading-relaxed mt-3">
                {hack.description}
              </p>
            </Card>
          ))}
        </div>
      </section>

      {/* Certifications & Open Source */}
      <section className="space-y-6">
        <div className="flex items-center gap-2 pb-3 border-b border-border/60">
          <ShieldCheck className="w-5 h-5 text-emerald-600" />
          <h3 className="text-lg sm:text-xl font-bold text-foreground font-heading">
            Certifications &amp; Open Source
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {certificationsAndOS.map((item) => (
            <Card key={item.id} className="p-6 space-y-3">
              <div className="flex items-center justify-between">
                <Badge variant={item.category === "Certification" ? "primary" : "success"}>
                  {item.category}
                </Badge>
                <span className="text-xs font-mono text-muted">{item.metric}</span>
              </div>
              <h4 className="text-sm sm:text-base font-bold text-foreground font-heading">
                {item.title}
              </h4>
              <p className="text-xs text-muted leading-relaxed">
                {item.description}
              </p>
            </Card>
          ))}
        </div>
      </section>

      {/* Navigation CTA */}
      <div className="flex items-center justify-between pt-6 border-t border-border">
        <Link
          href="/skills"
          className="text-sm font-medium text-muted hover:text-foreground transition-colors"
        >
          ← Technical Toolkit
        </Link>
        <Link
          href="/contact"
          className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-primary-hover transition-colors"
        >
          <span>Get in Touch</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </PageWrapper>
  );
}
