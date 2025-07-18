import HomeText from "./_ui/components/text/HomeText";
import ProjectCard from "./_ui/components/project/ProjectCard";
import { doto } from "./_ui/fonts";

// You need to check the next.config.ts to change the remote patters of the images configuration
// Maybe when you make the API endpoint for the images

const demoData = {
  name: "Dummy Project",
  description: "This is just to test my component",
  tags: ["React", "TypeScript", "Python"],
  image:
    "https://images.unsplash.com/photo-1742615869881-95b71cee478c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  challenges: "/",
  code: "https://github.com/Qayyax/lazy-vim-config",
  liveSite: "https://tifelinks.vercel.app/",
};

// How to maintain the nav and modal in the other navigations
// TODO:
// - [] See more after the featured projects
//  - [] I am considering removing it though
// - [] Add featured blog
// - [] Adjust your intro text too as well

export default function Home() {
  return (
    <>
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
          Featured Pages
        </h3>
        <ProjectCard
          name={demoData.name}
          description={demoData.description}
          tags={demoData.tags}
          image={demoData.image}
          challenge={demoData.challenges}
          code={demoData.code}
          liveSite={demoData.liveSite}
        />
        {/* See More button goes here*/}
        {/* it would be the same component as the component for navigations*/}
        {/* The component would Link to .... in the website */}
      </section>
    </>
  );
}
