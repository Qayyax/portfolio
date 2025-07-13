"use client";

import MobileNav from "./MobileNav";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { MdClose } from "react-icons/md";
import { NavProperty } from "@/type";

const navRoutes: NavProperty[] = [
  { title: "Home", to: "/" },
  { title: "About", to: "/about" },
  { title: "My_Space", to: "/my_space" },
  { title: "Projects", to: "/projects" },
  { title: "Store", to: "/store" },
];

type Props = {
  closeHamburgerAction: () => void;
};

export default function NavModal({ closeHamburgerAction }: Props) {
  const pathname = usePathname();

  return (
    <>
      <div>
        {/* left side */}
        {/* when you click this side we close hamburger */}
        <div
          onClick={closeHamburgerAction}
          className="h-screen absolute top-0 w-1/2 left-0 backdrop-blur-[1px] "
        ></div>
        {/* right side */}
        <div className="h-screen absolute top-0 w-1/2 right-0 backdrop-blur-[3px] rounded-l-2xl z-20">
          <div className=" w-full h-full bg-white/90 dark:bg-black/90 shadow-lg ring-4 ring-purple-400/5 pt-20 relative rounded-tl-2xl ">
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
      </div>
    </>
  );
}
