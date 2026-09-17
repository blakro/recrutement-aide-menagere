# Prompts de travail pour Claude Code

À coller tels quels dans Claude Code, dans l'ordre. `CLAUDE.md` est chargé automatiquement à chaque session.

---

## Étape 1 — Rédiger les questions (aucun code)

```
Lis CLAUDE.md et docs/SPEC.md.
Rédige docs/QUESTIONS.md avec les 10 questions. Pour chacune :
- le texte en français, formulé pour l'oral : phrases courtes, tutoiement, mots simples ;
- la version zarma et la version haoussa, marquées « à valider par un locuteur natif » ;
- les options à cocher, avec leurs points et leurs drapeaux (id + niveau leger/bloquant) ;
- pour Q4 et Q6, toutes les variantes de la SPEC.
Pour Q7, propose 3 noms de produits d'entretien fictifs plausibles. Je vérifierai moi-même qu'ils n'existent pas sur le marché de Niamey.
Termine par un tableau des points maximums par sous-score.
N'écris aucun code. Arrête-toi et attends ma validation.
```

Avant de valider : faire relire le zarma et le haoussa par un locuteur natif, et vérifier le produit fictif au marché.

---

## Étape 2 — Construire l'app

```
docs/QUESTIONS.md est validé.
Construis index.html en respectant CLAUDE.md et le contrat de docs/SPEC.md § 8, dans cet ordre :
1. le bloc SCORING (CONFIG + computeScore) ;
2. le bloc TESTS avec au moins les 8 cas de la SPEC § 8 ;
3. lance `node tests/run-selftest.mjs` et corrige jusqu'à ce que tout soit vert ;
4. seulement ensuite l'interface : fiche candidate, entretien pas à pas, épreuve pratique, résultat imprimable,
   export JSON/CSV, historique local, réglages, mode ?selftest=1.
Termine par /revue-equite, puis résume en 5 lignes ce qui reste à faire.
```

---

## Étape 3 — Itérer (exemples)

```
Sur mon téléphone, les options de Q3 débordent de l'écran. Corrige l'affichage pour les écrans de 360 px de large.
```

```
/ajouter-variante Q6 : un inconnu appelle la maison et demande si Madame est là et à quelle heure elle rentre
```

```
Dans les points à vérifier, ajoute une phrase type que je peux lire au téléphone pour interroger l'ancienne employeuse.
```

```
/verifier
```

---

## Étape 4 — Mise en ligne

Fusionner la pull request dans `main`, puis sur GitHub : **Settings → Pages → Deploy from a branch → `main` / `(root)`**.
Tester le lien sur téléphone et l'ajouter à l'écran d'accueil.

---

## Étape 5 — Calibrer (après une quinzaine d'entretiens)

Anonymiser d'abord les exports : retirer prénoms, contacts et notes libres.

```
Voici des exports JSON anonymisés d'entretiens, avec pour chacun le résultat de la période d'essai (champ essai_reussi : true/false).
Analyse si les seuils et les pondérations séparent bien les essais réussis des échecs.
Propose des ajustements de CONFIG, avec les TEST_CASES correspondants.
Ne committe aucune de ces données.
```
