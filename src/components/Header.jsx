import DarkModeToggle from "./DarkModeToggle";
import Hamburger from "./Hamburger";
import { DarkModeContext } from "./DarkModeProvider";
import { useContext } from "react";

export default function Header() {
  const { isDarkMode } = useContext(DarkModeContext)
  const bgColor = isDarkMode ? "#201330" : "white"
  const textColor = isDarkMode ? "white" : "#201330"
  return (
    <header
      style={{ background: bgColor }}
      className="flex items-baseline justify-between pt-16 pl-5 pr-8"
    >
      <p
        style={{ color: textColor }}
      >Tife Olatunji</p>
      <div
        className="flex items-center gap-x-3"
      >
        <DarkModeToggle />
        <div><Hamburger /></div>
      </div>
    </header>
  )
}
