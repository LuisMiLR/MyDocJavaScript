# Optional Chaining (Advanced)

Dans cette leçon, nous apprendrons comment utiliser le **Optional Chaining** pour accéder aux tableaux et appeler des fonctions.

## Utilisation du Optional Chaining avec des tableaux

En supposant le code ci-dessous, où la clé `temperatures` pourrait être `undefined` :

```javascript
const data = {
  temperatures: [-3, 14, 4],
};

let firstValue = undefined;
if (data.temperatures) {
  firstValue = data.temperatures[0];
}
```

Nous pouvons le refactoriser en :

```javascript
const firstValue = data.temperatures?.[0];
```

Remarquez comment nous avons utilisé `?.` devant `[0]` pour accéder au premier élément du tableau. L'avantage du **Optional Chaining** ici est que si `data.temperatures` est `null` ou `undefined`, votre code ne sera pas interrompu. Il court-circuitera et renverra `undefined`.

## Utilisation du Optional Chaining avec des fonctions

De même, nous pouvons utiliser le **Optional Chaining** pour appeler des fonctions en utilisant l'opérateur `?.`. Voici l'exemple avant le chaînage optionnel :

```javascript
const person = {
  age: 43,
  name: "Sam",
};

let upperCasedName = person.name; // might be undefined
if (person.name) {
  upperCasedName = person.name.toUpperCase();
}
```

Nous pouvons refactoriser en :

```javascript
const upperCasedName = person.name?.toUpperCase();
```

Cela n'appellera la méthode `.toUpperCase()` que si `person.name` n'est pas `null` ou `undefined`. Si `person.name` est `null` ou `undefined`, la fonction retournera simplement `undefined`.

## N'abusez pas du Optional Chaining

Bien que pratique, vous ne devriez pas abuser du **Optional Chaining**. Une utilisation excessive peut entraîner des bugs inattendus et réduire la qualité du code.

Par exemple, dans ce code :

```javascript
const sum = (values) => {
  return values?.[0] + values?.[1];
};

sum([2, 3]); // 5
sum([]); // NaN
```

Même si le code ne se casse pas, `sum([])` retourne `NaN`, ce qui pourrait poser problème plus tard. Il est préférable d'ajouter une condition pour vérifier si le tableau a deux valeurs.

## Optional Chaining pour l'affectation

Le **Optional Chaining** ne peut pas être utilisé pour l’affectation. Il est utilisé uniquement pour la lecture. Par exemple :

```javascript
const settings = {};

// ❌ Syntax Error
settings?.theme = "dark";
```

Au lieu de cela, vous pouvez combiner le **Optional Chaining** et l'opérateur logique `&&` :

```javascript
const settings = {};

settings?.theme && (settings.theme = "dark");
console.log(settings); // {}
```

Si `settings?.theme` est défini, alors la valeur est modifiée. Sinon, rien ne se passe.

## Résumé

- Le **Optional Chaining** peut être utilisé pour accéder aux tableaux avec `?.[index]`.
- Il peut aussi être utilisé pour appeler des fonctions avec `functionName?.()`.
- Le **Optional Chaining** ne peut pas être utilisé pour l’affectation. Il est uniquement utilisé pour la lecture.

### Récapitulatif du chapitre

- Le **Optional Chaining** vous permet d'accéder à des propriétés d'un objet profondément imbriquées sans risquer d'erreurs si l'une des propriétés est `null` ou `undefined`.
- Si une propriété est `null` ou `undefined`, le `?.` court-circuite et renvoie `undefined`.
- Le **Optional Chaining** ne peut pas être utilisé sur un objet qui n'existe pas.
- Il peut être utilisé avec des tableaux : `?.[index]`.
- Il peut être utilisé avec des fonctions : `functionName?.()`.
- Il ne peut pas être utilisé pour des assignations. Il est uniquement utilisé pour la lecture.
```