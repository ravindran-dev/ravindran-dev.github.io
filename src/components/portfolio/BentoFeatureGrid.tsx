"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Download,
} from "lucide-react";

export function BentoFeatureGrid() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
    },
  };

  return (
    <section className="space-y-8 my-8 sm:my-12" aria-label="Bento Feature Grid">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-[#171e19]/15 dark:border-[#b7c6c2]/20 bg-white/80 dark:bg-[#202a24] px-3.5 py-1 text-xs font-mono font-bold tracking-widest uppercase text-foreground dark:text-[#ffe17c]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ffe17c] animate-pulse" />
            <span>CORE SYSTEMS &amp; TOOLCHAINS</span>
          </div>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl lg:text-6xl uppercase leading-[0.9] text-foreground">
            ENGINEERING CAPABILITIES.
          </h2>
        </div>
        <Link
          href="/products"
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted hover:text-foreground transition-colors"
        >
          <span>Explore All 8 Releases</span>
          <ArrowRight size={13} />
        </Link>
      </div>

      {/* 3-Column Bento Grid with auto-rows (min-h-[400px]) */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {/* CARD 1: LocalMind (Spans 2 columns on lg) */}
        <motion.div
          variants={itemVariants}
          className="lg:col-span-2 rounded-3xl border border-[#171e19]/10 dark:border-[#b7c6c2]/15 bg-white dark:bg-[#202a24] text-foreground p-5 sm:p-8 flex flex-col justify-between shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
        >
          <div>
            <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-[#171e19]/10 dark:border-white/10">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#ffe17c] animate-pulse" />
                <span className="text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-wider sm:tracking-widest text-[#171e19] dark:text-[#ffe17c]">
                  FLAGSHIP RUNTIME · v0.1.0
                </span>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href="/downloads/localmind-sdk-v0.1.0.tar.gz"
                  download
                  className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-mono text-muted hover:text-foreground dark:hover:text-[#ffe17c] transition-colors"
                >
                  <Download size={12} /> SDK .tar.gz (6.2 KB)
                </a>
              </div>
            </div>

            <div className="mt-5 space-y-2">
              <h3 className="font-display text-2xl sm:text-4xl uppercase text-foreground">
                LOCALMIND: PRIVATE AGENT RUNTIME
              </h3>
              <p className="font-sans text-xs sm:text-sm text-muted leading-relaxed max-w-xl">
                Loopback-only local AI agent runtime &amp; typed Python streaming SDK. Binds to 127.0.0.1:8420 with sub-ms Rust launcher and zero cloud leakage.
              </p>
            </div>
          </div>

          {/* Abstract UI: Code Snippet & Host Telemetry */}
          <div className="mt-6 pt-5 border-t border-[#171e19]/10 dark:border-white/10 grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
            <div className="sm:col-span-8 rounded-xl bg-[#f8f9fa] dark:bg-black/50 border border-[#171e19]/10 dark:border-white/10 p-3.5 font-mono text-xs text-[#171e19] dark:text-white overflow-x-auto">
              <div className="flex items-center justify-between pb-2 border-b border-[#171e19]/10 dark:border-white/10 text-[10px] text-muted mb-2">
                <span>client.py</span>
                <span className="text-[#171e19] dark:text-[#ffe17c] font-bold">127.0.0.1:8420</span>
              </div>
              <pre className="text-[11px] leading-relaxed text-[#171e19] dark:text-[#ffe17c] font-mono">
                <code>
                  from localmind_sdk import LocalMindClient{"\n"}
                  client = LocalMindClient(){"\n"}
                  async for event in client.stream_agent(&quot;profile host&quot;):{"\n"}
                  {"  "}print(event.token, end=&quot;&quot;)
                </code>
              </pre>
            </div>

            <div className="sm:col-span-4 flex flex-col justify-center space-y-2.5">
              <div className="p-3 rounded-xl bg-[#f8f9fa] dark:bg-white/5 border border-[#171e19]/10 dark:border-white/10">
                <span className="text-[10px] font-mono text-muted block uppercase">Gateway</span>
                <span className="text-xs font-mono font-bold text-[#171e19] dark:text-[#ffe17c]">Strict Loopback</span>
              </div>
              <Link
                href="/localmind"
                className="inline-flex items-center justify-between p-3 rounded-xl bg-[#ffe17c] hover:bg-[#f5d45d] text-[#171e19] font-sans font-bold text-xs transition-transform hover:scale-[1.02]"
              >
                <span>Explore Runtime</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </motion.div>

        {/* CARD 2: Keynix (Spans 1 column) */}
        <motion.div
          variants={itemVariants}
          className="rounded-3xl border border-[#171e19]/10 dark:border-[#b7c6c2]/15 bg-white dark:bg-[#202a24] text-foreground p-5 sm:p-8 flex flex-col justify-between shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
        >
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-[#171e19]/10 dark:border-white/10">
              <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#171e19] dark:text-[#ffe17c]">
                LINUX KERNEL · v0.2.1
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded border border-[#171e19]/10 dark:border-white/10 bg-[#f8f9fa] dark:bg-white/10 text-muted">
                Wayland/X11
              </span>
            </div>

            <div className="mt-5 space-y-2">
              <h3 className="font-display text-2xl sm:text-3xl uppercase text-foreground">
                KEYNIX: INPUT PLATFORM
              </h3>
              <p className="font-sans text-xs sm:text-sm text-muted leading-relaxed">
                Hardware-level Linux input interception using evdev EVIOCGRAB exclusive grabbing and /dev/uinput virtual HID device synthesis.
              </p>
            </div>
          </div>

          <div className="mt-6 pt-5 border-t border-[#171e19]/10 dark:border-white/10 space-y-3">
            <div className="grid grid-cols-2 gap-2 text-center">
              <div className="p-2.5 rounded-xl border border-[#171e19]/10 dark:border-white/10 bg-[#f8f9fa] dark:bg-[#171e19]">
                <span className="text-[10px] font-mono text-muted block">GRAB LATENCY</span>
                <span className="text-sm font-mono font-bold text-foreground dark:text-white">&lt;0.1ms</span>
              </div>
              <div className="p-2.5 rounded-xl border border-[#171e19]/10 dark:border-white/10 bg-[#f8f9fa] dark:bg-[#171e19]">
                <span className="text-[10px] font-mono text-muted block">KILLSWITCH</span>
                <span className="text-sm font-mono font-bold text-foreground dark:text-white">Instant</span>
              </div>
            </div>

            <Link
              href="/keynix"
              className="w-full inline-flex items-center justify-between p-3 rounded-xl border border-[#171e19]/15 dark:border-white/15 bg-white dark:bg-[#171e19] text-foreground dark:text-white font-sans font-bold text-xs hover:border-[#ffe17c] transition-colors"
            >
              <span>View Kernel Architecture</span>
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </motion.div>

        {/* CARD 3: Sub-1 GFLOP Drone AI (Spans 1 column) */}
        <motion.div
          variants={itemVariants}
          className="rounded-3xl border border-[#171e19]/10 dark:border-[#b7c6c2]/15 bg-white dark:bg-[#202a24] text-foreground p-5 sm:p-8 flex flex-col justify-between shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
        >
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-[#171e19]/10 dark:border-white/10">
              <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#171e19] dark:text-[#ffe17c]">
                EDGE AI INFERENCE
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded border border-[#171e19]/10 dark:border-white/10 bg-[#f8f9fa] dark:bg-white/10 text-muted">
                TensorRT INT8
              </span>
            </div>

            <div className="mt-5 space-y-2">
              <h3 className="font-display text-2xl sm:text-3xl uppercase text-foreground">
                SUB-1 GFLOP DRONE AI
              </h3>
              <p className="font-sans text-xs sm:text-sm text-muted leading-relaxed">
                Real-time drone object detection models engineered under 1 GFLOP compute, achieving 96% mAP with TensorRT INT8 quantization.
              </p>
            </div>
          </div>

          <div className="mt-6 pt-5 border-t border-[#171e19]/10 dark:border-white/10 space-y-3">
            <div className="p-3 rounded-xl bg-[#f8f9fa] dark:bg-[#171e19] border border-[#171e19]/10 dark:border-white/10 flex items-center justify-between text-xs font-mono">
              <span className="text-muted">PRECISION / FPS</span>
              <span className="font-bold text-foreground dark:text-white">96% mAP @ 62 FPS</span>
            </div>
            <Link
              href="/projects"
              className="w-full inline-flex items-center justify-between p-3 rounded-xl border border-[#171e19]/15 dark:border-white/15 bg-white dark:bg-[#171e19] text-foreground dark:text-white font-sans font-bold text-xs hover:border-[#ffe17c] transition-colors"
            >
              <span>Explore ML Project</span>
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </motion.div>

        {/* CARD 4: Hertix Music Platform (Spans 2 columns on lg) */}
        <motion.div
          variants={itemVariants}
          className="lg:col-span-2 rounded-3xl border border-[#171e19]/10 dark:border-[#b7c6c2]/15 bg-white dark:bg-[#202a24] text-foreground p-5 sm:p-8 flex flex-col justify-between shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
        >
          <div>
            <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-[#171e19]/10 dark:border-white/10">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#ffe17c] animate-pulse" />
                <span className="text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-wider sm:tracking-widest text-[#171e19] dark:text-[#ffe17c]">
                  DESKTOP &amp; MOBILE · v1.0.23
                </span>
              </div>
              <span className="text-[10px] font-mono text-muted">Android Media3 &amp; Tauri 2 Rust</span>
            </div>

            <div className="mt-5 space-y-2">
              <h3 className="font-display text-2xl sm:text-4xl uppercase text-foreground">
                HERTIX: LOCAL-FIRST MUSIC PLAYER
              </h3>
              <p className="font-sans text-xs sm:text-sm text-muted leading-relaxed max-w-xl">
                Cross-platform music player &amp; media library engineered with native Android (Kotlin, Jetpack Compose, Media3 background audio) and Windows (React 19, Tauri 2, Rust) with synchronized lyrics.
              </p>
            </div>
          </div>

          <div className="mt-6 pt-5 border-t border-[#171e19]/10 dark:border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3">
            <div className="p-3 rounded-xl border border-[#171e19]/10 dark:border-white/10 bg-[#f8f9fa] dark:bg-[#171e19]">
              <span className="text-[10px] font-mono text-muted block uppercase">Audio Engine</span>
              <span className="text-xs font-mono font-bold text-foreground dark:text-white">Media3 Service</span>
            </div>
            <div className="p-3 rounded-xl border border-[#171e19]/10 dark:border-white/10 bg-[#f8f9fa] dark:bg-[#171e19]">
              <span className="text-[10px] font-mono text-muted block uppercase">Desktop Shell</span>
              <span className="text-xs font-mono font-bold text-foreground dark:text-white">Tauri 2 &amp; Rust</span>
            </div>
            <Link
              href="/hertix"
              className="inline-flex items-center justify-between p-3 rounded-xl bg-[#ffe17c] hover:bg-[#f5d45d] text-[#171e19] font-sans font-bold text-xs transition-transform hover:scale-[1.02]"
            >
              <span>Explore Hertix</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
