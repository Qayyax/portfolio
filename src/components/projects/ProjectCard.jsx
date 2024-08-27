import LiveSite from "./LiveSite";
import Repo from "./Repo";

export default function ProjectCard({ image, name, repoURL, liveURL }) {
    return (
        <section
            className="flex flex-col gap-y-4"
        >
            <img
                src={image}
                alt="project image"
                className="w-[320px] h-[320px] rounded-2xl shadow-md"
            />
            <div
                className="flex px-2 items-center justify-between"
            >
                <LiveSite URL={liveURL} name={name} />
                <Repo URL={repoURL} />
            </div>
        </section>
    )
}
