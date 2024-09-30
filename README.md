# Présentation d'une scénarisation d'un projet multimédia : Elemental Synergy

## Idée de l'oeuvre

L'idée derrière Elemental Synergy est de crée un **environnement** où le joueur a le choix de choisir l'élément qu'ils préfèrent. Chaque élément, qu'il s'agisse de l'eau, du feu, de la terre ou de l'air est doté de ses propres attributs uniques, comme l'ambiance par exemple. Dans cette univers fantaisique, les joueurs parcours différents biomes comportant au moins un casse-tête, chaqu'un ayant leur propre thème élémentaire. Le but étant de compléter ces casses-têtes pour avancer dans l'histoire du jeu. L'élément que le joueur a choisi lui donne des outils uniques pour résoudre ces casse-têtes.

## Scénario et expérience recherchée

Dans un monde fantstique où les éléments (Terre, air, feu, eau) sont tous protégé par un **Gardien**. Mais suite à un événement mystérieux, l'équilibre de ces éléments sont instable et les Gardiens sont corrompu par une force obscure. Le joueur incarne un Gardien survivant qui doit restaurer l'harmonie. Le choix l'eau, le feu, la terre et l'air influencerait le style de jeu et les interactions.

Le joueur démarre le jeu en découvrant un univers où un ambiance correspondant à l'élément se met à jouer. Le paysage, le UI, respectent aussi le thème de ces éléments. Tout devant compléter le casse-tête d'une différente manière selon l'élément qu'il a choisit.

# Graphique

```mermaid
---
title: Mon graphique de mon scénarimage
---
graph TD;
  markdown["Démarrage du jeu"]--> menu(Menu principal)
  menu-->new["Nouvelle partie"];
  menu-- Partie déjà créé?-->load["Charger partie"];
  new-->gender(["Choisir Genre"]);
  gender-->male[/Homme/];
  gender-->female[\Femme\];
  female-->start["Début du jeu"];
  male-->start;
  start==>quest["Commencer première quête"];
  quest--->Element(["Choisi ton élément: Feu, Eau, Terre, Air"])
  Element-->air["Niveau #1 L'air"]
  air-->levelair("Trouver un moyen de retirer l'air toxique avec ton élément choisi")
  levelair--Si tu es un **homme** -->terre["Niveau #2 La terre"]
  terre-->levelearth("L'environnement est en feu, trouve un moyen d'éteindre de l'éteindre")
  levelair--Si tu es une **femme**-->eau["Niveau #3 L'eau"]
  eau-->levelwater("Les rivières du village sont gelée et il manque d'eau dans certaines rivières, trouve un moyen de rétablir ces rivières")
  terre<-->eau
  levelwater & levelearth-->feu["Niveau #4 Le feu"]
  feu-->levelfire("La ville est inondée! Trouve un moyen de mettre cet eau à sec")
  gameover-->menu
  levelair & levelearth & levelwater & levelfire --Égnime échoué-->gameover["Fin de la partie"]
  levelfire-->epilogue((("La balance entre les éléments a été restauré")))
  epilogue-->Ending{"Fin du jeu"}
  Ending--Recommencer partie?-->menu
  load-->start


  style female fill:#e497f2
  style male fill:#30c5f3
  style air fill: #E7F1F5
  style terre fill: #B07C57
  style eau fill: #005493
  style feu fill: #FF7500
  style menu fill: #ff7270, stroke: red, stroke-width: 5px
  linkStyle default stroke: blue 

```

# Conception

## Moodboard

![moodboard](img/Scénarimage.png)

## Technologie

La technologie qui sera utilisé:

- Unity pour le visuel.
- Reaper pour le son des éléments
- After Effect pour l'animation
