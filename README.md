# Nishant Mulane — Portfolio

A personal portfolio for Nishant Mulane, a Computer Engineering graduate and frontend developer. The site presents a concise introduction, skills, project work, professional experience, and contact links.

## Stack

- React 19 and Vite 7
- React Router
- Custom CSS with a lightweight theme and UI state provider
- Latin Inter Variable and lucide-react

## Run locally

```bash
npm install
npm run dev
```

## Verify a production build

```bash
npm run lint
npm run build
```

## Content modules

- `src/data/personal.js` — introduction and résumé link
- `src/data/about.js` — biography and facts
- `src/data/skills.js` — skills
- `src/data/projects.js` — project summaries and GitHub/live links
- `src/data/experience.js` — work experience
- `src/data/contact.js` — contact links

## Before deployment

- Copy `.env.example` to `.env.local` and set `VITE_SITE_URL` to the production origin. Vite injects the canonical URL and absolute Open Graph/Twitter image tags during the build.
- The portfolio portrait at `/nishant_mulane.png` is used as the social preview image.
- Confirm résumé, contact, and profile links.
