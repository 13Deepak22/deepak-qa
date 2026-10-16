"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { usePathname } from "next/navigation";
import { 
  Gamepad2, Bug, X, Target, ShieldCheck, 
  Volume2, VolumeX, Pause, Play, AlertTriangle, 
  RefreshCw, Zap, Award, Settings 
} from "lucide-react";

interface Defect {
  id: string;
  x: number;
  y: number;
  squashed: boolean;
  scanning?: boolean;
  eating?: boolean;
  eatingTarget?: HTMLElement | null;
  targetElement?: HTMLElement | null;
  targetX?: number;
  targetY?: number;
  roamTargetX?: number;
  roamTargetY?: number;
  roamChangeTime?: number;
  eatStartTime?: number;
  lastHitTest?: number;
  originalSpeed: number;
  spawnTime: number;
  hasAlertedCritical?: boolean;
  isDying?: boolean;
  dieStartTime?: number;
  isBorn?: boolean;
  birthStartTime?: number;
  size: number;
  baseSize: number;
  speed: number;
  speedScale?: number;
  direction: number; // angle in radians
  color: string;
  isPulsing?: boolean;
  hungerThreshold?: number;
  wobbleSeed: number;
  bugCode: string;
  bugLabel: string;
  bugSeverity: "P0" | "P1" | "P2" | "P3";
  initialSeverity?: "P0" | "P1" | "P2" | "P3";
  bugIcon: string;
  bugCategory: string;
}


interface TerminalLog {
  id: number;
  text: string;
  priority: string;
  icon: string;
  timestamp: string;
}

const QA_TITLES = [
  { minScore: 0, title: "QA Intern", badge: "🌱 Tier 1" },
  { minScore: 6, title: "Test Automation Eng", badge: "🧪 Tier 2" },
  { minScore: 14, title: "Senior SDET Lead", badge: "⚡ Tier 3" },
  { minScore: 24, title: "Principal QA Architect", badge: "🛡️ Tier 4" },
  { minScore: 38, title: "Chaos Defect Terminator", badge: "🔥 Elite" },
];

const ISSUES_CATALOG = [
  "memory leak in main thread", "race condition in payment gateway",
  "null pointer exception in checkout", "infinite rendering loop",
  "uncaught promise rejection", "XSS vulnerability vector",
  "unauthorized state mutation", "CSS overflow on mobile viewport",
  "flaky e2e test assertion", "broken OAuth2 callback handshake",
  "stale cache invalidation", "unhandled WebSocket disconnect",
  "missing loading skeleton", "API timeout fallback failure",
  "database deadlock scenario", "incorrect locale string mapping",
  "hydration mismatch on SSR", "malformed JSON payload schema",
  "accessibility ARIA label missing", "unoptimized bundle payload",
  "z-index context stacking collision", "JWT token expiration edge case",
  "incorrect timezone offset calculation", "strict CORS policy violation",
  "service worker cache miss loop", "layout thrashing on scroll trigger",
  "uncontrolled form input state", "missing boundary error fallback",
  "duplicate DOM ID collision in form"
];

const ACTIONS_CATALOG = ["Isolated", "Captured", "Patched", "Squashed", "Resolved", "Mitigated", "Intercepted"];

const generateBugMessage = (score: number, progress: number = 0) => {
  let priority = "P3 [Low]";
  let icon = "✅";
  let urgency = "routine maintenance.";
  
  if (progress >= 1.0) { 
    priority = "P0 [Critical]"; 
    icon = "🔥"; 
    urgency = "prevented production outage!"; 
  } else if (progress >= 0.70) { 
    priority = "P1 [High]"; 
    icon = "🚨"; 
    urgency = "prevented critical data loss."; 
  } else if (progress >= 0.35) { 
    priority = "P2 [Medium]"; 
    icon = "⚠️"; 
    urgency = "system stability preserved."; 
  }
  
  const action = ACTIONS_CATALOG[(score * 3) % ACTIONS_CATALOG.length];
  const issue = ISSUES_CATALOG[(score * 7) % ISSUES_CATALOG.length];
  
  const baseMessage = `${icon} ${priority}: ${action} ${issue}`;
  return {
    fullText: progress >= 0.35 ? `${baseMessage} (${urgency})` : `${baseMessage}.`,
    priority,
    icon
  };
};

export interface BugTemplate {
  code: string;
  label: string;
  defaultSeverity: "P0" | "P1" | "P2" | "P3";
  color: string;
  bgTint: string;
  icon: string;
  category: string;
}

export type BugPriorityTier = "low" | "med" | "high" | "critical";

export interface PriorityConfig {
  name: BugPriorityTier;
  label: string;
  color: string;
  size: number;
  speedScale: number;
}

export const STAGE_DURATION_MS = 7000; // 7 seconds per priority tier (0-7s: Low, 7-14s: Med, 14-21s: High, 21s+: Critical)
export const COLOR_PHASE_MS = 650; // Phase 1: Color changes first over 650ms
export const SIZE_PHASE_MS = 800; // Phase 2: Size reduces next over 800ms
export const CRITICAL_ATTACK_DELAY_MS = 2500; // 2.5 seconds in Critical state before locking target and attacking

export const BUG_PRIORITY_CONFIG: Record<BugPriorityTier, PriorityConfig> = {
  low: {
    name: "low",
    label: "P3 [Low]",
    color: "#10b981", // Low: Green
    size: 54, // Largest size: easiest to detect
    speedScale: 0.95,
  },
  med: {
    name: "med",
    label: "P2 [Medium]",
    color: "#eab308", // Med: Yellow
    size: 44, // Medium size
    speedScale: 1.75,
  },
  high: {
    name: "high",
    label: "P1 [High]",
    color: "#f97316", // High: Orange
    size: 36, // Smaller size: harder to spot & catch
    speedScale: 2.75,
  },
  critical: {
    name: "critical",
    label: "P0 [Critical]",
    color: "#ef4444", // Critical: Red
    size: 28, // Smurfed micro-defect: smallest & hardest to detect
    speedScale: 4.1,
  },
};

export interface SimulatedState {
  tier: BugPriorityTier;
  color: string;
  size: number;
  speedScale: number;
  severity: "P0" | "P1" | "P2" | "P3";
  isPulsing: boolean;
}

export function interpolateColor(color1: string, color2: string, factor: number): string {
  const t = Math.max(0, Math.min(1, factor));
  const parseHex = (hex: string) => {
    const c = hex.replace("#", "");
    return [
      parseInt(c.substring(0, 2), 16),
      parseInt(c.substring(2, 4), 16),
      parseInt(c.substring(4, 6), 16),
    ];
  };

  const [r1, g1, b1] = parseHex(color1);
  const [r2, g2, b2] = parseHex(color2);

  const r = Math.round(r1 + (r2 - r1) * t);
  const g = Math.round(g1 + (g2 - g1) * t);
  const b = Math.round(b1 + (b2 - b1) * t);

  return `#${r.toString(16).padStart(2, "0")}${g.toString(16).padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;
}

export const easeInOutQuad = (t: number) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);
export const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

// Exact Simulation: Color changes FIRST over COLOR_PHASE_MS, then Size reduces NEXT over SIZE_PHASE_MS
export function getSimulatedBugState(age: number): SimulatedState {
  const lowCfg = BUG_PRIORITY_CONFIG.low;
  const medCfg = BUG_PRIORITY_CONFIG.med;
  const highCfg = BUG_PRIORITY_CONFIG.high;
  const critCfg = BUG_PRIORITY_CONFIG.critical;

  // 1. Low Tier: age < 7000ms
  if (age < STAGE_DURATION_MS) {
    return {
      tier: "low",
      color: lowCfg.color,
      size: lowCfg.size,
      speedScale: lowCfg.speedScale,
      severity: "P3",
      isPulsing: false,
    };
  }

  // 2. Transition from Low to Medium (7000ms <= age < 14000ms)
  const medAge = age - STAGE_DURATION_MS;
  if (medAge < COLOR_PHASE_MS) {
    // PHASE 1: COLOR CHANGES FIRST! Size remains at Low (54px)
    const t = medAge / COLOR_PHASE_MS;
    return {
      tier: "med",
      color: interpolateColor(lowCfg.color, medCfg.color, easeInOutQuad(t)),
      size: lowCfg.size, // Size does not reduce yet!
      speedScale: lowCfg.speedScale,
      severity: "P2",
      isPulsing: false,
    };
  } else if (medAge < COLOR_PHASE_MS + SIZE_PHASE_MS) {
    // PHASE 2: SIZE REDUCES NEXT! Color is now fully Yellow
    const t = (medAge - COLOR_PHASE_MS) / SIZE_PHASE_MS;
    const progress = easeOutCubic(t);
    return {
      tier: "med",
      color: medCfg.color,
      size: Math.round((lowCfg.size + (medCfg.size - lowCfg.size) * progress) * 100) / 100,
      speedScale: lowCfg.speedScale + (medCfg.speedScale - lowCfg.speedScale) * progress,
      severity: "P2",
      isPulsing: false,
    };
  } else if (age < STAGE_DURATION_MS * 2) {
    // Stable Medium
    return {
      tier: "med",
      color: medCfg.color,
      size: medCfg.size,
      speedScale: medCfg.speedScale,
      severity: "P2",
      isPulsing: false,
    };
  }

  // 3. Transition from Medium to High (14000ms <= age < 21000ms)
  const highAge = age - STAGE_DURATION_MS * 2;
  if (highAge < COLOR_PHASE_MS) {
    // PHASE 1: COLOR CHANGES FIRST! Size remains at Medium (44px)
    const t = highAge / COLOR_PHASE_MS;
    return {
      tier: "high",
      color: interpolateColor(medCfg.color, highCfg.color, easeInOutQuad(t)),
      size: medCfg.size, // Size does not reduce yet!
      speedScale: medCfg.speedScale,
      severity: "P1",
      isPulsing: false,
    };
  } else if (highAge < COLOR_PHASE_MS + SIZE_PHASE_MS) {
    // PHASE 2: SIZE REDUCES NEXT! Color is now fully Orange
    const t = (highAge - COLOR_PHASE_MS) / SIZE_PHASE_MS;
    const progress = easeOutCubic(t);
    return {
      tier: "high",
      color: highCfg.color,
      size: Math.round((medCfg.size + (highCfg.size - medCfg.size) * progress) * 100) / 100,
      speedScale: medCfg.speedScale + (highCfg.speedScale - medCfg.speedScale) * progress,
      severity: "P1",
      isPulsing: false,
    };
  } else if (age < STAGE_DURATION_MS * 3) {
    // Stable High
    return {
      tier: "high",
      color: highCfg.color,
      size: highCfg.size,
      speedScale: highCfg.speedScale,
      severity: "P1",
      isPulsing: false,
    };
  }

  // 4. Transition from High to Critical (age >= 21000ms)
  const critAge = age - STAGE_DURATION_MS * 3;
  if (critAge < COLOR_PHASE_MS) {
    // PHASE 1: COLOR CHANGES FIRST! Size remains at High (36px)
    const t = critAge / COLOR_PHASE_MS;
    return {
      tier: "critical",
      color: interpolateColor(highCfg.color, critCfg.color, easeInOutQuad(t)),
      size: highCfg.size, // Size does not reduce yet!
      speedScale: highCfg.speedScale,
      severity: "P0",
      isPulsing: true,
    };
  } else if (critAge < COLOR_PHASE_MS + SIZE_PHASE_MS) {
    // PHASE 2: SIZE REDUCES NEXT! Color is now fully Red
    const t = (critAge - COLOR_PHASE_MS) / SIZE_PHASE_MS;
    const progress = easeOutCubic(t);
    return {
      tier: "critical",
      color: critCfg.color,
      size: Math.round((highCfg.size + (critCfg.size - highCfg.size) * progress) * 100) / 100,
      speedScale: highCfg.speedScale + (critCfg.speedScale - highCfg.speedScale) * progress,
      severity: "P0",
      isPulsing: true,
    };
  }

  // Stable Critical
  return {
    tier: "critical",
    color: critCfg.color,
    size: critCfg.size,
    speedScale: critCfg.speedScale,
    severity: "P0",
    isPulsing: true,
  };
}

export const UI_BUG_TYPES: BugTemplate[] = [
  { code: "#404", label: "NOT_FOUND", defaultSeverity: "P2", color: "#eab308", bgTint: "rgba(234, 179, 8, 0.16)", icon: "⚠️", category: "HTTP" },
  { code: "#500", label: "INTERNAL_ERR", defaultSeverity: "P0", color: "#ef4444", bgTint: "rgba(239, 68, 68, 0.22)", icon: "💥", category: "SYS" },
  { code: "#01", label: "NULL_PTR", defaultSeverity: "P1", color: "#f97316", bgTint: "rgba(249, 115, 22, 0.18)", icon: "🛑", category: "MEM" },
  { code: "#02", label: "RACE_COND", defaultSeverity: "P0", color: "#ef4444", bgTint: "rgba(239, 68, 68, 0.24)", icon: "⚡", category: "SYNC" },
  { code: "#502", label: "BAD_GATEWAY", defaultSeverity: "P1", color: "#f97316", bgTint: "rgba(249, 115, 22, 0.18)", icon: "🔌", category: "NET" },
  { code: "#03", label: "MEM_LEAK", defaultSeverity: "P0", color: "#ef4444", bgTint: "rgba(239, 68, 68, 0.25)", icon: "🔥", category: "HEAP" },
  { code: "#429", label: "RATE_LIMIT", defaultSeverity: "P2", color: "#eab308", bgTint: "rgba(234, 179, 8, 0.16)", icon: "⏱️", category: "RATE" },
  { code: "#04", label: "DEADLOCK", defaultSeverity: "P1", color: "#f97316", bgTint: "rgba(249, 115, 22, 0.18)", icon: "🔒", category: "LOCK" },
  { code: "#05", label: "TIMEOUT_ERR", defaultSeverity: "P2", color: "#eab308", bgTint: "rgba(234, 179, 8, 0.16)", icon: "⏳", category: "WAIT" },
  { code: "#403", label: "FORBIDDEN", defaultSeverity: "P2", color: "#eab308", bgTint: "rgba(234, 179, 8, 0.16)", icon: "🚫", category: "AUTH" },
  { code: "#06", label: "FLAKY_SPEC", defaultSeverity: "P3", color: "#10b981", bgTint: "rgba(16, 185, 129, 0.16)", icon: "🧪", category: "TEST" },
  { code: "#07", label: "STACK_OFLOW", defaultSeverity: "P1", color: "#f97316", bgTint: "rgba(249, 115, 22, 0.18)", icon: "📉", category: "CALL" },
  { code: "#08", label: "HYDRATE_FAIL", defaultSeverity: "P2", color: "#eab308", bgTint: "rgba(234, 179, 8, 0.16)", icon: "💧", category: "SSR" },
  { code: "#09", label: "LINT_WARN", defaultSeverity: "P3", color: "#10b981", bgTint: "rgba(16, 185, 129, 0.16)", icon: "✨", category: "CODE" },
  { code: "#10", label: "LOG_NOISE", defaultSeverity: "P3", color: "#10b981", bgTint: "rgba(16, 185, 129, 0.16)", icon: "📋", category: "LOG" },
  { code: "#11", label: "STALE_CACHE", defaultSeverity: "P3", color: "#10b981", bgTint: "rgba(16, 185, 129, 0.16)", icon: "🔄", category: "CACHE" },
  { code: "#503", label: "SVC_UNAVAIL", defaultSeverity: "P1", color: "#f97316", bgTint: "rgba(249, 115, 22, 0.18)", icon: "🛑", category: "SRV" },
];

export interface PcbCircuitBugProps {
  size: number;
  color: string;
  speedScale?: number;
  isEating?: boolean;
  isPulsing?: boolean;
  isFrozen?: boolean;
}

// FINAL EXCLUSIVE SOFTWARE BUG MODEL: PCB Circuit Bug (Image 3)
// Printed circuit board defect with etched copper trace lines, solder pads & angular robotic legs
export function PcbCircuitBug({ 
  size, 
  color, 
  speedScale = 1, 
  isEating, 
  isPulsing, 
  isFrozen 
}: PcbCircuitBugProps) {
  const strideDuration = isFrozen 
    ? "0s" 
    : isEating 
      ? "0.06s" 
      : `${Math.max(0.045, 0.22 / (speedScale || 1))}s`;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`select-none pcb-bug-circuit ${isEating ? "bug-eating-tremor" : "bug-waddle"}`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        filter: isFrozen
          ? "drop-shadow(0 0 10px #38bdf8) brightness(1.25)"
          : isPulsing
            ? "drop-shadow(0 0 10px rgba(239, 68, 68, 0.9)) drop-shadow(0 0 18px rgba(239, 68, 68, 0.6))"
            : `drop-shadow(0 2px 7px ${color}77)`,
      }}
    >
      {/* P0 Critical Pulse Ring */}
      {isPulsing && (
        <circle 
          cx="22" 
          cy="22" 
          r="18" 
          stroke={color} 
          strokeWidth="1.2" 
          fill="none" 
          className="bug-pulse-ring" 
        />
      )}

      {/* 6 Angular Robotic Circuit Legs */}
      <g style={{ transformBox: "view-box" }}>
        {/* Top Left */}
        <polyline
          className="bug-leg-a"
          style={{ 
            transformOrigin: "17px 16px", 
            animationDuration: strideDuration, 
            animationPlayState: isFrozen ? "paused" : "running",
          }}
          points="17,16 9,13 5,8"
          stroke={color}
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        {/* Top Right */}
        <polyline
          className="bug-leg-b"
          style={{ 
            transformOrigin: "27px 16px", 
            animationDuration: strideDuration, 
            animationPlayState: isFrozen ? "paused" : "running",
          }}
          points="27,16 35,13 39,8"
          stroke={color}
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        {/* Mid Left */}
        <polyline
          className="bug-leg-b"
          style={{ 
            transformOrigin: "15px 24px", 
            animationDuration: strideDuration, 
            animationPlayState: isFrozen ? "paused" : "running",
          }}
          points="15,24 7,23 4,29"
          stroke={color}
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        {/* Mid Right */}
        <polyline
          className="bug-leg-a"
          style={{ 
            transformOrigin: "29px 24px", 
            animationDuration: strideDuration, 
            animationPlayState: isFrozen ? "paused" : "running",
          }}
          points="29,24 37,23 40,29"
          stroke={color}
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        {/* Bottom Left */}
        <polyline
          className="bug-leg-a"
          style={{ 
            transformOrigin: "17px 32px", 
            animationDuration: strideDuration, 
            animationPlayState: isFrozen ? "paused" : "running",
          }}
          points="17,32 10,34 6,41"
          stroke={color}
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        {/* Bottom Right */}
        <polyline
          className="bug-leg-b"
          style={{ 
            transformOrigin: "27px 32px", 
            animationDuration: strideDuration, 
            animationPlayState: isFrozen ? "paused" : "running",
          }}
          points="27,32 34,34 38,41"
          stroke={color}
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </g>

      {/* Main Chitin Shell */}
      <path
        d="M 16 17 C 12 25 13 35 22 38 C 31 35 32 25 28 17 Z"
        fill="#0d0d14"
        stroke={color}
        strokeWidth="1.4"
      />

      {/* Etched PCB Circuit Traces & Solder Nodes */}
      <g>
        {/* Trace 1 */}
        <path d="M 16 36 L 16 30 L 18 27" stroke={color} strokeWidth="1.4" strokeLinecap="round" fill="none" />
        <circle cx="18" cy="27" r="1.5" fill={color} />

        {/* Trace 2 */}
        <path d="M 22 37 L 22 23" stroke={color} strokeWidth="1.4" strokeLinecap="round" fill="none" />
        <circle cx="22" cy="23" r="1.5" fill={color} />

        {/* Trace 3 */}
        <path d="M 28 36 L 28 30 L 26 27" stroke={color} strokeWidth="1.4" strokeLinecap="round" fill="none" />
        <circle cx="26" cy="27" r="1.5" fill={color} />
      </g>

      {/* Thorax Plate */}
      <polygon points="17,17 27,17 25,12 19,12" fill="#141420" stroke={color} strokeWidth="1.1" />

      {/* Head */}
      <polygon points="19,12 25,12 24,8 20,8" fill="#09090e" stroke={color} strokeWidth="1.1" />

      {/* Antenna Pins */}
      <polyline points="20,8 15,3" stroke={color} strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <polyline points="24,8 29,3" stroke={color} strokeWidth="1.5" strokeLinecap="round" fill="none" />
    </svg>
  );
}

export const ModernBug = PcbCircuitBug;

export function QaGame() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [hasCrashed, setHasCrashed] = useState(false);
  const [hasWon, setHasWon] = useState(false);
  const [wave, setWave] = useState(1);
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(0);
  const [maxCombo, setMaxCombo] = useState(0);
  const [breakpoints, setBreakpoints] = useState(1);
  const [isFrozen, setIsFrozen] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [systemIntegrity, setSystemIntegrity] = useState(100);
  const [eatenCount, setEatenCount] = useState(0);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [defects, setDefects] = useState<Defect[]>([]);
  const [particles, setParticles] = useState<{ id: string; x: number; y: number; color: string }[]>([]);

  // Coordinate header space when QA game is active in top-left corner
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (isOpen) {
      document.documentElement.setAttribute("data-qa-game-open", "true");
      window.dispatchEvent(new CustomEvent("qa-game-state-change", { detail: { open: true } }));
    } else {
      document.documentElement.removeAttribute("data-qa-game-open");
      window.dispatchEvent(new CustomEvent("qa-game-state-change", { detail: { open: false } }));
    }
    return () => {
      document.documentElement.removeAttribute("data-qa-game-open");
    };
  }, [isOpen]);

  const [terminalLogs, setTerminalLogs] = useState<TerminalLog[]>([]);

  const requestRef = useRef<number>(null);
  const defectsRef = useRef<Defect[]>([]);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const comboTimerRef = useRef<NodeJS.Timeout | null>(null);
  const freezeTimerRef = useRef<NodeJS.Timeout | null>(null);
  
  const scoreRef = useRef(0);
  const isMutedRef = useRef(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const hasCrashedRef = useRef(false);
  const hasWonRef = useRef(false);
  const waveRef = useRef(1);
  const spawnDefectRef = useRef<() => void>(() => {});

  // Sync state refs
  useEffect(() => {
    defectsRef.current = defects;
    scoreRef.current = score;
    isMutedRef.current = isMuted;
    hasCrashedRef.current = hasCrashed;
    hasWonRef.current = hasWon;
    waveRef.current = wave;
  }, [defects, score, isMuted, hasCrashed, hasWon, wave]);

  // Clean Audio Context Manager
  const getAudio = useCallback(() => {
    if (typeof window === "undefined" || isMutedRef.current) return null;
    try {
      if (!audioCtxRef.current) {
        const AudioClass = window.AudioContext || (window as any).webkitAudioContext;
        if (AudioClass) audioCtxRef.current = new AudioClass();
      }
      if (audioCtxRef.current && audioCtxRef.current.state === "suspended") {
        audioCtxRef.current.resume();
      }
      return audioCtxRef.current;
    } catch {
      return null;
    }
  }, []);

  const playResolveAudio = useCallback((comboMultiplier = 1) => {
    const ctx = getAudio();
    if (!ctx) return;
    try {
      const now = ctx.currentTime;
      const baseFreq = 700 + Math.min(comboMultiplier * 120, 900);

      const osc1 = ctx.createOscillator();
      const gain1 = ctx.createGain();
      osc1.type = "sine";
      osc1.frequency.setValueAtTime(baseFreq, now);
      gain1.gain.setValueAtTime(0.08, now);
      gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.12);
      osc1.connect(gain1);
      gain1.connect(ctx.destination);
      osc1.start(now);
      osc1.stop(now + 0.12);

      const osc2 = ctx.createOscillator();
      const gain2 = ctx.createGain();
      osc2.type = "triangle";
      osc2.frequency.setValueAtTime(baseFreq * 1.5, now + 0.08);
      gain2.gain.setValueAtTime(0.1, now + 0.08);
      gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.28);
      osc2.connect(gain2);
      gain2.connect(ctx.destination);
      osc2.start(now + 0.08);
      osc2.stop(now + 0.28);
    } catch {}
  }, [getAudio]);

  const playGlitchAudio = useCallback(() => {
    const ctx = getAudio();
    if (!ctx) return;
    try {
      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(120, now);
      osc.frequency.linearRampToValueAtTime(900, now + 0.05);
      osc.frequency.linearRampToValueAtTime(40, now + 0.12);
      osc.frequency.linearRampToValueAtTime(350, now + 0.18);
      gain.gain.setValueAtTime(0.1, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.22);
    } catch {}
  }, [getAudio]);

  const playCrashAudio = useCallback(() => {
    const ctx = getAudio();
    if (!ctx) return;
    try {
      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(280, now);
      osc.frequency.exponentialRampToValueAtTime(32, now + 0.35);
      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.35);

      const sub = ctx.createOscillator();
      const subGain = ctx.createGain();
      sub.type = "triangle";
      sub.frequency.setValueAtTime(90, now);
      sub.frequency.linearRampToValueAtTime(25, now + 0.4);
      subGain.gain.setValueAtTime(0.18, now);
      subGain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);
      sub.connect(subGain);
      subGain.connect(ctx.destination);
      sub.start(now);
      sub.stop(now + 0.4);
    } catch {}
  }, [getAudio]);

  const playBirthAudio = useCallback(() => {
    const ctx = getAudio();
    if (!ctx) return;
    try {
      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(440, now);
      osc.frequency.exponentialRampToValueAtTime(880, now + 0.14);
      gain.gain.setValueAtTime(0.09, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.14);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.14);
    } catch {}
  }, [getAudio]);

  const playBreakpointAudio = useCallback(() => {
    const ctx = getAudio();
    if (!ctx) return;
    try {
      const now = ctx.currentTime;
      [440, 554.37, 659.25, 880].forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, now + idx * 0.04);
        gain.gain.setValueAtTime(0.06, now + idx * 0.04);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.6);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now + idx * 0.04);
        osc.stop(now + 0.6);
      });
    } catch {}
  }, [getAudio]);

  const playVictoryAudio = useCallback(() => {
    const ctx = getAudio();
    if (!ctx) return;
    try {
      const now = ctx.currentTime;
      [523.25, 659.25, 783.99, 1046.5].forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "triangle";
        osc.frequency.setValueAtTime(freq, now + idx * 0.1);
        gain.gain.setValueAtTime(0.08, now + idx * 0.1);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.1 + 0.35);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now + idx * 0.1);
        osc.stop(now + idx * 0.1 + 0.35);
      });
    } catch {}
  }, [getAudio]);

  const playAlertAudio = useCallback(() => {
    const ctx = getAudio();
    if (!ctx) return;
    try {
      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(520, now);
      osc.frequency.exponentialRampToValueAtTime(1040, now + 0.12);
      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.15);
    } catch {}
  }, [getAudio]);

  // Clean DOM restoration helper
  const restoreAllEatenElements = useCallback(() => {
    if (typeof document === "undefined") return;
    document.querySelectorAll('[data-eaten="true"], [data-eating-by], [data-targeted-by]').forEach(el => {
      const targetEl = el as HTMLElement;
      targetEl.removeAttribute('data-eaten');
      targetEl.removeAttribute('data-eating-by');
      targetEl.removeAttribute('data-targeted-by');
      targetEl.style.transition = "opacity 0.5s ease, filter 0.5s ease, transform 0.5s ease, outline 0.4s ease, color 0.4s ease, text-decoration 0.4s ease";
      targetEl.style.opacity = "";
      targetEl.style.pointerEvents = "";
      targetEl.style.position = "";
      targetEl.style.filter = "";
      targetEl.style.color = "";
      targetEl.style.outline = "";
      targetEl.style.outlineOffset = "";
      targetEl.style.textDecoration = "";
      targetEl.style.transform = "";
      targetEl.style.boxShadow = "";
      targetEl.style.backgroundColor = "";
    });
    setEatenCount(0);
    setSystemIntegrity(100);
  }, []);

  // Breakpoint trigger
  const triggerBreakpoint = useCallback(() => {
    if (breakpoints <= 0 || isFrozen) return;
    setBreakpoints(prev => Math.max(0, prev - 1));
    setIsFrozen(true);
    playBreakpointAudio();

    if (freezeTimerRef.current) clearTimeout(freezeTimerRef.current);
    freezeTimerRef.current = setTimeout(() => {
      setIsFrozen(false);
    }, 4000);
  }, [breakpoints, isFrozen, playBreakpointAudio]);

  // Keyboard shortcut: Spacebar triggers breakpoint
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isOpen && e.code === "Space" && !hasCrashed) {
        e.preventDefault();
        triggerBreakpoint();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, hasCrashed, triggerBreakpoint]);

  // Squash Defect
  const squashDefect = useCallback((id: string, x: number, y: number) => {
    const targetBug = defectsRef.current.find(b => b.id === id);
    if (!targetBug || targetBug.squashed) return;

    const progress = (Date.now() - targetBug.spawnTime) / (targetBug.hungerThreshold || 10000);

    // Update combo
    if (comboTimerRef.current) clearTimeout(comboTimerRef.current);
    const newCombo = combo + 1;
    setCombo(newCombo);
    setMaxCombo(prev => Math.max(prev, newCombo));
    comboTimerRef.current = setTimeout(() => setCombo(0), 2000);

    // Audio
    playResolveAudio(newCombo);

    // Award Breakpoint charge every 6 squashes & check Win Quota
    setScore(s => {
      const nextScore = s + 1;
      scoreRef.current = nextScore;
      if (nextScore > 0 && nextScore % 6 === 0) {
        setBreakpoints(b => Math.min(3, b + 1));
      }
      const quota = 10 + (waveRef.current - 1) * 5;
      if (nextScore >= quota && !hasWonRef.current && !hasCrashedRef.current) {
        setHasWon(true);
        hasWonRef.current = true;
        playVictoryAudio();
      }
      return nextScore;
    });

    // If bug was targeting or eating an element, save and restore the element from being eaten
    if (targetBug.targetElement) {
      const targetEl = targetBug.targetElement;
      targetEl.removeAttribute('data-targeted-by');
      targetEl.removeAttribute('data-eating-by');
      if (!targetEl.hasAttribute('data-eaten')) {
        targetEl.style.color = "";
        targetEl.style.outline = "";
        targetEl.style.outlineOffset = "";
        targetEl.style.textDecoration = "";
        targetEl.style.transform = "";
      }
    }
    if (targetBug.eatingTarget && targetBug.eatingTarget !== targetBug.targetElement) {
      const targetEl = targetBug.eatingTarget;
      targetEl.removeAttribute('data-eating-by');
      targetEl.removeAttribute('data-targeted-by');
      if (!targetEl.hasAttribute('data-eaten')) {
        targetEl.style.color = "";
        targetEl.style.outline = "";
        targetEl.style.outlineOffset = "";
        targetEl.style.textDecoration = "";
        targetEl.style.transform = "";
      }
    }

    // Cancel hover squash timeout if pending
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }

    // Mark bug as squashed
    setDefects(prev => prev.map(b => b.id === id ? { ...b, squashed: true, scanning: false, eating: false } : b));

    // Spawn colorful debris particles matching bug color
    const newParticles = Array.from({ length: 7 }).map(() => ({
      id: Math.random().toString(36).substring(7),
      x,
      y,
      color: targetBug.color
    }));
    setParticles(prev => [...prev, ...newParticles]);

    setTimeout(() => {
      setDefects(prev => prev.filter(b => b.id !== id));
      if (!hasCrashedRef.current && !hasWonRef.current) {
        spawnDefectRef.current?.();
      }
    }, 400);

    setTimeout(() => {
      setParticles(prev => prev.filter(p => !newParticles.find(np => np.id === p.id)));
    }, 800);

    // Generate procedural QA bug log
    const urgency = targetBug.bugSeverity === "P0" 
      ? "prevented production outage!" 
      : targetBug.bugSeverity === "P1" 
        ? "prevented critical data loss." 
        : targetBug.bugSeverity === "P2" 
          ? "system stability preserved." 
          : "routine maintenance.";

    const action = ACTIONS_CATALOG[(scoreRef.current * 3) % ACTIONS_CATALOG.length];
    const fullText = `${targetBug.bugIcon} ${targetBug.bugSeverity}: ${action} ${targetBug.bugCode} [${targetBug.bugLabel}] (${urgency})`;

    const newLog: TerminalLog = {
      id: Date.now(),
      text: fullText,
      priority: `${targetBug.bugSeverity} [${targetBug.bugCategory}]`,
      icon: targetBug.bugIcon,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })
    };
    setTerminalLogs(prev => [newLog, ...prev.slice(0, 3)]); // Keep last 4 logs
  }, [combo, isFrozen, playResolveAudio]);

  const handlePointerEnter = useCallback((bugId: string) => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setDefects(prev => prev.map(b => b.id === bugId ? { ...b, scanning: true } : b));

    // Target hover squash (100ms)
    hoverTimeoutRef.current = setTimeout(() => {
      const bug = defectsRef.current.find(b => b.id === bugId);
      if (bug && !bug.squashed) {
        squashDefect(bugId, bug.x, bug.y);
      }
    }, 100);
  }, [squashDefect]);

  const handlePointerLeave = useCallback((bugId: string) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    setDefects(prev => prev.map(b => b.id === bugId ? { ...b, scanning: false } : b));
  }, []);

  // Universal leaf content selector covering text, headings, badges, lists, code, buttons across all sections
  const LEAF_SELECTOR = [
    'p:not([data-eaten])',
    'h1:not([data-eaten])',
    'h2:not([data-eaten])',
    'h3:not([data-eaten])',
    'h4:not([data-eaten])',
    'h5:not([data-eaten])',
    'h6:not([data-eaten])',
    'li:not([data-eaten])',
    'button:not([data-eaten]):not([data-game-ui]):not(.press)',
    'a:not([data-eaten]):not([data-game-ui]):not(.press)',
    'code:not([data-eaten])',
    'pre:not([data-eaten])',
    'span.font-mono:not([data-eaten])',
    'span[data-badge]:not([data-eaten])'
  ].join(', ');

  // Helper: Acquire a DISTINCT, non-overlapping target element across different sections of the page
  const acquireNewTarget = useCallback((bugId: string, currentX: number, currentY: number): { el: HTMLElement; tx: number; ty: number } | null => {
    if (typeof document === "undefined") return null;

    const allCandidates = Array.from(document.querySelectorAll<HTMLElement>(LEAF_SELECTOR));
    
    // Filter available candidates
    const available = allCandidates.filter(el => {
      if (el.closest('[data-game-ui="true"], [role="dialog"], [aria-modal="true"], aside, .press, .site-cursor') || el.closest('.z-\\[60\\]')) return false;
      if (el.id === '__next' || el.id === 'root') return false;
      if (el.hasAttribute('data-eaten') || el.closest('[data-eaten="true"]')) return false;
      
      const targetedBy = el.getAttribute('data-targeted-by');
      if (targetedBy && targetedBy !== bugId) return false;
      if (el.hasAttribute('data-eating-by') && el.getAttribute('data-eating-by') !== bugId) return false;

      const rect = el.getBoundingClientRect();
      if (rect.width < 12 || rect.height < 10) return false;
      if (rect.top > window.innerHeight - 20 || rect.bottom < 20) return false;
      if (rect.left > window.innerWidth - 20 || rect.right < 20) return false;
      if (!Boolean(el.textContent?.trim())) return false;

      return true;
    });

    if (available.length === 0) return null;

    // Get positions of other bugs' targets to enforce cross-page spreading
    const otherTargetCoords: { x: number; y: number }[] = [];
    defectsRef.current.forEach(other => {
      if (other.id !== bugId && !other.squashed && other.targetX !== undefined && other.targetY !== undefined) {
        otherTargetCoords.push({ x: other.targetX, y: other.targetY });
      }
    });

    let bestEl: HTMLElement | null = null;
    let bestScore = -Infinity;
    let bestCoords = { tx: 0, ty: 0 };

    // Randomize sample order for organic section spread
    const shuffled = [...available].sort(() => Math.random() - 0.5);

    for (const el of shuffled) {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const distToBug = Math.hypot(cx - currentX, cy - currentY);

      let minDistanceToOther = Infinity;
      for (const ot of otherTargetCoords) {
        const d = Math.hypot(cx - ot.x, cy - ot.y);
        if (d < minDistanceToOther) minDistanceToOther = d;
      }

      // Strong anti-clumping spread bonus (up to 280px)
      const spreadBonus = Math.min(minDistanceToOther, 280);
      const totalScore = spreadBonus * 1.8 - distToBug * 0.3;

      if (totalScore > bestScore) {
        bestScore = totalScore;
        bestEl = el;
        bestCoords = { tx: cx, ty: cy };
      }
    }

    if (bestEl) {
      bestEl.setAttribute('data-targeted-by', bugId);
      return { el: bestEl, tx: bestCoords.tx, ty: bestCoords.ty };
    }

    return null;
  }, []);

  // Spawn Defect from Perimeter Edges (Always Low & Green on spawn)
  const spawnDefect = useCallback(() => {
    if (defectsRef.current.length >= 5) return; // balanced defect concurrency
    if (hasCrashedRef.current || hasWonRef.current) return;
    
    // Spawn at perimeter borders outside visible area and crawl inwards
    const edge = Math.floor(Math.random() * 4);
    let x = 0;
    let y = 0;
    if (edge === 0) { // top edge
      x = 80 + Math.random() * (window.innerWidth - 160);
      y = -26;
    } else if (edge === 1) { // right edge
      x = window.innerWidth + 26;
      y = 80 + Math.random() * (window.innerHeight - 160);
    } else if (edge === 2) { // bottom edge
      x = 80 + Math.random() * (window.innerWidth - 160);
      y = window.innerHeight + 26;
    } else { // left edge
      x = -26;
      y = 80 + Math.random() * (window.innerHeight - 160);
    }

    // Choose template from technical bug catalog
    const template = UI_BUG_TYPES[Math.floor(Math.random() * UI_BUG_TYPES.length)];
    // Always start at Low priority & green (User rule: first a bug will spawn with low and green)
    const initialCfg = BUG_PRIORITY_CONFIG.low;
    const waveMultiplier = 1 + (waveRef.current - 1) * 0.15;
    const baseSpeed = (1.15 + Math.random() * 0.25) * waveMultiplier;
    const baseSize = initialCfg.size;
    const bugId = Math.random().toString(36).substring(7);

    // Initial roaming waypoint across the page
    const roamTargetX = 60 + Math.random() * (window.innerWidth - 120);
    const roamTargetY = 60 + Math.random() * (window.innerHeight - 120);
    const initialDirection = Math.atan2(roamTargetY - y, roamTargetX - x);

    const newDefect: Defect = {
      id: bugId,
      x,
      y,
      squashed: false,
      eating: false,
      targetElement: null,
      targetX: undefined,
      targetY: undefined,
      roamTargetX,
      roamTargetY,
      roamChangeTime: Date.now(),
      spawnTime: Date.now(),
      hasAlertedCritical: false,
      originalSpeed: baseSpeed,
      speed: baseSpeed * initialCfg.speedScale,
      size: baseSize,
      baseSize,
      speedScale: initialCfg.speedScale,
      color: initialCfg.color,
      isPulsing: false,
      direction: initialDirection,
      wobbleSeed: Math.random() * 1000,
      bugCode: template.code,
      bugLabel: template.label,
      bugSeverity: "P3",
      bugIcon: template.icon,
      bugCategory: template.category,
    };
    
    setDefects(prev => [...prev, newDefect]);
  }, []);

  useEffect(() => {
    spawnDefectRef.current = spawnDefect;
  }, [spawnDefect]);

  // Movement, Target Navigation & Game Physics Loop
  const updatePositions = useCallback(() => {
    if (hasCrashedRef.current || hasWonRef.current) {
      requestRef.current = requestAnimationFrame(updatePositions);
      return;
    }

    const now = Date.now();
    const activeDefectsList = defectsRef.current.filter(b => !b.squashed);

    const nextDefects: Defect[] = [];

    for (let i = 0; i < defectsRef.current.length; i++) {
      const bug = defectsRef.current[i];
      if (bug.squashed) {
        nextDefects.push(bug);
        continue;
      }

      // If the critical bug is currently in its dying animation
      if (bug.isDying) {
        if (now - (bug.dieStartTime || 0) > 480) {
          // Finished dying disintegration animation — fully removed from active game
          continue;
        }
        nextDefects.push(bug);
        continue;
      }
      
      const age = now - bug.spawnTime;
      
      // Choreographed priority simulation:
      // Phase 1: Color changes FIRST (COLOR_PHASE_MS = 650ms) while size remains locked at previous tier.
      // Phase 2: Size contracts NEXT (SIZE_PHASE_MS = 800ms) with smooth easeOutCubic curve, accelerating speed.
      const sim = getSimulatedBugState(age);
      const tier: BugPriorityTier = bug.eating ? "critical" : sim.tier;
      const targetColor = bug.eating ? "#ef4444" : sim.color;
      const targetSize = bug.eating ? BUG_PRIORITY_CONFIG.critical.size : sim.size;
      const targetSpeedScale = bug.eating ? 0 : sim.speedScale;
      const isPulsing = bug.eating ? true : sim.isPulsing;
      const severity: "P0" | "P1" | "P2" | "P3" = 
        bug.eating ? "P0" : sim.severity;

      // If just transitioned to critical, play warning alert audio once
      let hasAlerted = bug.hasAlertedCritical;
      if (tier === "critical" && !hasAlerted) {
        hasAlerted = true;
        playAlertAudio();
      }

      const activeSpeed = isFrozen ? 0 : bug.originalSpeed * targetSpeedScale;

      // --- ATTACK / CORRUPTION LOGIC ---
      if (bug.eating) {
        if (now - (bug.eatStartTime || 0) > 1600) {
          // Finished eating target element!
          if (bug.eatingTarget && !bug.eatingTarget.hasAttribute('data-eaten')) {
            const el = bug.eatingTarget;
            el.removeAttribute('data-eating-by');
            el.removeAttribute('data-targeted-by');
            el.setAttribute('data-eaten', 'true');
            el.style.transition = "opacity 0.65s cubic-bezier(0.16, 1, 0.3, 1), filter 0.65s ease, transform 0.65s ease, color 0.4s ease, outline 0.4s ease";
            el.style.opacity = "0.12";
            el.style.pointerEvents = "none";
            el.style.filter = "blur(1.2px) grayscale(0.8) contrast(1.1)";
            el.style.color = "#ef4444";
            el.style.outline = "1.5px dashed rgba(239, 68, 68, 0.4)";
            el.style.outlineOffset = "2px";
            el.style.textDecoration = "line-through 2px #ef4444";
            el.style.transform = "scale(0.97)";

            // Parent container tremor
            const parentSection = el.closest('section, article, [data-section], [id^="section"], .card, div.border, main, header, footer');
            if (parentSection instanceof HTMLElement) {
              parentSection.style.animation = "sectionGlitchCrash 0.55s cubic-bezier(0.36, 0.07, 0.19, 0.97)";
              setTimeout(() => {
                if (parentSection instanceof HTMLElement) parentSection.style.animation = "";
              }, 600);
            }
          }

          playCrashAudio();

          // Spawn death debris particles at bug position (the critical bug dies!)
          const crashParticles = Array.from({ length: 10 }).map(() => ({
            id: Math.random().toString(36).substring(7),
            x: bug.x,
            y: bug.y,
            color: "#ef4444"
          }));
          setParticles(prev => [...prev, ...crashParticles]);
          setTimeout(() => {
            setParticles(prev => prev.filter(p => !crashParticles.find(cp => cp.id === p.id)));
          }, 800);

          // Update integrity
          const corruptedCount = document.querySelectorAll('[data-eaten="true"]').length;
          setEatenCount(corruptedCount);
          const integrityLeft = Math.max(0, Math.round(100 - corruptedCount * 5));
          setSystemIntegrity(integrityLeft);

          if (integrityLeft <= 0) {
            setHasCrashed(true);
            hasCrashedRef.current = true;
            return;
          }

          const newLog: TerminalLog = {
            id: Date.now(),
            text: `💥 Defect ${bug.bugCode} breached content. Critical bug destroyed & reproduced Low priority defect. Integrity at ${integrityLeft}%.`,
            priority: "P0 [BREACH]",
            icon: "💥",
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })
          };
          setTerminalLogs(prev => [newLog, ...prev.slice(0, 2)]);

          // 1. CRITICAL BUG DIES WITH VISIBLE OVERLOAD & SHOCKWAVE ANIMATION
          nextDefects.push({
            ...bug,
            isDying: true,
            dieStartTime: now,
            eating: false,
            eatingTarget: null,
            targetElement: null,
            targetX: undefined,
            targetY: undefined,
            speed: 0,
            speedScale: 0,
          });

          // 2. AT THE SAME TIME: REPRODUCES A LOW-PRIORITY GREEN BUG RIGHT THERE WITH EMERGENCE ANIMATION!
          playBirthAudio();
          const birthParticles = Array.from({ length: 8 }).map(() => ({
            id: Math.random().toString(36).substring(7),
            x: bug.x,
            y: bug.y,
            color: "#10b981"
          }));
          setParticles(prev => [...prev, ...birthParticles]);
          setTimeout(() => {
            setParticles(prev => prev.filter(p => !birthParticles.find(bp => bp.id === p.id)));
          }, 800);

          const angle = Math.random() * Math.PI * 2;
          const spawnX = Math.max(40, Math.min(window.innerWidth - 40, bug.x + Math.cos(angle) * 24));
          const spawnY = Math.max(40, Math.min(window.innerHeight - 40, bug.y + Math.sin(angle) * 24));

          const template = UI_BUG_TYPES[Math.floor(Math.random() * UI_BUG_TYPES.length)];
          const lowCfg = BUG_PRIORITY_CONFIG.low;
          const waveMultiplier = 1 + (waveRef.current - 1) * 0.15;
          const baseSpeed = (1.15 + Math.random() * 0.25) * waveMultiplier;
          const newRoamX = 60 + Math.random() * (window.innerWidth - 120);
          const newRoamY = 60 + Math.random() * (window.innerHeight - 120);

          nextDefects.push({
            id: Math.random().toString(36).substring(7),
            x: spawnX,
            y: spawnY,
            squashed: false,
            eating: false,
            isDying: false,
            isBorn: true,
            birthStartTime: now,
            targetElement: null,
            targetX: undefined,
            targetY: undefined,
            roamTargetX: newRoamX,
            roamTargetY: newRoamY,
            roamChangeTime: now,
            spawnTime: now,
            hasAlertedCritical: false,
            originalSpeed: baseSpeed,
            speed: baseSpeed * lowCfg.speedScale,
            size: lowCfg.size,
            baseSize: lowCfg.size,
            speedScale: lowCfg.speedScale,
            color: lowCfg.color,
            isPulsing: false,
            direction: Math.atan2(newRoamY - spawnY, newRoamX - spawnX),
            wobbleSeed: Math.random() * 1000,
            bugCode: template.code,
            bugLabel: template.label,
            bugSeverity: "P3",
            bugIcon: template.icon,
            bugCategory: template.category,
          });

          continue;
        }

        nextDefects.push({ 
          ...bug, 
          color: targetColor, 
          isPulsing: true, 
          size: targetSize, 
          speedScale: 0,
          bugSeverity: "P0",
        });
        continue;
      }

      // --- TARGET RESOLUTION & ROAMING ---
      let targetEl = bug.targetElement;
      let targetX = bug.targetX;
      let targetY = bug.targetY;
      let roamTargetX = bug.roamTargetX ?? (window.innerWidth / 2);
      let roamTargetY = bug.roamTargetY ?? (window.innerHeight / 2);
      let roamChangeTime = bug.roamChangeTime ?? now;

      const isCritical = tier === "critical";
      const criticalAge = age - STAGE_DURATION_MS * 3;
      // "when its crital after few seconds it will attack a target"
      const shouldAttackTarget = isCritical && criticalAge >= CRITICAL_ATTACK_DELAY_MS;

      if (shouldAttackTarget) {
        // Critical attack mode: acquire and lock onto a distinct leaf target element
        if (!targetEl || !targetEl.isConnected || targetEl.hasAttribute('data-eaten')) {
          const fresh = acquireNewTarget(bug.id, bug.x, bug.y);
          if (fresh) {
            targetEl = fresh.el;
            targetX = fresh.tx;
            targetY = fresh.ty;
          } else {
            targetEl = null;
            targetX = undefined;
            targetY = undefined;
          }
        } else {
          // Track live element coordinates in case of scroll or dynamic layout
          const rect = targetEl.getBoundingClientRect();
          targetX = rect.left + rect.width / 2;
          targetY = rect.top + rect.height / 2;
        }
      } else {
        // Scouting / Patrol mode (Low, Med, High, or early Critical priming):
        // Does NOT attack elements. Release any target if previously held.
        if (targetEl) {
          targetEl.removeAttribute('data-targeted-by');
          targetEl = null;
          targetX = undefined;
          targetY = undefined;
        }

        // Periodic roam waypoint selection (every 3.5 - 4.5 seconds or when arrived)
        const distToRoam = Math.hypot(roamTargetX - bug.x, roamTargetY - bug.y);
        if (distToRoam < 50 || now - roamChangeTime > 4200) {
          roamTargetX = 60 + Math.random() * (window.innerWidth - 120);
          roamTargetY = 60 + Math.random() * (window.innerHeight - 120);
          roamChangeTime = now;
        }
      }

      // Distance to locked target (only if in attack mode)
      const distToTarget = (shouldAttackTarget && targetX !== undefined && targetY !== undefined)
        ? Math.hypot(targetX - bug.x, targetY - bug.y)
        : Infinity;

      // Arrived at target: initiate corruption attack!
      if (!bug.eating && distToTarget < 22 && targetEl && !isFrozen && shouldAttackTarget) {
        targetEl.setAttribute('data-eating-by', bug.id);
        targetEl.style.transition = 'color 0.2s ease, text-decoration 0.2s ease, outline 0.2s ease, transform 0.2s ease';
        targetEl.style.color = '#ef4444';
        targetEl.style.outline = '1.5px dashed #ef4444';
        targetEl.style.outlineOffset = '2px';
        targetEl.style.textDecoration = 'line-through 2px #ef4444';
        targetEl.style.transform = 'scale(0.98)';

        playGlitchAudio();

        nextDefects.push({
          ...bug,
          eating: true,
          eatingTarget: targetEl,
          eatStartTime: now,
          speed: 0,
          speedScale: 0,
          color: "#ef4444",
          isPulsing: true,
          size: targetSize,
          bugSeverity: "P0",
        });
        continue;
      }

      // --- DIRECTION & STEERING ---
      let nextDirection = bug.direction;
      let nextSpeed = activeSpeed;

      const steerDestX = (shouldAttackTarget && targetX !== undefined) ? targetX : roamTargetX;
      const steerDestY = (shouldAttackTarget && targetY !== undefined) ? targetY : roamTargetY;

      if (!isFrozen) {
        const angleToDest = Math.atan2(steerDestY - bug.y, steerDestX - bug.x);
        let diff = angleToDest - nextDirection;
        while (diff > Math.PI) diff -= Math.PI * 2;
        while (diff < -Math.PI) diff += Math.PI * 2;
        // Aggressive turn when attacking; smooth wander turn when roaming
        const steerRate = shouldAttackTarget ? 0.16 : 0.055;
        nextDirection += diff * steerRate;
      }

      // --- ANTI-STACKING FLOCKING REPULSION FORCE ---
      let repelX = 0;
      let repelY = 0;
      for (let j = 0; j < activeDefectsList.length; j++) {
        const other = activeDefectsList[j];
        if (other.id === bug.id || other.squashed || other.isDying) continue;
        const dx = bug.x - other.x;
        const dy = bug.y - other.y;
        const dist = Math.hypot(dx, dy);
        if (dist > 0 && dist < 58) {
          const force = (58 - dist) / 58;
          repelX += (dx / dist) * force * 2.5;
          repelY += (dy / dist) * force * 2.5;
        }
      }

      // Smooth floating stride oscillation
      const scuttleStride = isFrozen ? 0 : nextSpeed * (1 + 0.15 * Math.sin(now * 0.02 + bug.wobbleSeed));
      let newX = bug.x + Math.cos(nextDirection) * scuttleStride + repelX;
      let newY = bug.y + Math.sin(nextDirection) * scuttleStride + repelY;

      // Bounce off screen boundaries
      const halfW = 28;
      const halfH = 28;
      if (newX < halfW || newX > window.innerWidth - halfW) {
        nextDirection = Math.PI - nextDirection;
        newX = Math.max(halfW, Math.min(newX, window.innerWidth - halfW));
      }
      if (newY < halfH || newY > window.innerHeight - halfH) {
        nextDirection = -nextDirection;
        newY = Math.max(halfH, Math.min(newY, window.innerHeight - halfH));
      }

      nextDefects.push({ 
        ...bug, 
        x: newX, 
        y: newY, 
        direction: nextDirection, 
        targetElement: targetEl,
        targetX,
        targetY,
        roamTargetX,
        roamTargetY,
        roamChangeTime,
        hasAlertedCritical: hasAlerted,
        size: targetSize, 
        speed: nextSpeed, 
        speedScale: targetSpeedScale,
        color: targetColor, 
        isPulsing,
        bugSeverity: severity,
      });
    }

    setDefects(nextDefects);
    requestRef.current = requestAnimationFrame(updatePositions);
  }, [isFrozen, acquireNewTarget, playGlitchAudio, playCrashAudio, playAlertAudio, playBirthAudio]);

  // Main game lifecycle
  useEffect(() => {
    if (isOpen) {
      document.documentElement.dataset.game = "on";
      
      // Spawn initial defect immediately as Low & Green
      spawnDefect();

      let timeoutId: NodeJS.Timeout;
      const scheduleNext = () => {
        timeoutId = setTimeout(() => {
          if (!hasCrashedRef.current && !hasWonRef.current) {
            if (defectsRef.current.length < 4) {
              spawnDefect();
            }
          }
          scheduleNext();
        }, 2200 + Math.random() * 800);
      };
      scheduleNext();

      requestRef.current = requestAnimationFrame(updatePositions);

      return () => {
        clearTimeout(timeoutId);
        if (requestRef.current) cancelAnimationFrame(requestRef.current);
        delete document.documentElement.dataset.game;
      };
    } else {
      setDefects([]);
      setScore(0);
      setCombo(0);
      setBreakpoints(1);
      setIsFrozen(false);
      setTerminalLogs([]);

      setHasCrashed(false);

      if (requestRef.current) cancelAnimationFrame(requestRef.current);
      if (comboTimerRef.current) clearTimeout(comboTimerRef.current);
      if (freezeTimerRef.current) clearTimeout(freezeTimerRef.current);
      delete document.documentElement.dataset.game;
      
      restoreAllEatenElements();
    }
  }, [isOpen, spawnDefect, updatePositions, restoreAllEatenElements]);

  // Route transition synchronization: re-link bugs and active section content on navigation
  useEffect(() => {
    if (!isOpen) return;

    // Clear any detached targets from previous route
    setDefects(prev => prev.map(bug => {
      if (bug.eatingTarget && !bug.eatingTarget.isConnected) {
        return { ...bug, eating: false, eatingTarget: null, speed: bug.originalSpeed };
      }
      return bug;
    }));

    // Re-evaluate integrity and eaten count on the active route
    const corruptedCount = document.querySelectorAll('[data-eaten="true"]').length;
    setEatenCount(corruptedCount);
    const integrityLeft = Math.max(0, Math.round(100 - corruptedCount * 3.5));
    setSystemIntegrity(integrityLeft);

    const remainingOnPage = document.querySelectorAll(
      'main p:not([data-eaten]), main h1:not([data-eaten]), main h2:not([data-eaten]), main h3:not([data-eaten]), main li:not([data-eaten])'
    );
    if (corruptedCount > 0 && remainingOnPage.length === 0) {
      setHasCrashed(true);
    } else {
      setHasCrashed(false);
    }
  }, [pathname, isOpen]);

  // Viewport resize guard: clamp defects within responsive boundaries
  useEffect(() => {
    if (!isOpen) return;
    const handleResize = () => {
      const maxX = window.innerWidth - 30;
      const maxY = window.innerHeight - 30;
      setDefects(prev => prev.map(b => ({
        ...b,
        x: Math.min(Math.max(10, b.x), maxX),
        y: Math.min(Math.max(10, b.y), maxY)
      })));
    };
    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);

  // Current QA title rank
  const currentRank = QA_TITLES.reduce((acc, curr) => score >= curr.minScore ? curr : acc, QA_TITLES[0]);

  return (
    <>
      {/* Mini-game launch button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="press fixed left-5 bottom-5 z-[60] inline-flex h-12 w-12 items-center justify-center border border-pass bg-paper text-pass shadow-[4px_4px_0_var(--ink)] hover:bg-pass-fill hover:text-on-band transition-transform active:translate-x-[2px] active:translate-y-[2px]"
        aria-label={isOpen ? "Close QA Defect Hunter Game" : "Play QA Defect Hunter Game"}
        title="QA Mini-game"
        data-cursor={isOpen ? "Exit Defect Hunter" : "Play QA Defect Hunter mini-game"}
      >
        {isOpen ? <X size={20} strokeWidth={1.75} /> : <Gamepad2 size={20} strokeWidth={1.75} />}
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 pointer-events-none overflow-hidden selection:bg-transparent" data-game-ui="true">
          
          {/* QA Defect Hunter Stat HUD - Optimized, minimal, with Quota, Wave, Health Bar & Settings Button */}
          <aside 
            aria-label="QA Game Stats"
            className="fixed z-[60] flex flex-col gap-1 bg-paper/95 backdrop-blur-md px-2.5 py-1.5 rounded-xl border border-pass text-ink shadow-[2.5px_2.5px_0_var(--ink)] font-mono select-none pointer-events-auto animate-fade-in w-[150px] sm:w-[158px] top-3 left-3 sm:top-3.5 sm:left-4"
          >
            {/* Top Row: Bug Detector Count / Quota + Wave Badge + Setting Button */}
            <div className="flex items-center justify-between gap-1 pb-0.5">
              <div className="flex items-baseline gap-1" title="Defects neutralized / Quota">
                <Bug size={11} className="text-pass shrink-0 self-center" />
                <span className="text-xs font-black text-pass leading-none">
                  {score}/{10 + (wave - 1) * 5}
                </span>
                {combo > 1 && (
                  <span className="text-[7.5px] font-bold text-amber-500 animate-pulse leading-none">
                    x{combo}
                  </span>
                )}
              </div>

              <div className="flex items-center gap-1">
                <span className="text-[8px] font-mono font-bold text-muted uppercase tracking-wider bg-card px-1 py-0.5 rounded border border-line">
                  W{wave}
                </span>
                {/* Setting Button */}
                <button
                  type="button"
                  onClick={() => setIsSettingsOpen(prev => !prev)}
                  className={`p-0.5 rounded border transition-colors ${
                    isSettingsOpen 
                      ? "bg-pass/15 border-pass text-pass" 
                      : "border-line text-muted hover:text-ink hover:border-pass"
                  }`}
                  title={isSettingsOpen ? "Close Settings" : "Game Settings (Freeze, Sound, Reset)"}
                  aria-label="Game Settings"
                  data-cursor="Toggle game settings"
                >
                  <Settings size={9} className={`transition-transform duration-200 ${isSettingsOpen ? "rotate-45 text-pass" : ""}`} />
                </button>
              </div>
            </div>

            {/* Health Bar + Percentage */}
            <div className="flex items-center gap-1.5 pt-0.5 border-t border-line">
              <div className="flex-1 h-1 bg-line rounded-full overflow-hidden">
                <div 
                  className={`h-full transition-all duration-300 rounded-full ${
                    systemIntegrity < 30 ? "bg-red-500" : systemIntegrity < 65 ? "bg-amber-500" : "bg-pass"
                  }`} 
                  style={{ width: `${systemIntegrity}%` }} 
                />
              </div>
              <div className="flex items-center gap-0.5 shrink-0">
                <AlertTriangle size={7} className={systemIntegrity < 40 ? "text-red-500 animate-pulse shrink-0" : "text-pass shrink-0"} />
                <span 
                  className={`text-[9px] font-extrabold leading-none ${
                    systemIntegrity < 30 ? "text-red-500 animate-pulse" : systemIntegrity < 65 ? "text-amber-500" : "text-pass"
                  }`}
                >
                  {systemIntegrity}%
                </span>
              </div>
            </div>

            {/* Collapsible Settings Drawer */}
            {isSettingsOpen && (
              <div className="flex items-center justify-between gap-1 pt-1 mt-0.5 border-t border-line animate-fade-in">
                {/* Breakpoint Powerup */}
                <button
                  type="button"
                  onClick={triggerBreakpoint}
                  disabled={breakpoints <= 0 || isFrozen}
                  title="Debugger Breakpoint (Spacebar)"
                  aria-label="Freeze Bugs"
                  data-cursor="Debugger breakpoint: freeze defects (Spacebar)"
                  className={`flex items-center gap-0.5 px-1 py-0.5 rounded font-bold transition-all text-[8px] ${
                    isFrozen 
                      ? "bg-blue-600 text-white animate-pulse" 
                      : breakpoints > 0 
                        ? "bg-blue-500/15 text-blue-600 border border-blue-500/30 hover:bg-blue-500/25 active:scale-95" 
                        : "opacity-40 cursor-not-allowed border border-line text-muted"
                  }`}
                >
                  {isFrozen ? <Pause size={7} /> : <Play size={7} className="fill-current" />}
                  <span>{breakpoints}</span>
                </button>

                {/* Audio toggle */}
                <button
                  type="button"
                  onClick={() => setIsMuted(!isMuted)}
                  className="text-muted hover:text-ink hover:border-pass transition-colors p-0.5 rounded border border-line"
                  title={isMuted ? "Unmute Sound" : "Mute Sound"}
                  aria-label={isMuted ? "Unmute Sound" : "Mute Sound"}
                  data-cursor={isMuted ? "Unmute game audio effects" : "Mute game audio effects"}
                >
                  {isMuted ? <VolumeX size={8} /> : <Volume2 size={8} />}
                </button>

                {/* Reset */}
                <button
                  type="button"
                  onClick={() => {
                    restoreAllEatenElements();
                    setDefects([]);
                    setScore(0);
                    scoreRef.current = 0;
                    setCombo(0);
                    setMaxCombo(0);
                    setBreakpoints(1);
                    setIsFrozen(false);
                    setHasCrashed(false);
                    hasCrashedRef.current = false;
                    setHasWon(false);
                    hasWonRef.current = false;
                    setWave(1);
                    waveRef.current = 1;
                    setSystemIntegrity(100);
                    spawnDefect();
                  }}
                  className="text-muted hover:text-amber-500 hover:border-amber-500 transition-colors p-0.5 rounded border border-line"
                  title="Reboot Environment"
                  aria-label="Reboot Environment"
                  data-cursor="Reboot test environment & restore elements"
                >
                  <RefreshCw size={8} />
                </button>

                {/* Exit Game */}
                <button
                  type="button"
                  onClick={() => {
                    restoreAllEatenElements();
                    setIsOpen(false);
                  }}
                  className="text-muted hover:text-red-500 hover:border-red-500 transition-colors p-0.5 rounded border border-line"
                  title="Exit Game"
                  aria-label="Exit Game"
                  data-cursor="Exit defect hunter"
                >
                  <X size={8} />
                </button>
              </div>
            )}
          </aside>

          {/* Frozen Debugger Overlay Banner */}
          {isFrozen && (
            <div className="fixed top-20 left-1/2 -translate-x-1/2 z-[55] pointer-events-none px-4 py-1.5 rounded-full bg-blue-950/90 text-blue-300 border border-blue-400 font-mono text-xs sm:text-sm font-bold shadow-lg animate-pulse flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-400 animate-ping" />
              <span>[DEBUGGER ATTACHED: EXECUTION PAUSED — 2X POINTS]</span>
            </div>
          )}

          {/* Bug Entities Game Area */}
          <div className="absolute inset-0">
            {defects.map(bug => {
              const headingDeg = (bug.direction * 180) / Math.PI + 90;
              const wobbleDeg = bug.eating 
                ? Math.sin(Date.now() / 35) * 3 
                : Math.sin((Date.now() + bug.wobbleSeed) / 200) * 4;
              const totalRotate = headingDeg + wobbleDeg;

              const isDying = Boolean(bug.isDying);
              const isBorn = Boolean(bug.isBorn && (Date.now() - (bug.birthStartTime || 0) < 750));

              return (
                <button
                  key={bug.id}
                  data-squashed={bug.squashed ? "true" : undefined}
                  data-dying={isDying ? "true" : undefined}
                  data-born={isBorn ? "true" : undefined}
                  data-cursor={isDying ? undefined : `Squash defect ${bug.bugCode}: ${bug.bugLabel}`}
                  onClick={() => !isDying && squashDefect(bug.id, bug.x, bug.y)}
                  onPointerEnter={() => !isDying && handlePointerEnter(bug.id)}
                  onPointerLeave={() => !isDying && handlePointerLeave(bug.id)}
                  className={`absolute flex items-center justify-center group border-none bg-transparent outline-none ring-0 focus:outline-none focus:ring-0 select-none ${
                    bug.squashed || isDying ? "pointer-events-none" : "pointer-events-auto"
                  }`}
                  style={{
                    left: bug.x,
                    top: bug.y,
                    width: `${bug.size}px`,
                    height: `${bug.size}px`,
                    minWidth: "32px",
                    minHeight: "32px",
                    transform: `translate(-50%, -50%) ${
                      bug.squashed ? "scale(1.45, 0.22)" : ""
                    }`,
                    animation: isDying 
                      ? "criticalBugDie 0.48s cubic-bezier(0.2, 0.8, 0.2, 1) forwards" 
                      : isBorn 
                        ? "bugBirthEmerge 0.65s cubic-bezier(0.16, 1, 0.3, 1) forwards" 
                        : undefined,
                    transition: bug.squashed 
                      ? "transform 320ms cubic-bezier(0.1, 0.9, 0.2, 1), opacity 320ms ease" 
                      : "opacity 150ms ease",
                    opacity: bug.squashed ? 0 : 1,
                    cursor: isDying ? "default" : "crosshair",
                    pointerEvents: bug.squashed || isDying ? "none" : "auto",
                  }}
                  aria-label={bug.squashed || isDying ? undefined : `Squash defect ${bug.bugCode} ${bug.bugLabel}`}
                  aria-hidden={bug.squashed || isDying ? "true" : undefined}
                  disabled={bug.squashed || isDying}
                >
                  {/* Glowing Green Reproduction Ripple Ring for Newborn Bug */}
                  {isBorn && (
                    <div 
                      className="absolute inset-[-6px] rounded-full border border-emerald-400 pointer-events-none"
                      style={{
                        animation: "birthRipple 0.65s ease-out forwards",
                        boxShadow: "0 0 14px rgba(16, 185, 129, 0.8)",
                      }}
                    />
                  )}

                  {/* Expanding Red Death Shockwave for Dying Critical Bug */}
                  {isDying && (
                    <div 
                      className="absolute inset-[-8px] rounded-full border border-red-500 pointer-events-none"
                      style={{
                        animation: "deathShockwave 0.48s ease-out forwards",
                        boxShadow: "0 0 18px rgba(239, 68, 68, 0.9)",
                      }}
                    />
                  )}

                  {/* Rotated Bug Model Body */}
                  <div 
                    className="relative flex items-center justify-center"
                    style={{
                      transform: `rotate(${totalRotate}deg)`,
                      transformOrigin: "center",
                    }}
                  >
                    <PcbCircuitBug
                      size={bug.size}
                      color={bug.color}
                      speedScale={bug.speedScale || 1}
                      isEating={bug.eating}
                      isPulsing={bug.isPulsing || isDying}
                      isFrozen={isFrozen}
                    />

                    {/* Active Corrupting Laser Emitter when Eating */}
                    {bug.eating && !bug.squashed && !isDying && (
                      <div 
                        className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full w-0.5 pointer-events-none"
                        style={{
                          height: "22px",
                          background: "linear-gradient(to top, rgba(239, 68, 68, 0.95), transparent)",
                          boxShadow: "0 0 8px #ef4444",
                          animation: "laserPulse 0.15s infinite alternate",
                        }}
                      />
                    )}
                  </div>
                </button>
              );
            })}



            {/* Explosive Splat Particles */}
            {particles.map((p, i) => {
              const tx = (Math.random() - 0.5) * 160;
              const ty = (Math.random() - 0.5) * 160;
              return (
                <div
                  key={`${p.id}-${i}`}
                  className="absolute h-2.5 w-2.5 rounded-full pointer-events-none"
                  style={{
                    left: p.x + 16,
                    top: p.y + 16,
                    backgroundColor: p.color || "#fde047",
                    boxShadow: `0 0 10px ${p.color || "#fde047"}`,
                    animation: `explode 0.75s cubic-bezier(0.1, 0.8, 0.3, 1) forwards`,
                    animationDelay: `${(i % 5) * 0.02}s`,
                    transformOrigin: "center",
                    "--tx": `${tx}px`,
                    "--ty": `${ty}px`,
                  } as React.CSSProperties}
                />
              );
            })}
          </div>

          {/* Real-time Non-overlapping CI/CD Resolution Toast */}
          {terminalLogs[0] && !hasCrashed && (
            <aside 
              key={terminalLogs[0].id}
              aria-label="CI/CD Pipeline Log"
              className="fixed bottom-6 right-6 z-[60] pointer-events-none flex items-center gap-2.5 bg-ink/95 text-paper px-4 py-2.5 rounded-xl border border-pass shadow-[4px_4px_0_var(--pass)] font-mono text-xs animate-fade-in backdrop-blur-md max-w-sm sm:max-w-md"
            >
              <span className="text-sm shrink-0 select-none">{terminalLogs[0].icon}</span>
              <div className="truncate">
                <span className="font-bold text-pass mr-1.5">{terminalLogs[0].priority}:</span>
                <span className="text-paper/90 text-[11px]">{terminalLogs[0].text.split(': ')[1] || terminalLogs[0].text}</span>
              </div>
            </aside>
          )}

          {/* Fatal System Crash / Post-Mortem Incident Screen - Fully on-theme */}
          {hasCrashed && (
            <div 
              role="dialog"
              aria-modal="true"
              aria-labelledby="crash-title"
              className="fixed inset-0 z-[100] bg-ink/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 font-mono pointer-events-auto animate-fade-in overflow-y-auto"
            >
              <div className="relative max-w-lg w-full bg-paper border-2 border-pass text-ink rounded-2xl p-6 sm:p-8 shadow-[6px_6px_0_var(--ink)] overflow-hidden font-mono">
                {/* Header Badge */}
                <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-line">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-red-500/10 border border-red-500/30 text-red-600 dark:text-red-400 text-[10.5px] font-bold font-mono tracking-wider whitespace-nowrap">
                    <span className="w-2 h-2 rounded-full bg-red-600 dark:bg-red-400 animate-pulse shrink-0" />
                    <span>SEV-1 · SYSTEM OUTAGE</span>
                  </div>
                  <span className="text-[11px] text-muted font-mono tracking-wider uppercase font-semibold">
                    SUITE HALTED
                  </span>
                </div>

                {/* Title & Description */}
                <h2 id="crash-title" className="font-serif text-2xl sm:text-3xl text-ink tracking-tight font-bold mb-2 leading-tight">
                  Pipeline Assertion Failure
                </h2>
                <p className="text-ink-soft text-xs sm:text-sm leading-relaxed mb-6 font-sans">
                  Critical defects breached automated test guardrails and depleted page integrity. Execution was halted to prevent cascading layout collapse.
                </p>

                {/* Post-Mortem 4-Box Metrics Grid */}
                <div className="grid grid-cols-2 gap-2.5 mb-6">
                  {/* Metric 1: Bugs Intercepted */}
                  <div className="bg-card border border-line rounded-xl p-3 shadow-[2px_2px_0_var(--line)]">
                    <span className="text-[10px] uppercase tracking-wider text-muted font-semibold block mb-1">
                      Intercepted
                    </span>
                    <span className="text-2xl font-black text-pass leading-none">
                      {score} <span className="text-xs font-normal text-muted">defects</span>
                    </span>
                  </div>

                  {/* Metric 2: QA Rank */}
                  <div className="bg-card border border-line rounded-xl p-3 shadow-[2px_2px_0_var(--line)]">
                    <span className="text-[10px] uppercase tracking-wider text-muted font-semibold block mb-1">
                      Hunter Rank
                    </span>
                    <div className="text-sm font-bold text-ink truncate leading-none mt-1" title={currentRank.title}>
                      <span className="mr-1">{currentRank.badge}</span>
                      <span className="text-ink-soft font-normal">{currentRank.title}</span>
                    </div>
                  </div>

                  {/* Metric 3: Peak Streak */}
                  <div className="bg-card border border-line rounded-xl p-3 shadow-[2px_2px_0_var(--line)]">
                    <span className="text-[10px] uppercase tracking-wider text-muted font-semibold block mb-1">
                      Peak Streak
                    </span>
                    <span className="text-2xl font-black text-amber-600 dark:text-amber-400 leading-none">
                      {maxCombo > 1 ? `${maxCombo}x` : "1x"}
                    </span>
                  </div>

                  {/* Metric 4: Root Cause */}
                  <div className="bg-card border border-line rounded-xl p-3 shadow-[2px_2px_0_var(--line)]">
                    <span className="text-[10px] uppercase tracking-wider text-muted font-semibold block mb-1">
                      Failure Signature
                    </span>
                    <span className="text-[11px] font-mono font-bold text-red-600 dark:text-red-400 block truncate leading-none mt-1">
                      ASSERTION_FAIL
                    </span>
                  </div>
                </div>

                {/* Hotfix Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-2.5">
                  <button
                    type="button"
                    onClick={() => {
                      restoreAllEatenElements();
                      setHasCrashed(false);
                      hasCrashedRef.current = false;
                      setHasWon(false);
                      hasWonRef.current = false;
                      setScore(0);
                      scoreRef.current = 0;
                      setCombo(0);
                      setMaxCombo(0);
                      setBreakpoints(1);
                      setSystemIntegrity(100);
                      setDefects([]);
                      spawnDefect();
                    }}
                    data-cursor="Deploy hotfix & retry regression"
                    className="press flex-1 inline-flex items-center justify-center gap-2 border border-pass bg-pass text-on-band hover:bg-pass-fill font-bold py-3 px-4 rounded-xl shadow-[3px_3px_0_var(--ink)] text-xs sm:text-sm tracking-wide transition-transform active:translate-x-[2px] active:translate-y-[2px] cursor-pointer whitespace-nowrap"
                  >
                    <RefreshCw size={14} className="shrink-0" />
                    Deploy Hotfix & Retry
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      restoreAllEatenElements();
                      setHasCrashed(false);
                      hasCrashedRef.current = false;
                      setHasWon(false);
                      hasWonRef.current = false;
                      setDefects([]);
                      setScore(0);
                      scoreRef.current = 0;
                      setCombo(0);
                      setMaxCombo(0);
                      setIsOpen(false);
                    }}
                    data-cursor="Close mini-game & restore UI"
                    className="press inline-flex items-center justify-center border border-line bg-card text-ink hover:border-ink hover:text-ink font-semibold py-3 px-5 rounded-xl shadow-[3px_3px_0_var(--ink)] text-xs sm:text-sm transition-transform active:translate-x-[2px] active:translate-y-[2px] cursor-pointer"
                  >
                    Close Game
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Quality Gate Certified / Mission Victory Incident Screen */}
          {hasWon && (
            <div 
              role="dialog"
              aria-modal="true"
              aria-labelledby="victory-title"
              className="fixed inset-0 z-[100] bg-ink/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 font-mono pointer-events-auto animate-fade-in overflow-y-auto"
            >
              <div className="relative max-w-lg w-full bg-paper border-2 border-pass text-ink rounded-2xl p-6 sm:p-8 shadow-[6px_6px_0_var(--ink)] overflow-hidden font-mono">
                {/* Header Badge */}
                <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-line">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-pass/10 border border-pass/30 text-pass text-[10.5px] font-bold font-mono tracking-wider whitespace-nowrap">
                    <ShieldCheck size={12} className="text-pass shrink-0" />
                    <span>ALL TESTS PASSED · ZERO REGRESSIONS</span>
                  </div>
                  <span className="text-[11px] text-muted font-mono tracking-wider uppercase font-semibold">
                    WAVE {wave} CLEAR
                  </span>
                </div>

                {/* Title & Description */}
                <h2 id="victory-title" className="font-serif text-2xl sm:text-3xl text-ink tracking-tight font-bold mb-2 leading-tight">
                  Quality Gate Certified
                </h2>
                <p className="text-ink-soft text-xs sm:text-sm leading-relaxed mb-6 font-sans">
                  All critical defects intercepted before customer impact. System integrity preserved at {systemIntegrity}%. Build promoted to Production.
                </p>

                {/* 4-Box Metrics Grid */}
                <div className="grid grid-cols-2 gap-2.5 mb-6">
                  {/* Metric 1: Bugs Intercepted */}
                  <div className="bg-card border border-line rounded-xl p-3 shadow-[2px_2px_0_var(--line)]">
                    <span className="text-[10px] uppercase tracking-wider text-muted font-semibold block mb-1">
                      Neutralized
                    </span>
                    <span className="text-2xl font-black text-pass leading-none">
                      {score} <span className="text-xs font-normal text-muted">defects</span>
                    </span>
                  </div>

                  {/* Metric 2: QA Rank */}
                  <div className="bg-card border border-line rounded-xl p-3 shadow-[2px_2px_0_var(--line)]">
                    <span className="text-[10px] uppercase tracking-wider text-muted font-semibold block mb-1">
                      Hunter Rank
                    </span>
                    <div className="text-sm font-bold text-ink truncate leading-none mt-1" title={currentRank.title}>
                      <span className="mr-1">{currentRank.badge}</span>
                      <span className="text-ink-soft font-normal">{currentRank.title}</span>
                    </div>
                  </div>

                  {/* Metric 3: Peak Streak */}
                  <div className="bg-card border border-line rounded-xl p-3 shadow-[2px_2px_0_var(--line)]">
                    <span className="text-[10px] uppercase tracking-wider text-muted font-semibold block mb-1">
                      Peak Streak
                    </span>
                    <span className="text-2xl font-black text-amber-600 dark:text-amber-400 leading-none">
                      {maxCombo > 1 ? `${maxCombo}x` : "1x"}
                    </span>
                  </div>

                  {/* Metric 4: Integrity Retained */}
                  <div className="bg-card border border-line rounded-xl p-3 shadow-[2px_2px_0_var(--line)]">
                    <span className="text-[10px] uppercase tracking-wider text-muted font-semibold block mb-1">
                      Integrity Retained
                    </span>
                    <span className="text-2xl font-black text-pass leading-none">
                      {systemIntegrity}%
                    </span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-2.5">
                  <button
                    type="button"
                    onClick={() => {
                      restoreAllEatenElements();
                      setHasWon(false);
                      hasWonRef.current = false;
                      setWave(w => {
                        const nextW = w + 1;
                        waveRef.current = nextW;
                        return nextW;
                      });
                      setScore(0);
                      scoreRef.current = 0;
                      setCombo(0);
                      setMaxCombo(0);
                      setBreakpoints(b => Math.min(3, b + 1));
                      setSystemIntegrity(100);
                      setDefects([]);
                      spawnDefect();
                    }}
                    data-cursor="Proceed to next incident wave"
                    className="press flex-1 inline-flex items-center justify-center gap-2 border border-pass bg-pass text-on-band hover:bg-pass-fill font-bold py-3 px-4 rounded-xl shadow-[3px_3px_0_var(--ink)] text-xs sm:text-sm tracking-wide transition-transform active:translate-x-[2px] active:translate-y-[2px] cursor-pointer whitespace-nowrap"
                  >
                    <Zap size={14} className="shrink-0" />
                    Next Wave (Wave {wave + 1})
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      restoreAllEatenElements();
                      setHasWon(false);
                      hasWonRef.current = false;
                      setDefects([]);
                      setScore(0);
                      scoreRef.current = 0;
                      setCombo(0);
                      setMaxCombo(0);
                      setIsOpen(false);
                    }}
                    data-cursor="Close mini-game & restore UI"
                    className="press inline-flex items-center justify-center border border-line bg-card text-ink hover:border-ink hover:text-ink font-semibold py-3 px-5 rounded-xl shadow-[3px_3px_0_var(--ink)] text-xs sm:text-sm transition-transform active:translate-x-[2px] active:translate-y-[2px] cursor-pointer"
                  >
                    Close Game
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Keyframe Styles */}
          <style dangerouslySetInnerHTML={{__html: `
            header.sticky, .site-header {
              transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease;
            }
            @keyframes sectionGlitchCrash {
              0% { transform: translate(0, 0); filter: none; }
              20% { transform: translate(-3px, 2px); filter: contrast(1.3) hue-rotate(-20deg); }
              40% { transform: translate(3px, -2px); filter: invert(0.08); }
              60% { transform: translate(-2px, -1px); filter: contrast(1.15); }
              80% { transform: translate(2px, 1px); filter: none; }
              100% { transform: translate(0, 0); filter: none; }
            }
            @keyframes explode {
              0% { transform: translate(0, 0) scale(1.4); opacity: 1; }
              100% { 
                transform: translate(var(--tx), var(--ty)) scale(0);
                opacity: 0;
              }
            }
            @keyframes fadeIn {
              from { opacity: 0; transform: translateY(4px); }
              to { opacity: 1; transform: translateY(0); }
            }
            .animate-fade-in {
              animation: fadeIn 0.25s ease-out forwards;
            }

            /* --- Modern Bug Locomotion & Mouthpart Keyframes --- */
            @keyframes bugLegA {
              0% { transform: rotate(0deg); }
              50% { transform: rotate(14deg); }
              100% { transform: rotate(0deg); }
            }
            .bug-leg-a {
              animation: bugLegA 0.22s infinite ease-in-out;
            }
            @keyframes bugLegB {
              0% { transform: rotate(0deg); }
              50% { transform: rotate(-14deg); }
              100% { transform: rotate(0deg); }
            }
            .bug-leg-b {
              animation: bugLegB 0.22s infinite ease-in-out;
            }

            @keyframes bugEatingTremor {
              0% { transform: translate(0, 0); }
              25% { transform: translate(-0.8px, 0.6px); }
              50% { transform: translate(0.6px, -0.6px); }
              75% { transform: translate(-0.5px, -0.5px); }
              100% { transform: translate(0, 0); }
            }
            .bug-eating-tremor {
              animation: bugEatingTremor 0.07s infinite ease-in-out;
            }

            @keyframes bugWaddle {
              0% { transform: rotate(0deg); }
              25% { transform: rotate(-1.5deg); }
              75% { transform: rotate(1.5deg); }
              100% { transform: rotate(0deg); }
            }
            .bug-waddle {
              animation: bugWaddle 0.26s infinite ease-in-out;
            }

            @keyframes bugPulseRing {
              0% { transform: scale(0.9); opacity: 0.85; }
              50% { transform: scale(1.35); opacity: 0.1; }
              100% { transform: scale(0.9); opacity: 0.85; }
            }
            .bug-pulse-ring {
              transform-origin: 22px 22px;
              animation: bugPulseRing 0.5s infinite ease-in-out;
            }

            @keyframes laserPulse {
              0% { opacity: 0.6; height: 16px; }
              100% { opacity: 1; height: 26px; }
            }

            /* --- Critical Defect Overload Death Keyframes --- */
            @keyframes criticalBugDie {
              0% {
                transform: translate(-50%, -50%) scale(1) rotate(0deg);
                filter: drop-shadow(0 0 16px #ef4444) brightness(1.8);
                opacity: 1;
              }
              30% {
                transform: translate(-50%, -50%) scale(1.35) rotate(-8deg);
                filter: drop-shadow(0 0 26px #ef4444) brightness(2.4);
                opacity: 1;
              }
              65% {
                transform: translate(-50%, -50%) scale(0.85) rotate(14deg);
                filter: drop-shadow(0 0 34px #ef4444) brightness(1.6);
                opacity: 0.75;
              }
              100% {
                transform: translate(-50%, -50%) scale(0.08) rotate(24deg);
                filter: drop-shadow(0 0 40px #ef4444) brightness(0.2);
                opacity: 0;
              }
            }

            @keyframes deathShockwave {
              0% {
                transform: scale(0.4);
                opacity: 1;
                border-color: #ef4444;
              }
              100% {
                transform: scale(2.8);
                opacity: 0;
                border-color: #f87171;
              }
            }

            /* --- Newborn Low Defect Reproduction & Birth Keyframes --- */
            @keyframes bugBirthEmerge {
              0% {
                transform: translate(-50%, -50%) scale(0.15);
                filter: drop-shadow(0 0 24px #10b981) brightness(2.2);
                opacity: 0.2;
              }
              45% {
                transform: translate(-50%, -50%) scale(1.24);
                filter: drop-shadow(0 0 18px #10b981) brightness(1.7);
                opacity: 1;
              }
              75% {
                transform: translate(-50%, -50%) scale(0.92);
                filter: drop-shadow(0 0 12px #10b981) brightness(1.2);
                opacity: 1;
              }
              100% {
                transform: translate(-50%, -50%) scale(1);
                filter: drop-shadow(0 2px 7px #10b98177) brightness(1);
                opacity: 1;
              }
            }

            @keyframes birthRipple {
              0% {
                transform: scale(0.3);
                opacity: 1;
                border-color: #10b981;
              }
              100% {
                transform: scale(2.6);
                opacity: 0;
                border-color: #34d399;
              }
            }
          `}} />
        </div>
      )}
    </>
  );
}
