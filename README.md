# Mazen Reda — Portfolio

A personal portfolio built with React, Vite, and Tailwind CSS. Content is
sourced entirely from Mazen's CV — no invented experience, tools, or links.

## Running locally

Requires Node.js 18+.

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually `http://localhost:5173`).

## Building for production

```bash
npm run build
npm run preview   # preview the production build locally
```

The production files are written to `dist/`. Deploy that folder to any
static host (Vercel, Netlify, GitHub Pages, etc.).

## Editing content

Almost everything on the site — name, bio, skills, certifications,
projects, experience, education, and contact links — lives in one file:

```
src/data/portfolio.js
```

Edit that file and the whole site updates. A few things to fill in when
you have them:

- **`profile.linkedin`** — currently `null`. Add your LinkedIn URL here to
  make the LinkedIn buttons in the Contact section and footer appear.
- **`projects[].github`** and **`projects[].live`** — currently `null` for
  all four projects, since the CV didn't include repo or live-demo links.
  Add real URLs as you publish them.

To replace the profile photo, swap the file at
`src/assets/mazen-photo.jpg` (keep the same filename, or update the
import in `src/components/sections/Hero.jsx`).

The CV file served by the "Download CV" button lives at
`public/Mazen_Reda_CV.pdf` — replace it any time with an updated version
using the same filename.

## Project structure

```
src/
  assets/            profile photo
  components/
    sections/        one component per homepage section
    Navbar.jsx, Footer.jsx, ScrollProgress.jsx, BackToTop.jsx
  data/
    portfolio.js      all site content — edit this to update the site
  hooks/
    useReveal.js       scroll-reveal animation hook
  App.jsx
  main.jsx
  index.css
public/
  Mazen_Reda_CV.pdf   downloadable CV
  favicon.svg
```

## Notes on scope

A few requested features were intentionally left out to keep the site
focused and avoid decoration for its own sake — a light/dark toggle,
custom cursor, and command palette. The site is a single, deliberate dark
theme; happy to add any of these back in if you'd like them.
