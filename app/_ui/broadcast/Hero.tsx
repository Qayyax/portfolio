import Image from "next/image";
import Link from "next/link";
import { FaYoutube } from "react-icons/fa6";
import { YOUTUBE_URL } from "@/app/_data_exports/socials";
import { formatDate, type Video } from "@/app/_lib/youtube";
import Dock from "./Dock";
import Player from "./Player";
import ShortCard from "./ShortCard";
import Ticker from "./Ticker";
import Wordmark from "./Wordmark";

type Props = {
  latest?: Video;
  shorts: Video[];
  tickerVideos: Video[];
};

const anchors = [
  { label: "Shorts", href: "#shorts" },
  { label: "Logs", href: "#logs" },
  { label: "Plan", href: "#plan" },
  { label: "Referrals", href: "#referrals" },
  { label: "Art", href: "#art" },
];

export default function Hero({ latest, shorts, tickerVideos }: Props) {
  return (
    <section className="hero">
      <div className="power-on" aria-hidden />
      <div className="hero-backdrop" aria-hidden>
        {latest && <Image src={latest.thumb} alt="" fill sizes="100vw" quality={40} priority />}
        <span className="aurora aurora-a" />
        <span className="aurora aurora-b" />
      </div>

      <header className="topbar">
        <Link href="/" className="topbar-name">
          Tife Olatunji
        </Link>
        <nav aria-label="Sections">
          {anchors.map((anchor) => (
            <a key={anchor.href} href={anchor.href}>
              {anchor.label}
            </a>
          ))}
        </nav>
        <a href={YOUTUBE_URL} target="_blank" rel="noopener noreferrer" className="topbar-cta">
          <FaYoutube aria-hidden /> Subscribe
        </a>
      </header>

      <Wordmark />

      <div className="stage">
        <div className="stage-meta">
          {latest ? (
            <>
              <p className="on-air">
                <span aria-hidden /> Latest upload
              </p>
              <h2>{latest.title}</h2>
              <p className="stage-facts">
                {latest.duration} / {formatDate(latest.publishedAt)}
              </p>
            </>
          ) : (
            <p className="on-air">
              <span aria-hidden /> On YouTube
            </p>
          )}
        </div>

        <Player video={latest} />

        {shorts.length > 0 && (
          <aside className="stage-side" aria-label="Latest Shorts">
            {shorts.map((short) => (
              <ShortCard key={short.id} video={short} compact />
            ))}
          </aside>
        )}
      </div>

      <Dock />
      <Ticker videos={tickerVideos} />
    </section>
  );
}
