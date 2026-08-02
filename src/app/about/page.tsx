import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { PageWrapper } from "@/components/ui/PageWrapper";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import {
  GraduationCap,
  Cpu,
  Shield,
  Layers,
  Terminal,
  Brain,
  Zap,
  CheckCircle2,
  Download,
  Mail,
  ArrowRight,
} from "lucide-react";

export const metadata = {
  title: "About | Ravindran S",
  description: "Background, education, engineering philosophy and core competencies of Ravindran S.",
};

const HIGHLIGHTS = [
  {
    icon: Brain,
    title: "Problem Solving & Algorithms",
    description:
      "LeetCode Knight (2085 contest rating) with rigorous algorithmic problem-solving discipline in graphs, dynamic programming, and data structures.",
  },
  {
    icon: Cpu,
    title: "Edge AI & Inference",
    description:
      "Engineered sub-1 GFLOP object detection models with INT8 TensorRT quantization running at 30+ FPS on embedded drone hardware.",
  },
  {
    icon: Shield,
    title: "Systems & Security",
    description:
      "Built Archon AUR package manager in Rust with eBPF syscall monitors and Bubblewrap sandboxing to detect malicious package scripts with <5% overhead.",
  },
  {
    icon: Layers,
    title: "Distributed Systems & IoT",
    description:
      "Architected end-to-end IoT pipelines (MQTT, Firebase, React, TFLite) maintaining <200ms end-to-end alert latencies.",
  },
  {
    icon: Terminal,
    title: "Linux Internals & AOSP",
    description:
      "Proficient in kernel syscalls, process sandboxing, Android Open Source Project (AOSP), and low-level C/C++ memory management.",
  },
  {
    icon: Zap,
    title: "GPU Optimization & CUDA",
    description:
      "Hands-on experience in accelerating matrix operations, memory coalescing, and hardware-level compute pipeline efficiency.",
  },
];

export default function AboutPage() {
  return (
    <PageWrapper className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-16">
      {/* Header */}
      <SectionHeader
        badge="Background"
        title="About Me"
        description="Software engineer focused on systems engineering, edge AI inference, and distributed backend reliability."
      />

      {/* Main Bio & Image Section */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        {/* Photo Column */}
        <div className="md:col-span-4 space-y-4">
          <div className="rounded-2xl border border-border bg-surface-muted p-2 overflow-hidden shadow-sm">
            <div className="aspect-square relative rounded-xl overflow-hidden">
              <Image
                src="/photo.png"
                alt={PERSONAL_INFO.name}
                width={400}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          <Card className="p-4 space-y-3 bg-surface-muted/50 border-border/70 text-xs">
            <div className="flex items-center justify-between">
              <span className="text-muted">Status</span>
              <span className="font-mono text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                Open for SDE Roles
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-muted">Location</span>
              <span className="text-foreground font-medium">
                Chennai, India
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-muted">Education</span>
              <span className="text-foreground font-medium">B.E. CSE (AI &amp; ML)</span>
            </div>
            <div className="pt-2 border-t border-border flex justify-center">
              <a
                href={PERSONAL_INFO.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-1.5 rounded-md bg-primary hover:bg-primary-hover text-white font-medium transition-colors"
              >
                Download Resume
              </a>
            </div>
          </Card>
        </div>

        {/* Narrative Column */}
        <div className="md:col-span-8 space-y-6 text-sm sm:text-base text-muted leading-relaxed">
          <div className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground font-heading">
              Engineering high-performance software from the metal to the cloud.
            </h3>
            <p>
              I am a Computer Science undergraduate at <strong>Chennai Institute of Technology</strong> specializing in Artificial Intelligence and Machine Learning. My engineering passion lies at the intersection of low-level systems programming, embedded Edge AI acceleration, and scalable distributed architectures.
            </p>
            <p>
              Over the past few years, I have architected neural network pipelines that shrink compute requirements to sub-1 GFLOP for real-time drone payloads, built kernel-tracing package sandboxes with eBPF and Rust, and contributed patches directly to Amazon&apos;s AWS s2n-tls security library.
            </p>
            <p>
              Whether competing in international algorithmic contests (holding a <strong>2085 LeetCode Knight rating</strong> and competing in ICPC 2025) or winning national hackathons like Ti Forge, I enjoy taking on mathematically and architecturally demanding technical challenges.
            </p>
          </div>

          {/* Core Philosophy */}
          <div className="p-5 rounded-xl border border-blue-100 bg-blue-50/40 dark:border-blue-900/40 dark:bg-blue-950/20 text-foreground space-y-2">
            <h4 className="text-sm font-bold font-heading text-primary">
              Engineering Values &amp; Principles
            </h4>
            <ul className="text-xs sm:text-sm space-y-1.5 text-muted">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                <span><strong>Structural Integrity:</strong> Prioritizing correctness, memory safety, and deterministic behavior.</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                <span><strong>Minimal Overhead:</strong> Eliminating unnecessary layers of abstraction to maximize hardware efficiency.</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                <span><strong>Continuous Rigor:</strong> Solving complex algorithmic problems daily and validating designs under load.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Education Section */}
      <section className="space-y-6">
        <SectionHeader
          badge="Academics"
          title="Education"
          description="Formal foundation in computer science, machine learning theory, and systems engineering."
        />

        <Card className="p-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-4 border-b border-border/60">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-primary flex items-center justify-center shrink-0">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-foreground font-heading">
                  {PERSONAL_INFO.education.institution}
                </h3>
                <p className="text-sm text-primary font-medium">
                  {PERSONAL_INFO.education.degree}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Badge variant="primary" size="md">
                {PERSONAL_INFO.education.gpa}
              </Badge>
              <span className="text-xs font-mono text-muted">
                {PERSONAL_INFO.education.period}
              </span>
            </div>
          </div>

          <div className="mt-4 text-xs sm:text-sm text-muted">
            <p>
              <strong>Core Focus Areas:</strong> Data Structures &amp; Algorithms, Computer Vision, Deep Learning, Operating Systems, Database Management, Distributed Systems, Computer Networks, and Edge Computing.
            </p>
          </div>
        </Card>
      </section>

      {/* Technical Highlights / Competencies */}
      <section className="space-y-6">
        <SectionHeader
          badge="Expertise"
          title="Core Competencies"
          description="Specialized technical domains where I deliver high impact."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {HIGHLIGHTS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Card key={idx} className="p-5 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="w-9 h-9 rounded-lg bg-surface-muted text-primary flex items-center justify-center border border-border/80">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-bold text-foreground font-heading">
                    {item.title}
                  </h4>
                  <p className="text-xs text-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Navigation CTA */}
      <div className="flex items-center justify-between pt-6 border-t border-border">
        <Link
          href="/"
          className="text-sm font-medium text-muted hover:text-foreground transition-colors"
        >
          ← Back to Home
        </Link>
        <Link
          href="/experience"
          className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-primary-hover transition-colors"
        >
          <span>View Professional Experience</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </PageWrapper>
  );
}
