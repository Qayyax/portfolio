"use client";

import Hamburger from "@/app/_ui/components/nav/Hamburger";
import { useState } from "react";
import NavModal from "@/app/_ui/components/nav/NavModal";

export default function MobileRight() {
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
