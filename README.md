# anushkamadushanka.github.io

**My portfolio site.** A React + Vite single-page app with a 3D avatar that tracks the cursor, and an augmented-reality business card that turns a printed card into an interactive 3D panel in your camera.

[![Live site](https://img.shields.io/badge/🌐-anushkamadushanka.github.io-2ea44f)](https://anushkamadushanka.github.io)
![React](https://img.shields.io/badge/React-18-61DAFB)
![Vite](https://img.shields.io/badge/Vite-4-646CFF)
![three.js](https://img.shields.io/badge/three.js-r158-000000)

[<img src="https://raw.githubusercontent.com/AnushkaMadushanka/anushkamadushanka.github.com/main/docs/screenshot.webp" alt="anushkamadushanka.github.io — hero and My Story sections">](https://anushkamadushanka.github.io)

---

## The AR business card

The piece I most enjoyed building. Visit **[/ar](https://anushkamadushanka.github.io/ar)** on a phone, point the camera at my printed business card, and a 3D panel anchors to it.

It's built on [MindAR](https://github.com/hiukim/mind-ar-js) doing marker tracking against a compiled `.mind` target, rendering through three.js. Once the anchor locks, the scene attaches:

- A **GLB button rig** — LinkedIn, GitHub, CV and home, each a named mesh
- An **image plane** cycling through generated artwork, with a progress ring showing time to the next one

Interaction is raycast-based: a pointer-down builds normalised device coordinates from the click position, casts through the camera into the AR scene, and dispatches on the hit mesh's name (`button_linkedin`, `button_github`, `plane_ai_images`, …). So the buttons floating over the card are genuinely tappable 3D objects, not an HTML overlay pretending to be one.

Because `getUserMedia` requires a secure context, local development runs over HTTPS via `vite-plugin-mkcert` — otherwise the camera never initialises on `localhost`.

## The rest of the site

**3D hero.** A GLB head model rendered with `@react-three/fiber` and `drei`, composited against a static portrait so the page still reads correctly before the model streams in.

**Motion throughout.** Framer Motion drives scroll-triggered reveals with staggered delays across the hero, experience bento grid, projects and testimonials.

**Loading orchestration.** Every route is `React.lazy`-loaded, and a `LoadingContext` coordinates the splash screen. It holds the splash for a minimum window rather than flashing it — and `body-scroll-lock` freezes the page underneath so you can't scroll a half-rendered site.

**Contact form.** Formik + Yup validation, delivered through EmailJS, so the site stays fully static with no backend to run.

## Running it

```bash
git clone https://github.com/AnushkaMadushanka/anushkamadushanka.github.com.git
cd anushkamadushanka.github.com
yarn install
yarn dev        # https://127.0.0.1:5173 — HTTPS, needed for the AR camera
```

```
yarn build      production build to dist/
yarn deploy     build and publish dist/ to the gh-pages branch
yarn lint       eslint, zero warnings tolerated
```

## Stack

| | |
|---|---|
| Framework | React 18, Vite 4 |
| 3D | three.js, @react-three/fiber, @react-three/drei, GLTF/GLB assets |
| AR | mind-ar (image target tracking) |
| Motion | Framer Motion, react-particles / tsparticles |
| Routing | react-router-dom 6, react-router-hash-link |
| Forms | Formik, Yup, EmailJS |
| Styling | CSS Modules |
| Hosting | GitHub Pages via `gh-pages` |

## Project layout

```
src/
├── routes/
│   ├── app/app.jsx           router, lazy routes, loading orchestration
│   ├── home/                 hero, story, experience, projects, testimonials, contact
│   ├── about/
│   └── ar-visuals/           MindAR + three.js AR scene
├── components/
│   ├── hero/                 3D head model + intro
│   ├── experience-bento/     work history grid
│   ├── projects/             company and personal project lists
│   ├── testimonials/
│   ├── contact/              form + 3D waving model
│   ├── navigation/
│   └── background/           particle background
└── context.js                loading context
```

## Branches

- **`main`** — source (this branch)
- **`gh-pages`** — built output, published by `yarn deploy`. Not edited by hand.

---

Built by [Anushka Madushanka](https://anushkamadushanka.github.io) · [LinkedIn](https://www.linkedin.com/in/anushka-madushanka/)
