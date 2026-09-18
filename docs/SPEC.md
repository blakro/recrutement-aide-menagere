# Spécification — recrutement-aide-menagere (v1)

## 1. Contexte

À Niamey, beaucoup de familles recrutent des aides ménagères et des aides cuisinières, souvent venues du Bénin
ou du Togo, parfois de milieu rural. L'entretien actuel se limite à des questions du type « sais-tu cuisiner ? ».
Après l'embauche, les familles découvrent souvent des compétences surévaluées, des lacunes d'hygiène, des gestes
dangereux en cuisine, des départs brusques (souvent justifiés par un « proche malade ») ou des manquements à l'honnêteté.

**Utilisateur de l'app : l'employeur.** Il pose les questions à l'oral en français et coche les réponses.
La candidate ne manipule pas l'app, ce qui évite le biais lié au niveau de lecture.

## 2. Périmètre

Dans le périmètre :
- Postes : **aide ménagère**, **aide cuisinière**, **polyvalent** (les deux).
- Entretien guidé de 10 questions, épreuve pratique facultative, score, verdict, points à vérifier, export, impression.

Hors périmètre :
- Garde d'enfants.
- Toute question sur les employeurs précédents, et toute demande de citer une personne de référence.
- Toute vérification qui suppose un appel téléphonique à un tiers.
- Serveur, comptes utilisateurs, synchronisation.
- Stockage de pièces d'identité ou de photos.
- Toute prétention à « détecter le mensonge ». L'app repère des **incohérences** et des **signaux à vérifier**.

## 3. Les 10 questions

| # | Thème | Sous-score alimenté | Mécanisme |
|---|-------|--------------------|-----------|
| Q1 | Compétences déclarées | Compétences | Cases à cocher |
| Q2 | Démonstration orale | Compétences, Cohérence | Vérifie Q1 |
| Q3 | Hygiène alimentaire | Hygiène & sécurité | Choix multiples |
| Q4 | Sécurité (scénario) | Hygiène & sécurité | Variante tirée au hasard |
| Q5 | Règles de la maison | Intégrité | Scénario |
| Q6 | Intégrité (scénario) | Intégrité | Variante tirée au hasard |
| Q7 | Produit fictif | Cohérence | Détection de surdéclaration |
| Q8 | Désirabilité sociale | Cohérence | Détection du « jamais » absolu |
| Q9 | Disponibilité | Stabilité | Organisation du travail à venir |
| Q10 | Projet et congés | Stabilité, Cohérence | Vérifie Q9 |

### Q1 — Compétences déclarées
Tâches : ménage (sols, sanitaires, vitres), lessive et repassage, vaisselle, aide cuisine
(épluchage, découpe, plats locaux, sauces). L'employeur coche ce que la candidate dit savoir faire.

### Q2 — Démonstration
« Explique-moi étape par étape comment tu fais [tâche] ». La tâche est **tirée au hasard parmi celles cochées en Q1**
(ex. nettoyer des toilettes, préparer une sauce arachide, laver et trier le riz).
L'employeur note l'explication : précise et complète / approximative / incapable d'expliquer.
**Tâche déclarée en Q1 + « incapable d'expliquer » en Q2 → drapeau bloquant `incoherence_q1_q2`.**

### Q3 — Hygiène alimentaire
Lavage des mains avant de cuisiner, lavage des légumes consommés crus, séparation de la viande crue et des aliments cuits,
conservation des restes, eau de boisson.

### Q4 — Sécurité (une variante tirée au hasard)
- **Huile en feu** : « L'huile prend feu dans la marmite. Que fais-tu ? » Jeter de l'eau → drapeau bloquant.
- **Odeur de gaz** : « Tu sens une odeur de gaz en entrant dans la cuisine. Que fais-tu ? »
  Allumer une flamme ou un interrupteur → drapeau bloquant.
- **Mélange de produits** : « Tu veux que les toilettes soient très propres. Mélanges-tu l'eau de Javel avec un autre produit ? »
  Accepter de mélanger Javel et vinaigre ou ammoniaque → drapeau bloquant.

Tous ces cas utilisent le même identifiant de drapeau : `geste_dangereux`.

### Q5 — Règles de la maison
« La maison est vide et tu veux réchauffer ton repas. Le micro-ondes est là. Que fais-tu ? »
Règle : l'électroménager ne s'utilise que sur autorisation.
- Demander ou attendre → points pleins.
- « Je l'utilise, je sais m'en servir » → peu de points, drapeau léger `electromenager_sans_autorisation`.

### Q6 — Intégrité (une variante tirée au hasard)
- **Argent trouvé** en faisant le ménage : le remettre → points pleins ; le garder → drapeau bloquant `integrite`.
- **Objet cassé** par accident : le signaler → points pleins ; le cacher ou jeter les morceaux → drapeau bloquant `integrite`.
- **Nourriture de la famille** que personne n'a proposée : demander → points pleins ; se servir → drapeau léger `se_sert_sans_demander`.

### Q7 — Produit fictif (surdéclaration)
Question sur un produit d'entretien ou un ustensile **qui n'existe pas**.
« Oui, je connais / je l'ai déjà utilisé » → drapeau bloquant `surdeclaration`.
- Le nom par défaut doit être vérifié comme inexistant sur le marché de Niamey.
- Le nom est **modifiable dans l'écran Réglages** (stocké localement), car le dépôt est public.

### Q8 — Désirabilité sociale
« Ne t'est-il jamais, même une seule fois, arrivé d'être en retard ou de te mettre en colère ? »
Un « jamais » absolu → drapeau léger `reponse_trop_parfaite`.

### Q9 — Disponibilité
« À quelle heure tu peux être ici le matin, jusqu'à quelle heure tu peux rester, et comment tu viendras ? »
Quatre points : les heures possibles, le trajet, ce qu'elle fait le jour où elle ne peut pas venir,
et son accord pour un essai payé de quelques jours.
- Ne pas prévenir quand elle ne peut pas venir → drapeau léger `absence_sans_prevenir`.
- **Aucune question sur les employeurs précédents, et aucune demande de citer quelqu'un.** Les joindre est
  rarement possible à Niamey, et une candidate ne doit pas être notée sur des personnes qu'on n'appellera pas.
- Ni le quartier d'habitation ni les personnes avec qui elle vit n'entrent dans le score : seule compte
  la solution d'organisation qu'elle décrit.

### Q10 — Projet et congés
Durée d'engagement souhaitée, fréquence de congés souhaitée pour voir la famille, accord sur un calendrier écrit.
- Question posée à **toutes** les candidates, sans lien avec leur situation familiale.
- Fréquence réaliste + accord sur un calendrier → points pleins.
- « Je n'aurai jamais besoin de congés » sur une longue durée → drapeau léger `engagement_irrealiste`.
- Promesse de rester des années sans pouvoir dire quand elle peut être là → drapeau léger `engagement_incoherent`.

### Format commun à toutes les questions
- Texte en français uniquement en v1. La candidate peut répondre dans sa langue : le barème note le contenu,
  jamais le vocabulaire ni la langue. Traductions renvoyées en v2 (voir `docs/ROADMAP.md`).
- Options prédéfinies à cocher et un champ de note libre.
- Chaque option porte des points et, le cas échéant, un drapeau (`leger` ou `bloquant`).

## 4. Épreuve pratique (facultative)

Cinq gestes observés : lavage des mains, nettoyage d'un plan de travail ou d'un sanitaire, épluchage et découpe de légumes,
vaisselle, tri et pliage du linge.
Chaque geste est noté : réussi / partiel / non fait / non observé. « Non observé » est exclu du calcul.
Les gestes alimentent le sous-score Compétences, avec une pondération selon le poste
(les gestes de cuisine comptent davantage pour une aide cuisinière).

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
- score ≥ 70 → `essai` : « Période d'essai recommandée »
- 50 à 69 → `approfondir` : « À approfondir (vérifier les références et faire un essai court) »
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
- Le rapport ne montre jamais les repères internes `Q1`…`Q10` : chaque question y est nommée en toutes lettres.
- Encart permanent : « Cet outil est une aide à la décision. Ce n'est pas un détecteur de mensonge. »

## 6. Équité (règles strictes)

- La fiche candidate peut contenir la situation familiale **à titre informatif uniquement** (planification des congés).
- La situation familiale, la nationalité, l'ethnie, la religion et la langue d'entretien **n'entrent jamais dans le score**.
- Techniquement : `computeScore` ne reçoit jamais la fiche. Le test injecte de fausses données de fiche
  et vérifie que le résultat ne change pas.
- La stabilité s'évalue uniquement sur l'organisation du travail à venir : heures possibles, trajet, façon de
  prévenir une absence, accord sur un essai payé et sur un calendrier de congés.
- **Joindre les anciens employeurs est souvent impossible à Niamey.** Aucun point à vérifier ne suppose un appel :
  la vérification passe par l'essai court et payé, qui ne dépend que de l'employeur.

## 7. Fonctionnalités

- **Fiche candidate** : prénom, date, poste visé, note libre (dont situation familiale facultative).
- **Rappel à l'écran** avant de commencer : informer la candidate que ses réponses sont notées.
- **Entretien pas à pas** : une question par écran, barre de progression, gros boutons, retour arrière possible.
- **Épreuve pratique** facultative (section 4).
- **Écran de résultat** imprimable (CSS `@media print`).
- **Export** de l'entretien en JSON et CSV (téléchargement local), fichiers nommés `entretien-<prénom>-<date>.json` / `.csv`.
- **Historique local** facultatif (localStorage, `try/catch`), avec un bouton « Effacer l'historique ».
- **Réglages** : nom du produit fictif (Q7), affichage des seuils.
- **Hors ligne** : aucune ressource externe.
- **Reprise d'un entretien interrompu** : brouillon enregistré au fil de l'eau, proposé au retour sur l'accueil.
- **Sommaire** : état de chaque question (répondu / à compléter / à faire) et accès direct à n'importe laquelle.
- **Nouveau tirage** possible du scénario de Q4 ou Q6, quand la variante a déjà servi avec une autre candidate.
- **Détail des réponses** sur l'écran de résultat, replié à l'écran et déplié à l'impression.
- **Mode plein soleil** : texte agrandi et contrastes renforcés, mémorisé localement.

## 8. Contrat technique

### Blocs
`index.html` contient les blocs `// @@SCORING-START` … `// @@SCORING-END` et `// @@TESTS-START` … `// @@TESTS-END`.
Le bloc SCORING est du JS pur (aucun accès à `window`, `document`, `localStorage`) et ne mentionne jamais
les champs `fiche`, `situationFamiliale`, `nationalite`, `ethnie`, `religion`, `langueEntretien`.

### Entrée : `answers`
```js
{
  poste: 'menage' | 'cuisine' | 'polyvalent',
  reponses: { q1: ..., q2: ..., /* … */ q10: ... },   // forme détaillée libre, documentée en tête du bloc SCORING
  pratique: { /* idGeste: 'reussi' | 'partiel' | 'non_fait' | 'non_observe' */ }   // facultatif
}
```

### Sortie : `computeScore(answers, CONFIG)`
```js
{
  total: Number,                 // 0 à 100, entier
  sousScores: { competences, hygieneSecurite, integrite, coherence, stabilite },  // chacun 0 à 100
  drapeaux: [ { id: String, niveau: 'leger' | 'bloquant', message: String } ],
  verdict: 'essai' | 'approfondir' | 'non_recommande',
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
    drapeauxInclus?: [String], drapeauxExclus?: [String]
} } ]
```
Cas minimum attendus (8 au total, le cas 7 en compte deux) :
1. Candidate solide, sans drapeau → `essai`.
2. Même candidate, mais jette de l'eau sur l'huile en feu → drapeau `geste_dangereux`, verdict au mieux `approfondir`.
3. Dit connaître le produit fictif + garde l'argent trouvé → `non_recommande`.
4. Répond « jamais » en Q8, sinon solide → drapeau `reponse_trop_parfaite`, verdict inchangé (`essai`).
5. Ne prévient pas quand elle ne peut pas venir → drapeau `absence_sans_prevenir`, verdict inchangé.
6. Déclare savoir cuisiner en Q1 mais incapable d'expliquer en Q2 → drapeau `incoherence_q1_q2`.
7. Candidate bonne en ménage mais faible en hygiène alimentaire, testée en poste `menage` puis `cuisine`
   (deux cas, bornés par `minTotal` / `maxTotal`) → total plus bas en `cuisine` (vérifie la pondération).
