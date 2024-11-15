# Récapitulatif du chapitre

**Dernière mise à jour : avril 2024**

Bon travail ! Nous continuerons à travailler avec les objets dans le prochain chapitre. À bientôt !

### Récapitulatif du chapitre

- Vous ne pouvez pas utiliser la **syntaxe à points** lorsque la propriété que vous essayez de lire est **stockée dans une variable** ou le **résultat d'une expression dynamique**. 
  - Vous devez utiliser des **crochets** avec le nom de la variable à l'intérieur, comme par exemple : `[key]`.
  
- `object[key]` évalue d'abord l'expression `key`, puis lit la propriété en fonction du résultat.

- La méthode `Object.keys(obj)` renvoie un tableau de toutes les **clés** de l'objet `obj`.

- Si vous accédez à une propriété qui n'existe pas dans un objet, cela renverra **undefined**.

- Lorsque vous essayez d'accéder à une propriété ou d'appeler une méthode sur **undefined**, vous obtiendrez l'erreur : 
  - **Uncaught TypeError: Cannot read property 'X' of undefined**.

- Si vous voyez **[object Object]** dans votre console, cela signifie qu'un **objet** a été utilisé dans un contexte où une chaîne était attendue. La méthode `.toString()` a été appelée automatiquement sur l'objet.

- La méthode `Object.values()` renvoie un tableau des **valeurs** de l'objet.

- La méthode `Object.entries()` renvoie un tableau de tableaux représentant chaque paire **clé/valeur**.

Nous y reviendrons **Object.entries()** plus tard dans ce cours.