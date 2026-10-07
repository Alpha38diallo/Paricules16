# Animation de particules

>ctrl+shift+v pour afficher ce fichier markdown sur VS Code

### Objectif du projet 🎯

Ce projet consiste à créer une **animation de particules en JavaScript**.
Pour cela, il faut utiliser **l'élément \<canvas>** qui permet de **dessiner** sur une page en JavaScript.<br><br>
On l'associe à la méthode **requestAnimationFrame(callback)**, qui permet d'appeler une fonction de rappel au mieux **60 fois par seconde**, permettant ainsi de déplacer les éléments du \<canvas> et de donner une **illusion de mouvement.**<br><br>
C'est **normal d'être intimidé** par cet élément et le rendu d'éléments géométriques lorsqu'on rencontre tout ça pour la première fois, mais l'utilisation du \<canvas> ouvre la voie vers le monde des animations 2D et 3D, ce qui permet de **réaliser des projets fantastiques.**

### Critères à respecter 📋
- Performance  
- Maintenabilité  
- Code simple et facile à comprendre  
- Flexibilité  
- Compatibilité  
- Accessibilité

### Compétences développées 💪

- Manipuler le \<canvas> en JavaScript
- Faire de la géométrie en JavaScript
- Créer une animation JavaScript stylée
- Utiliser une classe 


### A. Coder une interface basique
> Au début de chaque projet, codez seulement une interface basique du projet à réaliser, en ajoutant un peu de style si besoin est. <br>
> Puis codez les fonctionnalités JavaScript.

### B. Fonctionnalités JavaScript à coder pour ce projet

1. Si c’est votre **première manipulation du canvas**, consulter la documentation MDN et essayer d’afficher une forme simple (rectangle, cercle, trait).
2. Sinon, commencer par **créer une classe** qui va gérer les particules. Elle contiendra la **taille, la position, la direction et la couleur** de chacune d'entre elles.
3. Créer une fonction qui permet **d'initialiser le nombre de particules** dans un tableau en leur donnant à chacune des valeurs aléatoires de taille, position et direction.
4. Créer une fonction **qui anime le tout en permanence à l'aide de "requestAnimationFrame(cb)"**. L'animation se base sur le mouvement de chacun des points sur le \<canvas> à chaque appel de la callback.
5. Créer une fonction qui permet de **connecter les points** en fonction de leur position. 
Cette fonction dessine **l'hypoténuse** entre chaque point si cette dernière est inférieure à 135 pixels.
1. Gérer le **responsive** en **relançant** l'animation du canvas lors du **redimensionnement** de la fenêtre.

### C. Finir l'interface. 🎨

Une fois les fonctionnalités JavaScript codées, **ajouter le style manquant** afin de finir **l'implémentation de l'interface**.
