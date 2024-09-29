# Présentation d'une scénarisation d'un projet multimédia : Elemental Synergy

## Idée de l'oeuvre

L'idée derrière Elemental Synergy est de crée un **environnement** où le joueur a le choix de choisir l'élément qu'ils préfèrent, chaqu'un éléments auraient leur propre attribut différent.

## Scénario

Dans un monde fantstique où les éléments (Terre, air, feu, eau) sont tous protégé par un **Gardien**. Mais suite à un événement mystérieux, l'équilibre de ces éléments sont instable et les Gardiens sont corrompu par une force obscure. Le joueur incarne un Gardien survivant qui doit restaurer l'harmonie. Le choix l'eau, le feu, la terre et l'air influencerait le style de jeu et les interactions.

Le jeu étant constitué de 4 niveaux différents, dont ces niveaux représentront un égnigme pour chaque éléments.

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
  start-->quest["Commencer première quête"];
  quest-- Si tu es une femme-->Element(["Choisi ton élément: Feu, Eau, Terre, Air"])
  quest-- Si tu es un homme-->Element
  Quête#1-->Quête#2["La terre"]
  Quête#2-->Quête#3["L'eau"]
  Quête#3-->Quête#4["Le feu"]
  male-->start
  load-->start

  style female fill:#e497f2
  style male fill:#30c5f3
  style menu fill: #ff7270, stroke: red, stroke-width: 5px
  linkStyle default stroke: white

```

# Conception

## Moodboard

![moodboard](img/Scénarimage.png)

## Technologie

La technologie qui sera utilisé:

- Unity pour le visuel.
- Reaper pour le son des éléments
