"use client";

import { useEffect, useRef, useState } from "react";
import {
  Bug,
  ClipboardCheck,
  Cpu,
  Gamepad2,
  GraduationCap,
  MonitorSmartphone,
  Target,
  type LucideIcon,
} from "lucide-react";

const marks = {
  "how-i-started": [{ icon: GraduationCap, name: "Start" }],
  expertise: [
    { icon: ClipboardCheck, name: "Testing" },
    { icon: Bug, name: "Defects" },
    { icon: MonitorSmartphone, name: "Mobile and web" },
  ],
  interests: [
    { icon: Cpu, name: "Technology" },
    { icon: Gamepad2, name: "Gaming" },
  ],
  goals: [{ icon: Target, name: "Goals" }],
} as const;

export function AboutMarks({ id }: { id: keyof typeof marks }) {
  const items = marks[id];
  const rootRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState<"show" | "out">("show");
  const [played, setPlayed] = useState(false);
  const [meter, setMeter] = useState<"run" | "out" | "wait">("run");
  const [reduce, setReduce] = useState(false);
  const cycles = items.length > 1;

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setReduce(media.matches);
    apply();
    media.addEventListener("change", apply);
    return () => media.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    if (!cycles || reduce) return;
    const root = rootRef.current;
    if (!root) return;

    const onEnd = (event: AnimationEvent) => {
      if (event.animationName === "about-mark-meter") {
        setPhase("out");
        setMeter("out");
        return;
      }
      if (event.animationName === "about-mark-out") {
        setPlayed(true);
        setMeter("wait");
        setIndex((current) => (current + 1) % items.length);
        setPhase("show");
        return;
      }
      if (event.animationName === "about-mark-in") {
        setMeter("run");
      }
    };

    root.addEventListener("animationend", onEnd);
    return () => root.removeEventListener("animationend", onEnd);
  }, [cycles, items.length, reduce]);

  const item = items[reduce ? 0 : index];
  const Icon: LucideIcon = item.icon;

  return (
    <div ref={rootRef} className="about-mark about-block-mark" aria-hidden="true">
      <span className="about-mark-stage" data-played={played ? "true" : "false"}>
        <Icon
          key={item.name}
          strokeWidth={1.25}
          className="about-mark-icon"
          data-state={phase === "out" ? "out" : "in"}
        />
      </span>
      {cycles && !reduce ? <span className="about-mark-rule" data-state={meter} /> : null}
    </div>
  );
}
