"use client";

import { useEffect, useRef, useState } from "react";
import { experience } from "@/data/portfolio";

export function ExperienceLog() {
  const listRef = useRef<HTMLOListElement>(null);
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);
  const [active, setActive] = useState(-1);
  const [seen, setSeen] = useState<number[]>([]);
  const [cursor, setCursor] = useState(0);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      const list = listRef.current;
      if (!list) return;
      const marker = window.innerHeight * 0.38;
      let index = -1;
      itemRefs.current.forEach((node, itemIndex) => {
        if (!node) return;
        if (node.getBoundingClientRect().top <= marker) index = itemIndex;
      });
      if (index < 0) return;
      const period = itemRefs.current[index]?.querySelector("[data-period]");
      if (period) {
        const listTop = list.getBoundingClientRect().top;
        const rect = period.getBoundingClientRect();
        const next = rect.top - listTop + rect.height / 2 - 7;
        setCursor((current) => (Math.abs(current - next) < 0.5 ? current : next));
      }
      setActive((current) => (current === index ? current : index));
      setSeen((current) => (current.includes(index) ? current : [...current, index]));
    };
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };
    update();
    const observer = new ResizeObserver(onScroll);
    if (listRef.current) observer.observe(listRef.current);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useEffect(() => {
    if (active < 0) return;
    const frame = requestAnimationFrame(() => setReady(true));
    return () => cancelAnimationFrame(frame);
  }, [active]);

  function focusRole(index: number) {
    setActive(index);
    setSeen((current) => (current.includes(index) ? current : [...current, index]));
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    itemRefs.current[index]?.scrollIntoView({
      behavior: reduce ? "auto" : "smooth",
      block: "center",
    });
  }

  return (
    <ol ref={listRef} className="xp-log relative mt-14">
      <span className="xp-rail" aria-hidden="true" />
      {active >= 0 ? (
        <span
          className="xp-cursor"
          data-ready={ready}
          style={{ transform: `translate3d(0, ${cursor}px, 0)` }}
          aria-hidden="true"
        >
          <svg viewBox="0 0 16 16" className="h-2.5 w-2.5">
            <path d="M2.5 8.2 6.2 12 13.5 4" fill="none" stroke="currentColor" strokeWidth="1.8" />
          </svg>
        </span>
      ) : null}
      {experience.map((role, index) => {
        const live = role.period.includes("Present");
        const on = index === active;
        const status = live && seen.includes(index) ? "run" : seen.includes(index) ? "pass" : "wait";
        return (
          <li
            key={`${role.org}-${role.period}`}
            ref={(node) => {
              itemRefs.current[index] = node;
            }}
            data-active={on}
            data-seen={seen.includes(index)}
            className="xp-station relative border-t border-line py-8 pl-8"
            aria-current={on ? "true" : undefined}
          >
            <div className="grid gap-4 md:grid-cols-12">
              <div className="md:col-span-3">
                <button type="button" className="text-left" onClick={() => focusRole(index)}>
                  <span data-period className="block font-mono text-xs tracking-[0.14em] text-muted uppercase">
                    {role.period}
                  </span>
                  <span className="mt-2 block text-sm text-pass">{role.title}</span>
                  <span
                    className={`mt-3 flex items-center gap-2 font-mono text-[0.68rem] tracking-[0.16em] uppercase ${
                      status === "wait" ? "text-muted" : "text-pass"
                    }`}
                  >
                    {status === "run" ? (
                      <span className="runner-caret inline-block h-3 w-px bg-pass" />
                    ) : null}
                    {status}
                  </span>
                  <span className="xp-meter" aria-hidden="true" />
                </button>
              </div>
              <div className="md:col-span-9">
                <h3 className="xp-org font-serif text-3xl tracking-tight">{role.org}</h3>
                <ul className="mt-4 space-y-2 text-ink-soft">
                  {role.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
