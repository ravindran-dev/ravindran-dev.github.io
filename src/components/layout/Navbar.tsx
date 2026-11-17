"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { PERSONAL_INFO } from "@/data/portfolioData";
import {
  Home,
  User,
  Briefcase,
  Code2,
  Package,
  Cpu,
  Trophy,
  Mail,
  Terminal,
  Github,
  Linkedin,
  FileText,
  Menu,
  X,
  ArrowUpRight,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "Home", href: "/", icon: Home },
  { label: "About", href: "/about", icon: User },
  { label: "Experience", href: "/experience", icon: Briefcase },
  { label: "Projects", href: "/projects", icon: Code2 },
  { label: "Products", href: "/products", icon: Package },
  { label: "Skills", href: "/skills", icon: Cpu },
  { label: "Achievements", href: "/achievements", icon: Trophy },
  { label: "Contact", href: "/contact", icon: Mail },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 8);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Automatically close mobile menu when navigating to another route
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-colors duration-200",
        scrolled
          ? "bg-white/95 dark:bg-zinc-950/95 backdrop-blur-md border-b border-border/80 shadow-xs"
          : "bg-white/80 dark:bg-zinc-950/80 backdrop-blur-sm border-b border-border/40"
      )}
    >
      <div className="w-full max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 h-16 flex items-center justify-between gap-4">
        {/* Brand Identity with Logo */}
        <div className="flex items-center shrink-0">
          <Link
            href="/"
            className="group flex items-center gap-2.5 font-heading font-bold text-base sm:text-lg tracking-tight text-foreground transition-opacity hover:opacity-90"
          >
            <div className="relative w-8 h-8 rounded-lg overflow-hidden border border-border/80 bg-surface flex items-center justify-center shrink-0 shadow-2xs">
              <Image
                src="/logo.png"
                alt="Ravindran S Logo"
                width={32}
                height={32}
                className="object-cover w-full h-full"
              />
            </div>
            <span className="tracking-tight">{PERSONAL_INFO.name}</span>
            <span className="hidden sm:inline-block text-[10px] font-mono font-medium text-muted px-1.5 py-0.5 rounded-full bg-surface-muted border border-border">
              SDE
            </span>
          </Link>
        </div>

        {/* Desktop Navigation Tabs (Liquid iOS Segmented Control) */}
        <div className="hidden lg:flex flex-1 items-center justify-center px-3 xl:px-6">
          <nav
            onMouseLeave={() => setHoveredTab(null)}
            className="flex items-center gap-1 p-1 rounded-full border border-black/[0.08] dark:border-white/[0.08] bg-surface-muted/80 dark:bg-zinc-900/80 backdrop-blur-md shadow-[inset_0_1px_2px_rgba(0,0,0,0.04)] dark:shadow-[inset_0_1px_2px_rgba(0,0,0,0.4)]"
            aria-label="Main Navigation"
          >
            <LayoutGroup id="desktop-navbar-tabs">
              {NAV_ITEMS.map((item) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onMouseEnter={() => setHoveredTab(item.href)}
                    className={cn(
                      "relative px-3 xl:px-4 py-1.5 text-xs xl:text-[13px] font-medium rounded-full transition-colors duration-200 select-none flex items-center justify-center outline-none focus-visible:ring-2 focus-visible:ring-primary/40 whitespace-nowrap shrink-0",
                      isActive
                        ? "text-foreground font-semibold"
                        : "text-muted hover:text-foreground"
                    )}
                  >
                    {/* Sliding Liquid Active Indicator */}
                    {isActive && (
                      <motion.div
                        layoutId="navbar-active-pill"
                        className="absolute inset-0 rounded-full bg-white dark:bg-zinc-800 shadow-[0_2px_8px_rgba(0,0,0,0.08),0_1px_2px_rgba(0,0,0,0.04),inset_0_1px_0_rgba(255,255,255,0.9)] dark:shadow-[0_2px_12px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.12)] border border-black/[0.05] dark:border-white/[0.1]"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                          mass: 0.8,
                        }}
                      />
                    )}

                    {/* Translucent Hover Indicator */}
                    <AnimatePresence>
                      {hoveredTab === item.href && !isActive && (
                        <motion.div
                          layoutId="navbar-hover-pill"
                          className="absolute inset-0 rounded-full bg-black/[0.04] dark:bg-white/[0.06]"
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 30,
                          }}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                        />
                      )}
                    </AnimatePresence>

                    <motion.span
                      whileTap={{ scale: 0.94 }}
                      className="relative z-10 inline-block whitespace-nowrap transition-colors duration-200"
                    >
                      {item.label}
                    </motion.span>
                  </Link>
                );
              })}
            </LayoutGroup>
          </nav>
        </div>

        {/* Right Actions Cluster */}
        <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
          {/* Linux Terminal Mode Link */}
          <a
            href={PERSONAL_INFO.terminalPortfolioUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="Interactive Linux Shell Edition"
            className="hidden xl:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono rounded-lg border border-emerald-500/30 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 transition-colors"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <Terminal className="w-3.5 h-3.5" />
            <span className="font-semibold">CLI Mode</span>
          </a>

          {/* Social Icons */}
          <div className="hidden sm:flex items-center gap-0.5">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-muted hover:text-foreground hover:bg-surface-muted transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-muted hover:text-foreground hover:bg-surface-muted transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>

          {/* Theme Toggle */}
          <ThemeToggle />

          {/* Resume CTA */}
          <a
            href={PERSONAL_INFO.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1 px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-primary hover:bg-primary-hover text-white shadow-xs transition-colors shrink-0"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
            <ArrowUpRight className="w-3 h-3 opacity-80" />
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="lg:hidden p-2 rounded-lg border border-border bg-surface hover:bg-surface-muted text-foreground transition-colors shrink-0"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer (Clean, Non-blocking Dropdown) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden border-t border-border bg-white dark:bg-zinc-950 px-4 py-4 space-y-4 shadow-2xl max-h-[calc(100vh-4rem)] overflow-y-auto"
          >
            {/* Linux Terminal Feature Card */}
            <a
              href={PERSONAL_INFO.terminalPortfolioUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3.5 rounded-xl border border-emerald-500/40 bg-emerald-500/10 text-foreground transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                  <Terminal className="w-4 h-4" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-heading font-bold text-xs text-foreground">
                      Linux Terminal Edition
                    </span>
                    <span className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 uppercase">
                      CLI
                    </span>
                  </div>
                  <p className="text-[11px] text-muted font-mono">
                    Interactive retro terminal
                  </p>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
            </a>

            {/* Navigation Items with Icons */}
            <nav className="space-y-1">
              <LayoutGroup id="mobile-navbar-tabs">
                {NAV_ITEMS.map((item) => {
                  const Icon = item.icon;
                  const isActive =
                    item.href === "/"
                      ? pathname === "/"
                      : pathname.startsWith(item.href);

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={cn(
                        "relative flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-colors select-none",
                        isActive
                          ? "text-primary dark:text-primary-dark font-semibold"
                          : "text-foreground hover:bg-surface-muted text-muted hover:text-foreground"
                      )}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="mobile-navbar-active-pill"
                          className="absolute inset-0 rounded-xl bg-primary/10 dark:bg-primary/20 border border-primary/20"
                          transition={{
                            type: "spring",
                            stiffness: 380,
                            damping: 30,
                            mass: 0.8,
                          }}
                        />
                      )}
                      <div className="relative z-10 flex items-center gap-3">
                        <Icon
                          className={cn(
                            "w-4 h-4 transition-colors",
                            isActive ? "text-primary dark:text-primary-dark" : "text-muted"
                          )}
                        />
                        <span>{item.label}</span>
                      </div>
                      {isActive ? (
                        <span className="relative z-10 w-1.5 h-1.5 rounded-full bg-primary" />
                      ) : (
                        <ChevronRight className="relative z-10 w-4 h-4 text-muted/60" />
                      )}
                    </Link>
                  );
                })}
              </LayoutGroup>
            </nav>

            {/* Actions & Links */}
            <div className="pt-3 border-t border-border space-y-2.5">
              <a
                href={PERSONAL_INFO.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-primary hover:bg-primary-hover text-white text-sm font-semibold shadow-xs transition-colors"
              >
                <FileText className="w-4 h-4" />
                <span>Download Resume</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
              </a>

              <div className="grid grid-cols-2 gap-2 text-xs font-medium text-muted">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 p-2 rounded-lg border border-border bg-surface hover:bg-surface-muted hover:text-foreground transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 p-2 rounded-lg border border-border bg-surface hover:bg-surface-muted hover:text-foreground transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-blue-600" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
