# Nullish Coalescing

**Dernière mise à jour en mars 2022**

L'opérateur de **Nullish Coalescing** (fusion nul) `??` est un nouvel opérateur introduit dans JavaScript avec la spécification **ECMAScript 2020 (ES11)**, qui a été finalisée en juin 2020.

C'était l'une des nouvelles fonctionnalités ajoutées pour améliorer la gestion des valeurs `null` et `undefined`, en particulier pour éviter les comportements indésirables des opérateurs plus anciens comme `||` (OR) avec les valeurs "falsy".

Il permet de définir par défaut une certaine valeur lorsque le côté gauche est une valeur nulle.

Il retourne la valeur de droite uniquement si la valeur de gauche est `null` ou `undefined` (les autres valeurs "falsy" ne sont pas prises en compte). Cela peut être utile pour fournir des valeurs par défaut.

Une **Nullish value** (valeur nulle) est une valeur qui est soit `null` soit `undefined`.

### Exemple :
```javascript
const getName = (name) => {
  return name ?? "N/A";
};

console.log(getName("Sam")); // "Sam"
console.log(getName(undefined)); // "N/A"
console.log(getName(null)); // "N/A"
```

Remarquez comment lorsque `name` est une valeur nulle (soit `null` ou `undefined`), alors le côté droit de l'opérateur est exécuté. Dans ce cas, "N/A".

Cet opérateur est utile pour éviter d'afficher des `undefined` ou `null` vers l'interface utilisateur, qui sont souvent signes de bugs.

Dans la mesure du possible, si vous pouvez fournir une valeur par défaut, vous pouvez utiliser l'opérateur de nullish coalescing `??` pour afficher cette valeur par défaut.

### Exemple :
```javascript
let user;
alert(user ?? "Anonymous"); // Anonymous (user est undefined)

let uzer = "John";
alert(uzer ?? "Anonymous"); // John (user n'est pas null/undefined)
```

### Exemples courants :
- Afficher une chaîne vide `""` au lieu de `undefined` ou `null`.
- Affichage d'une chaîne comme `"Deleted user"` au lieu d'une valeur nulle (`undefined` ou `null`).
- Affichage `"N/A"` (non applicable) au lieu d'une valeur nulle.

---

## Short Circuit

L'opérateur **nullish coalescing** fera un **court-circuit** si le côté gauche renvoie une valeur non nulle. Cela signifie qu'il n'exécutera pas le côté droit.

### Exemple :
```javascript
const getPlaceholder = () => {
  console.log("getPlaceholder called");
  return "N/A";
};

const sayHello = (name) => {
  return `Hello ${name ?? getPlaceholder()}`;
};

console.log(sayHello("Sam")); // "Hello Sam"
```

Dans cet exemple, comme `name` est une valeur non nulle, le `name ?? getPlaceholder()` court-circuite, donc la fonction `getPlaceholder()` ne s'exécute pas. Vous ne verrez donc rien dans la console. Si `name` est `undefined`, la fonction s'exécutera.

---

## Variable définie

Semblable au **chaînage optionnel**, vous ne pouvez utiliser la **fusion nulle** que lorsque la variable est définie. Cela signifie que la variable à gauche de l'opérateur doit être définie.

---

## Résumé

- L'opérateur **nullish coalescing** `??` est un nouvel opérateur introduit dans JavaScript qui permet de définir une valeur par défaut si la valeur à gauche est `null` ou `undefined`.
- Une **valeur nulle** est soit `null` soit `undefined`.
- L'opérateur fera un **court-circuit** si la valeur à gauche n'est pas nulle, empêchant l'exécution du côté droit.
- Vous ne pouvez utiliser la fusion nulle que lorsque la variable est **définie**.
```
