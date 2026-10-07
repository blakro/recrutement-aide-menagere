---
description: Vérifie que l'app respecte le contrat technique et les contraintes du projet
---
Vérifie l'état du projet, sans rien modifier.

1. Lance `node tests/run-selftest.mjs` et rapporte le résultat.
2. Dans `index.html` :
   - un seul fichier, aucune ressource chargée depuis le réseau (script, feuille de style, police, image, CDN) ;
   - tout accès à `localStorage` passe par un `try/catch` ;
   - le bloc `@@SCORING` ne touche ni `window`, ni `document`, ni le stockage ;
   - l'encart « aide à la décision, pas un détecteur de mensonge » figure sur l'accueil et sur le résultat.
3. Dans l'app et dans la doc, cherche toute mention de garde d'enfants, de pièce d'identité, de photo,
   ou d'appel aux anciens employeurs.
4. Compare `CONFIG` à `docs/QUESTIONS.md` (questions, options, points, drapeaux, messages) et signale chaque écart.

Termine par une liste courte : ce qui est conforme, puis ce qui ne l'est pas, avec le fichier et la ligne.
