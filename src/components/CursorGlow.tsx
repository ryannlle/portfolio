"use client";

import { useEffect, useRef } from "react";

/**
 * A small iridescent light that trails the cursor. Fixed behind the page
 * content, deliberately faint. Disabled for touch pointers and for anyone who
 * asks for reduced motion.
 */
export default function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (!finePointer || reduced) return;

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight * 0.35;
    let currentX = targetX;
    let currentY = targetY;
    let frame = 0;

    const onMove = (e: PointerEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    const tick = () => {
      currentX += (targetX - currentX) * 0.09;
      currentY += (targetY - currentY) * 0.09;
      el.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
      frame = requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    frame = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      <div
        ref={ref}
        className="absolute -left-[280px] -top-[280px] h-[560px] w-[560px] rounded-full opacity-[0.13] blur-[80px] will-change-transform"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(150,210,255,0.9) 0%, rgba(178,184,255,0.5) 34%, rgba(232,180,255,0.26) 60%, rgba(255,214,179,0.12) 78%, transparent 88%)",
        }}
      />
    </div>
  );
}
