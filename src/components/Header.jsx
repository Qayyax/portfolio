import DarkModeToggle from "./DarkModeToggle";
import Hamburger from "./Hamburger";
import { DarkModeContext } from "./DarkModeProvider";
import { useContext } from "react";
import NavBar from "./NavBar";
import { useLocation } from "react-router-dom";

export default function Header() {
  const { isDarkMode } = useContext(DarkModeContext)
  const textColor = isDarkMode ? "white" : "#201330"
  const location = useLocation()
  const isHomePage = location.pathname === "/"
  const bgColor = isHomePage
    ? (isDarkMode ? "#201330" : "white")
    : (isDarkMode ? "#6B4E92" : "#ECDEFF");
  return (
    <header
      style={{ background: bgColor }}
      className="flex items-center sticky top-0 z-[100] justify-center py-2 pl-5 pr-8 md:py-3"
    >
      <div
        className="flex items-center justify-between w-full max-w-[1250px]"
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
      </div>
    </header>
  )
}
