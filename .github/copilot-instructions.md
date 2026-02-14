# Copilot instructions — walk-template

But: template front React + TypeScript (Create React App) — frontend autonome. Backend minimal disponible dans `/backend` mais non nécessaire pour le développement UI local.

## Objectif
- Proposer des suggestions de code conformes au style TypeScript + React (hooks, composants fonctionnels).
- Préserver la structure existante (`src/pages`, `src/components`, `contexts`).

## Exécution locale 🔧
- Frontend :
  - `npm install`
  - `npm start` (démarre l'app React sur `http://localhost:3000`)
- Backend (optionnel) :
  - `cd backend && npm install && npm run dev`

## Règles de contribution
- Utiliser TypeScript strictement — respecter les types existants.
- Préférer des composants fonctionnels + hooks.
- Tailwind est utilisé pour le style — éviter CSS inline quand possible.
- Tests : ajouter des tests unitaires pour la logique (si ajout important).

## Ce que Copilot doit privilégier
- Suggestions courtes, typées et cohérentes avec l’existant.
- Ne pas modifier les dépendances majeures sans justification (ouvrir une PR).
- Proposer 1–2 alternatives quand il y a un choix d’architecture.

## À éviter
- Ajouter des secrets / variables d’environnement en clair.
- Changer la configuration build sans explication.

## Si incertain
- Proposer deux options claires et demander confirmation dans la PR description.

---
_Toutes suggestions doivent être compatibles avec Create React App + TypeScript et la configuration Tailwind existante._