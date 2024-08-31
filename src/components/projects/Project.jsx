import ProjectCard from "./ProjectCard";
import { DarkModeContext } from "../DarkModeProvider"
import { useContext } from "react"

export default function Project({ data }) {
    const { isDarkMode } = useContext(DarkModeContext)
    const bgColor = isDarkMode ? "bg-[#201330]" : "bg-white"

    return (
        <section
            className={`flex flex-col gap-y-10 items-center justify-center md:flex-row md:flex-wrap  md:gap-x-9 md:gap-y-15 ${bgColor} pt-10 md:pt-12`}
        >
            {data.map((item, index) => (
                <ProjectCard
                    key={index}
                    image={item.image}
                    name={item.name}
                    repoURL={item.repoURL}
                    liveURL={item.liveURL}
                />
            ))}
        </section>
    )
}
