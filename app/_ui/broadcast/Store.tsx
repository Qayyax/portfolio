import Image from "next/image";
import { FaArrowRight, FaBagShopping } from "react-icons/fa6";
import { STORE_URL } from "@/app/_data_exports/socials";
import { formatPrice, type Product } from "@/app/_lib/store";

export default function Store({ products }: { products: Product[] }) {
  return (
    <section id="shop" className="section">
      <div className="storefront reveal">
        <span className="storefront-glow" aria-hidden />
        <div className="storefront-sign">
          <p className="storefront-label">
            <FaBagShopping aria-hidden /> Now open / my store
          </p>
          <h2>Thawtail</h2>
          <p className="storefront-pitch">Winter gear for dogs. Boots, coats and paw balm, shipped from Canada.</p>
          <a href={STORE_URL} target="_blank" rel="noopener noreferrer" className="button">
            Shop Thawtail <FaArrowRight aria-hidden />
          </a>
        </div>

        {products.length > 0 && (
          <ul className="storefront-shelf">
            {products.map((product) => (
              <li key={product.id}>
                <a href={product.url} target="_blank" rel="noopener noreferrer" className="product">
                  <span className="product-photo">
                    {product.image && (
                      <Image src={product.image} alt="" fill sizes="(max-width: 640px) 60vw, 240px" />
                    )}
                    {product.compareAt && <span className="product-tag">Sale</span>}
                  </span>
                  <span className="product-title">{product.title}</span>
                  <span className="product-price">
                    {formatPrice(product.price)}
                    {product.compareAt && <s>{formatPrice(product.compareAt)}</s>}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
