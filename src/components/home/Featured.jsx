import ProjectCard from "../projects/ProjectCard"

export default function Featured({ data }) {
    const featuredProject = data.filter(item => item.featured)

    return (
        <section
            className="flex flex-col items-center justify-center gap-y-12 md:items-start"
        >
            <h2
                className="font-extrabold text-[1.5em] md:text-[2.25em]"
            >Featured Projects</h2>
            <div
                className="flex flex-col items-center justify-center gap-y-12 md:flex-row md:gap-x-9 flex-wrap"
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
