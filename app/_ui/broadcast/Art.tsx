import Image from "next/image";
import { artGallery } from "@/app/_data_exports/gallery";

export default function Art() {
  return (
    <section id="art" className="section art">
      <div className="section-head reveal">
        <h2>Art</h2>
        <a
          href="https://www.deviantart.com/qayyax/gallery"
          target="_blank"
          rel="noopener noreferrer"
          className="text-link"
        >
          Full gallery
        </a>
      </div>

      <div className="art-grid">
        {artGallery.map((piece) => (
          <figure key={piece.src} className="reveal">
            <Image src={piece.src} alt={piece.alt} fill sizes="(max-width: 700px) 100vw, 33vw" />
            <figcaption>{piece.caption}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
