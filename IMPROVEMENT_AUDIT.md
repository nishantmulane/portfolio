# Portfolio improvement audit

## Resolved

- **Bosch location:** The experience entry reads Bosch Limited · Nashik. Pune remains only the portfolio owner's home/profile location.
- **Theme background consistency:** The screenshot showed a white band above the dark page. The `html`, `body`, and React root now all use the active theme background, including the page canvas outside the visible sections.
- **Hero color:** Light and dark modes now use coordinated graphite and slate-blue hero backgrounds with a restrained glow.
- **Selected project and detail route:** The featured/selected project treatment and standalone project-detail pages are removed; the main Projects section remains.
- **State and styling overhead:** Replaced Redux with a small React context provider and removed the unused Tailwind/PostCSS pipeline while preserving the reset styles.
- **Theme startup and scrolling:** The early theme script now matches React's `system` mode behavior, and hash scrolling is handled only in `RootLayout`.
- **Typography and motion setup:** Inter now uses its Latin variable-font file, motion durations use shared tokens, hero entrance timing is named and tunable, and home sections are split into focused components.
- **Project descriptions:** Updated the network simulator and shop descriptions using details from their local project readmes.
- **Project link checks:** Confirmed the Swaraj Labs and Shopeo live sites load, and matched their GitHub URLs against local repository remotes. The 3D Cube repository was not present at the expected local path, so its GitHub and live links still need an external check.
- **Accessibility details:** Added an explicit noopener policy to project links and location state to the active navigation item. Skip navigation, visible keyboard focus, mobile-menu focus handling, and reduced-motion fallbacks are in place.
- **Mobile navigation:** The menu is rendered outside the blurred sticky header, uses safe-area and dynamic viewport sizing, scrolls internally on short screens, and locks/restores the exact document scroll position on iOS Safari.

## Highest impact

- **Verify the 3D Cube links and project content:** Confirm the 3D Cube GitHub and live URLs resolve; add personal contribution or outcome details only where you can substantiate them. The web tool could not fetch these pages, and the in-app browser client is currently unavailable due to an app version mismatch.
- **Manual device review:** The layout and keyboard/reduced-motion paths have been reviewed in code. Still check phone, tablet, desktop, and color contrast in both themes in a real browser; the in-app browser client is currently unavailable due to an app version mismatch.

## Medium impact

- **Review touch-specific interactions:** Keep hover polish secondary to clear tap feedback and verify controls at narrow widths.

## Deployment polish

- **Set the production origin:** `VITE_SITE_URL` is configurable in `.env.example`, but the actual public domain is not available in this workspace and must be supplied before deployment metadata can be finalized.
- No Browserslist warning appeared in the current production build after removing the unused CSS toolchain.

- **Safari and browser preview icons:** Added 180px Apple touch icon, 192px and 512px manifest icons, a multi-size favicon, and the corrected favicon MIME declaration. Added theme-aware browser chrome colors.
- **Social preview image:** Added a 1200×630 Open Graph image and build-time Open Graph/Twitter metadata when VITE_SITE_URL is configured.
- **Project hover response:** Hovering or keyboard-focusing a project selects its matching preview; the network, storefront, and cube visuals each use restrained, project-specific motion.
