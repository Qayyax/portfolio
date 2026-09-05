import { doto } from "./_ui/fonts";
import vitals from "./_data_exports/vitals";
import { pplSplit } from "./_data_exports/training";
import { artGallery, photoGallery } from "./_data_exports/gallery";
import { journalEntries, frenchStreak } from "./_data_exports/journal";
import recentVideos from "./_data_exports/videos";
import GalleryGrid from "./_ui/components/gallery/GalleryGrid";
import Iframe from "./_ui/components/my_space/iframe";

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
  const today = new Date()
    .toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric" })
    .toUpperCase();

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
        <p className="font-mono text-xs text-gray-500 uppercase tracking-widest mb-6 flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-purple-500 shrink-0" />
          LOG — TORONTO, ON — {today}
        </p>

        <h1 className={`text-4xl md:text-6xl font-extrabold leading-tight ${doto.className}`}>
          Hi, I&apos;m Tife.
          <br />
          This is what I&apos;m{" "}
          <span className="text-purple-500">building</span>,<br />
          on and off screen.
        </h1>

        <p className="mt-5 text-gray-600 dark:text-gray-400 max-w-xl leading-relaxed">
          Nigeria-raised, Toronto-based. Most days start with a run before
          sunrise and end with a set of sketches or a rough cut. I lift, I run,
          I draw, I shoot film-style photos, and I&apos;m slowly getting fluent
          in French.{" "}
          <strong className="text-black dark:text-white">
            This site is the log of all of it.
          </strong>
        </p>

        {/* vitals strip — rounded box */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 border-2 border-purple-500 divide-y-2 md:divide-y-0 md:divide-x-2 divide-purple-500 rounded-2xl overflow-hidden">
          {vitals.map((v) => (
            <div key={v.label} className="p-4">
              <div className={`text-2xl font-extrabold text-purple-500 ${doto.className}`}>
                {v.num}
                {v.unit && <span className="text-base">{v.unit}</span>}
              </div>
              <div className="text-xs uppercase font-mono text-gray-500 mt-1 tracking-widest">
                {v.label}
              </div>
            </div>
          ))}
        </div>

        {/* daily quote */}
        {quote && (
          <div className="mt-6 border-l-4 border-purple-500 pl-4">
            <p className="text-sm text-gray-600 dark:text-gray-400 italic">&ldquo;{quote.q}&rdquo;</p>
            <p className="text-xs font-mono text-purple-500 mt-1">— {quote.a}</p>
          </div>
        )}
      </header>

      {/* ── TRAINING ── */}
      <section id="training" className="py-12 border-b-2 border-purple-500/20">
        <SectionHeader number="01" title="Training" />
        <p className="text-gray-600 dark:text-gray-400 max-w-xl mb-6 leading-relaxed">
          Six days on, a run every single one of them. The split is simple —
          push, pull, legs, repeat — but the discipline is the whole point.
        </p>

        {/* PPL grid — rounded box */}
        <div className="grid grid-cols-4 md:grid-cols-7 border-2 border-purple-500 divide-x-2 divide-purple-500 mb-5 rounded-2xl overflow-hidden">
          {pplSplit.map(({ day, workout, rest }) => (
            <div key={day} className={`p-3 text-center ${rest ? "opacity-30" : ""}`}>
              <div className="text-xs font-mono text-gray-500 uppercase tracking-wider">
                {day}
              </div>
              <div className={`text-sm font-bold mt-1 ${doto.className} ${!rest ? "text-purple-500" : ""}`}>
                {workout}
              </div>
            </div>
          ))}
        </div>

        <p className="text-sm text-gray-600 dark:text-gray-400 max-w-xl leading-relaxed">
          Plus a{" "}
          <strong className="text-black dark:text-white">10km run daily</strong>{" "}
          — before or after lifting, doesn&apos;t matter, it happens. Meals stay
          simple on purpose: quinoa, ground beef, vegetables, repeat.
        </p>
      </section>

      {/* ── ART ── */}
      <section id="art" className="py-12 border-b-2 border-purple-500/20">
        <SectionHeader number="02" title="Art" />
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
          className="inline-block mt-4 text-sm font-mono text-purple-500 hover:underline"
        >
          → View full gallery on DeviantArt
        </a>
      </section>

      {/* ── PHOTO ── */}
      <section id="photo" className="py-12 border-b-2 border-purple-500/20">
        <SectionHeader number="03" title="Photography" />
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
          className="inline-block mt-4 text-sm font-mono text-purple-500 hover:underline"
        >
          → More on Flickr
        </a>
      </section>

      {/* ── FILM ── */}
      <section id="film" className="py-12 border-b-2 border-purple-500/20">
        <SectionHeader number="04" title="Film" />
        <p className="text-gray-600 dark:text-gray-400 max-w-xl mb-6 leading-relaxed">
          TifeLogs — training days, art timelapses, life in Toronto as a
          newcomer figuring it out.
        </p>

        {/* film box — rounded */}
        <div className="border-2 border-purple-500/30 rounded-2xl p-4 flex flex-col md:flex-row gap-6 items-start">
          <div className="w-full md:w-auto shrink-0">
            <Iframe />
          </div>
          <ul className="w-full pt-2">
            {recentVideos.map((v) => (
              <li
                key={v.title}
                className="flex justify-between items-center py-3 border-b border-gray-100 dark:border-gray-900 text-sm gap-4"
              >
                <span>{v.title}</span>
                <span className={`text-purple-500 shrink-0 ${doto.className}`}>
                  {v.duration}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <a
          href="https://www.youtube.com/@TifeLogs"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 text-sm font-mono text-purple-500 hover:underline"
        >
          → YouTube @TifeLogs
        </a>
      </section>

      {/* ── JOURNAL ── */}
      <section id="journal" className="py-12">
        <SectionHeader number="05" title="Journal" />

        {/* journal box — rounded */}
        <div className="border-2 border-purple-500/30 rounded-2xl p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed text-sm">
              French, twice a week with a tutor, every day on my own. Working
              toward NCLC 7 for Express Entry.
            </p>
            <div className="flex flex-wrap gap-[6px]">
              {Array.from({ length: frenchStreak.total }).map((_, i) => (
                <span
                  key={i}
                  className={`inline-block w-[14px] h-[14px] rounded-sm ${
                    i < frenchStreak.active
                      ? "bg-purple-500"
                      : "bg-gray-200 dark:bg-gray-800"
                  }`}
                />
              ))}
            </div>
            <p className="text-xs font-mono text-gray-500 mt-2">
              {frenchStreak.active}/{frenchStreak.total} days this fortnight
            </p>
          </div>

          <div>
            {journalEntries.map((entry) => (
              <div
                key={entry.date}
                className="py-3 border-t border-gray-200 dark:border-gray-800"
              >
                <span className={`block text-xs font-mono text-purple-500 mb-1 tracking-widest ${doto.className}`}>
                  {entry.date}
                </span>
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  {entry.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
