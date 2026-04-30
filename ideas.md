# Thompson Aid — Design Brainstorm

## Brand Context
- **Company:** Thompson Aid — Moving & Cleaning services in Kamloops, BC
- **Tagline:** "To Your Destination"
- **Brand colors (from existing logo):** Vivid orange (#F26522-ish), charcoal black, white
- **Tone:** Trustworthy, local, efficient, approachable, professional

---

## Response 1 — "Alpine Editorial" (Probability: 0.06)

<response>
<text>
**Design Movement:** Editorial minimalism meeting alpine/outdoor magazine aesthetics (think Kinfolk + Patagonia field-guide). Deeply inspired by the Thompson River valley and BC outdoor living.

**Core Principles:**
- Earthy, grounded, quietly confident
- Large serif display type paired with crisp sans
- Asymmetric editorial layouts with generous whitespace
- Landscape photography as a supporting character

**Color Philosophy:** Warm off-white paper (#FAF7F2) backgrounds, deep forest ink (#1E2A22) text, brand orange used sparingly as an accent — like a highlighter mark, not a flood. Complementary sage (#8DA48A) and river stone gray (#9AA1A0).

**Layout Paradigm:** Editorial grid — 12 columns with intentional overhangs, pull-quotes, captioned imagery, side-margin metadata (numbered sections, small-caps labels). Hero uses a split-layout with the heading breaking across the image.

**Signature Elements:**
- Small-caps numbered section markers ("01 — Services")
- Thin horizontal rules as editorial dividers
- "Field note" style cards with hand-drawn route arrows

**Interaction Philosophy:** Content reveals like turning magazine pages. Gentle parallax on imagery, text fades up on scroll, cursor-follow highlighting on menus.

**Animation:** Slow, cinematic; 600–900ms cubic-bezier easing; letter-by-letter headline reveal; horizontal photo slide transitions.

**Typography:** Display: Fraunces or Playfair Display (serif). Body: Inter or Söhne. UI labels: Inter small-caps with letter-spacing.
</text>
<probability>0.06</probability>
</response>

---

## Response 2 — "Kamloops Workshop" (Probability: 0.09) ✅ SELECTED

<response>
<text>
**Design Movement:** Modern service-brand utility meets "blue-collar premium" — like Stripe-meets-construction-brand. Confident, tactile, honest. Think of how brands like Away, Allbirds Work, or modern contractor sites feel: crisp, but with grit and warmth.

**Core Principles:**
- Utility-first: every element serves a job (quote, call, book)
- Confident bold typography with a warm human edge
- Warm neutrals + punchy brand orange as the hero accent
- Real texture: grain overlays, soft shadows, layered cards, paper-like surfaces

**Color Philosophy:**
- Primary: Brand orange `#F26522` (action, energy, movement)
- Ink: Deep charcoal `#12151A` (authority, trust)
- Warm cream surface `#FAF6F0` (approachable, non-sterile)
- Muted sand `#EDE6D8` for card alternates
- Success green `#2F7A52` used for checks/guarantees
Emotional intent: confident + warm + "we show up on time."

**Layout Paradigm:** Asymmetric grid with strong left-aligned anchor. Large hero with split composition — headline on the left, layered photo collage on the right (truck photo overlapping cleaning photo overlapping a quote-card widget). Services use horizontal service cards with numbered tickers. Pricing uses a comparison table. Blog uses a magazine-style 2-col layout with feature card.

**Signature Elements:**
1. **Orange highlight bars** under key words (like a marker swipe)
2. **Numbered service tickers** ("SRV-01 / Local Moves")
3. **"Proof" chips** — small badges with icons (Licensed, Insured, 5-Star, Local)
4. **Dotted route lines** connecting Kamloops neighborhoods on a stylized map

**Interaction Philosophy:** Snappy, confident, transactional. Hover states lift cards with soft warm shadow. Buttons have a satisfying press-down. Sticky bottom "Get a Quote" CTA on mobile. Numbers count up on scroll.

**Animation:**
- Fade-up with stagger (120ms delay) for sections entering viewport
- Cards tilt 1–2° on hover with shadow growth
- Hero headline slides in from left, photo collage floats in from right with a subtle rotation
- Scroll-driven parallax on the hero truck image (8–12%)
- Sticky page-section progress indicator in the header
- Easing: cubic-bezier(0.22, 1, 0.36, 1) / 350–550ms

**Typography System:**
- Display: **Archivo Black** or **Bricolage Grotesque** (bold, confident, slightly condensed)
- Body: **Inter** (clean, high legibility)
- Accent: **Space Mono** small-caps for metadata (SRV-01, EST. 2023)
Hierarchy rule: Display headings always use tracking-tight + leading-[0.95]. Body uses leading-relaxed. No italics in body text.
</text>
<probability>0.09</probability>
</response>

---

## Response 3 — "Neo-Brutalist Service Board" (Probability: 0.05)

<response>
<text>
**Design Movement:** Neo-brutalism meets service industry — loud, blocky, confident, a little playful. Inspired by Figma's early brand, Vercel marketing 2022, and Gumroad.

**Core Principles:** Heavy borders, saturated orange blocks, zero gradients, hard drop shadows (4px/4px), playful but direct.

**Color Philosophy:** Pure white paper, pure black ink, brand orange as the block color. No mid-tones — everything is either 0% or 100%.

**Layout Paradigm:** Stacked blocks that feel like pinned notice-board cards. Rotation on some cards. Marquee ticker for proof. "Concrete" feel.

**Signature Elements:** Hard 4px black borders, 6px offset black shadows, ticker marquees, pixel icons.

**Interaction Philosophy:** Buttons physically move (translate x/y) on hover to meet their shadow. Toggles click.

**Animation:** Snappy 150ms tweens. No easing curves — linear feels right. Marquee loops.

**Typography:** Space Grotesk for everything; massive headlines (120px+) + monospace metadata.
</text>
<probability>0.05</probability>
</response>

---

## ✅ Selected Approach: Response 2 — "Kamloops Workshop"

**Why:** It best balances local trust, service-industry clarity, and premium feel — exactly what a moving & cleaning business in Kamloops needs to convert visitors into leads while also supporting SEO-rich editorial blog content. It embraces the brand's existing orange + charcoal palette and amplifies it with warm cream surfaces that make the site feel less corporate and more "local team you'd hire."
