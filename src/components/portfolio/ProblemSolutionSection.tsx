"use client";

import React from "react";
import { motion } from "framer-motion";
import { X, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

export function ProblemSolutionSection() {
  const problems = [
    {
      title: "Cloud Lock-In & Data Egress",
      desc: "Terminal commands and local files streamed to third-party cloud APIs.",
    },
    {
      title: "Bloated 500ms+ Wrapper Latencies",
      desc: "Heavy Electron shells with massive memory footprints and input lag.",
    },
    {
      title: "Heavy Compute Overhead (>15 GFLOPs)",
      desc: "Untuned vision architectures that thermal-throttle on drone processors.",
    },
    {
      title: "Fragile User-Space Key Hooks",
      desc: "Brittle event listeners that freeze keys and fail completely on Wayland.",
    },
  ];

  const solutions = [
    {
      title: "100% Loopback Isolation (127.0.0.1:8420)",
      desc: "Zero-leakage local AI agent runtime with sub-millisecond native Rust launcher.",
    },
    {
      title: "Sub-0.1ms Kernel-Level Virtualization",
      desc: "Exclusive evdev grabbing (EVIOCGRAB) and /dev/uinput HID virtual keyboard synthesis.",
    },
    {
      title: "Sub-1 GFLOP Edge AI Quantization",
      desc: "TensorRT INT8 engine running real-time drone vision at 96% mAP and 62 FPS.",
    },
    {
      title: "Sandboxed Distro Toolchains (Archon)",
      desc: "Rust package manager with Bubblewrap sandbox isolation and eBPF kernel security monitoring.",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      className="w-full my-16 overflow-hidden rounded-3xl border border-[#171e19]/15 dark:border-[#b7c6c2]/15 shadow-2xl"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left Half: Problem ("THE OLD WAY") */}
        <div className="bg-[#171e19] text-white p-5 sm:p-10 lg:p-14 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-[10px] sm:text-xs font-mono uppercase tracking-wider sm:tracking-widest mb-4 sm:mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
              <span>Inefficient Engineering</span>
            </div>

            <h3 className="font-display text-3xl sm:text-5xl lg:text-6xl uppercase leading-[0.9] text-white">
              THE OLD WAY
            </h3>
            <p className="font-sans text-xs sm:text-sm text-[#b7c6c2] mt-3 mb-6 sm:mb-7 max-w-md leading-relaxed">
              Fragile architectures reliant on third-party cloud endpoints and heavy runtimes.
            </p>

            <div className="space-y-4 sm:space-y-5">
              {problems.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 sm:gap-3.5">
                  <div className="w-6 h-6 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center shrink-0 mt-0.5">
                    <X size={14} className="text-red-400" />
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-sm text-white/95">
                      {item.title}
                    </h4>
                    <p className="font-sans text-xs text-[#b7c6c2] mt-0.5 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-6 sm:pt-8 mt-6 sm:mt-8 border-t border-white/10 text-[10px] sm:text-[11px] font-mono text-[#b7c6c2]">
            COMMON PITFALLS OF UNOPTIMIZED RUNTIMES
          </div>
        </div>

        {/* Right Half: Solution ("THE SYSTEMS WAY") */}
        <div className="bg-[#272727] text-white p-5 sm:p-10 lg:p-14 flex flex-col justify-between border-2 border-[#ffe17c] relative">
          <div className="absolute top-0 right-0 w-72 h-72 bg-[#ffe17c]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ffe17c]/20 border border-[#ffe17c]/40 text-[#ffe17c] text-[10px] sm:text-xs font-mono uppercase tracking-wider sm:tracking-widest mb-4 sm:mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ffe17c] animate-pulse" />
              <span>Architected For Production</span>
            </div>

            <h3 className="font-display text-3xl sm:text-5xl lg:text-6xl uppercase leading-[0.9] text-white">
              THE SYSTEMS WAY
            </h3>
            <p className="font-sans text-xs sm:text-sm text-zinc-300 mt-3 mb-6 sm:mb-7 max-w-md leading-relaxed">
              Deterministic performance in C, Rust, and Linux kernel primitives.
            </p>

            <div className="space-y-5">
              {solutions.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3.5">
                  <div className="w-6 h-6 rounded-lg bg-[#ffe17c]/20 border border-[#ffe17c]/40 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 size={14} className="text-[#ffe17c]" />
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-sm text-white">
                      {item.title}
                    </h4>
                    <p className="font-sans text-xs text-zinc-300 mt-0.5 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-8 mt-8 border-t border-white/10 flex items-center justify-between relative z-10">
            <span className="text-[11px] font-mono text-[#ffe17c]">
              BUILT FOR LOW-LATENCY AUTONOMY
            </span>
            <Link
              href="/products"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#ffe17c] hover:underline"
            >
              <span>Explore Toolchains</span>
              <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
