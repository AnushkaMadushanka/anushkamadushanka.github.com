# anushkamadushanka.github.io

**My portfolio.** A React + Vite site with a WebGL avatar that tracks the cursor, loaded only once the browser is idle so it never costs anyone a millisecond of first paint.

[![Live site](https://img.shields.io/badge/🌐-anushkamadushanka.github.io-3ED8E8)](https://anushkamadushanka.github.io)
![React](https://img.shields.io/badge/React-19-61DAFB)
![Vite](https://img.shields.io/badge/Vite-8-646CFF)
![three.js](https://img.shields.io/badge/three.js-r185-000000)

---

## What's interesting in here

**The critical path is ~110 KB gzipped.** No animation library, no particle canvas, no artificial splash delay. Everything that isn't text and CSS is deferred or removed.

**Scroll reveals are pure CSS.** `animation-timeline: view()` runs them off the main thread, so there is no JavaScript on the scroll path at all, which is what keeps INP flat. The whole thing sits behind `@supports`, and the default state is *visible*, so no browser can ever leave content stuck at `opacity: 0`.

**The avatar is a progressive enhancement, gated properly.** `useDeferredEnhancement` mounts the three.js scene only when the browser is idle *and* the device can afford it: desktop width, fine pointer, 4 GB memory or more, no Save-Data, no 2G, no `prefers-reduced-motion`. A touch device would pay 450 KB and a WebGL context for a head that tracks a cursor it doesn't have, so it doesn't.

The static portrait underneath is the real content and always renders. The canvas is transparent and registers over the painted head, so if WebGL fails or the context is lost, the photo simply shows through. There's no error state to manage.

**Dates are computed, never written down.** `duration()` derives every "3 yrs 5 mos" from the start and end months in `src/data/experience.js`. A previous version of this site hardcoded them and spent two years telling people I'd been in a role for "2 yrs 7 mos".

**Testimonial photos degrade to initials.** If a file is missing, the card renders the person's initials in the accent colour, which is a designed state rather than a broken image.

## Structure

```
src/
  data/          all content: profile, experience, work, projects, testimonials
  components/
    layout/      header (accessible disclosure menu), footer
    sections/    hero, work, experience, projects, testimonials, contact
    avatar/      the deferred three.js head
    ui/          Section, Reveal
  routes/        Home, About, NotFound
  styles/        tokens.css, global.css
```

Content lives in `src/data/` and nowhere else. Adding a project is one object in `projects.js`; the card, the image fallback and the layout follow from it.

## Accessibility

Landmarks, one `<h1>` per page, a skip link, and a global `:focus-visible` style. The mobile menu is a real `<button>` with `aria-expanded` / `aria-controls`, closes on `Escape`, returns focus to the toggle, and is `inert` while closed. Every animation is CSS, so `prefers-reduced-motion` is honoured in the stylesheet rather than by a runtime provider.

## Running it

```bash
npm install
npm run dev
```

```
npm run build     production build to dist/
npm run preview   serve the build locally
npm run lint      eslint, zero warnings tolerated
```

Pushing to `main` runs lint → build → deploy via GitHub Actions (`.github/workflows/deploy.yml`). Nothing reaches the site that doesn't compile.

## Stack

| | |
|---|---|
| Framework | React 19, Vite 8 |
| Routing | react-router 7 |
| 3D | three.js, @react-three/fiber |
| Forms | EmailJS (the site stays fully static) |
| Type | Syne + Outfit, self-hosted variable woff2 |
| Hosting | GitHub Pages |
