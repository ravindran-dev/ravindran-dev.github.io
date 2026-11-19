"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  AlignLeft,
  AlignCenter,
  AlignRight,
  Layers,
  Terminal,
  Cpu,
  MousePointer2,
  CheckCircle2,
  Sliders,
  Shield,
  Zap,
} from "lucide-react";

export function AbstractUIMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      className="w-full max-w-5xl mx-auto rounded-2xl border border-[#171e19]/15 dark:border-[#b7c6c2]/20 bg-white dark:bg-[#171e19] shadow-2xl overflow-hidden transition-all duration-300 hover:shadow-[0_20px_50px_rgba(23,30,25,0.15)]"
    >
      {/* Browser Window Header */}
      <div className="flex items-center justify-between px-3 sm:px-4 py-2.5 sm:py-3 border-b border-[#171e19]/10 dark:border-[#b7c6c2]/10 bg-[#f8f9fa] dark:bg-[#202a24] gap-2">
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          <span className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-[#ff5f56]" />
          <span className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-[#ffbd2e]" />
          <span className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-[#27c93f]" />
        </div>
        <div className="font-mono text-[10px] sm:text-xs text-muted dark:text-[#b7c6c2] tracking-wider uppercase truncate px-1 text-center">
          ravindran-workstation :: localmind-runtime.sock (127.0.0.1:8420)
        </div>
        <div className="flex items-center gap-1.5 text-[10px] sm:text-xs font-mono text-[#ffe17c] bg-[#171e19] px-2 py-0.5 rounded shrink-0">
          <span className="w-1.5 h-1.5 rounded-full bg-[#ffe17c] animate-pulse" />
          <span>RUNNING</span>
        </div>
      </div>

      {/* Mockup Body: Grid (Sidebar, Main Canvas, Properties Panel) */}
      <div className="grid grid-cols-1 md:grid-cols-12 min-h-[380px] bg-[#f8f9fa]/50 dark:bg-[#171e19]">
        {/* Sidebar */}
        <div className="hidden md:flex md:col-span-3 border-r border-[#171e19]/10 dark:border-[#b7c6c2]/10 p-4 flex-col justify-between bg-white/60 dark:bg-[#171e19]/80">
          <div className="space-y-4">
            <div className="space-y-1">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-muted dark:text-[#b7c6c2]">
                Active Subsystems
              </span>
              <div className="p-2 rounded-lg bg-[#ffe17c]/20 border border-[#ffe17c]/40 text-[#171e19] dark:text-[#ffe17c] text-xs font-medium flex items-center gap-2">
                <Terminal size={14} />
                <span>LocalMind Agent</span>
              </div>
              <div className="p-2 rounded-lg text-muted hover:text-foreground text-xs font-medium flex items-center gap-2 transition-colors">
                <Cpu size={14} />
                <span>Keynix Input Core</span>
              </div>
              <div className="p-2 rounded-lg text-muted hover:text-foreground text-xs font-medium flex items-center gap-2 transition-colors">
                <Shield size={14} />
                <span>eBPF Syscall Filter</span>
              </div>
            </div>

            <div className="pt-2 border-t border-[#171e19]/10 dark:border-[#b7c6c2]/10 space-y-1.5">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-muted dark:text-[#b7c6c2]">
                Host Telemetry
              </span>
              <div className="text-[11px] font-mono text-muted flex justify-between">
                <span>MEM LOCKED</span>
                <span className="font-bold text-foreground">100%</span>
              </div>
              <div className="w-full bg-[#171e19]/10 dark:bg-white/10 h-1.5 rounded-full overflow-hidden">
                <div className="bg-[#ffe17c] h-full w-[84%]" />
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-[#171e19]/10 dark:border-[#b7c6c2]/10 text-[10px] font-mono text-muted">
            REV 0.1.0-PREVIEW
          </div>
        </div>

        {/* Main Canvas */}
        <div className="col-span-12 md:col-span-6 p-6 sm:p-8 flex items-center justify-center relative bg-grid-pattern overflow-hidden">
          {/* Centered White Card with subtle shadows */}
          <div className="relative w-full max-w-sm rounded-xl border border-[#171e19]/10 dark:border-[#b7c6c2]/20 bg-white dark:bg-[#202a24] p-5 shadow-xl space-y-3 z-10">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#171e19] text-[#ffe17c]">
                PIPELINE EXECUTOR
              </span>
              <span className="text-[10px] font-mono text-muted">0.12ms loop</span>
            </div>
            <h4 className="font-display text-xl uppercase tracking-normal text-foreground">
              SUB-1 GFLOP VISION ENGINE
            </h4>
            <p className="font-sans text-xs text-muted leading-relaxed">
              INT8 TensorRT quantization layer active across drone camera pipeline with 96% mAP.
            </p>
            <div className="pt-2 border-t border-[#171e19]/10 dark:border-[#b7c6c2]/10 flex items-center justify-between text-xs font-mono">
              <span className="text-[#171e19] dark:text-[#ffe17c] font-bold">STATUS: OK</span>
              <span className="text-muted">LATENCY: &lt;1.8ms</span>
            </div>
          </div>

          {/* Floating Cursor Icon with User Name Label */}
          <div className="absolute top-12 right-8 sm:right-16 flex items-start gap-1 z-20 pointer-events-none animate-bounce" style={{ animationDuration: "3s" }}>
            <MousePointer2 className="w-5 h-5 text-[#171e19] dark:text-[#ffe17c] fill-current" />
            <div className="bg-[#171e19] text-white px-2 py-0.5 rounded text-[10px] font-display uppercase tracking-wider shadow-lg">
              Ravindran (Lead)
            </div>
          </div>
        </div>

        {/* Properties Panel */}
        <div className="hidden md:flex md:col-span-3 border-l border-[#171e19]/10 dark:border-[#b7c6c2]/10 p-4 flex-col justify-between bg-white/60 dark:bg-[#171e19]/80">
          <div className="space-y-4">
            <div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-muted dark:text-[#b7c6c2]">
                Properties
              </span>
              <h5 className="font-display text-sm uppercase text-foreground mt-1">
                SYSTEM CONFIG
              </h5>
            </div>

            {/* Font Display Titles & Alignment Icons */}
            <div className="space-y-2">
              <span className="text-[10px] font-mono text-muted uppercase">Layout Alignment</span>
              <div className="flex items-center gap-1 bg-[#171e19]/5 dark:bg-white/5 p-1 rounded-lg">
                <button type="button" className="p-1.5 rounded bg-white dark:bg-[#202a24] text-foreground shadow-xs">
                  <AlignLeft size={13} />
                </button>
                <button type="button" className="p-1.5 rounded text-muted hover:text-foreground">
                  <AlignCenter size={13} />
                </button>
                <button type="button" className="p-1.5 rounded text-muted hover:text-foreground">
                  <AlignRight size={13} />
                </button>
              </div>
            </div>

            {/* Hex Color Swatch (#FFE17C) */}
            <div className="space-y-1.5">
              <span className="text-[10px] font-mono text-muted uppercase">Accent Token</span>
              <div className="flex items-center gap-2 p-2 rounded-lg border border-[#171e19]/10 dark:border-[#b7c6c2]/20 bg-white dark:bg-[#202a24]">
                <div className="w-5 h-5 rounded-md bg-[#ffe17c] border border-black/20 shadow-xs shrink-0" />
                <span className="font-mono text-xs font-bold text-foreground">#FFE17C</span>
              </div>
            </div>

            {/* Quantization Mode */}
            <div className="space-y-1">
              <span className="text-[10px] font-mono text-muted uppercase">Quantization</span>
              <div className="text-xs font-mono font-semibold text-foreground bg-[#171e19]/5 dark:bg-white/5 p-2 rounded">
                INT8 Calibrated (TensorRT)
              </div>
            </div>
          </div>

          <div className="flex items-center gap-1.5 text-[10px] font-mono text-muted">
            <CheckCircle2 size={12} className="text-[#ffe17c]" />
            <span>Synchronized</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
