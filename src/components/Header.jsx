import DarkModeToggle from "./DarkModeToggle";
import Hamburger from "./Hamburger";
import { DarkModeContext } from "./DarkModeProvider";
import { useContext } from "react";
import NavBar from "./NavBar";

export default function Header() {
  const { isDarkMode } = useContext(DarkModeContext)
  const bgColor = isDarkMode ? "#201330" : "white"
  const textColor = isDarkMode ? "white" : "#201330"
  return (
    <header
      style={{ background: bgColor }}
      className="flex items-baseline justify-between pt-16 pl-5 pr-8 md:py-9 md:items-center md:px-0"
    >
      <p
        style={{ color: textColor }}
        className="md:text-[1.5em]"
      >Tife Olatunji</p>
      <div className="hidden md:block">
        <NavBar />
      </div>
      <div
        className="flex items-center gap-x-3"
      >
        <DarkModeToggle />
        <div className="md:hidden"><Hamburger /></div>
      </div>
    </header>
  )
}
