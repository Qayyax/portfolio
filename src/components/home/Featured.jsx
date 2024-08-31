import ProjectCard from "../projects/ProjectCard"
import { DarkModeContext } from "../DarkModeProvider"
import { useContext } from "react"

export default function Featured({ data }) {
    const featuredProject = data.filter(item => item.featured)
    const { isDarkMode } = useContext(DarkModeContext)

    return (
        <section
            className="flex flex-col items-center justify-center gap-y-12 lg:items-start"
        >
            <h2
                className={`font-extrabold text-[1.5em] md:text-[2.25em] ${isDarkMode ? "text-white" : "text-[#201330]"}`}
            >Featured Projects</h2>
            <div
                className="flex flex-col items-center justify-center gap-y-10 md:flex-row md:gap-x-8 flex-wrap"
            >
                {featuredProject.map((item, index) => (
                    <ProjectCard
                        key={index}
                        image={item.image}
                        name={item.name}
                        repoURL={item.repoURL}
                        liveURL={item.liveURL}
                    />
                ))}
            </div>
        </section>
    )
}
