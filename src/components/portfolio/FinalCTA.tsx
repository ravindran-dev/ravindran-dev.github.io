"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export function FinalCTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      window.location.href = `mailto:${PERSONAL_INFO.email}?subject=Software Engineering Inquiry&body=Hi Ravindran,%0D%0A%0D%0AI saw your portfolio and would like to connect.%0D%0A%0D%0AMy Email: ${encodeURIComponent(email)}`;
      setSubmitted(true);
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden rounded-3xl sm:rounded-[2.5rem] bg-[#ffe17c] text-[#171e19] p-8 sm:p-12 lg:p-16 my-16 shadow-2xl"
    >
      {/* Background Decorative Element: Massive 'Anton' text overlay with 10% opacity */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden opacity-10">
        <span className="font-display text-[14vw] tracking-tighter uppercase whitespace-nowrap text-[#171e19]">
          SYSTEMS · AI · RUNTIMES
        </span>
      </div>

      {/* Centralized Stack */}
      <div className="relative z-10 max-w-3xl mx-auto text-center space-y-5">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#171e19] text-white text-xs font-mono uppercase tracking-widest font-bold mx-auto">
          <span className="w-2 h-2 rounded-full bg-[#ffe17c] animate-pulse" />
          <span>OPEN FOR SDE &amp; SYSTEMS OPPORTUNITIES</span>
        </div>

        <h2 className="font-display text-5xl sm:text-7xl lg:text-8xl uppercase leading-[0.9] text-[#171e19]">
          LET&apos;S BUILD SOMETHING RELENTLESS.
        </h2>

        <p className="font-sans font-medium text-base sm:text-xl text-[#171e19]/85 max-w-xl mx-auto leading-relaxed">
          Ready to deploy low-level systems, edge AI inference pipelines, and mission-critical software.
        </p>

        {/* Large Centered Form with input and button (bg-charcoal, shadow-xl, hover:scale-105) */}
        <form onSubmit={handleSubmit} className="pt-2 max-w-lg mx-auto flex flex-col sm:flex-row gap-2.5">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email to connect..."
            required
            className="flex-1 px-5 py-3.5 rounded-xl border-2 border-[#171e19]/25 bg-white/95 text-[#171e19] placeholder:text-[#171e19]/50 text-sm font-sans outline-none focus:border-[#171e19] transition-colors shadow-inner"
          />
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#171e19] hover:bg-black text-white font-display text-base uppercase tracking-wider shadow-xl transition-all duration-300 hover:scale-105 shrink-0"
          >
            <span>{submitted ? "Redirecting..." : "GET IN TOUCH"}</span>
            <ArrowRight size={16} />
          </button>
        </form>

        <div className="pt-2 flex flex-wrap items-center justify-center gap-3 text-[11px] font-mono text-[#171e19]/80 font-bold uppercase">
          <span>• CIT (9.24 CGPA)</span>
          <span>• LeetCode Knight (2085)</span>
          <span>• Amazon AWS s2n-tls</span>
        </div>
      </div>
    </motion.section>
  );
}
