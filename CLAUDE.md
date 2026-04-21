# Comptines v2

PWA mobile-first de comptines pour la femme de Vincent et leur fille (née ~oct 2025).
Stack : HTML / CSS / JS vanilla, aucun build tool. Les comptines sont dans le tableau `SONGS` de `js/app.js`, les MP3 dans `assets/audio/`.

## Chaîne YouTube recommandée

**Andreeas Music Box** — qualité constante, voix douce, pas d'intro trop longue. Chercher `"Andreeas Music Box" [nom comptine]`.

## À afficher en début de chaque session

Rappeler à Vincent :
1. La liste des comptines à ajouter ci-dessous
2. La chaîne YouTube recommandée : **Andreeas Music Box**
3. Le système d'offset : chaque chanson peut avoir `offset: X` (secondes) pour skipper les intros

## Comptines restantes à ajouter

MP3 à trouver sur YouTube (priorité Andreeas Music Box), copier dans `assets/audio/comptine-XX.mp3`, ajouter dans `SONGS` de `js/app.js` et dans `PRECACHE` de `sw.js`.

- Bateau sur l'eau ⭐⭐
- Dans la ferme de Mathurin (Old McDonald) ⭐⭐
- Pirouette cacahuète
- Ah les crocodiles
- Petit escargot
- Promenons-nous dans les bois
- Savez-vous planter les choux
- Un deux trois nous irons aux bois
- Il court il court le furet
- Mon âne
- Tourne tourne petit moulin

## Déjà ajoutées

1–19 (classiques), 20 (alphabet ABCDEFG), 21 (Dodo l'enfant do, offset 5s), 22 (Tape tape petites mains, offset 6s), 23 (Brille brille petite étoile), 24 (Plic ploc j'écoute la pluie, offset 7s), 25 (A comme Avion, offset 3s)
