#!/usr/bin/env node
// Auto-test du barème de index.html, sans dépendance.
// Usage : node tests/run-selftest.mjs
// Contrat : docs/SPEC.md § 8.

import { readFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import vm from 'node:vm';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const file = join(root, 'index.html');

const SOUS_SCORES = ['competences', 'hygieneSecurite', 'integrite', 'coherence', 'stabilite'];
const POSTES = ['menage', 'cuisine', 'polyvalent'];
const VERDICTS = ['essai', 'approfondir', 'non_recommande'];
const CHAMPS_INTERDITS = ['fiche', 'situationFamiliale', 'nationalite', 'ethnie', 'religion', 'langueEntretien'];

let echecs = 0;
const ok = (msg) => console.log(`  ✓ ${msg}`);
const ko = (msg) => { echecs++; console.log(`  ✗ ${msg}`); };
const stop = (msg) => { console.error(`✗ ${msg}`); process.exit(1); };

if (!existsSync(file)) stop('index.html introuvable. Construis d\'abord l\'app (voir docs/PROMPTS.md, étape 2).');
const html = readFileSync(file, 'utf8');

function bloc(nom) {
  const re = new RegExp(`//\\s*@@${nom}-START([\\s\\S]*?)//\\s*@@${nom}-END`);
  const m = html.match(re);
  if (!m) stop(`Bloc // @@${nom}-START … // @@${nom}-END manquant dans index.html`);
  return m[1];
}

const scoring = bloc('SCORING');
const tests = bloc('TESTS');

// 1. Pureté et équité du bloc SCORING (analyse du texte)
console.log('\nBloc SCORING');
for (const mot of ['window', 'document', 'localStorage', 'sessionStorage']) {
  if (new RegExp(`\\b${mot}\\b`).test(scoring)) ko(`utilise « ${mot} » (le barème doit rester pur)`);
}
for (const champ of CHAMPS_INTERDITS) {
  if (new RegExp(`\\b${champ}\\b`).test(scoring)) ko(`mentionne le champ interdit « ${champ} »`);
}
if (echecs === 0) ok('pur et sans champ interdit');

// 2. Évaluation hors navigateur
let api;
try {
  api = vm.runInNewContext(
    `${scoring}\n${tests}\n;({ CONFIG, computeScore, TEST_CASES })`,
    { console, Math, JSON },
    { filename: 'index.html#scoring' }
  );
} catch (e) {
  stop(`Erreur à l'évaluation des blocs : ${e.message}`);
}
const { CONFIG, computeScore, TEST_CASES } = api;
if (typeof computeScore !== 'function') stop('computeScore n\'est pas une fonction');
if (!Array.isArray(TEST_CASES)) stop('TEST_CASES doit être un tableau');

// 3. Pondérations
console.log('\nCONFIG.ponderations');
for (const poste of POSTES) {
  const p = CONFIG?.ponderations?.[poste];
  if (!p) { ko(`poste « ${poste} » manquant`); continue; }
  const manquants = SOUS_SCORES.filter((k) => typeof p[k] !== 'number');
  if (manquants.length) { ko(`${poste} : clés manquantes ${manquants.join(', ')}`); continue; }
  const somme = SOUS_SCORES.reduce((s, k) => s + p[k], 0);
  somme === 100 ? ok(`${poste} = 100`) : ko(`${poste} totalise ${somme} au lieu de 100`);
}

// 4. Forme du résultat
function verifierForme(r, nom) {
  const err = [];
  if (!Number.isInteger(r?.total) || r.total < 0 || r.total > 100) err.push('total hors [0, 100] ou non entier');
  for (const k of SOUS_SCORES) {
    const v = r?.sousScores?.[k];
    if (typeof v !== 'number' || v < 0 || v > 100) err.push(`sousScores.${k} invalide`);
  }
  if (!Array.isArray(r?.drapeaux)) err.push('drapeaux doit être un tableau');
  else for (const d of r.drapeaux) {
    if (!d.id || !['leger', 'bloquant'].includes(d.niveau) || !d.message) err.push(`drapeau mal formé : ${JSON.stringify(d)}`);
  }
  if (!VERDICTS.includes(r?.verdict)) err.push(`verdict inconnu : ${r?.verdict}`);
  if (!Array.isArray(r?.pointsAVerifier)) err.push('pointsAVerifier doit être un tableau');
  if (err.length) ko(`${nom} — forme : ${err.join(' ; ')}`);
  return err.length === 0;
}

// 5. Cas de test
console.log(`\nTEST_CASES (${TEST_CASES.length})`);
if (TEST_CASES.length < 8) ko(`au moins 8 cas attendus (SPEC § 8), trouvé ${TEST_CASES.length}`);
const verdictsAttendus = new Set(TEST_CASES.map((t) => t.expect?.verdict).filter(Boolean));
for (const v of VERDICTS) if (!verdictsAttendus.has(v)) ko(`aucun cas n'attend le verdict « ${v} »`);

const resume = (r) => JSON.stringify({
  total: r.total, sousScores: r.sousScores, verdict: r.verdict,
  drapeaux: r.drapeaux.map((d) => `${d.niveau}:${d.id}`).sort(),
});
const FAUSSES_FICHES = [
  { situationFamiliale: 'mariée, mari au village', nationalite: 'béninoise', langueEntretien: 'zarma', religion: 'A', ethnie: 'X' },
  { situationFamiliale: 'célibataire', nationalite: 'togolaise', langueEntretien: 'haoussa', religion: 'B', ethnie: 'Y' },
];

for (const tc of TEST_CASES) {
  let r;
  try { r = computeScore(structuredClone(tc.answers), CONFIG); }
  catch (e) { ko(`${tc.name} — exception : ${e.message}`); continue; }
  if (!verifierForme(r, tc.name)) continue;

  const e = tc.expect || {};
  const err = [];
  const ids = r.drapeaux.map((d) => d.id);
  if (e.verdict && r.verdict !== e.verdict) err.push(`verdict « ${r.verdict} » au lieu de « ${e.verdict} »`);
  if (e.minTotal != null && r.total < e.minTotal) err.push(`total ${r.total} < ${e.minTotal}`);
  if (e.maxTotal != null && r.total > e.maxTotal) err.push(`total ${r.total} > ${e.maxTotal}`);
  for (const id of e.drapeauxInclus || []) if (!ids.includes(id)) err.push(`drapeau manquant : ${id}`);
  for (const id of e.drapeauxExclus || []) if (ids.includes(id)) err.push(`drapeau inattendu : ${id}`);

  // Règles de plafonnement (SPEC § 5)
  const bloquants = r.drapeaux.filter((d) => d.niveau === 'bloquant').length;
  const legers = r.drapeaux.filter((d) => d.niveau === 'leger').length;
  if (bloquants >= 2 && r.verdict !== 'non_recommande') err.push(`${bloquants} drapeaux bloquants mais verdict « ${r.verdict} »`);
  if ((bloquants === 1 || legers >= 3) && r.verdict === 'essai') err.push('verdict « essai » malgré un plafonnement');

  // Équité : injecter une fausse fiche ne doit rien changer
  const reference = resume(r);
  for (const fiche of FAUSSES_FICHES) {
    const a = { ...structuredClone(tc.answers), fiche, ...fiche };
    if (resume(computeScore(a, CONFIG)) !== reference) { err.push('le résultat change avec la fiche candidate (équité)'); break; }
  }

  err.length ? ko(`${tc.name} — ${err.join(' ; ')}`) : ok(`${tc.name} → ${r.verdict} (${r.total}/100)`);
}

console.log(echecs ? `\n✗ ${echecs} échec(s)\n` : '\n✓ Tout est vert\n');
process.exit(echecs ? 1 : 0);
