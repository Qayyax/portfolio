import ProjectCard from "./ProjectCard";

export default function Project({ data }) {
    return (
        <section
            className="flex flex-col gap-y-10 items-center justify-center
            md:flex-row md:flex-wrap md:px-24 md:gap-x-28"
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
