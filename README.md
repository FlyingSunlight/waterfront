# 銀は、ほんとうの自分を映す。

A long-form Japanese concept website introducing **goro's** silver jewelry
culture to trans women — history, motif meanings, styling, sizing, the
Harajuku store's purchasing culture, care, community, and FAQ.

> **Unofficial concept / tribute site.** Not affiliated with or endorsed by
> goro's. All illustrations (including the emblem) are original SVG artwork
> created for this project; no official photos or logo assets are used.

## Structure

- `index.html` — the assembled single-page site (mobile-first)
- `head.html` / `sections/*.html` / `foot.html` — source fragments
- `build.sh` — concatenates the fragments into `index.html`
- `css/style.css` — design system (see `DESIGN.md` for the full plan)
- `js/main.js` — sticky nav, scroll reveal, smooth anchors
- `images/*.svg` — original engraved-style illustrations

## Develop

Edit a fragment in `sections/`, then run `./build.sh` and open `index.html`.
