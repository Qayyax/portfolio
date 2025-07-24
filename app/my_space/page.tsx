// TODO:
// - [x] iframe that comes up when I am streaming.
// - [] multisections
// - [] Apps I find interesting
// - [] Interest gallery
//    - [] Art gallery
//    - [] Video galley of my favourite contents
//        - [] break this into sections as well
//        - [] my old cod videos,
//        - [] videos I find funny
//        - [] tech videos

import Iframe from "../_ui/components/my_space/iframe";

// - [] Blogs
export default function MySpace() {
  return (
    <section>
      {/* Now streaming pane */}
      <div>
        Now streaming iframe
        <Iframe />
      </div>
      {/* Apps I find interesting pane */}
      <div>Apps I find interesting</div>
      <div>Art gallery</div>
      <div>Video gallery</div>
      <div>Anime I enjoy</div>
    </section>
  );
}
