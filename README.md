# Portfolio (Astro)

Personal portfolio and blog built with Astro.

## Commands

| Command           | Description                      |
| :---------------- | :------------------------------- |
| `npm install`     | Install dependencies             |
| `npm run dev`     | Start local dev server           |
| `npm run build`   | Build production output          |
| `npm run preview` | Preview production build locally |

## Generative Engine Optimization (GEO)

This project includes a baseline GEO setup:

1. Structured metadata and Open Graph tags in the shared layout.
2. Schema.org JSON-LD for website, pages, blog index, and blog posts.
3. Sitemap generation via `@astrojs/sitemap`.
4. Crawl directives in `public/robots.txt`.
5. LLM discovery/context files in `public/llms.txt` and `public/llms-full.txt`.

## Required Production Edits

Before deployment, replace placeholder identity and domain values:

1. Set your real production site in `astro.config.mjs` (`site` value).
2. Replace `Your Name` and social/profile URLs in:
   - `src/pages/index.astro`
   - `src/layouts/BaseLayout.astro`
   - `public/llms.txt`
   - `public/llms-full.txt`
   - `public/robots.txt`
3. Replace `public/social-card.svg` text with your actual brand/profile info.

Once those are updated, rebuild to regenerate canonical URLs and sitemap entries.
