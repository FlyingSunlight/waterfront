# Velkommen til Norge — an honest guide to Norway for newcomers

A long-form, mobile-first English-language guide to living in Norway, written
for Arabic- and Urdu-speaking newcomers and useful to anyone arriving. It
covers what Norway genuinely provides — the introduction programme, healthcare,
schooling, child benefit, housing support — who each of those things is
actually offered to, and how people actually obtain residence.

> **Independent information site.** Not affiliated with, endorsed by, or
> speaking for the Norwegian government, UDI, IMDi, NAV, or any mosque or
> organisation named on it. It is not legal advice.

## The editorial rule

Accuracy is the welcome, not a constraint on it. Three rules govern every
section, and they are enforced in `DESIGN.md`:

1. **No figure without a source and a year.** Every number on the page renders
   with a linked citation chip naming the body that publishes it.
2. **Never imply that arriving produces entitlement.** Nearly every benefit
   follows from a *legal status* — a permit, a grant of protection,
   registration in Folkeregisteret. Every section says which status unlocks it.
3. **The routes section is not softened.** Norway issues no asylum visa, a
   claim can only be made on Norwegian soil or at the border, and recognition
   rates differ sharply by nationality. Saying so is the most useful thing the
   site does.

## Provenance of the figures

Figures were compiled in September 2026 from published official sources (UDI,
IMDi, NAV, SSB, Helfo, Lovdata, Regjeringen, EUAA). **They were gathered via
web search rather than by reading the primary documents**, because the build
environment blocked outbound access to Norwegian government domains. Figures
that could not be corroborated were deliberately left out or described
qualitatively rather than published as precise numbers — see the `[SHAKY]`
markers in the working notes. Source links point at the publishing body;
government sites move pages often, so the Norwegian name of every benefit is
given in the text so a reader can search for it.

Anyone maintaining this site should re-verify the figures against the live
sources before relying on them.

## Structure

- `index.html` — the assembled single-page site (built, do not edit by hand)
- `head.html` / `sections/*.html` / `foot.html` — source fragments
- `build.sh` — concatenates the fragments into `index.html`
- `css/style.css` — design system (see `DESIGN.md`)
- `js/main.js` — sticky nav, scroll reveal, scrollspy, smooth anchors
- `images/*.svg` — original vector illustrations

All artwork is original SVG created for this project. The illustrations are
stylised drawings, **not photographs**, and do not depict real, identifiable
people or specific real events.

## Develop

Edit a fragment in `sections/`, then run `./build.sh` and open `index.html`.

To preview a rendered screenshot without a display:

```sh
/opt/pw-browsers/chromium-1194/chrome-linux/chrome --headless --disable-gpu \
  --no-sandbox --hide-scrollbars --screenshot=out.png --window-size=1280,920 \
  file://$PWD/index.html
```

Note that `js/main.js` reveals content on scroll, so a static screenshot shows
below-the-fold sections as blank unless `.reveal { opacity: 1 }` is overridden.
