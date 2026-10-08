"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { Gamepad2, Bug, X, Target, ShieldCheck } from "lucide-react";

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
  colorClass?: string;
  hungerThreshold?: number;
}

const generateBugMessage = (score: number, age: number = 0) => {
  const ACTIONS = ["Isolated", "Detected", "Logged", "Squashed", "Resolved", "Mitigated", "Intercepted"];
  const ISSUES = [
    "memory leak in main thread", "race condition in payment gateway",
    "null pointer exception in checkout", "infinite rendering loop",
    "uncaught promise rejection", "XSS vulnerability vector",
    "unauthorized state mutation", "CSS overflow on mobile",
    "flaky e2e test assertion", "broken OAuth callback",
    "stale cache invalidation", "unhandled WebSocket disconnect",
    "missing loading skeleton", "API timeout fallback failure",
    "database deadlock scenario", "incorrect locale mapping",
    "hydration mismatch on SSR", "malformed JSON payload",
    "accessibility ARIA label missing", "unoptimized bundle size",
    "z-index context stacking issue", "JWT token expiration edge case",
    "incorrect timezone offset", "CORS policy violation",
    "service worker cache miss", "layout thrashing on scroll",
    "uncontrolled form input state", "missing error boundary",
    "duplicate DOM ID collision"
  ];
  let priority = "P3 [Low]";
  let icon = "✅";
  let urgency = "routine.";
  
  if (age > 12000) { priority = "P0 [Critical]"; icon = "🔥"; urgency = "before system crash!"; }
  else if (age > 8000) { priority = "P1 [High]"; icon = "🚨"; urgency = "preventing data loss."; }
  else if (age > 4000) { priority = "P2 [Medium]"; icon = "⚠️"; urgency = "improving stability."; }
  
  const action = ACTIONS[(score * 3) % ACTIONS.length];
  const issue = ISSUES[(score * 7) % ISSUES.length];
  
  const baseMessage = `${icon} ${priority}: ${action} ${issue}`;
  return age > 4000 ? `${baseMessage} ${urgency}` : `${baseMessage}.`;
};

const playGlitchSound = () => {
  try {
    const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();
    const osc = ctx.createOscillator();
    const gainNode = ctx.createGain();
    
    osc.type = 'sawtooth';
    // Digital glitch: random rapid frequency jumps
    osc.frequency.setValueAtTime(100, ctx.currentTime);
    osc.frequency.linearRampToValueAtTime(800, ctx.currentTime + 0.05);
    osc.frequency.linearRampToValueAtTime(50, ctx.currentTime + 0.1);
    osc.frequency.linearRampToValueAtTime(300, ctx.currentTime + 0.15);
    
    gainNode.gain.setValueAtTime(0.1, ctx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.2);
    
    osc.connect(gainNode);
    gainNode.connect(ctx.destination);
    
    osc.start();
    osc.stop(ctx.currentTime + 0.2);
  } catch (e) {}
};

const playResolveSound = () => {
  try {
    const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();
    
    // Double "ding" success sound (like a ticket being resolved)
    const osc1 = ctx.createOscillator();
    const gainNode1 = ctx.createGain();
    osc1.type = 'sine';
    osc1.frequency.setValueAtTime(800, ctx.currentTime);
    gainNode1.gain.setValueAtTime(0.1, ctx.currentTime);
    gainNode1.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.1);
    osc1.connect(gainNode1);
    gainNode1.connect(ctx.destination);
    osc1.start(ctx.currentTime);
    osc1.stop(ctx.currentTime + 0.1);
    
    const osc2 = ctx.createOscillator();
    const gainNode2 = ctx.createGain();
    osc2.type = 'sine';
    osc2.frequency.setValueAtTime(1200, ctx.currentTime + 0.1);
    gainNode2.gain.setValueAtTime(0, ctx.currentTime);
    gainNode2.gain.setValueAtTime(0.1, ctx.currentTime + 0.1);
    gainNode2.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.3);
    osc2.connect(gainNode2);
    gainNode2.connect(ctx.destination);
    osc2.start(ctx.currentTime + 0.1);
    osc2.stop(ctx.currentTime + 0.3);
  } catch (e) {}
};

export function QaGame() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasCrashed, setHasCrashed] = useState(false);
  const [score, setScore] = useState(0);
  const [defects, setDefects] = useState<Defect[]>([]);
  const [particles, setParticles] = useState<{ id: string; x: number; y: number }[]>([]);
  const [currentFact, setCurrentFact] = useState<{ text: string; id: number } | null>(null);
  
  const requestRef = useRef<number>(null);
  const defectsRef = useRef<Defect[]>([]);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  const scoreRef = useRef(0);
  
  // Keep refs in sync
  useEffect(() => {
    defectsRef.current = defects;
    scoreRef.current = score;
  }, [defects, score]);

  const squashDefect = useCallback((id: string, x: number, y: number) => {
    playResolveSound();
    
    // Find the bug to get its age
    const targetBug = defectsRef.current.find(b => b.id === id);
    const age = targetBug ? Date.now() - targetBug.spawnTime : 0;
    
    setDefects(prev => prev.map(bug => bug.id === id ? { ...bug, squashed: true, scanning: false } : bug));
    
    setScore(s => {
      const newScore = s + 1;
      // Show a professional bug report fact on every squash
      setCurrentFact({ text: generateBugMessage(newScore, age), id: Date.now() });
      return newScore;
    });
    
    // Create explosion particles
    const newParticles = Array.from({ length: 5 }).map(() => ({
      id: Math.random().toString(36).substring(7),
      x: x,
      y: y
    }));
    setParticles(prev => [...prev, ...newParticles]);
    
    setTimeout(() => {
      setDefects(prev => prev.filter(bug => bug.id !== id));
    }, 500); // Wait for squash animation
    
    setTimeout(() => {
      setParticles(prev => prev.filter(p => !newParticles.find(np => np.id === p.id)));
    }, 800);
  }, []);

  const handlePointerEnter = useCallback((bugId: string) => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    
    setDefects(prev => prev.map(b => b.id === bugId ? { ...b, scanning: true } : b));

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

  const spawnDefect = useCallback(() => {
    if (defectsRef.current.length >= 5) return; // max bugs
    const margin = 50;
    const x = margin + Math.random() * (window.innerWidth - margin * 2);
    const y = margin + Math.random() * (window.innerHeight - margin * 2);
    
    // Speed scales up with player's score (up to 3x base speed)
    const scoreMultiplier = 1 + Math.min(scoreRef.current * 0.1, 2);
    const initialSpeed = (1 + Math.random() * 2) * scoreMultiplier;
    
    const baseSize = 32 + Math.random() * 24; // 32 to 56px
    const newDefect: Defect = {
      id: Math.random().toString(36).substring(7),
      x,
      y,
      squashed: false,
      eating: false,
      spawnTime: Date.now(),
      originalSpeed: initialSpeed,
      size: baseSize,
      baseSize,
      speed: initialSpeed,
      direction: Math.random() * Math.PI * 2,
        hungerThreshold: 8000 + Math.random() * 8000,
      };
    
    setDefects(prev => [...prev, newDefect]);
  }, []);

  const updatePositions = useCallback(() => {
      const now = Date.now();
      const newBugsToSpawn: Defect[] = [];
      const nextDefects = defectsRef.current.map(bug => {
      if (bug.squashed) return bug;
      
      let colorClass = "text-yellow-300";
      let currentSize = bug.baseSize;
      let activeSpeed = bug.originalSpeed;
      const age = now - bug.spawnTime;
      
      // Reactive properties based on hunger
      const threshold = bug.hungerThreshold || 12000;
      if (age > threshold * 0.33) { colorClass = "text-orange-400"; currentSize = bug.baseSize * 1.15; activeSpeed = bug.originalSpeed * 1.2; }
      if (age > threshold * 0.66) { colorClass = "text-red-500"; currentSize = bug.baseSize * 1.35; activeSpeed = bug.originalSpeed * 1.5; }
      if (age > threshold) { colorClass = "text-red-600 animate-pulse"; currentSize = bug.baseSize * 1.6; activeSpeed = bug.originalSpeed * 2.0; }
      
      if (bug.eating) {
        if (now - (bug.eatStartTime || 0) > 1000) {
          // Finished eating, spawn a new low priority bug
          const scoreMultiplier = 1 + Math.min(scoreRef.current * 0.1, 2);
          const initialSpeed = (1 + Math.random() * 2) * scoreMultiplier;
          const baseSize = 32 + Math.random() * 24;
          newBugsToSpawn.push({
            id: Math.random().toString(36).substring(7),
            x: bug.x,
            y: bug.y,
            squashed: false,
            eating: false,
            spawnTime: now,
            originalSpeed: initialSpeed,
            size: baseSize,
            baseSize,
            speed: initialSpeed,
            direction: Math.random() * Math.PI * 2,
            hungerThreshold: 8000 + Math.random() * 8000,
          });

          // The original critical bug keeps its properties and works the same, but resets hunger
          return { 
            ...bug, 
            eating: false, 
            originalSpeed: bug.originalSpeed * 1.2,
            size: bug.size * 1.3, 
            spawnTime: now,
            colorClass: "text-yellow-300"
          };
        }
        colorClass = "animate-[pulse_0.2s_ease-in-out_infinite] scale-125 text-red-600";
        return { ...bug, colorClass }; // Stay still while eating
      }

      let nextLastHitTest = bug.lastHitTest || 0;
      let nextEating: boolean | undefined = bug.eating;
      let nextEatStartTime = bug.eatStartTime;
      let nextSpeed = activeSpeed;

      // Check hunger (10-15s), throttle hit testing to every 500ms to prevent browser crash
      if (age > threshold && !bug.scanning && (now - nextLastHitTest > 500)) {
        nextLastHitTest = now;
        const elements = document.elementsFromPoint(bug.x + bug.size / 2, bug.y + bug.size / 2);
        const validTargets = elements.filter(el => {
          const tag = el.tagName.toUpperCase();
          if (tag === 'BODY' || tag === 'HTML' || tag === 'MAIN' || tag === 'HEAD') return false;
          if (el.id === '__next' || el.id === 'root') return false;
          if (el.closest('.z-\\[60\\]') || el.closest('.site-cursor')) return false;
          
          return true;
        }) as HTMLElement[];

        // Prioritize eating elements that are not the header (e.g. content scrolling underneath it)
        let targetEl = validTargets.find(el => el.tagName !== 'HEADER');
        if (!targetEl && validTargets.length > 0) {
          targetEl = validTargets[0];
        }

        if (targetEl && !targetEl.hasAttribute('data-eaten')) {
          targetEl.setAttribute('data-eaten', 'true');
          
          playGlitchSound();
          
          // Apply inline styles to guarantee it overrides Tailwind classes
          targetEl.style.transition = "all 0.1s steps(2)";
          targetEl.style.opacity = "0.7";
          targetEl.style.pointerEvents = "none";
          if (window.getComputedStyle(targetEl).position === 'static') {
            targetEl.style.position = "relative";
          }
          targetEl.style.filter = "contrast(1.5) sepia(1) hue-rotate(-50deg) saturate(3)";
          
          
          targetEl.style.color = "#ef4444";
          
          nextEating = true;
          nextEatStartTime = now;
          nextSpeed = 0;
        }
      }
      
      if (nextEating) {
        return { ...bug, eating: nextEating, eatStartTime: nextEatStartTime, speed: nextSpeed, lastHitTest: nextLastHitTest, colorClass, size: currentSize };
      }
      
      let newX = bug.x + Math.cos(bug.direction) * nextSpeed;
      let newY = bug.y + Math.sin(bug.direction) * nextSpeed;
      let newDir = bug.direction;
      
      // Bounce off walls
      if (newX < 0 || newX > window.innerWidth - currentSize) {
        newDir = Math.PI - newDir;
        newX = Math.max(0, Math.min(newX, window.innerWidth - currentSize));
      }
      if (newY < 0 || newY > window.innerHeight - currentSize) {
        newDir = -newDir;
        newY = Math.max(0, Math.min(newY, window.innerHeight - currentSize));
      }
      
      // Random direction change sometimes
      if (Math.random() < 0.02) {
        newDir += (Math.random() - 0.5);
      }
      
      return { ...bug, x: newX, y: newY, direction: newDir, lastHitTest: nextLastHitTest, size: currentSize };
    });
    
    setDefects([...nextDefects, ...newBugsToSpawn]);
      requestRef.current = requestAnimationFrame(updatePositions);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.documentElement.dataset.game = "on";
      let timeoutId: NodeJS.Timeout;
        const scheduleNext = () => {
          timeoutId = setTimeout(() => {
            spawnDefect();
            scheduleNext();
          }, 500 + Math.random() * 2000);
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
      setCurrentFact(null);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
      delete document.documentElement.dataset.game;
      
      // Restore all eaten elements to normal by clearing inline styles
      document.querySelectorAll('[data-eaten="true"]').forEach(el => {
        const targetEl = el as HTMLElement;
        targetEl.removeAttribute('data-eaten');
        targetEl.style.transition = "";
        targetEl.style.opacity = "";
        targetEl.style.pointerEvents = "";
        targetEl.style.position = "";
        targetEl.style.filter = "";
        targetEl.style.boxShadow = "";
        targetEl.style.backgroundColor = "";
        targetEl.style.color = "";
      });
    }
  }, [isOpen, spawnDefect, updatePositions]);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="press fixed left-5 bottom-5 z-[60] inline-flex h-12 w-12 items-center justify-center border border-pass bg-paper text-pass shadow-[4px_4px_0_var(--ink)] hover:bg-pass-fill hover:text-on-band"
        aria-label={isOpen ? "Close QA Defect Hunter Game" : "Play QA Defect Hunter Game"}
        title="QA Mini-game"
      >
        {isOpen ? <X size={20} strokeWidth={1.75} /> : <Gamepad2 size={20} strokeWidth={1.75} />}
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 pointer-events-none overflow-hidden selection:bg-transparent">
          {/* Game HUD */}
          <div className="fixed top-6 left-6 flex items-center gap-2 z-[60] pointer-events-none bg-paper/90 backdrop-blur-sm px-4 py-2 rounded-full border border-pass text-pass shadow-[4px_4px_0_var(--ink)]">
            <ShieldCheck size={20} />
            <span className="text-xl font-bold font-mono">{score}</span>
          </div>

          {/* Game Area */}
          <div className="absolute inset-0">
            {defects.map(bug => (
              <button
                key={bug.id}
                onClick={() => squashDefect(bug.id, bug.x, bug.y)}
                onPointerEnter={() => handlePointerEnter(bug.id)}
                onPointerLeave={() => handlePointerLeave(bug.id)}
                className="absolute flex items-center justify-center transition-transform pointer-events-auto group border-none bg-transparent outline-none ring-0 focus:outline-none focus:ring-0"
                style={{
                  left: bug.x,
                  top: bug.y,
                  width: bug.size,
                  height: bug.size,
                  transform: bug.squashed ? "scale(0)" : "scale(1)",
                  transitionDuration: bug.squashed ? "400ms" : "0ms",
                  opacity: bug.squashed ? 0 : 1,
                  color: "rgb(239, 68, 68)", // text-red-500
                  rotate: `${(bug.direction * 180) / Math.PI + 90}deg`,
                  cursor: "crosshair"
                }}
                aria-label="Squash bug"
              >
                <Bug size={bug.size} strokeWidth={1.5} className={
                  bug.colorClass || "text-yellow-300"
                } />
                
              </button>
            ))}

            {/* Particles */}
            {particles.map((p, i) => {
              const tx = (Math.random() - 0.5) * 150;
              const ty = (Math.random() - 0.5) * 150;
              return (
                <div
                  key={`${p.id}-${i}`}
                  className="absolute h-3 w-3 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.8)] pointer-events-none"
                  style={{
                    left: p.x + 16,
                    top: p.y + 16,
                    animation: `explode 0.8s cubic-bezier(0.1, 0.8, 0.3, 1) forwards`,
                    animationDelay: `${(i % 5) * 0.02}s`,
                    transformOrigin: "center",
                    "--tx": `${tx}px`,
                    "--ty": `${ty}px`,
                  } as React.CSSProperties}
                />
              );
            })}
          </div>

          {score === 0 && defects.length === 0 && (
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-pass/50 animate-pulse font-mono pointer-events-none bg-paper/80 backdrop-blur p-4 rounded-xl border border-pass/30">
              <Target size={32} className="mx-auto mb-2 opacity-50" />
              <p className="text-lg">Waiting for defects...</p>
            </div>
          )}

          {currentFact && (
            <div
              key={currentFact.id}
              className="fixed bottom-24 right-5 p-3 bg-ink text-paper font-mono text-xs sm:text-sm border border-pass rounded-lg shadow-[4px_4px_0_var(--pass)] pointer-events-none w-72 fact-toast z-[60] flex items-start gap-3 text-left"
            >
              <span className="text-lg leading-tight shrink-0">💡</span>
              <span className="leading-snug">{currentFact.text}</span>
            </div>
          )}
          
          <style dangerouslySetInnerHTML={{__html: `
            @keyframes explode {
              0% { transform: translate(0, 0) scale(1); opacity: 1; }
              100% { 
                transform: translate(var(--tx), var(--ty)) scale(0);
                opacity: 0;
              }
            }
            @keyframes flyToScore {
              0% { transform: translateY(20px) scale(0.9); opacity: 0; }
              10% { transform: translateY(0) scale(1); opacity: 1; }
              70% { transform: translateY(0) scale(1); opacity: 1; }
              100% { transform: translate(calc(-100vw + 300px), calc(-100vh + 130px)) scale(0.1); opacity: 0; }
            }
            .fact-toast {
              animation: flyToScore 3.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
            }
            .defected-element {
              transition: all 0.1s steps(2) !important;
              opacity: 0.7 !important;
              pointer-events: none !important;
              position: relative !important;
              filter: contrast(1.5) sepia(1) hue-rotate(-50deg) saturate(3) !important;
              box-shadow: 0 0 0 1px red, inset 0 0 0 1px red !important;
              background-color: rgba(239, 68, 68, 0.1) !important;
            }
          `}} />
        </div>
      )}
    </>
  );
}

