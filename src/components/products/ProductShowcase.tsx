"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  CheckCircle2,
  Code2,
  Copy,
  Cpu,
  Download,
  ExternalLink,
  Flame,
  Globe,
  HardDrive,
  Layers,
  Package,
  Play,
  Shield,
  Sparkles,
  Terminal,
  Zap,
} from "lucide-react";
import { Marquee } from "@/components/ui/Marquee";
import { getPublishedProducts } from "@/data/productRegistry";
import type { Product } from "@/data/products";
import { cn } from "@/lib/utils";

const SHOWCASE_TABS = [
  {
    id: "localmind",
    name: "LocalMind",
    title: "Local AI Agent SDK & Runtime",
    eyebrow: "DEVELOPER TOOLS · AI RUNTIME",
    accent: "#ffe17c",
    icon: "/products/localmind.svg",
    badge: "v0.1.0 Preview",
    tagline: "Loopback-only local AI agent runtime & typed Python streaming SDK.",
    summary:
      "A private, local-first LLM orchestration system that connects your terminal, local workspace index, and host telemetry through a lightweight Rust launcher and typed Python SDK without sending data to third-party clouds.",
    commandTabs: [
      {
        id: "install",
        label: "One-Line Install",
        cmd: 'git clone --depth 1 https://github.com/ravindran-dev/localmind.git "$HOME/.local/share/localmind" && bash "$HOME/.local/share/localmind/install.sh"',
      },
      {
        id: "python",
        label: "Python SDK Usage",
        cmd: `from localmind_sdk import LocalMindClient\n\nclient = LocalMindClient(base_url="http://127.0.0.1:8420")\nasync for event in client.stream_agent(prompt="Profile memory and open files"):\n    print(f"[{event.stage}] {event.token}", end="")`,
      },
      {
        id: "launch",
        label: "Terminal Assistant",
        cmd: "@jarvis ask 'Analyze high CPU spikes and show top 5 memory hogs'",
      },
    ],
    chips: [
      { label: "127.0.0.1:8420", desc: "Strict loopback only" },
      { label: "Rust Launcher", desc: "@jarvis sub-ms latency" },
      { label: "Python 3.10+", desc: "Async streaming client" },
      { label: "Zero-Cloud", desc: "100% offline isolation" },
    ],
    download: {
      url: "/downloads/localmind-sdk-v0.1.0.tar.gz",
      label: "Download Python SDK (.tar.gz)",
      size: "6.2 KB",
    },
    slug: "localmind",
  },
  {
    id: "keynix",
    name: "Keynix",
    title: "Linux Kernel Input Interception Platform",
    eyebrow: "LINUX SYSTEMS · KERNEL & UINPUT",
    accent: "#ffe17c",
    icon: "/products/keynix.png",
    badge: "v0.2.1 Stable",
    tagline: "Low-latency kernel evdev remapping & uinput virtual HID synthesis.",
    summary:
      "An advanced Linux input-remapping platform that intercepts hardware events via evdev, evaluates modifier trees and application contexts in sub-0.1ms, and emits synthesized HID keystrokes through /dev/uinput across Wayland and X11.",
    commandTabs: [
      {
        id: "install",
        label: "Quick Install",
        cmd: "git clone --depth 1 https://github.com/ravindran-dev/keynix.git && cd keynix && sudo ./install.sh",
      },
      {
        id: "launch",
        label: "Daemon Status",
        cmd: "keynix daemon --status\n# Output: [OK] evdev locked (device: /dev/input/event3) -> uinput virtual HID ready",
      },
      {
        id: "test",
        label: "Live Test Mode",
        cmd: "keynix test --interactive\n# Real-time event monitor with sub-0.1ms grab latency logs",
      },
    ],
    chips: [
      { label: "evdev EVIOCGRAB", desc: "Exclusive hardware lock" },
      { label: "/dev/uinput", desc: "Virtual HID synthesis" },
      { label: "Sub-0.1ms", desc: "Near-zero grab latency" },
      { label: "Wayland & X11", desc: "Universal compositor support" },
    ],
    download: {
      url: "/keynix",
      label: "Explore Architecture Specs",
      size: "v0.2.1",
    },
    slug: "keynix",
  },
  {
    id: "hertix",
    name: "Hertix",
    title: "Local-First Music Player & Library",
    eyebrow: "DESKTOP & MOBILE · MEDIA3 & TAURI 2",
    accent: "#ffe17c",
    icon: "/products/hertix.png",
    badge: "v1.0.23 Release",
    tagline: "Your music library, kept close and under your control without cloud lock-in.",
    summary:
      "A local-first media player engineered with a service-owned Android Media3 playback engine and a high-performance Windows desktop client in Tauri 2 and Rust with synchronized lyrics and local metadata.",
    commandTabs: [
      {
        id: "android",
        label: "Android Build",
        cmd: "git clone https://github.com/ravindran-dev/Hertix.git && cd Hertix\n./android/gradlew -p android :app:assembleDebug",
      },
      {
        id: "windows",
        label: "Windows Desktop",
        cmd: "git clone https://github.com/ravindran-dev/Hertix.git && cd Hertix\nnpm ci && npm run tauri dev",
      },
      {
        id: "apk",
        label: "Direct APK Install",
        cmd: "curl -LO https://github.com/ravindran-dev/Hertix/releases/download/v1.0.23/app-release.apk\nadb install -r app-release.apk",
      },
    ],
    chips: [
      { label: "Media3 Engine", desc: "Android background playback" },
      { label: "Tauri 2 + Rust", desc: "Native Windows desktop client" },
      { label: "Offline First", desc: "Zero cloud account lock-in" },
      { label: "Sync Lyrics", desc: "Regional & LRC synchronized" },
    ],
    download: {
      url: "https://github.com/ravindran-dev/Hertix/releases/download/v1.0.23/app-release.apk",
      label: "Download Android APK (v1.0.23)",
      size: "v1.0.23",
    },
    slug: "hertix",
  },
];

export function ProductShowcase() {
  const [activeTabId, setActiveTabId] = useState("localmind");
  const [activeCommandIdx, setActiveCommandIdx] = useState(0);
  const [copied, setCopied] = useState(false);

  const activeProduct =
    SHOWCASE_TABS.find((t) => t.id === activeTabId) || SHOWCASE_TABS[0];

  const currentCommand =
    activeProduct.commandTabs[activeCommandIdx]?.cmd ||
    activeProduct.commandTabs[0].cmd;

  const handleCopy = () => {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(currentCommand);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const allProducts = getPublishedProducts();

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      className="space-y-8"
      aria-label="Flagship Product Showcase"
    >
      {/* SECTION HEADER & LIVE STATS */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-[#171e19]/15 dark:border-[#b7c6c2]/20 px-3 py-1 text-xs font-mono font-bold tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ffe17c] animate-pulse" />
            <span>INTERACTIVE RUNTIMES</span>
          </div>
          <h2 className="mt-2 font-display text-4xl sm:text-5xl uppercase leading-[0.9] text-foreground">
            FLAGSHIP SOFTWARE SHOWCASE.
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-muted max-w-xl font-sans">
            Test and run production systems engineered for low-level performance, zero-leakage local AI agents, and developer toolchains.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/products"
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-muted hover:text-foreground"
          >
            <span>View All {allProducts.length} Releases</span>
            <ArrowRight size={13} />
          </Link>
        </div>
      </div>

      {/* INTERACTIVE PRODUCT STAGE */}
      <div className="relative overflow-hidden rounded-3xl border border-border/80 bg-gradient-to-b from-card via-card to-surface-muted p-4 sm:p-8 lg:p-10 shadow-xl transition-all">
        {/* Glow ambient circle */}
        <div
          className="absolute -top-32 -right-32 h-96 w-96 rounded-full blur-3xl opacity-25 pointer-events-none transition-all duration-700"
          style={{ backgroundColor: activeProduct.accent }}
        />

        {/* TOP PRODUCT SELECTOR TABS */}
        <div className="flex items-center gap-2 border-b border-border/60 pb-4 overflow-x-auto scrollbar-none">
          {SHOWCASE_TABS.map((product) => {
            const isSelected = product.id === activeTabId;
            return (
              <button
                key={product.id}
                type="button"
                onClick={() => {
                  setActiveTabId(product.id);
                  setActiveCommandIdx(0);
                }}
                className={cn(
                  "relative flex items-center gap-2.5 rounded-xl px-4 py-2.5 text-xs sm:text-sm font-semibold transition-all shrink-0",
                  isSelected
                    ? "bg-surface-elevated text-foreground shadow-sm border border-border"
                    : "text-muted hover:text-foreground hover:bg-surface-muted/60"
                )}
              >
                <div
                  className="h-6 w-6 rounded-lg flex items-center justify-center p-0.5 border overflow-hidden shrink-0"
                  style={{
                    borderColor: isSelected ? `${product.accent}66` : "transparent",
                    backgroundColor: isSelected ? `${product.accent}20` : "transparent",
                  }}
                >
                  <Image src={product.icon} alt="" width={18} height={18} className="object-contain w-full h-full" unoptimized />
                </div>
                <span>{product.name}</span>
                <span
                  className="text-[10px] font-mono px-1.5 py-0.5 rounded-full font-bold"
                  style={{
                    backgroundColor: isSelected ? `${product.accent}20` : undefined,
                    color: isSelected ? product.accent : undefined,
                  }}
                >
                  {product.badge}
                </span>
                {isSelected && (
                  <motion.div
                    layoutId="product-showcase-tab-indicator"
                    className="absolute -bottom-4 left-2 right-2 h-0.5 rounded-full bg-[#ffe17c]"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* ACTIVE PRODUCT CONTENT GRID */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeProduct.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
          >
            {/* Left Column: Product Info & Actions */}
            <div className="lg:col-span-6 space-y-5">
              <div>
                <span
                  className="text-[11px] font-mono font-bold tracking-wider uppercase text-[#171e19] dark:text-[#ffe17c]"
                >
                  {activeProduct.eyebrow}
                </span>
                <h3 className="mt-1 font-display text-3xl sm:text-4xl uppercase leading-tight text-foreground">
                  {activeProduct.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm font-medium text-foreground">
                  {activeProduct.tagline}
                </p>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-muted">
                  {activeProduct.summary}
                </p>
              </div>

              {/* 2x2 Specs Chip Matrix */}
              <div className="grid grid-cols-2 gap-2.5 pt-1">
                {activeProduct.chips.map((chip) => (
                  <div
                    key={chip.label}
                    className="rounded-xl border border-border/80 bg-surface-muted/50 p-2.5 transition-colors hover:border-border"
                  >
                    <span className="text-xs font-mono font-bold text-foreground">
                      {chip.label}
                    </span>
                    <p className="text-[11px] text-muted">{chip.desc}</p>
                  </div>
                ))}
              </div>

              {/* Primary Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link
                  href={`/${activeProduct.slug}`}
                  className="inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-xs sm:text-sm font-bold bg-[#ffe17c] hover:bg-[#f5d45d] text-[#171e19] transition-all hover:scale-[1.02] shadow-sm"
                >
                  <span>Explore Architecture &amp; Release</span>
                  <ArrowRight size={14} />
                </Link>

                {activeProduct.download.url.endsWith(".tar.gz") ? (
                  <a
                    href={activeProduct.download.url}
                    download
                    className="inline-flex items-center gap-2 rounded-xl border border-[#171e19]/15 dark:border-border bg-white dark:bg-card hover:bg-[#f8f9fa] dark:hover:bg-surface-muted px-4 py-2.5 text-xs sm:text-sm font-semibold text-foreground transition-colors"
                  >
                    <Download size={14} className="text-[#ffe17c]" />
                    <span>{activeProduct.download.label}</span>
                    <span className="text-[10px] font-mono text-muted">({activeProduct.download.size})</span>
                  </a>
                ) : (
                  <Link
                    href={`/${activeProduct.slug}`}
                    className="inline-flex items-center gap-2 rounded-xl border border-[#171e19]/15 dark:border-border bg-white dark:bg-card hover:bg-[#f8f9fa] dark:hover:bg-surface-muted px-4 py-2.5 text-xs sm:text-sm font-semibold text-foreground transition-colors"
                  >
                    <Cpu size={14} className="text-[#ffe17c]" />
                    <span>{activeProduct.download.label}</span>
                  </Link>
                )}
              </div>
            </div>

            {/* Right Column: Interactive macOS Terminal Simulator */}
            <div className="lg:col-span-6">
              <div className="rounded-2xl border border-[#171e19]/15 dark:border-white/15 bg-[#f8f9fa] dark:bg-[#171e19] text-[#171e19] dark:text-zinc-100 shadow-xl dark:shadow-2xl overflow-hidden">
                {/* macOS Window Title Bar */}
                <div className="flex items-center justify-between border-b border-[#171e19]/10 dark:border-white/10 bg-white dark:bg-[#202a24] px-4 py-2.5">
                  <div className="flex items-center gap-1.5">
                    <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
                    <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
                    <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
                  </div>
                  <div className="flex items-center gap-1.5 font-mono text-[11px] text-muted">
                    <Terminal size={12} className="text-[#ffe17c]" />
                    <span>{activeProduct.id}_terminal</span>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopy}
                    className="inline-flex items-center gap-1 rounded border border-[#171e19]/15 dark:border-white/10 bg-white dark:bg-white/5 px-2 py-0.5 text-[10px] font-mono text-foreground dark:text-zinc-300 hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
                  >
                    {copied ? (
                      <>
                        <Check size={11} className="text-[#ffe17c]" />
                        <span className="text-[#ffe17c] font-bold">COPIED</span>
                      </>
                    ) : (
                      <>
                        <Copy size={11} />
                        <span>COPY</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Sub-Tabs for Terminal Command Types */}
                <div className="flex items-center gap-1 border-b border-[#171e19]/10 dark:border-white/10 bg-[#f8f9fa] dark:bg-[#171e19] px-3 pt-2">
                  {activeProduct.commandTabs.map((tab, idx) => (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setActiveCommandIdx(idx)}
                      className={cn(
                        "rounded-t-md px-3 py-1.5 text-[11px] font-mono transition-colors",
                        activeCommandIdx === idx
                          ? "bg-white dark:bg-[#202a24] text-[#171e19] dark:text-[#ffe17c] font-bold border-t border-x border-[#171e19]/10 dark:border-white/10"
                          : "text-muted hover:text-foreground"
                      )}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                {/* Terminal Body */}
                <div className="p-4 font-mono text-[11px] sm:text-xs leading-relaxed text-[#171e19] dark:text-white overflow-x-auto min-h-[140px] flex flex-col justify-between">
                  <pre className="whitespace-pre-wrap break-all">
                    {currentCommand.split("\n").map((line, i) => (
                      <div key={i} className="flex gap-2">
                        <span className="text-muted select-none">$</span>
                        <span className={line.startsWith("#") ? "text-muted italic" : "text-[#171e19] dark:text-[#ffe17c] font-medium"}>
                          {line}
                        </span>
                      </div>
                    ))}
                  </pre>

                  <div className="mt-4 pt-2 border-t border-[#171e19]/10 dark:border-zinc-800/60 flex items-center justify-between text-[10px] text-muted">
                    <span className="flex items-center gap-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#ffe17c] animate-pulse" />
                      Ready for execution
                    </span>
                    <span>Bash / Zsh / Fish compatible</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ANIMATED PRODUCT MARQUEE TICKER (ALL 8 PRODUCTS) */}
      <div className="pt-2">
        <div className="flex items-center justify-between mb-3 px-1 text-xs text-muted">
          <span className="font-mono uppercase tracking-wider text-[11px] flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Live Software &amp; Toolchain Catalog
          </span>
          <span className="hidden sm:inline-block font-mono text-[11px]">
            Hover to pause · Click card to open release
          </span>
        </div>

        <Marquee speed="normal" pauseOnHover={true} className="py-1">
          {allProducts.map((p) => (
            <Link
              key={p.slug}
              href={`/${p.slug}`}
              className="group relative w-72 shrink-0 rounded-2xl border border-border/70 bg-card p-3.5 shadow-xs transition-all hover:border-primary/50 hover:shadow-md mx-2 flex items-center justify-between"
              style={{ "--product-accent": p.accent } as React.CSSProperties}
            >
              <div className="flex items-center gap-3">
                <div
                  className="h-10 w-10 shrink-0 rounded-xl border flex items-center justify-center p-2 shadow-2xs group-hover:scale-105 transition-transform"
                  style={{
                    borderColor: `${p.accent}44`,
                    backgroundColor: `${p.accent}15`,
                  }}
                >
                  {p.slug === "arch-linux-dev-pack" ? (
                    <Image src="/products/archlinux-logo.svg" alt="" width={22} height={22} unoptimized />
                  ) : p.slug === "archon" ? (
                    <Image src="/products/linux-penguin.png" alt="" width={22} height={26} unoptimized />
                  ) : p.icon ? (
                    <Image src={p.icon} alt="" width={24} height={24} className="object-contain" unoptimized />
                  ) : (
                    <Package size={18} style={{ color: p.accent }} />
                  )}
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-bold text-foreground group-hover:text-primary transition-colors">
                      {p.shortName}
                    </span>
                    {p.latestTag && (
                      <span className="text-[10px] font-mono px-1 rounded bg-surface-muted border border-border/80 text-muted">
                        v{p.latestTag}
                      </span>
                    )}
                  </div>
                  <p className="text-[11px] text-muted line-clamp-1">{p.positioning}</p>
                </div>
              </div>

              <ArrowUpRight
                size={14}
                className="text-muted group-hover:text-primary transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0"
              />
            </Link>
          ))}
        </Marquee>
      </div>
    </motion.section>
  );
}
