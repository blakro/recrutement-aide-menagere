# CLAUDE.md — recrutement-aide-menagere

## Le projet

App web d'aide à l'entretien d'embauche d'**aides ménagères** et d'**aides cuisinières** à Niamey (Niger).
L'employeur pose 10 questions à l'oral **en français**, coche les réponses de la candidate
et obtient un score, des sous-scores, des drapeaux et une liste de points à vérifier.

- Spécification complète : `docs/SPEC.md`
- Questions validées : `docs/QUESTIONS.md` (fait foi en cas d'écart avec la SPEC)
- Prompts de travail par étape : `docs/PROMPTS.md`
- Idées d'évolution : `docs/ROADMAP.md`

## Contraintes non négociables

- **Un seul fichier `index.html`** à la racine (HTML + CSS + JS intégrés). Pas de build, pas de framework,
  pas de dépendance, pas de CDN, pas de police externe : l'app doit fonctionner hors ligne une fois chargée.
- Interface en **français**. Mobile d'abord, gros boutons, fort contraste (lisible en plein soleil).
- **Garde d'enfants hors périmètre** : ne jamais réintroduire de question ou de geste lié aux enfants.
- **Équité** : le score ne dépend JAMAIS de la situation familiale, de la nationalité, de l'ethnie,
  de la religion ni de la langue d'entretien. La fiche candidate n'est jamais passée à `computeScore`.
- Aucun numéro de pièce d'identité, aucune photo.
- Tout accès à `localStorage` est protégé par `try/catch` ; l'app reste utilisable si le stockage est vide ou indisponible.
- L'outil est une **aide à la décision, pas un détecteur de mensonge**. Ne jamais écrire le contraire (UI, README, commentaires).
- **L'app v1 est en français uniquement** (décidé le 17/09/2026). Si des traductions zarma ou haoussa sont
  réintroduites un jour, elles doivent toujours être marquées « à valider par un locuteur natif » et ne jamais
  être présentées comme validées.
- Ne jamais committer de données de candidates (exports JSON/CSV). Voir `.gitignore`.

## Architecture de `index.html` (contrat vérifié par le test)

Le JavaScript contient deux blocs délimités par des commentaires, évalués hors navigateur par `tests/run-selftest.mjs` :

```js
// @@SCORING-START
const CONFIG = { /* questions, variantes, options, points, drapeaux, ponderations, seuils */ };
function computeScore(answers, config) { /* pur : aucun accès à window, document ou localStorage */ }
// @@SCORING-END

// @@TESTS-START
const TEST_CASES = [ /* { name, answers, expect } */ ];
// @@TESTS-END
```

- Formes exactes de `answers`, du résultat et de `CONFIG.ponderations` : `docs/SPEC.md` § « Contrat technique ».
- Tout le code d'interface est en dehors de ces blocs.
- `index.html?selftest=1` exécute `TEST_CASES` dans le navigateur et affiche le résultat.

## Commandes

- Tests : `node tests/run-selftest.mjs` (Node ≥ 18, aucune dépendance). À lancer après toute modification de `CONFIG` ou du barème.
- Aperçu local : `python3 -m http.server 8000` puis ouvrir http://localhost:8000
- Commandes du projet : `/verifier`, `/revue-equite`, `/ajouter-variante <description>`

## Façon de travailler

- Questions, variantes, barèmes et seuils se modifient dans `CONFIG`, jamais en dur dans la logique.
- Toute nouvelle règle de notation s'accompagne d'au moins un `TEST_CASE`.
- Petits commits, messages en français à l'impératif (ex. « Ajoute la variante Javel à Q4 »).
- Avant de terminer une tâche : tests verts, puis `/revue-equite` sur le diff.
- En cas de doute sur une règle métier (ce qui est grave ou non, un seuil), demander plutôt que deviner.
