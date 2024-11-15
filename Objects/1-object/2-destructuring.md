# Destructuring

L'affectation par décomposition consiste à créer des variables à partir des propriétés d'un objet ou des éléments d'un tableau. C'est un moyen d'**unpack** les propriétés que vous voulez.

## A. Destructuring Object Properties

Voici un exemple avec un objet utilisateur :

```javascript
const userObj = {
  userName: "Karl",
  age: 44,
  country: "Germany",
};
```

### Syntaxe de l'affectation par décomposition

```javascript
const { country, age, userName } = userObj;
```

Dans cet exemple, nous avons créé trois constantes `country`, `age` et `userName`, qui correspondent exactement aux propriétés de l'objet. Ces constantes ont pris la valeur des propriétés. Cela permet de définir des variables plus facilement.

- **Remarque :** L'ordre n'a pas d'importance et il n'est pas obligatoire de déstructurer toutes les propriétés de l'objet.

### Renommer les constantes

Vous pouvez également renommer les constantes issues de la déstructuration :

```javascript
const { userName: mainName, age: exactAge, country: origin } = userObj;
```

Ici, `mainName` prend la valeur de `userName`, `exactAge` celle de `age`, et `origin` celle de `country`.

### Valeurs par défaut

Vous pouvez aussi ajouter des valeurs par défaut si une propriété est absente de l'objet :

```javascript
const { country, sport = "football", beverage = "beer" } = userObj;
console.log(country, sport, beverage); // Germany football beer
```

- Si l'objet `userObj` ne contient pas de `sport`, il prendra la valeur par défaut "football".
- Si l'objet avait un `sport` défini (par exemple, `sport: "basketball"`), cette valeur serait utilisée.

### Combiner un nom différent et une valeur par défaut

```javascript
const { userName: mainName = "Hanz" } = userObj;
console.log(mainName); // Karl (car la valeur existe, sinon ça serait "Hanz")
```

### Déstructuration dans les paramètres d'une fonction

Il est possible de déstructurer directement dans les paramètres d'une fonction :

```javascript
const numbers = {
  num1: 50,
  num2: 40,
};

function foo({ num1, num2 }) {
  return num1 + num2;
}

console.log(foo(numbers)); // 90
```

Plutôt que d'utiliser `numbers.num1` et `numbers.num2`, nous avons fait de la déstructuration directement dans les paramètres.

### Exemple sans destructuring

```javascript
function foo(num1, num2) {
  return numbers.num1 + numbers.num2;
}

console.log(foo(numbers));
```

---

## B. Destructuring Arrays

Voici un exemple avec un tableau d'animaux :

```javascript
const animals = ["cat", "dog", "mouse", "lion"];
```

### Valeurs par défaut et ignorer des éléments

Vous pouvez ignorer des éléments du tableau et définir des valeurs par défaut de manière similaire à la déstructuration d'objets.

### Déstructurer le reste du tableau

Il est possible d'assigner le reste des éléments d'un tableau à une variable.

### Fonctionne aussi avec les strings

La déstructuration peut également fonctionner avec les chaînes de caractères. Cela permet de facilement accéder à certains caractères d'une string en les assignant à des variables.
```