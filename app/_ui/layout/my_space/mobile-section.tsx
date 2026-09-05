import Iframe from "../../components/my_space/iframe";
import Section from "../../components/my_space/space-sections";
import Anime from "../../components/my_space/anime";
import InterestingApps from "../../components/my_space/interesting-apps";
import interestingApps from "@/app/_data_exports/interestingApps";
import Books from "../../components/my_space/books";
import StudyPlaylist from "../../components/my_space/studyPlaylist";
import ProjectCard from "../../components/project/ProjectCard";
import ProjectActionBtn from "../../components/project/ProjectActionBtn";
import { doto } from "../../fonts";

export default function MySpaceMobile() {
  return (
    <div className="w-full px-5 md:px-10 py-8 flex flex-col gap-5">
      <div className="border-b-2 border-purple-500/20 pb-4 mb-2">
        <h1 className={`text-3xl font-extrabold ${doto.className}`}>
          MY_<span className="text-purple-500">SPACE</span>
        </h1>
        <p className="text-sm text-gray-500 mt-1 font-mono">
          interests, links, media, and misc
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
        <p className="italic text-sm text-gray-500">
          Make sure to practice anything you read that has value to you
        </p>
        <Books />
      </Section>

      <Section header="Anime / Manga List">
        <Anime />
      </Section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Section header="Art Gallery">
          <p className="italic text-sm text-gray-500 text-center">
            Sketches, artwork, and illustrations from Procreate.
          </p>
          <ProjectActionBtn
            type="live-site"
            link="https://www.deviantart.com/qayyax/gallery"
          />
        </Section>

        <Section header="Photo Gallery">
          <p className="italic text-sm text-gray-500 text-center">
            Pictures taken on walks and in daily life on a Fujifilm X-M5.
          </p>
          <ProjectActionBtn
            type="live-site"
            link="https://www.flickr.com/photos/204502360@N07/"
          />
        </Section>
      </div>

      <Section header="Interesting Apps">
        <InterestingApps appData={interestingApps} />
      </Section>
    </div>
  );
}
