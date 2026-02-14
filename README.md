# Walk Template

[![Pages Status](https://github.com/AntoineWtz/walk-template/actions/workflows/pages.yml/badge.svg)](https://github.com/AntoineWtz/walk-template/actions/workflows/pages.yml) [Preview site](https://AntoineWtz.github.io/walk-template/)

Small, opinionated React + TypeScript starter (Create React App + Tailwind).

## Quick start

- Install deps: `npm install`
- Run dev server: `npm start` (http://localhost:3000)

Backend: a minimal backend skeleton exists in `/backend` but is optional for UI dev.

## Preprod / partage (GitHub Pages)

A GitHub Actions workflow is included to publish the built `./build` folder to GitHub Pages.

- URL (préprod temporaire) : `https://AntoineWtz.github.io/walk-template`
- Déployer : push sur la branche `main` (workflow déclenché automatiquement)

Local preview (deploy from your machine):

- Build + publish to `gh-pages` branch: `npm run deploy:preview` (requires push access to the repo)
- This uses the `gh-pages` devDependency and publishes the `build` folder to `gh-pages` for quick client previews.

## Notes

- Router utilise maintenant `HashRouter` (URLs avec `#`) pour fonctionner correctement sur GitHub Pages.
- Si vous préférez un routage sans `#`, on peut repasser à `BrowserRouter` et garder `basename`.

---

Developed for quick UI demos and preprod previews.
