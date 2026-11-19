"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Check, Copy, Terminal } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export function EditorialHero() {
  const [copied, setCopied] = useState(false);
  const quickCommand = "curl -sSL https://raw.githubusercontent.com/ravindran-dev/localmind/main/install.sh | bash";

  const handleCopy = () => {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(quickCommand);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    }
  };

  const conciseSummary =
    "CS @ Chennai Institute of Technology · Engineering sub-1 GFLOP Edge AI models, low-level Linux kernel interception, and offline agent runtimes.";

  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      className="relative w-full pt-4 pb-10 sm:pt-8 sm:pb-14 text-center overflow-visible"
    >
      {/* Background Radial Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[550px] h-[280px] bg-[#ffe17c]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 space-y-5">
        {/* Badge: caps, tracking-widest, text-xs with yellow dot indicator */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.4 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[#171e19]/15 dark:border-[#b7c6c2]/20 bg-white/80 dark:bg-[#171e19]/80 backdrop-blur-md shadow-xs mx-auto"
        >
          <span className="w-2 h-2 rounded-full bg-[#ffe17c] animate-pulse" />
          <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-foreground">
            AVAILABLE FOR SDE &amp; SYSTEMS ROLES
          </span>
        </motion.div>

        {/* Headline: 'Anton' with a yellow highlight bar behind the final word */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-[7.25rem] xl:text-[8.5rem] uppercase text-foreground leading-[0.9] tracking-tight"
        >
          BUILDING HIGH-PERFORMANCE LOW-LEVEL{" "}
          <span className="relative inline-block px-2.5 sm:px-3 mx-1">
            <span className="absolute inset-0 bg-[#ffe17c] -rotate-1 rounded-sm -z-10 shadow-xs" />
            <span className="text-[#171e19]">SYSTEMS.</span>
          </span>
        </motion.h1>

        {/* Subheadline: Concise 1-2 line summary per prompt: 'Satoshi' (text-lg, text-charcoal/70%, max-w-xl) */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="font-sans font-medium text-base sm:text-lg md:text-xl text-[#171e19]/70 dark:text-[#b7c6c2] max-w-xl mx-auto leading-relaxed pt-1"
        >
          {conciseSummary}
        </motion.p>

        {/* Waitlist / Launch Form: side-by-side input (border-charcoal/20, px-6, rounded-lg) and massive 'Anton' button (bg-yellow, text-xl, px-8) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="pt-2 max-w-2xl mx-auto"
        >
          <div className="flex flex-col sm:flex-row items-center gap-3 p-2 rounded-2xl border border-[#171e19]/20 dark:border-[#b7c6c2]/20 bg-white dark:bg-[#202a24] shadow-xl">
            <div className="flex-1 w-full flex items-center gap-2.5 px-4 py-2.5 font-mono text-xs overflow-hidden">
              <Terminal size={15} className="text-[#171e19] dark:text-[#ffe17c] shrink-0" />
              <input
                type="text"
                readOnly
                value={quickCommand}
                onClick={handleCopy}
                className="w-full bg-transparent font-mono text-xs text-[#171e19] dark:text-white outline-none select-all cursor-pointer truncate text-left font-semibold"
                title="Click to copy quick-launch command"
              />
              <button
                type="button"
                onClick={handleCopy}
                className="shrink-0 p-1.5 rounded-md hover:bg-black/5 dark:hover:bg-white/10 text-[#171e19]/80 dark:text-[#b7c6c2] hover:text-[#171e19] dark:hover:text-white transition-colors"
                title="Copy Command"
              >
                {copied ? <Check size={14} className="text-[#ffe17c]" /> : <Copy size={14} />}
              </button>
            </div>

            <button
              type="button"
              onClick={handleCopy}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-[#ffe17c] hover:bg-[#f5d45d] text-[#171e19] font-display text-xl uppercase tracking-wider shadow-lg transition-all duration-300 hover:scale-105 shrink-0"
            >
              <span>{copied ? "COPIED TO CLIPBOARD" : "INITIALIZE"}</span>
              <ArrowRight size={18} />
            </button>
          </div>

          <div className="pt-3 flex items-center justify-center gap-4 text-xs font-mono">
            <span className="text-[#171e19]/80 dark:text-[#b7c6c2]">One-line install for local AI agent runtime</span>
            <span className="text-[#171e19]/30 dark:text-white/30">·</span>
            <a
              href={PERSONAL_INFO.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#171e19] dark:text-[#ffe17c] hover:underline underline-offset-4 font-bold transition-colors"
            >
              View Full CV →
            </a>
          </div>
        </motion.div>

        {/* Metrics Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="pt-6 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto"
        >
          {PERSONAL_INFO.stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-4 sm:p-5 rounded-2xl border border-[#171e19]/10 dark:border-[#b7c6c2]/15 bg-white/70 dark:bg-[#202a24]/80 backdrop-blur-sm text-left shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#ffe17c]"
            >
              <span className="text-[10px] font-mono uppercase tracking-widest text-muted block">
                {stat.label}
              </span>
              <span className="font-display text-2xl sm:text-3xl text-foreground block my-0.5">
                {stat.value}
              </span>
              <p className="text-[11px] font-sans text-muted leading-tight">
                {stat.detail}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
