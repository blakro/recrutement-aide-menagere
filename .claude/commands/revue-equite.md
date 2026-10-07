---
description: Relit un diff sous l'angle de l'équité envers les candidates
argument-hint: "[plage git, par défaut le diff avec main]"
---
Relis le diff `$ARGUMENTS` (à défaut : `git diff main...HEAD`, plus les modifications non committées)
sous l'angle de l'équité, sans rien modifier. Pour chaque problème, cite le fichier et la ligne.

1. Le score ne dépend jamais de la situation familiale, de la nationalité, de l'ethnie, de la religion ni de
   la langue d'entretien. `construireAnswers` ne transmet à `computeScore` que le poste, le logement, les
   options cochées et l'épreuve pratique : ni la fiche, ni les notes libres.
2. Le bloc `@@SCORING` ne mentionne aucun champ interdit (`fiche`, `situationFamiliale`, `nationalite`,
   `ethnie`, `religion`, `langueEntretien`).
3. Aucune question, option ou consigne ne pénalise le vocabulaire, l'accent ou la langue de la candidate.
4. Aucune question nouvelle sur sa vie privée : où elle habite, avec qui elle vit, sa famille, ses anciens
   employeurs, ou une personne à citer.
5. Rien sur la garde d'enfants ; aucun numéro de pièce d'identité, aucune photo.
6. Aucun texte (interface, README, commentaires) ne présente l'outil comme un détecteur de mensonge.
7. Toute traduction zarma ou haoussa est marquée « à valider par un locuteur natif ».
8. Toute nouvelle règle de notation a au moins un `TEST_CASE`, et `node tests/run-selftest.mjs` est vert.

Conclus par « Rien à signaler », ou par la liste des points à corriger, du plus grave au moins grave.
