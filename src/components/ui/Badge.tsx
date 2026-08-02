import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "primary" | "outline" | "success" | "warning";
  size?: "sm" | "md";
  className?: string;
}

export function Badge({
  children,
  variant = "default",
  size = "sm",
  className,
}: BadgeProps) {
  const variantStyles = {
    default:
      "bg-surface-muted text-foreground/80 border-border/80 dark:bg-zinc-800/80 dark:text-zinc-200",
    primary:
      "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950/40 dark:text-blue-300 dark:border-blue-800/50",
    outline:
      "bg-transparent text-foreground/80 border-border dark:text-zinc-300",
    success:
      "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800/50",
    warning:
      "bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950/40 dark:text-amber-300 dark:border-amber-800/50",
  }[variant];

  const sizeStyles = {
    sm: "px-2.5 py-0.5 text-xs font-mono tracking-tight",
    md: "px-3 py-1 text-xs font-mono font-medium",
  }[size];

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-md border font-normal transition-colors",
        variantStyles,
        sizeStyles,
        className
      )}
    >
      {children}
    </span>
  );
}
