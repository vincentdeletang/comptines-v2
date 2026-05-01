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

Il est né le divin enfant,
Jouez hautbois, résonnez musettes !
Il est né le divin enfant,
Chantons tous son avènement !

Ah ! Qu'il est beau, qu'il est charmant !
Ah ! Que ses grâces sont parfaites !
Ah ! Qu'il est beau, qu'il est charmant !
Qu'il est doux ce divin enfant !

Il est né le divin enfant,
Jouez hautbois, résonnez musettes !
Il est né le divin enfant,
Chantons tous son avènement !

Une étable est son logement,
Un peu de paille est sa couchette.
Une étable est son logement,
Pour un Dieu quel abaissement !

Il est né le divin enfant,
Jouez hautbois, résonnez musettes !
Il est né le divin enfant,
Chantons tous son avènement !

Partez, grands rois de l'Orient !
Venez vous unir à nos fêtes
Partez, grands rois de l'Orient !
Venez adorer cet enfant !

Il est né le divin enfant,
Jouez hautbois, résonnez musettes !
Il est né le divin enfant,
Chantons tous son avènement !`,
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
On bat le briquet. »

Au clair de la lune,
S'en fut Arlequin
Frappe chez la brune
Qui répond soudain :
« Qui frappe de la sorte ? »
Il dit à son tour :
« Ouvrez votre porte
Pour le Dieu d'amour. »

Au clair de la lune,
On n'y voit qu'un peu,
On chercha la plume,
On chercha du feu.
En cherchant de la sorte
Je n'sais c'qu'on trouva,
Mais je sais qu'la porte
Sur eux se ferma.`,
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

Une souris verte
Qui courait dans l'herbe.
Je la mets dans un tiroir,
Elle me dit qu'il fait trop noir.

Ces messieurs me disent :
Trempez-la dans l'huile,
Trempez-la dans l'eau,
Ça fera un escargot tout chaud.

Une souris verte
Qui courait dans l'herbe.
Je la mets dans mon chapeau,
Elle me dit qu'il fait trop chaud !

Ces messieurs me disent :
Trempez-la dans l'huile,
Trempez-la dans l'eau,
Ça fera un escargot tout chaud.

Une souris verte
Qui courait dans l'herbe.
Je la mets dans ma culotte,
Elle me fait trois petites crottes.

Ces messieurs me disent :
Trempez-la dans l'huile,
Trempez-la dans l'eau,
Ça fera un escargot tout chaud.

Une souris verte
Qui courait dans l'herbe.
Je la mets la dans ma main,
Elle me dit qu'elle est très bien.

Ces messieurs me disent :
Trempez-la dans l'huile,
Trempez-la dans l'eau,
Ça fera un escargot tout chaud.`,
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
Fais dodo, t'auras du lolo.

Fais dodo, Colas mon p'tit frère,
Fais dodo, t'auras du lolo.
Ta soeur est en haut
Qui fait des chapeaux,
Ton frère est en bas
Qui fait des nougats.
Fais dodo, Colas mon p'tit frère,
Fais dodo, t'auras du lolo.

Fais dodo, Colas mon p'tit frère,
Fais dodo, t'auras du lolo.
Ton cousin Gaston
Fais des gros bonbons,
Ta cousine Charlotte
Fais de la compote.
Fais dodo, Colas mon p'tit frère,
Fais dodo, t'auras du lolo.

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
Alouette, gentille alouette,
Alouette, je te plumerai.

Je te plumerai la tête,
Je te plumerai la tête,
Et la tête ! Et la tête !
Alouette ! Alouette !
O-o-o-oh !

Alouette, gentille alouette,
Alouette, je te plumerai.
Alouette, gentille alouette,
Alouette, je te plumerai.

Je te plumerai le bec,
Je te plumerai le bec,
Et le bec ! Et le bec !
Et la tête ! Et la tête !
Alouette ! Alouette !
O-o-o-oh !

Alouette, gentille alouette,
Alouette, je te plumerai.
Alouette, gentille alouette,
Alouette, je te plumerai.

Je te plumerai le cou,
Je te plumerai le cou,
Et le cou ! Et le cou !
Et le bec ! Et la tête !
Alouette ! Alouette !
O-o-o-oh !

Alouette, gentille alouette,
Alouette, je te plumerai.
Alouette, gentille alouette,
Alouette, je te plumerai.

Je te plumerai les ailes,
Je te plumerai les ailes,
Et les ailes ! Et les ailes !
Et le cou ! Et le bec ! Et la tête !
Alouette !
O-o-o-oh !

Alouette, gentille alouette,
Alouette, je te plumerai.
Alouette, gentille alouette,
Alouette, je te plumerai.

Je te plumerai la queue,
Je te plumerai la queue,
Et la queue ! Et la queue !
Et les ailes ! Et le cou ! Et le bec ! Et la tête !
Alouette !
O-o-o-oh !

Alouette, gentille alouette,
Alouette, je te plumerai.
Alouette, gentille alouette,
Alouette, je te plumerai.`,
  },
  {
    id: 'comptine-7',
    title: 'Il était un petit navire',
    emoji: '⛵',
    audio: 'assets/audio/comptine-7.mp3',
    lyrics: `Il était un petit navire,
Il était un petit navire
Qui n'avait ja-ja-jamais navigué,
Qui n'avait ja-ja-jamais navigué.
Ohé ! Ohé !

Il partit pour un long voyage,
Il partit pour un long voyage
Sur la mer Mé-Mé-Méditerranée,
Sur la mer Mé-Mé-Méditerranée.
Ohé ! Ohé !

Ohé! Ohé! Matelot,
Matelot navigue sur les flots
Ohé! Ohé! Matelot,
Matelot navigue sur les flots

Au bout de cinq à six semaines,
Au bout de cinq à six semaines,
Les vivres vin-vin-vinrent à manquer,
Les vivres vin-vin-vinrent à manquer.
Ohé ! Ohé !

On tira à la courte paille,
On tira à la courte paille
Pour savoir qui-qui-qui serait mangé,
Pour savoir qui-qui-qui serait mangé.
Ohé ! Ohé !

Le sort tomba sur le plus jeune,
Le sort tomba sur le plus jeune,
C'est donc lui qui-qui-qui sera mangé,
C'est donc lui qui-qui-qui sera mangé.
Ohé ! Ohé !

Ohé! Ohé! Matelot,
Matelot navigue sur les flots
Ohé! Ohé! Matelot,
Matelot navigue sur les flots

Au même instant un grand miracle,
Au même instant un grand miracle
Pour l'enfant fut-fut-fut réalisé,
Pour l'enfant fut-fut-fut réalisé.
Ohé ! Ohé !

Soudain des poissons dans le navire,
Soudain des poissons dans le navire
Sautèrent par-par-par et par milliers,
Sautèrent par-par-par et par milliers.
Ohé ! Ohé !

On les prit, on les mit à frire,
On les prit, on les mit à frire,
Le jeune mousse-mousse-mousse fut sauvé,
Le jeune mousse-mousse-mousse fut sauvé.
Ohé ! Ohé !

Si cette histoire vous amuse,
Si cette histoire vous amuse,
Nous allons la-la-la recommencer,
Nous allons la-la-la recommencer,
Ohé! Ohé!

Ohé! Ohé! Matelot,
Matelot navigue sur les flots
Ohé! Ohé! Matelot,
Matelot navigue sur les flots`,
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

Mais le soleil a chassé la pluie !`,
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

Les beaux messieurs font comme ça,
Et puis encore comme ça.

Sur le pont d'Avignon,
On y danse, on y danse,
Sur le pont d'Avignon,
On y danse tous en rond.

Les belles dames font comme ça,
Et puis encore comme ça.

Sur le pont d'Avignon,
On y danse, on y danse,
Sur le pont d'Avignon,
On y danse tous en rond.

Les cordonniers font comme ça,
Et puis encore comme ça.

Sur le pont d'Avignon,
On y danse, on y danse,
Sur le pont d'Avignon,
On y danse tous en rond.

Les blanchisseuses font comme ça,
Et puis encore comme ça.

Sur le pont d'Avignon,
On y danse, on y danse,
Sur le pont d'Avignon,
On y danse tous en rond.`,
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
C'est l'amour infini,
C'est l'amour infini.

Doux enfant, doux agneau.
Qu'il est saint, qu'il est beau.
Entendez résonner les pipeaux,
Des bergers conduisant leurs troupeaux
Vers son humble berceau,
Vers son humble berceau.

C'est vers nous qu'il accourt,
En un don sans retour !
De ce monde ignorant de l'amour,
Où commence aujourd'hui son séjour,
Qu'il soit Roi pour toujours !
Qu'il soit Roi pour toujours !

Quel accueil pour un Roi !
Point d'abri, point de toit !
Dans sa crèche il grelotte de froid
O pécheur, sans attendre la croix,
Jésus souffre pour toi !
Jésus souffre pour toi !`,
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

Les mains aux côtés,
Sautez, sautez, marionnettes,
Les mains aux côtés,
Marionnettes recommencez.

La taille courbée,
Tournez, tournez, marionnettes,
La taille courbée,
Marionnettes, recommencez.

Ainsi font, font, font,
Les petites marionnettes,
Ainsi font, font, font,
Trois p'tits tours et puis s'en vont.

Puis le front penché,
Tournez, tournez, marionnettes,
Puis le front penché,
Marionnettes, recommencez.

Et elles danseront,
Les petites marionnettes,
Et elles danseront,
Quand les enfants dormiront.

Ainsi font, font, font,
Les petites marionnettes,
Ainsi font, font, font,
Trois p'tits tours et puis s'en vont.`,
  },
  {
    id: 'comptine-12',
    title: 'Une poule sur un mur',
    emoji: '🐔',
    audio: 'assets/audio/comptine-12.mp3',
    lyrics: `Une poule sur un mur,
Qui picore du pain dur,
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
Au saint anniversaire.

Mon beau sapin, comme il est doux,
De te voir briller parmi nous.
Toi que Noël planta chez nous,
Scintillant de lumière.

Mon beau sapin, tes verts sommets,
Et leur fidèle ombrage,
De la foi qui ne ment jamais,
De la constance et de la paix,
Mon beau sapin, tes verts sommets
M'offrent la douce image.

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
    lyrics: `Sur le long chemin,
Tout blanc de neige blanche,
Un vieux monsieur s'avance,
Avec sa canne dans la main.
Et tout là-haut le vent,
Qui siffle dans les branches,
Lui souffle la romance,
Qu'il chantait petit enfant:

OH! Vive le vent, vive le vent,
Vive le vent d'hiver
Qui s'en va sifflant, soufflant
Dans les grands sapins verts, oh !

Vive le temps, vive le temps
Vive le temps d'hiver
Boule de neige et jour de l'an
Et bonne année grand-mère ...

Joyeux, joyeux Noël,
Aux mille bougies,
Quand chantent vers le ciel,
Les cloches de la nuit.
Et dans chaque maison,
Il flotte un air de fêtes,
Partout la table est prête,
Et l'on entend la même chanson:

OH! Vive le vent, vive le vent,
Vive le vent d'hiver
Qui s'en va sifflant, soufflant
Dans les grands sapins verts, oh !

Vive le temps, vive le temps
Vive le temps d'hiver
Boule de neige et jour de l'an
Et bonne année grand-mère ...

Et le vieux monsieur
Descend vers le village,
C'est l'heure où tout est sage
Et l'ombre danse au coin du feu
Mais dans chaque maison,
Il flotte un air de fêtes,
Partout la table est prête,
Et l'on entend la même chanson:

OH! Vive le vent, vive le vent,
Vive le vent d'hiver
Qui s'en va sifflant, soufflant
Dans les grands sapins verts, oh !

Vive le temps, vive le temps
Vive le temps d'hiver
Qui rapporte aux vieux enfants
Leurs souvenirs d'hier.

Sur le long chemin,
Tout blanc de neige blanche,
Un vieux monsieur s'avance,
Avec sa canne dans la main.
Et tout là-haut le vent,
Qui siffle dans les branches,
Lui souffle la romance,
Qu'il chantait petit enfant:

OH! Vive le vent, vive le vent,
Vive le vent d'hiver
Qui s'en va sifflant, soufflant
Dans les grands sapins verts, oh !

Vive le temps, vive le temps
Vive le temps d'hiver
Boule de neige et jour de l'an
Et bonne année grand-mère ...`,
  },
  {
    id: 'comptine-15',
    title: "Pomme de reinette et pomme d'api",
    emoji: '🍎',
    audio: 'assets/audio/comptine-15.mp3',
    lyrics: `Pomme de reinette et pomme d'api,
Tapis, tapis rouge.
Pomme de reinette et pomme d'api,
Tapis, tapis gris.`,
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
Jamais je ne t'oublierai.

Chante, rossignol, chante,
Toi qui as le cœur gai.
Tu as le cœur à rire,
Moi je l'ai à pleurer.

Il y a longtemps que je t'aime,
Jamais je ne t'oublierai.

J'ai perdu mon ami
Sans l'avoir mérité,
Pour un bouquet de roses,
Que je lui refusai.

Il y a longtemps que je t'aime,
Jamais je ne t'oublierai.

Je voudrais que la rose
Fût encore au rosier,
Et que ma douce amie
Fût encore à m'aimer.

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

Entre les pastoureaux jolis,
Dort, dort, dort le petit fils.
Mille anges divins, mille séraphins
Volent à l'entour de ce grand Dieu d'amour.

Entre les roses et les lys,
Dort, dort, dort le petit fils.
Mille anges divins, mille séraphins
Volent à l'entour de ce grand Dieu d'amour.

Entre les deux bras de Marie
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
Gloria in excelsis Deo !

Bergers, pour qui cette fête ?
Quel est l'objet de tous ces chants ?
Quel vainqueur, quelle conquête
Mérite ces chœurs triomphants ?

Gloria in excelsis Deo !
Gloria in excelsis Deo !

Ils annoncent la naissance
Du saint Rédempteur d'Israël,
Et pleins de reconnaissance
Chantent en ce jour solennel :

Gloria in excelsis Deo !
Gloria in excelsis Deo !

Seigneur, par la voix de l'ange,
Par les hymnes des chérubins,
La terre sait la louange
Qui se chante aux parvis divins.

Gloria in excelsis Deo !
Gloria in excelsis Deo !

Des anges suivant l'exemple,
Seigneur, Vous viendrez désormais
Au milieu de Votre temple
Chanter avec eux Vos bienfaits :

Gloria in excelsis Deo !
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
  loopMode: localStorage.getItem('loopMode') === 'shuffle' ? 'shuffle' : 'one', // 'one' | 'shuffle'
  sleepTimerEnd: null,   // timestamp ms
  sleepTimerId: null,    // setTimeout id pour le déclenchement
  sleepCountdownId: null,// setInterval id pour l'affichage
  fadeRafId: null,
  lastDisplayedSongId: null,
  pendingReload: false,  // un nouveau SW a pris le contrôle, on reload dès qu'on n'écoute plus
  loading: false,        // changement de src en cours — ignorer le 'pause' implicite qui en découle
};

const $ = (id) => document.getElementById(id);

const el = {
  grid:        $('grid'),
  editBtn:     $('editBtn'),
  miniPlayer:  $('miniPlayer'),
  miniInfo:    $('miniInfo'),
  miniEmoji:   $('miniEmoji'),
  miniTitle:   $('miniTitle'),
  miniSub:     $('miniSub'),
  miniPlay:    $('miniPlay'),
  miniPrev:    $('miniPrev'),
  miniNext:    $('miniNext'),
  miniProgressFill: $('miniProgressFill'),
  backdrop:    $('sheetBackdrop'),
  sheet:       $('sheet'),
  sheetHeader: document.querySelector('.sheet-header'),
  sheetEmoji:  $('sheetEmoji'),
  sheetTitle:  $('sheetTitle'),
  sheetLyrics: $('sheetLyrics'),
  sheetPlay:   $('sheetPlay'),
  sheetPrev:   $('sheetPrev'),
  sheetNext:   $('sheetNext'),
  sheetLoop:   $('sheetLoop'),
  sheetLoopIcon: $('sheetLoopIcon'),
  sheetTimer:  $('sheetTimer'),
  sheetTimerIcon: $('sheetTimerIcon'),
  sheetTimerCountdown: $('sheetTimerCountdown'),
  sheetProgressBar: $('sheetProgressBar'),
  sheetProgressFill: $('sheetProgressFill'),
  sheetProgressThumb: $('sheetProgressThumb'),
  sheetTimeCurrent: $('sheetTimeCurrent'),
  sheetTimeTotal: $('sheetTimeTotal'),
  timerPopup:  $('timerPopup'),
  timerPopupOff: $('timerPopupOff'),
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

  cancelFade();
  el.audio.volume = 1;
  el.audio.loop = (state.loopMode === 'one');

  const isNewSong = state.currentSongId !== id;
  if (isNewSong) {
    state.loading = true;
    el.audio.src = song.audio;
    el.audio.currentTime = song.offset || 0;
    state.currentSongId = id;
  }

  el.audio.play().then(() => {
    state.loading = false;
    state.isPlaying = true;
    updatePlayState();
    if (isNewSong) updateMediaSession(song);
    if ('mediaSession' in navigator) navigator.mediaSession.playbackState = 'playing';
    acquireWakeLock();
  }).catch(() => { state.loading = false; });
}

function pause() {
  cancelFade();
  el.audio.pause();
  el.audio.volume = 1;
  state.isPlaying = false;
  releaseWakeLock();
  if ('mediaSession' in navigator) navigator.mediaSession.playbackState = 'paused';
  updatePlayState();
}

function fadeOutAndPause(duration = 1500) {
  cancelFade();
  if (el.audio.paused) { pause(); return; }

  state.isPlaying = false;
  if ('mediaSession' in navigator) navigator.mediaSession.playbackState = 'paused';
  updatePlayState();

  const startVol = el.audio.volume;
  const startT = performance.now();
  const step = (now) => {
    const t = Math.min(1, (now - startT) / duration);
    el.audio.volume = startVol * (1 - t);
    if (t < 1) {
      state.fadeRafId = requestAnimationFrame(step);
    } else {
      el.audio.pause();
      el.audio.volume = 1;
      state.fadeRafId = null;
      releaseWakeLock();
    }
  };
  state.fadeRafId = requestAnimationFrame(step);
}

function cancelFade() {
  if (state.fadeRafId != null) {
    cancelAnimationFrame(state.fadeRafId);
    state.fadeRafId = null;
    el.audio.volume = 1;
  }
}

function togglePlay() {
  if (state.isPlaying) pause();
  else if (state.currentSongId) playSong(state.currentSongId);
}

function next() {
  if (state.loopMode === 'shuffle') return playRandom();
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
  if (state.loopMode === 'shuffle') return playRandom();
  const idx = state.orderedSongs.findIndex(s => s.id === state.currentSongId);
  const prevSong = state.orderedSongs[(idx - 1 + state.orderedSongs.length) % state.orderedSongs.length];
  if (prevSong) playSong(prevSong.id);
}

function playRandom() {
  if (state.orderedSongs.length < 2) return;
  let pick;
  do {
    pick = state.orderedSongs[Math.floor(Math.random() * state.orderedSongs.length)];
  } while (pick.id === state.currentSongId);
  playSong(pick.id);
}

el.audio.loop = (state.loopMode === 'one');

el.audio.addEventListener('ended', () => {
  if (state.loopMode === 'shuffle') playRandom();
});

/* Si un MP3 est corrompu/absent, on saute à la suivante. Au-delà de 3 erreurs
   d'affilée on s'arrête pour ne pas boucler à l'infini sur un catalogue cassé. */
let audioErrorCount = 0;
el.audio.addEventListener('error', () => {
  console.warn('Audio error', el.audio.error);
  audioErrorCount++;
  if (audioErrorCount >= 3) {
    audioErrorCount = 0;
    pause();
    return;
  }
  setTimeout(next, 300);
});
el.audio.addEventListener('playing', () => { audioErrorCount = 0; });

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
  applyPalette(el.sheet, song);
  el.sheetEmoji.textContent = song.emoji;
  el.sheetTitle.textContent = song.title;
  el.sheetLyrics.textContent = song.lyrics;
  el.sheetLyrics.scrollTop = 0;
  el.sheet.classList.add('is-open');
  el.backdrop.classList.add('is-open');
  state.sheetOpen = true;
  el.sheetPlay.classList.toggle('is-playing', state.isPlaying);
  updateProgressUI();
  updateLoopUI();
  updateSleepTimerUI();
}

function closeSheet() {
  el.sheet.classList.remove('is-open');
  el.backdrop.classList.remove('is-open');
  el.timerPopup.hidden = true;
  state.sheetOpen = false;
}

let sheetTouchStartY = null;
el.sheet.addEventListener('touchstart', e => {
  /* On ne déclenche le swipe-to-close que si le geste démarre sur la poignée ou le header,
     sinon swiper dans les paroles (rubber-band, etc.) fermerait la sheet par accident. */
  const t = e.target;
  sheetTouchStartY = (t.closest('.sheet-handle') || t.closest('.sheet-header'))
    ? e.touches[0].clientY
    : null;
}, { passive: true });
el.sheet.addEventListener('touchend', e => {
  if (sheetTouchStartY == null) return;
  if (e.changedTouches[0].clientY - sheetTouchStartY > 60) closeSheet();
  sheetTouchStartY = null;
}, { passive: true });

/* =========================================================
   Mode édition + drag & drop
   ========================================================= */

let isDragging = false;
let sortable = null;

function toggleEditMode() {
  state.editMode = !state.editMode;
  el.editBtn.querySelector('.fab-label').textContent = state.editMode ? 'Terminer' : 'Trier';
  el.editBtn.querySelector('.fab-icon').textContent = state.editMode ? '✅' : '⇅';
  el.editBtn.classList.toggle('is-active', state.editMode);
  render();
  if (state.editMode) initSortable();
  else destroySortable();
}

function initSortable() {
  sortable = new Sortable(el.grid, {
    animation: 150,
    delay: 150,
    delayOnTouchOnly: true,
    scroll: true,
    scrollSensitivity: 80,
    scrollSpeed: 12,
    ghostClass: 'sortable-ghost',
    chosenClass: 'sortable-chosen',
    onStart: () => { isDragging = true; navigator.vibrate?.(40); },
    onEnd: (evt) => {
      isDragging = false;
      if (evt.oldIndex === evt.newIndex) return;
      const moved = state.orderedSongs.splice(evt.oldIndex, 1)[0];
      state.orderedSongs.splice(evt.newIndex, 0, moved);
      saveOrder();
    },
  });
}

function destroySortable() {
  sortable?.destroy();
  sortable = null;
}

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
          <div class="card-eq" aria-hidden="true"><span></span><span></span><span></span></div>
        </div>
        <span class="card-title">${song.title}</span>
      </div>
    `;
  }).join('');
}

function applyPalette(target, song) {
  const globalIdx = SONGS.indexOf(song);
  const pal = PALETTES[globalIdx % PALETTES.length];
  target.style.setProperty('--c-from', pal.from);
  target.style.setProperty('--c-to', pal.to);
  target.style.setProperty('--c-accent', pal.accent);
}

function triggerSwap(elem) {
  elem.classList.remove('is-swapping');
  void elem.offsetWidth;
  elem.classList.add('is-swapping');
}

function renderMiniPlayer() {
  const hasSong = !!state.currentSongId;
  el.miniPlayer.classList.toggle('is-visible', hasSong);
  el.editBtn.classList.toggle('with-player', hasSong);
  if (!hasSong) return;
  const song = getSong(state.currentSongId);

  const songChanged = state.lastDisplayedSongId !== song.id;
  el.miniEmoji.textContent = song.emoji;
  el.miniTitle.textContent = song.title;
  el.miniPlay.classList.toggle('is-playing', state.isPlaying);

  if (state.sheetOpen) {
    el.sheetEmoji.textContent = song.emoji;
    el.sheetTitle.textContent = song.title;
    if (songChanged) {
      el.sheetLyrics.textContent = song.lyrics;
      el.sheetLyrics.scrollTop = 0;
    }
  }

  if (songChanged) {
    applyPalette(el.miniPlayer, song);
    applyPalette(el.sheet, song);
    triggerSwap(el.miniInfo);
    if (state.sheetOpen) triggerSwap(el.sheetHeader);
    state.lastDisplayedSongId = song.id;
  }
}

function render() {
  renderGrid();
  renderMiniPlayer();
  if (state.sheetOpen) el.sheetPlay.classList.toggle('is-playing', state.isPlaying);
}

function updatePlayState() {
  el.grid.querySelectorAll('.song-card.is-active').forEach(c => c.classList.remove('is-active'));
  if (state.isPlaying && state.currentSongId) {
    el.grid.querySelector(`.song-card[data-id="${state.currentSongId}"]`)?.classList.add('is-active');
  }
  renderMiniPlayer();
  if (state.sheetOpen) el.sheetPlay.classList.toggle('is-playing', state.isPlaying);
}

/* =========================================================
   Progress
   ========================================================= */

function formatTime(s) {
  if (!isFinite(s) || s < 0) s = 0;
  const m = Math.floor(s / 60);
  const ss = Math.floor(s % 60).toString().padStart(2, '0');
  return `${m}:${ss}`;
}

function updateProgressUI() {
  const song = getSong(state.currentSongId);
  if (!song) return;
  const offset = song.offset || 0;
  const dur = el.audio.duration;
  const cur = el.audio.currentTime;
  const usableDur = isFinite(dur) ? Math.max(0, dur - offset) : 0;
  const usableCur = Math.max(0, cur - offset);
  const pct = usableDur > 0 ? (usableCur / usableDur) * 100 : 0;
  el.miniProgressFill.style.width = pct + '%';
  if (state.sheetOpen) {
    el.sheetProgressFill.style.width = pct + '%';
    el.sheetProgressThumb.style.left = pct + '%';
    el.sheetTimeCurrent.textContent = formatTime(usableCur);
    el.sheetTimeTotal.textContent = formatTime(usableDur);
  }
}

el.audio.addEventListener('timeupdate', updateProgressUI);
el.audio.addEventListener('loadedmetadata', updateProgressUI);

/* Seek (sheet) */
function seekFromEvent(e) {
  const song = getSong(state.currentSongId);
  if (!song) return;
  const rect = el.sheetProgressBar.getBoundingClientRect();
  const x = (e.touches?.[0]?.clientX ?? e.clientX) - rect.left;
  const pct = Math.max(0, Math.min(1, x / rect.width));
  const dur = el.audio.duration;
  const offset = song.offset || 0;
  if (!isFinite(dur)) return;
  const usableDur = Math.max(0, dur - offset);
  el.audio.currentTime = offset + pct * usableDur;
  updateProgressUI();
}

let isSeeking = false;
el.sheetProgressBar.addEventListener('pointerdown', e => {
  isSeeking = true;
  el.sheetProgressBar.setPointerCapture(e.pointerId);
  seekFromEvent(e);
});
el.sheetProgressBar.addEventListener('pointermove', e => { if (isSeeking) seekFromEvent(e); });
el.sheetProgressBar.addEventListener('pointerup', e => {
  isSeeking = false;
  try { el.sheetProgressBar.releasePointerCapture(e.pointerId); } catch {}
});

/* =========================================================
   Loop mode
   ========================================================= */

const LOOP_ICONS = { one: '🔁', shuffle: '🔀' };
const LOOP_LABELS = { one: 'Une chanson', shuffle: 'Aléatoire' };

function updateLoopUI() {
  el.sheetLoopIcon.textContent = LOOP_ICONS[state.loopMode];
  el.sheetLoop.setAttribute('aria-label', `Mode: ${LOOP_LABELS[state.loopMode]}`);
  el.sheetLoop.classList.toggle('is-active', state.loopMode !== 'one');
}

function cycleLoopMode() {
  const order = ['one', 'shuffle'];
  const i = order.indexOf(state.loopMode);
  state.loopMode = order[(i + 1) % order.length];
  localStorage.setItem('loopMode', state.loopMode);
  el.audio.loop = (state.loopMode === 'one');
  updateLoopUI();
}

el.sheetLoop.addEventListener('click', cycleLoopMode);

/* =========================================================
   Sleep timer
   ========================================================= */

function setSleepTimer(minutes) {
  clearSleepTimer();
  if (!minutes) {
    updateSleepTimerUI();
    return;
  }
  state.sleepTimerEnd = Date.now() + minutes * 60_000;
  state.sleepTimerId = setTimeout(() => {
    fadeOutAndPause(3000);
    clearSleepTimer();
  }, minutes * 60_000);
  state.sleepCountdownId = setInterval(updateSleepTimerUI, 30_000);
  updateSleepTimerUI();
}

function clearSleepTimer() {
  if (state.sleepTimerId) clearTimeout(state.sleepTimerId);
  if (state.sleepCountdownId) clearInterval(state.sleepCountdownId);
  state.sleepTimerId = null;
  state.sleepCountdownId = null;
  state.sleepTimerEnd = null;
}

function updateSleepTimerUI() {
  const active = !!state.sleepTimerEnd;
  el.sheetTimer.classList.toggle('is-active', active);
  el.sheetTimer.classList.toggle('has-countdown', active);
  el.sheetTimerCountdown.hidden = !active;
  el.timerPopupOff.hidden = !active;
  if (active) {
    const remaining = Math.max(0, state.sleepTimerEnd - Date.now());
    const minLeft = Math.ceil(remaining / 60_000);
    el.sheetTimerCountdown.textContent = minLeft + 'm';
  }
}

el.sheetTimer.addEventListener('click', e => {
  e.stopPropagation();
  el.timerPopup.hidden = !el.timerPopup.hidden;
});

el.timerPopup.addEventListener('click', e => {
  const btn = e.target.closest('button[data-min]');
  if (!btn) return;
  const min = parseInt(btn.dataset.min, 10);
  setSleepTimer(min);
  el.timerPopup.hidden = true;
});

document.addEventListener('click', e => {
  if (el.timerPopup.hidden) return;
  if (e.target.closest('#timerPopup') || e.target.closest('#sheetTimer')) return;
  el.timerPopup.hidden = true;
});

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
el.sheetPrev.addEventListener('click', prev);
el.sheetNext.addEventListener('click', next);

/* Sync de l'état avec l'audio réel (interruption système : appel, casque débranché, focus média volé) */
el.audio.addEventListener('play', () => {
  state.isPlaying = true;
  if ('mediaSession' in navigator) navigator.mediaSession.playbackState = 'playing';
  acquireWakeLock();
  updatePlayState();
});
el.audio.addEventListener('pause', () => {
  if (el.audio.ended) return; // transition entre pistes en mode shuffle, pas une vraie pause
  if (state.loading) return;  // 'pause' implicite déclenché par un changement de src
  state.isPlaying = false;
  if ('mediaSession' in navigator) navigator.mediaSession.playbackState = 'paused';
  releaseWakeLock();
  updatePlayState();
  if (state.pendingReload) location.reload();
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && state.sheetOpen) closeSheet();
  if (e.key === ' ') { e.preventDefault(); togglePlay(); }
  if (e.key === 'ArrowRight') next();
  if (e.key === 'ArrowLeft') prev();
});

/* =========================================================
   Media Session (lockscreen / notif média)
   ========================================================= */

const artworkCache = new Map();

function buildArtwork(song) {
  if (artworkCache.has(song.id)) return artworkCache.get(song.id);
  const globalIdx = SONGS.indexOf(song);
  const pal = PALETTES[globalIdx % PALETTES.length];

  const make = (size) => {
    const canvas = document.createElement('canvas');
    canvas.width = canvas.height = size;
    const ctx = canvas.getContext('2d');
    const grad = ctx.createLinearGradient(0, 0, size, size);
    grad.addColorStop(0, pal.from);
    grad.addColorStop(1, pal.to);
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, size, size);
    ctx.font = `${size * 0.55}px "Apple Color Emoji","Segoe UI Emoji","Noto Color Emoji",sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(song.emoji, size / 2, size / 2 + size * 0.02);
    return canvas.toDataURL('image/png');
  };

  const artwork = [
    { src: make(256), sizes: '256x256', type: 'image/png' },
    { src: make(512), sizes: '512x512', type: 'image/png' },
  ];
  artworkCache.set(song.id, artwork);
  return artwork;
}

function updateMediaSession(song) {
  if (!('mediaSession' in navigator)) return;
  navigator.mediaSession.metadata = new MediaMetadata({
    title: song.title,
    artist: 'Comptines',
    album: 'Pour bébé',
    artwork: buildArtwork(song),
  });
}

/* Position state pour la barre de progression du lockscreen.
   On expose la timeline "utile" (offset retiré) pour que ça matche la barre in-app. */
function updateMediaPositionState() {
  if (!('mediaSession' in navigator) || typeof navigator.mediaSession.setPositionState !== 'function') return;
  const song = getSong(state.currentSongId);
  if (!song) return;
  const dur = el.audio.duration;
  if (!isFinite(dur) || dur <= 0) return;
  const offset = song.offset || 0;
  const usableDur = Math.max(0, dur - offset);
  const usableCur = Math.max(0, Math.min(usableDur, el.audio.currentTime - offset));
  try {
    navigator.mediaSession.setPositionState({
      duration: usableDur,
      position: usableCur,
      playbackRate: el.audio.playbackRate || 1,
    });
  } catch {}
}

let lastPositionUpdate = 0;
el.audio.addEventListener('timeupdate', () => {
  const now = performance.now();
  if (now - lastPositionUpdate > 1000) {
    lastPositionUpdate = now;
    updateMediaPositionState();
  }
});
el.audio.addEventListener('loadedmetadata', updateMediaPositionState);

if ('mediaSession' in navigator) {
  navigator.mediaSession.setActionHandler('play', () => {
    if (state.currentSongId) playSong(state.currentSongId);
  });
  navigator.mediaSession.setActionHandler('pause', pause);
  navigator.mediaSession.setActionHandler('previoustrack', prev);
  navigator.mediaSession.setActionHandler('nexttrack', next);
  try {
    navigator.mediaSession.setActionHandler('seekto', (details) => {
      const song = getSong(state.currentSongId);
      if (!song) return;
      const offset = song.offset || 0;
      const target = offset + (details.seekTime || 0);
      if (details.fastSeek && typeof el.audio.fastSeek === 'function') el.audio.fastSeek(target);
      else el.audio.currentTime = target;
      updateMediaPositionState();
    });
  } catch {}
}

/* =========================================================
   Service Worker
   ========================================================= */

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => navigator.serviceWorker.register('sw.js').catch(() => {}));

  /* Reload auto quand un nouveau SW prend le contrôle (mais pas au tout premier install,
     et pas en plein milieu d'une lecture — on diffère jusqu'à la prochaine pause). */
  const hadController = !!navigator.serviceWorker.controller;
  navigator.serviceWorker.addEventListener('controllerchange', () => {
    if (!hadController || state.pendingReload) return;
    state.pendingReload = true;
    if (!state.isPlaying) location.reload();
  });
}

/* =========================================================
   Init
   ========================================================= */

// Nettoyage des clés localStorage de l'ancienne version (favoris/tabs)
localStorage.removeItem('fav');
localStorage.removeItem('tab');

render();
updateLoopUI();
updateSleepTimerUI();
