"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Check,
  Copy,
  Cpu,
  Download,
  Package,
  Shield,
  Sparkles,
  Terminal,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface ProductSpotlightBannerProps {
  className?: string;
  variant?: "hero" | "compact";
  targetProductSlug?: "localmind" | "keynix" | "hertix";
}

export function ProductSpotlightBanner({
  className,
  variant = "hero",
  targetProductSlug = "localmind",
}: ProductSpotlightBannerProps) {
  const [copied, setCopied] = useState(false);
  const [imgError, setImgError] = useState(false);

  const productData = {
    localmind: {
      slug: "localmind",
      name: "LocalMind Agent SDK & Runtime",
      tagline: "Loopback-only local AI agent runtime & typed Python streaming SDK",
      badge: "AI AGENT RUNTIME · v0.1.0",
      description:
        "Engineered for zero-leakage local AI orchestration. Connects your terminal, local workspace index, and host telemetry through a native Rust launcher and Python SDK bound strictly to 127.0.0.1:8420.",
      command:
        'git clone --depth 1 https://github.com/ravindran-dev/localmind.git "$HOME/.local/share/localmind" && bash "$HOME/.local/share/localmind/install.sh"',
      downloadUrl: "/downloads/localmind-sdk-v0.1.0.tar.gz",
      downloadLabel: "Download SDK (.tar.gz)",
      downloadSize: "6.2 KB",
      accent: "#ffe17c",
      icon: "/products/localmind.svg",
      fallbackIcon: Terminal,
      specs: ["127.0.0.1:8420", "Rust Launcher (@jarvis)", "Python 3.10+ SDK", "Zero Cloud Leakage"],
    },
    keynix: {
      slug: "keynix",
      name: "Keynix Linux Interception Platform",
      tagline: "Low-latency kernel evdev remapping & uinput virtual HID synthesis",
      badge: "KERNEL SYSTEMS · v0.2.1",
      description:
        "Sub-0.1ms kernel-level input grabber, daemon, and shortcut engine for Linux Wayland & X11 with automated desktop environment conflict resolution.",
      command:
        "git clone --depth 1 https://github.com/ravindran-dev/keynix.git && cd keynix && ./install.sh",
      downloadUrl: "/keynix",
      downloadLabel: "View Platform Specs",
      downloadSize: "v0.2.1",
      accent: "#ffe17c",
      icon: "/products/keynix.png",
      fallbackIcon: Shield,
      specs: ["evdev EVIOCGRAB", "/dev/uinput HID", "Sub-0.1ms Latency", "Wayland & X11"],
    },
    hertix: {
      slug: "hertix",
      name: "Hertix Local-First Music Player",
      tagline: "Local media library with Android Media3 playback & Windows Tauri 2 desktop client",
      badge: "DESKTOP & MOBILE · v1.0.23",
      description:
        "Engineered for local-first music discovery and playback. Native Android Kotlin/Media3 service engine with capability-aware effects, paired with a modern React 19 and Tauri 2 Rust desktop client.",
      command:
        "git clone https://github.com/ravindran-dev/Hertix.git && cd Hertix && ./android/gradlew -p android :app:assembleDebug",
      downloadUrl: "https://github.com/ravindran-dev/Hertix/releases/download/v1.0.23/app-release.apk",
      downloadLabel: "Download Android APK",
      downloadSize: "1.0.23",
      accent: "#ffe17c",
      icon: "/products/hertix.png",
      fallbackIcon: Package,
      specs: ["Media3 Engine", "Tauri 2 + Rust", "Offline Playback", "Synchronized Lyrics"],
    },
  }[targetProductSlug];

  const handleCopy = () => {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(productData.command);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    }
  };

  const FallbackIcon = productData.fallbackIcon;

  // COMPACT VARIANT: Balanced, modern 3-section card that fills the width naturally
  if (variant === "compact") {
    return (
      <div
        className={cn(
          "relative overflow-hidden rounded-2xl border border-[#171e19]/15 dark:border-[#b7c6c2]/20 bg-white dark:bg-[#171e19] p-5 sm:p-6 backdrop-blur-md shadow-md transition-all hover:shadow-lg",
          className
        )}
      >
        {/* Subtle Ambient Radial Glow */}
        <div className="absolute -top-16 -right-16 h-48 w-48 rounded-full blur-3xl opacity-15 pointer-events-none bg-[#ffe17c]" />

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          {/* Section 1: Product Identity & Badges */}
          <div className="flex items-start gap-4 max-w-xl">
            <div className="h-12 w-12 shrink-0 rounded-xl border border-[#171e19]/15 dark:border-[#b7c6c2]/20 bg-[#f8f9fa] dark:bg-[#272727] flex items-center justify-center p-2 shadow-inner transition-transform group-hover:scale-105">
              {!imgError ? (
                <Image
                  src={productData.icon}
                  alt={productData.name}
                  width={28}
                  height={28}
                  className="object-contain"
                  onError={() => setImgError(true)}
                  unoptimized
                />
              ) : (
                <FallbackIcon size={24} className="text-[#ffe17c]" />
              )}
            </div>

            <div className="space-y-1.5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-[#171e19]/15 dark:border-[#ffe17c]/40 bg-[#ffe17c]/15 px-2.5 py-0.5 text-[10px] font-mono font-bold tracking-wide text-[#171e19] dark:text-[#ffe17c]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#ffe17c] animate-pulse" />
                  {productData.badge}
                </span>
                <span className="text-[11px] font-mono text-muted hidden sm:inline">
                  Official Release
                </span>
              </div>

              <h4 className="font-display text-xl sm:text-2xl uppercase tracking-normal text-foreground">
                {productData.name}
              </h4>
              <p className="text-xs text-muted leading-relaxed">
                {productData.tagline}
              </p>

              {/* Architecture chips */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {productData.specs.map((spec) => (
                  <span
                    key={spec}
                    className="inline-flex items-center gap-1 rounded-md border border-[#171e19]/10 dark:border-white/10 bg-[#f8f9fa] dark:bg-white/5 px-2 py-0.5 text-[10px] font-mono text-foreground dark:text-zinc-100 font-medium"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#ffe17c]" />
                    {spec}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Section 2: Mini Terminal Command Snippet */}
          <div className="hidden md:flex flex-col justify-center max-w-xs lg:max-w-sm w-full">
            <div className="flex items-center justify-between text-[11px] font-mono text-muted mb-1 px-1">
              <span className="flex items-center gap-1.5">
                <Terminal size={12} className="text-[#ffe17c]" />
                <span>quick_start</span>
              </span>
              <button
                type="button"
                onClick={handleCopy}
                className="hover:text-foreground transition-colors flex items-center gap-1 text-[10px]"
              >
                {copied ? <Check size={11} className="text-[#ffe17c]" /> : <Copy size={11} />}
                <span>{copied ? "Copied" : "Copy"}</span>
              </button>
            </div>
            <div
              onClick={handleCopy}
              className="cursor-pointer group rounded-lg border border-[#171e19]/10 dark:border-border/80 bg-[#f8f9fa] dark:bg-surface-muted/90 p-2.5 font-mono text-[11px] text-[#171e19] dark:text-white truncate transition-colors hover:border-[#ffe17c]"
              title="Click to copy command"
            >
              <span className="text-muted mr-1.5 select-none">$</span>
              <span>{productData.command}</span>
            </div>
          </div>

          {/* Section 3: Action Buttons */}
          <div className="flex flex-wrap items-center gap-2.5 shrink-0 self-start sm:self-auto">
            {productData.downloadUrl.endsWith(".tar.gz") ? (
              <a
                href={productData.downloadUrl}
                download
                className="inline-flex items-center gap-1.5 rounded-xl border border-[#171e19]/15 dark:border-border bg-white dark:bg-surface hover:bg-[#f8f9fa] dark:hover:bg-surface-muted px-3.5 py-2 text-xs font-semibold text-foreground transition-colors shadow-2xs"
              >
                <Download size={13} className="text-[#ffe17c]" />
                <span>SDK ({productData.downloadSize})</span>
              </a>
            ) : (
              <Link
                href={`/${productData.slug}#architecture`}
                className="inline-flex items-center gap-1.5 rounded-xl border border-[#171e19]/15 dark:border-border bg-white dark:bg-surface hover:bg-[#f8f9fa] dark:hover:bg-surface-muted px-3.5 py-2 text-xs font-semibold text-foreground transition-colors shadow-2xs"
              >
                <Cpu size={13} className="text-[#ffe17c]" />
                <span>Specs &amp; Flow</span>
              </Link>
            )}

            <Link
              href={`/${productData.slug}`}
              className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-bold bg-[#ffe17c] hover:bg-[#f5d45d] text-[#171e19] transition-all hover:scale-[1.02] shadow-sm"
            >
              <span>Explore Release</span>
              <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // HERO VARIANT: High-impact announcement card with full terminal preview
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl sm:rounded-3xl border border-[#171e19]/15 dark:border-[#ffe17c]/30 bg-white dark:bg-[#171e19] text-foreground p-6 sm:p-8 lg:p-10 shadow-xl dark:shadow-2xl transition-all",
        className
      )}
    >
      {/* Background Decorative Glow Mesh */}
      <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full blur-3xl opacity-15 pointer-events-none bg-[#ffe17c]" />
      <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-[#b7c6c2]/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Info Column */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#171e19]/15 dark:border-[#ffe17c]/40 bg-[#ffe17c]/15 px-3 py-1 text-xs font-mono font-bold tracking-wide text-[#171e19] dark:text-[#ffe17c] shadow-xs">
              <Sparkles size={12} className="text-[#ffe17c]" />
              {productData.badge}
            </span>
            <span className="text-xs font-mono text-muted">
              Official Production Release
            </span>
          </div>

          <div className="flex items-center gap-3.5 pt-1">
            <div className="h-12 w-12 rounded-2xl border border-[#171e19]/15 dark:border-[#b7c6c2]/20 bg-[#f8f9fa] dark:bg-[#272727] flex items-center justify-center p-2.5 shrink-0 shadow-inner">
              {!imgError ? (
                <Image
                  src={productData.icon}
                  alt={productData.name}
                  width={32}
                  height={32}
                  className="object-contain"
                  onError={() => setImgError(true)}
                  unoptimized
                />
              ) : (
                <FallbackIcon size={24} className="text-[#ffe17c]" />
              )}
            </div>
            <div>
              <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl uppercase text-foreground leading-[0.9]">
                {productData.name}
              </h3>
              <p className="text-xs sm:text-sm font-medium text-muted mt-1">
                {productData.tagline}
              </p>
            </div>
          </div>

          <p className="text-xs sm:text-sm leading-relaxed text-muted max-w-xl">
            {productData.description}
          </p>

          {/* Specs Badges */}
          <div className="flex flex-wrap gap-2 pt-1">
            {productData.specs.map((spec) => (
              <span
                key={spec}
                className="inline-flex items-center gap-1.5 rounded-lg border border-[#171e19]/10 dark:border-white/10 bg-[#f8f9fa] dark:bg-white/5 px-2.5 py-1 text-[11px] font-mono text-foreground dark:text-zinc-100 font-medium"
              >
                <Check size={11} className="text-[#ffe17c]" />
                {spec}
              </span>
            ))}
          </div>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-3">
            <Link
              href={`/${productData.slug}`}
              className="inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-xs sm:text-sm font-bold bg-[#ffe17c] hover:bg-[#f5d45d] text-[#171e19] transition-all hover:scale-[1.02] shadow-md"
            >
              <span>Explore Documentation &amp; Architecture</span>
              <ArrowRight size={15} />
            </Link>

            {productData.downloadUrl.endsWith(".tar.gz") && (
              <a
                href={productData.downloadUrl}
                download
                className="inline-flex items-center gap-2 rounded-xl border border-[#171e19]/15 dark:border-white/20 bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/15 px-4 py-2.5 text-xs sm:text-sm font-semibold text-foreground dark:text-white transition-colors"
              >
                <Download size={15} />
                <span>{productData.downloadLabel}</span>
                <span className="text-[10px] font-mono opacity-70">({productData.downloadSize})</span>
              </a>
            )}
          </div>
        </div>

        {/* Right Terminal Command Card */}
        <div className="lg:col-span-5">
          <div className="rounded-2xl border border-[#171e19]/15 dark:border-white/15 bg-[#f8f9fa] dark:bg-black/60 backdrop-blur-xl p-5 shadow-lg dark:shadow-2xl">
            <div className="flex items-center justify-between border-b border-[#171e19]/10 dark:border-white/10 pb-3 text-xs">
              <div className="flex items-center gap-2 font-mono text-muted">
                <Terminal size={14} className="text-[#ffe17c]" />
                <span>quick_launch</span>
              </div>
              <button
                type="button"
                onClick={handleCopy}
                className="inline-flex items-center gap-1.5 rounded-md border border-[#171e19]/15 dark:border-white/10 bg-white dark:bg-white/5 px-2.5 py-1 text-[11px] font-mono text-foreground dark:text-zinc-300 hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
                title="Copy command to clipboard"
              >
                {copied ? (
                  <>
                    <Check size={12} className="text-[#ffe17c]" />
                    <span className="text-[#ffe17c] font-semibold">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy size={12} />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            <div className="mt-3.5 rounded-lg bg-white dark:bg-[#202a24] p-3 font-mono text-[11px] sm:text-xs text-[#171e19] dark:text-white leading-relaxed overflow-x-auto border border-[#171e19]/10 dark:border-white/5">
              <span className="text-muted mr-1.5 select-none">$ </span>
              {productData.command}
            </div>

            <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-muted pt-1">
              <span className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-[#ffe17c]" />
                Verified &amp; Signed SHA-256
              </span>
              <Link
                href="/products"
                className="text-foreground dark:text-zinc-300 hover:text-[#ffe17c] underline underline-offset-2 transition-colors"
              >
                All 8 Products →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
