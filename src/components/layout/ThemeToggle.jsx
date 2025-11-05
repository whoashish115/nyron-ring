"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

import { ui } from "@/data/content";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={
        mounted ? (isDark ? ui.themeToLight : ui.themeToDark) : ui.themeLabel
      }
      className="font-mono text-xs text-faint transition-colors hover:text-fg"
    >
      {mounted ? (
        isDark ? ui.lightWord : ui.darkWord
      ) : (
        <span className="opacity-0">{ui.darkWord}</span>
      )}
    </button>
  );
}
