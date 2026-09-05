# Todo

## Before going live
- [ ] Run `npm run build` — must pass clean
- [ ] Push `redesign/personal-log` to remote, check Vercel preview URL
- [ ] Open PR from `redesign/personal-log` → `main`, do not merge directly

## Content to update
- [ ] `app/_data_exports/vitals.ts` — update the 4 hero stats with real current numbers
- [ ] `app/_data_exports/training.ts` — adjust PPL split if it changes
- [ ] `app/_data_exports/journal.ts` — add real journal entries, update French streak numbers
- [ ] `app/_data_exports/videos.ts` — update video list when new videos are posted

## Gallery images (Art / Photo)
- [ ] Drop art images into `public/gallery/art/`
- [ ] Drop photo images into `public/gallery/photo/`
- [ ] Register each file in `app/_data_exports/gallery.ts` — placeholder tiles disappear automatically once entries exist

## Features not built yet
- [ ] Journal MDX renderer — wire up `@next/mdx` and add `/journal/[slug]` route so journal entries can be full pages (currently just a data list in `journal.ts`)
- [ ] `/store` page — still "Coming Soon", build it out when ready
- [ ] Mobile nav auto-close — the slide-in panel stays open after tapping a link (pre-existing bug), fix when it becomes annoying

## Optional / later
- [ ] YouTube video list auto-sync — `videos.ts` is hardcoded, could pull latest titles/durations from the YouTube API at build time instead of updating manually
- [ ] Gallery Phase 2 — build-time script to sync latest images from Flickr API / DeviantArt API into the repo or a manifest (do not hotlink)
- [ ] Notion API for journal — alternative to MDX if you'd rather write entries in Notion and have the site pull them at build time
