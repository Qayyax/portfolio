import { Link } from "react-router-dom";
import { DarkModeContext } from "../DarkModeProvider";
import { useContext } from "react";

export default function NavButtons() {
    const { isDarkMode } = useContext(DarkModeContext)
    return (
        <div
            className="flex gap-x-8 md:gap-x-4"
        >
            <Link
                className={`text-[0.875em] w-[113px] p-3 rounded-[30px] font-medium md:text-[1em] md:p-4 ${isDarkMode ? "bg-white text-[#6B4E92]" : "bg-[#6B4E92] text-white"} md:w-[134px] flex items-center justify-center`}
            >
                View my Work
            </Link>
            <Link
                className={`text-[0.875em] w-[113px] p-3 rounded-[30px] font-medium md:text-[1em] md:p-4 ${isDarkMode ? "bg-[#6B4E92] text-white" : "bg-[#ECDEFF] text-[#6B4E92]"} md:w-[134px] flex items-center justify-center`}
            >
                About Me
            </Link>
        </div>
    )
}
