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
  originalSpeed: number;
  spawnTime: number;
  size: number;
  speed: number;
  direction: number; // angle in radians
}

const QA_FACTS = [
  "Specializes in Playwright & UI Automation.",
  "Led RBI audit verifications for FinTechs.",
  "Tested UPI 2.0 (Intent/Collect) and NPCI compliance.",
  "Automated Gold loan payment flows via Razorpay.",
  "Extensive testing of DigiLocker eKYC & Penny Drop.",
  "Expert in Root Cause Analysis (RCA).",
  "Ensures zero defects in production releases.",
  "Tested cross-platform mobile apps for Android & iOS.",
  "Managed DR/DC failover drill testing.",
  "Validates complex Business Rules and API responses."
];

export function QaGame() {
  const [isOpen, setIsOpen] = useState(false);
  const [score, setScore] = useState(0);
  const [defects, setDefects] = useState<Defect[]>([]);
  const [particles, setParticles] = useState<{ id: string; x: number; y: number }[]>([]);
  const [currentFact, setCurrentFact] = useState<{ text: string; id: number } | null>(null);
  
  const requestRef = useRef<number>(null);
  const defectsRef = useRef<Defect[]>([]);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  // Keep ref in sync
  useEffect(() => {
    defectsRef.current = defects;
  }, [defects]);

  const squashDefect = useCallback((id: string, x: number, y: number) => {
    setDefects(prev => prev.map(bug => bug.id === id ? { ...bug, squashed: true, scanning: false } : bug));
    
    setScore(s => {
      const newScore = s + 1;
      // Show a fact on every squash
      setCurrentFact({ text: QA_FACTS[newScore % QA_FACTS.length], id: Date.now() });
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
    }, 1200);
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
    
    const initialSpeed = 1 + Math.random() * 2;
    const newDefect: Defect = {
      id: Math.random().toString(36).substring(7),
      x,
      y,
      squashed: false,
      eating: false,
      spawnTime: Date.now(),
      originalSpeed: initialSpeed,
      size: 32 + Math.random() * 24, // 32 to 56px
      speed: initialSpeed,
      direction: Math.random() * Math.PI * 2,
    };
    
    setDefects(prev => [...prev, newDefect]);
  }, []);

  const updatePositions = useCallback(() => {
    const now = Date.now();
    setDefects(prev => prev.map(bug => {
      if (bug.squashed) return bug;
      
      if (bug.eating) {
        if (now - (bug.eatStartTime || 0) > 1000) {
          // Finished eating, become larger and move again
          return { 
            ...bug, 
            eating: false, 
            speed: bug.originalSpeed * 1.5, 
            size: bug.size * 1.3, 
            spawnTime: now 
          };
        }
        return bug; // Stay still while eating
      }

      // Check hunger (10-15s)
      if (now - bug.spawnTime > 12000 && !bug.scanning) {
        const elements = document.elementsFromPoint(bug.x + bug.size / 2, bug.y + bug.size / 2);
        const targetEl = elements.find(el => 
          el.tagName !== 'BODY' && 
          el.tagName !== 'HTML' && 
          el.tagName !== 'DIV' && 
          el.tagName !== 'MAIN' &&
          el.tagName !== 'SECTION' &&
          !el.closest('.z-50') &&
          !el.closest('.site-cursor')
        ) as HTMLElement | undefined;

        if (targetEl && !targetEl.hasAttribute('data-eaten')) {
          targetEl.setAttribute('data-eaten', 'true');
          targetEl.style.transition = "all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)";
          targetEl.style.transform = "scale(0) rotate(15deg) skewX(20deg)";
          targetEl.style.opacity = "0";
          targetEl.style.filter = "blur(8px) sepia(1) hue-rotate(-50deg) saturate(3)";
          targetEl.style.pointerEvents = "none";
          
          return { ...bug, eating: true, eatStartTime: now, speed: 0 };
        }
      }
      
      let newX = bug.x + Math.cos(bug.direction) * bug.speed;
      let newY = bug.y + Math.sin(bug.direction) * bug.speed;
      let newDir = bug.direction;
      
      // Bounce off walls
      if (newX < 0 || newX > window.innerWidth - bug.size) {
        newDir = Math.PI - newDir;
        newX = Math.max(0, Math.min(newX, window.innerWidth - bug.size));
      }
      if (newY < 0 || newY > window.innerHeight - bug.size) {
        newDir = -newDir;
        newY = Math.max(0, Math.min(newY, window.innerHeight - bug.size));
      }
      
      // Random direction change sometimes
      if (Math.random() < 0.02) {
        newDir += (Math.random() - 0.5);
      }
      
      return { ...bug, x: newX, y: newY, direction: newDir };
    }));
    
    requestRef.current = requestAnimationFrame(updatePositions);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.documentElement.dataset.game = "on";
      const interval = setInterval(spawnDefect, 1500);
      requestRef.current = requestAnimationFrame(updatePositions);
      return () => {
        clearInterval(interval);
        if (requestRef.current) cancelAnimationFrame(requestRef.current);
        delete document.documentElement.dataset.game;
      };
    } else {
      setDefects([]);
      setScore(0);
      setCurrentFact(null);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
      delete document.documentElement.dataset.game;
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
          <div className="absolute top-6 right-6 flex items-center gap-2 z-[60] pointer-events-none bg-paper/90 backdrop-blur-sm px-4 py-2 rounded-full border border-pass text-pass shadow-[4px_4px_0_var(--ink)]">
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
                className="absolute flex items-center justify-center transition-transform pointer-events-auto group"
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
                  bug.eating ? "animate-[spin_0.3s_linear_infinite] text-green-500 drop-shadow-[0_0_20px_rgba(34,197,94,0.8)]" : 
                  !bug.squashed ? "animate-pulse drop-shadow-[0_0_15px_rgba(239,68,68,0.6)]" : ""
                } />
                
                {/* Focusing ring for auto-detect */}
                {!bug.squashed && (
                  <div 
                    className="absolute inset-[-12px] border-2 border-pass rounded-full"
                    style={{
                      transform: bug.scanning ? "scale(0.5)" : "scale(1.5)",
                      opacity: bug.scanning ? 1 : 0,
                      transition: bug.scanning ? "transform 1.2s linear, opacity 0.2s" : "transform 0.2s, opacity 0.2s",
                    }}
                  />
                )}
                
                {/* Crosshair effect when hovering over bug */}
                {!bug.squashed && !bug.scanning && (
                  <div className="absolute inset-[-10px] border border-red-500/0 group-hover:border-red-500/50 rounded-full transition-colors" />
                )}
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
            @keyframes floatUp {
              0% { transform: translateY(20px); opacity: 0; }
              15% { transform: translateY(0); opacity: 1; }
              85% { transform: translateY(0); opacity: 1; }
              100% { transform: translateY(-20px); opacity: 0; }
            }
            .fact-toast {
              animation: floatUp 3.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
            }
          `}} />
        </div>
      )}
    </>
  );
}
