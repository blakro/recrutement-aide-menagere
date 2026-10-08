<h1 align="center">Entretien aide ménagère</h1>

<p align="center">
  Un outil d'aide à l'entretien d'embauche des <b>aides ménagères</b> et <b>aides cuisinières</b>,
  pensé pour les familles de Niamey.<br>
  Cinq questions posées à l'oral, un score, et la liste de ce qu'il reste à faire avant d'embaucher.
</p>

<p align="center">
  <img src="docs/captures/accueil.png" width="250" alt="Écran d'accueil">
  <img src="docs/captures/question.png" width="250" alt="Une question de l'entretien">
  <img src="docs/captures/resultat.png" width="250" alt="Le rapport de fin d'entretien">
</p>

> [!IMPORTANT]
> **Cet outil est une aide à la décision, pas un détecteur de mensonge.**
> Il repère des incohérences et des points à vérifier. Rien ne remplace l'épreuve pratique et l'observation
> de ses premiers jours de travail.

---

## Pourquoi

À Niamey, l'entretien se résume souvent à « sais-tu cuisiner ? ». La famille découvre après l'embauche des
compétences surévaluées, des gestes dangereux dans la cuisine ou des départs brusques.

Cet outil donne à l'employeur une trame courte : les mêmes cinq questions pour toutes les candidates, des scénarios
concrets tirés au hasard, et un compte rendu écrit qu'on peut relire, imprimer et comparer.

## Utiliser l'app

| | |
|---|---|
| **En ligne** | https://blakro.github.io/recrutement-aide-menagere/ *(après activation de GitHub Pages)* |
| **Hors ligne** | Télécharger `index.html` et l'ouvrir dans le navigateur du téléphone |
| **Sur le téléphone** | Ouvrir le lien, puis « Ajouter à l'écran d'accueil » |

Une fois la page chargée, tout fonctionne sans réseau. Les réponses restent sur le téléphone.

## Les cinq questions

| | Question | Ce qu'elle regarde | Sous-score |
|---:|---|---|---|
| 1 | Compétences | Ce qu'elle dit savoir faire, puis une tâche qu'elle explique étape par étape | Compétences · Cohérence |
| 2 | Hygiène | Ses gestes avec la nourriture : mains, légumes crus, viande crue, restes | Hygiène & sécurité |
| 3 | Sécurité | Sa réaction devant un danger dans la cuisine | Hygiène & sécurité |
| 4 | Honnêteté | Son honnêteté et son respect des règles de la maison | Intégrité |
| 5 | Disponibilité | Ce qu'il faut pour qu'elle soit là chaque jour | Stabilité |

> La question 5 a deux versions : beaucoup d'aides ménagères venues d'autres pays logent dans la maison
> plutôt que de rentrer chaque soir. Le logement se choisit sur la fiche avant l'entretien, comme le poste,
> et non l'inverse — les questions posées à la candidate changent en conséquence.

Deux mécanismes font le travail :

- **La question en miroir.** Une compétence annoncée doit pouvoir s'expliquer : l'app tire au hasard une des
  tâches qu'elle vient d'annoncer, et elle explique comment elle s'y prend.
- **Les scénarios tirés au hasard.** L'huile qui prend feu, l'odeur de gaz, le billet trouvé sous le lit, le
  verre cassé, le micro-ondes de la maison. La variante change d'une candidate à l'autre, pour que les
  réponses ne circulent pas.

Une **épreuve pratique** recommandée complète l'entretien : cinq gestes observés sur place, notés réussi,
partiel, non fait ou non observé. Il n'y a pas d'essai payé au Niger : c'est la seule façon de voir ses gestes
avant de décider, et le rapport la demande quand elle n'a pas été faite.

## Le score

Cinq sous-scores sur 100, pondérés selon le poste :

| Poste | Compétences | Hygiène & sécurité | Intégrité | Cohérence | Stabilité |
|---|---:|---:|---:|---:|---:|
| Aide ménagère | 25 | 20 | 25 | 15 | 15 |
| Aide cuisinière | 25 | 30 | 20 | 15 | 10 |
| Polyvalente | 25 | 25 | 20 | 15 | 15 |

Le total donne un verdict : **embauche recommandée** à partir de 70, **à approfondir** entre 50 et 69,
**non recommandé** en dessous. Un drapeau bloquant ramène le verdict à « à approfondir » au mieux ; deux
drapeaux bloquants, ou trois drapeaux légers, pèsent davantage.

Ces seuils sont des valeurs de départ, à recalibrer après une quinzaine d'entretiens réels.

## Ce que l'app ne fait pas

- **Aucune question sur les employeurs précédents**, et aucune demande de citer une personne de référence :
  les joindre est rarement possible ici, et une candidate n'a pas à être notée sur des gens qu'on n'appellera
  pas. La vérification passe par l'épreuve pratique et les premiers jours de travail, qui ne dépendent que
  de l'employeur.
- **Aucune question sur la garde d'enfants** : c'est un autre métier, hors périmètre.
- **Aucun numéro de pièce d'identité, aucune photo.**
- **Aucun serveur, aucun compte.** Rien ne sort du téléphone tant que l'employeur n'exporte pas lui-même.

## Équité

Le score ne dépend **jamais** de la situation familiale, de la nationalité, de l'ethnie, de la religion ni de
la langue parlée pendant l'entretien. Techniquement, la fiche de la candidate n'est jamais transmise au calcul,
pas même les notes libres : un test automatique injecte de fausses données personnelles à chaque modification
et vérifie que le résultat ne bouge pas.

La candidate répond dans la langue qu'elle veut. L'app est en français, mais le barème note ce qu'elle dit,
jamais son vocabulaire ni sa langue. Des traductions zarma et haoussa ont été rédigées puis mises de côté,
faute de relecture par des locuteurs natifs : elles restent dans [`docs/QUESTIONS.md`](docs/QUESTIONS.md).

## Vie privée

Les réponses restent sur le téléphone de l'employeur, dans un historique local qu'on peut effacer d'un bouton.
Les exports JSON et CSV sont des téléchargements locaux, et le dépôt refuse de les committer.
Prévenir la candidate que ses réponses sont notées : l'app affiche le texte à lire avant de commencer.

## Développement

Un seul fichier `index.html` à la racine : HTML, CSS et JavaScript intégrés, sans build, sans dépendance,
sans CDN et sans police externe. Les illustrations sont des SVG écrits dans le fichier.

```sh
node tests/run-selftest.mjs     # tests du barème (Node ≥ 18, sans dépendance)
python3 -m http.server 8000     # aperçu local sur http://localhost:8000
```

`index.html?selftest=1` lance les mêmes tests dans le navigateur.

| Document | Contenu |
|---|---|
| [`CLAUDE.md`](CLAUDE.md) | Contraintes du projet et façon de travailler |
| [`docs/SPEC.md`](docs/SPEC.md) | Spécification complète et contrat technique |
| [`docs/QUESTIONS.md`](docs/QUESTIONS.md) | Les cinq questions, leurs options, leurs points et leurs drapeaux |
| [`docs/ROADMAP.md`](docs/ROADMAP.md) | Ce qui reste à faire |

Développé avec [Claude Code](https://claude.com/claude-code).

## Licence

[MIT](LICENSE)
