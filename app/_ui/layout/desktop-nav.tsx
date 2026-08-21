"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import navRoutes from "@/app/_data_exports/navroutes";

export default function DesktopNav() {
  const pathname = usePathname();
  return (
    <ul className="flex gap-[26px] text-[0.78rem] tracking-[0.08em] uppercase">
      {navRoutes.map((nav) => {
        const active = pathname === nav.to || pathname.startsWith(nav.to + "/");
        return (
          <li key={nav.to}>
            <Link
              href={nav.to}
              className="transition-opacity duration-150"
              style={{
                opacity: active ? 1 : 0.65,
                borderBottom: active
                  ? `1px solid var(--color-rust)`
                  : "1px solid transparent",
                fontFamily: "var(--font-inter)",
              }}
            >
              {nav.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
