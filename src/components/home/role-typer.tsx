"use client";

import { useEffect, useState } from "react";
import { profile, roleTitles } from "@/data";

const TYPE_MS = 55;
const DELETE_MS = 28;
const HOLD_MS = 2200;
const GAP_MS = 350;

function nextTitle(current: string) {
  const pool = roleTitles.filter((title) => title !== current);
  return pool[Math.floor(Math.random() * pool.length)];
}

export function RoleTyper() {
  const [text, setText] = useState("");

  useEffect(() => {
    let timer = 0;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      timer = window.setTimeout(() => setText(profile.role), 0);
      return () => window.clearTimeout(timer);
    }

    let target = profile.role;
    let shown = "";

    const type = () => {
      shown = target.slice(0, shown.length + 1);
      setText(shown);
      timer = window.setTimeout(shown === target ? erase : type, shown === target ? HOLD_MS : TYPE_MS);
    };

    const erase = () => {
      shown = shown.slice(0, -1);
      setText(shown);
      if (shown) {
        timer = window.setTimeout(erase, DELETE_MS);
        return;
      }
      target = nextTitle(target);
      timer = window.setTimeout(type, GAP_MS);
    };

    timer = window.setTimeout(type, 500);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <span className="flex min-h-[1.5em] items-center">
      <span className="sr-only">{profile.role}</span>
      <span aria-hidden="true" data-role-typed>
        {text}
      </span>
      <span className="runner-caret ml-1 inline-block h-[1.05em] w-[0.5em] bg-pass/80" aria-hidden="true" />
    </span>
  );
}
