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
    document.querySelectorAll('[data-eaten="true"]').forEach(el => {
      const targetEl = el as HTMLElement;
      targetEl.removeAttribute('data-eaten');
      targetEl.style.transition = "opacity 0.5s ease, filter 0.5s ease, transform 0.5s ease, outline 0.4s ease";
      targetEl.style.opacity = "";
      targetEl.style.pointerEvents = "";
      targetEl.style.position = "";
      targetEl.style.filter = "";
      targetEl.style.color = "";
      targetEl.style.outline = "";
      targetEl.style.outlineOffset = "";
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

    // Mark bug as squashed
    setDefects(prev => prev.map(b => b.id === id ? { ...b, squashed: true, scanning: false } : b));

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

  // Movement & Game Physics Loop
  const updatePositions = useCallback(() => {
    const now = Date.now();
    const newBugsToSpawn: Defect[] = [];

    const nextDefects = defectsRef.current.map(bug => {
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
        if (now - (bug.eatStartTime || 0) > 1000) {
          // Finished eating: Clones a new low priority bug (born big, light yellow, slow)
          const newBaseSpeed = 0.85 + Math.random() * 0.35;
          const newBaseSize = 60 + Math.random() * 8;
          newBugsToSpawn.push({
            id: Math.random().toString(36).substring(7),
            x: bug.x,
            y: bug.y,
            squashed: false,
            eating: false,
            spawnTime: now,
            originalSpeed: newBaseSpeed,
            size: newBaseSize,
            baseSize: newBaseSize,
            speed: newBaseSpeed,
            color: "#fde047",
            isPulsing: false,
            direction: Math.random() * Math.PI * 2,
            hungerThreshold: 8000 + Math.random() * 6000,
            wobbleSeed: Math.random() * 1000
          });

          // The original critical bug also resets to low priority (big, light yellow, slow)
          return { 
            ...bug, 
            eating: false, 
            spawnTime: now,
            color: "#fde047",
            isPulsing: false,
            size: bug.baseSize,
            speed: bug.originalSpeed
          };
        }
        return { ...bug, color: "#b91c1c", isPulsing: true, size: currentSize }; // Stay still while chewing
      }

      let nextLastHitTest = bug.lastHitTest || 0;
      let nextEating: boolean | undefined = bug.eating;
      let nextEatStartTime = bug.eatStartTime;
      let nextSpeed = activeSpeed;

      // Check hunger: When critical, scan for elements to corrupt every 500ms
      if (progress >= 1.0 && !bug.scanning && !isFrozen && (now - nextLastHitTest > 500)) {
        nextLastHitTest = now;
        const elements = document.elementsFromPoint(bug.x + currentSize / 2, bug.y + currentSize / 2);
        const validTargets = elements.filter(el => {
          const tag = el.tagName.toUpperCase();
          if (tag === 'BODY' || tag === 'HTML' || tag === 'MAIN' || tag === 'HEAD') return false;
          if (el.id === '__next' || el.id === 'root') return false;
          if (el.closest('.z-\\[60\\]') || el.closest('.site-cursor') || el.closest('[data-game-ui="true"]')) return false;
          return true;
        }) as HTMLElement[];

        // Prioritize eating elements that are not the sticky header
        let targetEl = validTargets.find(el => el.tagName !== 'HEADER');
        if (!targetEl && validTargets.length > 0) {
          targetEl = validTargets[0];
        }

        if (targetEl && !targetEl.hasAttribute('data-eaten')) {
          targetEl.setAttribute('data-eaten', 'true');
          
          playGlitchAudio();
          
          // Smooth glitch and dissolve animation (content smoothly fades out while preserving layout)
          targetEl.style.transition = "opacity 0.75s cubic-bezier(0.16, 1, 0.3, 1), filter 0.75s ease, transform 0.75s cubic-bezier(0.16, 1, 0.3, 1), outline 0.6s ease, color 0.4s ease";
          targetEl.style.opacity = "0.06";
          targetEl.style.pointerEvents = "none";
          if (window.getComputedStyle(targetEl).position === 'static') {
            targetEl.style.position = "relative";
          }
          targetEl.style.filter = "blur(1.5px) grayscale(1) contrast(1.2)";
          targetEl.style.color = "#ef4444";
          targetEl.style.outline = "1.5px dashed rgba(239, 68, 68, 0.4)";
          targetEl.style.outlineOffset = "2px";
          targetEl.style.transform = "scale(0.98)";
          
          // Count corrupted items & calculate System Integrity
          const corruptedCount = document.querySelectorAll('[data-eaten="true"]').length;
          setEatenCount(corruptedCount);
          const integrityLeft = Math.max(0, 100 - corruptedCount * 8);
          setSystemIntegrity(integrityLeft);

          const remainingTextElements = document.querySelectorAll(
            'h1:not([data-eaten]), h2:not([data-eaten]), h3:not([data-eaten]), p:not([data-eaten])'
          );

          if (integrityLeft <= 0 || remainingTextElements.length === 0) {
            setHasCrashed(true);
          }

          nextEating = true;
          nextEatStartTime = now;
          nextSpeed = 0;
        }
      }
      
      if (nextEating) {
        return { 
          ...bug, 
          eating: nextEating, 
          eatStartTime: nextEatStartTime, 
          speed: nextSpeed, 
          lastHitTest: nextLastHitTest, 
          color, 
          isPulsing, 
          size: currentSize 
        };
      }
      
      let newX = bug.x + Math.cos(bug.direction) * nextSpeed;
      let newY = bug.y + Math.sin(bug.direction) * nextSpeed;
      let newDir = bug.direction;
      
      // Bounce off viewport boundaries
      if (newX < 0 || newX > window.innerWidth - currentSize) {
        newDir = Math.PI - newDir;
        newX = Math.max(0, Math.min(newX, window.innerWidth - currentSize));
      }
      if (newY < 0 || newY > window.innerHeight - currentSize) {
        newDir = -newDir;
        newY = Math.max(0, Math.min(newY, window.innerHeight - currentSize));
      }
      
      // Random gentle wander
      if (Math.random() < 0.02 && !isFrozen) {
        newDir += (Math.random() - 0.5);
      }
      
      return { 
        ...bug, 
        x: newX, 
        y: newY, 
        direction: newDir, 
        lastHitTest: nextLastHitTest, 
        size: currentSize, 
        speed: nextSpeed, 
        color, 
        isPulsing 
      };
    });
    
    setDefects([...nextDefects, ...newBugsToSpawn]);
    requestRef.current = requestAnimationFrame(updatePositions);
  }, [isFrozen, playGlitchAudio]);

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
          
          {/* Top Unified HUD Dashboard */}
          <header className="fixed top-3 left-1/2 -translate-x-1/2 flex flex-wrap items-center justify-center gap-2 sm:gap-3 z-[60] pointer-events-auto max-w-[96vw]">
            {/* Left: Score & QA Rank */}
            <div className="flex items-center gap-2.5 bg-paper/95 backdrop-blur-md px-3.5 py-2 rounded-2xl border border-pass text-ink shadow-[4px_4px_0_var(--ink)]">
              <div className="flex items-center gap-2 pr-2.5 border-r border-line">
                <ShieldCheck size={20} className="text-pass animate-pulse" />
                <div>
                  <div className="text-[9px] uppercase font-mono tracking-wider text-muted">Defects Fixed</div>
                  <span className="text-lg font-bold font-mono text-pass">{score}</span>
                </div>
              </div>

              {/* Combo Meter */}
              {combo > 1 && (
                <div className="flex items-center gap-1 px-2 py-0.5 rounded-lg bg-orange-500/15 border border-orange-500/40 text-orange-600 dark:text-orange-400 font-mono text-xs font-bold animate-bounce">
                  <Zap size={13} className="fill-current" />
                  <span>{combo}x</span>
                </div>
              )}

              {/* Rank Chip */}
              <div className="hidden md:flex items-center gap-1.5 pl-1 font-mono text-xs text-muted">
                <Award size={15} className="text-amber-500" />
                <span className="font-semibold text-ink text-xs">{currentRank.title}</span>
                <span className="text-[10px] opacity-70">({currentRank.badge})</span>
              </div>
            </div>

            {/* Center: System Integrity Meter */}
            <div className="flex items-center gap-2.5 bg-paper/95 backdrop-blur-md px-3.5 py-2 rounded-2xl border border-pass text-ink shadow-[4px_4px_0_var(--ink)]">
              <div className="flex flex-col gap-1 w-24 sm:w-32">
                <div className="flex items-center justify-between text-[10px] font-mono">
                  <span className="text-muted flex items-center gap-1">
                    <AlertTriangle size={11} className={systemIntegrity < 40 ? "text-red-500 animate-spin" : "text-amber-500"} />
                    Integrity
                  </span>
                  <span className={`font-bold text-[11px] ${systemIntegrity < 40 ? "text-red-500 font-mono animate-pulse" : "text-pass"}`}>
                    {systemIntegrity}%
                  </span>
                </div>
                {/* Progress track */}
                <div className="h-1.5 w-full bg-line rounded-full overflow-hidden">
                  <div 
                    className={`h-full transition-all duration-300 rounded-full ${
                      systemIntegrity < 30 ? "bg-red-500 animate-pulse" : systemIntegrity < 65 ? "bg-amber-500" : "bg-pass"
                    }`}
                    style={{ width: `${systemIntegrity}%` }}
                  />
                </div>
              </div>

              {eatenCount > 0 && (
                <span className="text-[9px] font-mono text-red-500 bg-red-500/10 px-1.5 py-0.5 rounded border border-red-500/30">
                  {eatenCount} Hacked
                </span>
              )}
            </div>

            {/* Right: Controls (Debugger Breakpoint + Sound + Reset) */}
            <div className="flex items-center gap-1.5 bg-paper/95 backdrop-blur-md px-3 py-2 rounded-2xl border border-pass text-ink shadow-[4px_4px_0_var(--ink)]">
              {/* Breakpoint Powerup Button */}
              <button
                type="button"
                onClick={triggerBreakpoint}
                disabled={breakpoints <= 0 || isFrozen}
                title="Trigger Debugger Breakpoint (Spacebar)"
                className={`flex items-center gap-1 px-2.5 py-1 rounded-xl font-mono text-xs font-bold transition-all ${
                  isFrozen 
                    ? "bg-blue-600 text-white animate-pulse" 
                    : breakpoints > 0 
                      ? "bg-blue-500/15 border border-blue-500/40 text-blue-600 hover:bg-blue-500/25 active:scale-95" 
                      : "opacity-40 cursor-not-allowed bg-line/30 text-muted"
                }`}
              >
                {isFrozen ? <Pause size={13} /> : <Play size={13} />}
                <span>breakpoint;</span>
                <span className="px-1.5 py-0.2 rounded-full bg-blue-600 text-white text-[9px]">
                  {breakpoints}
                </span>
              </button>

              {/* Audio Toggle */}
              <button
                type="button"
                onClick={() => setIsMuted(!isMuted)}
                className="p-1.5 rounded-lg hover:bg-paper-deep text-muted hover:text-ink transition-colors"
                title={isMuted ? "Unmute Sound" : "Mute Sound"}
                aria-label={isMuted ? "Unmute Sound" : "Mute Sound"}
              >
                {isMuted ? <VolumeX size={17} /> : <Volume2 size={17} />}
              </button>

              {/* Refresh / Hotfix Clean Button */}
              <button
                type="button"
                onClick={restoreAllEatenElements}
                className="p-1.5 rounded-lg hover:bg-paper-deep text-muted hover:text-ink transition-colors"
                title="Hotfix: Restore Site DOM Elements"
                aria-label="Hotfix: Restore Site DOM Elements"
              >
                <RefreshCw size={16} />
              </button>
            </div>
          </header>

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
                    className={`${bug.isPulsing ? "animate-pulse" : ""} drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]`}
                  />

                  {/* Threat Indicator Ping for Critical P0 Bugs */}
                  {bug.isPulsing && (
                    <span 
                      className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-red-600 animate-ping pointer-events-none" 
                    />
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
