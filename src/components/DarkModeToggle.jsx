import { useContext } from "react";
import { DarkModeContext } from "./DarkModeProvider";
import { IoIosSunny } from "react-icons/io";
import { FaMoon } from "react-icons/fa";

export default function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext)
  const darkIcon = (
    <div className="bg-[#6B4E92] flex items-center justify-center p-[5.5px] rounded-full shadow-lg md:p-[9px]">
      <FaMoon color="white" className="w-[11px] h-[11px] md:w-[29px] md:h-[29px]" />
    </div>
  )
  const lightIcon = (
    <div className="bg-white flex items-center justify-center p-[5.5px] rounded-full shadow-lg md:p-[9px]">
      <IoIosSunny color="#6B4E92" className="w-[11px] h-[11px] md:w-[29px] md:h-[29px]" />
    </div>
  )

  return (
    <button
      onClick={toggleDarkMode}
      className={`flex items-center rounded-full w-[62px] py-[2.5px] px-[3.5px] transition-all duration-1000 cursor-pointer h-[28px] shadow-inner md:px-[7px] md:py-[5px] md:h-[56px] md:w-[124px]
${isDarkMode ? "justify-start bg-white" : "justify-end bg-[#6B4E92]"}`}
    >
      {isDarkMode ? darkIcon : lightIcon}
    </button>
  )

}
