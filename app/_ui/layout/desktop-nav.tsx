"use client";
import DesktopNavBtn from "../components/nav/DesktopNavButton";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import navRoutes from "@/app/_data_exports/navroutes";

export default function DesktopNav() {
  const pathname = usePathname();
  return (
    <div className="hidden md:block">
      <ul className="flex gap-3 font-bold font-mono justify-center items-center">
        {navRoutes.map((nav, index) => (
          <li
            key={index}
            className={clsx("some class here later", {
              "border-4 border-purple-500 rounded-xl px-3": pathname === nav.to, // border bottom purple here when active
            })}
          >
            <DesktopNavBtn to={nav.to} title={nav.title} />
          </li>
        ))}
      </ul>
    </div>
  );
}
