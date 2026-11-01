# Design system — Chan Rim research portfolio

## Direction

Taste Skill direction: **Type and nothing else**, seed `485765802`.

Idea sentence: On this page, microglia’s change from surveillance to clearance to senescence becomes the navigation and visual rhythm.

The hero is a typographic field. Scientific images begin only after the opening screen and are treated as evidence rather than decoration. The page moves through hard colour chapters like changes of cellular state.

## Live element

The Research Lens control switches among Surveillance, Clearance and Senescence. Each choice changes the microscopy image, question, and related evidence together. It must remain keyboard accessible and readable without animation.

## Type

- Family: General Sans only, weights 400, 500 and 700.
- Display: 700, `0.9` leading, `-0.02em` tracking.
- Body: 400, `1.45` leading.
- Five steps only: small 13–14px, body 17–19px, lead 20–26px, head 32–64px, display 50–190px.
- Headlines are sentence case and never exceed two lines at 1440px, 768px or 390px.

## Colour

- Yellow ground: `#ffd249`; yellow surface: `#f5c63c`; ink: `#0a0a0a`; muted: `#5e4a0a`.
- Button accent only: `#f53fd6` with black text.
- Chapter fields: white `#ffffff`, pink `#ffc4ef`, cyan `#a4f6f8`, orange `#f9a21f`.
- Closing field: black with white ink.
- Flat fills only. No gradients, glows or resting shadows.

## Frame and spacing

- Outer margin: `clamp(16px, 2.2vw, 32px)` on both sides.
- One 12-column grid with 12–24px gutters.
- Section spacing: 120–220px desktop, 72–104px phone unless colour fields meet directly.
- No centred max-width wrapper around the page. Running text alone is limited in `ch`.
- Images use square corners, no frames, no borders, no shadows.

## Section blueprint

- Hero: giant single-line `CHAN RIM`, supporting sentence top-left, navigation top-right, one action, facts at the lower corners. On phone, one microscopy image occupies the lower portion.
- Profile: large statement paired with a living microscopy square and a short biography.
- Research Lens: interactive state names on the left, one large changing image and evidence block on the right.
- Publications: filterable archive using filled rows, grouped by year, no divider rules.
- Trajectory: oversized years and statements alternating with an uneven microscopy composition.
- Fellowship: orange field, the programme value as the dominant type, a full-height cortex image, project details.
- Contact: display-size address rows in alternating flat tones.
- Footer: invitation and credits above a cropped giant name on black.

## Motion

- Signature: giant name scales from `1` to `0.94` as the hero exits.
- Hero settles within 1.2 seconds; content is present on first paint.
- Research Lens image uses one shutter change; section headings use varied, once-only entrances.
- Microscopy video plays only while visible and stops for reduced motion.
- Hover feedback: 180ms; UI transitions: 240ms; reveals: 800ms; image opening: 1200ms.
- Every travel/scale effect is disabled under `prefers-reduced-motion: reduce`.

## Prohibited defaults

No eyebrows, decorative numbering, monospace, thin rules, outlined card grids, gradients, shadows at rest, glass effects, icon-topped feature cards, styled headline words, fake metrics, decorative shapes, custom cursor, preloader, scroll hijacking or repeated identical fade-ups.
