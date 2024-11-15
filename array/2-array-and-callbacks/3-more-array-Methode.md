# More Array Methods

## Array `map`

La méthode `.map(callback)` permet de transformer un tableau en un autre.

Par exemple :

- `[4, 2, 5, 8]` est transformé en `[8, 4, 10, 16]` en doublant chaque élément du tableau d'origine.
- `["sam", "Alex"]` est transformé en `["SAM", "ALEX"]` en mettant en majuscule chaque élément du tableau d'origine.

Notez que vous obtenez toujours un tableau contenant le même nombre d'éléments que le tableau d'origine, mais chaque élément a probablement subi une transformation.

Dans le premier exemple, la transformation consiste à multiplier chaque nombre par 2.  
Dans le deuxième exemple, la transformation consiste à appliquer `.toUpperCase()` à chaque élément.

Voyons comment mettre en œuvre ces transformations :

```javascript
const numbers = [4, 2, 5, 8];

const doubled = numbers.map(function (number) {
  return number * 2;
});
console.log(doubled); // [8, 4, 10, 16]
```

Et pour les majuscules :

```javascript
const names = ["sam", "Alex"];

const upperNames = names.map(function (name) {
  return name.toUpperCase();
});
```

⚠️ **Attention** : Si vous oubliez le mot-clé `return` dans la fonction de rappel, vous obtiendrez `[undefined, undefined]`, car chaque élément renverra `undefined` au lieu de la transformation attendue.

---

## Array `includes(item)`

La méthode `.includes(item)` est l'une des méthodes les plus simples. Elle vérifie si un élément existe dans le tableau et renvoie `true` si c'est le cas, et `false` sinon. Voici un exemple :

```javascript
const groceries = ["Apple", "Peach", "Tomato"];

groceries.includes("Tomato"); // true
groceries.includes("Bread"); // false
```

---

## Array `join(glue)`

Lorsque vous affichez un tableau sur une page Web, il est automatiquement converti en chaîne. JavaScript invoque la méthode `.toString()` qui renvoie une chaîne d'éléments séparés par des virgules.

```javascript
const groceriess = ["Apple", "Peach", "Tomato"];
groceriess.toString(); // "Apple,Peach,Tomato"
```

Cependant, si vous souhaitez personnaliser la "colle" utilisée entre les éléments, vous pouvez utiliser la méthode `.join(glue)` :

```javascript
const groceriez = ["Apple", "Peach", "Tomato"];
groceriez.join("; "); // "Apple; Peach; Tomato"
groceriez.join(" . "); // "Apple . Peach . Tomato"
```

---

## Résumé

- La méthode `.map(callback)` permet de transformer un tableau en un autre.
- La méthode `.includes(item)` renvoie `true` si l'élément existe dans le tableau et `false` sinon.
- La méthode `.join(glue)` renvoie une chaîne d'éléments du tableau séparés par la "colle" spécifiée.
```

