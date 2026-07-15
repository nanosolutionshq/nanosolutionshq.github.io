# Nano — AI-visibility audit site

Static GitHub Pages site and visual-design source for **Nano**, the public-facing AI-search visibility audit persona associated with Nano Solutions. The service works across business categories and markets, and the site is designed to be read equally well by buyers, search engines, and AI crawlers.

**Live:** https://nanosolutionshq.github.io/

## Repository map

| Path | Purpose |
|---|---|
| `index.html` | Homepage: diagnostic hero, proof, process, FAQ, and focused calls to action |
| `free-check/index.html` | Focused, market-neutral landing page for free-check requests |
| `study.html` | Study 01 article with article-specific social metadata and evidence visual |
| `sample-audit.html` | Public, seven-page illustrative audit with a downloadable PDF counterpart |
| `privacy.html` | Plain-language analytics and contact-request notice |
| `thanks.html` | Noindexed post-submit confirmation page |
| `404.html` | Noindexed, privacy-safe recovery page for missing URLs |
| `assets/css/site.css` | Shared responsive visual system |
| `assets/css/fonts.css`, `assets/fonts/` | Self-hosted brand fonts and SIL Open Font License copies |
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
- Self-hosted Inter for interface/editorial type; self-hosted IBM Plex Mono for evidence labels and metadata, with system fallbacks.

## AEO features

- Homepage JSON-LD graph: `Organization`, `WebSite`, `WebPage`, and `FAQPage`; visible FAQ and schema answers stay matched.
- Study JSON-LD: `Organization` + `Article`, with article-specific social image.
- Semantic landmarks, one `h1` per page, native `<details>` FAQ, and HTML-rendered content without JavaScript.
- Production canonical URLs, Open Graph/X metadata, sitemap, open `robots.txt`, and `llms.txt`.
- Noindexed confirmation page.

## Lead form

The free-check form posts to FormSubmit and routes successful requests to the noindexed confirmation page. Form handling and retention are disclosed on `privacy.html`.

## Public sample audit

`sample-audit.html` is a responsive, semantic seven-page demonstration using a clearly fictional business and illustrative findings. `assets/sample/nano-sample-ai-visibility-audit.pdf` is its print-ready counterpart; the former filename remains as a compatibility copy. The public sample shows deliverable quality, customer-facing findings, and outcome-level guidance.

## Analytics and privacy

Umami Cloud measures anonymous aggregate page activity and named conversion events. The tracker uses no cookies, respects Do Not Track, excludes query strings and fragments, and never receives form-field values. The authoritative lead-conversion goal is the noindexed `/thanks.html` page after a successful FormSubmit handoff.

Brand fonts are served directly from this repository, so normal page rendering does not make requests to Google Fonts. The custom 404 page intentionally omits analytics and never repeats a missing path, query string, or referrer.

## Deploy

This is the `nanosolutionshq.github.io` user-site repository, so GitHub Pages publishes the `main` branch root. If a custom domain is added later, update canonical, social, schema, crawler, and sitemap URLs together.
