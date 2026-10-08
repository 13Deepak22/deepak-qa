"use client";

import { useEffect, useRef } from "react";

const INTERACTIVE = "a, button, summary, [role='button']";
const FIELD = "input, textarea, select, [contenteditable='true']";
const DOT = 6;
const PAD = 6;
const MORPH_MS = 240;
const TRAIL_MS = 260;
const TRAIL_MAX = 48;
const GAIT_HOLD_MS = 140;
const EDGE = 8;

const LEGS = [
  { id: "ft", set: "a", x1: 14.6, y1: 9.4, x2: 18.2, y2: 5.4 },
  { id: "mt", set: "b", x1: 11.2, y1: 8.4, x2: 11.6, y2: 3.6 },
  { id: "bt", set: "a", x1: 7.8, y1: 9.2, x2: 4.6, y2: 5.2 },
  { id: "fb", set: "b", x1: 14.6, y1: 14.6, x2: 18.2, y2: 18.6 },
  { id: "mb", set: "a", x1: 11.2, y1: 15.6, x2: 11.6, y2: 20.4 },
  { id: "bb", set: "b", x1: 7.8, y1: 14.8, x2: 4.6, y2: 18.8 },
];

function nameOf(el: Element) {
  const name = (el.getAttribute("aria-label") ?? el.textContent ?? "").replace(/\s+/g, " ").trim();
  const text = name.replace(/^Switch to /, "");
  const short = text.length > 28 ? `${text.slice(0, 27)}…` : text;
  return short.charAt(0).toUpperCase() + short.slice(1);
}

function labelFor(el: Element) {
  const custom = el.getAttribute("data-cursor");
  if (custom) return custom;
  const hasText = Boolean(el.textContent?.trim());
  if (el instanceof HTMLAnchorElement) {
    const href = el.getAttribute("href") ?? "";
    if (href.startsWith("mailto:")) return "Email";
    if (href.startsWith("tel:")) return "Call";
    if (el.target === "_blank" || /^https?:/.test(href)) return hasText ? "↗" : `${nameOf(el)} ↗`;
    if (href === "/") return "Home";
  }
  return hasText ? "" : nameOf(el);
}

function easeInOutCubic(t: number) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

function follow(rate: number, dt: number) {
  return 1 - Math.exp(-rate * dt);
}

export function SiteCursor() {
  const rootRef = useRef<HTMLDivElement>(null);
  const bugRef = useRef<HTMLSpanElement>(null);
  const boxRef = useRef<HTMLSpanElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const root = rootRef.current;
    const bug = bugRef.current;
    const box = boxRef.current;
    const label = labelRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!root || !bug || !box || !label || !canvas || !ctx) return;

    const trail: Array<{ x: number; y: number; t: number }> = [];
    let trailColor = "";
    let painted = false;
    let frames = 0;

    const sizeCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(window.innerWidth * dpr);
      canvas.height = Math.round(window.innerHeight * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    sizeCanvas();

    const drawTrail = (now: number, fade: number) => {
      while (trail.length && now - trail[0].t > TRAIL_MS) trail.shift();
      if (painted) ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      painted = false;
      if (trail.length < 2 || fade < 0.01) return;
      if (frames % 30 === 0 || !trailColor) {
        trailColor = getComputedStyle(root).getPropertyValue("--pass").trim();
      }
      ctx.strokeStyle = trailColor;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      const end = trail.length - 1;
      for (let i = 1; i <= end; i++) {
        const a = trail[i - 1];
        const b = trail[i];
        const life = Math.max(0, 1 - (now - b.t) / TRAIL_MS);
        const strength = life * (i / end);
        ctx.globalAlpha = strength * 0.6 * fade;
        ctx.lineWidth = 0.8 + 5.2 * strength;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
      }
      ctx.globalAlpha = 1;
      painted = true;
    };

    let frame = 0;
    let lastTime = 0;
    let shown = false;
    let down = false;
    let flip = false;
    let hoverEl: Element | null = null;
    let progress = 0;
    let pressed = 0;
    let heading = -Math.PI / 2;
    let gait = "";
    let lastMove = 0;
    let labelW = 0;
    let labelShift = 0;
    const pos = { x: 0, y: 0 };
    const last = { x: 0, y: 0 };
    const vel = { x: 0, y: 0 };
    const target = { x: 0, y: 0, w: DOT, h: DOT };

    const tick = (now: number) => {
      const dt = lastTime ? Math.min((now - lastTime) / 1000, 0.05) : 1 / 60;
      lastTime = now;

      const track = follow(18, dt);
      vel.x += ((pos.x - last.x) / dt - vel.x) * track;
      vel.y += ((pos.y - last.y) / dt - vel.y) * track;
      last.x = pos.x;
      last.y = pos.y;
      const speed = Math.hypot(vel.x, vel.y);
      const moving = now - lastMove < GAIT_HOLD_MS && speed > 4;
      
      const isGame = document.documentElement.dataset.game === "on";

      if (moving && !isGame) {
        const turn = Math.atan2(vel.y, vel.x) - heading;
        heading += Math.atan2(Math.sin(turn), Math.cos(turn)) * follow(speed < 150 ? 8 : 12, dt);
      } else if (isGame) {
        // Smoothly rotate the detector to upright position (0 radians)
        const turn = 0 - heading;
        heading += Math.atan2(Math.sin(turn), Math.cos(turn)) * follow(12, dt);
      }
      
      let nextGait = "";
      if (moving && !isGame) {
        nextGait = speed < 150 ? "crawl" : speed < 450 ? "walk" : speed < 1100 ? "trot" : "sprint";
      }
      if (nextGait !== gait) {
        gait = nextGait;
        if (gait) root.dataset.gait = gait;
        else delete root.dataset.gait;
      }

      // Check if current hover element has died or was removed from DOM
      if (hoverEl) {
        const isDead = 
          !hoverEl.isConnected ||
          hoverEl.getAttribute("aria-hidden") === "true" ||
          hoverEl.hasAttribute("disabled") ||
          hoverEl.hasAttribute("data-squashed") ||
          (hoverEl instanceof HTMLElement && (
            hoverEl.style.display === "none" ||
            hoverEl.style.visibility === "hidden" ||
            hoverEl.style.pointerEvents === "none"
          ));

        if (isDead) {
          // Re-evaluate element under pointer
          const el = document.elementFromPoint(pos.x, pos.y);
          const field = el?.closest(FIELD) ?? null;
          const candidate = field ? null : (el?.closest(INTERACTIVE) ?? null);
          const next = candidate && candidate.isConnected && !candidate.hasAttribute("data-squashed") && candidate.getAttribute("aria-hidden") !== "true" ? candidate : null;
          
          hoverEl = next;
          root.toggleAttribute("data-hide", Boolean(field));
          root.toggleAttribute("data-hot", Boolean(hoverEl));
        }
      }

      const step = (dt * 1000) / MORPH_MS;
      progress = hoverEl ? Math.min(1, progress + step) : Math.max(0, progress - step);
      const morph = easeInOutCubic(progress);
      pressed += ((down ? 1 : 0) - pressed) * follow(18, dt);

      if (hoverEl) {
        const text = labelFor(hoverEl);
        if (text !== label.textContent) {
          label.textContent = text;
          labelW = label.offsetWidth;
        }
        const rect = hoverEl.getBoundingClientRect();
        const pad = PAD;
        const header = document.querySelector("header");
        const ceiling = header && !header.contains(hoverEl) ? header.getBoundingClientRect().bottom : 0;
        const top = Math.max(rect.top - pad, ceiling);
        const bottom = Math.max(top, Math.min(rect.bottom + pad, window.innerHeight));
        const aimX = rect.left + rect.width / 2;
        const aimY = (top + bottom) / 2;
        const aimW = rect.width + pad * 2;
        const aimH = bottom - top;
        const glide = morph < 0.02 ? 1 : follow(16, dt);
        target.x += (aimX - target.x) * glide;
        target.y += (aimY - target.y) * glide;
        target.w += (aimW - target.w) * glide;
        target.h += (aimH - target.h) * glide;
      }

      const w = DOT + (target.w - DOT) * morph;
      const h = DOT + (target.h - DOT) * morph;
      const x = pos.x + (target.x - pos.x) * morph;
      const y = pos.y + (target.y - pos.y) * morph;
      const reveal = Math.min(1, morph * 1.6);

      box.style.width = `${w}px`;
      box.style.height = `${h}px`;
      box.style.transform = `translate3d(${x - w / 2}px, ${y - h / 2}px, 0)`;
      box.style.opacity = `${reveal}`;
      box.style.setProperty("--mx", `${pos.x - (x - w / 2)}px`);
      box.style.setProperty("--my", `${pos.y - (y - h / 2)}px`);

      const base = 1 + 0.5 * pressed;
      bug.style.translate = `${pos.x}px ${pos.y}px`;
      bug.style.rotate = `${heading}rad`;
      bug.style.scale = `${base}`;

      frames += 1;
      drawTrail(now, 1 - morph);

      if (hoverEl) {
        const left = x - w / 2;
        const room = document.documentElement.clientWidth - EDGE - labelW;
        const shift = Math.max(EDGE, Math.min(left, room)) - left;
        if (shift !== labelShift) {
          labelShift = shift;
          label.style.translate = `${shift}px 0`;
        }

        const nextFlip = y + h / 2 > window.innerHeight - 40;
        if (nextFlip !== flip) {
          flip = nextFlip;
          root.toggleAttribute("data-flip", flip);
        }
      } else if (progress <= 0 && label.textContent) {
        label.textContent = "";
      }

      frame = window.requestAnimationFrame(tick);
    };

    const start = () => {
      if (frame || reduce.matches || !fine.matches) return;
      lastTime = 0;
      frame = window.requestAnimationFrame(tick);
    };

    const stop = () => {
      if (frame) window.cancelAnimationFrame(frame);
      frame = 0;
      delete document.documentElement.dataset.cursor;
      root.removeAttribute("data-show");
      shown = false;
    };

    const onMove = (event: PointerEvent) => {
      if (event.pointerType !== "mouse" || !frame) return;
      if (event.clientX !== pos.x || event.clientY !== pos.y) lastMove = performance.now();
      pos.x = event.clientX;
      pos.y = event.clientY;
      trail.push({ x: pos.x, y: pos.y, t: performance.now() });
      if (trail.length > TRAIL_MAX) trail.shift();
      if (!shown) {
        shown = true;
        last.x = pos.x;
        last.y = pos.y;
        root.dataset.show = "true";
        document.documentElement.dataset.cursor = "on";
      }
      const el = event.target instanceof Element ? event.target : null;
      const field = el?.closest(FIELD) ?? null;
      const next = field ? null : (el?.closest(INTERACTIVE) ?? null);
      hoverEl = next;
      root.toggleAttribute("data-hide", Boolean(field));
      root.toggleAttribute("data-hot", Boolean(hoverEl));
    };

    const onDown = (event: PointerEvent) => {
      if (event.pointerType !== "mouse" || !shown) return;
      down = true;
      const pulse = document.createElement("span");
      pulse.className = "site-cursor-pulse";
      pulse.style.left = `${event.clientX}px`;
      pulse.style.top = `${event.clientY}px`;
      pulse.addEventListener("animationend", () => pulse.remove(), { once: true });
      root.appendChild(pulse);
    };

    const onUp = () => {
      down = false;
    };

    const onLeave = () => {
      shown = false;
      hoverEl = null;
      trail.length = 0;
      root.removeAttribute("data-show");
      root.removeAttribute("data-hot");
    };

    const onVisible = () => {
      if (document.hidden) {
        if (frame) window.cancelAnimationFrame(frame);
        frame = 0;
        return;
      }
      start();
    };

    const onScroll = () => {
      if (!shown) return;
      const el = document.elementFromPoint(pos.x, pos.y);
      const field = el?.closest(FIELD) ?? null;
      const next = field ? null : (el?.closest(INTERACTIVE) ?? null);
      if (next !== hoverEl) {
        hoverEl = next;
        root.toggleAttribute("data-hide", Boolean(field));
        root.toggleAttribute("data-hot", Boolean(hoverEl));
      }
    };

    const onFine = () => (fine.matches ? start() : stop());
    const onReduce = () => (reduce.matches ? stop() : start());

    fine.addEventListener("change", onFine);
    reduce.addEventListener("change", onReduce);
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerdown", onDown);
    window.addEventListener("pointerup", onUp);
    window.addEventListener("resize", sizeCanvas);
    window.addEventListener("scroll", onScroll, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);
    document.addEventListener("visibilitychange", onVisible);
    start();

    return () => {
      stop();
      fine.removeEventListener("change", onFine);
      reduce.removeEventListener("change", onReduce);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
      window.removeEventListener("resize", sizeCanvas);
      window.removeEventListener("scroll", onScroll);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("visibilitychange", onVisible);
    };
  }, []);

  return (
    <div ref={rootRef} className="site-cursor" aria-hidden="true">
      <canvas ref={canvasRef} className="site-cursor-trail" />
      <span ref={boxRef} className="site-cursor-box">
        <span className="site-cursor-corner" data-corner="tl" />
        <span className="site-cursor-corner" data-corner="tr" />
        <span className="site-cursor-corner" data-corner="bl" />
        <span className="site-cursor-corner" data-corner="br" />
        <span ref={labelRef} className="site-cursor-label" />
      </span>
      <span ref={bugRef} className="site-cursor-bug">
        <svg className="bug-svg" viewBox="0 0 24 24" width="24" height="24">
          {LEGS.map((leg) => (
            <line
              key={leg.id}
              className="bug-leg"
              data-set={leg.set}
              x1={leg.x1}
              y1={leg.y1}
              x2={leg.x2}
              y2={leg.y2}
              style={{ transformOrigin: `${leg.x1}px ${leg.y1}px` }}
            />
          ))}
          <path className="bug-antenna" d="M18.6 10.8 Q20.4 8.6 22.4 8.2 M18.6 13.2 Q20.4 15.4 22.4 15.8" />
          <ellipse className="bug-shell" cx="11" cy="12" rx="6.2" ry="4.8" />
          <line className="bug-seam" x1="5.6" y1="12" x2="15.4" y2="12" />
          <circle className="bug-spot" cx="9" cy="10.1" r="1" />
          <circle className="bug-spot" cx="9" cy="13.9" r="1" />
          <circle className="bug-spot" cx="12.6" cy="9.9" r="0.8" />
          <circle className="bug-spot" cx="12.6" cy="14.1" r="0.8" />
          <circle className="bug-head" cx="17.6" cy="12" r="2.5" />
        </svg>
        <svg className="detector-svg" viewBox="0 0 24 24" width="24" height="24" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          {/* Glass background and rim (green border, white/transparent fill) */}
          <circle cx="11" cy="11" r="8" fill="var(--paper)" fillOpacity="0.75" stroke="var(--pass)" />
          {/* Glare effect (white/ink-soft) */}
          <path d="M7 7 A 5.5 5.5 0 0 1 11.5 5" stroke="var(--ink)" strokeWidth="1.5" strokeOpacity="0.3" strokeLinecap="round" />
          <path d="M14 14 A 4 4 0 0 1 13 16" stroke="var(--ink)" strokeWidth="1.5" strokeOpacity="0.3" strokeLinecap="round" />
          {/* Handle (black/ink) */}
          <line x1="22" y1="22" x2="16.65" y2="16.65" stroke="var(--ink)" strokeWidth="3" />
          {/* Inner target circle */}
          <circle cx="11" cy="11" r="2.5" stroke="var(--pass)" strokeWidth="1.5" strokeOpacity="0.8" />
        </svg>
      </span>
    </div>
  );
}
