import MobileLeft from "@/app/_ui/layout/mobile-nav-right";
import HomeText from "./_ui/components/text/HomeText";
import ProjectCard from "./_ui/components/project/ProjectCard";
import { doto } from "./_ui/fonts";
import DesktopNav from "./_ui/layout/desktop-nav";

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

// How to maintain the nav and modal in the other navigations
// -- use layout.tsx for the navigation between the pages
// TODO:
// - [] layout for the navigation
// - [] footer in the layout as well
//  - [] remember footer is diff for desktop and mobile
// - [] See more after the featured projects
//  - [] I am considering removing it though
// - [] Add featured blog
// - [] Change import to use @ and not ./
// - [] Adjust your text too as well
export default function Home() {
  return (
    <>
      <nav className="flex justify-between items-center border-b-4 border-b-purple-500 p-3 sticky top-0 ">
        <h3 className={`flex gap-2 font-extrabold text-2xl ${doto.className}`}>
          Tife<span className="hidden md:block">Olatunji</span>
        </h3>
        <div>
          {/* putting nav routes here for desktop and tab */}
          {/* Time to work on the desktop version */}
          <MobileLeft />
          <DesktopNav />
        </div>
      </nav>
      <main>
        {/* Here would have the main text */}
        {/* text component goes here */}
        <HomeText />
      </main>

      {/* don't forget to remove the border */}
      <section className="font-mono flex flex-col items-center justify-center px-3 gap-2">
        {/* Here would be the featured project section */}
        {/* It would only be one project */}
        {/* Then see more of my would be the button under it */}
        <h3 className={`font-extrabold text-2xl ${doto.className}`}>
          Featured Project
        </h3>
        <ProjectCard
          name={demoData.name}
          description={demoData.description}
          challenges={demoData.challenges}
          tags={demoData.tags}
          image={demoData.image}
        />
        {/* See More button goes here*/}
        {/* it would be the same component as the component for navigations*/}
        {/* The component would Link to .... in the website */}
      </section>
    </>
  );
}
