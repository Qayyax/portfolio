import { DarkModeContext } from "../components/DarkModeProvider";
import { useContext } from "react";

export default function AboutMeLayout() {
  const { isDarkMode } = useContext(DarkModeContext)
  const bgColor = isDarkMode ? "bg-[#6B4E92]" : "bg-[#ECDEFF]"
  const textColor = isDarkMode ? "text-white" : "text-[#201330]"
  const pColor = isDarkMode ? "text-[#D3D3D3]" : "text-[#6B6B6B]"

  return (
    <main>
      <section
        className={`flex flex-col items-center justify-center gap-y-2 md:gap-y-4 ${bgColor} py-[40px]`}
      >
        <h1 className={`${textColor} font-extrabold text-[2.5em] md:text-[3.75em]`}>
          About Me
        </h1>
        <p className={`${pColor} md:text-[1.5em]`}>
          A gallery of some of my frontend projects
        </p>
      </section>
    </main>
  )
}
