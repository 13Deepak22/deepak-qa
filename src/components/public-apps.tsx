"use client";

import { useState } from "react";
import { publicApps } from "@/data/portfolio";

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function playHeight(panel: HTMLDivElement, next: "open" | "close") {
  const token = `${next}-${Date.now()}`;
  panel.dataset.anim = token;

  if (prefersReducedMotion()) {
    panel.style.visibility = next === "open" ? "visible" : "hidden";
    panel.style.height = next === "open" ? "auto" : "0px";
    return;
  }

  if (next === "open") panel.style.visibility = "visible";
  const current = panel.getBoundingClientRect().height;
  panel.style.height = `${current}px`;
  const target = next === "open" ? panel.scrollHeight : 0;
  panel.getBoundingClientRect();
  panel.style.height = `${target}px`;

  const finish = (event: TransitionEvent) => {
    if (event.propertyName !== "height" || event.target !== panel) return;
    if (panel.dataset.anim !== token) return;
    panel.removeEventListener("transitionend", finish);
    if (next === "open") panel.style.height = "auto";
    else panel.style.visibility = "hidden";
  };
  panel.addEventListener("transitionend", finish);
}

export function PublicApps() {
  const [openTitle, setOpenTitle] = useState<string | null>(null);

  function toggle(title: string, panel: HTMLDivElement) {
    const opening = openTitle !== title;

    document.querySelectorAll<HTMLDivElement>(".work-panel").forEach((other) => {
      if (other === panel) return;
      if (other.getBoundingClientRect().height === 0) return;
      playHeight(other, "close");
    });

    playHeight(panel, opening ? "open" : "close");
    setOpenTitle(opening ? title : null);
  }

  return (
    <>
      {publicApps.map((app) => {
        const open = openTitle === app.title;
        return (
          <div key={app.title} className="work-app border-b border-ink" data-open={open}>
            <button
              type="button"
              className="work-toggle grid w-full cursor-pointer grid-cols-[auto_1fr_auto] items-baseline gap-x-4 gap-y-2 py-7 text-left hover:bg-paper-deep md:grid-cols-12 md:gap-6 md:px-3"
              aria-expanded={open}
              onClick={(event) => {
                const next = event.currentTarget.nextElementSibling;
                if (next instanceof HTMLDivElement) toggle(app.title, next);
              }}
            >
              <span className="font-mono text-sm text-pass md:col-span-1">{app.index}</span>
              <span className="md:col-span-6">
                <span className="work-name block font-serif text-3xl tracking-tight">{app.title}</span>
                <span className="mt-2 block text-sm text-muted">{app.domain}</span>
              </span>
              <span className="col-span-2 text-sm leading-relaxed text-ink-soft md:col-span-4">
                {app.outcome}
              </span>
              <span className="col-start-3 row-start-1 self-center md:col-span-1 md:col-start-auto md:row-start-auto md:text-right">
                <svg
                  className="work-chevron inline-block text-pass"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                >
                  <path d="M3.5 6 L8 10.5 L12.5 6" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </span>
            </button>
            <div className="work-panel">
              <p className="max-w-2xl pb-7 text-base leading-relaxed text-ink-soft md:ml-[8.333%] md:px-3">
                {app.detail}
              </p>
            </div>
          </div>
        );
      })}
    </>
  );
}
