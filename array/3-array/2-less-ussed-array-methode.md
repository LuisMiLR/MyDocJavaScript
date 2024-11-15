# Lesser-Known Array Methods

_Dernière mise à jour avril 2024_

Dans cette leçon, nous allons examiner certaines méthodes de tableau moins utilisées :

## `Array.every(callback)`

La méthode `.every(callback)` renvoie une valeur `true` lorsque chaque élément du tableau satisfait la condition fournie dans le rappel (callback).

Voici un exemple :

```javascript
const numbers = [15, 10, 20];

const allAbove10 = numbers.every(number => number >= 10); // true
const allAbove15 = numbers.every(number => number >= 15); // false
```

Notez que `allAbove10` est évalué à `true` car chaque élément du tableau `numbers` a renvoyé `true` pour la condition `number >= 10`. Ainsi, le rappel `number => number >= 10` est appelé pour chaque élément du tableau. Si tous les rappels renvoient `true`, la méthode `.every()` renverra `true`. Sinon, elle renverra `false` (si au moins un rappel renvoie `false`).

C'est pourquoi `allAbove15` est évalué à `false`, car tous les éléments du tableau `numbers` ne satisfont pas la condition `number >= 15`. L'un des éléments (`number = 10`) a renvoyé `false`. Ainsi, la méthode `.every()` renvoie `false`.

[MDN Array.every()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/every)

## `Array.some(callback)`

De même, la méthode `.some(callback)` renvoie une valeur `true` lorsqu'au moins un élément du tableau satisfait la condition fournie dans le rappel (callback).

```javascript
const numbers = [15, 10, 20];

const someOver18 = numbers.some(number => number >= 18); // true
const someUnder10 = numbers.some(number => number < 10); // false
```

Notez que `someOver18` est évalué à `true` car au moins un des éléments du tableau `numbers` a renvoyé `true` pour la condition `number >= 18`. Tandis que `someUnder10` est évalué à `false` car aucun des éléments du tableau `numbers` n'a renvoyé `true`.

[MDN Array.some()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/some)

## Résumé

- La méthode `.every(callback)` renvoie une valeur `true` lorsque chaque élément du tableau satisfait la condition fournie dans le rappel.
- La méthode `.some(callback)` renvoie une valeur `true` lorsqu'au moins un élément du tableau satisfait la condition fournie dans le rappel.
```

