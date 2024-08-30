import LiveSite from "./LiveSite";
import Repo from "./Repo";
import { DarkModeContext } from "../DarkModeProvider"
import { useContext } from "react"

export default function ProjectCard({ image, name, repoURL, liveURL }) {
    const { isDarkMode } = useContext(DarkModeContext)
    const shadow = isDarkMode ? "shadow-[0px_0px_10px_0px_#6B4E92]" : "shadow-[0px_0px_10px_0px_#00000029]"

    return (
        <section
            className={`flex flex-col  gap-y-4 rounded-xl p-2 ${shadow}`}
        >
            <a
                href={liveURL}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer"
            >
                <img
                    src={image}
                    alt="project image"
                    className="w-[320px] h-[320px] rounded-2xl shadow-md
                    md:w-[392px] md:h-[392px]"
                />
            </a>
            <div
                className="flex px-2 items-center justify-between w-[320px] md:w-[392px]"
            >
                <LiveSite URL={liveURL} name={name} />
                <Repo URL={repoURL} />
            </div>
        </section>
    )
}
