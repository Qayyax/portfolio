import Link from "next/link";
import Iframe from "../../components/my_space/iframe";
import Section from "../../components/my_space/space-sections";
import InterestingApp from "../../components/my_space/interesting-app";
import Anime from "../../components/my_space/anime";

// TODO:
// - [] onClick of the component it goes to the nested routes

export default function MySpaceMobile() {
  return (
    <section className="p-2 flex flex-col gap-4">
      {/* Now streaming pane */}
      <div>
        {" "}
        <Iframe />
      </div>
      <Section header="Interesting Apps">
        <InterestingApp
          name="Loop"
          description="Used to tile your apps on mac"
          platform="MacOS"
          link="https://github.com/MrKai77/Loop"
        />
        <InterestingApp
          name="Loop"
          description="Used to tile your apps on mac"
          platform="MacOS"
          link="https://github.com/MrKai77/Loop"
        />
      </Section>

      {/* <Section header="Art Gallery"> */}
      {/*   <div>component goes here</div> */}
      {/* </Section> */}
      {/**/}
      {/* <Section header="Video Gallery"> */}
      {/*   <div>component goes here</div> */}
      {/* </Section> */}

      <Section header="Anime / Manga List">
        <Anime />
      </Section>
    </section>
  );
}
