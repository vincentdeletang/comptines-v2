/* =========================================================
   Données
   ========================================================= */

const SONGS = [
  {
    id: 'comptine-1',
    title: 'Il est né le divin enfant',
    emoji: '👼',
    audio: 'assets/audio/comptine-1.mp3',
    offset: 0,
    lyrics: `Il est né le divin enfant,
Jouez hautbois, résonnez musettes !
Il est né le divin enfant,
Chantons tous son avènement !

Depuis plus de quatre mille ans,
Nous le promettaient les prophètes.
Depuis plus de quatre mille ans,
Nous attendions cet heureux temps.

Ah ! Qu'il est beau, qu'il est charmant !
Ah ! Que ses grâces sont parfaites !
Ah ! Qu'il est beau, qu'il est charmant !
Qu'il est doux ce divin enfant !

Une étable est son logement,
Un peu de paille est sa couchette.
Une étable est son logement,
Pour un Dieu quel abaissement !`,
  },
  {
    id: 'comptine-2',
    title: 'Au clair de la lune',
    emoji: '🌙',
    audio: 'assets/audio/comptine-2.mp3',
    lyrics: `Au clair de la lune,
Mon ami Pierrot,
Prête-moi ta plume
Pour écrire un mot.

Ma chandelle est morte,
Je n'ai plus de feu.
Ouvre-moi ta porte
Pour l'amour de Dieu.

Au clair de la lune,
Pierrot répondit :
« Je n'ai pas de plume,
Je suis dans mon lit.

Va chez la voisine,
Je crois qu'elle y est,
Car dans sa cuisine
On bat le briquet. »`,
  },
  {
    id: 'comptine-3',
    title: 'Une souris verte',
    emoji: '🐭',
    audio: 'assets/audio/comptine-3.mp3',
    lyrics: `Une souris verte
Qui courait dans l'herbe.
Je l'attrape par la queue,
Je la montre à ces messieurs.

Ces messieurs me disent :
Trempez-la dans l'huile,
Trempez-la dans l'eau,
Ça fera un escargot tout chaud.

Je la mets dans mon chapeau,
Elle me dit : « Il fait trop chaud ! »
Je la mets dans mon tiroir,
Elle me dit : « Il fait trop noir ! »

Je la mets dans ma culotte,
Elle me fait trois petites crottes.`,
  },
  {
    id: 'comptine-4',
    title: 'Frère Jacques',
    emoji: '🔔',
    audio: 'assets/audio/comptine-4.mp3',
    lyrics: `Frère Jacques, Frère Jacques,
Dormez-vous ? Dormez-vous ?
Sonnez les matines ! Sonnez les matines !
Ding, dang, dong. Ding, dang, dong.`,
  },
  {
    id: 'comptine-5',
    title: "Fais dodo, Colas mon p'tit frère",
    emoji: '😴',
    audio: 'assets/audio/comptine-5.mp3',
    lyrics: `Fais dodo, Colas mon p'tit frère,
Fais dodo, t'auras du lolo.
Maman est en haut
Qui fait du gâteau,
Papa est en bas
Qui fait du chocolat.

Fais dodo, Colas mon p'tit frère,
Fais dodo, t'auras du lolo.`,
  },
  {
    id: 'comptine-6',
    title: 'Alouette, gentille alouette',
    emoji: '🐦',
    audio: 'assets/audio/comptine-6.mp3',
    lyrics: `Alouette, gentille alouette,
Alouette, je te plumerai.

Je te plumerai la tête,
Je te plumerai la tête,
Et la tête ! Et la tête !
Alouette ! Alouette !
O-o-o-oh !

Alouette, gentille alouette,
Alouette, je te plumerai.

Je te plumerai le bec,
Et le bec ! Et la tête !
Alouette ! Alouette !
O-o-o-oh !`,
  },
  {
    id: 'comptine-7',
    title: 'Il était un petit navire',
    emoji: '⛵',
    audio: 'assets/audio/comptine-7.mp3',
    lyrics: `Il était un petit navire,
Qui n'avait ja-ja-jamais navigué.
Ohé ! Ohé !

Il partit pour un long voyage,
Sur la mer Mé-Mé-Méditerranée.
Ohé ! Ohé !

Au bout de cinq à six semaines,
Les vivres vin-vin-vinrent à manquer.
Ohé ! Ohé !

On tira à la courte paille,
Pour savoir qui-qui-qui serait mangé.
Ohé ! Ohé !

Au même instant un grand miracle,
Pour l'enfant fut-fut-fut réalisé.
Ohé ! Ohé !`,
  },
  {
    id: 'comptine-8',
    title: "L'araignée Gipsy",
    emoji: '🕷️',
    audio: 'assets/audio/comptine-8.mp3',
    lyrics: `L'araignée Gipsy
Monte à la gouttière.
Tiens, voilà la pluie,
Gipsy tombe par terre.

Mais le soleil a chassé la pluie !

L'araignée Gipsy
Remonte à la gouttière...`,
  },
  {
    id: 'comptine-9',
    title: "Sur le pont d'Avignon",
    emoji: '🌉',
    audio: 'assets/audio/comptine-9.mp3',
    lyrics: `Sur le pont d'Avignon,
On y danse, on y danse,
Sur le pont d'Avignon,
On y danse tous en rond.

Les messieurs font comme ça,
Et puis encore comme ça.

Les dames font comme ça,
Et puis encore comme ça.`,
  },
  {
    id: 'comptine-10',
    title: 'Douce nuit (Sainte nuit)',
    emoji: '🌟',
    audio: 'assets/audio/comptine-10.mp3',
    lyrics: `Douce nuit, sainte nuit !
Dans les cieux, l'astre luit.
Le mystère annoncé s'accomplit.
Cet enfant sur la paille endormi,
C'est le fils de Marie,
C'est le fils de Dieu.

Douce nuit, sainte nuit !
Bergers, quittez vos abris !
Un ange vous guide vers l'humble lieu
Où Jésus, Roi des rois, Fils de Dieu,
Ouvre ses yeux sur nous,
Ouvre ses yeux divins.`,
  },
  {
    id: 'comptine-11',
    title: 'Ainsi font, font, font',
    emoji: '👐',
    audio: 'assets/audio/comptine-11.mp3',
    lyrics: `Ainsi font, font, font,
Les petites marionnettes,
Ainsi font, font, font,
Trois p'tits tours et puis s'en vont.

Mais elles reviendront,
Les petites marionnettes,
Mais elles reviendront,
Quand les enfants dormiront.`,
  },
  {
    id: 'comptine-12',
    title: 'Une poule sur un mur',
    emoji: '🐔',
    audio: 'assets/audio/comptine-12.mp3',
    lyrics: `Une poule sur un mur,
Qui picote du pain dur,
Picoti, picota,
Lève la queue et puis s'en va.`,
  },
  {
    id: 'comptine-13',
    title: 'Mon beau sapin',
    emoji: '🎄',
    audio: 'assets/audio/comptine-13.mp3',
    lyrics: `Mon beau sapin, roi des forêts,
Que j'aime ta verdure !
Quand par l'hiver bois et guérets
Sont dépouillés de leurs attraits,
Mon beau sapin, roi des forêts,
Tu gardes ta parure.

Toi que Noël planta chez nous
Au saint anniversaire,
Joli sapin, comme eux toujours
Tu nous réjouis en ce jour,
Toi que Noël planta chez nous
Par les mains de mon père.`,
  },
  {
    id: 'comptine-14',
    title: 'Vive le vent',
    emoji: '❄️',
    audio: 'assets/audio/comptine-14.mp3',
    lyrics: `Vive le vent, vive le vent,
Vive le vent d'hiver
Qui s'en va sifflant, soufflant
Dans les grands sapins verts, oh !

Vive le vent, vive le vent,
Vive le vent d'hiver
Bientôt Noël va sonner
Ding ding dong, ding ding dong !`,
  },
  {
    id: 'comptine-15',
    title: "Pomme de reinette et pomme d'api",
    emoji: '🍎',
    audio: 'assets/audio/comptine-15.mp3',
    lyrics: `Pomme de reinette et pomme d'api,
Tapis, tapis rouge.
Pomme de reinette et pomme d'api,
Tapis, tapis gris.

Cache ton poing derrière ton dos,
Ou bien je te donne un coup d'martinet !`,
  },
  {
    id: 'comptine-16',
    title: 'Meunier tu dors',
    emoji: '🌬️',
    audio: 'assets/audio/comptine-16.mp3',
    lyrics: `Meunier tu dors,
Ton moulin, ton moulin va trop vite.
Meunier tu dors,
Ton moulin, ton moulin va trop fort.

Ton moulin, ton moulin va trop vite,
Ton moulin, ton moulin va trop fort !`,
  },
  {
    id: 'comptine-17',
    title: 'À la claire fontaine',
    emoji: '⛲',
    audio: 'assets/audio/comptine-17.mp3',
    lyrics: `À la claire fontaine
M'en allant promener,
J'ai trouvé l'eau si belle
Que je m'y suis baigné.

Il y a longtemps que je t'aime,
Jamais je ne t'oublierai.

Sous les feuilles d'un chêne,
Je me suis fait sécher.
Sur la plus haute branche,
Un rossignol chantait.

Il y a longtemps que je t'aime,
Jamais je ne t'oublierai.`,
  },
  {
    id: 'comptine-18',
    title: "Entre le bœuf et l'âne gris",
    emoji: '🐂',
    audio: 'assets/audio/comptine-18.mp3',
    lyrics: `Entre le bœuf et l'âne gris,
Dort, dort, dort le petit fils.
Mille anges divins, mille séraphins
Volent à l'entour de ce grand Dieu d'amour.

Entre les roses et les lys,
Dort, dort, dort le petit fils.
Mille anges divins, mille séraphins
Volent à l'entour de ce grand Dieu d'amour.`,
  },
  {
    id: 'comptine-25',
    title: 'A comme Avion',
    emoji: '✈️',
    audio: 'assets/audio/comptine-25.mp3',
    offset: 3,
    lyrics: `A comme Avion
B comme Banane
C comme Cache-Cache
D comme Dodo
A B C D

E comme Étoile
F comme Fromage
G comme Gâteau
H comme Hibou
E F G H

I comme Image
J comme Jardin
K comme Kangourou
L comme Lapin
I J K L

M comme Maman
N comme Nuage
O comme Orange
P comme Papa
M N O P

Q comme Quoi ?
R comme Rose
S comme Soleil
T comme Train
Q R S T

U comme Univers
V comme Vache
W comme Wagon
X comme Xylophone
U V W X

Y comme Yaourt
Z comme Zèbre
Nous sommes arrivés
À la fin d'l'alphabet
A B C D`,
  },
  {
    id: 'comptine-24',
    title: "Plic ploc j'écoute la pluie",
    emoji: '🌧️',
    audio: 'assets/audio/comptine-24.mp3',
    offset: 7,
    lyrics: `Plic ploc, j'écoute la pluie, pluie
Plic ploc, plic ploc, j'écoute la pluie

Plic ploc, plic ploc, je suis dans mon lit
Plic ploc, plic ploc, dehors il fait froid
Plic ploc, plic ploc, qu'on est bien chez soi

Plic ploc, plic ploc, j'écoute la pluie
Plic ploc, plic ploc, je suis dans mon lit
Plic ploc, plic ploc, dehors il fait froid
Plic ploc, plic ploc, qu'on est bien chez soi`,
  },
  {
    id: 'comptine-23',
    title: 'Brille brille petite étoile',
    emoji: '⭐',
    audio: 'assets/audio/comptine-23.mp3',
    lyrics: `Brille brille petite étoile,
Qui es-tu ? Quelle est ta toile ?
Là-haut dans le ciel si bleu,
Comme un diamant lumineux.

Brille brille petite étoile,
Qui es-tu ? Quelle est ta toile ?`,
  },
  {
    id: 'comptine-22',
    title: 'Tape tape petites mains',
    emoji: '👏',
    audio: 'assets/audio/comptine-22.mp3',
    offset: 6,
    lyrics: `Tape tape petites mains,
Tourne tourne petit moulin,
Vole vole petit oiseau,
Nage nage petit poisson.

Tape tape petites mains,
Tourne tourne petit moulin,
Vole vole petit oiseau,
Nage nage petit poisson.`,
  },
  {
    id: 'comptine-21',
    title: "Dodo l'enfant do",
    emoji: '🌙',
    audio: 'assets/audio/comptine-21.mp3',
    offset: 5,
    lyrics: `Dodo, l'enfant do,
L'enfant dormira bien vite.
Dodo, l'enfant do,
L'enfant dormira bientôt.

Une poule blanche
Est là dans la grange,
Qui va faire un petit coco
Pour l'enfant qui va faire dodo.

Dodo, l'enfant do,
L'enfant dormira bien vite.
Dodo, l'enfant do,
L'enfant dormira bientôt.`,
  },
  {
    id: 'comptine-20',
    title: "La chanson de l'alphabet",
    emoji: '🔤',
    audio: 'assets/audio/comptine-20.mp3',
    lyrics: `A B C D E F G
H I J K L M N O P
Q R S
T U V
W X Y Z

Maintenant je sais mon alphabet,
Chante avec moi si tu veux bien !`,
  },
  {
    id: 'comptine-19',
    title: 'Les anges dans nos campagnes',
    emoji: '😇',
    audio: 'assets/audio/comptine-19.mp3',
    lyrics: `Les anges dans nos campagnes
Ont entonné l'hymne des cieux,
Et l'écho de nos montagnes
Redit ce chant mélodieux :

Gloria in excelsis Deo !

Bergers, pour qui cette fête ?
Quel est l'objet de tous ces chants ?

Ils annoncent la naissance
Du libérateur d'Israël,
Et pleins de reconnaissance
Chantent en ce jour solennel :

Gloria in excelsis Deo !`,
  },
];

/* palette par index % 8 — couleurs douces, style bébé */
const PALETTES = [
  { from: '#FFE5F1', to: '#FFBBD8', accent: '#D6336C' },
  { from: '#E8E5FF', to: '#C4BBFF', accent: '#5C3BC7' },
  { from: '#E5FFF3', to: '#BBFFD8', accent: '#1E7A4A' },
  { from: '#FFF8E5', to: '#FFE4AD', accent: '#B45309' },
  { from: '#E5F5FF', to: '#BBDEFF', accent: '#1060A0' },
  { from: '#FFE5E5', to: '#FFBBBB', accent: '#B91C1C' },
  { from: '#F0FFE5', to: '#CBFFA8', accent: '#3A7D0A' },
  { from: '#FFF0E5', to: '#FFD0AA', accent: '#C2410C' },
];

/* =========================================================
   Ordre persisté
   ========================================================= */

function getOrderedSongs() {
  const saved = localStorage.getItem('order');
  if (!saved) return [...SONGS];
  const ids = JSON.parse(saved);
  const ordered = ids.map(id => SONGS.find(s => s.id === id)).filter(Boolean);
  const newSongs = SONGS.filter(s => !ids.includes(s.id));
  return [...ordered, ...newSongs];
}

function saveOrder() {
  localStorage.setItem('order', JSON.stringify(state.orderedSongs.map(s => s.id)));
}

/* =========================================================
   État
   ========================================================= */

const state = {
  currentSongId: null,
  isPlaying: false,
  sheetOpen: false,
  editMode: false,
  orderedSongs: getOrderedSongs(),
  wakeLock: null,
};

const $ = (id) => document.getElementById(id);

const el = {
  grid:        $('grid'),
  editBtn:     $('editBtn'),
  miniPlayer:  $('miniPlayer'),
  miniInfo:    $('miniInfo'),
  miniEmoji:   $('miniEmoji'),
  miniTitle:   $('miniTitle'),
  miniPlay:    $('miniPlay'),
  miniPrev:    $('miniPrev'),
  miniNext:    $('miniNext'),
  backdrop:    $('sheetBackdrop'),
  sheet:       $('sheet'),
  sheetEmoji:  $('sheetEmoji'),
  sheetTitle:  $('sheetTitle'),
  sheetLyrics: $('sheetLyrics'),
  sheetPlay:   $('sheetPlay'),
  sheetPrev:   $('sheetPrev'),
  sheetNext:   $('sheetNext'),
  audio:       $('audio'),
};

/* =========================================================
   Audio
   ========================================================= */

function getSong(id) {
  return SONGS.find(s => s.id === id) || null;
}

function playSong(id) {
  const song = getSong(id);
  if (!song) return;

  if (state.currentSongId !== id) {
    el.audio.src = song.audio;
    el.audio.currentTime = song.offset || 0;
    state.currentSongId = id;
  }

  el.audio.play().then(() => {
    state.isPlaying = true;
    render();
    acquireWakeLock();
  }).catch(() => {});
}

function pause() {
  el.audio.pause();
  state.isPlaying = false;
  releaseWakeLock();
  render();
}

function togglePlay() {
  if (state.isPlaying) pause();
  else if (state.currentSongId) playSong(state.currentSongId);
}

function next() {
  const idx = state.orderedSongs.findIndex(s => s.id === state.currentSongId);
  const nextSong = state.orderedSongs[(idx + 1) % state.orderedSongs.length];
  if (nextSong) playSong(nextSong.id);
}

function prev() {
  const song = getSong(state.currentSongId);
  const startTime = song?.offset || 0;
  if (el.audio.currentTime > startTime + 3) {
    el.audio.currentTime = startTime;
    return;
  }
  const idx = state.orderedSongs.findIndex(s => s.id === state.currentSongId);
  const prevSong = state.orderedSongs[(idx - 1 + state.orderedSongs.length) % state.orderedSongs.length];
  if (prevSong) playSong(prevSong.id);
}

el.audio.loop = true;

/* =========================================================
   Wake Lock
   ========================================================= */

async function acquireWakeLock() {
  if (!('wakeLock' in navigator)) return;
  try { state.wakeLock = await navigator.wakeLock.request('screen'); } catch {}
}

function releaseWakeLock() {
  state.wakeLock?.release();
  state.wakeLock = null;
}

document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'visible' && state.isPlaying) acquireWakeLock();
});

/* =========================================================
   Sheet
   ========================================================= */

function openSheet() {
  const song = getSong(state.currentSongId);
  if (!song) return;
  el.sheetEmoji.textContent = song.emoji;
  el.sheetTitle.textContent = song.title;
  el.sheetLyrics.textContent = song.lyrics;
  el.sheetLyrics.scrollTop = 0;
  el.sheet.classList.add('is-open');
  el.backdrop.classList.add('is-open');
  state.sheetOpen = true;
  el.sheetPlay.classList.toggle('is-playing', state.isPlaying);
}

function closeSheet() {
  el.sheet.classList.remove('is-open');
  el.backdrop.classList.remove('is-open');
  state.sheetOpen = false;
}

let sheetTouchStartY = 0;
el.sheet.addEventListener('touchstart', e => { sheetTouchStartY = e.touches[0].clientY; }, { passive: true });
el.sheet.addEventListener('touchend', e => { if (e.changedTouches[0].clientY - sheetTouchStartY > 60) closeSheet(); }, { passive: true });

/* =========================================================
   Mode édition + drag & drop
   ========================================================= */

let dragId = null;
let dragOverId = null;
let dragCardEl = null;
let ghost = null;
let isDragging = false;

function toggleEditMode() {
  state.editMode = !state.editMode;
  el.editBtn.textContent = state.editMode ? '✅ Terminer' : '✏️ Modifier l\'ordre';
  el.editBtn.classList.toggle('is-active', state.editMode);
  render();
}

function startDrag(card, touch) {
  isDragging = true;
  dragId = card.dataset.id;
  dragCardEl = card;
  card.classList.add('is-dragging');
  navigator.vibrate?.(40);

  const rect = card.getBoundingClientRect();
  ghost = card.cloneNode(true);
  ghost.className = 'drag-ghost';
  ghost.style.width = rect.width + 'px';
  ghost.style.left = rect.left + 'px';
  ghost.style.top = rect.top + 'px';
  document.body.appendChild(ghost);
}

function moveDrag(touch) {
  if (!ghost) return;
  const rect = dragCardEl.getBoundingClientRect();
  ghost.style.left = (touch.clientX - rect.width / 2) + 'px';
  ghost.style.top = (touch.clientY - rect.height / 2) + 'px';

  ghost.style.visibility = 'hidden';
  const below = document.elementFromPoint(touch.clientX, touch.clientY);
  ghost.style.visibility = 'visible';

  document.querySelectorAll('.song-card.drag-over').forEach(c => c.classList.remove('drag-over'));
  const targetCard = below?.closest('.song-card');
  if (targetCard && targetCard.dataset.id !== dragId) {
    targetCard.classList.add('drag-over');
    dragOverId = targetCard.dataset.id;
  } else {
    dragOverId = null;
  }
}

function endDrag() {
  if (dragId && dragOverId) {
    const fromIdx = state.orderedSongs.findIndex(s => s.id === dragId);
    const toIdx = state.orderedSongs.findIndex(s => s.id === dragOverId);
    if (fromIdx !== -1 && toIdx !== -1) {
      state.orderedSongs.splice(toIdx, 0, state.orderedSongs.splice(fromIdx, 1)[0]);
      saveOrder();
    }
  }

  ghost?.remove();
  ghost = null;
  document.querySelectorAll('.song-card.is-dragging, .song-card.drag-over')
    .forEach(c => c.classList.remove('is-dragging', 'drag-over'));
  dragId = null;
  dragOverId = null;
  dragCardEl = null;
  isDragging = false;
  render();
}

el.grid.addEventListener('touchstart', e => {
  if (!state.editMode) return;
  const card = e.target.closest('.song-card');
  if (card) startDrag(card, e.touches[0]);
}, { passive: true });

el.grid.addEventListener('touchmove', e => {
  if (!isDragging) return;
  e.preventDefault();
  moveDrag(e.touches[0]);
}, { passive: false });

el.grid.addEventListener('touchend', () => { if (isDragging) endDrag(); }, { passive: true });
el.grid.addEventListener('touchcancel', () => { if (isDragging) endDrag(); }, { passive: true });

el.editBtn.addEventListener('click', toggleEditMode);

/* =========================================================
   Render
   ========================================================= */

function renderGrid() {
  el.grid.innerHTML = state.orderedSongs.map((song) => {
    const globalIdx = SONGS.indexOf(song);
    const pal = PALETTES[globalIdx % PALETTES.length];
    const isCurrent = song.id === state.currentSongId;

    return `
      <div class="song-card${isCurrent && state.isPlaying ? ' is-active' : ''}${state.editMode ? ' edit-mode' : ''}"
           data-id="${song.id}"
           style="--c-from:${pal.from};--c-to:${pal.to};--c-accent:${pal.accent}"
           role="button" tabindex="0" aria-label="${song.title}">
        <div class="card-handle">≡</div>
        <div class="card-media">
          <span>${song.emoji}</span>
          ${isCurrent && state.isPlaying && !state.editMode ? `<div class="card-eq" aria-hidden="true"><span></span><span></span><span></span></div>` : ''}
        </div>
        <span class="card-title">${song.title}</span>
      </div>
    `;
  }).join('');
}

function renderMiniPlayer() {
  const hasSong = !!state.currentSongId;
  el.miniPlayer.classList.toggle('is-visible', hasSong);
  if (!hasSong) return;
  const song = getSong(state.currentSongId);
  el.miniEmoji.textContent = song.emoji;
  el.miniTitle.textContent = song.title;
  el.miniPlay.classList.toggle('is-playing', state.isPlaying);
}

function render() {
  renderGrid();
  renderMiniPlayer();
  if (state.sheetOpen) el.sheetPlay.classList.toggle('is-playing', state.isPlaying);
}

/* =========================================================
   Events
   ========================================================= */

el.grid.addEventListener('click', e => {
  if (isDragging || state.editMode) return;
  const card = e.target.closest('.song-card');
  if (!card) return;
  const id = card.dataset.id;
  if (id === state.currentSongId && state.isPlaying) pause();
  else playSong(id);
});

el.miniInfo.addEventListener('click', openSheet);
el.miniPlay.addEventListener('click', togglePlay);
el.miniPrev.addEventListener('click', prev);
el.miniNext.addEventListener('click', next);

el.backdrop.addEventListener('click', closeSheet);
el.sheetPlay.addEventListener('click', () => { togglePlay(); el.sheetPlay.classList.toggle('is-playing', state.isPlaying); });
el.sheetPrev.addEventListener('click', () => { prev(); setTimeout(() => { const s = getSong(state.currentSongId); if (s && state.sheetOpen) { el.sheetEmoji.textContent = s.emoji; el.sheetTitle.textContent = s.title; el.sheetLyrics.textContent = s.lyrics; el.sheetLyrics.scrollTop = 0; } }, 50); });
el.sheetNext.addEventListener('click', () => { next(); setTimeout(() => { const s = getSong(state.currentSongId); if (s && state.sheetOpen) { el.sheetEmoji.textContent = s.emoji; el.sheetTitle.textContent = s.title; el.sheetLyrics.textContent = s.lyrics; el.sheetLyrics.scrollTop = 0; } }, 50); });

el.audio.addEventListener('pause', () => { if (state.sheetOpen) el.sheetPlay.classList.remove('is-playing'); });

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && state.sheetOpen) closeSheet();
  if (e.key === ' ') { e.preventDefault(); togglePlay(); }
  if (e.key === 'ArrowRight') next();
  if (e.key === 'ArrowLeft') prev();
});

/* =========================================================
   Service Worker
   ========================================================= */

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => navigator.serviceWorker.register('sw.js').catch(() => {}));
}

/* =========================================================
   Init
   ========================================================= */

render();
