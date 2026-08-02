import React from "react";
import Link from "next/link";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { Github, Linkedin, Mail, ArrowUpRight, Terminal } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-border bg-surface-muted/50 dark:bg-zinc-950 py-12 text-muted text-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8">
        {/* Terminal Portfolio Promo Banner in Footer */}
        <div className="p-4 sm:p-5 rounded-xl border border-emerald-500/30 bg-emerald-500/5 dark:bg-emerald-950/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="w-9 h-9 rounded-lg bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
              <Terminal className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs sm:text-sm font-bold text-foreground font-heading">
                Prefer an interactive CLI &amp; Matrix shell?
              </p>
              <p className="text-xs text-muted">
                Explore the Linux Terminal edition built with Arch Linux aesthetics.
              </p>
            </div>
          </div>
          <a
            href={PERSONAL_INFO.terminalPortfolioUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-mono font-semibold shadow-xs transition-colors shrink-0"
          >
            <span>Launch Linux Terminal</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand & Summary */}
          <div className="space-y-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 font-heading font-bold text-foreground">
              <span>{PERSONAL_INFO.name}</span>
              <span className="text-xs font-mono text-muted">|</span>
              <span className="text-xs text-muted font-normal">
                {PERSONAL_INFO.title}
              </span>
            </div>
            <p className="text-xs text-muted max-w-sm">
              Focused on high-performance Edge AI inference, systems engineering, and scalable distributed architectures.
            </p>
          </div>

          {/* Page Links */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-medium">
            <Link href="/" className="hover:text-foreground transition-colors">
              Home
            </Link>
            <Link href="/about" className="hover:text-foreground transition-colors">
              About
            </Link>
            <Link href="/experience" className="hover:text-foreground transition-colors">
              Experience
            </Link>
            <Link href="/projects" className="hover:text-foreground transition-colors">
              Projects
            </Link>
            <Link href="/skills" className="hover:text-foreground transition-colors">
              Skills
            </Link>
            <Link href="/achievements" className="hover:text-foreground transition-colors">
              Achievements
            </Link>
            <Link href="/contact" className="hover:text-foreground transition-colors">
              Contact
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg border border-border bg-surface hover:bg-surface-muted hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg border border-border bg-surface hover:bg-surface-muted hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-2 rounded-lg border border-border bg-surface hover:bg-surface-muted hover:text-foreground transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="pt-6 border-t border-border/60 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted text-center sm:text-left">
          <p>© 2026 Ravindran S. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span>Built with Next.js, React, TypeScript &amp; Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
