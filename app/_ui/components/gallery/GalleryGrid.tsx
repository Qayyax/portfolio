import Image from "next/image";
import type { GalleryItem } from "@/app/_data_exports/gallery";

type Props = {
  items: GalleryItem[];
  emptyMessage?: string;
};

export default function GalleryGrid({ items, emptyMessage }: Props) {
  if (items.length === 0) {
    return (
      <p
        className="text-[0.85rem] italic [font-family:var(--font-mono-plex)]"
        style={{ color: "var(--color-ink-soft)" }}
      >
        {emptyMessage ?? "Images coming soon — drop files in /public/gallery/"}
      </p>
    );
  }

  return (
    <div
      className="grid gap-[14px]"
      style={{ gridTemplateColumns: "repeat(3, 1fr)" }}
    >
      {items.map((item) => (
        <div
          key={item.src}
          className="relative overflow-hidden border"
          style={{ aspectRatio: "4/5", borderColor: "var(--color-line)" }}
        >
          <Image
            src={item.src}
            alt={item.alt}
            fill
            className="object-cover"
            sizes="(max-width: 720px) 50vw, 30vw"
          />
          {/* gradient + caption */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(0,0,0,0.55) 100%)",
            }}
          />
          <span
            className="absolute bottom-[14px] left-[14px] z-10 text-[0.68rem] tracking-[0.03em] [font-family:var(--font-mono-plex)]"
            style={{ color: "var(--color-paper)" }}
          >
            {item.caption}
          </span>
        </div>
      ))}
    </div>
  );
}
