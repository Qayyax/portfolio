import MobileLeft from "@/app/ui/layout/mobile-nav-right";
import HomeText from "./ui/components/text/HomeText";
import ProjectCard from "./ui/components/project/ProjectCard";

// You need to check the next.config.ts to change the remote patters of the images configuration
// Maybe when you make the API endpoint for the images

const demoData = {
  name: "Dummy Project",
  description: "This is just to test my component",
  challenges:
    "In this project, I faced the following challenges. I didn't see bla bla ...",
  tags: ["React", "TypeScript", "Python"],
  image:
    "https://images.unsplash.com/photo-1742615869881-95b71cee478c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
};

export default function Home() {
  return (
    <>
      <nav className="flex justify-between items-center border-b-2 border-b-purple-500 p-3 sticky">
        <h3 className="flex gap-1 font-extrabold text-2xl">
          Tife <span className="hidden md:block">Olatunji</span>
        </h3>
        <div>
          {/* putting darkmode and hamburger here for mobile*/}
          {/* I may not want to implement darkmode anymore*/}
          {/* putting darkmode and nav routes here for desktop and tab*/}
          <MobileLeft />
        </div>
      </nav>
      <main>
        {/* Here would have the main text */}
        {/* text component goes here */}
        <HomeText />
      </main>
      <section>
        {/* Here would be the featured project section */}
        {/* It would only be one project */}
        {/* Then see more of my would be the button under it */}
        <ProjectCard
          name={demoData.name}
          description={demoData.description}
          challenges={demoData.challenges}
          tags={demoData.tags}
          image={demoData.image}
        />
      </section>
    </>
  );
}
