import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  description?: string;
  linkText?: string;
  linkHref?: string;
  className?: string;
  align?: "left" | "center";
}

export function SectionHeader({
  badge,
  title,
  description,
  linkText,
  linkHref,
  className,
  align = "left",
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 pb-4 border-b border-border/60",
        align === "center" && "md:items-center text-center mx-auto",
        className
      )}
    >
      <div className={cn("space-y-1.5", align === "center" && "max-w-2xl mx-auto")}>
        {badge && (
          <span className="text-xs font-mono uppercase tracking-wider text-primary font-semibold">
            {badge}
          </span>
        )}
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground font-heading">
          {title}
        </h2>
        {description && (
          <p className="text-sm sm:text-base text-muted max-w-2xl leading-relaxed">
            {description}
          </p>
        )}
      </div>

      {linkText && linkHref && (
        <Link
          href={linkHref}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary-hover hover:underline transition-colors shrink-0 group"
        >
          {linkText}
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      )}
    </div>
  );
}
