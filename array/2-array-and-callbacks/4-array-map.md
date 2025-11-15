
# Array Method `.map()`

## 🔹 Description

La méthode **`.map(callback)`** permet de **transformer un tableau en un autre**
en appliquant une fonction (*callback*) à **chaque élément** du tableau d’origine.

Elle ne modifie **jamais** le tableau original :
elle retourne **un nouveau tableau** contenant le résultat de chaque transformation.

---

## 🧠 Exemples simples

### Doublage de valeurs numériques
```js
const numbers = [4, 2, 5, 8];

const doubled = numbers.map(function (number) {
  return number * 2;
});

console.log(doubled); // [8, 4, 10, 16]
````

### Transformation de chaînes en majuscules

```js
const names = ["sam", "Alex"];

const upperNames = names.map(function (name) {
  return name.toUpperCase();
});

console.log(upperNames); // ["SAM", "ALEX"]
```

---

## 🧩 Règle importante

Le nouveau tableau retourné par `.map()` contient **autant d’éléments** que le tableau d’origine,
mais chaque élément a été **transformé** selon la fonction callback passée en argument.

---

## ⚠️ Attention

Si tu oublies le mot-clé `return` dans la fonction de rappel,
chaque appel retournera `undefined`.

```js
const doubled = numbers.map(function (number) {
  number * 2; // oubli du return ❌
});
console.log(doubled); // [undefined, undefined, undefined, undefined]
```

---

## 🔍 Syntaxe complète

```js
array.map((element, index, array) => {
  // transformation à appliquer
  return nouvelleValeur;
});
```

| Paramètre | Description                                        |
| --------- | -------------------------------------------------- |
| `element` | Valeur actuelle du tableau                         |
| `index`   | Position de l’élément dans le tableau (0, 1, 2, …) |
| `array`   | Le tableau complet sur lequel `.map()` est appelé  |

### Exemple :

```js
const fruits = ["pomme", "poire", "banane"];

const result = fruits.map((fruit, i) => `Fruit ${i + 1} : ${fruit}`);
console.log(result);
// ["Fruit 1 : pomme", "Fruit 2 : poire", "Fruit 3 : banane"]
```

---

## 🧠 Transformation d’objets

```js
const products = [
  { name: "Stylo", price: 2 },
  { name: "Cahier", price: 5 },
  { name: "Livre", price: 12 }
];

// Extraire uniquement les noms
const productNames = products.map(item => item.name);
console.log(productNames); // ["Stylo", "Cahier", "Livre"]

// Créer une copie avec remise de 10 %
const discounted = products.map(item => ({
  name: item.name,
  price: item.price * 0.9
}));
console.log(discounted);
// [
//   { name: "Stylo", price: 1.8 },
//   { name: "Cahier", price: 4.5 },
//   { name: "Livre", price: 10.8 }
// ]
```

---

## 🧩 Pourquoi `item.name` et pas `products.name` ?

`products` (au pluriel) représente **le tableau complet**,
tandis que `item` représente **chaque objet individuel** du tableau pendant l’itération.

| Tour | `item` contient                |
| :--: | ------------------------------ |
|   1  | `{ name: "Stylo", price: 2 }`  |
|   2  | `{ name: "Cahier", price: 5 }` |
|   3  | `{ name: "Livre", price: 12 }` |

C’est pourquoi on écrit **`item.name`** :
`item` désigne un seul objet, et `.name` sa propriété.
Écrire `products.name` reviendrait à chercher une propriété `name` sur le **tableau entier**, ce qui renverrait `undefined`.

---

## 💡 Astuce : le second paramètre `index`

Le paramètre `index` (souvent noté `i`) indique la **position actuelle** de l’élément.
Il est disponible dans toutes les méthodes d’itération (`map`, `forEach`, `filter`, `find`, etc.).

```js
const names = ["Emma", "Lucas", "Noah"];
const numbered = names.map((name, i) => `${i + 1}. ${name}`);
console.log(numbered); // ["1. Emma", "2. Lucas", "3. Noah"]
```

---

## 🧩 Signature commune des méthodes d’itération

Toutes les méthodes d’itération de tableau —
**`.map()`**, **`.forEach()`**, **`.filter()`**, **`.find()`**, **`.some()`**, **`.every()`**, etc. —
suivent la même **signature ECMAScript** pour leur fonction de rappel :

```js
callback(currentValue, index, array)
```

| Paramètre      | Type     | Description                                          |
| -------------- | -------- | ---------------------------------------------------- |
| `currentValue` | *any*    | Valeur de l’élément actuel du tableau                |
| `index`        | *number* | Position de l’élément dans le tableau                |
| `array`        | *Array*  | Le tableau complet sur lequel la méthode est appelée |

Cela signifie que tu peux accéder au **même trio de paramètres** dans toutes ces méthodes.

---

## 🧠 Exemple d’utilisation du troisième paramètre `array`

Le troisième paramètre donne accès au **tableau complet** pendant l’itération.
Tu peux l’utiliser pour effectuer des comparaisons ou des calculs globaux.

### Exemple 1 : accéder à l’élément suivant

```js
const letters = ["A", "B", "C", "D"];

const nextLetters = letters.map((letter, i, array) =>
  array[i + 1] ? `${letter} → ${array[i + 1]}` : `${letter} → (fin)`
);

console.log(nextLetters);
// ["A → B", "B → C", "C → D", "D → (fin)"]
```

💡 Ici, `array` permet d’accéder à d’autres éléments du même tableau à l’intérieur du callback.

---

## 🧮 Exemple pratique avec condition sur l’index

Trouver les indices des prix supérieurs à 50 € :

```js
const prices = [12, 30, 55, 42, 80];

const indexes = prices
  .map((price, i) => price > 50 ? i : -1)
  .filter(i => i !== -1);

console.log(indexes); // [2, 4]
```

---

## 🧭 En résumé

| Méthode      | Rôle                                                                     |
| ------------ | ------------------------------------------------------------------------ |
| `.map()`     | Transforme chaque élément d’un tableau et renvoie un **nouveau tableau** |


## ✅ Points clés à retenir

* `.map()` **ne modifie pas** le tableau original
* Le **nombre d’éléments** reste identique
* Toujours **retourner une valeur** dans la callback
* Les paramètres `(value, index, array)` sont **communs à toutes les méthodes d’itération**

---


