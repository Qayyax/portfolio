"use client";

import Hamburger from "@/app/ui/components/nav/Hamburger";
import { useState } from "react";

export default function MobileLeft() {
  // This is where to  implement the state and the toggle of the ham
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen((prev) => !prev);
    console.log(hamburgerOpen);
  };

  // when the ham is open, we need x as well to click so it closes the modal

  return (
    <div
      className="flex md:hidden gap-x-3 items-center"
      onClick={toggleHamburger}
    >
      <Hamburger />
    </div>
  );
}
