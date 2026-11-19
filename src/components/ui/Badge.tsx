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
      "bg-surface-muted text-[#171e19] border-[#171e19]/15 dark:border-[#b7c6c2]/20 dark:bg-[#202a24] dark:text-[#b7c6c2] font-medium",
    primary:
      "bg-[#ffe17c]/20 text-[#171e19] dark:text-[#ffe17c] border-[#ffe17c]/50 font-bold",
    outline:
      "bg-transparent text-[#171e19] border-border dark:text-[#b7c6c2] font-medium",
    success:
      "bg-[#ffe17c]/15 text-[#171e19] dark:text-[#ffe17c] border-[#ffe17c]/30 font-semibold",
    warning:
      "bg-[#ffe17c]/25 text-[#171e19] dark:text-[#ffe17c] border-[#ffe17c]/60 font-semibold",
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
