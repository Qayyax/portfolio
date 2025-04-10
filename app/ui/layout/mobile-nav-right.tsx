"use client";

import Hamburger from "@/app/ui/components/nav/Hamburger";
import { useState } from "react";
import NavModal from "../components/nav/NavModal";

export default function MobileLeft() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen((prev) => !prev);
  };

  const closeHamburger = () => {
    setHamburgerOpen(false);
  };

  return (
    <div className="flex md:hidden gap-x-3 items-center">
      <div onClick={toggleHamburger}>{!hamburgerOpen && <Hamburger />}</div>
      {hamburgerOpen && <NavModal closeHamburgerAction={closeHamburger} />}
    </div>
  );
}
