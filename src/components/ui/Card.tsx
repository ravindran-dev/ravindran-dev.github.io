import React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
}

export function Card({
  children,
  className,
  hoverable = true,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-border bg-card p-6 text-foreground transition-all duration-200",
        hoverable &&
          "hover:border-slate-300 dark:hover:border-zinc-700 hover:shadow-md hover:shadow-slate-200/50 dark:hover:shadow-black/40 hover:-translate-y-0.5",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
