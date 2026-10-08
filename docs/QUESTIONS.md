# Questions de l'entretien

> **Statut : barème validé le 17/09/2026, ramené à cinq questions le 08/10/2026.** Les questions, les options,
> les points et les drapeaux ci-dessous sont ceux implémentés dans `CONFIG` (`index.html`). En cas d'écart
> avec `docs/SPEC.md`, c'est ce document qui fait foi (`CLAUDE.md`).
>
> **Décision du 08/10/2026 : cinq questions, sans essai payé.** L'entretien était trop long, et l'essai payé
> n'existe pas au Niger. Sont retirés : l'eau de boisson, la question sur le retard au travail, le produit
> fictif, la durée d'engagement, les congés et l'accord sur un essai payé. La question sur le micro-ondes
> devient un scénario de la question Honnêteté. La vérification passe désormais par **l'épreuve pratique**
> et par **l'observation des premiers jours de travail**. Le détail est en fin de document.
>
> **Décision du 17/09/2026 : l'app est en français uniquement.** Les brouillons zarma et haoussa restent
> ci-dessous pour mémoire, mais **ils ne sont pas utilisés par l'app** : ils n'avaient pas été relus par des
> locuteurs natifs, et un texte approximatif lu à voix haute fait plus de dégâts qu'un texte absent.
> Leur reprise éventuelle est renvoyée en v2 (`docs/ROADMAP.md`).
>
> **Décision du 18/09/2026 : aucune vérification ne repose sur un appel aux anciens employeurs.**
> Les joindre est rarement possible à Niamey. Les points à vérifier ne dépendent que de l'employeur.
> Le rapport est écrit en phrases complètes : les repères `Q1`…`Q5` restent internes à ce document
> et n'apparaissent jamais à l'écran.

---

## Comment lire ce document

- **Points** : chaque option porte des points bruts. Chaque sous-score est ensuite ramené sur 100
  (points obtenus ÷ points maximums applicables × 100), puis pondéré selon le poste (SPEC § 5).
- **Points maximums applicables** : une option « non posée » ou « non observée », ou une question sans réponse,
  est retirée du maximum : elle ne pénalise pas la candidate.
- **Drapeaux** : `id` + niveau `leger` ou `bloquant`.
- **✱ = règle décidée ici et absente de `docs/SPEC.md`.** Toutes les ✱ sont reprises en fin de document.
- L'employeur lit la question à voix haute et coche. La candidate ne touche pas au téléphone.
- Chaque question a aussi un champ de note libre (non noté).

### Avertissement sur les traductions — non utilisées par l'app

Les versions **zarma** et **haoussa** ci-dessous sont des **brouillons de travail, non validés**, et
**l'app ne les affiche pas** : elle est en français uniquement depuis le 17/09/2026. Elles sont conservées ici
pour qui voudrait les reprendre. Avant toute utilisation en entretien, elles doivent être relues, corrigées
ou entièrement réécrites par des locutrices et locuteurs natifs de Niamey.

La candidate, elle, répond dans la langue qu'elle veut : le barème note ce qu'elle dit, jamais son vocabulaire
ni sa langue (voir la consigne de Q1).

Deux précisions honnêtes sur la qualité de ces brouillons :

- **Haoussa** : brouillon plausible, mais l'orthographe (ɓ, ɗ, ƙ), le vouvoiement/tutoiement au féminin
  et le vocabulaire ménager (fer à repasser, planche à découper, eau de Javel) sont à reprendre.
- **Zarma** : brouillon **faible**. Plusieurs tournures sont probablement fautives. Il vaut mieux faire
  **réécrire** ces phrases par un locuteur natif à partir du français que les corriger mot à mot.

Si ces traductions reviennent un jour dans l'app, ces mentions doivent rester visibles à côté de chacune.

---

## Préambule — à lire avant de commencer ✱

Non noté. Sert au rappel exigé par la SPEC § 7 (informer la candidate que ses réponses sont notées).
L'app l'affiche sur un écran à part, juste avant la première question.

- **Français** : « Bonjour. Je vais te poser cinq questions sur le travail. Je note tes réponses sur mon téléphone,
  pour m'aider à me souvenir et à comparer. Il n'y a pas de piège. Si tu ne sais pas, dis-le, ce n'est pas grave.
  Tu peux me poser des questions toi aussi. »
- **Zarma** *(traduction à valider par un locuteur natif)* : « Fofo. Ay ga hã ni se hãayan guu goyo boŋ.
  Ay ga ni tuyaney hantum ay telefono ra, zama ay ma fongu k'i care nda care. Fafaga si no.
  Da ni si bay, ma ci, manti taali. Nin mo ga hin ka hã ay se. »
- **Haoussa** *(traduction à valider par un locuteur natif)* : « Sannu. Zan yi miki tambayoyi biyar game da aiki.
  Ina rubuta amsoshinki a wayata, don in tuna kuma in kwatanta. Babu tarko. In ba ki sani ba, ki faɗa, ba laifi.
  Ke ma kina iya tambayata. »

---

## Q1 — Compétences

**Sous-scores : Compétences (30 pts : 12 + 18) + Cohérence (10 pts).**
Deux temps sur le même écran : elle dit ce qu'elle sait faire, puis elle explique une de ces tâches,
tirée au hasard. Le second temps vérifie le premier.

### Premier temps : ce qu'elle dit savoir faire

- **Français** : « Dis-moi ce que tu sais faire dans une maison. Je coche au fur et à mesure.
  Si tu ne sais pas faire une chose, dis-le, ce n'est pas grave. »
- **Zarma** *(traduction à valider par un locuteur natif)* : « Ma ci ay se haya kaŋ ni ga hin ka te fu ra.
  Ay ga hantum sanda ni ga ci. Da hay fo go kaŋ ni si hin, ma ci ay se, manti taali. »
- **Haoussa** *(traduction à valider par un locuteur natif)* : « Faɗa mini abin da kika iya yi a gida.
  Ina rubutawa yayin da kike faɗa. In akwai abin da ba ki iya ba, ki faɗa, ba laifi. »

Cases indépendantes, cochées = points (sous-score Compétences) :

| Famille de tâches | Détail lu à voix haute | menage | cuisine | polyvalent | Drapeau |
|---|---|---|---|---|---|
| A. Ménage | balayer et laver les sols, nettoyer les sanitaires, faire les vitres et la poussière | 4 | 2 | 3 | — |
| B. Lessive et repassage | laver le linge à la main, étendre, trier, repasser | 4 | 1 | 3 | — |
| C. Vaisselle | vaisselle, casseroles, rangement de la cuisine | 4 | 3 | 3 | — |
| D. Aide cuisine | éplucher et découper, laver et trier le riz, plats locaux, sauces | non compté | 6 | 3 | — |
| **Maximum** | | **12** | **12** | **12** | |

- Pour le poste `menage`, la famille D n'entre **ni dans les points ni dans le maximum** : ne pas savoir cuisiner
  n'est pas une lacune pour ce poste. Elle reste cochable (info utile, et sa tâche peut être tirée).
- Aucune famille n'est obligatoire : le premier temps mesure ce qui est déclaré, le second ce qui est réel.

### Second temps : elle explique une tâche tirée au hasard

Quand elle a fini, l'employeur tire au hasard une tâche **parmi les familles cochées**. Pour les postes
`cuisine` et `polyvalent`, la tâche est tirée en priorité dans la famille D si elle est cochée. ✱

Tâches tirables : nettoyer des toilettes · laver un sol carrelé · faire les vitres sans laisser de traces ·
détacher et laver du linge à la main · repasser une chemise · trier et plier le linge · faire la vaisselle grasse
sans eau chaude · récurer une marmite brûlée · laver et trier le riz · éplucher et découper des légumes ·
préparer une sauce arachide · préparer une sauce feuille.

- **Français** : « Explique-moi, étape par étape, comment tu fais pour [tâche]. Prends ton temps. Commence par le début. »
- **Zarma** *(traduction à valider par un locuteur natif)* : « Ma ci ay se, ce fo-fo, mate kaŋ ni ga [goyo]
  te d'a. Ma te suuru. Ma sintin za sintina gaa. »
- **Haoussa** *(traduction à valider par un locuteur natif)* : « Ki bayyana mini, mataki-mataki, yadda kike
  yin [aikin]. Ki yi a hankali. Ki fara daga farko. »

| Option | Compétences | Cohérence | Drapeau |
|---|---|---|---|
| Explication précise et complète (étapes dans l'ordre, produits, finition) | 18 | 10 | — |
| Explication approximative (grandes lignes, étapes manquantes) | 9 | 5 | — |
| Incapable d'expliquer, ou décrit autre chose que la tâche demandée | 0 | 0 | `incoherence_competence` — **bloquant** |

**Règles**

- La tâche vient toujours d'une famille cochée : décocher cette famille annule le tirage.
- Si aucune famille n'est cochée, rien n'est tiré : l'explication sort du maximum des deux sous-scores.
- Ne pas pénaliser le vocabulaire : une explication juste en zarma ou en haoussa vaut une explication en français.
- Un nouveau tirage est possible (« Tirer une autre tâche ») ; il efface la réponse déjà cochée.

**Points à vérifier générés** : pour chaque famille cochée autre que celle de la tâche expliquée →
« La regarder faire [tâches] pendant ses premiers jours. » ; si l'explication est approximative ou impossible →
« Lui faire refaire devant toi, le premier jour, la tâche qu'elle vient d'expliquer. »

---

## Q2 — Hygiène

**Sous-score : Hygiène & sécurité.** Points bruts : **12 max** (4 thèmes × 3 pts).

- **Français** : « Maintenant, parlons de la nourriture. »
- **Zarma** *(traduction à valider par un locuteur natif)* : « Sohõ iri ma salaŋ ŋwaari boŋ. »
- **Haoussa** *(traduction à valider par un locuteur natif)* : « Yanzu mu yi magana a kan abinci. »

### Q2.1 — Lavage des mains

- **Français** : « Avant de cuisiner, comment tu te laves les mains ? »
- **Zarma** *(à valider)* : « Za ni mana ŋwaari te, mate kaŋ ni ga ni kambey nyun d'a? »
- **Haoussa** *(à valider)* : « Kafin ki girka, yaya kike wanke hannunki? »

| Option | Points | Drapeau |
|---|---|---|
| À l'eau et au savon, avant de cuisiner et après les toilettes | 3 | — |
| À l'eau et au savon, mais seulement quand les mains sont sales | 1 | — |
| À l'eau seulement, ou « je m'essuie sur le pagne » | 0 | `hygiene_risquee` — leger ✱ |

### Q2.2 — Légumes mangés crus

- **Français** : « La salade et les tomates qu'on mange sans les cuire, comment tu les prépares ? »
- **Zarma** *(à valider)* : « Salaati nda tomaati kaŋ i si hina, mate kaŋ ni g'i soola d'a? »
- **Haoussa** *(à valider)* : « Salatin da tumatir da ake ci ba tare da dafa su ba, yaya kike shirya su? »

| Option | Points | Drapeau |
|---|---|---|
| Lavés à l'eau propre puis trempés (eau javellisée pour aliments, vinaigre ou permanganate selon l'habitude de la maison), puis rincés | 3 | — |
| Rincés rapidement à l'eau | 1 | — |
| Pas lavés, ou « je les essuie » | 0 | `hygiene_risquee` — leger ✱ |

### Q2.3 — Viande crue et aliments cuits

- **Français** : « Tu viens de découper de la viande crue. Maintenant tu dois couper des légumes déjà cuits.
  Que fais-tu avec le couteau et la planche ? »
- **Zarma** *(à valider)* : « Ni na ham kaŋ si hina dumbu. Sohõ ni ga ŋwaari kaŋ i hina dumbu.
  Ifo no ni ga te nda zaama nda dumbuyan-bundo? »
- **Haoussa** *(à valider)* : « Kin yanka nama danye. Yanzu za ki yanka kayan da aka riga aka dafa.
  Me za ki yi da wuƙa da katakon yanka? »

| Option | Points | Drapeau |
|---|---|---|
| Couteau et planche lavés à l'eau et au savon entre les deux, ou deux planches différentes | 3 | — |
| Rincés à l'eau seulement | 1 | — |
| Rien, on continue avec le même couteau et la même planche | 0 | `hygiene_risquee` — leger ✱ |

### Q2.4 — Restes

- **Français** : « Il reste de la sauce du midi. Que fais-tu avec, jusqu'au soir ? »
- **Zarma** *(à valider)* : « Zaari ŋwaari cindo go no. Ifo no ni ga te d'a kala wiciri-kambu? »
- **Haoussa** *(à valider)* : « Miyar rana ta rage. Me za ki yi da ita har zuwa dare? »

| Option | Points | Drapeau |
|---|---|---|
| Couverte et mise au frigo, puis bien rebouillie avant de servir | 3 | — |
| Laissée couverte hors du frigo, puis réchauffée | 1 | — |
| Laissée dehors à découvert, ou servie sans réchauffer | 0 | `hygiene_risquee` — leger ✱ |
| La maison n'a pas de frigo | maximum réduit de 3 | — |

**Point à vérifier généré** : pour chaque thème à 0 ou 1 point → « Montrer la règle de la maison sur [thème] le premier jour. »

---

## Q3 — Sécurité : une variante tirée au hasard

**Sous-score : Hygiène & sécurité.** Points bruts : **15 max**, quelle que soit la variante tirée.
Identifiant de drapeau commun aux trois variantes : **`geste_dangereux` — bloquant**.

### Variante A — Huile en feu

- **Français** : « Tu fais frire. L'huile prend feu dans la marmite. Que fais-tu tout de suite ? »
- **Zarma** *(à valider)* : « Ni go soyyan gaa. Danji na ji di kuso ra. Ifo no ni ga te sohõ? »
- **Haoussa** *(à valider)* : « Kina soya. Man ya kama wuta a cikin tukunya. Me za ki yi nan take? »

| Option | Points | Drapeau |
|---|---|---|
| Je coupe le feu ou le gaz, et je couvre la marmite (couvercle, grand plat, linge mouillé essoré) | 15 | — |
| Je coupe le feu et j'attends sans rien poser dessus | 8 | — |
| Je sors et j'appelle quelqu'un | 5 | — |
| Je ne sais pas | 2 | — |
| Je verse de l'eau dessus | 0 | `geste_dangereux` — **bloquant** |
| Je prends la marmite en feu pour la sortir | 0 | `geste_dangereux` — **bloquant** ✱ |

### Variante B — Odeur de gaz

- **Français** : « Tu entres dans la cuisine le matin et ça sent le gaz. Que fais-tu ? »
- **Zarma** *(à valider)* : « Ni furo ŋwaari-teeyan fuwo ra susubay, gaazu hã go no. Ifo no ni ga te? »
- **Haoussa** *(à valider)* : « Kin shiga ɗakin girki da safe, kika ji ƙamshin gas. Me za ki yi? »

| Option | Points | Drapeau |
|---|---|---|
| Je ne touche à rien d'électrique, je ferme la bouteille, j'ouvre portes et fenêtres, je préviens | 15 | — |
| J'ouvre la fenêtre et je fais sortir tout le monde | 8 | — |
| Je sors et j'appelle quelqu'un | 6 | — |
| Je ne sais pas | 2 | — |
| J'allume une allumette ou un briquet pour voir d'où ça vient | 0 | `geste_dangereux` — **bloquant** |
| J'allume la lumière, le ventilateur ou la clim | 0 | `geste_dangereux` — **bloquant** |

### Variante C — Mélange de produits

- **Français** : « Tu veux que les toilettes soient vraiment propres. Est-ce que tu mélanges l'eau de Javel
  avec un autre produit ? Lequel ? »
- **Zarma** *(à valider)* : « Ni ga ba kaŋ kawyan fuwo ma hanan gumo. Ni ga javel margu nda dooro fo?
  Woofo dumi no? »
- **Haoussa** *(à valider)* : « Kina son bayan gida ya yi tsabta sosai. Shin kina haɗa ruwan Javel
  da wani magani? Wanne? »

| Option | Points | Drapeau |
|---|---|---|
| Non, jamais deux produits ensemble : la Javel seule, bien rincée, fenêtre ouverte | 15 | — |
| Je n'ai jamais essayé, je demanderais d'abord | 12 | — |
| Je mélange la Javel avec du savon ou de la poudre à laver | 5 | — ✱ |
| Je ne sais pas | 2 | — |
| Je mélange la Javel avec du vinaigre ou du citron | 0 | `geste_dangereux` — **bloquant** |
| Je mélange la Javel avec de l'ammoniaque, un détartrant ou de l'acide | 0 | `geste_dangereux` — **bloquant** |

**Point à vérifier généré** (toute variante, si la réponse n'est pas la meilleure) : « Reprendre ce geste avec elle
avant qu'elle touche au gaz ou aux produits. »

---

## Q4 — Honnêteté : une variante tirée au hasard

**Sous-score : Intégrité.** Points bruts : **15 max**, quelle que soit la variante.

### Variante A — Argent trouvé

- **Français** : « Tu fais le ménage dans la chambre. Tu trouves un billet de 10 000 francs par terre,
  sous le lit. Que fais-tu ? »
- **Zarma** *(à valider)* : « Ni go fu ra hanandiyan gaa. Ni na nooru takarda zambar way gar ganda,
  daari cire. Ifo no ni ga te? »
- **Haoussa** *(à valider)* : « Kina share ɗaki. Kika tarar da takardar kuɗi dubu goma a ƙasa, ƙarƙashin gado.
  Me za ki yi? »

| Option | Points | Drapeau |
|---|---|---|
| Je le pose bien en vue et je le dis tout de suite | 15 | — |
| Je le laisse où il est et je le signale | 15 | — |
| Je le garde de côté et je le rends si on me le demande | 3 | `integrite` — leger ✱ |
| Je le garde, personne ne le réclamera | 0 | `integrite` — **bloquant** |

### Variante B — Objet cassé

- **Français** : « En faisant le ménage, tu casses un verre. Personne ne t'a vue. Que fais-tu ? »
- **Zarma** *(à valider)* : « Ni go hanandiyan gaa, ni na gaasu fo ceeri. Boro kulu mana di ni.
  Ifo no ni ga te? »
- **Haoussa** *(à valider)* : « Kina share ɗaki, sai kika fasa gilashi. Ba wanda ya gan ki. Me za ki yi? »

| Option | Points | Drapeau |
|---|---|---|
| Je le dis tout de suite, même si j'ai peur | 15 | — |
| Je ramasse les morceaux, je les mets de côté et je le dis dès que quelqu'un rentre | 12 | — |
| J'attends qu'on s'en aperçoive | 4 | `integrite` — leger ✱ |
| Je jette les morceaux et je ne dis rien | 0 | `integrite` — **bloquant** |

**Point à vérifier généré** (variantes A et B, si la réponse n'est pas la meilleure) : « Dire clairement dès le premier jour ce qu'on fait quand on trouve
de l'argent ou qu'on casse un objet, et l'écrire dans l'accord. »

### Variante C — Nourriture de la maison

- **Français** : « Il y a de la nourriture dans la maison. Personne ne t'a dit de te servir. Tu as faim.
  Que fais-tu ? »
- **Zarma** *(à valider)* : « Ŋwaari go fuwo ra. Boro kulu mana ci ni se ni ma ŋwa. Haray go ni gaa.
  Ifo no ni ga te? »
- **Haoussa** *(à valider)* : « Akwai abinci a gida. Ba wanda ya ce ki ci. Kina jin yunwa. Me za ki yi? »

| Option | Points | Drapeau |
|---|---|---|
| Je demande avant de me servir | 15 | — |
| J'attends qu'on me propose, ou je mange ce que j'ai apporté | 15 | — |
| Je prends un peu, je pense que ce n'est pas grave | 5 | `se_sert_sans_demander` — leger |
| Je me sers et je ne dis rien | 2 | `se_sert_sans_demander` — leger |

**Note pour l'employeur** : cette variante teste une règle de maison, pas la faim.

**Point à vérifier généré** (si la réponse n'est pas la meilleure) : « Dire dès le premier jour ce qui est permis pour les repas. »

### Variante D — Appareils de la maison ✱

Ancienne question « Règles de la maison », devenue une variante de Q4 le 08/10/2026. Ses points sont ramenés
de 10 à 15 dans les mêmes proportions.

- **Français** : « Il n'y a personne à la maison. Tu veux réchauffer ton repas. Le micro-ondes est là.
  Que fais-tu ? »
- **Zarma** *(à valider)* : « Boro kulu si fuwo ra. Ni ga ba ni ŋwaaro ma dungu. Mikro-onda go noodin.
  Ifo no ni ga te? »
- **Haoussa** *(à valider)* : « Babu kowa a gida. Kina son ki ɗuma abincinki. Mikrowef ɗin nan yana nan.
  Me za ki yi? »

| Option | Points | Drapeau |
|---|---|---|
| Je demande d'abord à Madame ou Monsieur, ou j'attends leur retour | 15 | — |
| Je réchauffe sur le feu, ou je mange froid : je ne touche pas aux appareils | 15 | — |
| J'envoie un message et j'attends la réponse | 12 | — |
| Je demande à une autre personne qui travaille dans la maison | 8 | — |
| Je l'utilise, je sais m'en servir, et je le dis après | 3 | `electromenager_sans_autorisation` — leger |
| Je l'utilise et je ne dis rien | 0 | `electromenager_sans_autorisation` — leger ✱ |

**Note pour l'employeur** : la bonne réponse est « demander », pas « savoir s'en servir ». Si la candidate
demande la règle de la maison d'elle-même, c'est un bon signe à noter.

**Point à vérifier généré** (si la réponse n'est pas la meilleure) : « Écrire la règle sur les appareils dans
l'accord de départ. »

---

## Q5 — Disponibilité

**Sous-score : Stabilité.** Points bruts : **16 max**, quelle que soit la variante ci-dessous.

**Deux variantes selon le logement** (décidé le 18/09/2026). Beaucoup d'aides ménagères venues d'autres pays
logent dans la maison plutôt que de rentrer chaque soir ; les questions ne sont pas les mêmes. Le logement se
choisit sur la fiche, comme le poste — **avant** l'entretien, ce n'est pas une question posée à la candidate.

**Règle commune aux deux variantes** : cette question porte sur le travail à venir. Elle ne demande **jamais**
chez qui la candidate a travaillé, ni de citer quelqu'un qui pourrait parler d'elle. Elle ne demande pas non
plus où elle habite exactement ni avec qui elle vit : ces éléments n'entrent pas dans le score.

### Variante « loge dans la maison »

- **Français** : « Parlons de l'organisation, pour que chacun sache à quoi s'attendre. »

#### Le jour de repos (8 pts)

| Option | Points | Drapeau |
|---|---|---|
| Oui, elle trouve ça normal et propose même un jour | 8 | — |
| Elle est ouverte, mais veut en reparler une fois arrivée | 5 | — |
| Elle dit qu'elle n'a pas besoin de jour de repos | 1 | `disponibilite_trop_parfaite` — leger ✱ |

#### Si elle est malade ou a un empêchement (8 pts)

| Option | Points | Drapeau |
|---|---|---|
| Elle en parle avec toi et propose une solution (se faire remplacer un moment, rattraper) | 8 | — |
| Elle prévient, mais sans proposer de solution | 5 | — |
| Elle s'absente ou repart sans prévenir personne | 0 | `absence_sans_prevenir` — leger |

### Variante « rentre chez elle chaque soir »

- **Français** : « Parlons de l'organisation. À quelle heure tu peux être ici le matin, jusqu'à quelle heure tu
  peux rester, et comment tu viendras ? »

#### Les heures qu'elle peut faire (5 pts)

| Option | Points | Drapeau |
|---|---|---|
| Elle annonce des heures précises, qui couvrent le besoin de la maison | 5 | — |
| À peu près, mais elle accepte de fixer les heures maintenant | 3 | — |
| Elle ne sait pas, ou ses heures changent d'un jour à l'autre | 1 | — |

#### Le trajet jusqu'à la maison (5 pts)

| Option | Points | Drapeau |
|---|---|---|
| Elle sait comment elle vient et combien de temps ça lui prend | 5 | — |
| Le trajet est long ou coûteux, mais elle a déjà une solution | 3 | — |
| Elle ne sait pas encore comment elle viendra le matin | 1 | — |

**Règle** : on note la solution de transport, jamais le quartier d'habitation.

#### Le jour où elle ne peut pas venir (6 pts)

| Option | Points | Drapeau |
|---|---|---|
| Elle prévient la veille ou tôt le matin, et propose de rattraper | 6 | — |
| Elle prévient le matin même, par appel ou par message | 4 | — |
| Elle envoie quelqu'un d'autre travailler à sa place | 1 | — ✱ |
| Elle ne vient pas, et explique une fois revenue | 0 | `absence_sans_prevenir` — leger |

**Points à vérifier générés**, selon les réponses et la variante : écrire les heures jour par jour, vérifier le
trajet du matin, poser la règle que personne d'autre n'entre travailler à sa place, ou convenir de ce qu'on fait
ensemble les jours où elle ne peut pas travailler.

---

## Annexe — Épreuve pratique (recommandée)

Sans essai payé, c'est la seule façon de voir ses gestes avant de décider. Elle se fait sur place, après les
questions. Elle alimente le **sous-score Compétences** uniquement. Notation par geste : **réussi 2 · partiel 1 ·
non fait 0 · non observé = exclu du calcul**. Chaque geste porte un coefficient selon le poste.

| Geste observé | menage | cuisine | polyvalent |
|---|---|---|---|
| G1 — Lavage des mains | 1 | 2 | 2 |
| G2 — Nettoyage d'un plan de travail ou d'un sanitaire | 2 | 1 | 2 |
| G3 — Épluchage et découpe de légumes | 1 | 3 | 2 |
| G4 — Vaisselle | 2 | 2 | 2 |
| G5 — Tri et pliage du linge | 2 | 1 | 1 |
| **Points maximums (coef × 2)** | **16** | **18** | **18** |

**Règle de mélange** ✱ : si au moins un geste est observé,
`Compétences = 70 % entretien (Q1) + 30 % épreuve pratique`, chacun ramené sur 100.
Sans épreuve pratique, Compétences = 100 % entretien : aucune candidate n'est pénalisée pour une épreuve non faite,
mais le rapport ajoute alors ce point à vérifier : « Lui faire faire l'épreuve pratique avant de décider :
cinq gestes simples, observés sur place. C'est la vérification la plus sûre. » ✱

**Points à vérifier générés** : chaque geste « partiel » ou « non fait » → « Reprendre [geste] le premier jour. »

**Toujours rappelés**, quel que soit le résultat : « La regarder travailler de près pendant ses premiers jours :
c'est là que se vérifie ce qu'elle a annoncé. » et « Écrire ensemble les tâches, les horaires et les règles de la
maison avant le premier jour. »

---

## Récapitulatif des drapeaux

| id | Niveau | Question | Message affiché |
|---|---|---|---|
| `incoherence_competence` | bloquant | Q1 | Elle annonce une compétence qu'elle n'arrive pas à expliquer. La lui faire montrer avant de l'embaucher. |
| `hygiene_risquee` | leger ✱ | Q2 | Elle a décrit une pratique d'hygiène à risque. Lui montrer la façon de faire de la maison dès le premier jour. |
| `geste_dangereux` | bloquant | Q3 | Elle a décrit un geste dangereux avec le feu, le gaz ou les produits. À corriger avec elle avant qu'elle touche à la cuisine. |
| `integrite` | bloquant | Q4 A, Q4 B | Sa réponse sur l'honnêteté est inquiétante. En parler franchement avec elle, et écrire la règle sur l'argent et les objets avant le premier jour. |
| `integrite` | leger ✱ | Q4 A, Q4 B | Sa réponse sur l'honnêteté est en demi-teinte. Reposer la question autrement, et écrire clairement la règle sur l'argent et les objets. |
| `se_sert_sans_demander` | leger | Q4 C | Elle se servirait dans la nourriture sans demander. Dire clairement ce qui est permis pour les repas. |
| `electromenager_sans_autorisation` | leger | Q4 D | Elle utiliserait un appareil de la maison sans demander. Poser la règle par écrit dès le premier jour. |
| `absence_sans_prevenir` | leger | Q5 | Elle ne prévient pas en cas d'empêchement ou d'absence. Convenir dès le départ d'un moyen simple de prévenir, quelle que soit la situation. |
| `disponibilite_trop_parfaite` | leger ✱ | Q5 (loge sur place) | Elle dit ne pas avoir besoin de repos. Une réponse trop généreuse s'use vite : fixer quand même un jour de repos fixe chaque semaine. |

Rappel SPEC § 5 : 1 drapeau bloquant → verdict au mieux `approfondir` ; 2 bloquants ou plus → `non_recommande` ;
3 drapeaux légers ou plus → verdict au mieux `approfondir`. Tous les drapeaux sont affichés, quel que soit le score.

---

## Tableau des points maximums par sous-score

Points **bruts** de l'entretien. Chaque sous-score est ensuite ramené sur 100, puis pondéré par poste (SPEC § 5).

| Sous-score | Questions | Détail des points | Maximum brut |
|---|---|---|---|
| **Compétences** | Q1 | ce qu'elle sait faire : 12 · explication : 18 | **30** |
| **Hygiène & sécurité** | Q2, Q3 | Q2 : 12 (4 × 3) · Q3 : 15 | **27** |
| **Intégrité** | Q4 | 15 | **15** |
| **Cohérence** | Q1 | explication : 10 | **10** |
| **Stabilité** | Q5 | 16 (8 + 8 si logée, 5 + 5 + 6 si elle rentre chaque soir) | **16** |
| **Total entretien** | | | **98** |

Épreuve pratique, en plus et seulement sur Compétences : 16 points (menage), 18 (cuisine), 18 (polyvalent).

**Maximums applicables** — le dénominateur baisse dans ces cas, sans pénaliser la candidate :

| Situation | Effet sur le maximum |
|---|---|
| Poste `menage` | Famille D retirée de Q1 (le maximum reste 12) |
| Aucune famille cochée en Q1 | Rien à expliquer : Compétences −18, Cohérence vide (valeur neutre 50) |
| Pas de frigo dans la maison | Q2.4 retirée : Hygiène & sécurité −3 |
| Épreuve pratique non faite | Compétences = entretien seul (et le rapport demande de la faire) |

---

## Décisions validées (règles hors SPEC)

Validées le 17/09/2026, complétées le 18/09/2026, mises à jour le 08/10/2026. Ces points ne figurent pas dans
`docs/SPEC.md` : ils sont décidés ici et marqués ✱ dans le corps du document. Les tableaux ci-dessus font foi
pour les valeurs exactes.

1. **Cinq questions, sans essai payé** (08/10/2026). L'essai payé n'existe pas au Niger : la vérification passe
   par l'épreuve pratique, demandée dans le rapport quand elle n'a pas été faite, et par l'observation des
   premiers jours. Le verdict favorable s'appelle « Embauche recommandée » (identifiant `recommande`).
2. **Compétences en deux temps sur un seul écran** (08/10/2026) : l'ancienne Q2 (démonstration orale) devient le
   second temps de Q1. Son drapeau, autrefois `incoherence_q1_q2`, s'appelle `incoherence_competence`.
3. **Q1, tirage prioritaire** : pour les postes `cuisine` et `polyvalent`, la tâche est tirée en priorité dans la
   famille D si elle est cochée.
4. **Drapeau `hygiene_risquee` (leger) en Q2** : il se déclenche sur chaque option d'hygiène à zéro point.
   Trois réponses à zéro en Q2 suffisent à plafonner le verdict à `approfondir` (règle des 3 drapeaux légers).
5. **Q3 variante A** : « je prends la marmite en feu pour la sortir » → 0 point et `geste_dangereux` bloquant.
6. **Q3 variante C** : « Javel + savon ou poudre à laver » → 5 points, sans drapeau.
7. **Drapeau `integrite` au niveau `leger`** pour les réponses intermédiaires de Q4 A et Q4 B
   (« je le rends si on me le demande », « j'attends qu'on s'en aperçoive »).
8. **Sévérité inégale des variantes de Q4** : acceptée. Les variantes A (argent) et B (objet cassé) peuvent
   donner un drapeau bloquant, les variantes C (nourriture) et D (appareils) seulement un drapeau léger.
9. **Q4 variante D** (08/10/2026) : l'ancienne question sur le micro-ondes, points ramenés de 10 à 15 dans les
   mêmes proportions. Deux options distinctes pour l'usage sans autorisation (3 points si elle le dit ensuite,
   0 sinon), le drapeau `electromenager_sans_autorisation` dans les deux cas.
10. **Aucune question sur le passé professionnel** (18/09/2026). Q5 porte sur la disponibilité à venir, jamais sur
    les emplois précédents ni sur une personne à citer.
11. **Q5 a deux variantes selon le logement** (18/09/2026). Le logement se choisit sur la fiche avant l'entretien,
    comme le poste : ce n'est jamais une question posée à la candidate, ni sa situation familiale. Chaque variante
    totalise 16 points. `disponibilite_trop_parfaite` n'existe que dans la variante « loge sur place » : dire
    qu'on n'a besoin d'aucun repos est une promesse qui ne tient pas.
12. **Q5, « elle envoie quelqu'un d'autre à sa place »** → 1 point, sans drapeau, mais un point à vérifier
    (personne d'autre n'entre travailler dans la maison).
13. **Épreuve pratique** : `Compétences = 70 % entretien + 30 % épreuve pratique` dès qu'au moins un geste est
    observé ; sans épreuve, un point à vérifier demande de la faire.
14. **Préambule** : non noté, affiché sur un écran à part juste avant la première question.

Ces seuils et ces points sont des valeurs de départ, à recalibrer après une quinzaine d'entretiens réels
(SPEC § 5 et `docs/ROADMAP.md`).

---

## Retiré le 08/10/2026

Pour mémoire. Les textes complets, avec leurs brouillons de traduction, restent dans l'historique git
(version du 18/09/2026 de ce document).

| Élément retiré | Raison | Ce qui disparaît avec lui |
|---|---|---|
| Eau de boisson (ancienne Q3.5) | jugée peu utile | 3 points d'Hygiène & sécurité |
| Désirabilité sociale (ancienne Q8 : retard ou colère au travail) | jugée peu utile | drapeau `reponse_trop_parfaite` |
| Produit fictif (ancienne Q7) | pour tenir en cinq questions | drapeau `surdeclaration`, réglage du nom du produit |
| Projet et congés (ancienne Q10 : durée d'engagement, congés, calendrier écrit) | jugés non nécessaires | drapeaux `engagement_irrealiste` et `engagement_incoherent` |
| Accord sur un essai payé (ancienne Q9) | l'essai payé n'existe pas au Niger | verdict « Période d'essai recommandée », renommé |
| Règles de la maison (ancienne Q5) | regroupée avec l'honnêteté | rien : devenue la variante D de Q4 |

---

## Reste à faire, hors barème

- Les traductions sont **hors périmètre de la v1** : l'app est en français seul. Si elles reviennent un jour,
  faire relire **tout** le zarma et **tout** le haoussa par des locuteurs natifs — en particulier le zarma,
  dont le brouillon est faible — et ne jamais les présenter comme validées.
