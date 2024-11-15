# Array `forEach`

L'itération de tableau est l'un des concepts les plus importants que vous utiliserez en JavaScript.

Disons que nous disposons d'un tableau de notes et que vous souhaitez effectuer une boucle (ou une itération) sur chaque élément de ce tableau. Voici comment procéder en JavaScript :

```javascript
const grades = [10, 8, 13];

grades.forEach(function (grade) {
  // Faites quelque chose avec chaque note
  console.log(grade);
});
```

💡 **Astuce** : Commencez toujours par un `console.log()` à l'intérieur de votre `.forEach` afin de visualiser le passage d'un élément à l'autre.

## Méthode `.forEach(callback)`

La méthode `.forEach(callback)` vous permet d'exécuter la fonction `callback` pour chaque élément de ce tableau. Les callbacks seront expliqués plus en détail dans le chapitre suivant. Pour l’instant, voici une définition de base.

Un **callback** est une fonction passée en paramètre à une autre fonction.
```