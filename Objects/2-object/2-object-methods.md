# Object Methods

## `Object.keys(obj)`

La méthode `Object.keys(obj)` renvoie un tableau contenant toutes les clés de l'objet fourni en paramètre (`obj`).

`Object` (avec une majuscule) est une variable globale disponible en JavaScript, similaire à `Number` (par exemple, `Number.parseInt()`). Cette variable globale possède des méthodes utiles pour les objets, comme `.keys()`. 

### Exemple :

```javascript
const user = {
  id: 1,
  name: "Sam Green",
  age: 20,
};

const keys2 = Object.keys(user);
console.log(keys2); // ["id", "name", "age"]
```

Comme `Object.keys()` renvoie un tableau, vous pouvez l'utiliser pour parcourir chaque clé de l'objet et obtenir sa valeur de manière dynamique :

```javascript
const settings = {
  theme: "Dark",
  version: "2.4.1",
  beta: false,
};

const keys = Object.keys(settings);
keys.forEach((key) => {
  console.log(settings[key]);
});
```

### Résultat :

```
"Dark"
"2.4.1"
false
```

---

## `Object.values()`

La méthode `Object.values()` renvoie un tableau contenant les valeurs des propriétés de l'objet.

### Exemple :

```javascript
const user1 = {
  id: 1,
  name: "Sam Green",
  age: 20,
};

const values = Object.values(user1);
console.log(values); // [1, "Sam Green", 20]
```

---

## `Object.entries()`

La méthode `Object.entries()` renvoie un tableau de tableaux représentant chaque paire clé/valeur de l'objet.

### Exemple :

```javascript
const user2 = {
  id: 1,
  name: "Sam Green",
  age: 20,
};

const entries = Object.entries(user2);
console.log(entries); 
```

### Résultat :

```javascript
[
  ["id", 1],
  ["name", "Sam Green"],
  ["age", 20],
];
```

C'est particulièrement utile en combinaison avec la déstructuration de tableaux et `for..in`.

---

## Vérifier si une clé existe avec `in`

Vous pouvez vérifier si une clé existe dans un objet en utilisant l'opérateur `in`. Il renvoie `true` si la propriété spécifiée est trouvée dans l'objet.

### Exemple :

```javascript
const person = {
  name: "Alex",
  age: 35,
};

if ("name" in person) {
  console.log(person.name);
}
```

*Note : le nom de la propriété doit être une chaîne de caractères.*

---

## Gestion des erreurs d'accès à une propriété

Lorsque vous accédez à une propriété qui n'existe pas sur un objet, JavaScript renvoie `undefined`, mais cela peut conduire à des erreurs.

### Exemple d'erreur :

```javascript
const person = {
  id: 1,
  firstName: "Sam",
};

person.age.toUpperCase(); // ❌ Uncaught TypeError: Cannot read property 'toUpperCase' of undefined
```

Cela se produit parce que vous essayez d'appeler une méthode sur une valeur `undefined`.

---

## `[object Object]`

Lorsque vous voyez `[object Object]`, cela signifie que la méthode `.toString()` a été automatiquement appelée sur un objet. Cela se produit souvent lors de l'utilisation de `console.log()` sur des objets.

---

## Object Shorthand

Une fonctionnalité intéressante de JavaScript est le raccourci d'objet. Si vous avez une variable `age` et que vous souhaitez créer un objet avec une clé `age` et sa valeur, vous pouvez simplifier votre code.

### Exemple :

```javascript
const age = 18;
const person = {
    name: "John",
    age
};
```

Ceci est équivalent à écrire `age: age`. Si le nom de la variable et le nom de la clé sont les mêmes, vous pouvez omettre la deuxième partie.

---

## Astuce de Débogage avec Object Shorthand

Le raccourci d'objet peut être utilisé comme une astuce de débogage. Au lieu de faire plusieurs `console.log()`, vous pouvez envelopper chaque variable dans des accolades pour voir clairement à quoi elle correspond.

### Exemple :

```javascript
const sum2 = (a, b) => {
  console.log({ a }); // {a: 1}
  console.log({ b }); // {b: 3}
  let total = a + b;
  console.log({ total }); // {total: 4}
  return total;
};

// Sample usage
sum2(1, 3);
```

Cela permet de voir facilement quelle valeur est associée à quelle variable.

```

