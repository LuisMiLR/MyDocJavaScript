# Array `find`

La méthode `.find()` est similaire à `.filter()` dans son fonctionnement, mais avec une différence clé.

Commençons par un exemple avec un tableau de chaînes :

```javascript
const names = ["Sam", "Alex", "Charlie"];

const result = names.find(function (name) {
  return name === "Alex";
});
console.log(result); // "Alex"
```

Lorsque vous appelez la méthode `.find(callback)` sur un tableau, elle renvoie le premier élément qui correspond à la condition que vous spécifiez. Si aucun élément n'est trouvé, elle renvoie `undefined`.

Dans l'exemple ci-dessus, la condition spécifiée est que `name` soit égal à `"Alex"`. La méthode `.find(callback)` appellera le callback que vous avez fourni pour chaque élément du tableau jusqu'à ce que l'un des rappels renvoie `true`. Lorsque cela se produit, elle cesse d'appeler les rappels restants et vous renvoie l'élément pour lequel le rappel a renvoyé `true`.

Dans l'exemple :

```javascript
function (name) {
  return name === "Alex";
}
```

- La méthode est appelée avec `name = "Sam"` (premier élément du tableau), et elle renvoie `false`.
- Ensuite, elle est appelée avec `name = "Alex"`, et cette fois, elle renvoie `true`.

À ce stade, la méthode `.find()` s'arrête et renvoie `"Alex"`.

Même s'il existe plusieurs éléments qui satisfont à la condition, la méthode `.find()` s'arrête au premier élément qui correspond à la condition.

## `.filter()` VS `.find()`

Quelle est la différence entre `.filter()` et `.find()` ?

- La méthode `.filter()` renvoie toujours un tableau.
- La méthode `.find()` renvoie le premier élément du tableau qui correspond à la condition de rappel ou `undefined`.

Voici quelques exemples :

```javascript
const numbers = [9, 5, 14, 3, 11];

// .filter() renvoie toujours un tableau
numbers.filter(function (number) {
  return number >= 12;
}); // [14]

// .find() renvoie le premier élément qui correspond à la condition ou undefined
numbers.find(function (number) {
  return number >= 12;
}); // 14
```

Remarquez comment `.filter()` renvoie un tableau, même s'il n'y a qu'un seul élément qui correspond à votre condition. En revanche, la méthode `.find()` renverra le premier élément qui correspond à la condition.

- `.filter()` renvoie toujours un tableau, même s'il n'y a aucun élément qui correspond à la condition.
- `.find()` peut renvoyer `undefined` si aucun élément ne correspond à la condition.

Voici un exemple où aucun élément ne satisfait à la condition :

```javascript
const numberss = [9, 5, 14, 3, 11];

// .filter() renvoie toujours un tableau (même vide)
numberss.filter(function (number) {
  return number >= 15;
}); // []

// .find() renvoie le premier élément correspondant ou undefined
numberss.find(function (number) {
  return number >= 15;
}); // undefined
```

Remarquez comment `.filter()` renvoie un tableau vide et `.find()` renvoie `undefined`. Vous devrez peut-être envelopper le résultat de `.find()` dans une condition `if` pour éviter des erreurs inattendues si vous essayez d'appeler une méthode sur son résultat.

## Résumé

- La méthode `.find()` renvoie le premier élément qui correspond à la condition que vous spécifiez. Si aucun élément n'est trouvé, elle renvoie `undefined`.
- La méthode `.filter()` renvoie toujours un tableau, même s'il est vide.
```

