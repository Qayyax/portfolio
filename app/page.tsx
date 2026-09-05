import { doto } from "./_ui/fonts";
import { FaStrava } from "react-icons/fa";
import { artGallery, photoGallery } from "./_data_exports/gallery";
import GalleryGrid from "./_ui/components/gallery/GalleryGrid";
import YoutubeShorts from "./_ui/components/film/YoutubeShorts";
import ReferralCards from "./_ui/components/referrals/referral-cards";

function SectionHeader({ number, title }: { number: string; title: string }) {
  return (
    <div className="flex items-center gap-3 mb-8">
      <span className="text-purple-500 font-mono text-xs font-bold">{"// "}{number}</span>
      <h2 className={`text-2xl font-extrabold ${doto.className}`}>{title.toUpperCase()}</h2>
      <div className="flex-1 h-px bg-gray-200 dark:bg-gray-800" />
    </div>
  );
}

export default async function Home() {
  let quote: { q: string; a: string } | null = null;
  try {
    const res = await fetch("https://zenquotes.io/api/random", { next: { revalidate: 3600 } });
    const data = await res.json();
    quote = data[0] ?? null;
  } catch {
    // quote stays null
  }

  return (
    <main className="w-full px-5 md:px-10">

      {/* ── HERO ── */}
      <header className="py-12 border-b-2 border-purple-500/20">
        <h1 className={`text-4xl md:text-6xl font-extrabold leading-tight ${doto.className}`}>
          Hi, I&apos;m Tife.
          <br />
          This is what I&apos;m{" "}
          <span className="text-purple-500">building</span>,<br />
          on and off screen.
        </h1>

        <p className="mt-5 text-gray-600 dark:text-gray-400 max-w-xl leading-relaxed">
          I run, draw, take pictures, cycle, and I&apos;m always learning something —
          currently French. I joined a couple of run clubs, so most Sundays I&apos;m
          out doing long distance.{" "}
          <strong className="text-black dark:text-white">
            This is a website of my interests.
          </strong>{" "}
          <a
            href="https://www.strava.com/athletes/1545128530"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-[#FC4C02] hover:underline font-medium"
          >
            <FaStrava className="inline" />
            Follow me on Strava
          </a>
        </p>

        {/* daily quote */}
        {quote && (
          <div className="mt-6 border-l-4 border-purple-500 pl-4">
            <p className="text-sm text-gray-600 dark:text-gray-400 italic">&ldquo;{quote.q}&rdquo;</p>
            <p className="text-xs font-mono text-purple-500 mt-1">— {quote.a}</p>
          </div>
        )}
      </header>

      {/* ── ART ── */}
      <section id="art" className="py-12 border-b-2 border-purple-500/20">
        <SectionHeader number="01" title="Art" />
        <p className="text-gray-600 dark:text-gray-400 max-w-xl mb-6 leading-relaxed">
          Portraits and studies, mostly done in Procreate, mostly late at
          night. Anime aesthetics show up a lot.
        </p>

        <GalleryGrid
          items={artGallery}
          placeholderLabels={["PORTRAIT STUDY", "SKETCH — LINE WORK", "COLOR STUDY"]}
        />

        <a
          href="https://www.deviantart.com/qayyax/gallery"
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-block mt-4 text-sm font-extrabold text-white bg-purple-600 border-2 border-purple-400 rounded-xl px-4 py-2 hover:bg-purple-500 hover:border-purple-300 transition-colors shadow-md shadow-purple-500/30 ${doto.className}`}
        >
          → View full gallery on DeviantArt
        </a>
      </section>

      {/* ── PHOTO ── */}
      <section id="photo" className="py-12 border-b-2 border-purple-500/20">
        <SectionHeader number="02" title="Photography" />
        <p className="text-gray-600 dark:text-gray-400 max-w-xl mb-6 leading-relaxed">
          Shot on a Fujifilm X-M5. Mostly street and lifestyle — Toronto in
          the in-between moments, not the postcard ones.
        </p>

        <GalleryGrid
          items={photoGallery}
          placeholderLabels={["TORONTO — STREET", "GOLDEN HOUR", "SUBWAY — GRAIN"]}
        />

        <a
          href="https://www.flickr.com/photos/204502360@N07/"
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-block mt-4 text-sm font-extrabold text-white bg-purple-600 border-2 border-purple-400 rounded-xl px-4 py-2 hover:bg-purple-500 hover:border-purple-300 transition-colors shadow-md shadow-purple-500/30 ${doto.className}`}
        >
          → More on Flickr
        </a>
      </section>

      {/* ── FILM ── */}
      <section id="film" className="py-12 border-b-2 border-purple-500/20">
        <SectionHeader number="03" title="Film" />
        <p className="text-gray-600 dark:text-gray-400 max-w-xl mb-6 leading-relaxed">
          TifeLogs — training days, art timelapses.
        </p>

        <YoutubeShorts />

        <a
          href="https://www.youtube.com/@TifeLogs"
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-block mt-4 text-sm font-extrabold text-white bg-purple-600 border-2 border-purple-400 rounded-xl px-4 py-2 hover:bg-purple-500 hover:border-purple-300 transition-colors shadow-md shadow-purple-500/30 ${doto.className}`}
        >
          → YouTube @TifeLogs
        </a>
      </section>

      {/* ── REFERRALS ── */}
      <section id="referrals" className="py-12">
        <SectionHeader number="04" title="Referrals" />
        <p className="text-sm text-gray-500 font-mono -mt-4 mb-6">
          Apps I use — codes &amp; links that get you a discount.
        </p>
        <ReferralCards />
      </section>
    </main>
  );
}
