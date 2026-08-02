"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { PERSONAL_INFO } from "@/data/portfolioData";
import {
  Home,
  User,
  Briefcase,
  Code2,
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
  { label: "Skills", href: "/skills", icon: Cpu },
  { label: "Achievements", href: "/achievements", icon: Trophy },
  { label: "Contact", href: "/contact", icon: Mail },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between gap-3">
        {/* Brand Identity with Logo */}
        <Link
          href="/"
          className="group flex items-center gap-2.5 font-heading font-bold text-base sm:text-lg tracking-tight text-foreground transition-opacity hover:opacity-90 shrink-0"
        >
          <div className="relative w-7 h-7 sm:w-8 sm:h-8 rounded-lg overflow-hidden border border-border/80 bg-surface flex items-center justify-center shrink-0 shadow-2xs">
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

        {/* Desktop Navigation Tabs */}
        <nav className="hidden lg:flex items-center gap-1 p-1 rounded-full border border-border/60 bg-surface-muted/50">
          {NAV_ITEMS.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-3.5 py-1 text-xs font-medium rounded-full transition-all duration-150",
                  isActive
                    ? "bg-white dark:bg-zinc-900 text-foreground font-semibold shadow-xs border border-border/60"
                    : "text-muted hover:text-foreground hover:bg-surface-muted"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Actions Cluster */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* Linux Terminal Mode Link */}
          <a
            href={PERSONAL_INFO.terminalPortfolioUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="Interactive Linux Shell Edition"
            className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono rounded-lg border border-emerald-500/30 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 transition-colors"
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
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border bg-white dark:bg-zinc-950 px-4 py-4 space-y-4 shadow-2xl max-h-[calc(100vh-4rem)] overflow-y-auto">
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
                    "flex items-center justify-between px-3.5 py-2.5 rounded-lg text-sm font-medium transition-colors",
                    isActive
                      ? "bg-primary text-white font-semibold shadow-xs"
                      : "text-foreground hover:bg-surface-muted text-muted hover:text-foreground"
                  )}
                >
                  <div className="flex items-center gap-3">
                    <Icon className={cn("w-4 h-4", isActive ? "text-white" : "text-muted")} />
                    <span>{item.label}</span>
                  </div>
                  {isActive ? (
                    <span className="w-1.5 h-1.5 rounded-full bg-white" />
                  ) : (
                    <ChevronRight className="w-4 h-4 text-muted/60" />
                  )}
                </Link>
              );
            })}
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
        </div>
      )}
    </header>
  );
}
