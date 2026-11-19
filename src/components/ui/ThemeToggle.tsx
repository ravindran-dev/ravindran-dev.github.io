"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-xl border border-[#171e19]/15 dark:border-[#b7c6c2]/20 bg-white/80 dark:bg-[#202a24] flex items-center justify-center text-muted">
        <span className="w-4 h-4" />
      </div>
    );
  }

  const isDark = resolvedTheme === "dark" || theme === "dark";

  return (
    <motion.button
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.92 }}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle Dark Mode"
      className="w-10 h-10 rounded-xl border border-[#171e19]/15 dark:border-[#b7c6c2]/20 bg-white dark:bg-[#202a24] hover:border-[#ffe17c] hover:bg-[#ffe17c]/10 text-foreground transition-colors flex items-center justify-center shadow-2xs cursor-pointer"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={isDark ? "dark" : "light"}
          initial={{ rotate: -45, scale: 0.7, opacity: 0 }}
          animate={{ rotate: 0, scale: 1, opacity: 1 }}
          exit={{ rotate: 45, scale: 0.7, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {isDark ? (
            <Sun className="w-[18px] h-[18px] text-[#ffe17c]" />
          ) : (
            <Moon className="w-[18px] h-[18px] text-[#171e19]" />
          )}
        </motion.div>
      </AnimatePresence>
    </motion.button>
  );
}
