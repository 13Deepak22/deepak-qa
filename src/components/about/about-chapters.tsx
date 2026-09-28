"use client";

import { useEffect, useState } from "react";

type Chapter = { id: string; title: string; hint: string };

export function AboutChapters({ chapters }: { chapters: readonly Chapter[] }) {
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;
    const measure = () => {
      frame = 0;
      const line = window.innerHeight * 0.35;
      const tops = chapters.map((chapter) => document.getElementById(chapter.id)?.getBoundingClientRect().top ?? 0);
      const atEnd = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
      let next = 0;
      tops.forEach((top, index) => {
        if (top <= line) next = index;
      });
      const span = tops[tops.length - 1] - tops[0];
      setActive(atEnd ? chapters.length - 1 : next);
      setProgress(atEnd ? 1 : span > 0 ? Math.min(1, Math.max(0, (line - tops[0]) / span)) : 0);
    };
    const schedule = () => {
      if (!frame) frame = window.requestAnimationFrame(measure);
    };
    schedule();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [chapters]);

  return (
    <nav aria-label="About chapters" className="about-chapters">
      <p className="font-mono text-[0.62rem] tracking-[0.16em] text-muted uppercase">Chapters</p>
      <div className="about-chapter-track">
        <span className="about-rail" aria-hidden="true" />
        <span className="about-rail-fill" style={{ transform: `scaleY(${progress})` }} aria-hidden="true" />
        <ol className="grid gap-0.5">
          {chapters.map((chapter, index) => (
            <li key={chapter.id}>
              <a
                href={`#${chapter.id}`}
                className="about-chapter"
                data-active={index === active}
                aria-current={index === active ? "location" : undefined}
                data-cursor={chapter.hint}
              >
                <span className="font-mono text-[0.65rem] tracking-[0.1em]">{String(index + 1).padStart(2, "0")}</span>
                {chapter.title}
              </a>
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
