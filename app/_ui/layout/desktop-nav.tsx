"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import navRoutes from "@/app/_data_exports/navroutes";
import clsx from "clsx";

export default function DesktopNav() {
  const pathname = usePathname();
  return (
    <ul className="flex gap-3 font-bold font-mono justify-center items-center">
      {navRoutes.map((nav) => {
        const isAnchor = nav.to.startsWith("/#");
        const active =
          !isAnchor &&
          (pathname === nav.to || pathname.startsWith(nav.to + "/"));
        return (
          <li
            key={nav.to}
            className={clsx({
              "border-x-2 border-purple-500 rounded-lg px-3": active,
            })}
          >
            {isAnchor ? (
              <a href={nav.to} className="hover:text-purple-500 transition-colors">
                {nav.title}
              </a>
            ) : (
              <Link href={nav.to} className="hover:text-purple-500 transition-colors">
                {nav.title}
              </Link>
            )}
          </li>
        );
      })}
    </ul>
  );
}
