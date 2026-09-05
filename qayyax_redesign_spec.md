# qayyax.xyz Redesign — Spec for Claude Code

## Goal
Move the site away from a dev-portfolio focus ("fullstack developer, master's in big data
analytics") toward a personal log: training, art, photography, video, and journal/language
learning. Dev work is no longer the headline — it can live in a small footer link or a
buried page, not the front page.

Reference mockup: `qayyax_mockup.html` (static HTML/CSS, attached separately). Use it for
visual direction — palette, type pairing, the "field log" feel, the vitals-strip idea — not
as literal code to copy in. Rebuild it using this codebase's actual patterns (components,
styling system, image handling) rather than pasting the mockup's raw CSS in.

## Non-negotiable safety rules
1. **Never commit directly to the branch that deploys to production.** Create a new branch
   (e.g. `redesign/personal-log`) and work there.
2. **Don't delete or rename existing routes/pages until their replacements are verified
   working.** If `/my_space` or `/store` are being removed or merged, keep the old route
   redirecting rather than 404ing.
3. **Run the project locally (`npm run dev` or equivalent) after every meaningful change**
   and visually check it before moving to the next section.
4. **Run the production build locally (`npm run build`) before pushing** — a page can work
   in dev and still fail to build.
5. **Push to the branch and use a preview deployment (Vercel preview URL, etc.) to review
   on a real URL before merging to main/production.**
6. **Small, reviewable commits** — one section (hero, training, art, photo, film, journal)
   per commit or small commit group, not one giant rewrite in a single commit.
7. If anything is ambiguous (e.g. how images should be sourced, whether an existing page
   should be kept), **ask rather than guess.**

## Content / structure

### Nav
Home / Training / Art / Photo / Film / Journal. Drop "Store" from the primary nav unless
still actively used — can live in the footer instead.

### Hero
- Short dateline/location tag (e.g. "Toronto, ON")
- Headline: personal, not a job title. Direction: "Hi, I'm Tife — this is what I'm building,
  on and off screen."
- One short paragraph: Nigeria-raised, Toronto-based, trains daily, draws, shoots photos,
  learning French.
- A small "vitals" strip: 4 short stats that change over time (e.g. current cut progress,
  daily run distance, PPL split cadence, French target). Treat these as data the user will
  actually update, not static decoration — model them as simple config values, not hardcoded
  strings buried in markup.

### Training section
- Weekly PPL split table (6 days, labeled)
- Short note on daily running habit and meal approach
- Space for progress photos / weekly numbers over time (this will need real images — see
  Images below)

### Art section
- Gallery grid of Procreate work
- Link out to DeviantArt for the full gallery

### Photo section
- Gallery grid of Fujifilm X-M5 shots
- Link out to Flickr for the full gallery

### Film section
- Featured/latest video embed (YouTube, @TifeLogs)
- Short list of recent videos with titles + durations

### Journal section
- Short language-learning streak indicator (French)
- List of recent journal entries (date + short text)

### Footer
- Social links (YouTube, DeviantArt, Flickr, GitHub, email, Buy Me a Coffee)
- Small pull-quote or tagline

## Images (self-hosted, not hotlinked)
- Do not hotlink directly to Flickr or DeviantArt image URLs in production markup —
  fragile and loses Next.js image optimization.
- Phase 1: manually curated images placed in the repo's static assets folder (e.g.
  `/public/gallery`), rendered via the framework's image component.
- Phase 2 (optional, later): a build-time script that syncs latest images from the Flickr
  API / DeviantArt API into the repo or a manifest, using static generation or ISR. Don't
  build this unless asked — start with Phase 1.

## Journal content source
Two acceptable approaches — ask the user which they prefer before building either:
1. MDX/markdown files committed in the repo, rendered as static pages.
2. Pulled from the user's existing Notion workspace via the Notion API at build time.
Do not build a custom backend/database for this.

## Tone of copy
Plain, active voice, specific over clever. Avoid resume language ("passionate about",
"results-driven"). Write like log entries, not marketing copy.
