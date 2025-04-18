import { NavLink } from "react-router-dom";
import { DarkModeContext } from "./DarkModeProvider";
import { useContext } from "react";

export default function NavBar() {
  const { isDarkMode } = useContext(DarkModeContext)
  const shadow = isDarkMode ? "shadow-[0px_0px_10px_0px_#6B4E92]" : "shadow-[0px_0px_10px_0px_#00000029]"

  return (
    <nav className={`${shadow} rounded-full bg-white `}>
      <ul className="flex  text-[#6B6B6B] whitespace-nowrap">
        <NavLink
          to="/"
          className={({ isActive }) => isActive ? "bg-[#ECDEFF] rounded-l-full" : ""}
        >
          <li className="hover:bg-[#ECDEFF] hover:rounded-l-full py-4 px-6">
            Home
          </li></NavLink>

        <NavLink
          to="/project"
          className={({ isActive }) => isActive ? "bg-[#ECDEFF]" : ""}
        >
          <li className="hover:bg-[#ECDEFF]  py-4 px-6">
            Project
          </li></NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) => isActive ? "bg-[#ECDEFF] rounded-r-full" : ""}
        >
          <li className="hover:bg-[#ECDEFF] hover:rounded-r-full py-4 px-6">
            About Me
          </li></NavLink>
      </ul>
    </nav>
  )
}
