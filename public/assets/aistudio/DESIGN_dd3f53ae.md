---
name: Executive Clinical Monograph
colors:
  surface: '#fbf8fc'
  surface-dim: '#dcd9dd'
  surface-bright: '#fbf8fc'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f2f7'
  surface-container: '#f0edf1'
  surface-container-high: '#eae7eb'
  surface-container-highest: '#e4e1e6'
  on-surface: '#1b1b1e'
  on-surface-variant: '#404944'
  inverse-surface: '#303033'
  inverse-on-surface: '#f3f0f4'
  outline: '#707974'
  outline-variant: '#bfc9c3'
  surface-tint: '#306855'
  primary: '#003426'
  on-primary: '#ffffff'
  primary-container: '#0f4c3a'
  on-primary-container: '#82bba4'
  inverse-primary: '#99d3ba'
  secondary: '#5c5f62'
  on-secondary: '#ffffff'
  secondary-container: '#e1e2e7'
  on-secondary-container: '#626468'
  tertiary: '#4e1f00'
  on-tertiary: '#ffffff'
  tertiary-container: '#703000'
  on-tertiary-container: '#ff9454'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#b4efd6'
  primary-fixed-dim: '#99d3ba'
  on-primary-fixed: '#002117'
  on-primary-fixed-variant: '#15503e'
  secondary-fixed: '#e1e2e7'
  secondary-fixed-dim: '#c5c6ca'
  on-secondary-fixed: '#191c1f'
  on-secondary-fixed-variant: '#44474a'
  tertiary-fixed: '#ffdbca'
  tertiary-fixed-dim: '#ffb68e'
  on-tertiary-fixed: '#331200'
  on-tertiary-fixed-variant: '#763300'
  background: '#fbf8fc'
  on-background: '#1b1b1e'
  surface-variant: '#e4e1e6'
  surface-canvas: '#FAF9F6'
  surface-card: '#FFFFFF'
  surface-border: '#E6E4DF'
  surface-dark: '#121518'
  surface-dark-elevated: '#1C2126'
  brand-primary-hover: '#0A3629'
  text-muted: '#52525B'
typography:
  display-hero:
    fontFamily: Plus Jakarta Sans
    fontSize: 56px
    fontWeight: '800'
    lineHeight: 64px
    letterSpacing: -0.03em
  display-hero-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 36px
    fontWeight: '800'
    lineHeight: 42px
    letterSpacing: -0.025em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.025em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 34px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: -0.02em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.015em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 30px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
  label-mono-md:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 18px
    letterSpacing: 0.04em
  label-mono-sm:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 14px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 3rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system embodies the rare convergence of senior clinical governance, health systems engineering, and executive leadership. Built around the dual identity of a medical director and technology strategist, it projects unwavering authority, analytical precision, and deep institutional trust. The visual tone is scholarly yet operationally focused—wholly rejecting disposable trends, saturated neon accents, and generic AI tropes in favor of an enduring, monograph-level reading experience.

The aesthetic fuses two deliberate paradigms:
- **Clinical Monograph Editorial:** Rooted in classic academic medical publishing. High-readability Warm Alabaster surfaces, crisp paper cards, hairline dividers, and disciplined typographic rhythm provide an environment optimized for dense, high-stakes clinical narratives and governance metrics.
- **Midnight Charcoal Executive Bento:** Strategic deep-value sections (Executive Hero and Footer CTA) contrast against the editorial reading canvas. These compartments use tight, structural bento grids with charcoal layers to spotlight quantifiable achievements, logic-governance metrics, and high-level accreditations.

Visual hierarchy is maintained through strict restraint: 90% of the surface area remains disciplined neutrals and rich inky slate, punctuated only by Deep Clinical Emerald for confirmed actions and Muted Brass for accredited milestones. The emotional takeaway is immediate: decisive competence, institutional integrity, and zero friction.

## Colors

The color palette adheres to a strict chromatic hierarchy engineered to exceed WCAG 2.1 AAA accessibility thresholds while sustaining an executive medical tone.

### Palette Roles & Boundaries
- **Deep Clinical Emerald (`#0F4C3A`):** The primary brand accent and single authoritative action color. Used for active interactive states, primary action buttons, key indicators, and validated clinical pathways. At `9.6:1` contrast against light backgrounds, it conveys clinical safety and decisive execution. Primary hover transitions directly to `#0A3629`.
- **Midnight Charcoal (`#121518`) & Charcoal Slate (`#1C2126`):** The structural executive bedrock. Applied to high-contrast containment areas such as the Hero Bento container, high-level metric strips, and closing executive declarations. It provides architectural anchoring without resorting to harsh true-black.
- **Muted Brass (`#B45309`):** Reserved exclusively for urgency callouts, accreditation tags (e.g., Paripurna), and pending governance states. Capped strictly at under 5% total visible screen area to preserve its visual alert value.
- **Warm Alabaster (`#FAF9F6`) & Crisp Paper (`#FFFFFF`):** Form the primary editorial body surface. Warm Alabaster reduces macular glare across long clinical readings, while Crisp Paper isolates specific case studies, projects, and credential modules with subtle `#E6E4DF` perimeter borders.
- **Ink Slate (`#18181B`) & Muted Stone (`#52525B`):** The primary and secondary typographic ink values, producing high-clarity reading dynamics without visual fatigue.

## Typography

The typographic system is built upon functional separation of duty across three typefaces:

1. **Display & Headings (Plus Jakarta Sans):** Set with tight tracking (`-0.02em` to `-0.03em`) and substantial weight (`700`–`800`). It commands executive presence in hero panels and creates stark, structured landmarks across lengthy editorial documents.
2. **Body Narrative (Inter):** Serves all continuous editorial reading, clinical elaborations, and case-study documentation. Rendered with an open line height (`1.6`–`1.65`) and constrained strictly to a maximum reading width of `65ch` to maintain optimal saccadic eye movements.
3. **Clinical Metadata & Telemetry (JetBrains Mono):** Reserved for quantitative proof points, system status tags, accreditation codes, audit timestamps, and data ledgers. Rendered in clean uppercase tracking to evoke the feel of real-time clinical monitoring and operational rigor.

## Layout & Spacing

The layout operates on a flexible 12-column grid system calibrated to an 8px baseline rhythm (with 4px micro-steps for compact UI badges). Content spans a fluid viewport between `360px` and `1440px` with zero horizontal overflow.

### Structural Patterns
- **Executive Bento Layout:** Used across high-stakes summary segments. Cards snap to clear integer grid intervals (e.g., 8-column main proof panel coupled with a 4-column live status metric ledger).
- **Asymmetric Credential Ledger:** A structured two-column presentation for executive credentials. Desktop allocates a 38% left column for executive photography and primary CV retrieval, paired with a 62% right column containing chronological clinical governance ledgers. On mobile viewports below `768px`, this collapses gracefully into a linear single-column flow.
- **Capabilities Matrix:** Formatted as an open `2×2` editorial grid on desktop and tablet, collapsing to a single-column sequence on mobile screens.
- **Touch Target Integrity:** All interactive elements, floating pill nodes, and ledger triggers maintain an absolute minimum touch boundary of `44px × 44px`.

## Elevation & Depth

Visual hierarchy rejects exaggerated drop shadows and blurred skeuomorphic depths. Instead, structure is achieved through **tonal layering**, **hairline border framing**, and **seamless gradient blending**:

- **Light Canvas Elevation:** The base Warm Alabaster (`#FAF9F6`) canvas sits underneath white Crisp Paper (`#FFFFFF`) cards. Physical definition is created by a crisp 1px hairline border (`#E6E4DF`), eliminating the need for heavy blur shadows and maintaining an authentic monograph print feel.
- **Dark Bento Elevation:** Dark executive surfaces utilize Charcoal Slate (`#1C2126`) set inside Midnight Charcoal (`#121518`) containers. Depth is conveyed purely through surface luminance differentials and micro-borders (`rgba(255, 255, 255, 0.08)`).
- **Portrait Blending:** Executive and clinical portraits integrate directly into their container cards via directional fade masks and black-point tonal matching, avoiding artificial cutouts or floating avatar bubbles.
- **Floating Controls:** Specialized persistent utilities, such as the top navigation bar, employ a floating pill treatment with an ultra-subtle ambient shadow (`0 8px 24px rgba(18, 21, 24, 0.06)`) and an 80% opacity frosted backdrop blur.

## Shapes

The shape architecture balances clinical structure with refined modern interaction:

- **Cards & Bento Panels (`rounded-lg` / 16px):** Standard containers use a measured 16px corner radius. This softens the grid while preserving the architectural discipline expected of institutional medical communications.
- **Featured Media (`rounded-xl` / 24px):** Applied selectively to primary executive portraiture containers to highlight human leadership within the analytical framework.
- **Interactive Controls & Status Badges (Pill / Full Radius):** Floating navigation bars, action buttons, category tags, and monospace status chips adopt a full pill radius. This contrast clearly distinguishes actionable controls and status nodes from static structural containers.
- **Avatars (50% Circle):** Navigation identity indicators and author tokens are locked to exact 1:1 circle geometry.

## Components

### Buttons
- **Primary Action:** Solid Deep Clinical Emerald (`#0F4C3A`) background with Crisp Paper (`#FFFFFF`) text. Pill-shaped, minimum height of 48px, horizontal padding of 24px. Hover state shifts instantly to `#0A3629` via a smooth 150ms ease.
- **Secondary / Ghost Action:** Transparent background bounded by a 1px solid border (`#E6E4DF` on light; `rgba(255, 255, 255, 0.15)` on dark). Text uses Primary Ink Slate or light Crisp Paper. Hover applies a 5% surface tint.
- **Monograph Text Link:** Primary Ink with an explicit underline offset of 4px. Hover shifts color to Primary Accent without movement.

### Chips & Micro-Badges
- **Status Tags (JetBrains Mono):** Full-pill geometry, 4px vertical by 10px horizontal padding. Background is a 10% tint of the semantic color (Emerald for operational, Brass for pending/urgent) with solid foreground text. Often prefixed with a status dot indicator (`●`).
- **Accreditation Badge:** Muted Brass border, subtle Warm Alabaster fill, and dark brass text denoting certifications and verified years of service.

### Cards & Bento Modules
- **Editorial Card:** Solid Crisp Paper (`#FFFFFF`) background, 1px `#E6E4DF` border, 24px to 32px internal padding. Typographic structure leads with a JetBrains Mono category label, followed by a bold Plus Jakarta Sans headline, and concluding with constrained Inter body copy.
- **Dark Metric Module:** Solid Charcoal Slate (`#1C2126`) background framed within Midnight Charcoal (`#121518`). Large monospace numeric readouts accompanied by compact secondary descriptions.

### Lists & Ledger Entries
- **Experience Ledger:** Monograph row structure separated by 1px hairline dividers. Left column holds the monospace date range or hospital code; right column contains the role, institution, and outcome metrics. Hover state triggers a subtle Warm Alabaster surface highlight.

### Input Fields & Controls
- **Form Inputs:** Crisp Paper background, 1px `#E6E4DF` border, 12px vertical by 16px horizontal padding, 8px corner radius. Focused state introduces a 1px border highlight in Deep Clinical Emerald (`#0F4C3A`) with zero glow or drop-shadow artifacting.
- **Floating Pill Navigation:** Centered floating container housing the 36px circular avatar, pill text links, and the primary contact trigger, maintaining fixed viewport orientation with a backdrop blur filter.