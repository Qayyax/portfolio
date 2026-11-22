"use client";

import { useEffect, useRef, useState } from "react";
import { FaArrowUpRightFromSquare, FaBagShopping, FaChevronDown, FaDog, FaDumbbell } from "react-icons/fa6";
import { ETSY_URL } from "@/app/_data_exports/posters";
import { STORE_URL } from "@/app/_data_exports/socials";

const shops = [
  ...(ETSY_URL
    ? [{ name: "Iron Era", note: "Retro gym posters", href: ETSY_URL, icon: FaDumbbell }]
    : []),
  { name: "Thawtail", note: "Winter gear for dogs", href: STORE_URL, icon: FaDog },
];

export default function ShopMenu() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (event: PointerEvent) => {
      if (!ref.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div ref={ref} className="shop-menu" data-open={open}>
      <button
        type="button"
        className="topbar-cta topbar-shop"
        aria-expanded={open}
        aria-controls="shop-menu-list"
        onClick={() => setOpen((value) => !value)}
      >
        <FaBagShopping aria-hidden /> Shop <FaChevronDown aria-hidden className="shop-menu-caret" />
      </button>
      <ul id="shop-menu-list" className="shop-menu-list" hidden={!open}>
        {shops.map(({ name, note, href, icon: Icon }) => (
          <li key={name}>
            <a href={href} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>
              <Icon aria-hidden className="shop-menu-icon" />
              <span>
                <strong>{name}</strong>
                <small>{note}</small>
              </span>
              <FaArrowUpRightFromSquare aria-hidden className="shop-menu-out" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
