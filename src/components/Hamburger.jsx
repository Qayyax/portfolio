import { useContext, useState } from "react";
import { DarkModeContext } from "./DarkModeProvider";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

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
            style={{ width: "40px", height: "40px" }}
            color="white"
          />
        ) : (
          <RxHamburgerMenu
            style={{ width: "26px", height: "26px" }}
            color={isDarkMode ? "#FFFFFF" : "#201330"}
          />
        )}
      </button>
      {isOpen && (
        <>
          <div className="absolute w-[250px] top-0 h-screen backdrop-blur-sm z-30"></div>
          <div className="absolute w-[250px] top-0 h-screen bg-[#6B4E92] opacity-90 text-white z-40 p-6">
            <nav className="flex flex-col pt-[164px] pl-[39px] text-[1.5em]">
              <ul className="flex flex-col gap-y-10">
                <li>
                  <Link>Home</Link>
                </li>
                <li>
                  <Link>Projects</Link>
                </li>
                <li>
                  <Link>About Me</Link>
                </li>
              </ul>
            </nav>
          </div>
        </>
      )}
    </>
  )
}
