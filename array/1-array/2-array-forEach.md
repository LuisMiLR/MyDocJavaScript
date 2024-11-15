# forEach (pour chaque)

La méthode `forEach()` est utilisée pour parcourir chaque élément d'un tableau.

L'itération de tableau est l'un des concepts les plus importants que vous utiliserez en JavaScript.

Disons que nous avons un tableau de notes et que vous souhaitez effectuer une boucle (ou une itération) sur chaque élément de ce tableau. Voici comment procéder en JavaScript :

```javascript
const grades = [10, 8, 13];

grades.forEach(function (grade) {
  // Faites quelque chose avec chaque note
  console.log(grade);
});
```

Ou en utilisant la syntaxe simplifiée avec une fonction fléchée :

```javascript
grades.forEach((grade) => {
  console.log(grade);
});
```

💡 **Astuce** : Commencez toujours par un `console.log()` à l'intérieur de votre `.forEach` pour visualiser le passage d'un élément à l'autre dans le tableau.

## Comment fonctionne `.forEach(callback)`

La méthode `.forEach(callback)` vous permet d'exécuter une fonction de rappel pour chaque élément du tableau. Les callbacks seront expliqués plus en détail dans le chapitre suivant, mais voici une définition de base :

Un **callback** est une définition de fonction passée en argument à une autre fonction.

Dans l'exemple ci-dessus, la fonction de rappel est :

```javascript
function(grade) {
  console.log(grade);
}
```

Cette fonction reçoit un paramètre `grade` et affiche sa valeur dans la console. Cette définition de fonction est passée en argument à la méthode `.forEach()` :

```javascript
grades.forEach(insert_callback_here);
```

Lorsque vous combinez le tableau et la fonction de rappel, vous obtenez :

```javascript
grades.forEach(function (grade) {
  console.log(grade);
});
```

Cela affichera chaque note du tableau dans la console. La méthode `.forEach()` appelle automatiquement la fonction de rappel pour chaque élément du tableau. Vous verrez donc :

```
10
8
13
```

Vous pouvez visualiser les appels de fonction comme suit :

```javascript
// C'est le rappel
function(grade) {
  console.log(grade);
}

// Appel du rappel avec grade = 10 (grades[0])
console.log(grade); // affichera 10

// Appel du rappel avec grade = 8 (grades[1])
console.log(grade); // affichera 8

// Appel du rappel avec grade = 13 (grades[2])
console.log(grade); // affichera 13
```

Remarquez comment la définition de fonction est appelée pour chaque élément du tableau !

Mais qui l'appelle et fournit les différentes valeurs ? Eh bien, c'est JavaScript ! Vous fournissez le rappel (la définition de la fonction) et le transmettez à `.forEach()`, et JavaScript fait le reste !

Voici un exemple avec un nom de variable générique (à éviter) :

```javascript
grades.forEach(function (x) {
  console.log(x);
});
```

Cela fonctionne car JavaScript associe le premier paramètre (`x`) à chaque élément du tableau lorsqu'il appelle la fonction de rappel.

Cependant, il est préférable d'utiliser des noms de variables clairs pour une meilleure lisibilité.

## Résumé

- `.forEach(callback)` parcourt chaque élément d'un tableau.
- Un **callback** est une définition de fonction passée en argument à une autre fonction.
- Commencez toujours par un `console.log()` dans `.forEach()` pour visualiser le passage d'un tableau à un élément du tableau (vous pourrez l'ignorer une fois que vous vous y serez habitué).
- La méthode `.forEach()` prend la définition de votre fonction et l'appelle pour chaque élément du tableau. Chaque fois que le rappel est appelé, le premier paramètre représente l'élément du tableau correspondant.

## Récapitulatif du chapitre

- `const data = [1, 2, 3]` est un tableau contenant 3 nombres.
- `array.length` renvoie le nombre d'éléments dans un tableau.
- `array.push(x)` permet d'ajouter l'élément `x` à la fin du tableau.
- `array.push(x)` renvoie la nouvelle longueur du tableau.
- Les tableaux définis avec `const` ne sont pas immuables : vous pouvez modifier les éléments qu'ils contiennent, mais vous ne pouvez pas réassigner le tableau à une autre valeur.
- `.forEach(callback)` parcourt chaque élément d'un tableau.
- Nommez vos tableaux au pluriel et l'élément du tableau (à l'intérieur du `.forEach()`) au singulier.
- Assurez-vous de bien placer `return` dans une fonction contenant un `.forEach()`.
- La méthode `forEach()` ne retourne pas de nouveau tableau, elle est utilisée pour effectuer des actions sur chaque élément sans modifier le tableau d'origine.
```

