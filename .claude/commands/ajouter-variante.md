---
description: Ajoute un scénario à une question tirée au hasard (Q4 Sécurité ou Q6 Intégrité)
argument-hint: "<question et description du scénario>"
---
Ajoute la variante décrite ici : $ARGUMENTS

1. Identifie la question visée : Q4 (Sécurité) ou Q6 (Intégrité), les deux questions de type `variantes`.
   En cas de doute, demande.
2. Rédige la variante dans le style des autres : un texte à lire à voix haute (tutoiement, phrases courtes,
   mots simples), puis des options rangées de la meilleure réponse à la plus risquée, avec le même maximum
   de points que les autres variantes de la question.
3. Propose les points et les drapeaux, en réutilisant les identifiants existants (`geste_dangereux`,
   `integrite`, `se_sert_sans_demander`…). Ce qui est grave ou non est une règle métier : présente la
   proposition et attends la validation avant d'écrire quoi que ce soit.
4. Une fois validée, ajoute-la dans `docs/QUESTIONS.md`, puis dans `CONFIG` (`index.html`), avec un
   `aVerifier` écrit en phrase complète, réalisable par l'employeur seul, sans appel à un tiers.
5. Ajoute au moins un `TEST_CASE` qui couvre son option la plus risquée, puis lance `node tests/run-selftest.mjs`.
6. Termine par `/revue-equite` sur le diff, puis un commit en français à l'impératif
   (ex. « Ajoute la variante Javel à Q4 »).
