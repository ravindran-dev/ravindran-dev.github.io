import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  PERSONAL_INFO,
  PROJECTS,
  EXPERIENCES,
  ACHIEVEMENTS,
} from "@/data/portfolioData";
import { PageWrapper } from "@/components/ui/PageWrapper";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Marquee } from "@/components/ui/Marquee";
import {
  ArrowRight,
  Download,
  Terminal,
  Cpu,
  Shield,
  Layers,
  Award,
  ExternalLink,
  Github,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

export default function HomePage() {
  return (
    <PageWrapper className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-16 space-y-20">
      {/* Hero Section */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        {/* Left Hero Column */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-200 bg-blue-50/80 text-blue-700 dark:border-blue-900/60 dark:bg-blue-950/40 dark:text-blue-300 text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Available for SDE &amp; Systems Roles</span>
          </div>

          <div className="space-y-2">
            <p className="text-sm sm:text-base font-mono text-muted uppercase tracking-wider">
              Hello, I&apos;m
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground font-heading">
              {PERSONAL_INFO.name}
            </h1>
            <p className="text-xl sm:text-2xl font-medium text-primary">
              {PERSONAL_INFO.title}
            </p>
          </div>

          <p className="text-base sm:text-lg text-muted leading-relaxed max-w-xl">
            {PERSONAL_INFO.summary}
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary hover:bg-primary-hover text-white text-sm font-semibold shadow-xs transition-colors"
            >
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={PERSONAL_INFO.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border bg-surface hover:bg-surface-muted text-foreground text-sm font-medium transition-colors"
            >
              <Download className="w-4 h-4 text-muted" />
              <span>Download Resume</span>
            </a>
          </div>

          {/* Quick tech stack icons row */}
          <div className="pt-4 border-t border-border/60 flex flex-wrap items-center gap-2">
            <span className="text-xs text-muted font-mono mr-2">Core Tech:</span>
            {["C++", "Rust", "Go", "Python", "TensorRT", "PyTorch", "eBPF", "Linux", "React"].map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 rounded text-xs font-mono bg-surface-muted border border-border/70 text-foreground/80"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Right Hero Column: Professional Photo */}
        <div className="lg:col-span-5 flex flex-col items-center">
          <div className="relative w-full max-w-sm">
            <div className="overflow-hidden rounded-2xl border border-border bg-surface-muted shadow-lg shadow-slate-200/50 dark:shadow-black/50 aspect-square relative">
              <Image
                src="/photo.png"
                alt={PERSONAL_INFO.name}
                width={500}
                height={500}
                priority
                className="object-cover w-full h-full"
              />
            </div>
            
            {/* Overlay Info Pill */}
            <div className="absolute -bottom-4 left-4 right-4 p-3 rounded-xl border border-border bg-white/95 dark:bg-zinc-900/95 backdrop-blur-md shadow-md flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-600" />
                <span className="font-medium text-foreground">
                  Chennai Institute of Technology
                </span>
              </div>
              <span className="font-mono text-primary font-semibold">
                9.24 CGPA
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics & Highlights Grid */}
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {PERSONAL_INFO.stats.map((stat, idx) => (
          <Card
            key={idx}
            className="p-5 border-border/80 bg-surface-muted/40 flex flex-col justify-between"
          >
            <span className="text-xs font-mono text-muted uppercase tracking-wider">
              {stat.label}
            </span>
            <div className="my-2">
              <span className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground font-heading">
                {stat.value}
              </span>
            </div>
            <p className="text-xs text-muted">{stat.detail}</p>
          </Card>
        ))}
      </section>

      {/* Featured Projects Preview */}
      <section className="space-y-6">
        <SectionHeader
          badge="Work & Systems"
          title="Featured Projects"
          description="A selection of high-performance systems engineering, edge AI inference, and distributed pipelines."
          linkText="View All Projects"
          linkHref="/projects"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PROJECTS.map((project) => (
            <Card
              key={project.id}
              className="flex flex-col justify-between p-6 h-full group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Badge variant="primary">{project.category}</Badge>
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted hover:text-foreground transition-colors"
                      aria-label={`${project.title} GitHub`}
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                </div>

                <div>
                  <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors font-heading">
                    {project.title}
                  </h3>
                  <p className="text-xs text-muted mt-1">{project.subtitle}</p>
                </div>

                <p className="text-xs sm:text-sm text-muted line-clamp-3 leading-relaxed">
                  {project.description[0]}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <Badge key={tech} size="sm">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 4 && (
                    <Badge size="sm">+{project.technologies.length - 4}</Badge>
                  )}
                </div>
              </div>

              <div className="pt-6 mt-4 border-t border-border/60 flex items-center justify-between text-xs">
                <span className="font-mono text-primary font-medium">
                  {project.metrics[0]}
                </span>
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-1 font-medium text-foreground hover:text-primary transition-colors"
                >
                  <span>Details</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Horizontal Moving Marquee for Achievements */}
      <section className="space-y-4">
        <SectionHeader
          badge="Recognition"
          title="Achievements & Recognition"
          description="Competitive programming accolades, national hackathon championships, and open source contributions."
          linkText="View All Achievements"
          linkHref="/achievements"
        />

        <div className="py-2">
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
        </div>
      </section>

      {/* Experience Snapshot */}
      <section className="space-y-6">
        <SectionHeader
          badge="Career"
          title="Recent Experience"
          description="Hands-on engineering across research teams, open source, and full-stack internships."
          linkText="Full Career Timeline"
          linkHref="/experience"
        />

        <div className="space-y-4">
          {EXPERIENCES.map((exp, idx) => (
            <Card key={idx} className="p-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 pb-3 border-b border-border/60">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-foreground font-heading">
                    {exp.role}
                  </h3>
                  <p className="text-sm text-primary font-medium">
                    {exp.company}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-muted px-2.5 py-1 rounded bg-surface-muted border border-border/60">
                    {exp.period}
                  </span>
                </div>
              </div>

              <div className="mt-4 space-y-2 text-xs sm:text-sm text-muted">
                {exp.description.map((desc, dIdx) => (
                  <p key={dIdx} className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>{desc}</span>
                  </p>
                ))}
              </div>

              <div className="mt-4 pt-3 flex flex-wrap gap-1.5">
                {exp.technologies.map((t) => (
                  <Badge key={t} size="sm">
                    {t}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="p-8 sm:p-10 rounded-2xl border border-blue-200 bg-gradient-to-r from-blue-50/50 via-white to-blue-50/30 dark:border-blue-900/50 dark:from-zinc-900 dark:via-zinc-900 dark:to-blue-950/20 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center sm:text-left">
          <h3 className="text-xl sm:text-2xl font-bold text-foreground font-heading">
            Let&apos;s build something impactful together.
          </h3>
          <p className="text-sm text-muted max-w-md">
            Open for Software Engineering roles, systems research, and high-impact distributed teams.
          </p>
        </div>
        <Link
          href="/contact"
          className="px-6 py-3 rounded-lg bg-primary hover:bg-primary-hover text-white text-sm font-semibold shrink-0 shadow-xs transition-colors inline-flex items-center gap-2"
        >
          <span>Get in Touch</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </PageWrapper>
  );
}
