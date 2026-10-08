# Spécification — recrutement-aide-menagere (v1)

## 1. Contexte

À Niamey, beaucoup de familles recrutent des aides ménagères et des aides cuisinières, souvent venues du Bénin
ou du Togo, parfois de milieu rural. L'entretien actuel se limite à des questions du type « sais-tu cuisiner ? ».
Après l'embauche, les familles découvrent souvent des compétences surévaluées, des lacunes d'hygiène, des gestes
dangereux en cuisine, des départs brusques (souvent justifiés par un « proche malade ») ou des manquements à l'honnêteté.

**Utilisateur de l'app : l'employeur.** Il pose les questions à l'oral en français et coche les réponses.
La candidate ne manipule pas l'app, ce qui évite le biais lié au niveau de lecture.

**Il n'y a pas d'essai payé au Niger.** La vérification de ce que la candidate annonce passe par l'épreuve
pratique, faite sur place après les questions, et par l'observation de ses premiers jours de travail.

## 2. Périmètre

Dans le périmètre :
- Postes : **aide ménagère**, **aide cuisinière**, **polyvalent** (les deux).
- Entretien guidé de **5 questions**, épreuve pratique recommandée, score, verdict, points à vérifier, export, impression.

Hors périmètre :
- Garde d'enfants.
- Toute question sur les employeurs précédents, et toute demande de citer une personne de référence.
- Toute vérification qui suppose un appel téléphonique à un tiers.
- Serveur, comptes utilisateurs, synchronisation.
- Stockage de pièces d'identité ou de photos.
- Toute prétention à « détecter le mensonge ». L'app repère des **incohérences** et des **signaux à vérifier**.

## 3. Les 5 questions

Ramené de dix à cinq questions le 08/10/2026 : le détail des retraits est en fin de `docs/QUESTIONS.md`.

| # | Thème | Sous-score alimenté | Mécanisme |
|---|-------|--------------------|-----------|
| Q1 | Compétences | Compétences, Cohérence | Ce qu'elle dit savoir faire, puis elle explique une tâche tirée au hasard |
| Q2 | Hygiène | Hygiène & sécurité | Quatre points sur la nourriture |
| Q3 | Sécurité | Hygiène & sécurité | Scénario tiré au hasard |
| Q4 | Honnêteté | Intégrité | Scénario tiré au hasard |
| Q5 | Disponibilité | Stabilité | Organisation du travail à venir, selon le logement |

### Q1 — Compétences
Deux temps sur le même écran.
1. Ce qu'elle dit savoir faire : ménage (sols, sanitaires, vitres), lessive et repassage, vaisselle, aide cuisine
   (épluchage, découpe, plats locaux, sauces). L'employeur coche.
2. « Explique-moi étape par étape comment tu fais pour [tâche] ». La tâche est **tirée au hasard parmi celles cochées**
   (ex. nettoyer des toilettes, préparer une sauce arachide, laver et trier le riz).
   L'employeur note l'explication : précise et complète / approximative / incapable d'expliquer.

**Tâche déclarée + « incapable d'expliquer » → drapeau bloquant `incoherence_competence`.**

### Q2 — Hygiène
Lavage des mains avant de cuisiner, lavage des légumes consommés crus, séparation de la viande crue et des aliments cuits,
conservation des restes.

### Q3 — Sécurité (une variante tirée au hasard)
- **Huile en feu** : « L'huile prend feu dans la marmite. Que fais-tu ? » Jeter de l'eau → drapeau bloquant.
- **Odeur de gaz** : « Tu sens une odeur de gaz en entrant dans la cuisine. Que fais-tu ? »
  Allumer une flamme ou un interrupteur → drapeau bloquant.
- **Mélange de produits** : « Tu veux que les toilettes soient très propres. Mélanges-tu l'eau de Javel avec un autre produit ? »
  Accepter de mélanger Javel et vinaigre ou ammoniaque → drapeau bloquant.

Tous ces cas utilisent le même identifiant de drapeau : `geste_dangereux`.

### Q4 — Honnêteté (une variante tirée au hasard)
- **Argent trouvé** en faisant le ménage : le remettre → points pleins ; le garder → drapeau bloquant `integrite`.
- **Objet cassé** par accident : le signaler → points pleins ; le cacher ou jeter les morceaux → drapeau bloquant `integrite`.
- **Nourriture de la famille** que personne n'a proposée : demander → points pleins ; se servir → drapeau léger `se_sert_sans_demander`.
- **Appareils de la maison** : « La maison est vide et tu veux réchauffer ton repas. Le micro-ondes est là. Que fais-tu ? »
  L'électroménager ne s'utilise que sur autorisation. Demander ou attendre → points pleins ;
  « Je l'utilise, je sais m'en servir » → peu de points, drapeau léger `electromenager_sans_autorisation`.

### Q5 — Disponibilité
Deux variantes, selon que la candidate **loge dans la maison** ou **rentre chez elle chaque soir**.
Le logement se choisit sur la fiche avant l'entretien, comme le poste : ce n'est jamais une question posée
à la candidate, ni sa situation familiale — c'est une condition du poste proposé.
- **Rentre chaque soir** : « À quelle heure tu peux être ici le matin, jusqu'à quelle heure tu peux rester,
  et comment tu viendras ? » Trois points : les heures possibles, le trajet, et ce qu'elle fait le jour où
  elle ne peut pas venir.
- **Loge dans la maison** : « Parlons de l'organisation, pour que chacun sache à quoi s'attendre. »
  Deux points : le jour de repos hebdomadaire, et ce qu'elle fait si elle est malade ou a un empêchement.
- Ne pas prévenir en cas d'empêchement ou d'absence, dans les deux variantes → drapeau léger
  `absence_sans_prevenir`.
- Dire qu'elle n'a pas besoin de jour de repos, variante « loge dans la maison » → drapeau léger
  `disponibilite_trop_parfaite`.
- **Aucune question sur les employeurs précédents, et aucune demande de citer quelqu'un.** Les joindre est
  rarement possible à Niamey, et une candidate ne doit pas être notée sur des personnes qu'on n'appellera pas.
- Ni le quartier d'habitation ni les personnes avec qui elle vit n'entrent dans le score : seule compte
  la solution d'organisation qu'elle décrit.

### Format commun à toutes les questions
- Texte en français uniquement en v1. La candidate peut répondre dans sa langue : le barème note le contenu,
  jamais le vocabulaire ni la langue. Traductions renvoyées en v2 (voir `docs/ROADMAP.md`).
- Options prédéfinies à cocher et un champ de note libre.
- Chaque option porte des points et, le cas échéant, un drapeau (`leger` ou `bloquant`).

## 4. Épreuve pratique (recommandée)

Sans essai payé, c'est la seule façon de voir ses gestes avant de décider. Elle se fait sur place, après les questions.

Cinq gestes observés : lavage des mains, nettoyage d'un plan de travail ou d'un sanitaire, épluchage et découpe de légumes,
vaisselle, tri et pliage du linge.
Chaque geste est noté : réussi / partiel / non fait / non observé. « Non observé » est exclu du calcul.
Les gestes alimentent le sous-score Compétences, avec une pondération selon le poste
(les gestes de cuisine comptent davantage pour une aide cuisinière).
Une épreuve non faite ne pénalise pas la candidate, mais le rapport demande alors de la faire avant de décider.

## 5. Notation

### Sous-scores (chacun sur 100)
Compétences, Hygiène & sécurité, Intégrité, Cohérence, Stabilité.

### Pondérations par défaut (modifiables dans `CONFIG.ponderations`, total = 100 par poste)

| Poste | Compétences | Hygiène & sécurité | Intégrité | Cohérence | Stabilité |
|-------|------------|-------------------|-----------|-----------|-----------|
| menage | 25 | 20 | 25 | 15 | 15 |
| cuisine | 25 | 30 | 20 | 15 | 10 |
| polyvalent | 25 | 25 | 20 | 15 | 15 |

### Verdict
Seuils par défaut (dans `CONFIG.seuils`) :
- score ≥ 70 → `recommande` : « Embauche recommandée »
- 50 à 69 → `approfondir` : « À approfondir » (reprendre avec elle les points à vérifier avant de décider)
- < 50 → `non_recommande` : « Non recommandé »

Règles de plafonnement (appliquées après le score) :
- 1 drapeau bloquant → verdict au mieux `approfondir`.
- 2 drapeaux bloquants ou plus → `non_recommande`.
- 3 drapeaux légers ou plus → verdict au mieux `approfondir`.

Ces seuils sont des valeurs de départ. Ils seront calibrés après une quinzaine d'entretiens réels (voir ROADMAP).

### Affichage du résultat
- Score global, 5 sous-scores, verdict.
- Tous les drapeaux, affichés quel que soit le score, avec un message clair.
- Liste précise des **points à vérifier**, écrits en phrases complètes et réalisables par l'employeur seul
  (ex. « Lui faire refaire devant toi, le premier jour, la tâche qu'elle vient d'expliquer »).
- Le rapport ne montre jamais les repères internes `Q1`…`Q5` : chaque question y est nommée en toutes lettres.
- Encart permanent : « Cet outil est une aide à la décision. Ce n'est pas un détecteur de mensonge. »

## 6. Équité (règles strictes)

- La fiche candidate peut contenir la situation familiale **à titre informatif uniquement**, dans la note libre.
- La situation familiale, la nationalité, l'ethnie, la religion et la langue d'entretien **n'entrent jamais dans le score**.
- Techniquement : `computeScore` ne reçoit jamais la fiche. Le test injecte de fausses données de fiche
  et vérifie que le résultat ne change pas.
- La stabilité s'évalue uniquement sur l'organisation du travail à venir : jour de repos, heures possibles,
  trajet, façon de prévenir une absence.
- **Joindre les anciens employeurs est souvent impossible à Niamey.** Aucun point à vérifier ne suppose un appel :
  la vérification passe par l'épreuve pratique et par l'observation des premiers jours, qui ne dépendent que de l'employeur.

## 7. Fonctionnalités

- **Fiche candidate** : prénom, date, poste visé, logement, note libre (dont situation familiale facultative).
- **Fiche en gros boutons** : le poste et le logement se choisissent d'un seul appui.
- **Rappel à l'écran** avant de commencer : un écran « À lire à voix haute », juste avant la première question,
  pour informer la candidate que ses réponses sont notées.
- **Entretien pas à pas** : une question par écran, barre de progression, gros boutons, retour arrière possible.
  Dans les questions à plusieurs points, chaque point coché est marqué et l'écran descend seul vers le suivant.
- **Questions oubliées** : avant le résultat, l'app liste les questions sans réponse complète et propose d'y revenir.
- **Épreuve pratique** recommandée (section 4).
- **Écran de résultat** imprimable (CSS `@media print`).
- **Export** de l'entretien en JSON et CSV (téléchargement local), fichiers nommés `entretien-<prénom>-<date>.json` / `.csv`.
- **Historique local** facultatif (localStorage, `try/catch`), avec un bouton « Effacer l'historique ».
  Les entretiens enregistrés avec l'ancienne version à dix questions gardent leur résultat ; le détail
  de leurs réponses reste dans leur export JSON.
- **Réglages** : mode plein soleil, affichage des seuils et des pondérations.
- **Hors ligne** : aucune ressource externe.
- **Reprise d'un entretien interrompu** : brouillon enregistré au fil de l'eau, proposé au retour sur l'accueil.
- **Sommaire** : état de chaque question (répondu / à compléter / à faire) et accès direct à n'importe laquelle.
- **Nouveau tirage** possible de la tâche à expliquer (Q1) et du scénario de Q3 ou Q4, quand il a déjà servi
  avec une autre candidate.
- **Détail des réponses** sur l'écran de résultat, replié à l'écran et déplié à l'impression.
- **Mode plein soleil** : texte agrandi et contrastes renforcés, mémorisé localement.
- **Confort** : confirmations dans l'app plutôt que dans les fenêtres du navigateur, courte annonce après chaque
  enregistrement, transitions douces entre les écrans, supprimées si le téléphone demande moins de mouvement.

## 8. Contrat technique

### Blocs
`index.html` contient les blocs `// @@SCORING-START` … `// @@SCORING-END` et `// @@TESTS-START` … `// @@TESTS-END`.
Le bloc SCORING est du JS pur (aucun accès à `window`, `document`, `localStorage`) et ne mentionne jamais
les champs `fiche`, `situationFamiliale`, `nationalite`, `ethnie`, `religion`, `langueEntretien`.

### Entrée : `answers`
```js
{
  poste: 'menage' | 'cuisine' | 'polyvalent',
  logement: 'reside' | 'externe',   // loge dans la maison, ou rentre chez elle chaque soir : voir Q5
  reponses: { q1: ..., q2: ..., q3: ..., q4: ..., q5: ... },   // forme détaillée documentée en tête du bloc SCORING
  pratique: { /* idGeste: 'reussi' | 'partiel' | 'non_fait' | 'non_observe' */ }   // facultatif
}
```

### Sortie : `computeScore(answers, CONFIG)`
```js
{
  total: Number,                 // 0 à 100, entier
  sousScores: { competences, hygieneSecurite, integrite, coherence, stabilite },  // chacun 0 à 100
  drapeaux: [ { id: String, niveau: 'leger' | 'bloquant', message: String } ],
  verdict: 'recommande' | 'approfondir' | 'non_recommande',
  pointsAVerifier: [ String ]
}
```

### `CONFIG.ponderations`
```js
{ menage: { competences, hygieneSecurite, integrite, coherence, stabilite }, cuisine: { … }, polyvalent: { … } }
```
Chaque poste totalise 100.

### `TEST_CASES`
```js
[ { name: String, answers: { … }, expect: {
    verdict?: String, minTotal?: Number, maxTotal?: Number,
    drapeauxInclus?: [String], drapeauxExclus?: [String],
    pointsInclus?: [String]   // chaque texte doit apparaître dans au moins un point à vérifier
} } ]
```
Cas minimum attendus (8 au total, le cas 7 en compte deux) :
1. Candidate solide, sans drapeau → `recommande`.
2. Même candidate, mais jette de l'eau sur l'huile en feu → drapeau `geste_dangereux`, verdict au mieux `approfondir`.
3. Jette de l'eau sur l'huile en feu + garde l'argent trouvé → `non_recommande`.
4. Utiliserait le micro-ondes sans demander, sinon solide → drapeau `electromenager_sans_autorisation`, verdict inchangé (`recommande`).
5. Ne prévient pas quand elle ne peut pas venir → drapeau `absence_sans_prevenir`, verdict inchangé.
6. Déclare savoir cuisiner mais incapable d'expliquer → drapeau `incoherence_competence`.
7. Candidate bonne en ménage mais faible en hygiène alimentaire, testée en poste `menage` puis `cuisine`
   (deux cas, bornés par `minTotal` / `maxTotal`) → total plus bas en `cuisine` (vérifie la pondération).
