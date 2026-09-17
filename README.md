# Recrutement aide ménagère — Niamey

Outil d'aide à l'entretien d'embauche des **aides ménagères** et **aides cuisinières**, pensé pour les familles de Niamey (Niger).

L'employeur pose 10 questions à l'oral (français, zarma ou haoussa), coche les réponses et obtient :

- un score sur 100 et 5 sous-scores : compétences, hygiène & sécurité, intégrité, cohérence, stabilité ;
- des drapeaux sur les réponses à risque (geste dangereux en cuisine, surdéclaration, incohérences…) ;
- la liste des points à vérifier avant d'embaucher.

> **Important :** cet outil est une aide à la décision, **pas un détecteur de mensonge**.
> Rien ne remplace un appel à l'ancien employeur et une période d'essai rémunérée de quelques jours.

## Utiliser l'app

- **En ligne :** https://blakro.github.io/recrutement-aide-menagere/ (après activation de GitHub Pages)
- **Hors ligne :** télécharger `index.html` et l'ouvrir dans le navigateur du téléphone.

## Comment ça marche

- **Questions en miroir** : une compétence déclarée doit pouvoir être expliquée étape par étape ; un parcours court doit rester cohérent avec les promesses de durée.
- **Scénarios concrets** (huile en feu, odeur de gaz, argent trouvé…), tirés au hasard pour que les candidates ne puissent pas se passer les réponses.
- **Détection de surdéclaration** et de réponses « trop parfaites ».
- **Épreuve pratique** facultative de 5 gestes observés.

Le détail des règles est dans [`docs/SPEC.md`](docs/SPEC.md).

## Équité

Le score ne tient **jamais** compte de la situation familiale, de la nationalité, de l'ethnie, de la religion ni de la langue d'entretien.
Un test automatique le vérifie à chaque modification.

## Confidentialité

- Les réponses restent sur le téléphone de l'employeur (stockage local facultatif, effaçable).
- Aucune pièce d'identité ni photo n'est enregistrée.
- Informer la candidate que ses réponses sont notées.

## Traductions

Les versions zarma et haoussa sont **à valider par des locuteurs natifs**. Les corrections sont bienvenues (issue ou pull request).

## Développement

- Un seul fichier `index.html`, sans dépendance ni étape de build.
- Tests : `node tests/run-selftest.mjs` (Node ≥ 18).
- Développé avec Claude Code : voir [`CLAUDE.md`](CLAUDE.md), [`docs/PROMPTS.md`](docs/PROMPTS.md) et [`docs/ROADMAP.md`](docs/ROADMAP.md).

## Licence

[MIT](LICENSE)
