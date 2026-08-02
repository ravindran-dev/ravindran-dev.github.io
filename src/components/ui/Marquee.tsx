"use client";

import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface MarqueeProps {
  children: ReactNode;
  direction?: "left" | "right";
  speed?: "slow" | "normal" | "fast";
  pauseOnHover?: boolean;
  className?: string;
}

export function Marquee({
  children,
  direction = "left",
  speed = "normal",
  pauseOnHover = true,
  className,
}: MarqueeProps) {
  const speedClass = {
    slow: "duration-[45s]",
    normal: "duration-[30s]",
    fast: "duration-[18s]",
  }[speed];

  const animationClass = direction === "left" ? "animate-marquee" : "animate-marquee-reverse";

  return (
    <div
      className={cn(
        "group relative flex overflow-hidden select-none [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]",
        className
      )}
    >
      <div
        className={cn(
          "flex shrink-0 items-center justify-around gap-4 min-w-full",
          animationClass,
          speedClass,
          pauseOnHover && "group-hover:[animation-play-state:paused]"
        )}
      >
        {children}
      </div>
      <div
        aria-hidden="true"
        className={cn(
          "flex shrink-0 items-center justify-around gap-4 min-w-full",
          animationClass,
          speedClass,
          pauseOnHover && "group-hover:[animation-play-state:paused]"
        )}
      >
        {children}
      </div>
    </div>
  );
}
