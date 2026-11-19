"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowDownToLine,
  ArrowLeft,
  ArrowUpRight,
  Check,
  CheckCircle2,
  Code2,
  Copy,
  Cpu,
  Download,
  ExternalLink,
  FileCode,
  Github,
  HardDrive,
  Layers,
  Monitor,
  Package,
  Play,
  ShieldCheck,
  Terminal,
  Zap,
} from "lucide-react";
import type { CSSProperties } from "react";
import type { Product } from "@/data/products";
import { ProductCard } from "@/components/products/ProductCard";
import { getPublishedProducts } from "@/data/productRegistry";

function ProductMark({ product }: { product: Product }) {
  if (product.slug === "archon") {
    return (
      <div className="product-mark tux-mark">
        <Image src="/products/linux-penguin.png" alt="Linux penguin" width={64} height={76} priority />
      </div>
    );
  }
  if (product.slug === "arch-linux-dev-pack") {
    return (
      <div className="product-mark arch-mark">
        <Image src="/products/archlinux-logo.svg" alt="Arch Linux logo" width={48} height={48} priority />
        <Image src="/products/linux-penguin.png" alt="Linux penguin" width={40} height={48} />
      </div>
    );
  }
  return (
    <div className="product-mark" style={{ "--product-accent": product.accent } as CSSProperties}>
      {product.icon ? (
        <Image src={product.icon} alt={`${product.shortName} icon`} width={64} height={64} priority />
      ) : (
        <span className="text-2xl font-bold font-mono">{product.shortName.slice(0, 2)}</span>
      )}
    </div>
  );
}

export function ProductPage({ product }: { product: Product }) {
  const [copiedText, setCopiedText] = useState<string | null>(null);
  const [activeInstallTab, setActiveInstallTab] = useState<number>(0);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(id);
    setTimeout(() => setCopiedText(null), 2000);
  };

  const version = product.latestTag ? `v${product.latestTag}` : "Developer Preview";
  const hasDownloads = Boolean(product.downloads?.length);
  const primaryDownload = product.downloads?.[0];

  return (
    <main
      className={`product-site product-${product.slug}`}
      style={{ "--product-accent": product.accent } as CSSProperties}
    >
      {/* Hero Section */}
      <section className="product-hero relative overflow-hidden bg-white dark:bg-[#171e19] border-b border-[#171e19]/10 dark:border-white/10 text-foreground">
        <div className="product-hero-inner mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-14 lg:px-10">
          {/* Top navigation row */}
          <div className="flex items-center justify-between pb-6 border-b border-[#171e19]/10 dark:border-white/10">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-muted transition hover:text-foreground"
            >
              <ArrowLeft size={14} /> Back to Products
            </Link>
            {product.sourcePublic === false ? (
              <span className="inline-flex items-center gap-1.5 text-xs text-muted">
                <Github size={14} /> Private repository
              </span>
            ) : (
              <a
                href={product.repository}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-[#171e19]/15 dark:border-white/15 bg-surface-muted dark:bg-white/5 px-3 py-1 text-xs font-mono text-foreground dark:text-white/80 transition hover:bg-black/5 dark:hover:bg-white/10"
              >
                <Github size={14} /> GitHub Repository <ArrowUpRight size={13} />
              </a>
            )}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center pt-8">
            {/* Left copy column */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="flex items-center gap-3.5 mb-5">
                <ProductMark product={product} />
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center rounded-full border border-[#171e19]/15 dark:border-white/20 bg-surface-muted dark:bg-white/10 px-3 py-1 text-xs font-mono uppercase tracking-wider text-foreground dark:text-white">
                    {product.category}
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-[#171e19]/15 dark:border-white/15 bg-surface-muted dark:bg-white/5 px-3 py-1 text-xs font-mono text-muted dark:text-white/80">
                    <span className="h-2 w-2 rounded-full bg-[#ffe17c] animate-pulse" />
                    {product.status}
                  </span>
                </div>
              </div>

              <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl xl:text-6xl text-foreground dark:text-white leading-[1.1]">
                {product.name}
              </h1>

              <p className="product-positioning mt-5 text-base sm:text-lg lg:text-xl font-medium text-foreground dark:text-white leading-snug">
                {product.positioning}
              </p>
              <p className="product-description mt-3 text-xs sm:text-sm leading-relaxed text-muted dark:text-white/60 max-w-2xl">
                {product.description}
              </p>

              {/* CTAs */}
              <div className="mt-8 flex flex-wrap items-center gap-3.5">
                {hasDownloads && primaryDownload ? (
                  <a
                    href={primaryDownload.url}
                    className="inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-xs font-bold uppercase tracking-wider bg-[#ffe17c] hover:bg-[#f5d45d] text-[#171e19] shadow-md transition-transform hover:-translate-y-0.5"
                  >
                    <Download size={16} /> Download {primaryDownload.format} ({(primaryDownload.size / (1024 * 1024)).toFixed(0)}MB)
                  </a>
                ) : (
                  <a
                    href="#install"
                    className="inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-xs font-bold uppercase tracking-wider bg-[#ffe17c] hover:bg-[#f5d45d] text-[#171e19] shadow-md transition-transform hover:-translate-y-0.5"
                  >
                    <Terminal size={16} /> {product.primaryAction?.label ?? "Install & Run"}
                  </a>
                )}

                <a
                  href="#install"
                  className="inline-flex items-center gap-2 rounded-xl border border-[#171e19]/15 dark:border-white/20 bg-surface-muted dark:bg-white/5 px-4 py-2.5 text-xs font-medium text-foreground dark:text-white transition hover:bg-black/5 dark:hover:bg-white/10"
                >
                  <Code2 size={15} /> Installation &amp; SDK
                </a>

                {product.documentation?.length > 0 && (
                  <a
                    href="#documentation"
                    className="inline-flex items-center gap-1.5 text-xs text-muted hover:text-foreground transition ml-1"
                  >
                    Documentation &rarr;
                  </a>
                )}
              </div>

              {/* Hero facts strip */}
              <div className="mt-10 grid grid-cols-2 gap-4 border-t border-[#171e19]/10 dark:border-white/10 pt-5 sm:grid-cols-4">
                <div>
                  <span className="block text-[10px] font-mono uppercase tracking-wider text-muted dark:text-[#b7c6c2]">Release Version</span>
                  <strong className="mt-1 block text-xs font-semibold text-foreground dark:text-white">{version}</strong>
                </div>
                <div>
                  <span className="block text-[10px] font-mono uppercase tracking-wider text-muted dark:text-[#b7c6c2]">Architecture</span>
                  <strong className="mt-1 block text-xs font-semibold text-foreground dark:text-white">
                    {product.downloads?.[0]?.architecture ?? (product.platforms[0]?.includes("ARM") ? "ARM64" : "Universal / Multi")}
                  </strong>
                </div>
                <div>
                  <span className="block text-[10px] font-mono uppercase tracking-wider text-muted dark:text-[#b7c6c2]">Platforms</span>
                  <strong className="mt-1 block text-xs font-semibold text-foreground dark:text-white truncate">
                    {product.platforms[0]?.split("(")[0].trim()}
                  </strong>
                </div>
                <div>
                  <span className="block text-[10px] font-mono uppercase tracking-wider text-muted dark:text-[#b7c6c2]">License</span>
                  <strong className="mt-1 block text-xs font-semibold text-foreground dark:text-white">Open Source (MIT/GPL)</strong>
                </div>
              </div>
            </div>

            {/* Right preview / terminal window */}
            <div className="lg:col-span-5 w-full">
              <div className="rounded-2xl border border-[#171e19]/15 dark:border-white/15 bg-[#f8f9fa] dark:bg-[#202a24] backdrop-blur-xl p-5 sm:p-6 shadow-xl dark:shadow-2xl relative overflow-hidden">
                <div
                  className="absolute -right-16 -top-16 h-56 w-56 rounded-full blur-3xl pointer-events-none opacity-15 bg-[#ffe17c]"
                />

                {/* Window header */}
                <div className="flex items-center justify-between border-b border-[#171e19]/10 dark:border-white/10 pb-3.5">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-red-500/80" />
                    <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
                    <span className="h-3 w-3 rounded-full bg-green-500/80" />
                    <span className="ml-2 font-mono text-xs text-muted">{product.slug} · console</span>
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-[#171e19]/15 dark:border-[#ffe17c]/30 bg-[#ffe17c]/15 px-2.5 py-0.5 text-[10px] font-mono font-medium text-[#171e19] dark:text-[#ffe17c]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#ffe17c] animate-pulse" /> VERIFIED
                  </span>
                </div>

                {/* Terminal Quick Start Block */}
                <div className="mt-4 rounded-xl bg-white dark:bg-[#171e19] p-4 border border-[#171e19]/10 dark:border-white/10 font-mono">
                  <div className="flex items-center justify-between text-[11px] text-muted mb-2">
                    <span className="flex items-center gap-1.5">
                      <Terminal size={13} className="text-[#ffe17c]" />
                      $ quick_launch
                    </span>
                    <button
                      onClick={() => copyToClipboard(product.install[0]?.command || "", "hero-cmd")}
                      className="inline-flex items-center gap-1 rounded bg-black/5 dark:bg-white/10 px-2 py-0.5 text-[10px] text-foreground dark:text-white/70 hover:bg-black/10 dark:hover:bg-white/20 hover:text-foreground dark:hover:text-white transition"
                    >
                      {copiedText === "hero-cmd" ? <Check size={11} className="text-[#ffe17c]" /> : <Copy size={11} />}
                      {copiedText === "hero-cmd" ? "Copied" : "Copy"}
                    </button>
                  </div>
                  <code className="block text-xs leading-relaxed text-[#171e19] dark:text-[#ffe17c] overflow-x-auto whitespace-pre-wrap select-all font-mono font-medium">
                    {product.install[0]?.command.split("\n")[0]}
                  </code>
                </div>

                {/* Specs Grid Chips */}
                <div className="mt-4 grid grid-cols-2 gap-2.5 font-mono text-xs">
                  <div className="rounded-lg bg-white dark:bg-white/[0.03] border border-[#171e19]/10 dark:border-white/10 p-3">
                    <span className="text-[10px] uppercase tracking-wider text-muted block">Primary Stack</span>
                    <span className="text-foreground dark:text-white font-medium mt-1 block truncate">
                      {product.stack.slice(0, 2).join(", ")}
                    </span>
                  </div>
                  <div className="rounded-lg bg-white dark:bg-white/[0.03] border border-[#171e19]/10 dark:border-white/10 p-3">
                    <span className="text-[10px] uppercase tracking-wider text-muted block">Languages</span>
                    <span className="text-foreground dark:text-white font-medium mt-1 block truncate">
                      {product.languages.join(", ")}
                    </span>
                  </div>
                  <div className="rounded-lg bg-white dark:bg-white/[0.03] border border-[#171e19]/10 dark:border-white/10 p-3">
                    <span className="text-[10px] uppercase tracking-wider text-muted block">Release Stage</span>
                    <span className="text-[#171e19] dark:text-[#ffe17c] font-medium mt-1 block">
                      {product.status}
                    </span>
                  </div>
                  <div className="rounded-lg bg-white dark:bg-white/[0.03] border border-[#171e19]/10 dark:border-white/10 p-3">
                    <span className="text-[10px] uppercase tracking-wider text-muted block">Integrity</span>
                    <span className="text-[#171e19] dark:text-[#ffe17c] font-medium mt-1 block">
                      SHA-256 Audited
                    </span>
                  </div>
                </div>

                {product.developmentVersion && (
                  <div className="mt-3 rounded-lg bg-white dark:bg-white/[0.02] border border-[#171e19]/10 dark:border-white/5 px-3 py-2 flex items-center justify-between font-mono text-[11px]">
                    <span className="text-muted">Manifest Revision:</span>
                    <span className="text-[#171e19] dark:text-[#ffe17c] font-medium">{product.developmentVersion}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Page Content */}
      <div className="product-content mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-10">
        {/* DOWNLOADS CENTER (If product has downloads) */}
        {hasDownloads && (
          <section className="product-section mt-4 mb-14" id="downloads" aria-labelledby="downloads-title">
            <div className="product-section-heading flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6">
              <div>
                <p className="product-eyebrow font-mono text-xs uppercase tracking-wider" style={{ color: product.accent }}>
                  Official Packages &amp; File Systems
                </p>
                <h2 id="downloads-title" className="mt-1 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  Download Center
                </h2>
              </div>
              <span className="inline-flex items-center gap-1.5 text-xs text-muted font-mono">
                <ShieldCheck size={14} className="text-emerald-500" /> All assets cryptographically verified
              </span>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {product.downloads?.map((asset) => (
                <article
                  key={asset.url}
                  className="rounded-xl border border-border/80 bg-card p-5 transition-all hover:border-primary/40 hover:shadow-md flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="rounded bg-primary/10 px-2 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider text-primary">
                            {asset.format}
                          </span>
                          <span className="text-[11px] font-mono text-muted">
                            {asset.architecture ?? "Universal"}
                          </span>
                        </div>
                        <h3 className="mt-2 text-base font-bold text-foreground">
                          {asset.label}
                        </h3>
                      </div>
                      <span className="rounded-full border border-border bg-surface-muted px-2 py-0.5 text-[10px] font-mono text-muted">
                        {(asset.size / (1024 * 1024)).toFixed(1)} MiB
                      </span>
                    </div>

                    <p className="mt-2 text-xs text-muted">{asset.platform}</p>

                    {/* SHA-256 Checksum with 1-click copy */}
                    {asset.sha256 && (
                      <div className="mt-4 rounded-lg bg-surface-muted p-2.5 border border-border/70">
                        <div className="flex items-center justify-between text-[10px] font-mono text-muted">
                          <span>SHA-256 CHECKSUM</span>
                          <button
                            onClick={() => copyToClipboard(asset.sha256 || "", asset.url)}
                            className="inline-flex items-center gap-1 text-[10px] text-foreground hover:text-primary transition-colors"
                          >
                            {copiedText === asset.url ? (
                              <Check size={11} className="text-emerald-500" />
                            ) : (
                              <Copy size={11} />
                            )}
                            {copiedText === asset.url ? "Copied" : "Copy Hash"}
                          </button>
                        </div>
                        <code className="mt-1 block font-mono text-[10px] text-foreground font-medium break-all select-all">
                          {asset.sha256}
                        </code>
                      </div>
                    )}
                  </div>

                  <div className="mt-5 pt-4 border-t border-border/60 flex items-center justify-between">
                    <span className="text-[11px] text-muted">
                      {asset.status === "preview" ? "Developer Preview Build" : "Release Asset"}
                    </span>
                    <a
                      href={asset.url}
                      className="inline-flex items-center gap-1.5 rounded-lg bg-foreground px-4 py-2 text-xs font-semibold text-background transition-transform hover:-translate-y-0.5"
                    >
                      <Download size={13} /> Download {asset.format}
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* SYSTEM FLOW / ARCHITECTURE PIPELINE */}
        {product.slug === "localmind" && (
          <section className="product-section mb-14" aria-labelledby="localmind-flow">
            <div className="product-section-heading mb-6">
              <div>
                <p className="product-eyebrow font-mono text-xs uppercase tracking-wider" style={{ color: product.accent }}>
                  Privacy &amp; Telemetry Pipeline
                </p>
                <h2 id="localmind-flow" className="mt-1 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  Loopback-Only Intelligence Flow
                </h2>
              </div>
              <p className="text-xs text-muted max-w-md">
                100% offline agent orchestration with zero external network leakage.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-xl border border-border bg-card p-4">
                <span className="text-[10px] font-mono text-emerald-500 font-bold">01 · ENTRYPOINT</span>
                <h4 className="mt-2 text-sm font-semibold text-foreground">Native Rust Launcher</h4>
                <p className="mt-1 text-xs text-muted">@jarvis sub-millisecond invocation directly to runtime</p>
              </div>
              <div className="rounded-xl border border-border bg-card p-4">
                <span className="text-[10px] font-mono text-emerald-500 font-bold">02 · GATEWAY</span>
                <h4 className="mt-2 text-sm font-semibold text-foreground">127.0.0.1:8420</h4>
                <p className="mt-1 text-xs text-muted">Strict loopback binding; remote URLs strictly rejected</p>
              </div>
              <div className="rounded-xl border border-border bg-card p-4">
                <span className="text-[10px] font-mono text-emerald-500 font-bold">03 · OBSERVER</span>
                <h4 className="mt-2 text-sm font-semibold text-foreground">Host Telemetry</h4>
                <p className="mt-1 text-xs text-muted">Deterministic process &amp; workspace indexing without LLM hallucination</p>
              </div>
              <div className="rounded-xl border border-border bg-card p-4">
                <span className="text-[10px] font-mono text-emerald-500 font-bold">04 · STREAMING</span>
                <h4 className="mt-2 text-sm font-semibold text-foreground">Python SDK Events</h4>
                <p className="mt-1 text-xs text-muted">Typed event stream (token, agent, done) to client terminal</p>
              </div>
            </div>
          </section>
        )}

        {product.slug === "keynix" && (
          <section className="product-section mb-14" aria-labelledby="keynix-flow">
            <div className="product-section-heading mb-6">
              <div>
                <p className="product-eyebrow font-mono text-xs uppercase tracking-wider" style={{ color: product.accent }}>
                  Input Virtualization Pipeline
                </p>
                <h2 id="keynix-flow" className="mt-1 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  Kernel Input Interception &amp; Synthesis
                </h2>
              </div>
              <p className="text-xs text-muted max-w-md">
                Sub-0.1ms latency event grabbing and uinput virtual device emission.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-xl border border-border bg-card p-4">
                <span className="text-[10px] font-mono text-amber-500 font-bold">01 · PHYSICAL HARDWARE</span>
                <h4 className="mt-2 text-sm font-semibold text-foreground">/dev/input/event*</h4>
                <p className="mt-1 text-xs text-muted">Raw physical USB / Bluetooth keystrokes from keyboard</p>
              </div>
              <div className="rounded-xl border border-border bg-card p-4">
                <span className="text-[10px] font-mono text-amber-500 font-bold">02 · GRAB &amp; FILTER</span>
                <h4 className="mt-2 text-sm font-semibold text-foreground">evdev EVIOCGRAB</h4>
                <p className="mt-1 text-xs text-muted">Exclusive hardware lock; fail-safe killswitch protection</p>
              </div>
              <div className="rounded-xl border border-border bg-card p-4">
                <span className="text-[10px] font-mono text-amber-500 font-bold">03 · MAPPING ENGINE</span>
                <h4 className="mt-2 text-sm font-semibold text-foreground">Worker Thread</h4>
                <p className="mt-1 text-xs text-muted">Applies user presets, detects shortcut conflicts across DEs</p>
              </div>
              <div className="rounded-xl border border-border bg-card p-4">
                <span className="text-[10px] font-mono text-amber-500 font-bold">04 · SYNTHESIS</span>
                <h4 className="mt-2 text-sm font-semibold text-foreground">/dev/uinput</h4>
                <p className="mt-1 text-xs text-muted">Emulates virtual HID keyboard into Wayland &amp; X11 sessions</p>
              </div>
            </div>
          </section>
        )}

        {product.slug === "airlink" && (
          <section className="product-section mb-14" aria-labelledby="airlink-flow">
            <div className="product-section-heading mb-6">
              <div>
                <p className="product-eyebrow font-mono text-xs uppercase tracking-wider" style={{ color: product.accent }}>
                  Connection flow
                </p>
                <h2 id="airlink-flow" className="mt-1 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  Discovery and transfer layers
                </h2>
              </div>
              <p className="text-xs text-muted max-w-md">
                BLE discovery combined with Wi-Fi Direct and ECDH encrypted socket transfer.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              <div className="rounded-xl border border-border bg-card p-4">
                <span className="text-[10px] font-mono text-primary font-bold">01 · DISCOVERY</span>
                <h4 className="mt-2 text-sm font-semibold text-foreground">Nearby Devices</h4>
                <p className="mt-1 text-xs text-muted">BLE Advertising/Scanning + Wi-Fi Direct peer discovery</p>
              </div>
              <div className="rounded-xl border border-border bg-card p-4">
                <span className="text-[10px] font-mono text-primary font-bold">02 · HANDSHAKE</span>
                <h4 className="mt-2 text-sm font-semibold text-foreground">Connection Setup</h4>
                <p className="mt-1 text-xs text-muted">Pairing and direct TCP socket transport negotiation</p>
              </div>
              <div className="rounded-xl border border-border bg-card p-4">
                <span className="text-[10px] font-mono text-primary font-bold">03 · SECURITY</span>
                <h4 className="mt-2 text-sm font-semibold text-foreground">Encrypted Transfer</h4>
                <p className="mt-1 text-xs text-muted">ECDH key agreement + AES-256-GCM authenticated payload encryption</p>
              </div>
            </div>
          </section>
        )}

        {product.slug === "archon" && (
          <section className="product-section mb-14" aria-labelledby="archon-flow">
            <div className="product-section-heading mb-6">
              <div>
                <p className="product-eyebrow font-mono text-xs uppercase tracking-wider" style={{ color: product.accent }}>
                  Package workflow
                </p>
                <h2 id="archon-flow" className="mt-1 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  Search, resolve, review, apply
                </h2>
              </div>
              <p className="text-xs text-muted max-w-md">
                Cross-distro adapter abstraction with Bubblewrap sandboxing on Arch Linux.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-xl border border-border bg-card p-4">
                <span className="text-[10px] font-mono text-primary font-bold">01 · SEARCH</span>
                <h4 className="mt-2 text-sm font-semibold text-foreground">Ranked Search</h4>
                <p className="mt-1 text-xs text-muted">Exact match prioritization and weighted repository queries</p>
              </div>
              <div className="rounded-xl border border-border bg-card p-4">
                <span className="text-[10px] font-mono text-primary font-bold">02 · RESOLVE</span>
                <h4 className="mt-2 text-sm font-semibold text-foreground">Dependency Graph</h4>
                <p className="mt-1 text-xs text-muted">Handles virtual providers, version conflicts, cycles</p>
              </div>
              <div className="rounded-xl border border-border bg-card p-4">
                <span className="text-[10px] font-mono text-primary font-bold">03 · AUDIT</span>
                <h4 className="mt-2 text-sm font-semibold text-foreground">Dry-Run Inspection</h4>
                <p className="mt-1 text-xs text-muted">Clear transaction plan displayed for user approval</p>
              </div>
              <div className="rounded-xl border border-border bg-card p-4">
                <span className="text-[10px] font-mono text-primary font-bold">04 · BUILD</span>
                <h4 className="mt-2 text-sm font-semibold text-foreground">Bubblewrap Sandbox</h4>
                <p className="mt-1 text-xs text-muted">Isolated filesystem and unshared network build stages</p>
              </div>
            </div>
          </section>
        )}

        {/* SCREENSHOTS / MEDIA GALLERY */}
        {product.screenshots && product.screenshots.length > 0 && (
          <section className="product-section mb-14" aria-labelledby="screens-title">
            <div className="product-section-heading mb-6">
              <div>
                <p className="product-eyebrow font-mono text-xs uppercase tracking-wider" style={{ color: product.accent }}>
                  Interface &amp; Visuals
                </p>
                <h2 id="screens-title" className="mt-1 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  Captured Screens
                </h2>
              </div>
              <span className="text-xs text-muted">Live captures from physical &amp; virtual test environments</span>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {product.screenshots.map((shot) => (
                <figure key={shot.src} className="overflow-hidden rounded-xl border border-border bg-card">
                  <div className="relative aspect-[9/16] bg-black/40 flex items-center justify-center p-2">
                    <Image src={shot.src} alt={shot.alt} fill className="object-contain p-2" />
                  </div>
                  <figcaption className="border-t border-border p-3 text-center text-xs font-mono text-muted">
                    {shot.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>
        )}

        {/* FEATURES GRID */}
        <section className="product-section mb-14" aria-labelledby="features-title">
          <div className="product-section-heading mb-6">
            <div>
              <p className="product-eyebrow font-mono text-xs uppercase tracking-wider" style={{ color: product.accent }}>
                Core Capabilities
              </p>
              <h2 id="features-title" className="mt-1 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Engineered for Reliability
              </h2>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {product.features.map((feature, idx) => (
              <div key={feature.title} className="rounded-xl border border-border/70 bg-card p-5 transition-all hover:border-primary/40">
                <span className="font-mono text-xs font-bold text-primary">0{idx + 1}</span>
                <h3 className="mt-2 text-base font-bold text-foreground">{feature.title}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-muted">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* INSTALLATION & DEVELOPER SDK SECTION */}
        <section className="product-section mb-14" id="install" aria-labelledby="install-title">
          <div className="product-section-heading flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6">
            <div>
              <p className="product-eyebrow font-mono text-xs uppercase tracking-wider" style={{ color: product.accent }}>
                Developer Setup
              </p>
              <h2 id="install-title" className="mt-1 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Installation &amp; SDK Quickstart
              </h2>
            </div>
            <span className="font-mono text-xs text-muted">
              {product.latestTag ? `Verified tag v${product.latestTag}` : "Source Repository Setup"}
            </span>
          </div>

          {/* Interactive Install Tabs */}
          <div className="flex border-b border-border/80 gap-2 mb-4 overflow-x-auto">
            {product.install.map((step, idx) => (
              <button
                key={step.label}
                onClick={() => setActiveInstallTab(idx)}
                className={`py-2 px-3.5 text-xs font-medium border-b-2 transition-all whitespace-nowrap ${
                  activeInstallTab === idx
                    ? "border-primary text-primary"
                    : "border-transparent text-muted hover:text-foreground"
                }`}
              >
                {step.label}
              </button>
            ))}
          </div>

          {/* Active Command Window */}
          {product.install[activeInstallTab] && (
            <div className="rounded-xl border border-white/10 bg-[#202a24] p-5 text-white shadow-xl">
              <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs font-mono text-[#b7c6c2]">
                <span className="flex items-center gap-2">
                  <Terminal size={14} className="text-primary" />
                  {product.install[activeInstallTab].label}
                </span>
                <button
                  onClick={() =>
                    copyToClipboard(
                      product.install[activeInstallTab].command,
                      `install-tab-${activeInstallTab}`
                    )
                  }
                  className="inline-flex items-center gap-1.5 rounded bg-white/10 px-2.5 py-1 text-xs text-white/90 hover:bg-white/20 transition"
                >
                  {copiedText === `install-tab-${activeInstallTab}` ? (
                    <Check size={12} className="text-emerald-400" />
                  ) : (
                    <Copy size={12} />
                  )}
                  {copiedText === `install-tab-${activeInstallTab}` ? "Copied" : "Copy Command"}
                </button>
              </div>

              <pre className="mt-4 overflow-x-auto font-mono text-xs leading-relaxed text-emerald-400 select-all p-2">
                <code>{product.install[activeInstallTab].command}</code>
              </pre>

              {product.install[activeInstallTab].note && (
                <p className="mt-4 border-t border-white/10 pt-3 text-xs text-white/60">
                  <span className="font-semibold text-white/80">Requirement Note: </span>
                  {product.install[activeInstallTab].note}
                </p>
              )}
            </div>
          )}
        </section>

        {/* DETAILED EDITORIAL SECTIONS (If defined) */}
        {product.detailSections?.map((section) => (
          <section className="product-section mb-14" key={section.title}>
            <div className="product-section-heading mb-6">
              <div>
                <p className="product-eyebrow font-mono text-xs uppercase tracking-wider" style={{ color: product.accent }}>
                  {section.eyebrow}
                </p>
                <h2 className="mt-1 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  {section.title}
                </h2>
              </div>
              <p className="text-xs text-muted max-w-md">{section.intro}</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {section.items.map((item, idx) => (
                <div key={item.title} className="rounded-xl border border-border/70 bg-card p-5">
                  <span className="font-mono text-xs text-primary font-bold">0{idx + 1}</span>
                  <h3 className="mt-2 text-sm font-bold text-foreground">{item.title}</h3>
                  <p className="mt-1.5 text-xs text-muted leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </section>
        ))}

        {/* TECHNICAL SPECIFICATIONS & SYSTEM REQUIREMENTS */}
        <section className="product-section mb-14" aria-label="Technical Details">
          <div className="product-section-heading mb-6">
            <div>
              <p className="product-eyebrow font-mono text-xs uppercase tracking-wider" style={{ color: product.accent }}>
                Under the Hood
              </p>
              <h2 className="mt-1 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Technical Specifications
              </h2>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-12">
            <div className="lg:col-span-5 rounded-xl border border-border bg-card p-6">
              <h3 className="text-sm font-mono uppercase tracking-wider text-muted">Architecture Blueprint</h3>
              <p className="mt-3 text-xs leading-relaxed text-foreground">{product.architecture}</p>

              <div className="mt-6 border-t border-border pt-4">
                <span className="text-[11px] font-mono uppercase tracking-wider text-muted">Technology Stack</span>
                <div className="mt-2.5 flex flex-wrap gap-1.5">
                  {product.stack.map((item) => (
                    <span key={item} className="rounded bg-surface-muted px-2 py-1 text-xs font-mono text-foreground border border-border/60">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-border bg-card p-5">
                <h3 className="text-xs font-mono uppercase tracking-wider text-muted mb-3">Supported Platforms</h3>
                <div className="space-y-2">
                  {product.platforms.map((plat) => (
                    <div key={plat} className="flex items-start gap-2 text-xs text-foreground">
                      <Check size={14} className="text-primary mt-0.5 shrink-0" />
                      <span>{plat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-xl border border-border bg-card p-5">
                <h3 className="text-xs font-mono uppercase tracking-wider text-muted mb-3">Implementation Languages</h3>
                <div className="space-y-2">
                  {product.languages.map((lang) => (
                    <div key={lang} className="flex items-center gap-2 text-xs text-foreground">
                      <Check size={14} className="text-primary shrink-0" />
                      <span>{lang}</span>
                    </div>
                  ))}
                </div>
              </div>

              {product.systemRequirements && product.systemRequirements.length > 0 && (
                <div className="sm:col-span-2 rounded-xl border border-border bg-card p-5">
                  <h3 className="text-xs font-mono uppercase tracking-wider text-muted mb-3">System &amp; Hardware Requirements</h3>
                  <div className="grid gap-2 sm:grid-cols-2">
                    {product.systemRequirements.map((req) => (
                      <div key={req} className="flex items-start gap-2 text-xs text-foreground">
                        <Check size={14} className="text-emerald-500 mt-0.5 shrink-0" />
                        <span>{req}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* DOCUMENTATION & REPOSITORY LINKS */}
        <section className="product-section mb-14" id="documentation" aria-labelledby="docs-title">
          <div className="product-section-heading mb-6">
            <div>
              <p className="product-eyebrow font-mono text-xs uppercase tracking-wider" style={{ color: product.accent }}>
                Developer Documentation
              </p>
              <h2 id="docs-title" className="mt-1 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Manuals, Specs &amp; Source
              </h2>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {product.documentation?.map((doc) => (
              <a
                key={doc.label}
                href={doc.url}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between rounded-xl border border-border bg-card p-4 transition-all hover:border-primary hover:shadow-sm"
              >
                <div className="flex items-center gap-2.5">
                  <FileCode size={16} className="text-primary" />
                  <span className="text-xs font-medium text-foreground group-hover:text-primary transition-colors">
                    {doc.label}
                  </span>
                </div>
                <ArrowUpRight size={14} className="text-muted group-hover:text-primary transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            ))}
            {product.repositories?.map((repo) => (
              <a
                key={repo.label}
                href={repo.url}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between rounded-xl border border-border bg-card p-4 transition-all hover:border-primary hover:shadow-sm"
              >
                <div className="flex items-center gap-2.5">
                  <Github size={16} className="text-muted" />
                  <span className="text-xs font-medium text-foreground group-hover:text-primary transition-colors">
                    {repo.label}
                  </span>
                </div>
                <ArrowUpRight size={14} className="text-muted group-hover:text-primary transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            ))}
          </div>
        </section>

        {/* FREQUENTLY ASKED QUESTIONS */}
        {product.faq && product.faq.length > 0 && (
          <section className="product-section mb-14" aria-labelledby="faq-title">
            <div className="product-section-heading mb-6">
              <div>
                <p className="product-eyebrow font-mono text-xs uppercase tracking-wider" style={{ color: product.accent }}>
                  Frequently Asked
                </p>
                <h2 id="faq-title" className="mt-1 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  Questions &amp; Details
                </h2>
              </div>
            </div>
            <div className="divide-y divide-border border-y border-border">
              {product.faq.map((item) => (
                <details key={item.question} className="group py-4">
                  <summary className="flex cursor-pointer items-center justify-between font-semibold text-sm text-foreground list-none">
                    <span>{item.question}</span>
                    <span className="text-primary transition-transform group-open:rotate-45 text-lg font-mono">+</span>
                  </summary>
                  <p className="mt-3 text-xs leading-relaxed text-muted max-w-3xl">{item.answer}</p>
                </details>
              ))}
            </div>
          </section>
        )}

        {/* MORE SOFTWARE RELEASES CROSS-SHOWCASE */}
        <section className="product-section mt-16 mb-12 border-t border-border pt-10" aria-label="More Software Releases">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6">
            <div>
              <p className="product-eyebrow font-mono text-xs uppercase tracking-wider text-primary">
                Official Software Releases
              </p>
              <h3 className="mt-1 text-2xl font-bold tracking-tight text-foreground font-heading">
                More Products &amp; Developer Toolchains
              </h3>
            </div>
            <Link
              href="/products"
              className="text-xs font-semibold text-primary hover:underline inline-flex items-center gap-1 shrink-0"
            >
              <span>Explore All Products</span>
              <ArrowUpRight size={13} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {getPublishedProducts()
              .filter((p) => p.slug !== product.slug)
              .slice(0, 3)
              .map((other) => (
                <ProductCard key={other.slug} product={other} />
              ))}
          </div>
        </section>

        {/* BOTTOM NAVIGATION */}
        <div className="mt-16 flex items-center justify-between border-t border-border pt-6 text-xs text-muted">
          <Link
            href="/products"
            className="inline-flex items-center gap-1.5 font-semibold text-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft size={14} /> Back to All Products
          </Link>
          <span>
            Explore more on <Link href="/" className="underline hover:text-foreground">Ravindran&apos;s Portfolio</Link>
          </span>
        </div>
      </div>
    </main>
  );
}
