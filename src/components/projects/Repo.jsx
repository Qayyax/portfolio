import { DarkModeContext } from "../DarkModeProvider"
import { useContext } from "react"

export default function Repo({ URL }) {
    const { isDarkMode } = useContext(DarkModeContext)
    const darkMode = isDarkMode ? "text-white border-white" : "text-[#6B4E92] border-[#6B4E92]"
    return (
        <a
            href={URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`cursor-pointer font-medium text-[0.875em] border ${darkMode} rounded-2xl p-2 hover:border-2`}
        >
            View on Github
        </a>
    )
}
