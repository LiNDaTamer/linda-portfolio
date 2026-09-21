# Linda Tamer — Portfolio

A production-ready personal portfolio website for Linda Tamer, UI/UX Designer.

Built with React, Vite, TypeScript, Tailwind CSS, Framer Motion, React Router, and Lucide icons.

## Getting started

```bash
npm install
npm run dev
```

Open the local URL that Vite prints (usually http://localhost:5173).

To build for production:

```bash
npm run build
npm run preview
```

## Structure

- `src/pages/` — top-level routes (Home, Work, About, Contact, More Work)
- `src/pages/case-studies/` — individual project case-study pages (KUH, Basma, WeDeliver) plus a generic `ProjectPlaceholder` for project 04 / future projects
- `src/components/` — reusable UI: Navbar, CustomCursor, Hero, ProjectFeature/Card/Grid, CaseStudy building blocks, Footer, etc.
- `src/data/projects.ts` — all project content (titles, categories, descriptions, image paths). Edit here to change copy without touching components.
- `src/data/config.ts` — email, LinkedIn, and Behance links. Replace the placeholder URLs before deploying.

## Replacing images

All images live in `public/images/` and are currently placeholder graphics generated for layout purposes:

- `public/images/linda-portrait.jpg` — hero + about portrait
- `public/images/kuh-cover.jpg`, `basma-cover.jpg`, `wedeliver-cover.jpg`, `project-04-cover.jpg` — project covers
- `public/images/projects/more-*.jpg` — "More Work" grid

Drop in real photography/screens with the same filenames and everything updates automatically. Case-study pages also include labeled placeholder blocks (wireframes, design system, key screens, prototype) — replace `<PlaceholderVisual>` usages in `src/pages/case-studies/*.tsx` with real `<img>` tags as content becomes available.

## Notes

- The custom cursor is desktop-only and automatically disables itself on touch devices.
- Motion respects `prefers-reduced-motion`.
- Content follows only what was provided — case-study bodies, metrics, and testimonials are intentionally left as clearly labeled placeholders rather than invented.
- Contact links (`src/data/config.ts`) are placeholders — update before deploying.

## Deployment

This is a standard Vite app — it deploys as-is to Vercel, Netlify, GitHub Pages, or any static host. Build output goes to `dist/`.
