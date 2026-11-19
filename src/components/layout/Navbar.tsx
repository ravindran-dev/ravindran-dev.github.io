"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import {
  Github,
  Linkedin,
  FileText,
  ArrowUpRight,
  Terminal,
  Menu,
  X,
} from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Experience", href: "/experience" },
  { label: "Projects", href: "/projects" },
  { label: "Products", href: "/products" },
  { label: "Skills", href: "/skills" },
  { label: "Achievements", href: "/achievements" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoveredHref, setHoveredHref] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-200 border-b",
        scrolled
          ? "bg-white/95 dark:bg-[#171e19]/95 backdrop-blur-md border-[#171e19]/10 dark:border-[#b7c6c2]/15 shadow-sm"
          : "bg-white dark:bg-[#171e19] border-[#171e19]/10 dark:border-[#b7c6c2]/10"
      )}
    >
      <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto h-20 px-4 sm:px-6 lg:px-8 xl:px-10 flex items-center justify-between gap-3">
        {/* Brand Logo with Initial S in Anton: RAVINDRAN S. */}
        <Link
          href="/"
          className="group flex items-center font-display text-xl sm:text-3xl lg:text-4xl uppercase tracking-tight text-foreground transition-transform hover:scale-[1.02] shrink-0"
        >
          <span>RAVINDRAN S</span><span className="text-[#ffe17c] text-2xl sm:text-4xl leading-none">.</span>
          <span className="inline-flex items-center justify-center h-5 sm:h-6 px-2 sm:px-2.5 rounded-full border border-[#171e19]/20 dark:border-[#ffe17c]/40 bg-[#ffe17c]/10 text-[10px] sm:text-[11px] font-mono font-bold text-[#171e19] dark:text-[#ffe17c] uppercase tracking-wider ml-1 sm:ml-1.5 shadow-2xs">
            SDE
          </span>
        </Link>

        {/* Center Nav Links with Liquid Hover / Touched / Opened Spring Animations */}
        <nav
          onMouseLeave={() => setHoveredHref(null)}
          className="hidden lg:flex items-center gap-1 p-1.5 rounded-full border border-[#171e19]/15 dark:border-[#b7c6c2]/20 bg-[#f8f9fa]/90 dark:bg-[#202a24]/90 backdrop-blur-md shadow-xs"
          aria-label="Primary Navigation"
        >
          <LayoutGroup id="navbar-links-indicator">
            {NAV_ITEMS.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              const isHovered = hoveredHref === item.href;

              return (
                <motion.div
                  key={item.href}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="relative"
                >
                  <Link
                    href={item.href}
                    onMouseEnter={() => setHoveredHref(item.href)}
                    className={cn(
                      "relative px-4 py-2 text-[13px] xl:text-sm font-sans font-semibold tracking-wide transition-colors duration-150 rounded-full select-none shrink-0 flex items-center gap-1.5",
                      isActive
                        ? "text-[#171e19] dark:text-white font-bold"
                        : "text-[#171e19]/85 dark:text-[#b7c6c2] hover:text-[#171e19] dark:hover:text-white"
                    )}
                  >
                    {/* Sliding Hover Pill Animation */}
                    {isHovered && !isActive && (
                      <motion.div
                        layoutId="navbar-hover-bubble"
                        transition={{ type: "spring", stiffness: 420, damping: 28 }}
                        className="absolute inset-0 rounded-full bg-[#171e19]/8 dark:bg-white/10 -z-10"
                      />
                    )}

                    {/* Active / Opened Pill Animation */}
                    {isActive && (
                      <motion.div
                        layoutId="navbar-active-bubble"
                        transition={{ type: "spring", stiffness: 450, damping: 30 }}
                        className="absolute inset-0 rounded-full bg-white dark:bg-[#171e19] border border-[#171e19]/20 dark:border-[#ffe17c]/40 shadow-sm -z-10"
                      />
                    )}

                    <span className="relative z-10">{item.label}</span>
                    {isActive && (
                      <motion.span
                        layoutId="navbar-active-dot"
                        className="relative z-10 w-2 h-2 rounded-full bg-[#ffe17c] shrink-0 shadow-[0_0_8px_#ffe17c]"
                      />
                    )}
                  </Link>
                </motion.div>
              );
            })}
          </LayoutGroup>
        </nav>

        {/* Right Action Icons (Symbols for CLI, GitHub, Resume, ThemeToggle, and Resume Button) */}
        <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
          {/* CLI Mode Badge */}
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={PERSONAL_INFO.terminalPortfolioUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="Interactive Linux Shell Edition"
            className="hidden xl:inline-flex items-center gap-2 px-3.5 py-2 text-xs font-mono rounded-xl border border-[#171e19]/15 dark:border-[#ffe17c]/30 bg-white dark:bg-[#202a24] hover:border-[#ffe17c] hover:bg-[#ffe17c]/10 text-foreground dark:text-[#ffe17c] shadow-2xs font-bold transition-colors"
          >
            <span className="w-2 h-2 rounded-full bg-[#ffe17c] animate-pulse" />
            <Terminal size={14} className="text-[#ffe17c]" />
            <span className="font-bold text-xs tracking-wider">CLI Mode</span>
          </motion.a>

          {/* GitHub Symbol */}
          <motion.a
            whileHover={{ scale: 1.08, y: -1 }}
            whileTap={{ scale: 0.94 }}
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub Profile"
            className="hidden md:inline-flex w-10 h-10 rounded-xl border border-[#171e19]/15 dark:border-[#b7c6c2]/20 bg-white dark:bg-[#202a24] hover:border-[#ffe17c] hover:bg-[#ffe17c]/10 text-foreground hover:text-[#171e19] dark:hover:text-[#ffe17c] items-center justify-center transition-colors shadow-2xs"
            aria-label="GitHub Profile"
          >
            <Github size={18} />
          </motion.a>

          {/* Resume Symbol */}
          <motion.a
            whileHover={{ scale: 1.08, y: -1 }}
            whileTap={{ scale: 0.94 }}
            href={PERSONAL_INFO.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="Download Resume (PDF)"
            className="hidden sm:inline-flex w-10 h-10 rounded-xl border border-[#171e19]/15 dark:border-[#b7c6c2]/20 bg-white dark:bg-[#202a24] hover:border-[#ffe17c] hover:bg-[#ffe17c]/10 text-foreground hover:text-[#171e19] dark:hover:text-[#ffe17c] items-center justify-center transition-colors shadow-2xs"
            aria-label="Resume PDF"
          >
            <FileText size={18} />
          </motion.a>

          {/* LinkedIn Symbol */}
          <motion.a
            whileHover={{ scale: 1.08, y: -1 }}
            whileTap={{ scale: 0.94 }}
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn Profile"
            className="hidden sm:inline-flex w-10 h-10 rounded-xl border border-[#171e19]/15 dark:border-[#b7c6c2]/20 bg-white dark:bg-[#202a24] hover:border-[#ffe17c] hover:bg-[#ffe17c]/10 text-foreground hover:text-[#171e19] dark:hover:text-[#ffe17c] items-center justify-center transition-colors shadow-2xs"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={18} />
          </motion.a>

          {/* Theme Toggle */}
          <ThemeToggle />

          {/* Yellow Primary Action Button: RESUME ↗ */}
          <motion.a
            whileHover={{ scale: 1.06, y: -1 }}
            whileTap={{ scale: 0.95 }}
            href={PERSONAL_INFO.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-[#ffe17c] hover:bg-[#f5d45d] text-[#171e19] font-display text-sm sm:text-base uppercase tracking-wider font-bold shadow-sm hover:shadow-md transition-all shrink-0 group"
          >
            <span>RESUME</span>
            <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </motion.a>

          {/* Mobile Menu Toggle Button */}
          <motion.button
            whileTap={{ scale: 0.92 }}
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden w-10 h-10 rounded-xl border border-[#171e19]/15 dark:border-[#b7c6c2]/20 bg-white dark:bg-[#202a24] text-foreground hover:border-[#ffe17c] flex items-center justify-center shadow-2xs shrink-0"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Drawer (Smooth Stagger & Animated Links) */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden border-t border-border bg-white/95 dark:bg-[#171e19]/95 backdrop-blur-xl px-4 py-5 space-y-4 shadow-2xl max-h-[calc(100vh-5rem)] overflow-y-auto"
          >
            {/* Terminal promo pill */}
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href={PERSONAL_INFO.terminalPortfolioUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3.5 rounded-2xl border border-[#171e19]/15 dark:border-[#ffe17c]/30 bg-surface-muted text-foreground transition-all hover:border-[#ffe17c] shadow-2xs"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-[#ffe17c]/20 flex items-center justify-center">
                  <Terminal size={17} className="text-[#ffe17c]" />
                </div>
                <div>
                  <span className="font-display text-sm uppercase tracking-wide block">Linux Terminal Edition</span>
                  <span className="text-[11px] font-mono text-muted">Interactive Arch Shell</span>
                </div>
              </div>
              <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-[#ffe17c]/20 text-[#171e19] dark:text-[#ffe17c]">
                CLI →
              </span>
            </motion.a>

            {/* Mobile Nav Links */}
            <nav className="grid grid-cols-2 gap-2.5 pt-1">
              {NAV_ITEMS.map((item, idx) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);

                return (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.03, duration: 0.2 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className={cn(
                        "flex items-center justify-between p-3.5 rounded-2xl text-sm font-bold tracking-wide transition-all select-none border",
                        isActive
                          ? "bg-[#ffe17c] text-[#171e19] border-[#ffe17c] shadow-md scale-[1.02]"
                          : "bg-surface-muted text-[#171e19] dark:text-[#b7c6c2] hover:text-[#171e19] dark:hover:text-white border-border/60 hover:border-[#ffe17c] hover:bg-surface"
                      )}
                    >
                      <span>{item.label}</span>
                      {isActive && <span className="w-2 h-2 rounded-full bg-[#171e19]" />}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            {/* Bottom Actions Row */}
            <div className="pt-3 border-t border-border flex items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl border border-border text-foreground hover:border-[#ffe17c] hover:bg-[#ffe17c]/10 flex items-center justify-center transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={18} />
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl border border-border text-foreground hover:border-[#ffe17c] hover:bg-[#ffe17c]/10 flex items-center justify-center transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
              </div>

              <a
                href={PERSONAL_INFO.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#ffe17c] hover:bg-[#f5d45d] text-[#171e19] font-display text-sm uppercase tracking-wider font-bold shadow-sm"
              >
                <span>RESUME</span>
                <ArrowUpRight size={16} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
