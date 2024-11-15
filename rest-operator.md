# 1. Rest Operator

Les paramètres du **rest operator** permettent d'accepter un nombre indéfini d'arguments rendus disponibles sous forme d'un tableau.

### Exemple de fonction avec rest operator :

```javascript
function concatenation(...strings) {
  console.log(strings);
  return strings.reduce((acc, cur) => acc + cur);
}

console.log(concatenation("Je ", "suis ", "heureux."));
```

Dans cet exemple, `...strings` rassemble tous les arguments passés à la fonction `concatenation()` dans un tableau appelé `strings`. Je peux ensuite manipuler `strings` comme un tableau ordinaire.

### Utilisation avec les tableaux

Vous pouvez également utiliser le rest operator pour extraire une partie d'un tableau.

```javascript
const numbers = [1, 2, 3, 4, 5];

const [first, second, ...rest] = numbers;

console.log(first);  // Output: 1
console.log(second); // Output: 2
console.log(rest);   // Output: [3, 4, 5]
```

Dans cet exemple, les variables `first` et `second` obtiennent les deux premiers éléments du tableau `numbers`, tandis que le rest operator `...rest` rassemble tous les éléments restants du tableau dans la variable `rest`.

### Utilisation avec les paramètres de déstructuration

Vous pouvez également utiliser le rest operator avec la déstructuration pour extraire certaines propriétés d'un objet dans des variables distinctes, tout en rassemblant les propriétés restantes dans une autre variable.

```javascript
const person = {
  name: "John",
  age: 30,
  country: "USA",
  profession: "Developer",
};

const { name, age, ...others } = person;

console.log(name);    // Output: 'John'
console.log(age);     // Output: 30
console.log(others);  // Output: { country: 'USA', profession: 'Developer' }
```

Dans cet exemple, les variables `name` et `age` obtiennent les propriétés `name` et `age` de l'objet `person`, tandis que le rest operator `...others` rassemble toutes les autres propriétés dans un objet appelé `others`.

---

# 2. Les Paramètres Par Défaut

Les **paramètres par défaut** permettent de définir une valeur par défaut si un argument correspondant au paramètre en question n'est pas fourni.

### Exemple d'utilisation des paramètres par défaut :

```javascript
function welcoming(userName = "visiteur") {
  return `Bienvenue, ${userName}.`;
}

console.log(welcoming("Paul"));   // Output: 'Bienvenue, Paul.'
console.log(welcoming("Sara"));   // Output: 'Bienvenue, Sara.'
console.log(welcoming());         // Output: 'Bienvenue, visiteur.'
```

Dans cet exemple, si aucun nom d'utilisateur n'est fourni à la fonction `welcoming`, elle utilisera la valeur par défaut `"visiteur"`.
---
