import { DarkModeContext } from "../DarkModeProvider"
import { useContext } from "react"

export default function LiveSite({ URL, name }) {
    const { isDarkMode } = useContext(DarkModeContext)
    return (
        <a
            href={URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`cursor-pointer  md:text-[1.5em] ${isDarkMode ? "text-white" : "text-[#201330]"}`}
        >
            {name}
        </a>
    )
}
