"use client";

import { useState } from "react";
import { publicApps } from "@/data";

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
          <div key={app.title} className="work-app border-b border-line" data-open={open}>
            <button
              type="button"
              className="work-toggle grid w-full cursor-pointer grid-cols-[auto_minmax(0,1fr)_auto] items-start gap-x-3 gap-y-2 py-6 text-left hover:bg-paper-deep sm:gap-x-4 sm:py-7 lg:grid-cols-[3.25rem_minmax(11rem,16rem)_minmax(0,1fr)_1.25rem] lg:items-center lg:gap-x-8 lg:px-1"
              aria-expanded={open}
              data-cursor={open ? "Fold the notes back" : "See what I tested"}
              onClick={(event) => {
                const next = event.currentTarget.nextElementSibling;
                if (next instanceof HTMLDivElement) toggle(app.title, next);
              }}
            >
              <span className="font-mono text-sm text-pass">{app.index}</span>
              <span className="min-w-0">
                <span className="work-name block font-serif text-2xl tracking-tight sm:text-3xl">{app.title}</span>
                <span className="mt-1 block text-sm text-muted sm:mt-2">{app.domain}</span>
              </span>
              <span className="col-span-2 min-w-0 text-sm leading-relaxed text-ink-soft lg:col-span-1 lg:col-start-3 lg:row-start-1">
                {app.outcome}
              </span>
              <span className="col-start-3 row-start-1 self-center lg:col-start-4 lg:text-right">
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
              <p className="max-w-2xl pb-6 text-base leading-relaxed text-ink-soft sm:pb-7 lg:pl-[5.25rem]">
                {app.detail}
              </p>
            </div>
          </div>
        );
      })}
    </>
  );
}
