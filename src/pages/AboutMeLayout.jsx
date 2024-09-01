import { DarkModeContext } from "../components/DarkModeProvider";
import { useContext } from "react";
import Download from "../components/about/Download";

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
        <p className={`${pColor} md:text-[1.5em] w-[350px] md:w-[784px] text-center`}>
          I specialize in creating responsive web applications and enhancing user experiences. My expertise includes JavaScript, TypeScript, React and Python. I have a proven track record in solving complex problems and integrating APIs.
        </p>
        <Download />
      </section>
    </main>
  )
}
