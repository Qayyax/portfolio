// TODO:
// - [x] iframe that comes up when I am streaming.
// - [x] multisections
// - [] Apps I find interesting
// - [] Interest gallery
//    - [] Art gallery
//    - [] Video galley of my favourite contents
//        - [] break this into sections as well
//        - [] my old cod videos,
//        - [] videos I find funny
//        - [] tech videos
//
// NOTE:
// So I think for mobile, they would click the component
// which would take them to the page
// But on desktop, they would see snippet, then click to get the full thing
// would move the sections below to mobile component

import Iframe from "../_ui/components/my_space/iframe";
import Section from "../_ui/components/my_space/space-sections";

// - [] Blogs
export default function MySpace() {
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
