import Iframe from "../../components/my_space/iframe";
import Section from "../../components/my_space/space-sections";

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
        <div>component goes here</div>
      </Section>

      <Section header="Art Gallery">
        <div>component goes here</div>
      </Section>

      <Section header="Video Gallery">
        <div>component goes here</div>
      </Section>

      <Section header="Anime List">
        <div>component goes here</div>
      </Section>
    </section>
  );
}
