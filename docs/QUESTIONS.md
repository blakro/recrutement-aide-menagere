# Questions de l'entretien

> **Statut : barème validé le 17/09/2026.** Les questions, les options, les points et les drapeaux
> ci-dessous sont ceux à implémenter dans `CONFIG` à l'étape 2. En cas d'écart avec `docs/SPEC.md`,
> c'est ce document qui fait foi (`CLAUDE.md`).
>
> **Deux vérifications restent ouvertes** et ne bloquent pas le code :
> (1) le zarma et le haoussa sont des brouillons, à faire relire par des locuteurs natifs ;
> (2) le nom du produit fictif de Q7 est à vérifier au marché, puis à saisir dans Réglages.

---

## Comment lire ce document

- **Points** : chaque option porte des points bruts. Chaque sous-score est ensuite ramené sur 100
  (points obtenus ÷ points maximums applicables × 100), puis pondéré selon le poste (SPEC § 5).
- **Points maximums applicables** : une option « non posée » ou « non observée » est retirée du maximum,
  elle ne pénalise pas la candidate.
- **Drapeaux** : `id` + niveau `leger` ou `bloquant`. Les identifiants sont ceux de la SPEC, sans invention.
- **✱ = règle décidée ici et absente de `docs/SPEC.md`** (validée le 17/09/2026). Toutes les ✱ sont reprises en fin de document.
- L'employeur lit la question à voix haute et coche. La candidate ne touche pas au téléphone.
- Chaque question a aussi un champ de note libre (non noté).

### Avertissement sur les traductions

Les versions **zarma** et **haoussa** ci-dessous sont des **brouillons de travail, non validés**.
Elles doivent être relues, corrigées ou entièrement réécrites par des locutrices et locuteurs natifs de Niamey
avant toute utilisation en entretien.

Deux précisions honnêtes sur la qualité de ces brouillons :

- **Haoussa** : brouillon plausible, mais l'orthographe (ɓ, ɗ, ƙ), le vouvoiement/tutoiement au féminin
  et le vocabulaire ménager (fer à repasser, planche à découper, eau de Javel) sont à reprendre.
- **Zarma** : brouillon **faible**. Plusieurs tournures sont probablement fautives. Il vaut mieux faire
  **réécrire** ces phrases par un locuteur natif à partir du français que les corriger mot à mot.

Ces mentions doivent rester visibles dans l'app, à côté de chaque traduction.

---

## Préambule — à lire avant de commencer ✱

Non noté. Sert au rappel exigé par la SPEC § 7 (informer la candidate que ses réponses sont notées).

- **Français** : « Bonjour. Je vais te poser dix questions sur le travail. Je note tes réponses sur mon téléphone,
  pour m'aider à me souvenir et à comparer. Il n'y a pas de piège. Si tu ne sais pas, dis-le, ce n'est pas grave.
  Tu peux me poser des questions toi aussi. »
- **Zarma** *(traduction à valider par un locuteur natif)* : « Fofo. Ay ga hã ni se hãayan way goyo boŋ.
  Ay ga ni tuyaney hantum ay telefono ra, zama ay ma fongu k'i care nda care. Fafaga si no.
  Da ni si bay, ma ci, manti taali. Nin mo ga hin ka hã ay se. »
- **Haoussa** *(traduction à valider par un locuteur natif)* : « Sannu. Zan yi miki tambayoyi goma game da aiki.
  Ina rubuta amsoshinki a wayata, don in tuna kuma in kwatanta. Babu tarko. In ba ki sani ba, ki faɗa, ba laifi.
  Ke ma kina iya tambayata. »

---

## Q1 — Compétences déclarées

**Sous-score : Compétences.** Points bruts : **12 max** (le maximum dépend du poste, voir le tableau).

- **Français** : « Dis-moi ce que tu sais faire dans une maison. Je coche au fur et à mesure.
  Si tu ne sais pas faire une chose, dis-le, ce n'est pas grave. »
- **Zarma** *(traduction à valider par un locuteur natif)* : « Ma ci ay se haya kaŋ ni ga hin ka te fu ra.
  Ay ga hantum sanda ni ga ci. Da hay fo go kaŋ ni si hin, ma ci ay se, manti taali. »
- **Haoussa** *(traduction à valider par un locuteur natif)* : « Faɗa mini abin da kika iya yi a gida.
  Ina rubutawa yayin da kike faɗa. In akwai abin da ba ki iya ba, ki faɗa, ba laifi. »

### Options à cocher (cases indépendantes, cochées = points)

| Famille de tâches | Détail lu à voix haute | menage | cuisine | polyvalent | Drapeau |
|---|---|---|---|---|---|
| A. Ménage | balayer et laver les sols, nettoyer les sanitaires, faire les vitres et la poussière | 4 | 2 | 3 | — |
| B. Lessive et repassage | laver le linge à la main, étendre, trier, repasser | 4 | 1 | 3 | — |
| C. Vaisselle | vaisselle, casseroles, rangement de la cuisine | 4 | 3 | 3 | — |
| D. Aide cuisine | éplucher et découper, laver et trier le riz, plats locaux, sauces | non compté | 6 | 3 | — |
| **Maximum** | | **12** | **12** | **12** | |

**Règles**

- Pour le poste `menage`, la famille D n'entre **ni dans les points ni dans le maximum** : ne pas savoir cuisiner
  n'est pas une lacune pour ce poste. Elle reste cochable (info utile, et elle alimente Q2).
- Aucune sous-tâche n'est obligatoire : le score mesure ce qui est déclaré, Q2 mesure ce qui est réel.

**Point à vérifier généré** : pour chaque famille cochée mais non testée en Q2 ni à l'épreuve pratique →
« Faire refaire [tâche] pendant l'essai. »

---

## Q2 — Démonstration orale (vérifie Q1)

**Sous-scores : Compétences (18 pts) + Cohérence (10 pts).**

La tâche est **tirée au hasard parmi celles cochées en Q1**. Pour les postes `cuisine` et `polyvalent`,
tirer en priorité une tâche de la famille D si elle est cochée. ✱

Exemples de tâches tirables : nettoyer des toilettes · laver un sol carrelé · détacher et laver du linge à la main ·
repasser une chemise · faire la vaisselle grasse sans eau chaude · laver et trier le riz · éplucher et découper des
légumes · préparer une sauce arachide · préparer une sauce feuille.

- **Français** : « Explique-moi, étape par étape, comment tu fais [tâche]. Prends ton temps. Commence par le début. »
- **Zarma** *(traduction à valider par un locuteur natif)* : « Ma ci ay se, ce fo-fo, mate kaŋ ni ga [goyo]
  te d'a. Ma te suuru. Ma sintin za sintina gaa. »
- **Haoussa** *(traduction à valider par un locuteur natif)* : « Ki bayyana mini, mataki-mataki, yadda kike
  yin [aikin]. Ki yi a hankali. Ki fara daga farko. »

### Options à cocher (une seule)

| Option | Compétences | Cohérence | Drapeau |
|---|---|---|---|
| Explication précise et complète (étapes dans l'ordre, produits, finition) | 18 | 10 | — |
| Explication approximative (grandes lignes, étapes manquantes) | 9 | 5 | — |
| Incapable d'expliquer, ou décrit autre chose que la tâche demandée | 0 | 0 | `incoherence_q1_q2` — **bloquant** (si la tâche avait été cochée en Q1) |
| Tâche non cochée en Q1, la candidate l'a dit d'emblée | non posée | non posée | — |

**Règles**

- Le drapeau `incoherence_q1_q2` ne se déclenche **que** si la tâche tirée avait été cochée en Q1.
- Si Q1 ne contient aucune tâche cochée, Q2 est « non posée » et sort du maximum des deux sous-scores.
- Ne pas pénaliser le vocabulaire : une explication juste en zarma ou en haoussa vaut une explication en français.

**Point à vérifier généré** : « Faire refaire [tâche] devant toi le premier jour. »

---

## Q3 — Hygiène alimentaire

**Sous-score : Hygiène & sécurité.** Points bruts : **15 max** (5 thèmes × 3 pts).

- **Français** : « Maintenant, parlons de la nourriture et de l'eau. »
- **Zarma** *(traduction à valider par un locuteur natif)* : « Sohõ iri ma salaŋ ŋwaari nda hari boŋ. »
- **Haoussa** *(traduction à valider par un locuteur natif)* : « Yanzu mu yi magana a kan abinci da ruwa. »

### Q3.1 — Lavage des mains

- **Français** : « Avant de cuisiner, comment tu te laves les mains ? »
- **Zarma** *(à valider)* : « Za ni mana ŋwaari te, mate kaŋ ni ga ni kambey nyun d'a? »
- **Haoussa** *(à valider)* : « Kafin ki girka, yaya kike wanke hannunki? »

| Option | Points | Drapeau |
|---|---|---|
| À l'eau et au savon, avant de cuisiner et après les toilettes | 3 | — |
| À l'eau et au savon, mais seulement quand les mains sont sales | 1 | — |
| À l'eau seulement, ou « je m'essuie sur le pagne » | 0 | `hygiene_risquee` — leger ✱ |

### Q3.2 — Légumes mangés crus

- **Français** : « La salade et les tomates qu'on mange sans les cuire, comment tu les prépares ? »
- **Zarma** *(à valider)* : « Salaati nda tomaati kaŋ i si hina, mate kaŋ ni g'i soola d'a? »
- **Haoussa** *(à valider)* : « Salatin da tumatir da ake ci ba tare da dafa su ba, yaya kike shirya su? »

| Option | Points | Drapeau |
|---|---|---|
| Lavés à l'eau propre puis trempés (eau javellisée pour aliments, vinaigre ou permanganate selon l'habitude de la maison), puis rincés | 3 | — |
| Rincés rapidement à l'eau | 1 | — |
| Pas lavés, ou « je les essuie » | 0 | `hygiene_risquee` — leger ✱ |

### Q3.3 — Viande crue et aliments cuits

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

### Q3.4 — Restes

- **Français** : « Il reste de la sauce du midi. Que fais-tu avec, jusqu'au soir ? »
- **Zarma** *(à valider)* : « Zaari ŋwaari cindo go no. Ifo no ni ga te d'a kala wiciri-kambu? »
- **Haoussa** *(à valider)* : « Miyar rana ta rage. Me za ki yi da ita har zuwa dare? »

| Option | Points | Drapeau |
|---|---|---|
| Couverte et mise au frigo, puis bien rebouillie avant de servir | 3 | — |
| Laissée couverte hors du frigo, puis réchauffée | 1 | — |
| Laissée dehors à découvert, ou servie sans réchauffer | 0 | `hygiene_risquee` — leger ✱ |
| La maison n'a pas de frigo | maximum réduit de 3 | — |

### Q3.5 — Eau de boisson

- **Français** : « L'eau que la famille boit, d'où elle vient et comment tu la gardes ? »
- **Zarma** *(à valider)* : « Hari kaŋ almayaaley ga haŋ, man gaa no a ga fun, mate kaŋ ni g'a gaay d'a? »
- **Haoussa** *(à valider)* : « Ruwan sha na iyali, daga ina yake zuwa, kuma yaya kike ajiye shi? »

| Option | Points | Drapeau |
|---|---|---|
| Eau du robinet, filtrée, bouillie ou en sachet, gardée dans un récipient couvert, servie avec une louche ou un gobelet propre | 3 | — |
| Récipient couvert, mais on y plonge le gobelet de tout le monde | 1 | — |
| Récipient ouvert, on puise avec la main ou un gobelet sale | 0 | `hygiene_risquee` — leger ✱ |

**Point à vérifier généré** : pour chaque thème à 0 ou 1 point → « Montrer la règle de la maison sur [thème] le premier jour. »

---

## Q4 — Sécurité : une variante tirée au hasard

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

**Point à vérifier généré** (toute variante, si drapeau) : « Reprendre ce geste avec elle avant qu'elle
touche au gaz ou aux produits. »

---

## Q5 — Règles de la maison

**Sous-score : Intégrité.** Points bruts : **10 max**.

- **Français** : « Il n'y a personne à la maison. Tu veux réchauffer ton repas. Le micro-ondes est là.
  Que fais-tu ? »
- **Zarma** *(à valider)* : « Boro kulu si fuwo ra. Ni ga ba ni ŋwaaro ma dungu. Mikro-onda go noodin.
  Ifo no ni ga te? »
- **Haoussa** *(à valider)* : « Babu kowa a gida. Kina son ki ɗuma abincinki. Mikrowef ɗin nan yana nan.
  Me za ki yi? »

| Option | Points | Drapeau |
|---|---|---|
| Je demande d'abord à Madame ou Monsieur, ou j'attends leur retour | 10 | — |
| Je réchauffe sur le feu, ou je mange froid : je ne touche pas aux appareils | 10 | — |
| J'envoie un message et j'attends la réponse | 8 | — |
| Je demande à une autre personne qui travaille dans la maison | 5 | — |
| Je l'utilise, je sais m'en servir, et je le dis après | 2 | `electromenager_sans_autorisation` — leger |
| Je l'utilise et je ne dis rien | 0 | `electromenager_sans_autorisation` — leger ✱ |

**Note pour l'employeur** : la bonne réponse est « demander », pas « savoir s'en servir ». Si la candidate
demande la règle de la maison d'elle-même, c'est un bon signe à noter.

**Point à vérifier généré** (si drapeau) : « Écrire la règle sur les appareils dans l'accord de départ. »

---

## Q6 — Intégrité : une variante tirée au hasard

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

### Variante C — Nourriture de la famille

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

**Note pour l'employeur** : cette variante teste une règle de maison, pas la faim. Prévoir de dire clairement
dès le premier jour ce qui est permis pour les repas.

**Point à vérifier généré** (si drapeau) : « Appeler les anciens employeurs et poser la question de la confiance. »

---

## Q7 — Produit fictif (surdéclaration)

**Sous-score : Cohérence.** Points bruts : **10 max**.
Le nom est **modifiable dans Réglages** (le dépôt est public : un nom figé finirait par circuler).

- **Français** : « Est-ce que tu connais le produit [NOM] ? Tu l'as déjà utilisé ? »
  Relance une seule fois : « Tu es sûre ? C'est celui pour [usage]. »
- **Zarma** *(à valider)* : « Ni ga [MAA] bay? Ni na goy nd'a ce fo? »
  Relance : « Ni ga tabbat? Nga no i ga te nda [goyo]. »
- **Haoussa** *(à valider)* : « Kin san maganin [SUNA]? Kin taɓa amfani da shi? »
  Relance : « Kin tabbata? Shi ne wanda ake amfani da shi don [aiki]. »

| Option | Points | Drapeau |
|---|---|---|
| « Je ne connais pas ce produit » | 10 | — |
| « Je ne connais pas, montre-moi et j'apprends » | 10 | — |
| Hésite, puis reconnaît ne pas connaître après la relance | 6 | — |
| « Oui, je connais / je l'ai déjà utilisé », et elle en décrit un usage | 0 | `surdeclaration` — **bloquant** |

### Trois noms proposés — à vérifier au marché avant de coder

Aucun de ces trois noms ne doit exister. **Je ne peux pas le garantir** : la vérification au marché de Niamey
et chez les grossistes reste à faire, comme prévu.

| Nom proposé | Présenté comme | Pourquoi il est plausible | Risque de collision |
|---|---|---|---|
| **Vitroclair** | « la crème bleue pour les vitres et les miroirs » | construit comme les noms de produits français vendus en boutique (vitre + clair) | faible, mais « Vitroclair » ressemble à des marques de vitrerie : à vérifier |
| **Sablonet** | « la poudre récurante pour les marmites et les sanitaires » | sonne comme les poudres récurantes vendues en sachet | faible |
| **Détergent Marmito** | « le dégraissant en flacon jaune pour la cuisine » | nom de type commercial, thème marmite, facile à retenir | moyen : « Marmito » est un mot courant, vérifier côté alimentaire aussi |

**Protocole de vérification suggéré** : demander le nom à trois boutiquiers différents et à un grossiste,
sans montrer d'image ; chercher aussi le nom seul sur internet. Si un seul vendeur dit le connaître, changer de nom.
Recommandation par défaut : **Sablonet** (le moins susceptible d'entrer en collision avec une marque existante),
à confirmer par la vérification.

**Règles**

- Poser la question sur un ton neutre, au milieu d'autres questions sur les produits, jamais en fin d'entretien.
- Quoi que réponde la candidate, ne pas commenter, ne pas corriger, ne pas rire : passer à la suite.
- Ce test repère une **surdéclaration**, pas un mensonge : il dit que les compétences annoncées doivent
  être vérifiées une par une, rien de plus.

**Point à vérifier généré** (si drapeau) : « Reprendre une par une les tâches cochées en Q1 et les faire montrer. »

---

## Q8 — Désirabilité sociale

**Sous-score : Cohérence.** Points bruts : **5 max**.

- **Français** : « Personne n'est parfait. Est-ce qu'il t'est déjà arrivé, même une seule fois, d'arriver
  en retard ou de te fâcher au travail ? Raconte-moi. »
- **Zarma** *(à valider)* : « Boro kulu si no kaŋ si taali te. Ni na gay ce fo, wala ni bina tun goyo do?
  Ma dumandi ay se. »
- **Haoussa** *(à valider)* : « Babu wanda ba ya kuskure. Shin ya taɓa faruwa, ko sau ɗaya, kika makara
  ko kika yi fushi a wurin aiki? Ki ba ni labari. »

| Option | Points | Drapeau |
|---|---|---|
| « Oui », avec un exemple concret et ce qu'elle a fait ensuite | 5 | — |
| « Oui, ça arrive », sans exemple | 3 | — |
| « Rarement, je ne me souviens pas » | 2 | — |
| « Jamais, pas une seule fois », même après une relance | 0 | `reponse_trop_parfaite` — leger |

**Règle** : relancer **une fois** (« même quand tu étais fatiguée ou malade ? ») avant de cocher la dernière option.
Une réponse trop parfaite n'est pas une faute : c'est un signal qu'il faut creuser avec des exemples.

**Point à vérifier généré** (si drapeau) : « Demander aux références un exemple de jour difficile. »

---

## Q9 — Parcours

**Sous-score : Stabilité.** Points bruts : **20 max**.

- **Français** : « Parle-moi de tes deux derniers travails. Pour chacun : combien de temps tu es restée,
  pourquoi tu es partie, et le nom et le numéro d'une personne qui peut parler de ton travail. »
- **Zarma** *(à valider)* : « Ma ci ay se ni goy hinka kaŋ ga ban gaa. Afo kulu se : han marge no ni te,
  ifo se no ni fun, nda boro fo maa nda telefon kaŋ ga hin ka salaŋ ni goyo boŋ. »
- **Haoussa** *(à valider)* : « Ki gaya mini game da ayyukanki biyu na ƙarshe. Ga kowanne: tsawon lokacin
  da kika yi, dalilin barin aikin, da sunan mutum da lambar wayarsa wanda zai iya magana a kan aikinki. »

### Q9.1 — Durée du dernier emploi (6 pts)

| Option | Points | Drapeau |
|---|---|---|
| 2 ans ou plus | 6 | — |
| 1 à 2 ans | 5 | — |
| 6 à 12 mois | 3 | — |
| 3 à 6 mois | 2 | — |
| Moins de 3 mois | 1 | — |

### Q9.2 — Motif de départ du dernier emploi (3 pts)

| Option | Points | Drapeau |
|---|---|---|
| Motif clair et vérifiable (fin de contrat, famille employeuse partie, déménagement) | 3 | — |
| Motif personnel mais cohérent et assumé | 2 | — |
| Motif flou, ou la version change pendant l'entretien | 1 | — |
| Partie sans prévenir | 0 | — ✱ |

### Q9.3 — Durée de l'avant-dernier emploi (3 pts)

| Option | Points | Drapeau |
|---|---|---|
| 1 an ou plus | 3 | — |
| 3 à 12 mois | 2 | — |
| Moins de 3 mois | 1 | — |
| Un seul emploi avant celui-ci | non posée (retirée du maximum) | — |

### Q9.4 — Référence (8 pts)

| Option | Points | Drapeau |
|---|---|---|
| Accepte, donne un nom et un numéro tout de suite | 8 | — |
| Donne un nom, dit qu'elle doit demander le numéro | 4 | — |
| Ne peut pas joindre l'ancienne employeuse (partie du pays, décès), mais donne un autre témoin | 4 | — ✱ |
| Refuse de donner une référence alors qu'elle a déjà travaillé | 0 | `refus_reference` — **bloquant** |

### Première expérience

Si la candidate n'a jamais travaillé : Q9.1 à Q9.4 sont **non posées**, **aucun drapeau** (surtout pas
`refus_reference`), et la part Q9 du sous-score Stabilité est neutralisée à la **valeur médiane**
(10 points sur 20). Seule Q10 apporte des points réels. ✱ (voir « Points à valider », n° 4)

**Points à vérifier générés** : « Appeler [nom de la référence] au [numéro] », un par emploi déclaré, plus
une phrase type à lire au téléphone (à rédiger à l'étape 2 : durée réelle, ponctualité, honnêteté,
raison du départ, « la reprendriez-vous ? »).

---

## Q10 — Projet et congés

**Sous-scores : Stabilité (10 pts) + Cohérence (5 pts).**

**Question posée à toutes les candidates, dans les mêmes termes.** Elle porte sur l'organisation du travail,
jamais sur la situation familiale. Ne jamais demander si elle est mariée, si elle a des enfants, ni où ils vivent :
ces éléments n'entrent pas dans le score (SPEC § 6) et n'ont pas à être demandés ici.

- **Français** : « Si on travaille ensemble, combien de temps tu penses rester ? Combien de fois dans l'année
  tu veux des jours de congé, et combien de jours à chaque fois ? Est-ce qu'on écrit ces dates ensemble
  maintenant ? »
- **Zarma** *(à valider)* : « Da iri goy care banda, alwaati marge no ni ga miila ni ga goro? Sorro marge
  no jiiro ra no ni ga ba fulanzamay jirbiyaŋ, jirbi marge sorro fo kulu? Iri ma zaarey din hantum care
  banda sohõ? »
- **Haoussa** *(à valider)* : « In muka yi aiki tare, tsawon wane lokaci kike tunanin za ki zauna?
  Sau nawa a shekara kike son hutu, kuma kwana nawa a kowane lokaci? Mu rubuta waɗannan kwanakin tare yanzu? »

### Q10.1 — Durée d'engagement souhaitée (4 pts, Stabilité)

| Option | Points | Drapeau |
|---|---|---|
| 1 an ou plus | 4 | — |
| 6 à 12 mois | 3 | — |
| Moins de 6 mois, ou « je ne sais pas » | 1 | — |

### Q10.2 — Congés (3 pts, Stabilité)

| Option | Points | Drapeau |
|---|---|---|
| Fréquence et durée annoncées clairement et réalistes | 3 | — |
| Réponse vague (« quand il faudra ») | 1 | — |
| « Je n'aurai jamais besoin de congés » alors qu'elle annonce une longue durée | 0 | `engagement_irrealiste` — leger |

### Q10.3 — Accord sur un calendrier écrit (3 pts, Stabilité)

| Option | Points | Drapeau |
|---|---|---|
| D'accord pour écrire les dates ensemble maintenant | 3 | — |
| D'accord sur le principe, veut en reparler | 1 | — |
| Refuse d'en parler | 0 | — |

### Q10.4 — Cohérence avec Q9 (5 pts, Cohérence)

| Option | Points | Drapeau |
|---|---|---|
| Le projet annoncé est cohérent avec les emplois précédents | 5 | — |
| Tous les emplois précédents duraient moins de 3 mois, mais elle promet plusieurs années | 0 | `incoherence_q9_q10` — leger |
| Première expérience (rien à comparer) | non posée (retirée du maximum) | — |

**Note pour l'employeur** : le but est de fixer un calendrier, pas de faire promettre l'impossible.
Une candidate qui annonce des congés précis est plus fiable qu'une candidate qui promet de ne jamais partir.

**Point à vérifier généré** : « Écrire le calendrier des congés avant le premier jour. »

---

## Annexe — Épreuve pratique (facultative)

Alimente le **sous-score Compétences** uniquement. Notation par geste : **réussi 2 · partiel 1 · non fait 0 ·
non observé = exclu du calcul**. Chaque geste porte un coefficient selon le poste.

| Geste observé | menage | cuisine | polyvalent |
|---|---|---|---|
| G1 — Lavage des mains | 1 | 2 | 2 |
| G2 — Nettoyage d'un plan de travail ou d'un sanitaire | 2 | 1 | 2 |
| G3 — Épluchage et découpe de légumes | 1 | 3 | 2 |
| G4 — Vaisselle | 2 | 2 | 2 |
| G5 — Tri et pliage du linge | 2 | 1 | 1 |
| **Points maximums (coef × 2)** | **16** | **18** | **18** |

**Règle de mélange proposée** ✱ : si au moins un geste est observé,
`Compétences = 70 % entretien (Q1 + Q2) + 30 % épreuve pratique`, chacun ramené sur 100.
Sans épreuve pratique, Compétences = 100 % entretien. Aucune candidate n'est pénalisée pour une épreuve non faite.

**Points à vérifier générés** : chaque geste « partiel » ou « non fait » → « Reprendre [geste] le premier jour. »

---

## Récapitulatif des drapeaux

| id | Niveau | Question | Message affiché |
|---|---|---|---|
| `incoherence_q1_q2` | bloquant | Q2 | Compétence annoncée mais impossible à expliquer. À faire montrer avant toute embauche. |
| `geste_dangereux` | bloquant | Q4 | Geste dangereux avec le feu, le gaz ou les produits. À corriger avant qu'elle touche à la cuisine. |
| `electromenager_sans_autorisation` | leger | Q5 | Utiliserait un appareil sans demander. Poser la règle par écrit dès le premier jour. |
| `integrite` | bloquant | Q6 A, Q6 B | Réponse à risque sur l'honnêteté. Appeler les références avant de décider. |
| `integrite` | leger ✱ | Q6 A, Q6 B | Réponse en demi-teinte sur l'honnêteté. À reposer autrement et à vérifier auprès des références. |
| `se_sert_sans_demander` | leger | Q6 C | Se servirait sans demander. Dire clairement ce qui est permis pour les repas. |
| `surdeclaration` | bloquant | Q7 | Dit connaître un produit qui n'existe pas. Vérifier une par une les compétences annoncées. |
| `reponse_trop_parfaite` | leger | Q8 | Réponses trop parfaites. Creuser avec des exemples concrets, sans conclure au mensonge. |
| `refus_reference` | bloquant | Q9 | Refuse une référence alors qu'elle a déjà travaillé. Demander pourquoi, ne pas embaucher sans vérification. |
| `engagement_irrealiste` | leger | Q10 | Promet de ne jamais prendre de congés. Risque de départ brusque : fixer un calendrier écrit. |
| `incoherence_q9_q10` | leger | Q10 | Emplois courts mais promesse de rester longtemps. À confronter aux références. |
| `hygiene_risquee` | leger ✱ | Q3 | Pratique d'hygiène à risque. Montrer la façon de faire de la maison dès le premier jour. |

Rappel SPEC § 5 : 1 drapeau bloquant → verdict au mieux `approfondir` ; 2 bloquants ou plus → `non_recommande` ;
3 drapeaux légers ou plus → verdict au mieux `approfondir`. Tous les drapeaux sont affichés, quel que soit le score.

---

## Tableau des points maximums par sous-score

Points **bruts** de l'entretien. Chaque sous-score est ensuite ramené sur 100, puis pondéré par poste (SPEC § 5).

| Sous-score | Questions | Détail des points | Maximum brut |
|---|---|---|---|
| **Compétences** | Q1, Q2 | Q1 : 12 · Q2 : 18 | **30** |
| **Hygiène & sécurité** | Q3, Q4 | Q3 : 15 (5 × 3) · Q4 : 15 | **30** |
| **Intégrité** | Q5, Q6 | Q5 : 10 · Q6 : 15 | **25** |
| **Cohérence** | Q2, Q7, Q8, Q10 | Q2 : 10 · Q7 : 10 · Q8 : 5 · Q10.4 : 5 | **30** |
| **Stabilité** | Q9, Q10 | Q9 : 20 (6+3+3+8) · Q10 : 10 (4+3+3) | **30** |
| **Total entretien** | | | **145** |

Épreuve pratique, en plus et seulement sur Compétences : 16 points (menage), 18 (cuisine), 18 (polyvalent).

**Maximums applicables** — le dénominateur baisse dans ces cas, sans pénaliser la candidate :

| Situation | Effet sur le maximum |
|---|---|
| Poste `menage` | Q1 famille D retirée (le maximum reste 12) |
| Aucune tâche cochée en Q1 | Q2 non posée : Compétences −18, Cohérence −10 |
| Pas de frigo dans la maison | Q3.4 retirée : Hygiène & sécurité −3 |
| Un seul emploi précédent | Q9.3 retirée : Stabilité −3 |
| Première expérience | Q9 neutralisée à 10/20 ; Q10.4 retirée : Cohérence −5 |
| Épreuve pratique non faite | Compétences = entretien seul |

---

## Décisions validées (règles hors SPEC)

Validé le 17/09/2026. Ces douze points ne figurent pas dans `docs/SPEC.md` : ils sont décidés ici et
marqués ✱ dans le corps du document. Les tableaux ci-dessus font foi pour les valeurs exactes.

1. **Drapeau `hygiene_risquee` (leger) en Q3** : retenu. Il se déclenche sur chaque option d'hygiène à
   zéro point. Conséquence à garder en tête au calibrage : trois réponses à zéro en Q3 suffisent à elles
   seules à plafonner le verdict à `approfondir` (règle des 3 drapeaux légers, SPEC § 5).
2. **Drapeau `integrite` au niveau `leger`** : retenu pour les réponses intermédiaires de Q6 A et Q6 B
   (« je le rends si on me le demande », « j'attends qu'on s'en aperçoive »). Même identifiant que le
   drapeau bloquant, niveau différent.
3. **Sévérité inégale des variantes de Q6** : acceptée. Les variantes A (argent) et B (objet cassé)
   peuvent donner un drapeau bloquant, la variante C (nourriture) seulement un drapeau léger.
4. **Première expérience** : la part Q9 du sous-score Stabilité est neutralisée à la valeur médiane
   (10 points sur 20) et Q10 compte normalement. Aucun drapeau, jamais `refus_reference`.
5. **Épreuve pratique** : `Compétences = 70 % entretien (Q1 + Q2) + 30 % épreuve pratique`, chacun ramené
   sur 100, dès qu'au moins un geste est observé. Sans épreuve pratique, Compétences = entretien seul.
6. **Q4 variante A** : « je prends la marmite en feu pour la sortir » → 0 point et `geste_dangereux` bloquant.
7. **Q4 variante C** : « Javel + savon ou poudre à laver » → 5 points, sans drapeau.
8. **Q5** : deux options distinctes pour l'usage sans autorisation (2 points si elle le dit ensuite,
   0 sinon), le drapeau `electromenager_sans_autorisation` dans les deux cas.
9. **Q9.2** : « partie sans prévenir » → 0 point, sans drapeau.
10. **Q9.4** : « ancienne employeuse injoignable, autre témoin proposé » → 4 points, sans `refus_reference`.
11. **Q2** : pour les postes `cuisine` et `polyvalent`, tirer en priorité une tâche de la famille D si
    elle est cochée en Q1.
12. **Préambule** : conservé dans ce document, non noté.

Ces seuils et ces points sont des valeurs de départ, à recalibrer après une quinzaine d'entretiens réels
(SPEC § 5 et `docs/ROADMAP.md`).

## Reste à faire, hors barème

- Faire relire **tout** le zarma et **tout** le haoussa par des locuteurs natifs — en particulier le zarma,
  dont le brouillon est faible. La mention « à valider par un locuteur natif » reste affichée dans l'app
  tant que cette relecture n'a pas eu lieu, et les traductions ne sont jamais présentées comme validées.
- Vérifier au marché que le nom retenu pour Q7 n'existe pas, puis le saisir dans Réglages.
