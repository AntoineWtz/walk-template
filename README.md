# Walk Template

Small, opinionated React + TypeScript starter (Create React App + Tailwind).

## Quick start

- Install deps: `npm install`
- Run dev server: `npm start` (http://localhost:3000)

Backend: a minimal backend skeleton exists in `/backend` but is optional for UI dev.

## Preprod / partage (GitHub Pages)

A GitHub Actions workflow is included to publish the built `./build` folder to GitHub Pages.

- URL (préprod temporaire) : `https://AntoineWtz.github.io/walk-template`
- Déployer : push sur la branche `main` (workflow déclenché automatiquement)

## Notes

- Router utilise `basename` = `process.env.PUBLIC_URL` pour fonctionner correctement sur Pages.
- Si vous préférez un routeur à hash : remplacez `BrowserRouter` par `HashRouter`.

---

Developed for quick UI demos and preprod previews.
