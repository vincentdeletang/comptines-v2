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
   État
   ========================================================= */

const state = {
  currentIndex: -1,
  isPlaying: false,
  tab: JSON.parse(localStorage.getItem('fav') || '[]').length > 0 ? 'favorites' : 'all',
  sheetOpen: false,
  favorites: new Set(JSON.parse(localStorage.getItem('fav') || '[]')),
  wakeLock: null,
};

/* =========================================================
   DOM refs
   ========================================================= */

const $ = (id) => document.getElementById(id);

const el = {
  grid:          $('grid'),
  miniPlayer:    $('miniPlayer'),
  miniInfo:      $('miniInfo'),
  miniEmoji:     $('miniEmoji'),
  miniTitle:     $('miniTitle'),
  miniPlay:      $('miniPlay'),
  miniPrev:      $('miniPrev'),
  miniNext:      $('miniNext'),
  backdrop:      $('sheetBackdrop'),
  sheet:         $('sheet'),
  sheetEmoji:    $('sheetEmoji'),
  sheetTitle:    $('sheetTitle'),
  sheetLyrics:   $('sheetLyrics'),
  sheetPlay:     $('sheetPlay'),
  sheetPrev:     $('sheetPrev'),
  sheetNext:     $('sheetNext'),
  audio:         $('audio'),
};

/* =========================================================
   Audio
   ========================================================= */

function playSong(index) {
  const song = SONGS[index];
  if (!song) return;

  if (state.currentIndex !== index) {
    el.audio.src = song.audio;
    el.audio.currentTime = song.offset || 0;
    state.currentIndex = index;
  }

  el.audio.play()
    .then(() => {
      state.isPlaying = true;
      render();
      acquireWakeLock();
    })
    .catch(() => {});
}

function pause() {
  el.audio.pause();
  state.isPlaying = false;
  releaseWakeLock();
  render();
}

function togglePlay() {
  if (state.isPlaying) {
    pause();
  } else if (state.currentIndex >= 0) {
    playSong(state.currentIndex);
  }
}

function next() {
  playSong((state.currentIndex + 1) % SONGS.length);
}

function prev() {
  if (el.audio.currentTime > 3) {
    el.audio.currentTime = 0;
    return;
  }
  playSong((state.currentIndex - 1 + SONGS.length) % SONGS.length);
}

el.audio.addEventListener('ended', next);

/* =========================================================
   Wake Lock
   ========================================================= */

async function acquireWakeLock() {
  if (!('wakeLock' in navigator)) return;
  try {
    state.wakeLock = await navigator.wakeLock.request('screen');
  } catch {}
}

function releaseWakeLock() {
  state.wakeLock?.release();
  state.wakeLock = null;
}

document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'visible' && state.isPlaying) {
    acquireWakeLock();
  }
});

/* =========================================================
   Favoris
   ========================================================= */

function toggleFavorite(id) {
  state.favorites.has(id) ? state.favorites.delete(id) : state.favorites.add(id);
  localStorage.setItem('fav', JSON.stringify([...state.favorites]));
  render();
}

/* =========================================================
   Sheet
   ========================================================= */

function openSheet() {
  const song = SONGS[state.currentIndex];
  if (!song) return;
  el.sheetEmoji.textContent = song.emoji;
  el.sheetTitle.textContent = song.title;
  el.sheetLyrics.textContent = song.lyrics;
  el.sheetLyrics.scrollTop = 0;
  el.sheet.classList.add('is-open');
  el.backdrop.classList.add('is-open');
  state.sheetOpen = true;
  updateSheetPlayBtn();
}

function closeSheet() {
  el.sheet.classList.remove('is-open');
  el.backdrop.classList.remove('is-open');
  state.sheetOpen = false;
}

function updateSheetPlayBtn() {
  el.sheetPlay.classList.toggle('is-playing', state.isPlaying);
}

/* Sheet swipe-down gesture */
let sheetTouchStartY = 0;
el.sheet.addEventListener('touchstart', (e) => {
  sheetTouchStartY = e.touches[0].clientY;
}, { passive: true });

el.sheet.addEventListener('touchend', (e) => {
  const dy = e.changedTouches[0].clientY - sheetTouchStartY;
  if (dy > 60) closeSheet();
}, { passive: true });

/* =========================================================
   Render
   ========================================================= */

function renderGrid() {
  const songs = state.tab === 'favorites'
    ? SONGS.filter(s => state.favorites.has(s.id))
    : SONGS;

  if (songs.length === 0) {
    el.grid.innerHTML = `<p class="empty-state">Aucun favori pour l'instant.<br>Appuyez sur ❤️ pour en ajouter !</p>`;
    return;
  }

  el.grid.innerHTML = songs.map((song) => {
    const globalIdx = SONGS.indexOf(song);
    const pal = PALETTES[globalIdx % PALETTES.length];
    const isCurrent = globalIdx === state.currentIndex;
    const isFav = state.favorites.has(song.id);

    return `
      <div
        class="song-card${isCurrent && state.isPlaying ? ' is-active' : ''}"
        data-index="${globalIdx}"
        style="--c-from:${pal.from};--c-to:${pal.to};--c-accent:${pal.accent}"
        role="button"
        tabindex="0"
        aria-label="${song.title}"
      >
        <div class="card-media">
          <span class="card-emoji">${song.emoji}</span>
          <button class="card-fav${isFav ? ' is-fav' : ''}" data-id="${song.id}" aria-label="${isFav ? 'Retirer des favoris' : 'Ajouter aux favoris'}">♥</button>
          ${isCurrent && state.isPlaying ? `
            <div class="card-eq" aria-hidden="true">
              <span></span><span></span><span></span>
            </div>` : ''}
        </div>
        <span class="card-title">${song.title}</span>
      </div>
    `;
  }).join('');
}

function renderMiniPlayer() {
  const hasSong = state.currentIndex >= 0;
  el.miniPlayer.classList.toggle('is-visible', hasSong);
  el.miniPlayer.setAttribute('aria-hidden', String(!hasSong));

  if (!hasSong) return;

  const song = SONGS[state.currentIndex];
  el.miniEmoji.textContent = song.emoji;
  el.miniTitle.textContent = song.title;
  el.miniPlay.classList.toggle('is-playing', state.isPlaying);
}

function render() {
  renderGrid();
  renderMiniPlayer();
  if (state.sheetOpen) updateSheetPlayBtn();
}

/* =========================================================
   Event listeners
   ========================================================= */

/* Grille — tap sur card ou sur bouton favori */
function handleGridClick(e) {
  const favBtn = e.target.closest('.card-fav');
  if (favBtn) {
    toggleFavorite(favBtn.dataset.id);
    return;
  }
  const card = e.target.closest('.song-card');
  if (!card) return;
  const index = Number(card.dataset.index);
  if (index === state.currentIndex && state.isPlaying) {
    pause();
  } else {
    playSong(index);
  }
}

el.grid.addEventListener('click', handleGridClick);
el.grid.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); handleGridClick(e); }
});

/* Mini-player */
el.miniInfo.addEventListener('click', openSheet);
el.miniPlay.addEventListener('click', togglePlay);
el.miniPrev.addEventListener('click', prev);
el.miniNext.addEventListener('click', next);

/* Sheet */
el.backdrop.addEventListener('click', closeSheet);
el.sheetPlay.addEventListener('click', togglePlay);
el.sheetPrev.addEventListener('click', prev);
el.sheetNext.addEventListener('click', next);

/* Tabs */
document.querySelectorAll('.tab').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    btn.classList.add('active');
    state.tab = btn.dataset.tab;
    render();
  });
});

/* Keyboard */
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && state.sheetOpen) closeSheet();
  if (e.key === ' ') { e.preventDefault(); togglePlay(); }
  if (e.key === 'ArrowRight') next();
  if (e.key === 'ArrowLeft') prev();
});

/* =========================================================
   Mise à jour sheet après changement de chanson (auto-next)
   ========================================================= */

el.audio.addEventListener('play', () => {
  if (state.sheetOpen) {
    const song = SONGS[state.currentIndex];
    el.sheetEmoji.textContent = song.emoji;
    el.sheetTitle.textContent = song.title;
    el.sheetLyrics.textContent = song.lyrics;
    el.sheetLyrics.scrollTop = 0;
    updateSheetPlayBtn();
  }
});

el.audio.addEventListener('pause', () => {
  if (state.sheetOpen) updateSheetPlayBtn();
});

/* =========================================================
   Service Worker (PWA)
   ========================================================= */

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  });
}

/* =========================================================
   Init
   ========================================================= */

// Sync tab actif visuellement avec le state initial
document.querySelectorAll('.tab').forEach(btn => {
  btn.classList.toggle('active', btn.dataset.tab === state.tab);
});

render();
