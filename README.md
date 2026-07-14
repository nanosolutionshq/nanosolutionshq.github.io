# Nano Solutions — AI-visibility audit site

Static GitHub Pages site and visual-design source for **Nano Solutions**, an AI-search visibility audit service for local businesses. The site is designed to be read equally well by buyers, search engines, and AI crawlers.

**Live:** https://nanosolutionshq.github.io/

## Repository map

| Path | Purpose |
|---|---|
| `index.html` | Homepage: diagnostic hero, proof, process, FAQ, lead form |
| `study.html` | Study 01 article with article-specific social metadata and evidence visual |
| `sample-audit.html` | Public, seven-page illustrative audit with a downloadable PDF counterpart |
| `privacy.html` | Plain-language analytics and contact-request notice |
| `thanks.html` | Noindexed post-submit confirmation page |
| `assets/css/site.css` | Shared responsive visual system |
| `assets/brand/` | Dark/light `n.` marks, scan-ring mark, and horizontal lockups |
| `assets/source/graphics/` | Editable SVG masters for every exported campaign graphic |
| `assets/fiverr/` | Three 1280×769 Fiverr gallery images |
| `assets/social/` | Three 1080×1350 Study 01 social cards |
| `assets/sample/` | Public sample-audit stylesheet and rendered seven-page PDF |
| `favicon.svg`, `favicon-32.png`, `apple-touch-icon.png`, `favicon-512.png`, `logo.png` | Favicon and organization-logo suite |
| `og.png`, `study-og.png` | Homepage and Study 01 Open Graph images |
| `robots.txt`, `llms.txt`, `sitemap.xml` | Open crawler policy and machine-readable discovery files |
| `site.webmanifest` | Install/browser identity metadata |

## Visual system

- Ink `#14161A`, Slate `#22272F`, Electric Cyan `#22D3EE`, Paper `#F7F8FA`, Gray `#8A93A0` only.
- Lowercase `n.` monogram with a cyan dot.
- Restrained concentric scan rings, light diagnostic grids, and mono data labels.
- Inter for interface/editorial type; IBM Plex Mono for evidence labels and metadata, with system fallbacks.

## AEO features

- Homepage JSON-LD graph: `Organization`, `WebSite`, `WebPage`, and `FAQPage`; visible FAQ and schema answers stay matched.
- Study JSON-LD: `Organization` + `Article`, with article-specific social image.
- Semantic landmarks, one `h1` per page, native `<details>` FAQ, and HTML-rendered content without JavaScript.
- Production canonical URLs, Open Graph/X metadata, sitemap, open `robots.txt`, and `llms.txt`.
- Noindexed confirmation page.

## Lead form

The free-check form posts to FormSubmit and preserves its existing subject, routing, spam-trap, and confirmation fields. Form handling and the provider's stated retention are disclosed on `privacy.html`.

## Public sample audit

`sample-audit.html` is a responsive, semantic seven-page demonstration using a clearly fictional business and illustrative values. `assets/sample/nano-solutions-sample-ai-visibility-audit.pdf` is its print-ready counterpart. The public sample shows deliverable quality and outcome-level guidance while withholding private evidence, repeatable procedures, and implementation detail.

## Analytics and privacy

Umami Cloud measures anonymous aggregate page activity and named conversion events. The tracker uses no cookies, respects Do Not Track, excludes query strings and fragments, and never receives form-field values. The authoritative lead-conversion goal is the noindexed `/thanks.html` page after a successful FormSubmit handoff.

## Deploy

This is the `nanosolutionshq.github.io` user-site repository, so GitHub Pages publishes the `main` branch root. If a custom domain is added later, update canonical, social, schema, crawler, and sitemap URLs together.
