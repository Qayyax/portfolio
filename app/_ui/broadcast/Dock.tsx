"use client";

import { useRef, type PointerEvent } from "react";
import { socials } from "@/app/_data_exports/socials";

const REACH_PX = 190;
const MAX_LIFT = 0.16;
const MAX_PULL_PX = 12;

export default function Dock() {
  const ref = useRef<HTMLElement>(null);

  const items = () => Array.from(ref.current?.querySelectorAll<HTMLElement>(".dock-item") ?? []);

  const magnetize = (event: PointerEvent<HTMLElement>) => {
    if (event.pointerType === "touch") return;
    for (const item of items()) {
      const box = item.getBoundingClientRect();
      const offset = event.clientX - (box.left + box.width / 2);
      const pull = Math.max(0, 1 - Math.abs(offset) / REACH_PX) ** 2;
      item.style.setProperty("--dock-scale", String(1 + pull * MAX_LIFT));
      item.style.setProperty("--dock-x", `${Math.sign(offset) * pull * MAX_PULL_PX}px`);
      item.style.setProperty("--dock-y", `${-pull * 10}px`);
    }
  };

  const release = () => {
    for (const item of items()) {
      item.style.setProperty("--dock-scale", "1");
      item.style.setProperty("--dock-x", "0px");
      item.style.setProperty("--dock-y", "0px");
    }
  };

  return (
    <nav
      ref={ref}
      className="dock"
      aria-label="Socials"
      onPointerMove={magnetize}
      onPointerLeave={release}
    >
      {socials.map(({ name, action, href, icon: Icon }, index) => (
        <a
          key={name}
          href={href}
          target={href.startsWith("mailto:") ? undefined : "_blank"}
          rel="noopener noreferrer"
          className={index === 0 ? "dock-item dock-primary" : "dock-item"}
          style={{ animationDelay: `${1.05 + index * 0.07}s` }}
        >
          <Icon aria-hidden />
          <span>
            <strong>{name}</strong>
            <small>{action}</small>
          </span>
        </a>
      ))}
    </nav>
  );
}
