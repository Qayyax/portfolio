import { DarkModeContext } from "../DarkModeProvider";
import { useContext } from "react";
import { FaDownload } from "react-icons/fa6";

export default function Download() {
  const { isDarkMode } = useContext(DarkModeContext)
  const darkMode = isDarkMode ? "text-white border-white" : "text-[#6B4E92] border-[#6B4E92]"

  return (
    <a
      href="/resume.pdf"
      target="_blank"
      className={`flex gap-x-2 items-baseline justify-center cursor-pointer font-medium text-[0.875em] md:text-[1em] border ${darkMode} rounded-2xl py-2 px-4 hover:border-2`}
    >
      Resume
      <FaDownload />
    </a>
  )
}
