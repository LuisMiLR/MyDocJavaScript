# Nullish Coalescing (Advanced)

**Dernière mise à jour en mars 2022**

La coalescence nulle peut être utilisée avec le **optional chaining** (chainage optionnel). 
L'utilisation principale ici est d'accéder en toute sécurité à une propriété qui pourrait être nulle tout en pouvant également définir par défaut une certaine valeur.

### Exemple :
```javascript
let name = undefined;
if (user.details && user.details.name && user.details.name.firstName) {
  name = user.details.name.firstName;
} else {
  name = "N/A";
}

// Refactorisé avec coalescence nulle et chaînage optionnel :
const Name = user.details?.name?.firstName ?? "N/A";
```

Il peut être déroutant de voir `?.` et `??` ensemble sur la même ligne, mais rappelez-vous qu'il s'agit d'opérateurs complètement différents. Si une partie de l'expression `user.details?.name?.firstName` court-circuite et retourne `undefined`, nous passons alors par défaut à la chaîne `"N/A"` avec l'opérateur `??`.

Auparavant, le chaînage facultatif nous permettait d'éviter une erreur en renvoyant `undefined`. Mais `undefined` n'est pas toujours utile, et parfois, il est préférable d'utiliser une valeur par défaut comme une chaîne vide ou une valeur spécifique. C'est là que la combinaison de la **fusion nulle** et du **chaînage optionnel** devient précieuse.

---

## null vs undefined

Il peut être difficile de comprendre pourquoi JavaScript a à la fois `null` et `undefined`. Voici une distinction pour vous aider à savoir quand utiliser l'un ou l'autre :

- `undefined` signifie que la propriété n'a pas encore été définie.
- `null` signifie que la propriété a été définie mais est vide.

### Exemple :
```javascript
const user = {
  id: 1,
  name: "Sam",
  age: null,
};

console.log(user.age); // null
console.log(user.birthday); // undefined
```

Dans cet exemple, `null` signifie que la propriété `age` a été définie, mais n'a pas encore de valeur, alors que la propriété `birthday` n'a pas été définie, donc elle renvoie `undefined`.

---

## Priorité des opérateurs

L’opérateur de **coalescence nulle** a une faible priorité. Cela signifie que lorsqu'il est utilisé avec d'autres opérateurs comme `+` ou `-` sans parenthèses, les autres opérateurs seront évalués en premier.

### Exemple :
```javascript
const uzer = {
  id: 1,
};

const result = 2 + uzer.age ?? 18;
console.log(result); // NaN
```

JavaScript évalue cette expression comme suit : `(2 + user.age) ?? 18` parce que l'opérateur `+` a une priorité plus élevée que `??`. Pour éviter ce genre de problème, placez l'expression avec `??` entre parenthèses :

```javascript
const result = 2 + (user.age ?? 18);
console.log(result); // 20
```

---

## Résumé

- La coalescence nulle `??` peut être utilisée avec un **chaînage optionnel** pour accéder en toute sécurité à une propriété qui pourrait être nulle tout en définissant une valeur par défaut.
- `undefined` signifie que la propriété n'a pas encore été définie, tandis que `null` signifie que la propriété a été définie mais est vide.
- La coalescence nulle `??` fait un **court-circuit** si le côté gauche renvoie une valeur non nulle, et n'exécutera pas le côté droit.
- Utilisez des parenthèses avec `??` pour éviter les erreurs lorsque d'autres opérateurs sont utilisés dans la même expression.
```

