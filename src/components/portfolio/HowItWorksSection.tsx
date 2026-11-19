"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

export function HowItWorksSection() {
  const steps = [
    {
      num: "01",
      title: "KERNEL & HARDWARE VIRTUALIZATION",
      eyebrow: "FOUNDATION · LOW-LEVEL SYSTEMS",
      desc: "Direct manipulation of hardware events via Linux evdev exclusive grabbing (EVIOCGRAB), eBPF sandboxing, and /dev/uinput virtual HID synthesis. Bypasses user-space lag to guarantee deterministic <0.1ms latency.",
      tags: ["Linux Kernel 6.x", "evdev EVIOCGRAB", "/dev/uinput", "eBPF", "Rust", "C11"],
    },
    {
      num: "02",
      title: "EDGE AI QUANTIZATION & AGENT RUNTIMES",
      eyebrow: "INTELLIGENCE · LOCAL RUNTIMES",
      desc: "Quantizing neural vision pipelines into sub-1 GFLOP TensorRT INT8 engines achieving 60+ FPS on embedded drone chips. Deploying private LLM orchestrators locked to loopback sockets (127.0.0.1:8420) with zero cloud data leakage.",
      tags: ["TensorRT INT8", "Sub-1 GFLOP", "PyTorch", "127.0.0.1:8420", "FastAPI", "Ollama"],
    },
    {
      num: "03",
      title: "PRODUCTION TOOLCHAINS & TYPED SDKS",
      eyebrow: "DISTRIBUTION · DEVELOPER PLATFORMS",
      desc: "Packaging systems with native Rust launchers (@jarvis), typed Python event streaming SDKs, and sub-second SAT package solvers. Backed by SHA-256 cryptographic package validation and rootless rollbacks.",
      tags: ["Python 3.10+ SDK", "Rust Launcher", "SAT Solver", "SHA-256 Signed", "Rollback Safe"],
    },
  ];

  return (
    <section className="w-full" aria-label="How It Works">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        {/* Left Column (Sticky 1:2 ratio = 4 columns on lg) */}
        <div className="lg:col-span-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-28 space-y-4"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#171e19]/15 dark:border-[#b7c6c2]/20 text-xs font-mono font-bold tracking-widest uppercase text-[#171e19] dark:text-[#ffe17c]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ffe17c] animate-pulse" />
              <span>EXECUTION FRAMEWORK</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl lg:text-7xl uppercase leading-[0.9] text-foreground">
              HOW I ENGINEER SYSTEMS.
            </h2>
            <p className="font-sans text-xs sm:text-sm text-[#171e19]/70 dark:text-[#b7c6c2] leading-relaxed max-w-sm pt-1">
              From hardware-level kernel interrupts to edge AI quantization and typed developer toolchains.
            </p>

            <div className="pt-3">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#171e19] dark:bg-[#ffe17c] text-white dark:text-[#171e19] font-sans font-bold text-xs uppercase tracking-wider transition-transform hover:scale-105 shadow-sm"
              >
                <span>Explore All Projects</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Right Column (Vertical Stack = 8 columns on lg) */}
        <div className="lg:col-span-8 space-y-6">
          {steps.map((step, idx) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: idx * 0.15, duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
              className="group relative rounded-3xl border border-[#171e19]/15 dark:border-[#b7c6c2]/15 bg-[#f8f9fa] dark:bg-[#1f2822] p-5 sm:p-8 shadow-lg transition-all duration-300 hover:shadow-2xl hover:border-[#ffe17c]/80 overflow-hidden"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 sm:gap-6">
                <div className="space-y-2.5 max-w-xl">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#171e19] dark:text-[#ffe17c]">
                    {step.eyebrow}
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl uppercase text-foreground leading-tight">
                    {step.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-[#171e19]/75 dark:text-muted leading-relaxed">
                    {step.desc}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {step.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-[10px] font-mono bg-white dark:bg-white/5 border border-[#171e19]/10 dark:border-white/10 text-[#171e19] dark:text-white font-medium"
                      >
                        <Check size={10} className="text-[#ffe17c]" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Massive numeral: #ffe17c/20% that changes to full opacity on hover */}
                <div className="shrink-0 select-none self-end sm:self-auto">
                  <span className="font-display text-5xl sm:text-8xl leading-none text-[#ffe17c]/30 dark:text-[#ffe17c]/20 group-hover:text-[#ffe17c] transition-colors duration-300">
                    {step.num}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
