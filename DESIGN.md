# goro's × Trans Women — Concept Site Design Plan

> **Unofficial concept / tribute site.** Not affiliated with or endorsed by goro's.
> All artwork is original SVG created for this project. The logotype is an
> original hand-drawn-style recreation, not the official logo asset.

## 1. Concept

**「銀は、ほんとうの自分を映す。」** — *Silver reflects who you truly are.*

A very long-form, editorial, mobile-first Japanese website that introduces
goro's silver jewelry culture to trans women: the history, the motifs and their
meanings, how to choose and style pieces, how the Harajuku store's lottery
system works, and how to shop safely and confidently.

Tone: 敬意・静けさ・誇り (respect, quietness, pride). Luxury editorial, never
salesy, never tokenizing. Trans-flag colors appear only as soft light
gradients — an aurora, a dawn sky — woven into an otherwise ink-and-silver
world.

## 2. Visual system

### Palette (CSS custom properties, defined in `css/style.css`)
| Token | Value | Use |
|---|---|---|
| `--ink` | `#0e0e11` | dark section bg |
| `--ink-2` | `#17171c` | dark cards |
| `--paper` | `#f7f4ee` | light section bg |
| `--paper-2` | `#efeae1` | light cards |
| `--silver` | `#c9cdd6` | metal mid |
| `--silver-hi` | `#eef1f6` | metal highlight |
| `--turquoise` | `#3aa8a0` | goro's turquoise inlay |
| `--gold` | `#c9a24b` | 金メタル accents |
| `--trans-blue` | `#5BCEFA` | soft gradient light only |
| `--trans-pink` | `#F5A9B8` | soft gradient light only |
| `--text-ink` | `#1c1b19` | body text on paper |
| `--text-paper` | `#e8e6e1` | body text on ink |

### Typography
- Headings: `"Shippori Mincho", serif` — classical, engraved feel
- Body: `"Zen Kaku Gothic New", sans-serif`
- Loaded via Google Fonts in `index.html` head.
- Body 16px/1.9, headings tracked wide (`letter-spacing: .08em`).
- Vertical text accents (`.tategaki`) for section openers.

### Layout
- Mobile-first. Content column `max-width: 42rem`; full-bleed image bands.
- Sections alternate ink/paper. Each opens with `.section-label`
  (numbered `壱 弐 参 …` + romanized label), then `h2.heading-xl`.
- Generous whitespace: `--space-section: clamp(5rem, 14vw, 9rem)`.

### SVG art style (all images are inline-able SVG files in `images/`)
- Engraved line-art: strokes `#c9cdd6`→`#eef1f6` gradients on dark,
  `#6b6f78` lines on paper. Turquoise/gold fills only where the real
  materials appear. No external refs, no rasters. `viewBox` set, responsive.

## 3. Page structure (single long page `index.html`)

| # | File | Section | Owner |
|---|---|---|---|
| 01 | `sections/01-hero.html` | Hero: logo, eagle art, concept copy | Agent A |
| 02 | `sections/02-story.html` | goro's の物語 — Goro Takahashi history | Agent A |
| 03 | `sections/03-philosophy.html` | 銀とアイデンティティ — why silver speaks to trans women | Agent B |
| 04 | `sections/04-motifs.html` | モチーフ事典 — feather/eagle/sun/moon/wheel meanings | Agent B |
| 05 | `sections/05-feathers.html` | コレクション：フェザー | Agent C |
| 06 | `sections/06-pendants.html` | コレクション：イーグル・ホイール・ビーズ | Agent C |
| 07 | `sections/07-styling.html` | スタイリング — femme styling guide for trans women | Agent D |
| 08 | `sections/08-sizing.html` | サイズとフィット | Agent D |
| 09 | `sections/09-buying.html` | 原宿本店と抽選 — how to buy | Agent E |
| 10 | `sections/10-care.html` | 銀のケア | Agent E |
| 11 | `sections/11-community.html` | コミュニティと安心して買うために | Agent F |
| 12 | `sections/12-faq.html` | FAQ | Agent F |
| 13 | `sections/13-outro.html` | 結び + disclaimer footer | Agent F |

Assembly: `head.html` + sections in order + `foot.html` → `index.html`
(concatenated by the lead).

## 4. Shared markup contract (agents MUST use these classes)

```html
<section class="section section--dark" id="story">   <!-- or section--paper -->
  <div class="container">
    <p class="section-label"><span class="num">弐</span> STORY</p>
    <h2 class="heading-xl">goro's の物語</h2>
    <p class="lead">…導入文…</p>
    <figure class="art art--band"><img src="images/xx.svg" alt="…"></figure>
    <p>…本文…</p>
    <div class="card-grid"> <article class="card">…</article> … </div>
  </div>
</section>
```

Available components: `.lead`, `.art`(figure) with `figcaption`, `.card-grid`
+ `.card`, `.product-card` (image + `h3` + `.product-meta` + description),
`.timeline` + `.timeline-item`, `.qa` + `details.qa-item`, `.note`,
`.quote-block`, `.pill-list`, `.step-list`, `.aurora` (soft trans-gradient
glow div, position last inside section).

## 5. Content rules

- All copy in natural, polished Japanese (敬体 base, poetic fragments OK).
- Factual accuracy about goro's: Goro Takahashi (高橋吾郎, 1939–2013),
  leatherwork beginnings in the 1950s, travels to the U.S., initiation into
  Lakota culture and the name "Yellow Eagle", the Harajuku store, the
  first-come/lottery entry culture, one-purchase norms, no online sales,
  beware of fakes/resale. If unsure, write cautiously (「〜と言われています」).
- Trans women audience: empowering, practical, dignified. No stereotypes,
  no medical claims, no fabricated testimonials presented as real — any
  illustrative voice must be labeled 「イメージ」.
- Footer must carry the unofficial-concept disclaimer.

## 6. Interactions (`js/main.js`, by lead)

- IntersectionObserver scroll-reveal (`.reveal` auto-applied to section children)
- Sticky top nav (appears after hero) with smooth-scroll anchor links
- Reduced-motion respected.
