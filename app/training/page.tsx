import { pplSplit } from "../_data_exports/training";

export const metadata = {
  title: "Training — Tife Olatunji",
};

export default function TrainingPage() {
  return (
    <main className="w-full px-5 md:px-10">
      <section className="py-16 border-b" style={{ borderColor: "var(--color-line)" }}>
        <div className="flex items-baseline gap-4 mb-[34px]">
          <span
            className="text-[0.72rem] tracking-[0.1em] uppercase whitespace-nowrap [font-family:var(--font-mono-plex)]"
            style={{ color: "var(--color-rust)" }}
          >
            01
          </span>
          <h2
            className="text-[1.9rem] font-[450]"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Training
          </h2>
          <div className="flex-1 h-px self-center" style={{ background: "var(--color-line)" }} />
        </div>

        <p
          className="max-w-[58ch] mb-[30px] text-[0.96rem] [font-family:var(--font-inter)]"
          style={{ color: "var(--color-ink-soft)" }}
        >
          Six days on, a run every single one of them. The split is simple —
          push, pull, legs, repeat — but the discipline is the whole point.
        </p>

        {/* PPL split grid */}
        <div
          className="grid mb-[22px] border"
          style={{
            gridTemplateColumns: "repeat(7, 1fr)",
            gap: "1px",
            background: "var(--color-line)",
            borderColor: "var(--color-line)",
          }}
        >
          {pplSplit.map(({ day, workout, rest }) => (
            <div
              key={day}
              className="py-4 px-[10px] text-center"
              style={{
                background: "var(--color-paper)",
                opacity: rest ? 0.4 : 1,
              }}
            >
              <div
                className="text-[0.68rem] uppercase [font-family:var(--font-mono-plex)]"
                style={{ color: "var(--color-ink-soft)" }}
              >
                {day}
              </div>
              <div
                className="text-[1.02rem] font-[450] mt-[6px]"
                style={{ fontFamily: "var(--font-fraunces)" }}
              >
                {workout}
              </div>
            </div>
          ))}
        </div>

        <p
          className="text-[0.9rem] max-w-[60ch] [font-family:var(--font-inter)]"
          style={{ color: "var(--color-ink-soft)" }}
        >
          Plus a{" "}
          <strong style={{ color: "var(--color-ink)" }}>10km run daily</strong>{" "}
          — before or after lifting, doesn&apos;t matter, it happens. Meals stay
          simple on purpose: quinoa, ground beef, vegetables, repeat. Progress
          photos and weekly numbers live here as the cut continues.
        </p>
      </section>
    </main>
  );
}
