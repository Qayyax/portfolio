"use client";

import MobileNav from "./MobileNav";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { MdClose } from "react-icons/md";
import { NavProperty } from "@/type";

// TODO:
// - design of the navigations * (I guess I would come back to this)
// - then move on to tab and desktop design

const navRoutes: NavProperty[] = [
  { title: "Home", to: "/" }, // would delete this later, or maybe I keep home
  // I don't know if I need the home path
  { title: "About", to: "/about" },
  { title: "My_Space", to: "/my_space" },
  { title: "Projects", to: "/projects" },
  { title: "Store", to: "/store" },
];

type Props = {
  closeHamburgerAction: () => void;
};

export default function NavModal({ closeHamburgerAction }: Props) {
  // I want it to have a glosry feel to it - I think?
  // so black bg, purple accent color on the active nav *
  // Modal, blury undertone, nav components for the mobile modal view
  // would import the mobile Nav component  here to use all the routes
  // Time to style the navigations
  const pathname = usePathname();

  return (
    <div className="h-screen absolute top-0 w-1/2 right-0 border-2 border-red-600">
      <div className="isolate w-full h-full bg-black/90 shadow-lg ring-1 ring-black/5 pt-20 relative">
        <div onClick={closeHamburgerAction} className=" absolute top-4">
          <MdClose className="text-4xl text-purple-500" />
        </div>

        <ul className="flex flex-col gap-4 font-mono text-2xl items-center">
          {navRoutes.map((nav, index) => (
            <li
              key={index}
              className={clsx("some class here later", {
                "border-b-4 border-purple-500": pathname === nav.to, // border bottom purple here when active
              })}
            >
              <MobileNav title={nav.title} to={nav.to} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
