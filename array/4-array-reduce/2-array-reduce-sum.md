# Array `reduce`: Sum

_Dernière mise à jour : juin 2022_

Il est temps de jeter un œil au code ! Dans cette leçon, nous nous concentrerons sur un cas d'utilisation de la méthode `reduce()` : le calcul de la somme. Nous allons réduire un tableau de nombres pour obtenir leur somme.

En supposant le tableau de notes suivant :

```javascript
const grades = [10, 15, 5];
```

Voici comment calculer sa somme avec `reduce()` :

```javascript
const sum = grades.reduce((total, current) => {
  return total + current;
}, 0);
```

### Explication

Décomposons ce qui se passe :

1. Nous appelons la méthode `.reduce()` sur le tableau `grades`.
2. Nous attribuons le résultat de `grades.reduce()` à une nouvelle variable appelée `sum`.
3. La méthode `reduce()` prend deux paramètres : le **réducteur** et la **valeur initiale**.

### Réducteur

Le réducteur dans cet exemple est :

```javascript
(total, current) => {
  return total + current;
};
```

Il s'agit de la fonction de rappel appliquée à chaque élément du tableau. Ce rappel prend deux paramètres : `total` et `current`.

- `total` fait référence à la dernière valeur calculée par la fonction de réduction (souvent appelée **accumulateur**).
- `current` fait référence à l'élément courant du tableau.

Voici la manière dont ces paramètres évoluent à chaque étape :

```javascript
const gradez = [10, 15, 5];

const sums = gradez.reduce((total, current) => {
  return total + current;
}, 0);
```

1. **Première exécution** : `total = 0` (en raison de la valeur initiale) et `current = 10` (premier élément). Le résultat est `total + current = 0 + 10 = 10`.  
   La nouvelle valeur de `total` devient 10.
   
2. **Deuxième exécution** : `total = 10` et `current = 15` (deuxième élément). Le résultat est `total + current = 10 + 15 = 25`.  
   La nouvelle valeur de `total` devient 25.

3. **Troisième exécution** : `total = 25` et `current = 5` (troisième élément). Le résultat est `total + current = 25 + 5 = 30`.  
   La nouvelle valeur de `total` devient 30.

4. Le tableau n'a plus d'éléments. Le résultat final est `total = 30`.

La somme finale est donc 30.

### Valeur Initiale

La méthode `.reduce()` accepte deux paramètres : `reducer` et `initialValue` (à ne pas confondre avec les paramètres `total` et `current` de la fonction `reducer`).  
L'**initialValue** est la valeur que vous passez à `total` lors de la première exécution du rappel.

Passer `0` comme `initialValue` équivaut à déclarer `let sum = 0` si vous utilisiez `.forEach()` pour calculer la somme. C'est la valeur de départ que nous utilisons pour le calcul.

JavaScript transmet automatiquement votre `initialValue` au paramètre `total` lors de la première exécution du rappel.

### Résumé

- La méthode `reduce()` prend deux paramètres : `reducer` et `initialValue` – `.reduce(reducer, initialValue)`.
- La `initialValue` est souvent `0` pour la somme.
- Le **réducteur** est une fonction de rappel qui reçoit deux paramètres : `total` et `current`.
- `total` (ou **accumulateur**) garde une trace du résultat de la réduction, comme la somme dans notre exemple.
- `current` représente un élément du tableau.
- La fonction `reducer` est appelée pour chaque élément du tableau.
```