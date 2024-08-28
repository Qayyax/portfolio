import { useContext } from "react";
import { DarkModeContext } from "./DarkModeProvider";
import { IoIosSunny} from "react-icons/io";
import { FaMoon } from "react-icons/fa";

export default function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext)
  const darkIcon = (
    <div className="bg-[#6B4E92] flex items-center justify-center p-[5.5px] rounded-full">
      <FaMoon color="white" style={{ width: "10.95px", height: "11px" }} />
    </div>
  )
  const lightIcon = (
    <div className="bg-white flex items-center justify-center p-[5.5px] rounded-full">
      <IoIosSunny color="#6B4E92" style={{ width: "10.95px", height: "11px" }} />
    </div>
  )

  return (
    <button
      onClick={toggleDarkMode}
      className={`flex items-center rounded-full w-[62px] py-[2.5px] px-[3.5px] transition-all duration-300 cursor-pointer
${isDarkMode ? "justify-start bg-white" : "justify-end bg-[#6B4E92]"}`}
    >
      {isDarkMode ? darkIcon : lightIcon}
    </button>
  )

}
