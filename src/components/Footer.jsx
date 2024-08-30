import { useContext } from "react";
import { DarkModeContext } from "./DarkModeProvider";

export default function Footer() {
  const { isDarkMode } = useContext(DarkModeContext)
  const headerColor = isDarkMode ? "text-white" : "text-[#201330]"
  const headerSpanColor = isDarkMode ? "text-white" : "text-[#6B4E92]"
  const contactSpanColor = isDarkMode ? "text-white" : "text-[#6B6B6B]"
  const contactColor = isDarkMode ? "text-white" : "text-[#201330]"
  const bgColor = isDarkMode ? "bg-[#201330]" : "bg-white"

  return (
    <footer
      className={`flex flex-col items-center justify-center pt-20 pb-3 ${bgColor}
md:items-start md:px-10 md:pb-4`}
    >
      <h2 className={`${headerColor} font-extrabold text-[1.5em] mb-8 md:text-[2.25em]`}>
        Let&apos;s work together! <span className={headerSpanColor}>Contact Me</span>
      </h2>

      <ul className="flex flex-col gap-y-6 mb-[64px] text-[0.875em] md:text-[1em]">
        <li className="flex gap-x-[26px]">
          <span className={`w-[70px] ${contactSpanColor}`}>EMAIL</span>
          <a href="mailto:qayyax@gmail.com"
            target="_blank"
            className={contactColor}
          >qayyax@gmail.com</a>
        </li>
        <li className="flex gap-x-[26px]">
          <span className={`w-[70px] ${contactSpanColor}`}>LINKEDIN</span>
          <a href="https://www.linkedin.com/in/tife-olatunji-b12729296"
            target="_blank"
            className={contactColor}
          >
            Tife Olatunji
          </a>
        </li>
        <li className="flex gap-x-[26px]">
          <span className={`w-[70px] ${contactSpanColor}`}>GITHUB</span>
          <a
            href="https://www.github.com/qayyax"
            target="_blank"
            className={contactColor}
          >
            @Qayyax</a>
        </li>
      </ul>

      <div
        className="pt-4 px-[9.5px] border-t border-[#D3D3D3] flex flex-col items-center justify-center md:w-full"
      >
        <p className={`${contactSpanColor} text-[0.875em] md:text-[1em]`}>
          <span>&copy;</span> Tife Olatunji. All rights reserved</p>
        <p className={`${isDarkMode ? "text-white" : "text-[#D3D3D3]"} text-[0.625em] md:text-[0.75em]`}>
          Designed by Marienoel Emechebe</p>
      </div>
    </footer>
  )
}
