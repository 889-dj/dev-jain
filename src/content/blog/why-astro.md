---
title: "Why I Choose Astro for My Portfolio"
description: "A look at what makes Astro the perfect framework for content-focused websites."
date: 2026-04-04
updatedDate: 2026-04-10
tags:
  - astro
  - frontend
  - performance
  - static-sites
draft: false
---

When it came time to rebuild my portfolio, I had a few requirements:

1. **Fast by default** — No bloated JavaScript bundles
2. **Content-first** — Great Markdown/MDX support
3. **Flexible** — Use any UI framework I want

Astro checked every box.

## The Islands Architecture

The key insight behind Astro is simple: most of your website doesn't need JavaScript. The hero section? Static HTML. The blog post? Pure content. The nav? Maybe a tiny bit of JS for the mobile menu.

Astro ships **zero JavaScript by default**. You only add interactivity where you need it using [islands](https://docs.astro.build/en/concepts/islands/).

## Content Collections

Type-safe frontmatter, automatic validation, and a clean API for querying content. It's the DX I always wanted.

```astro
---
import { getCollection } from 'astro:content';
const posts = await getCollection('blog');
---
```

## The Verdict

Astro isn't the right tool for every job — if you're building a complex dashboard app, reach for React or Svelte. But for portfolios, blogs, marketing sites, and documentation? It's hard to beat.
