import Iframe from "../../components/my_space/iframe";
import Section from "../../components/my_space/space-sections";
import Anime from "../../components/my_space/anime";
import InterestingApps from "../../components/my_space/interesting-apps";
import interestingApps from "@/app/_data_exports/interestingApps";
import Books from "../../components/my_space/books";
import StudyPlaylist from "../../components/my_space/studyPlaylist";
import ProjectCard from "../../components/project/ProjectCard";

export default function MySpaceMobile() {
  return (
    <section className="p-2 flex flex-col gap-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 justify-center items-center">
        <Section header="My Youtube Video">
          <Iframe />
        </Section>

        <Section header="My Study Playlist">
          <StudyPlaylist />
        </Section>

        <Section header="My Dotfiles">
          <ProjectCard
            name="My Dotfiles"
            description="Some of my configurations"
            tags={["Tmux", "zsh", "AeroSpace", "Ghostty"]}
            image="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            liveSite="https://github.com/Qayyax/dot-files"
            code="https://github.com/Qayyax/dot-files"
          />
        </Section>
      </div>

      <Section header="Books I Enjoyed">
        <p className="italic font-thin">
          Make sure to practice anything you read that has value to you
        </p>
        <Books />
      </Section>

      <Section header="Anime / Manga List">
        <Anime />
      </Section>

      <Section header="Interesting Apps">
        <InterestingApps appData={interestingApps} />
      </Section>
    </section>
  );
}
