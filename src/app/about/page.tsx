import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { PageWrapper } from "@/components/ui/PageWrapper";
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
  ArrowUpRight,
  ExternalLink,
  MapPin,
  Sparkles,
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
      "LeetCode Knight (2085 peak contest rating) with rigorous discipline in dynamic programming, graph theory, and concurrent algorithmic pipelines.",
  },
  {
    icon: Cpu,
    title: "Edge AI & Hardware Quantization",
    description:
      "Engineered sub-1 GFLOP real-time drone vision models with TensorRT INT8 quantization running at 62 FPS on embedded hardware payloads.",
  },
  {
    icon: Shield,
    title: "Low-Level Systems & Security",
    description:
      "Engineered package managers in Rust with Aya eBPF kernel monitors and rootless Bubblewrap sandboxing, validated against adversarial attack vectors.",
  },
  {
    icon: Layers,
    title: "Distributed Architectures & IoT",
    description:
      "Architected end-to-end event streaming IoT pipelines (MQTT, FastAPI, Firebase, TFLite) delivering 1000+ msgs/sec at deterministic sub-50ms latency.",
  },
  {
    icon: Terminal,
    title: "Linux Internals & Kernel Systems",
    description:
      "Direct manipulation of hardware events via Linux evdev exclusive grabbing (EVIOCGRAB), /dev/uinput virtual HID synthesis, and C11/Rust systems programming.",
  },
  {
    icon: Zap,
    title: "GPU Acceleration & Memory Bounds",
    description:
      "Hands-on optimization of CUDA kernels, memory coalescing, and upstream memory-safety validation in Amazon AWS s2n-tls security library.",
  },
];

const METRICS = [
  { label: "LEETCODE RATING", value: "2085", detail: "Knight Badge · Top 1.5% globally" },
  { label: "ACADEMIC EXCELLENCE", value: "9.24", detail: "CGPA at Chennai Institute of Technology" },
  { label: "OPEN SOURCE", value: "AWS", detail: "Core Contributor to Amazon AWS s2n-tls" },
  { label: "EDGE INFERENCE", value: "<1 GFLOP", detail: "96% mAP TensorRT INT8 drone vision" },
];

export default function AboutPage() {
  return (
    <PageWrapper className="max-w-6xl 2xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-20 space-y-20">
      {/* 1. HERO SECTION: Centered Portrait Photo & Editorial Headline */}
      <section className="text-center space-y-8">
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[#171e19]/15 dark:border-[#b7c6c2]/20 bg-[#f8f9fa] dark:bg-[#202a24] text-xs font-mono font-bold tracking-widest uppercase text-foreground shadow-2xs">
          <span className="w-2 h-2 rounded-full bg-[#ffe17c] animate-pulse" />
          <span>AVAILABLE FOR SDE &amp; SYSTEMS ROLES</span>
        </div>

        {/* Centered Image Frame */}
        <div className="relative mx-auto w-64 h-72 sm:w-80 sm:h-96 rounded-3xl border-2 border-[#171e19]/15 dark:border-[#b7c6c2]/25 bg-white dark:bg-[#202a24] shadow-2xl overflow-hidden p-2 group transition-transform duration-300 hover:scale-[1.02]">
          {/* Subtle Glow Behind Photo */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#ffe17c]/20 via-transparent to-[#171e19]/30 opacity-70 pointer-events-none" />

          <div className="relative w-full h-full rounded-2xl overflow-hidden bg-surface-muted">
            <Image
              src="/photo.png"
              alt={PERSONAL_INFO.name}
              fill
              priority
              quality={95}
              className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 640px) 256px, 320px"
            />
          </div>

          {/* Floating Location Pill */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-[#171e19]/90 text-white backdrop-blur-md border border-white/20 text-[11px] font-mono flex items-center gap-1.5 shadow-lg select-none whitespace-nowrap">
            <MapPin size={12} className="text-[#ffe17c]" />
            <span>Chennai, India · SDE</span>
          </div>
        </div>

        {/* Centered Headline in Anton Display Typography */}
        <div className="space-y-3 max-w-4xl mx-auto">
          <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl uppercase tracking-tight text-foreground leading-[0.9]">
            RAVINDRAN S<span className="text-[#ffe17c]">.</span>
          </h1>
          <p className="font-mono text-xs sm:text-sm uppercase tracking-widest text-[#171e19]/70 dark:text-[#ffe17c] font-bold">
            Systems Engineer · Edge AI Inference · Linux Kernel Interception
          </p>
        </div>

        {/* Centered Editorial Bio Narrative */}
        <div className="max-w-2xl mx-auto space-y-4 text-base sm:text-lg font-sans text-[#171e19]/80 dark:text-[#b7c6c2] leading-relaxed">
          <p>
            Computer Science undergraduate at <strong>Chennai Institute of Technology</strong> (9.24 CGPA) specializing in hardware-level systems programming, Edge AI model quantization, and deterministic offline runtimes.
          </p>
          <p className="text-sm sm:text-base text-[#171e19]/70 dark:text-[#b7c6c2]/90">
            Engineered sub-1 GFLOP object detection models for autonomous drones achieving 96% mAP with TensorRT INT8, built eBPF package verification systems in Rust, and contributed memory-safety patches to Amazon&apos;s AWS s2n-tls core cryptographic library.
          </p>
        </div>

        {/* Action Buttons: Centered Stack */}
        <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
          <a
            href={PERSONAL_INFO.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#ffe17c] hover:bg-[#f5d45d] text-[#171e19] font-display text-base uppercase tracking-wider shadow-sm transition-transform hover:scale-105"
          >
            <span>DOWNLOAD CV (PDF)</span>
            <ArrowUpRight size={16} />
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-[#171e19]/20 dark:border-[#b7c6c2]/25 bg-white dark:bg-[#202a24] text-foreground hover:bg-[#171e19]/5 dark:hover:bg-[#171e19] font-sans font-bold text-xs uppercase tracking-wider transition-colors shadow-2xs"
          >
            <Mail size={15} />
            <span>GET IN TOUCH</span>
          </Link>
          <a
            href={PERSONAL_INFO.terminalPortfolioUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-[#171e19]/20 dark:border-[#ffe17c]/30 bg-surface-muted hover:bg-black/5 dark:bg-white/5 dark:hover:bg-white/10 text-foreground dark:text-[#ffe17c] font-mono text-xs font-bold transition-colors shadow-2xs"
          >
            <Terminal size={14} className="text-[#ffe17c]" />
            <span>CLI EDITION</span>
          </a>
        </div>
      </section>

      {/* 2. KEY METRICS STRIP: High-Contrast 4-Column Bento */}
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {METRICS.map((metric, idx) => (
          <div
            key={idx}
            className="rounded-2xl border border-[#171e19]/10 dark:border-[#b7c6c2]/15 bg-[#f8f9fa] dark:bg-[#202a24] p-5 text-center transition-all duration-300 hover:border-[#ffe17c] hover:-translate-y-0.5 shadow-xs"
          >
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#171e19]/60 dark:text-[#b7c6c2] block">
              {metric.label}
            </span>
            <span className="font-display text-3xl sm:text-4xl uppercase text-foreground mt-1 block">
              {metric.value}
            </span>
            <span className="text-[11px] font-sans text-[#171e19]/70 dark:text-[#b7c6c2]/80 mt-1 block leading-tight">
              {metric.detail}
            </span>
          </div>
        ))}
      </section>

      {/* 3. ENGINEERING VALUES & PRINCIPLES: 3 High-Impact Cards */}
      <section className="space-y-6">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#171e19]/15 dark:border-[#b7c6c2]/20 text-xs font-mono font-bold tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ffe17c] animate-pulse" />
            <span>OPERATING PHILOSOPHY</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl uppercase leading-[0.95] text-foreground">
            CORE PRINCIPLES.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-7 space-y-3 bg-white dark:bg-[#202a24] border border-[#171e19]/10 dark:border-[#b7c6c2]/15">
            <div className="w-10 h-10 rounded-xl bg-[#ffe17c]/20 text-[#171e19] dark:text-[#ffe17c] flex items-center justify-center font-display text-lg">
              01
            </div>
            <h3 className="font-display text-xl uppercase text-foreground">
              DETERMINISTIC LATENCY
            </h3>
            <p className="font-sans text-xs sm:text-sm text-[#171e19]/70 dark:text-[#b7c6c2] leading-relaxed">
              Eliminating brittle user-space hooks. Using evdev exclusive grabbing (EVIOCGRAB) and /dev/uinput virtual HID synthesis to achieve deterministic &lt;0.1ms latency.
            </p>
          </Card>

          <Card className="p-7 space-y-3 bg-white dark:bg-[#202a24] border border-[#171e19]/10 dark:border-[#b7c6c2]/15">
            <div className="w-10 h-10 rounded-xl bg-[#ffe17c]/20 text-[#171e19] dark:text-[#ffe17c] flex items-center justify-center font-display text-lg">
              02
            </div>
            <h3 className="font-display text-xl uppercase text-foreground">
              HARDWARE BOUNDS FIRST
            </h3>
            <p className="font-sans text-xs sm:text-sm text-[#171e19]/70 dark:text-[#b7c6c2] leading-relaxed">
              Engineering AI models to fit strict compute budgets. Calibrated TensorRT INT8 engines run sub-1 GFLOP vision at 62 FPS without thermal throttling.
            </p>
          </Card>

          <Card className="p-7 space-y-3 bg-white dark:bg-[#202a24] border border-[#171e19]/10 dark:border-[#b7c6c2]/15">
            <div className="w-10 h-10 rounded-xl bg-[#ffe17c]/20 text-[#171e19] dark:text-[#ffe17c] flex items-center justify-center font-display text-lg">
              03
            </div>
            <h3 className="font-display text-xl uppercase text-foreground">
              CRYPTOGRAPHIC INTEGRITY
            </h3>
            <p className="font-sans text-xs sm:text-sm text-[#171e19]/70 dark:text-[#b7c6c2] leading-relaxed">
              Security verified at the system level. Automated regression fuzzing, memory-safe C11 bounds in AWS s2n-tls, and rootless eBPF sandbox validation.
            </p>
          </Card>
        </div>
      </section>

      {/* 4. ACADEMICS & EDUCATION: Centered High-Contrast Banner */}
      <section className="space-y-6">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#171e19]/15 dark:border-[#b7c6c2]/20 text-xs font-mono font-bold tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ffe17c] animate-pulse" />
            <span>FOUNDATION</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl uppercase leading-[0.95] text-foreground">
            EDUCATION &amp; RESEARCH.
          </h2>
        </div>

        <Card className="p-7 sm:p-9 bg-white dark:bg-[#202a24] border border-[#171e19]/10 dark:border-[#b7c6c2]/15 shadow-lg">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-5 border-b border-[#171e19]/10 dark:border-[#b7c6c2]/10">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#ffe17c]/20 text-[#171e19] dark:text-[#ffe17c] flex items-center justify-center shrink-0">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-display uppercase text-foreground">
                  {PERSONAL_INFO.education.institution}
                </h3>
                <p className="text-sm font-semibold text-[#171e19] dark:text-[#ffe17c]">
                  {PERSONAL_INFO.education.degree}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-[#ffe17c] text-[#171e19] font-mono text-xs font-bold">
                {PERSONAL_INFO.education.gpa}
              </span>
              <span className="text-xs font-mono text-muted">
                {PERSONAL_INFO.education.period}
              </span>
            </div>
          </div>

          <div className="mt-5 text-xs sm:text-sm text-[#171e19]/80 dark:text-[#b7c6c2] leading-relaxed">
            <p>
              <strong>Core Curriculum &amp; Specialization:</strong> Data Structures &amp; Algorithms, Computer Vision, Deep Learning, Operating Systems, Systems Programming, Distributed Systems, Computer Networks, and Edge AI Hardware.
            </p>
          </div>
        </Card>
      </section>

      {/* 5. CORE TECHNICAL COMPETENCIES: 6-Card Grid */}
      <section className="space-y-6">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#171e19]/15 dark:border-[#b7c6c2]/20 text-xs font-mono font-bold tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ffe17c] animate-pulse" />
            <span>AREAS OF IMPACT</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl uppercase leading-[0.95] text-foreground">
            TECHNICAL COMPETENCIES.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {HIGHLIGHTS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Card
                key={idx}
                className="p-6 flex flex-col justify-between bg-white dark:bg-[#202a24] border border-[#171e19]/10 dark:border-[#b7c6c2]/15 hover:border-[#ffe17c] transition-all shadow-xs"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-[#f8f9fa] dark:bg-[#171e19] text-foreground flex items-center justify-center border border-[#171e19]/10 dark:border-[#b7c6c2]/20">
                    <Icon className="w-5 h-5 text-[#ffe17c]" />
                  </div>
                  <h4 className="font-display text-lg uppercase text-foreground leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#171e19]/70 dark:text-[#b7c6c2] leading-relaxed font-sans">
                    {item.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </section>

      {/* 6. BOTTOM NAVIGATION CTA */}
      <div className="flex items-center justify-between pt-8 border-t border-[#171e19]/10 dark:border-[#b7c6c2]/15">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted hover:text-foreground transition-colors px-4 py-2.5 rounded-xl hover:bg-[#171e19]/5 dark:hover:bg-[#202a24]"
        >
          <span>← Back to Home</span>
        </Link>
        <Link
          href="/experience"
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#171e19] bg-[#ffe17c] hover:bg-[#f5d45d] px-6 py-3 rounded-xl shadow-xs transition-transform hover:scale-105"
        >
          <span>View Professional Experience</span>
          <ArrowRight size={14} />
        </Link>
      </div>
    </PageWrapper>
  );
}
