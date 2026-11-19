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
        "rounded-2xl border border-[#171e19]/10 dark:border-[#b7c6c2]/15 bg-white dark:bg-[#202a24] p-6 text-foreground transition-all duration-300 [transition-timing-function:cubic-bezier(0.4,0,0.2,1)]",
        hoverable &&
          "hover:border-[#ffe17c]/80 hover:shadow-xl hover:-translate-y-1",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
