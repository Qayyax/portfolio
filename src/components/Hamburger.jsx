import { useContext, useState } from "react";
import { DarkModeContext } from "./DarkModeProvider";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";

export default function Hamburger() {
  const [isOpen, setIsOpen] = useState(false)
  const { isDarkMode } = useContext(DarkModeContext)

  function toggleOpen() {
    setIsOpen(prev => !prev)
  }

  return (
    <>
      <button
        onClick={toggleOpen}
        className={`py-[7px] px-[4.67px] relative z-50`}
      >
        {isOpen ? (
          <IoClose
            style={{ width: "15px", height: "15px" }}
            color="white"
          />
        ) : (
          <RxHamburgerMenu
            style={{ width: "18.67px", height: "14px" }}
            color={isDarkMode ? "#FFFFFF" : "#201330"}
          />
        )}
      </button>
      {isOpen && (
        <>
          <div className="fixed w-[250px] h-svh   backdrop-blur-sm z-30"></div>
          <div className="fixed w-[250px] h-svh bg-[#6B4E92] opacity-90 text-white z-40 p-6">
          </div>
        </>
      )}
    </>
  )
}
