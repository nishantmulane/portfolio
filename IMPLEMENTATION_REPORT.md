# Portfolio implementation report

## Phase 1 — Small details

- Applied shared light and dark design tokens, type scale, contrast-safe slate accents, focus treatment, scrollbar styling, restrained contact card, and copy-email feedback.
- Fixed full-bleed hero sizing and theme canvas backgrounds; hidden entrance states only activate when JavaScript is available.
- Header uses a restrained scrolled state. Bosch experience location is Nashik.
- Portrait markup now reports the source image's real 500×500 dimensions.

## Phase 2 — Motion and depth

- Replaced the typewriter with masked word-rise, paced copy and portrait entrance, and early-visible CTAs. Added reduced-motion handling and desktop-only, rAF-throttled portrait parallax.
- Added section title reveals, scroll progress, the About statement reveal, restrained project-row focus, a View Transitions theme toggle with fallback, and project-specific preview animation on hover/focus.
- Shared easing and duration tokens drive motion, including the slow project concept animations.

## Phase 3 — Projects and content

- Kept one Projects section with both GitHub and Live links per project. Added a sticky desktop concept showcase with cross-fades and stacked mobile previews; there are no project detail pages or selected-project panel.
- Removed the visible placeholder disclaimer. The preview drawings are still illustrative, not screenshots from the live apps.
- Did not add an unverified status line or project outcomes.

## Phase 4 — Build and QA

- `npm run lint` — passed.
- `npm run build` — passed (Vite 7.2.6; 1,976 modules transformed). The obsolete PostCSS/Tailwind config is absent from the updated project.
- WCAG AA normal-text contrast checks against each page background: light muted 5.86:1, light accent 6.48:1, dark muted 7.56:1, dark accent 10.46:1.
- Added Safari touch and browser manifest icons, a multi-size favicon, theme-aware browser chrome colors, Open Graph/Twitter metadata, Person education schema, and a build-generated sitemap.
- The in-app browser automation client could not start in this session. Lighthouse, device-width visual checks (360/768/1024/1440/1920), keyboard-only review, reduced-motion review in a live browser, and 4× CPU profiling remain unverified; no scores are claimed.

## Owner-supplied assets and confirmations

1. Replace `public/nishant_mulane.png` with a clean-background portrait at 1000×1250 or larger (PNG fallback plus AVIF/WebP preferred); the current source is only 500×500, so it was not upscaled.
2. Add `public/projects/swaraj-labs.webp`, `public/projects/shopeo.webp`, and `public/projects/3d-cube.webp`, each a 2400×1500 (16:10) real app capture. These can replace the illustrative project previews. Optional recordings: matching `.webm`/`.mp4` files, 6–10 seconds, muted, no larger than 1.5 MB each, with poster images.
3. Confirm the 3D Cube GitHub and live URLs, and provide truthful outcome or learning lines for each project if they should be shown.
4. Change VITE_SITE_URL if the public production origin changes from https://nishantmulane.com.
