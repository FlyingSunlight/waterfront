# Norway: A Guide for Newcomers — Design & Content Plan

> **Independent information site.** Not affiliated with, endorsed by, or speaking
> for the Norwegian government, UDI, IMDi, NAV, or any mosque or organisation
> named on it. All artwork is original SVG created for this project — the
> illustrations are stylised drawings, **not photographs of real people**, and
> no image should ever be captioned as documentary evidence of a real person
> or event. Every figure on the site must carry a source and a date.

## 1. Concept

**"Velkommen. Here is what is true."**

A long-form, warm, editorial, mobile-first English-language guide to Norway for
Arabic- and Urdu-speaking newcomers — written for people from Gaza, Palestine
and Pakistan, and useful to anyone arriving. It celebrates what is genuinely
good about Norway and its Muslim community, and it tells the truth about how
people actually get there and what they are actually entitled to.

Tone: warm, dignified, generous, concrete. Never salesy. Never pitying. It
speaks to an adult making a serious decision, and it respects them enough to
give them real numbers and real rules.

### The editorial rule that governs everything

**Accuracy is not a constraint on the welcome — it *is* the welcome.**

This site is attractive because Norway genuinely is generous, and because the
guide is genuinely honest. Those are the same asset. A newcomer who arrives
with correct expectations succeeds; one who arrives on a false promise does
not, and pays for it with money, years and sometimes their life.

Therefore:

1. **No figure without a source and a year.** If a fact cannot be sourced to
   UDI, IMDi, NAV, SSB, Helsenorge, Skatteetaten, Lovdata or Regjeringen,
   it does not go on the page. Write "check the current figure with UDI"
   rather than inventing one.
2. **Never imply that arriving produces entitlement.** Almost every benefit on
   this site follows from a *legal status* — a residence permit, registration
   in Folkeregisteret, membership of Folketrygden, a grant of protection.
   Every benefits section must say which status unlocks it.
3. **The routes section is not optional and must not be softened.** Norway
   issues no asylum visa; a claim must be made on Norwegian soil or at the
   border; some nationalities are refused at very high rates. Saying so is
   the single most useful thing this site does. Lead readers toward the routes
   that actually work — skilled work, study, family — with equal warmth.
4. **No fabricated testimonials.** No invented person, quote, photo or success
   story presented as real. Illustrative composites must be labelled
   *Illustration* / *تصوير توضيحي*. Prefer documented, citable history.
5. **Positive, not partial.** Foreground what is good — there is a great deal.
   Do not manufacture the good, and do not delete a decisive fact because it
   is inconvenient. Difficulty is framed as *preparation*, not discouragement.
6. **No legal advice.** Point to free, named, real sources of help (UDI,
   NOAS, Jussbuss, Røde Kors) rather than telling anyone what their case is
   worth.

## 2. Visual system

Nordic light meets Islamic geometry: deep fjord blue and snow-paper, aurora
green and brass, with eight-fold star and girih patterning used as quiet
ornament — never as decoration-for-its-own-sake.

### Palette (CSS custom properties in `css/style.css`)
| Token | Value | Use |
|---|---|---|
| `--fjord` | `#0b1d2e` | deep section bg |
| `--fjord-2` | `#12293e` | dark cards |
| `--fjord-3` | `#1b3a55` | (see CSS) raised dark surface |
| `--snow` | `#f7f5f0` | light section bg |
| `--snow-2` | `#eeeae1` | light cards |
| `--aurora` | `#3fbf9a` | primary accent, dark sections |
| `--aurora-deep` | `#1f8f74` | accent on light |
| `--brass` | `#c9a227` | lamps, ornament, numerals |
| `--tile` | `#1f8a8a` | Islamic tilework teal |
| `--rose` | `#ba0c2f` | Norwegian flag red, used sparingly |
| `--amber` | `#e8a33d` | midnight-sun warmth |

### Typography
- Latin headings: `"Source Serif 4", serif`
- Latin body: `"Inter", sans-serif`
- Arabic: `"Amiri", serif` — used for real Arabic section titles
- Urdu: `"Noto Nastaliq Urdu", serif` — used for real Urdu section titles
- Body 16px/1.85. Headings tracked slightly wide.
- Arabic/Urdu strings must carry `dir="rtl"` and `lang="ar"` / `lang="ur"`.
  **Only use Arabic/Urdu you are confident is correct** — a wrong translation
  in a heading is worse than an English-only heading.

### Layout
- Mobile-first. Content column `max-width: 44rem`; full-bleed art bands.
- Sections alternate fjord/snow. Each opens with `.section-label` (numbered
  + English label + script title), then `h2.heading-xl`.
- `--space-section: clamp(4.5rem, 13vw, 8rem)`.

### SVG art style
Flat editorial illustration with a limited palette, soft geometric shapes,
long Nordic light. People are drawn as warm, dignified, non-caricatured
figures — varied dress including hijab, worn as ordinary clothing, never as
a visual punchline or a symbol of distress. No rasters, no external refs,
`viewBox` set, responsive, `role="img"` with a real `alt`.

## 3. Page structure (single long page `index.html`)

| # | File | Section |
|---|---|---|
| 01 | `01-hero.html` | Hero — Velkommen, the promise of the page |
| 02 | `02-why.html` | Why Norway — safety, trust, nature, work-life |
| 03 | `03-routes.html` | **How people actually come** — the honest core |
| 04 | `04-asylum.html` | If you seek protection — the real process |
| 05 | `05-intro-programme.html` | Introduksjonsprogrammet — the two-year start |
| 06 | `06-money.html` | Money: benefits, allowances, what unlocks them |
| 07 | `07-health.html` | Healthcare & dental |
| 08 | `08-education.html` | Language, school, university, Lånekassen |
| 09 | `09-family.html` | Children, barnetrygd, parental leave, kindergarten |
| 10 | `10-housing.html` | Housing: mottak, bosetting, bostøtte, Husbanken |
| 11 | `11-work.html` | Work: shortages, recognition of qualifications |
| 12 | `12-muslim-life.html` | The Muslim community — history & presence |
| 13 | `13-mosques.html` | Mosques & Islamic institutions directory |
| 14 | `14-halal.html` | Halal everyday life — food, burial, prayer, finance |
| 15 | `15-family-values.html` | Family life & values in Norwegian law |
| 16 | `16-realities.html` | What to prepare for — honest, constructive |
| 17 | `17-faq.html` | FAQ |
| 18 | `18-resources.html` | Real links & free help |
| 19 | `19-outro.html` | Closing + full disclaimer |

Assembly: `head.html` + `sections/*.html` in filename order + `foot.html`
→ `index.html`, concatenated by `./build.sh`.

## 4. Shared markup contract (sections MUST use these classes)

```html
<section class="section section--fjord" id="money">
  <div class="container">
    <p class="section-label"><span class="num">06</span> MONEY
      <span class="script" lang="ar" dir="rtl">المال</span></p>
    <h2 class="heading-xl">What you receive, and what unlocks it</h2>
    <p class="lead">…opening…</p>
    <figure class="art art--band">
      <img src="images/xx.svg" alt="…">
      <figcaption>… <span class="illus">Illustration</span></figcaption>
    </figure>
    <p>…body…</p>
  </div>
</section>
```

Components: `.lead`, `.art` + `figcaption`, `.card-grid` + `.card`,
`.fact-table` (figure + unit + source row), `.route-card` (with
`.route-card__verdict`), `.timeline` + `.timeline-item`, `.qa` +
`details.qa-item`, `.note` (neutral aside), `.note--warn` (the honest
caution), `.note--good` (the genuine good news), `.quote-block`,
`.pill-list`, `.step-list`, `.directory` + `.directory-item`,
`.source` (inline citation), `.glow` (aurora wash, last child in section).

### The `.source` rule
Every number renders as: value, then `<span class="source">UDI, 2025</span>`.
No exceptions. This is the site's credibility and its ethics at once.

## 5. Content rules

- Copy in clear, warm English at a readability level that survives translation.
  Short sentences. Concrete nouns. No idiom that breaks in Arabic or Urdu.
- Currency always as `NOK 12,345` with an approximate USD/EUR hint on first
  use in a section, and the year of the figure.
- Any rule that commonly changes (salary thresholds, G, quotas, fees) gets a
  "verify before you rely on this" line pointing at the official page.
- Footer carries: independence disclaimer, "illustrations are not
  photographs", the date the figures were checked, and the free-help links.
