"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-9 h-9 rounded-lg border border-border bg-surface flex items-center justify-center text-muted">
        <span className="w-4 h-4" />
      </div>
    );
  }

  const isDark = resolvedTheme === "dark" || theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle Dark Mode"
      className="w-9 h-9 rounded-lg border border-border bg-surface hover:bg-surface-muted hover:border-border/80 flex items-center justify-center text-foreground transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
    >
      {isDark ? (
        <Sun className="w-4 h-4 text-amber-400 hover:text-amber-300 transition-colors" />
      ) : (
        <Moon className="w-4 h-4 text-slate-700 hover:text-primary transition-colors" />
      )}
    </button>
  );
}
