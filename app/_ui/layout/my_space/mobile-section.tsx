import Iframe from "../../components/my_space/iframe";
import Section from "../../components/my_space/space-sections";
import Anime from "../../components/my_space/anime";
import InterestingApps from "../../components/my_space/interesting-apps";
import interestingApps from "@/app/_data_exports/interestingApps";

export default function MySpaceMobile() {
  console.log(interestingApps);
  return (
    <section className="p-2 flex flex-col gap-4">
      {/* Now streaming pane */}
      <Section header="My Youtube Video">
        <Iframe />
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
