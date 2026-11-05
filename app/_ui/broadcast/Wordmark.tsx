"use client";

import { useEffect, useRef } from "react";

const WORD = "TIFELOGS";

export default function Wordmark() {
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    let frame = 0;
    const onMove = (event: PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const el = ref.current;
        if (!el) return;
        const box = el.getBoundingClientRect();
        el.style.setProperty("--spot-x", `${event.clientX - box.left}px`);
        el.style.setProperty("--spot-y", `${event.clientY - box.top}px`);
        el.style.setProperty("--spot-on", "1");
      });
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  return (
    <h1 ref={ref} className="wordmark" aria-label="TifeLogs">
      <span className="wordmark-letters" aria-hidden>
        {WORD.split("").map((letter, index) => (
          <span key={index} style={{ animationDelay: `${0.6 + ((index * 3) % WORD.length) * 0.07}s` }}>
            {letter}
          </span>
        ))}
      </span>
      <span className="wordmark-sweep" aria-hidden>
        {WORD}
      </span>
      <span className="wordmark-spot" aria-hidden>
        {WORD}
      </span>
    </h1>
  );
}
