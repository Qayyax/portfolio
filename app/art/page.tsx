import GalleryGrid from "../_ui/components/gallery/GalleryGrid";
import { artGallery } from "../_data_exports/gallery";

export const metadata = {
  title: "Art — Tife Olatunji",
};

export default function ArtPage() {
  return (
    <main className="max-w-[920px] mx-auto px-7">
      <section className="py-16 border-b" style={{ borderColor: "var(--color-line)" }}>
        <div className="flex items-baseline gap-4 mb-[34px]">
          <span
            className="text-[0.72rem] tracking-[0.1em] uppercase whitespace-nowrap [font-family:var(--font-mono-plex)]"
            style={{ color: "var(--color-rust)" }}
          >
            02
          </span>
          <h2
            className="text-[1.9rem] font-[450]"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Art
          </h2>
          <div className="flex-1 h-px self-center" style={{ background: "var(--color-line)" }} />
        </div>

        <p
          className="max-w-[58ch] mb-[30px] text-[0.96rem] [font-family:var(--font-inter)]"
          style={{ color: "var(--color-ink-soft)" }}
        >
          Portraits and studies, mostly done in Procreate, mostly late at
          night. Anime aesthetics show up a lot — Toji Zenin has been a
          recurring reference, if not for the character then for the frame.
        </p>

        <GalleryGrid
          items={artGallery}
          placeholderLabels={["PORTRAIT STUDY", "SKETCH — LINE WORK", "COLOR STUDY"]}
        />

        <a
          href="https://www.deviantart.com/qayyax/gallery"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 text-[0.75rem] pb-[2px] border-b [font-family:var(--font-mono-plex)]"
          style={{
            color: "var(--color-indigo)",
            borderColor: "var(--color-indigo)",
          }}
        >
          View full gallery on DeviantArt →
        </a>
      </section>
    </main>
  );
}
