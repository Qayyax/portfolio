import vitals from "./_data_exports/vitals";

export default function Home() {
  const today = new Date().toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  }).toUpperCase();

  return (
    <main>
      <header
        className="py-16 pb-10 border-b"
        style={{ borderColor: "var(--color-line)" }}
      >
        <div className="max-w-[920px] mx-auto px-7">
          {/* dateline */}
          <div
            className="text-[0.75rem] tracking-[0.12em] uppercase mb-[22px] flex items-center gap-[10px] [font-family:var(--font-mono-plex)]"
            style={{ color: "var(--color-ink-soft)" }}
          >
            <span
              className="inline-block w-[7px] h-[7px] rounded-full shrink-0"
              style={{ background: "var(--color-rust)" }}
            />
            LOG — TORONTO, ON — {today}
          </div>

          {/* headline */}
          <h1
            className="font-[450] leading-[1.05] tracking-[-0.01em] max-w-[11ch]"
            style={{
              fontFamily: "var(--font-fraunces)",
              fontSize: "clamp(2.4rem, 6vw, 4.1rem)",
            }}
          >
            Hi, I&apos;m Tife.{" "}
            <br />
            This is what I&apos;m{" "}
            <em
              className="not-italic font-[450]"
              style={{
                fontStyle: "italic",
                color: "var(--color-indigo)",
              }}
            >
              building
            </em>
            , on and off screen.
          </h1>

          {/* lede */}
          <p
            className="mt-[22px] max-w-[52ch] text-[1.05rem] [font-family:var(--font-inter)]"
            style={{ color: "var(--color-ink-soft)" }}
          >
            Nigeria-raised, Toronto-based. Most days start with a run before
            sunrise and end with a set of sketches or a rough cut. I lift, I
            run, I draw, I shoot film-style photos, and I&apos;m slowly getting
            fluent in French.{" "}
            <strong style={{ color: "var(--color-ink)" }}>
              This site is the log of all of it.
            </strong>
          </p>

          {/* vitals strip */}
          <div
            className="mt-9 grid border"
            style={{
              gridTemplateColumns: "repeat(4, 1fr)",
              borderColor: "var(--color-ink)",
              background: "var(--color-ink)",
              gap: "1px",
            }}
          >
            {vitals.map((v) => (
              <div
                key={v.label}
                className="px-[18px] py-4"
                style={{ background: "var(--color-paper)" }}
              >
                <div
                  className="text-[1.5rem] font-[500] [font-family:var(--font-mono-plex)]"
                  style={{ color: "var(--color-indigo)" }}
                >
                  {v.num}
                  {v.unit && (
                    <span className="text-[0.9rem]">{v.unit}</span>
                  )}
                </div>
                <div
                  className="text-[0.68rem] tracking-[0.05em] uppercase mt-1 [font-family:var(--font-mono-plex)]"
                  style={{ color: "var(--color-ink-soft)" }}
                >
                  {v.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </header>
    </main>
  );
}
