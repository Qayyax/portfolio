"use client";

import Hamburger from "@/app/_ui/components/nav/Hamburger";
import { useEffect, useState } from "react";
import NavModal from "@/app/_ui/components/nav/NavModal";

export default function MobileRight() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen((prev) => !prev);
  };

  const closeHamburger = () => {
    setHamburgerOpen(false);
  };

  // Disable scroll when modal is open
  useEffect(() => {
    if (hamburgerOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [hamburgerOpen]);

  return (
    <div className="flex md:hidden gap-x-3 items-center">
      <div onClick={toggleHamburger}>{!hamburgerOpen && <Hamburger />}</div>
      {hamburgerOpen && <NavModal closeHamburgerAction={closeHamburger} />}
    </div>
  );
}
