import { getStoreProducts } from "./_lib/store";
import { getChannelFeed } from "./_lib/youtube";
import Art from "./_ui/broadcast/Art";
import Footer from "./_ui/broadcast/Footer";
import Hero from "./_ui/broadcast/Hero";
import Logs from "./_ui/broadcast/Logs";
import Posters from "./_ui/broadcast/Posters";
import Referrals from "./_ui/broadcast/Referrals";
import Schedule from "./_ui/broadcast/Schedule";
import Shorts from "./_ui/broadcast/Shorts";
import Store from "./_ui/broadcast/Store";

export const revalidate = 600;

export default async function Home() {
  const [{ long, shorts }, products] = await Promise.all([getChannelFeed(), getStoreProducts()]);
  const [latest, ...olderLogs] = long;

  return (
    <>
      <main>
        <Hero latest={latest} shorts={shorts.slice(0, 2)} tickerVideos={long.slice(0, 6)} />
        <Store products={products} />
        <Posters />
        {shorts.length > 0 && <Shorts videos={shorts.slice(0, 10)} />}
        {olderLogs.length > 0 && <Logs videos={olderLogs.slice(0, 6)} />}
        <Schedule />
        <Referrals />
        <Art />
      </main>
      <Footer />
    </>
  );
}
