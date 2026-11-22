import Image from "next/image";
import { FaArrowRight, FaDumbbell } from "react-icons/fa6";
import { ETSY_URL, posters } from "@/app/_data_exports/posters";

export default function Posters() {
  const live = Boolean(ETSY_URL);

  return (
    <section id="posters" className="section">
      <div className="storefront storefront-posters reveal">
        <span className="storefront-glow" aria-hidden />
        <div className="storefront-sign">
          <p className="storefront-label">
            <FaDumbbell aria-hidden /> {live ? "Now open / on Etsy" : "Opening soon / on Etsy"}
          </p>
          <h2>Iron Era</h2>
          <p className="storefront-pitch">
            Retro gym posters for your home gym or training room. Get a printed poster shipped to your door, or an
            instant digital download to print yourself.
          </p>
          {live && (
            <a href={ETSY_URL!} target="_blank" rel="noopener noreferrer" className="button">
              Shop on Etsy <FaArrowRight aria-hidden />
            </a>
          )}
        </div>

        <ul className="storefront-shelf">
          {posters.map((poster) => {
            const card = (
              <>
                <span className="product-photo">
                  <Image src={poster.image} alt={poster.alt} fill sizes="(max-width: 640px) 60vw, 240px" />
                </span>
                <span className="product-title">{poster.title}</span>
                <span className="product-price product-price-stack">
                  <span>Print from CA$39.99</span>
                  <span>Digital CA$6.50</span>
                </span>
              </>
            );
            return (
              <li key={poster.slug}>
                {live ? (
                  <a href={ETSY_URL!} target="_blank" rel="noopener noreferrer" className="product">
                    {card}
                  </a>
                ) : (
                  <div className="product">{card}</div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
