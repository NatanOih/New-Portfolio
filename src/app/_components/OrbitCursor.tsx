"use client";

import { useEffect, useRef } from "react";

const ORBITS = [
  { radius: 30, speed: 0.055, size: 12, color: "rgba(244,114,182,0.85)", glow: "rgba(244,114,182,0.7)" },
  { radius: 48, speed: -0.04, size: 8, color: "rgba(34,211,238,0.85)", glow: "rgba(34,211,238,0.7)" },
  { radius: 64, speed: 0.027, size: 6, color: "rgba(250,204,21,0.85)", glow: "rgba(250,204,21,0.7)" },
];

export default function OrbitCursor() {
  const dotRefs = useRef<(HTMLDivElement | null)[]>([]);
  const mouse = useRef({ x: -999, y: -999 });

  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
      return;
    }

    const handleMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };
    window.addEventListener("mousemove", handleMove);

    let frame = 0;
    let rafId: number;
    const animate = () => {
      frame += 1;
      dotRefs.current.forEach((el, i) => {
        if (!el) return;
        const { radius, speed } = ORBITS[i];
        const angle = frame * speed;
        const x = mouse.current.x + Math.cos(angle) * radius;
        const y = mouse.current.y + Math.sin(angle) * radius;
        el.style.transform = `translate(${x}px, ${y}px)`;
      });
      rafId = requestAnimationFrame(animate);
    };
    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[100] hidden sm:block"
    >
      {ORBITS.map((orbit, i) => (
        <div
          key={i}
          ref={(el) => {
            dotRefs.current[i] = el;
          }}
          className="absolute top-0 left-0 rounded-full"
          style={{
            width: orbit.size,
            height: orbit.size,
            marginLeft: -orbit.size / 2,
            marginTop: -orbit.size / 2,
            backgroundColor: orbit.color,
            boxShadow: `0 0 12px 3px ${orbit.glow}`,
          }}
        />
      ))}
    </div>
  );
}
