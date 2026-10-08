"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { 
  Gamepad2, Bug, X, Target, ShieldCheck, 
  Volume2, VolumeX, Pause, Play, AlertTriangle, 
  RefreshCw, Zap, Award 
} from "lucide-react";

interface Defect {
  id: string;
  x: number;
  y: number;
  squashed: boolean;
  scanning?: boolean;
  eating?: boolean;
  eatingTarget?: HTMLElement | null;
  eatStartTime?: number;
  lastHitTest?: number;
  originalSpeed: number;
  spawnTime: number;
  size: number;
  baseSize: number;
  speed: number;
  direction: number; // angle in radians
  color: string;
  isPulsing?: boolean;
  hungerThreshold?: number;
  wobbleSeed: number;
}

interface ScoreFloater {
  id: string;
  x: number;
  y: number;
  text: string;
  color: string;
  points: number;
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

export function QaGame() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasCrashed, setHasCrashed] = useState(false);
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(0);
  const [breakpoints, setBreakpoints] = useState(1);
  const [isFrozen, setIsFrozen] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [systemIntegrity, setSystemIntegrity] = useState(100);
  const [eatenCount, setEatenCount] = useState(0);

  const [defects, setDefects] = useState<Defect[]>([]);
  const [particles, setParticles] = useState<{ id: string; x: number; y: number; color: string }[]>([]);
  const [floaters, setFloaters] = useState<ScoreFloater[]>([]);
  const [terminalLogs, setTerminalLogs] = useState<TerminalLog[]>([]);

  const requestRef = useRef<number>(null);
  const defectsRef = useRef<Defect[]>([]);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const comboTimerRef = useRef<NodeJS.Timeout | null>(null);
  const freezeTimerRef = useRef<NodeJS.Timeout | null>(null);
  
  const scoreRef = useRef(0);
  const isMutedRef = useRef(false);
  const audioCtxRef = useRef<AudioContext | null>(null);

  // Sync state refs
  useEffect(() => {
    defectsRef.current = defects;
    scoreRef.current = score;
    isMutedRef.current = isMuted;
  }, [defects, score, isMuted]);

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

  // Clean DOM restoration helper
  const restoreAllEatenElements = useCallback(() => {
    if (typeof document === "undefined") return;
    document.querySelectorAll('[data-eaten="true"], [data-eating-by]').forEach(el => {
      const targetEl = el as HTMLElement;
      targetEl.removeAttribute('data-eaten');
      targetEl.removeAttribute('data-eating-by');
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
    comboTimerRef.current = setTimeout(() => setCombo(0), 2000);

    // Audio
    playResolveAudio(newCombo);

    // Score calculation
    let basePoints = 25;
    let pointTag = "+25 P3 LOW";
    let pointColor = "#fde047";

    if (progress >= 1.0) {
      basePoints = 200;
      pointTag = `+${basePoints * (isFrozen ? 2 : 1)} P0 CRITICAL!`;
      pointColor = "#ef4444";
    } else if (progress >= 0.70) {
      basePoints = 100;
      pointTag = `+${basePoints * (isFrozen ? 2 : 1)} P1 HIGH`;
      pointColor = "#f97316";
    } else if (progress >= 0.35) {
      basePoints = 50;
      pointTag = `+${basePoints * (isFrozen ? 2 : 1)} P2 MED`;
      pointColor = "#facc15";
    }

    const earnedPoints = isFrozen ? basePoints * 2 : basePoints;

    // Award Breakpoint charge every 8 squashes
    setScore(s => {
      const nextScore = s + 1;
      if (nextScore > 0 && nextScore % 8 === 0) {
        setBreakpoints(b => Math.min(3, b + 1));
      }
      return nextScore;
    });

    // If bug was eating an element, save and restore the element from being eaten
    if (targetBug.eatingTarget) {
      const targetEl = targetBug.eatingTarget;
      targetEl.removeAttribute('data-eating-by');
      targetEl.style.color = "";
      targetEl.style.outline = "";
      targetEl.style.outlineOffset = "";
      targetEl.style.textDecoration = "";
      targetEl.style.transform = "";
    }

    // Mark bug as squashed
    setDefects(prev => prev.map(b => b.id === id ? { ...b, squashed: true, scanning: false, eating: false } : b));

    // Spawn Score Floater text
    const floaterId = Math.random().toString(36).substring(7);
    setFloaters(prev => [
      ...prev,
      {
        id: floaterId,
        x,
        y: y - 10,
        text: newCombo > 1 ? `${pointTag} (${newCombo}x COMBO!)` : pointTag,
        color: pointColor,
        points: earnedPoints
      }
    ]);
    setTimeout(() => {
      setFloaters(prev => prev.filter(f => f.id !== floaterId));
    }, 850);

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
    }, 400);

    setTimeout(() => {
      setParticles(prev => prev.filter(p => !newParticles.find(np => np.id === p.id)));
    }, 800);

    // Generate procedural QA bug log
    const bugMsg = generateBugMessage(scoreRef.current + 1, progress);
    const newLog: TerminalLog = {
      id: Date.now(),
      text: bugMsg.fullText,
      priority: bugMsg.priority,
      icon: bugMsg.icon,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })
    };
    setTerminalLogs(prev => [newLog, ...prev.slice(0, 3)]); // Keep last 4 logs
  }, [combo, isFrozen, playResolveAudio]);

  const handlePointerEnter = useCallback((bugId: string) => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setDefects(prev => prev.map(b => b.id === bugId ? { ...b, scanning: true } : b));

    // Target hover squash (300ms)
    hoverTimeoutRef.current = setTimeout(() => {
      const bug = defectsRef.current.find(b => b.id === bugId);
      if (bug && !bug.squashed) {
        squashDefect(bugId, bug.x, bug.y);
      }
    }, 300);
  }, [squashDefect]);

  const handlePointerLeave = useCallback((bugId: string) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    setDefects(prev => prev.map(b => b.id === bugId ? { ...b, scanning: false } : b));
  }, []);

  // Spawn Defect
  const spawnDefect = useCallback(() => {
    if (defectsRef.current.length >= 6) return; // max simultaneous defects
    const margin = 70;
    const x = margin + Math.random() * (window.innerWidth - margin * 2);
    const y = margin + Math.random() * (window.innerHeight - margin * 2);
    
    // Low priority when born: big, light yellow, slow crawl
    const baseSpeed = 0.85 + Math.random() * 0.35; // 0.85 to 1.2 px/frame
    const baseSize = 60 + Math.random() * 8; // 60px to 68px
    const hungerThreshold = 8000 + Math.random() * 6000; // 8s to 14s before critical
    
    const newDefect: Defect = {
      id: Math.random().toString(36).substring(7),
      x,
      y,
      squashed: false,
      eating: false,
      spawnTime: Date.now(),
      originalSpeed: baseSpeed,
      speed: baseSpeed,
      size: baseSize,
      baseSize,
      color: "#fde047", // Light yellow
      isPulsing: false,
      direction: Math.random() * Math.PI * 2,
      hungerThreshold,
      wobbleSeed: Math.random() * 1000
    };
    
    setDefects(prev => [...prev, newDefect]);
  }, []);

  // Helper: Find discrete leaf content element under point (never container or whole section)
  const findContentLeafTarget = (x: number, y: number): HTMLElement | null => {
    if (typeof document === "undefined") return null;
    const elements = document.elementsFromPoint(x, y);

    const FORBIDDEN_CONTAINERS = new Set([
      'HTML', 'BODY', 'MAIN', 'SECTION', 'ARTICLE', 'NAV', 
      'HEADER', 'FOOTER', 'ASIDE', 'DIALOG', 'HEAD', 'SCRIPT', 'STYLE'
    ]);

    const LEAF_TAGS = new Set([
      'P', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 
      'LI', 'BUTTON', 'A', 'SPAN', 'CODE', 'PRE', 
      'TD', 'TH', 'LABEL', 'STRONG', 'EM', 'B', 'I', 
      'IMG', 'SVG', 'BLOCKQUOTE', 'CITE', 'TIME'
    ]);

    for (const el of elements) {
      if (!(el instanceof HTMLElement)) continue;
      if (el.closest('[data-game-ui="true"]') || el.closest('.z-\\[60\\]') || el.closest('.site-cursor')) continue;
      if (el.id === '__next' || el.id === 'root') continue;
      if (el.hasAttribute('data-eaten') || el.closest('[data-eaten="true"]')) continue;
      if (el.hasAttribute('data-eating-by')) continue;

      const tag = el.tagName.toUpperCase();
      if (FORBIDDEN_CONTAINERS.has(tag)) continue;

      // Direct leaf elements
      if (LEAF_TAGS.has(tag)) {
        const rect = el.getBoundingClientRect();
        if (rect.width > 6 && rect.height > 6 && (el.textContent?.trim() || tag === 'IMG' || tag === 'SVG')) {
          return el;
        }
      }

      // Small content divs (badges, counters, tags, chips)
      if (tag === 'DIV') {
        const rect = el.getBoundingClientRect();
        // Skip large containers
        if (rect.width > 550 || rect.height > 300) continue;
        
        // If it contains child leaf content, pick the leaf child rather than the container
        if (el.childElementCount > 1) {
          const leafChild = el.querySelector<HTMLElement>(
            'p:not([data-eaten]):not([data-eating-by]), span:not([data-eaten]):not([data-eating-by]), h1:not([data-eaten]):not([data-eating-by]), h2:not([data-eaten]):not([data-eating-by]), h3:not([data-eaten]):not([data-eating-by]), li:not([data-eaten]):not([data-eating-by]), button:not([data-eaten]):not([data-eating-by]), a:not([data-eaten]):not([data-eating-by]), code:not([data-eaten]):not([data-eating-by])'
          );
          if (leafChild && !leafChild.hasAttribute('data-eaten') && !leafChild.hasAttribute('data-eating-by')) {
            return leafChild;
          }
          continue;
        }
        
        if (el.textContent?.trim() && rect.width > 10 && rect.height > 10) {
          return el;
        }
      }
    }

    return null;
  };

  // Helper: Find nearest visible uneaten leaf content element on screen to steer critical bugs towards
  const findNearbyLeafElement = (x: number, y: number): HTMLElement | null => {
    if (typeof document === "undefined") return null;
    const candidates = document.querySelectorAll<HTMLElement>(
      'p:not([data-eaten]):not([data-eating-by]), h1:not([data-eaten]):not([data-eating-by]), h2:not([data-eaten]):not([data-eating-by]), h3:not([data-eaten]):not([data-eating-by]), li:not([data-eaten]):not([data-eating-by]), button:not([data-eaten]):not([data-eating-by]), a:not([data-eaten]):not([data-eating-by]), code:not([data-eaten]):not([data-eating-by])'
    );

    let closest: HTMLElement | null = null;
    let minDistance = 600;

    for (let i = 0; i < candidates.length; i++) {
      const el = candidates[i];
      if (el.closest('[data-game-ui="true"]') || el.closest('.z-\\[60\\]')) continue;
      const rect = el.getBoundingClientRect();
      if (
        rect.top >= 0 && 
        rect.bottom <= window.innerHeight && 
        rect.left >= 0 && 
        rect.right <= window.innerWidth && 
        rect.width > 8 && 
        rect.height > 8
      ) {
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dist = Math.hypot(cx - x, cy - y);
        if (dist < minDistance) {
          minDistance = dist;
          closest = el;
        }
      }
    }
    return closest;
  };

  // Movement & Game Physics Loop
  const updatePositions = useCallback(() => {
    const now = Date.now();
    const newBugsToSpawn: Defect[] = [];

    const nextDefects: (Defect | null)[] = defectsRef.current.map(bug => {
      if (bug.squashed) return bug;
      
      const age = now - bug.spawnTime;
      const threshold = bug.hungerThreshold || 10000;
      const progress = Math.min(age / threshold, 1.2);
      
      // Fully reactive state progression:
      // P3 [Low]: Light yellow (#fde047), big (1.0x), slow (1.0x)
      // P2 [Medium]: Orange (#f97316), shrinking (0.75x), faster (2.0x)
      // P1 [High]: Red (#ef4444), small (0.55x), fast (3.2x)
      // P0 [Critical]: Dark crimson (#b91c1c), smallest (0.40x), frantic fast (4.6x), pulsing
      let color = "#fde047";
      let isPulsing = false;
      let sizeScale = 1.0;
      let speedScale = 1.0;

      if (progress >= 1.0) {
        color = "#b91c1c";
        isPulsing = true;
        sizeScale = 0.40; // ~24px - 27px (smallest)
        speedScale = 4.6; // super fast darting
      } else if (progress >= 0.70) {
        color = "#ef4444";
        isPulsing = false;
        sizeScale = 0.55; // ~33px - 37px
        speedScale = 3.2; // fast
      } else if (progress >= 0.35) {
        color = "#f97316";
        isPulsing = false;
        sizeScale = 0.75; // ~45px - 51px
        speedScale = 2.0; // medium
      } else {
        color = "#fde047";
        isPulsing = false;
        sizeScale = 1.0;  // 60px - 68px (big)
        speedScale = 1.0; // slow crawl
      }

      const currentSize = Math.round(bug.baseSize * sizeScale);
      let activeSpeed = isFrozen ? 0 : bug.originalSpeed * speedScale;
      
      // Eating handling
      if (bug.eating) {
        if (now - (bug.eatStartTime || 0) > 950) {
          // Finished eating!
          // 1. Mark target element eaten with smooth dissolve & layout preservation
          if (bug.eatingTarget && !bug.eatingTarget.hasAttribute('data-eaten')) {
            const targetEl = bug.eatingTarget;
            targetEl.removeAttribute('data-eating-by');
            targetEl.setAttribute('data-eaten', 'true');
            targetEl.style.transition = "opacity 0.65s cubic-bezier(0.16, 1, 0.3, 1), filter 0.65s ease, transform 0.65s ease, color 0.4s ease, outline 0.4s ease";
            targetEl.style.opacity = "0.08";
            targetEl.style.pointerEvents = "none";
            if (window.getComputedStyle(targetEl).position === 'static') {
              targetEl.style.position = "relative";
            }
            targetEl.style.filter = "blur(1.2px) grayscale(0.8) contrast(1.1)";
            targetEl.style.color = "#ef4444";
            targetEl.style.outline = "1.5px dashed rgba(239, 68, 68, 0.4)";
            targetEl.style.outlineOffset = "2px";
            targetEl.style.textDecoration = "line-through 2px #ef4444";
            targetEl.style.transform = "scale(0.97)";

            // Trigger section glitch crash tremor
            const parentSection = targetEl.closest('section, main, article, header, footer');
            if (parentSection instanceof HTMLElement) {
              parentSection.style.animation = "sectionGlitchCrash 0.55s cubic-bezier(0.36, 0.07, 0.19, 0.97)";
              setTimeout(() => {
                if (parentSection instanceof HTMLElement) {
                  parentSection.style.animation = "";
                }
              }, 600);
            }
          }

          // 2. Play crash detonation audio
          playCrashAudio();

          // 3. Child bug logic: Spawn brand new P3 low bug (big, light yellow, slow crawl)
          const childSpeed = 0.85 + Math.random() * 0.35;
          const childSize = 60 + Math.random() * 8;
          newBugsToSpawn.push({
            id: Math.random().toString(36).substring(7),
            x: Math.max(20, Math.min(window.innerWidth - childSize - 20, bug.x + (Math.random() - 0.5) * 40)),
            y: Math.max(20, Math.min(window.innerHeight - childSize - 20, bug.y + (Math.random() - 0.5) * 40)),
            squashed: false,
            eating: false,
            eatingTarget: null,
            spawnTime: now,
            originalSpeed: childSpeed,
            speed: childSpeed,
            size: childSize,
            baseSize: childSize,
            color: "#fde047", // light yellow
            isPulsing: false,
            direction: Math.random() * Math.PI * 2,
            hungerThreshold: 8500 + Math.random() * 5500,
            wobbleSeed: Math.random() * 1000
          });

          playBirthAudio();

          // Floater for section crash & child spawn
          const crashFloaterId = Math.random().toString(36).substring(7);
          setFloaters(prev => [
            ...prev,
            {
              id: crashFloaterId,
              x: bug.x,
              y: bug.y - 15,
              text: "💥 SECTION CRASH! 🌱 Child P3 Bug Born",
              color: "#ef4444",
              points: 0
            }
          ]);
          setTimeout(() => {
            setFloaters(prev => prev.filter(f => f.id !== crashFloaterId));
          }, 1100);

          // Spawn crash explosion debris particles
          const crashParticles = Array.from({ length: 12 }).map(() => ({
            id: Math.random().toString(36).substring(7),
            x: bug.x,
            y: bug.y,
            color: "#ef4444"
          }));
          setParticles(prev => [...prev, ...crashParticles]);
          setTimeout(() => {
            setParticles(prev => prev.filter(p => !crashParticles.find(cp => cp.id === p.id)));
          }, 800);

          // Update integrity and log
          const corruptedCount = document.querySelectorAll('[data-eaten="true"]').length;
          setEatenCount(corruptedCount);
          const integrityLeft = Math.max(0, 100 - corruptedCount * 7);
          setSystemIntegrity(integrityLeft);

          const remainingTextElements = document.querySelectorAll(
            'h1:not([data-eaten]), h2:not([data-eaten]), h3:not([data-eaten]), p:not([data-eaten])'
          );
          if (integrityLeft <= 0 || remainingTextElements.length === 0) {
            setHasCrashed(true);
          }

          const newLog: TerminalLog = {
            id: Date.now(),
            text: "💥 P0 Defect crashed section content and burned out. Spawned child defect.",
            priority: "P0 [CRASH]",
            icon: "💥",
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })
          };
          setTerminalLogs(prev => [newLog, ...prev.slice(0, 2)]);

          // 4. Old critical bug DIES! Returning null removes it from defects list.
          return null;
        }
        return { ...bug, color: "#b91c1c", isPulsing: true, size: currentSize }; // Stay still while chewing
      }

      let nextLastHitTest = bug.lastHitTest || 0;
      let nextDirection = bug.direction;
      let nextSpeed = activeSpeed;

      // When critical: scan for discrete leaf elements to corrupt
      if (progress >= 1.0 && !bug.scanning && !isFrozen) {
        if (now - nextLastHitTest > 350) {
          nextLastHitTest = now;
          const leafTarget = findContentLeafTarget(bug.x + currentSize / 2, bug.y + currentSize / 2);
          if (leafTarget) {
            leafTarget.setAttribute('data-eating-by', bug.id);
            leafTarget.style.transition = 'color 0.2s ease, text-decoration 0.2s ease, outline 0.2s ease, transform 0.2s ease';
            leafTarget.style.color = '#ef4444';
            leafTarget.style.outline = '1.5px dashed #ef4444';
            leafTarget.style.outlineOffset = '2px';
            leafTarget.style.textDecoration = 'line-through 2px #ef4444';
            leafTarget.style.transform = 'scale(0.98)';

            playGlitchAudio();

            return {
              ...bug,
              eating: true,
              eatingTarget: leafTarget,
              eatStartTime: now,
              speed: 0,
              lastHitTest: nextLastHitTest,
              color: '#b91c1c',
              isPulsing: true,
              size: currentSize
            };
          } else {
            // Steer towards nearest leaf in section/viewport
            const nearby = findNearbyLeafElement(bug.x + currentSize / 2, bug.y + currentSize / 2);
            if (nearby) {
              const rect = nearby.getBoundingClientRect();
              const targetAngle = Math.atan2((rect.top + rect.height / 2) - bug.y, (rect.left + rect.width / 2) - bug.x);
              nextDirection = targetAngle + (Math.random() - 0.5) * 0.35;
            }
          }
        }
      }

      let newX = bug.x + Math.cos(nextDirection) * nextSpeed;
      let newY = bug.y + Math.sin(nextDirection) * nextSpeed;

      // Bounce off viewport boundaries
      if (newX < 0 || newX > window.innerWidth - currentSize) {
        nextDirection = Math.PI - nextDirection;
        newX = Math.max(0, Math.min(newX, window.innerWidth - currentSize));
      }
      if (newY < 0 || newY > window.innerHeight - currentSize) {
        nextDirection = -nextDirection;
        newY = Math.max(0, Math.min(newY, window.innerHeight - currentSize));
      }

      // Random gentle wander
      if (Math.random() < 0.02 && !isFrozen && progress < 1.0) {
        nextDirection += (Math.random() - 0.5);
      }

      return { 
        ...bug, 
        x: newX, 
        y: newY, 
        direction: nextDirection, 
        lastHitTest: nextLastHitTest, 
        size: currentSize, 
        speed: nextSpeed, 
        color, 
        isPulsing 
      };
    });

    const activeDefects = nextDefects.filter((b): b is Defect => b !== null);
    setDefects([...activeDefects, ...newBugsToSpawn]);
    requestRef.current = requestAnimationFrame(updatePositions);
  }, [isFrozen, playGlitchAudio, playCrashAudio, playBirthAudio]);

  // Main game lifecycle
  useEffect(() => {
    if (isOpen) {
      document.documentElement.dataset.game = "on";
      let timeoutId: NodeJS.Timeout;
      const scheduleNext = () => {
        timeoutId = setTimeout(() => {
          spawnDefect();
          scheduleNext();
        }, 600 + Math.random() * 1800);
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
      setFloaters([]);
      setHasCrashed(false);

      if (requestRef.current) cancelAnimationFrame(requestRef.current);
      if (comboTimerRef.current) clearTimeout(comboTimerRef.current);
      if (freezeTimerRef.current) clearTimeout(freezeTimerRef.current);
      delete document.documentElement.dataset.game;
      
      restoreAllEatenElements();
    }
  }, [isOpen, spawnDefect, updatePositions, restoreAllEatenElements]);

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
      >
        {isOpen ? <X size={20} strokeWidth={1.75} /> : <Gamepad2 size={20} strokeWidth={1.75} />}
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 pointer-events-none overflow-hidden selection:bg-transparent" data-game-ui="true">
          
          {/* Top-Left Stacked HUD Dashboard - Zero interruption to site content */}
          <aside 
            aria-label="QA Defect Hunter Dashboard"
            className="fixed top-3 left-3 z-[60] flex flex-col gap-1.5 pointer-events-auto w-[252px] sm:w-[270px] select-none animate-fade-in"
          >
            <div className="w-full bg-paper/95 backdrop-blur-md p-2.5 rounded-xl border border-pass text-ink shadow-[4px_4px_0_var(--ink)]">
              {/* Row 1: Title + Rank Badge */}
              <div className="flex items-center justify-between border-b border-line pb-1 mb-1.5">
                <div className="flex items-center gap-1.5 font-mono text-[10px] font-bold text-pass uppercase tracking-wide">
                  <ShieldCheck size={14} className="text-pass animate-pulse" />
                  <span>QA Defect Hunter</span>
                </div>
                <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-pass/10 text-pass font-semibold border border-pass/30">
                  {currentRank.badge}
                </span>
              </div>

              {/* Row 2: Fixed Count + Combo + Rank */}
              <div className="flex items-center justify-between font-mono mb-1.5">
                <div>
                  <span className="text-[8px] uppercase tracking-wider text-muted font-mono block leading-none">Fixed</span>
                  <span className="text-base font-bold font-mono text-pass leading-tight">{score}</span>
                </div>
                {combo > 1 && (
                  <div className="flex items-center gap-0.5 px-1.5 py-0.2 rounded bg-orange-500/15 border border-orange-500/40 text-orange-600 dark:text-orange-400 font-mono text-[10px] font-bold animate-bounce">
                    <Zap size={11} className="fill-current" />
                    <span>{combo}x</span>
                  </div>
                )}
                <div className="text-right">
                  <span className="text-[8px] uppercase tracking-wider text-muted font-mono block leading-none">Rank</span>
                  <span className="text-[11px] font-semibold text-ink truncate max-w-[95px] block">{currentRank.title}</span>
                </div>
              </div>

              {/* Row 3: Integrity Progress */}
              <div className="space-y-0.5 mb-2">
                <div className="flex items-center justify-between text-[9px] font-mono">
                  <span className="text-muted flex items-center gap-1">
                    <AlertTriangle size={10} className={systemIntegrity < 40 ? "text-red-500 animate-spin" : "text-amber-500"} />
                    Integrity
                  </span>
                  <span className={`font-bold font-mono ${systemIntegrity < 40 ? "text-red-500 animate-pulse" : "text-pass"}`}>
                    {systemIntegrity}%
                  </span>
                </div>
                <div className="h-1.5 w-full bg-line rounded-full overflow-hidden">
                  <div 
                    className={`h-full transition-all duration-300 rounded-full ${
                      systemIntegrity < 30 ? "bg-red-500 animate-pulse" : systemIntegrity < 65 ? "bg-amber-500" : "bg-pass"
                    }`}
                    style={{ width: `${systemIntegrity}%` }}
                  />
                </div>
                {eatenCount > 0 && (
                  <div className="mt-1 flex items-center justify-between text-[9px] font-mono text-red-500">
                    <span>⚠️ Corrupted:</span>
                    <span className="font-bold">{eatenCount} nodes</span>
                  </div>
                )}
              </div>

              {/* Row 4: Controls inline */}
              <div className="flex items-center justify-between pt-1.5 border-t border-line">
                <button
                  type="button"
                  onClick={triggerBreakpoint}
                  disabled={breakpoints <= 0 || isFrozen}
                  title="Trigger Debugger Breakpoint (Spacebar)"
                  className={`flex items-center gap-1 px-2 py-0.5 rounded-lg font-mono text-[10px] font-bold transition-all ${
                    isFrozen 
                      ? "bg-blue-600 text-white animate-pulse" 
                      : breakpoints > 0 
                        ? "bg-blue-500/15 border border-blue-500/40 text-blue-600 hover:bg-blue-500/25 active:scale-95" 
                        : "opacity-40 cursor-not-allowed bg-line/30 text-muted"
                  }`}
                >
                  {isFrozen ? <Pause size={10} /> : <Play size={10} />}
                  <span>breakpoint;</span>
                  <span className="px-1.5 py-0.1 rounded-full bg-blue-600 text-white text-[8px]">
                    {breakpoints}
                  </span>
                </button>

                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={() => setIsMuted(!isMuted)}
                    className="p-1 rounded-lg border border-line hover:border-pass hover:bg-pass/10 transition-colors text-ink"
                    title={isMuted ? "Unmute Sound FX" : "Mute Sound FX"}
                    aria-label={isMuted ? "Unmute Sound FX" : "Mute Sound FX"}
                  >
                    {isMuted ? <VolumeX size={12} className="text-muted" /> : <Volume2 size={12} className="text-pass" />}
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      restoreAllEatenElements();
                      setDefects([]);
                      setScore(0);
                      setCombo(0);
                      setBreakpoints(1);
                      setIsFrozen(false);
                      setHasCrashed(false);
                      spawnDefect();
                    }}
                    className="p-1 rounded-lg border border-line hover:border-amber-500 hover:text-amber-500 transition-colors text-ink"
                    title="Reboot QA Environment"
                    aria-label="Reboot Environment"
                  >
                    <RefreshCw size={12} />
                  </button>
                </div>
              </div>
            </div>
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
              // Crawling leg wobble calculation
              const wobbleDeg = bug.eating 
                ? Math.sin(Date.now() / 50) * 12 
                : Math.sin((Date.now() + bug.wobbleSeed) / 80) * 14;

              return (
                <button
                  key={bug.id}
                  onClick={() => squashDefect(bug.id, bug.x, bug.y)}
                  onPointerEnter={() => handlePointerEnter(bug.id)}
                  onPointerLeave={() => handlePointerLeave(bug.id)}
                  className="absolute flex items-center justify-center pointer-events-auto group border-none bg-transparent outline-none ring-0 focus:outline-none focus:ring-0 select-none"
                  style={{
                    left: bug.x,
                    top: bug.y,
                    width: bug.size,
                    height: bug.size,
                    transform: bug.squashed ? "scale(0)" : "scale(1)",
                    transition: bug.squashed ? "transform 350ms cubic-bezier(0.1, 0.9, 0.2, 1)" : "width 200ms ease, height 200ms ease",
                    opacity: bug.squashed ? 0 : 1,
                    color: bug.color,
                    rotate: `${(bug.direction * 180) / Math.PI + 90 + wobbleDeg}deg`,
                    cursor: "crosshair",
                    filter: isFrozen ? "drop-shadow(0 0 8px #38bdf8) brightness(1.2)" : undefined
                  }}
                  aria-label="Squash defect"
                >
                  <Bug
                    size={bug.size}
                    strokeWidth={2.2}
                    color={bug.color}
                    className={`${bug.isPulsing ? "animate-pulse" : ""} ${bug.eating ? "scale-110" : ""} drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]`}
                  />

                  {/* Threat Indicator Ping for Critical P0 Bugs */}
                  {bug.isPulsing && (
                    <span 
                      className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-red-600 animate-ping pointer-events-none" 
                    />
                  )}

                  {/* Chewing/Eating indicator badge above bug */}
                  {bug.eating && (
                    <span className="absolute -top-4 left-1/2 -translate-x-1/2 font-mono text-[9px] font-bold text-red-500 bg-black/85 px-1 py-0.2 rounded border border-red-500 animate-pulse whitespace-nowrap pointer-events-none">
                      CORRUPTING...
                    </span>
                  )}
                </button>
              );
            })}

            {/* Score Float Pops */}
            {floaters.map(f => (
              <div
                key={f.id}
                className="absolute font-mono font-extrabold text-sm sm:text-base pointer-events-none z-[65] animate-floater select-none drop-shadow-md"
                style={{
                  left: f.x,
                  top: f.y,
                  color: f.color
                }}
              >
                {f.text}
              </div>
            ))}

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

          {/* Fatal System Crash / Post-Mortem Incident Screen */}
          {hasCrashed && (
            <div 
              role="dialog"
              aria-modal="true"
              aria-labelledby="crash-title"
              className="fixed inset-0 z-[100] bg-red-950/95 text-paper flex flex-col items-center justify-center font-mono p-6 sm:p-10 pointer-events-auto backdrop-blur-md overflow-y-auto"
            >
              <div className="max-w-2xl w-full bg-black/80 border-2 border-red-600 rounded-2xl p-6 sm:p-8 shadow-[0_0_50px_rgba(220,38,38,0.5)]">
                
                {/* Header Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-600 text-white text-xs font-bold rounded uppercase tracking-widest mb-4">
                  <AlertTriangle size={14} /> Production Severity 1 Outage
                </div>

                <h2 id="crash-title" className="text-3xl sm:text-4xl font-bold tracking-tight text-red-500 mb-2">
                  FATAL_SYSTEM_ERROR: MEMORY_CORRUPTED
                </h2>
                
                <p className="text-paper/80 text-sm sm:text-base mb-6 leading-relaxed">
                  Defects breached automated assertions and corrupted 100% of the active site layout. The QA Defect Hunter test suite halted.
                </p>

                {/* Incident Post-Mortem Box */}
                <div className="bg-red-950/40 border border-red-800/80 rounded-xl p-4 mb-6 space-y-2 text-xs text-red-200">
                  <div className="flex justify-between border-b border-red-900/60 pb-1.5">
                    <span className="text-red-400">Total Bugs Intercepted:</span>
                    <span className="font-bold text-white">{score}</span>
                  </div>
                  <div className="flex justify-between border-b border-red-900/60 pb-1.5">
                    <span className="text-red-400">Peak Performance Combo:</span>
                    <span className="font-bold text-white">{combo}x Multiplier</span>
                  </div>
                  <div className="flex justify-between border-b border-red-900/60 pb-1.5">
                    <span className="text-red-400">Final QA Assessment:</span>
                    <span className="font-bold text-white">{currentRank.title} ({currentRank.badge})</span>
                  </div>
                  <div className="flex justify-between pt-1">
                    <span className="text-red-400">Incident Code:</span>
                    <span className="font-mono text-red-300">0x0000000A_ASSERT_FAIL</span>
                  </div>
                </div>

                {/* Hotfix Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      restoreAllEatenElements();
                      setHasCrashed(false);
                      setScore(0);
                      setCombo(0);
                      setBreakpoints(1);
                      setDefects([]);
                    }}
                    className="flex-1 px-5 py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold transition-all text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg active:scale-95"
                  >
                    <RefreshCw size={16} /> Deploy Hotfix & Retry
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setIsOpen(false);
                    }}
                    className="px-5 py-3 rounded-xl bg-paper/10 hover:bg-paper/20 text-paper font-semibold transition-all text-sm uppercase tracking-wider"
                  >
                    Close Game
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Keyframe Styles */}
          <style dangerouslySetInnerHTML={{__html: `
            html[data-game="on"] header.sticky,
            html[data-game="on"] .site-header {
              transform: translateY(-100%) !important;
              opacity: 0 !important;
              pointer-events: none !important;
              transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease !important;
            }
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
            @keyframes floater {
              0% { transform: translateY(0) scale(0.85); opacity: 0; }
              20% { transform: translateY(-10px) scale(1.05); opacity: 1; }
              80% { transform: translateY(-35px) scale(1); opacity: 0.9; }
              100% { transform: translateY(-50px) scale(0.9); opacity: 0; }
            }
            .animate-floater {
              animation: floater 0.85s cubic-bezier(0.16, 1, 0.3, 1) forwards;
            }
            @keyframes fadeIn {
              from { opacity: 0; transform: translateY(4px); }
              to { opacity: 1; transform: translateY(0); }
            }
            .animate-fade-in {
              animation: fadeIn 0.25s ease-out forwards;
            }
          `}} />
        </div>
      )}
    </>
  );
}
