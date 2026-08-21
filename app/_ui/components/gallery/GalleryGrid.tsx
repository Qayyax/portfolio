import Image from "next/image";
import type { GalleryItem } from "@/app/_data_exports/gallery";

type Props = {
  items: GalleryItem[];
  placeholderLabels?: string[];
};

const placeholderGradients = [
  "from-purple-950 to-black",
  "from-indigo-950 to-black",
  "from-violet-950 to-black",
];

export default function GalleryGrid({ items, placeholderLabels }: Props) {
  if (items.length === 0) {
    const labels = placeholderLabels ?? ["COMING SOON", "COMING SOON", "COMING SOON"];
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {placeholderGradients.map((gradient, i) => (
          <div
            key={i}
            className={`relative overflow-hidden border-2 border-purple-500/30 rounded-2xl bg-gradient-to-br ${gradient} flex items-end p-3`}
            style={{ aspectRatio: "4/5" }}
          >
            <span className="text-[0.68rem] tracking-widest font-mono text-purple-400/60 uppercase">
              {labels[i] ?? "COMING SOON"}
            </span>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
      {items.map((item) => (
        <div
          key={item.src}
          className="relative overflow-hidden border-2 border-purple-500/30 rounded-2xl"
          style={{ aspectRatio: "4/5" }}
        >
          <Image
            src={item.src}
            alt={item.alt}
            fill
            className="object-cover"
            sizes="(max-width: 720px) 50vw, 30vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <span className="absolute bottom-3 left-3 z-10 text-[0.68rem] tracking-widest font-mono text-purple-300">
            {item.caption}
          </span>
        </div>
      ))}
    </div>
  );
}
