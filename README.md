# Scénariser l'interactivité


## Idée
Mon idée de crée un __environnement__ où le joueur a le choix de choisir son *genre*

## Moodboard

## Technologie

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
  female-->start["Début du jeu"]
  male-->start
  load-->start
  style female fill:#e497f2
  style male fill:#30c5f3
  style menu fill: #ff7270, stroke: red, stroke-width: 5px 
```

