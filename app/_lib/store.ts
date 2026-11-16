import { STORE_URL } from "@/app/_data_exports/socials";

export type Product = {
  id: number;
  title: string;
  url: string;
  image?: string;
  price: number;
  compareAt?: number;
};

type ProductsResponse = {
  products?: {
    id: number;
    title: string;
    handle: string;
    images: { src: string }[];
    variants: { price: string; compare_at_price: string | null; available?: boolean }[];
  }[];
};

const REVALIDATE_SECONDS = 600;
const PRODUCT_LIMIT = 8;

// Shopify serves every store's public catalogue at /products.json, newest first.
export async function getStoreProducts(): Promise<Product[]> {
  try {
    const res = await fetch(`${STORE_URL}/products.json?limit=${PRODUCT_LIMIT}`, {
      next: { revalidate: REVALIDATE_SECONDS },
    });
    if (!res.ok) throw new Error(`Store responded ${res.status}`);
    const { products = [] }: ProductsResponse = await res.json();

    return products.map((product) => {
      const prices = product.variants.map((variant) => Number(variant.price));
      const cheapest = product.variants[prices.indexOf(Math.min(...prices))];
      const price = Number(cheapest?.price ?? 0);
      const compareAt = Number(cheapest?.compare_at_price ?? 0);
      return {
        id: product.id,
        title: product.title,
        url: `${STORE_URL}/products/${product.handle}`,
        image: product.images[0]?.src,
        price,
        compareAt: compareAt > price ? compareAt : undefined,
      };
    });
  } catch (error) {
    console.error("Could not load store products", error);
    return [];
  }
}

export function formatPrice(amount: number) {
  return new Intl.NumberFormat("en-CA", { style: "currency", currency: "CAD" }).format(amount);
}
