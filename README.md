# Recrutement aide ménagère — Niamey

Outil d'aide à l'entretien d'embauche des **aides ménagères** et **aides cuisinières**, pensé pour les familles de Niamey (Niger).

L'employeur pose 10 questions à l'oral en français, coche les réponses et obtient :

- un score sur 100 et 5 sous-scores : compétences, hygiène & sécurité, intégrité, cohérence, stabilité ;
- un rapport écrit en phrases complètes, sans jargon ni numéro de question ;
- des drapeaux sur les réponses à risque (geste dangereux en cuisine, surdéclaration, incohérences…) ;
- la liste des points à vérifier avant d'embaucher.

> **Important :** cet outil est une aide à la décision, **pas un détecteur de mensonge**.
> Rien ne remplace une période d'essai rémunérée de quelques jours : joindre les anciens employeurs est rarement possible,
> c'est donc l'essai qui vérifie.

## Utiliser l'app

- **En ligne :** https://blakro.github.io/recrutement-aide-menagere/ (après activation de GitHub Pages)
- **Hors ligne :** télécharger `index.html` et l'ouvrir dans le navigateur du téléphone.

## Comment ça marche

- **Questions en miroir** : une compétence déclarée doit pouvoir être expliquée étape par étape ; un parcours court doit rester cohérent avec les promesses de durée.
- **Scénarios concrets** (huile en feu, odeur de gaz, argent trouvé…), tirés au hasard pour que les candidates ne puissent pas se passer les réponses.
- **Détection de surdéclaration** et de réponses « trop parfaites ».
- **Épreuve pratique** facultative de 5 gestes observés.
- **Reprise** d'un entretien interrompu, **sommaire** des questions, **mode plein soleil** pour lire dehors.

Le détail des règles est dans [`docs/SPEC.md`](docs/SPEC.md).

## Équité

Le score ne tient **jamais** compte de la situation familiale, de la nationalité, de l'ethnie, de la religion ni de la langue d'entretien.
Un test automatique le vérifie à chaque modification.

## Confidentialité

- Les réponses restent sur le téléphone de l'employeur (stockage local facultatif, effaçable).
- Aucune pièce d'identité ni photo n'est enregistrée.
- Informer la candidate que ses réponses sont notées.

## Langue

L'app est **en français uniquement**. La candidate répond dans la langue qu'elle veut : le barème note ce qu'elle
dit, jamais son vocabulaire ni sa langue.

Des versions zarma et haoussa ont été rédigées puis mises de côté : elles n'avaient pas été relues par des
locuteurs natifs, et un texte approximatif lu à voix haute fait plus de dégâts qu'un texte absent. Les brouillons
restent dans [`docs/QUESTIONS.md`](docs/QUESTIONS.md) pour qui voudrait les reprendre (voir la feuille de route).

## Développement

- Un seul fichier `index.html`, sans dépendance ni étape de build.
- Tests : `node tests/run-selftest.mjs` (Node ≥ 18).
- Développé avec Claude Code : voir [`CLAUDE.md`](CLAUDE.md), [`docs/PROMPTS.md`](docs/PROMPTS.md) et [`docs/ROADMAP.md`](docs/ROADMAP.md).

## Licence

[MIT](LICENSE)
