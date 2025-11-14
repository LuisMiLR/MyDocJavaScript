# Method of Array

On peut accéder à un élément d'un tableau :

```javascript
const vegetables = [
  "carrot",
  "broccoli",
  "pepper",
  "cabbage",
  "zucchini",
  "onion",
  "salad",
  "cauliflower",
];
console.log(vegetables[0]); // affichera "carrot"
```

On peut également consulter un élément avec la méthode `.at()`, particulièrement utile pour lire à partir de la fin, par exemple : `.at(-2)`.

On peut ajouter un élément au tableau de cette manière :

```javascript
vegetables[8] = "leek";
```

## Les méthodes liées aux arrays

### `Array.push()`

Pour ajouter un élément à la fin d'un tableau :

```javascript
const colors = ["red", "blue", "orange", "yellow", "white", "grey", "purple"];
colors.push("green"); // on ajoute "green" à la fin du tableau
```

### `Array.unshift()`

Pour ajouter un élément au début du tableau :

```javascript
colors.unshift("green"); // on ajoute "green" au début du tableau
```

### `Array.pop()`

Pour supprimer un élément à la fin du tableau :

```javascript
colors.pop();
```

### `Array.shift()`

Pour supprimer un élément au début du tableau :

```javascript
colors.shift();
```

### `Array.indexOf()`

Pour connaître la position d'un élément dans un tableau :

```javascript
const colorss = ["pink", "black", "salmon", "gold"];
console.log(colorss.indexOf("pink")); // affichera 0 car "pink" est à la position 0 dans le tableau
```

Si l'élément recherché ne se trouve pas dans le tableau, la méthode `.indexOf()` renvoie `-1`.

### `Array.join()`

Pour convertir un tableau en chaîne de caractères :

```javascript
const colorz = ["pink", "black", "salmon", "gold"];
console.log(colorz.join()); 
// Le terminal affichera : "pink,black,salmon,gold"
```

## Tableaux et `const`

Même si la variable a été définie avec `const`, nous pouvons y insérer de nouvelles données. Cela signifie que la variable ne peut être réaffectée qu'une seule fois, mais son contenu peut changer.

L'avantage de déclarer un tableau avec `const` est que celui-ci restera toujours un tableau, permettant d'appeler en toute sécurité des méthodes liées aux arrays, même si le contenu du tableau peut changer.

```javascript
const numbers = []; // commence avec un tableau vide
numbers.push(10); // retourne 1 (nouvelle longueur du tableau)
console.log(numbers); // [10]
numbers.push(20); // retourne 2 (nouvelle longueur du tableau)
console.log(numbers); // [10, 20]
```

## `Array.every(callback)`

La méthode `.every(callback)` renvoie `true` lorsque chaque élément du tableau satisfait à la condition fournie dans le rappel.

Voici un exemple :

```javascript
const numberzs = [15, 10, 20];

const allAbove10 = numberzs.every((number) => number >= 10); // true
const allAbove15 = numberzs.every((number) => number >= 15); // false
```

Remarquez comment `allAbove10` est évalué à `true` car chaque élément du tableau `numberzs` satisfait la condition `number >= 10`. Si tous les rappels renvoient `true`, la méthode `.every()` renverra `true`. Sinon, elle renverra `false`.

Dans cet exemple, `allAbove15` est évalué à `false` car tous les éléments du tableau ne satisfont pas la condition `number >= 15` (exemple : `number = 10`).

## `Array.some(callback)`

De même, la méthode `.some(callback)` renvoie `true` lorsqu'au moins un élément du tableau satisfait à la condition fournie dans le rappel.

```javascript
const numberss = [15, 10, 20];

const someOver18 = numberss.some((number) => number >= 18); // true
const someUnder10 = numberss.some((number) => number < 10); // false
```

Remarquez comment `someOver18` est évalué à `true` car au moins un des éléments du tableau satisfait la condition `number >= 18`, tandis que `someUnder10` est évalué à `false` car aucun élément ne satisfait la condition `number < 10`.

## array.from() 

Array.from() crée un nouveau tableau à partir de n’importe quel objet itérable (string, Set, Map…)

n’importe quel objet ressemblant à un tableau (array-like)
ex : arguments, nodeList, { length: 3 }

Et en plus, tu peux lui fournir une fonction de transformation, un peu comme map().

✅ 2. Syntaxe
Array.from(source, mapFunction?, thisArg?)

Où :

source = ce que tu veux transformer en tableau

mapFunction = (optionnel) transformation appliquée à chaque élément

thisArg = (optionnel) valeur du this dans la callback


```javascript
const a = [,2, ,4]
a.map(x => x)
// [ , 2, , 4 ]  → trous conservés
```
avec array.from() va lire toute les ocurences contrairement a map()

```javascript
const a = [, 2, ,4]
const notNull = Array.from(a,x => x ?? 0)
console.log(notNull) // [0, 2, 0, 4] → TROUS remplacés
```
✅ Quand préférer Array.from() plutôt que map() ?
Quand l’entrée n’est pas un tableau :

une string
un Set
un NodeList
un objet avec { length: n }
un tableau avec des trous (Array.from ne les ignore pas)

Sinon, pour des tableaux normaux → .map() suffit très bien.

## Résumé

- La méthode `.every(callback)` renvoie `true` lorsque chaque élément du tableau satisfait à la condition fournie dans le rappel.
- La méthode `.some(callback)` renvoie `true` lorsqu'au moins un élément du tableau satisfait à la condition fournie dans le rappel.
```

