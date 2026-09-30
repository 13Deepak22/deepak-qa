"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

const LIGHT = "#efeae1";
const DARK = "#1c1915";

function chosenTheme(): "light" | "dark" | null {
  if (typeof window === "undefined") return null;
  try {
    const stored = window.localStorage.getItem("theme");
    if (stored === "light" || stored === "dark") return stored;
  } catch {}
  const value = document.documentElement.getAttribute("data-theme");
  return value === "light" || value === "dark" ? value : null;
}

function systemTheme(): "light" | "dark" {
  if (typeof window === "undefined") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function resolvedTheme(): "light" | "dark" {
  return chosenTheme() ?? systemTheme();
}

function paintThemeColor(theme: "light" | "dark") {
  const color = theme === "dark" ? DARK : LIGHT;
  document.querySelectorAll('meta[name="theme-color"]').forEach((node) => {
    node.setAttribute("content", color);
    node.removeAttribute("media");
  });
}

export function ThemeToggle() {
  const [label, setLabel] = useState("Color theme");

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const sync = () => {
      const active = resolvedTheme();
      document.documentElement.setAttribute("data-theme", active);
      document.documentElement.style.colorScheme = active;
      setLabel(active === "dark" ? "Switch to light mode" : "Switch to dark mode");
      paintThemeColor(active);
    };

    sync();
    media.addEventListener("change", sync);
    window.addEventListener("storage", sync);

    return () => {
      media.removeEventListener("change", sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  function toggle() {
    const current = resolvedTheme();
    const next = current === "dark" ? "light" : "dark";
    try {
      window.localStorage.setItem("theme", next);
    } catch {}
    document.documentElement.setAttribute("data-theme", next);
    document.documentElement.style.colorScheme = next;
    paintThemeColor(next);
    setLabel(next === "dark" ? "Switch to light mode" : "Switch to dark mode");
  }

  return (
    <button
      type="button"
      className="theme-toggle press fixed top-[1.625rem] right-5 z-50 h-9 w-9 text-ink-soft hover:text-pass"
      aria-label={label}
      data-testid="theme-toggle-button"
      data-cursor={
        label === "Switch to light mode" ? "Lights on" : label === "Switch to dark mode" ? "Lights off" : "Flip the lights"
      }
      onClick={toggle}
    >
      <Sun className="theme-icon theme-icon-light" size={18} strokeWidth={1.75} aria-hidden="true" />
      <Moon className="theme-icon theme-icon-dark" size={18} strokeWidth={1.75} aria-hidden="true" />
    </button>
  );
}
