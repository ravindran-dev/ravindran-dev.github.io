"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

export function TestimonialCards() {
  const cards = [
    {
      stars: 5,
      quote:
        "Ranked in top 2.4% globally with a 2085 peak rating across 500+ algorithmic challenges. Deep mastery of concurrent pipelines, memory safety, and graph theory.",
      name: "LEETCODE KNIGHT",
      role: "Peak Rating 2085 · Top 2.4%",
      avatar: "/photo.png",
      isCenter: false,
    },
    {
      stars: 5,
      quote:
        "Contributed core memory-safety patches and automated regression fuzz tests to Amazon AWS s2n-tls, safeguarding enterprise TLS cryptographic communications.",
      name: "AMAZON AWS S2N-TLS",
      role: "Open Source Core Contributor",
      avatar: "/photo.png",
      isCenter: true,
    },
    {
      stars: 5,
      quote:
        "1st place across national hackathons for engineering sub-1 GFLOP drone vision models, achieving 96% mAP and 62 FPS with TensorRT INT8 quantization.",
      name: "3X HACKATHON CHAMPION",
      role: "National Autonomous Systems",
      avatar: "/photo.png",
      isCenter: false,
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6 }}
      className="w-full my-8 sm:my-12"
      aria-label="Recognition and Validation"
    >
      <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#171e19]/15 dark:border-[#b7c6c2]/20 bg-white/80 dark:bg-[#202a24] text-xs font-mono font-bold tracking-widest uppercase text-foreground dark:text-[#ffe17c]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#ffe17c] animate-pulse" />
          <span>BENCHMARKS &amp; RECOGNITION</span>
        </div>
        <h2 className="mt-3 font-display text-4xl sm:text-5xl lg:text-6xl uppercase leading-[0.9] text-foreground">
          VALIDATED IN THE ARENA.
        </h2>
        <p className="font-sans text-xs sm:text-sm text-muted leading-relaxed">
          Open source security patches, competitive algorithmic benchmarks, and national hackathon titles.
        </p>
      </div>

      {/* Grid of 3 Cards: Center card has 4px offset (translate-y-4) and bg-#171e19, side cards bg-white */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
        {cards.map((c, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.15, duration: 0.5 }}
            className={cn(
              "rounded-3xl p-7 sm:p-8 flex flex-col justify-between shadow-xl transition-all duration-300 hover:-translate-y-1",
              c.isCenter
                ? "bg-[#171e19] text-white border-2 border-[#ffe17c] md:translate-y-3 shadow-2xl relative z-10"
                : "bg-white dark:bg-[#171e19] text-[#171e19] dark:text-white border border-[#171e19]/10 dark:border-white/10"
            )}
          >
            <div>
              {/* 5 Star Icons in #ffe17c */}
              <div className="flex items-center gap-1.5 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-[#ffe17c] text-[#ffe17c]" />
                ))}
              </div>

              {/* Satoshi-Medium Body Text */}
              <p
                className={cn(
                  "font-sans font-medium text-sm sm:text-base leading-relaxed",
                  c.isCenter ? "text-zinc-200" : "text-foreground"
                )}
              >
                &ldquo;{c.quote}&rdquo;
              </p>
            </div>

            {/* Avatar Footer with Grayscale 48px Avatar & 'Anton' Uppercase Name */}
            <div
              className={cn(
                "pt-5 mt-5 border-t flex items-center gap-3",
                c.isCenter ? "border-white/10" : "border-[#171e19]/10 dark:border-white/10"
              )}
            >
              <div className="w-11 h-11 rounded-xl overflow-hidden border border-[#ffe17c]/40 shrink-0 bg-surface grayscale shadow-xs">
                <Image
                  src={c.avatar}
                  alt={c.name}
                  width={44}
                  height={44}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4
                  className={cn(
                    "font-display text-base uppercase tracking-normal",
                    c.isCenter ? "text-white" : "text-foreground"
                  )}
                >
                  {c.name}
                </h4>
                <p
                  className={cn(
                    "font-mono text-xs",
                    c.isCenter ? "text-[#ffe17c]" : "text-muted"
                  )}
                >
                  {c.role}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
