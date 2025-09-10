import Iframe from "../../components/my_space/iframe";
import Section from "../../components/my_space/space-sections";
import Anime from "../../components/my_space/anime";
import InterestingApps from "../../components/my_space/interesting-apps";
import interestingApps from "@/app/_data_exports/interestingApps";
import Books from "../../components/my_space/books";
import StudyPlaylist from "../../components/my_space/studyPlaylist";

export default function MySpaceMobile() {
  return (
    <section className="p-2 flex flex-col gap-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 justify-center items-center">
        <Section header="My Youtube Video">
          <Iframe />
        </Section>

        <Section header="My Study Playlist">
          <StudyPlaylist />
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
