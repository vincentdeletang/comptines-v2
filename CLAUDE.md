# Comptines v2

PWA mobile-first de comptines pour la femme de Vincent et leur fille (née ~oct 2025).
Stack : HTML / CSS / JS vanilla, aucun build tool. Les comptines sont dans le tableau `SONGS` de `js/app.js`, les MP3 dans `assets/audio/`.

## Chaîne YouTube recommandée

**Andreeas Music Box** — qualité constante, voix douce, pas d'intro trop longue. Chercher `"Andreeas Music Box" [nom comptine]`.

**Règle Andreeas** : tous les MP3 d'Andreeas Music Box ont la même structure → utiliser **`offset: 3`** et **`endOffset: 2`** par défaut, sans repasser par Whisper/silencedetect pour ces deux valeurs (juste pour les paroles). Ne pas redemander à Vincent les offsets pour Andreeas.

## À afficher en début de chaque session

Rappeler à Vincent :
1. La liste des comptines à ajouter ci-dessous
2. La chaîne YouTube recommandée : **Andreeas Music Box**
3. Le système d'offset : chaque chanson peut avoir `offset: X` (secondes) pour skipper les intros, et `endOffset: X` pour couper la fin

## Pipeline d'ajout d'une comptine (workflow)

Quand un MP3 est dans `~/Downloads/` :
1. **Copier** vers `assets/audio/comptine-XX.mp3`
2. **Transcrire** les paroles avec Whisper local (déjà installé) :
   `whisper "<path>" --language French --model small --output_format txt --output_dir /tmp/whisper-out`
   → Whisper hallucine parfois sur les silences/outros (ex: "Sous-titres par Amara.org") — ignorer ces lignes. Corriger aussi les fautes de français évidentes (genre, homophones).
3. **Détecter le silence de fin** pour caler `endOffset` :
   `ffmpeg -i <path> -af "silencedetect=n=-35dB:d=1.5" -f null - 2>&1 | grep silence_`
   → `endOffset = duration - silence_start`
4. **Détecter l'intro instrumentale** : si Whisper place le 1er segment à `00:00` → `offset: 0`. Sinon utiliser `--word_timestamps` ou écouter.
5. Ajouter dans `SONGS` (`js/app.js`) **avant** comptine-25 (ordre = + récent en haut), dans `PRECACHE` (`sw.js`), bumper `CACHE` et la liste "Déjà ajoutées" ci-dessous.

## Comptines restantes à ajouter

MP3 à trouver sur YouTube (priorité Andreeas Music Box), copier dans `assets/audio/comptine-XX.mp3`, ajouter dans `SONGS` de `js/app.js` et dans `PRECACHE` de `sw.js`.

- Petit escargot
- Promenons-nous dans les bois
- Savez-vous planter les choux
- Il court il court le furet
- Mon âne
- Tourne tourne petit moulin

## Déjà ajoutées

1–19 (classiques), 20 (alphabet ABCDEFG), 21 (Dodo l'enfant do, offset 5s), 22 (Tape tape petites mains, offset 6s), 23 (Brille brille petite étoile), 24 (Plic ploc j'écoute la pluie, offset 7s), 25 (A comme Avion, offset 3s), 26 (La fourmi m'a piqué la main, endOffset 5s), 27 (Un éléphant qui se balançait, offset 3s, endOffset 27s), 28 (Ah ! Les crocodiles, endOffset 2s), 29 (Mon petit lapin, offset 1s, endOffset 4s), 30 (Dans sa maison un grand cerf, endOffset 2s), 31 (Pirouette, cacahuète, endOffset 2s), 32 (Dans la ferme à Mathurin, endOffset 16s), 33 (La famille tortue, offset 3s, endOffset 2s), 34 (La chanson du printemps, offset 3s, endOffset 2s), 35 (Bateau sur l'eau, offset 1s, endOffset 5s), 36 (Un deux trois nous irons au bois, offset 3s, endOffset 2s), 37 (C'est en haut c'est en bas, offset 3s, endOffset 2s), 38 (Les petits flocons, Andreeas), 39 (La chanson des légumes, Andreeas)
