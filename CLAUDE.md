# MediYou Next.js — Claude Context

## Project Overview

Healthcare landing page for **MediYou** — a surgery coordination service in Pune and Delhi.  
This is the **Next.js 15 migration** of the original Vite + React project (`MediYou Landing page/react-app`).

**Brand colors:** Green `#00a885` · Orange `#ff742d`  
**Tagline:** Aap Ki Sehat Ka Naya Sathi

---

## Tech Stack

- **Next.js 15** (App Router)
- **React 19**
- No TypeScript — plain `.jsx` files
- No component library — all custom CSS

**Run locally:**
```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

---

## Folder Structure

```
MediYou_next/
├── app/
│   ├── layout.js          ← imports tokens.css + globals.css, sets <html> metadata
│   └── page.js            ← root page, 'use client', renders all sections
├── components/            ← all UI components (all have 'use client')
│   ├── Loader.jsx
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── HeroForm.jsx
│   ├── Stats.jsx
│   ├── Specialities.jsx
│   ├── WeightLoss.jsx
│   ├── HowItWorks.jsx
│   ├── WhyMediYou.jsx
│   ├── Insurance.jsx
│   ├── Surgeons.jsx
│   ├── Reviews.jsx
│   ├── CTABanner.jsx
│   ├── Cities.jsx
│   ├── Footer.jsx
│   └── PopupModal.jsx
├── context/
│   └── PopupContext.jsx   ← 'use client', global popup state
├── hooks/
│   └── useScrollReveal.js ← 'use client', IntersectionObserver scroll animations
├── styles/
│   ├── tokens.css         ← CSS custom properties + @font-face (absolute font paths)
│   └── globals.css        ← all component styles
└── public/
    ├── logo.png
    └── design-system/
        └── fonts/         ← Helvetica Neue .otf files
```

---

## Next.js-Specific Rules

### `'use client'` is required on everything
All components use React hooks (`useState`, `useEffect`, `useRef`) or browser APIs (`window`, `document`, `IntersectionObserver`). Every file in `components/`, `context/`, and `hooks/` has `'use client'` as its first line. The `app/page.js` also has `'use client'`.

`app/layout.js` is a Server Component — it only imports CSS and renders `{children}`. Do not add hooks or browser APIs there.

### CSS imports
Both CSS files are imported in `app/layout.js`:
```js
import '../styles/tokens.css'
import '../styles/globals.css'
```
This replaces the `<link>` tag approach used in the Vite version's `index.html`.

### Font paths must be absolute
`styles/tokens.css` uses absolute paths for `@font-face`:
```css
src: url("/design-system/fonts/HelveticaNeueRoman.otf")
```
The original Vite project used relative paths (`fonts/...`). Do not change these back to relative.

### No `index.html`
Page `<head>` metadata (title, description, og tags) is set via the `metadata` export in `app/layout.js`. Edit there to update SEO.

### Deployment (Vercel)
- Root Directory: `MediYou_next` (or `.` if repo root is this folder)
- Framework Preset: Next.js (auto-detected)
- Build Command: `npm run build`
- Output: `.next` (auto-detected, do not change)

---

## Design System

All CSS custom properties are in `styles/tokens.css`. Full list:

```css
--medi-green: #00a885          --medi-green-dark: #007d63
--medi-green-tint: #e6f7f3     --medi-orange: #ff742d
--medi-orange-dark: #d95e1e    --medi-orange-tint: #fff2ec
--fg-strong: #1f2937           --fg-muted: #6b7280
--text-soft: #6b7280           --bg-footer: #0f1a2e
--font-sans: "Helvetica Neue", Helvetica, Arial, sans-serif
--radius-sm: 10px  --radius-md: 14px  --radius-lg: 16px
--ease-out: cubic-bezier(0.22, 0.61, 0.36, 1)
--transition-base: 200ms var(--ease-out)
--focus-ring: 0 0 0 4px rgba(0,168,133,0.18)
```

---

## CSS Patterns

### Seamless background throughout the page
`body` uses a two-layer background:
- Layer 1 (scroll): green dot grid `radial-gradient(rgba(0,168,133,0.13) 1px, transparent 1px)` at `28px 28px`
- Layer 2 (fixed): mint gradient `linear-gradient(135deg, #ffffff 0%, #f0fdf9 45%, #e6f7f3 100%)`

All sections and the hero are `background: transparent` so the same fixed gradient shows through everywhere — no seams.

### Glassmorphism cards
```css
background: rgba(255,255,255,0.65);
backdrop-filter: blur(14px);
-webkit-backdrop-filter: blur(14px);   /* always include for Safari */
border: 1px solid rgba(255,255,255,0.85);
box-shadow: 0 4px 20px rgba(0,0,0,0.06);
```

### Scroll reveal — critical rule
`useScrollReveal()` returns a `ref`. The ref **must be on the same element** that has the `reveal` or `reveal-stagger` class. Placing it on a parent means `.in` never reaches the right element and content stays invisible.

```jsx
const ref = useScrollReveal()
<div className="reveal-stagger" ref={ref}>   {/* ✓ ref on the reveal element */}
  <Child />
  <Child />
</div>
```

### Floating label form fields
```jsx
<div className={`field${filled ? ' is-filled' : ''}`}>
  <input onChange={e => setFilled(e.target.value.length > 0)} />
  <label>Label text</label>
</div>
// For selects: className="field has-value" (always floated)
```

### Button optical correction
All `.btn` use `padding: 1px 22px 0` — the 1px top offset corrects Helvetica Neue's vertical misalignment.

---

## Component Notes

### Navbar
- Desktop: logo · nav-links · "Book FREE Consultation"
- Mobile (≤920px): logo + "Book a Call" `tel:` button only, auto-spaced with `margin-left: auto`
- Burger menu is hidden — no mobile drawer implemented yet
- Scroll: adds `.scrolled` at 60px, `.hidden` when scrolling down fast

### Hero
- Mouse parallax via `requestAnimationFrame` loop with lerp factor `0.055`
- Blob wrappers (`.hero-blob-wrap`) receive JS `transform`; inner blobs run `blobDrift` CSS animation — separate elements prevent transform conflicts
- Entrance: `cubic-bezier(.19,1,.22,1)` at 900ms per element, staggered 80ms apart
- CTA 1: `href="tel:+919000000000"` · CTA 2: smooth scroll to `#specialities`
- `prefers-reduced-motion` respected — all animations collapse

### Stats
- `.stats-float-card` is a visual glass wrapper only — no reveal class
- `reveal-stagger` ref is on `.stats-grid` so the 4 counters are direct children that stagger
- Each `StatCounter` has its own `IntersectionObserver` for the animated number count-up

### Popup
- `PopupProvider` wraps the full page in `app/page.js`
- Auto-shows after 5 seconds, once per session (`sessionStorage` key `popup_shown`)
- Any component triggers it via: `const { openPopup } = usePopup()`
- Currently triggered by: WeightLoss CTA, CTABanner button, Footer treatment links
- Body scroll is locked while open

---

## Gotchas

- **`var(--text-soft)`** is defined in tokens.css — WhyMediYou and Insurance use it. Don't remove.
- **`backdrop-filter`** always needs `-webkit-backdrop-filter` alongside it for Safari.
- **`review-card:hover`** intentionally has no `transform` — only border-color changes on hover (user preference).
- **Unsplash images** use URL params: `?w=400&h=280&fit=crop&auto=format&q=80`. Always include for performance.
- **`IntersectionObserver`**, `sessionStorage`, `window`, `document` are all used inside `useEffect` — safe for SSR because effects only run client-side.
- If adding a new component that uses any hook or browser API, always add `'use client'` as the first line.
