"use client";

import {
  ArrowUpRight,
  CalendarCheck,
  CircleCheck,
  Coins,
  Gift,
  Globe,
  HandCoins,
  type LucideIcon,
  PiggyBank,
  WalletCards,
} from "lucide-react";
import { type CSSProperties, useState } from "react";
import { type PublicApp, publicApps } from "@/data";

const appIcons: Record<PublicApp["icon"], LucideIcon> = {
  wallet: WalletCards,
  loan: HandCoins,
  gold: Coins,
  gift: Gift,
  savings: PiggyBank,
  attendance: CalendarCheck,
  forex: Globe,
};

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
        const Icon = appIcons[app.icon];
        return (
          <div key={app.title} className="work-app border-b border-line" data-open={open}>
            <button
              type="button"
              className="work-toggle grid w-full cursor-pointer grid-cols-[auto_minmax(0,1fr)_auto] items-start gap-x-3 gap-y-2 py-6 text-left hover:bg-paper-deep sm:gap-x-4 sm:py-7 lg:grid-cols-[3.25rem_minmax(15rem,20rem)_minmax(0,1fr)_1.25rem] lg:items-center lg:gap-x-8 lg:px-1"
              aria-expanded={open}
              data-cursor={open ? "Fold the notes back" : "See what I tested"}
              onClick={(event) => {
                const next = event.currentTarget.nextElementSibling;
                if (next instanceof HTMLDivElement) toggle(app.title, next);
              }}
            >
              <span className="font-mono text-sm text-pass">{app.index}</span>
              <span className="flex min-w-0 items-start gap-3 sm:gap-4">
                <span
                  aria-hidden="true"
                  className="work-icon mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center border border-line bg-card text-pass sm:h-12 sm:w-12"
                >
                  <Icon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={1.5} />
                </span>
                <span className="min-w-0">
                  <span className="work-name block font-serif text-2xl tracking-tight sm:text-3xl">{app.title}</span>
                  <span className="mt-1 block text-sm text-muted sm:mt-2">{app.domain}</span>
                  <span className="mt-3 flex flex-wrap gap-1.5">
                    {app.platforms.map((platform) => (
                      <span
                        key={platform}
                        className="border border-line px-1.5 py-0.5 font-mono text-[0.6rem] tracking-[0.12em] text-muted uppercase"
                      >
                        {platform}
                      </span>
                    ))}
                  </span>
                </span>
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
              <div className="grid gap-6 pb-8 sm:pb-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:gap-10 lg:pr-1 lg:pl-[5.25rem]">
                <div className="min-w-0">
                  <p className="font-serif text-xl leading-snug tracking-tight text-ink text-pretty sm:text-2xl">
                    {app.detail}
                  </p>
                  <p className="mt-6 font-mono text-[0.68rem] tracking-[0.16em] text-muted uppercase">About the app</p>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{app.product}</p>
                  <dl className="mt-5 grid grid-cols-3 divide-x divide-line border border-line">
                    {app.facts.map((fact) => (
                      <div key={fact.label} className="flex min-w-0 flex-col-reverse gap-1 px-3 py-3 sm:px-4 sm:py-4">
                        <dt className="font-mono text-[0.6rem] leading-snug tracking-[0.12em] text-muted uppercase">
                          {fact.label}
                        </dt>
                        <dd className="font-serif text-base leading-tight tracking-tight break-words text-ink sm:text-xl">
                          {fact.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>

                <div className="work-report min-w-0 self-start border border-line bg-card">
                  <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1 border-b border-line px-4 py-3 font-mono text-[0.68rem] tracking-[0.14em] uppercase">
                    <span className="whitespace-nowrap text-muted">
                      suite · {app.title.toLowerCase().replace(/\s+/g, "-")}
                    </span>
                    <span className="flex items-center gap-2 whitespace-nowrap text-pass">
                      <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-pass" />
                      {app.tested.length} checks · pass
                    </span>
                  </div>
                  <p className="sr-only">What I tested</p>
                  <ul className="px-4 py-1">
                    {app.tested.map((item, index) => (
                      <li
                        key={item}
                        className="work-check flex gap-3 border-b border-line py-3 text-sm leading-relaxed text-ink-soft last:border-b-0"
                        style={{ "--i": index } as CSSProperties}
                      >
                        <CircleCheck aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-pass" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap items-center justify-between gap-3 border-t border-line px-4 py-3">
                    <ul className="flex flex-wrap gap-1.5" aria-label="Coverage">
                      {app.coverage.map((kind) => (
                        <li
                          key={kind}
                          className="bg-pass-fill/15 px-2 py-1 font-mono text-[0.6rem] tracking-[0.12em] text-pass uppercase"
                        >
                          {kind}
                        </li>
                      ))}
                    </ul>
                    <a
                      href={app.link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-line inline-flex items-center gap-1.5 text-sm text-ink hover:text-pass"
                      data-cursor={`Open ${app.title} on ${app.link.label}`}
                    >
                      {app.link.label}
                      <ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5" />
                      <span className="sr-only">(opens in a new tab)</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
