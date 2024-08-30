import Featured from "./Featured"
import MainComp from "./MainComp"
import { DarkModeContext } from "../DarkModeProvider"
import { useContext } from "react"

export default function Home({ data }) {
    const { isDarkMode } = useContext(DarkModeContext)
    const bgColor = isDarkMode ? "bg-[#201330]" : "bg-white"
    return (
        <main
            className={`flex flex-col items-center justify-center gap-y-10 lg:gap-y-14 
            px-10 pt-8 pb-4 lg:pt-[73px] lg:pb-[18px] ${bgColor}`}
        >
            <MainComp />
            <Featured data={data} />
        </main>
    )
}
