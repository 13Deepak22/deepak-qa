"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

const LIGHT = "#efeae1";
const DARK = "#1c1915";

function chosenTheme(): "light" | "dark" | null {
  const value = document.documentElement.getAttribute("data-theme");
  return value === "light" || value === "dark" ? value : null;
}

function systemTheme(): "light" | "dark" {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function resolvedTheme() {
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
      const theme = resolvedTheme();
      setLabel(theme === "dark" ? "Switch to light mode" : "Switch to dark mode");
      const chosen = chosenTheme();
      if (chosen) paintThemeColor(chosen);
    };
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  function toggle() {
    const next = resolvedTheme() === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
    paintThemeColor(next);
    setLabel(next === "dark" ? "Switch to light mode" : "Switch to dark mode");
  }

  return (
    <button
      type="button"
      className="theme-toggle press fixed top-[1.625rem] right-5 z-50 h-9 w-9 text-ink-soft hover:text-pass"
      aria-label={label}
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
