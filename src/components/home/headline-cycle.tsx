"use client";

import { useEffect, useRef, useState } from "react";
import { RoleTyper } from "@/components/home/role-typer";
import { headlines, profile } from "@/data";

export function HeadlineCycle() {
  const rootRef = useRef<HTMLHeadingElement>(null);
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState<"show" | "out">("show");
  const [played, setPlayed] = useState(false);
  const [meter, setMeter] = useState<"run" | "out" | "wait">("run");
  const [reduce, setReduce] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setReduce(media.matches);
    apply();
    media.addEventListener("change", apply);
    return () => media.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    if (reduce) return;
    const root = rootRef.current;
    if (!root) return;

    const onEnd = (event: AnimationEvent) => {
      if (event.animationName === "headline-meter") {
        setPhase("out");
        setMeter("out");
        return;
      }
      if (event.animationName === "headline-out") {
        setPlayed(true);
        setMeter("wait");
        setIndex((current) => (current + 1) % headlines.length);
        setPhase("show");
        return;
      }
      if (event.animationName === "headline-in") {
        setMeter("run");
      }
    };

    root.addEventListener("animationend", onEnd);
    return () => root.removeEventListener("animationend", onEnd);
  }, [reduce]);

  const line = headlines[reduce ? 0 : index];

  return (
    <h1 ref={rootRef} className="headline w-full max-w-2xl font-serif tracking-[-0.035em]">
      <span className="enter enter-1 block font-mono text-[0.72rem] leading-normal tracking-[0.18em] uppercase">
        <span className="block text-muted">{profile.name}</span>
        <span className="mt-1 block text-pass">
          <RoleTyper />
        </span>
      </span>
      <span className="sr-only">{` — ${profile.headline}`}</span>
      <span
        className="headline-stage enter enter-2 mt-5"
        data-played={played ? "true" : "false"}
        aria-hidden="true"
      >
        <span
          key={line.mark}
          className="headline-line"
          data-state={phase === "out" ? "out" : "in"}
        >
          {line.rows.map((row) => (
            <span key={row.join("")} className="headline-row">
              {row.map((part) =>
                part === line.mark ? (
                  <em key={part} className="text-pass">
                    {part}
                  </em>
                ) : (
                  part
                ),
              )}
            </span>
          ))}
        </span>
      </span>
      <span className="headline-meter" data-state={reduce ? "done" : meter} aria-hidden="true" />
    </h1>
  );
}
