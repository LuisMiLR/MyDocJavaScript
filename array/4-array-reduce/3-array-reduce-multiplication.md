# Array Reduction: Multiplication

_Dernière mise à jour : fevrirer 2025_

Dans cette leçon, nous allons explorer un autre exemple de réduction de tableau, qui est la multiplication.

Disons que nous avons les nombres suivants et que nous aimerions les multiplier tous :

```javascript
const numbers = [5, 2, 10];
```

Nous pouvons utiliser la méthode `.reduce()` ici, car nous réduisons l'ensemble du tableau en un seul nombre (qui est le produit de tous ces nombres).

```javascript
const result = numbers.reduce((total, current) => {
  return total * current;
}, 1);
console.log(result); // 100
```

### Valeur de départ pour la multiplication

Avant d'expliquer le code étape par étape, parlons de la `initialValue`, qui est 1 ici.

Lors d'une multiplication, nous ne pouvons pas avoir une valeur de départ de `0` c'est parce que tout nombre multiplié par `0` donnera `0` (`5 * 0 = 0`). Nous avons besoin d'un nombre neutre pour la multiplication, et ce nombre est `1`, car tout nombre multiplié par `1` reste le même nombre (par exemple, `1 * 5 = 5`).

C'est pourquoi dans la multiplication nous utilisons une valeur de départ de `1` et pour la somme, nous utilisons une valeur de départ de `0`.

### Explication étape par étape

Revenons au code pour expliquer son fonctionnement étape par étape :

```javascript
const numbers = [5, 2, 10];

const result = numbers.reduce((total, current) => {
  return total * current;
}, 1);
```

1. La première fois que le rappel de `.reduce()` s'exécute, `total` aura une valeur de `1` (provenant de la valeur de départ) et `current` aura une valeur de `5` (le premier élément du tableau).
   - Nous calculons `total * current`, ce qui donne `1 * 5 = 5`. La nouvelle valeur de `total` est `5`.

2. La deuxième fois que le rappel s'exécute, `total` vaut `5` et `current` vaut `2` (le deuxième élément du tableau).
   - Nous calculons `5 * 2 = 10`. La nouvelle valeur de `total` est `10`.

3. La troisième fois que le rappel s'exécute, `total` vaut `10` et `current` vaut `10` (le troisième élément du tableau).
   - Nous calculons `10 * 10 = 100`. La nouvelle valeur de `total` est `100`.

Le résultat final de `.reduce()` est `100`, qui est stocké dans la variable `result`.

### Erreurs courantes

En ce qui concerne l'utilisation de `.reduce()`, il existe trois erreurs courantes :

1. **Erreurs de syntaxe**  
   En raison du nombre de parenthèses et d'accolades, le code peut devenir compliqué. Si vous rencontrez des erreurs, réécrivez le code à partir de zéro ou notez-le sur papier.

2. **Oublier le mot-clé `return`**  
   Oublier de retourner une valeur mènera à des valeurs undefined qui se traduiront très probablement par un résultat `NaN`. Assurez-vous de retourner une valeur depuis l'intérieur du callback de .reduce().

3. **Valeur initiale incorrecte**  
   Si vous oubliez de fournir une `initialValue` ou si vous donnez une `initialValue` incorrecte (par exemple, `0` pour une multiplication), vous finirez avec un résultat de `0`, ce qui devrait indiquer que la `initialValue` était incorrecte.

### Résumé

- Pour la multiplication, utilisez une `initialValue` de `1`.
- Réduisez les erreurs courantes :
  - Erreurs de syntaxe.
  - Oublier de retourner une valeur (`return`).
  - `initialValue` incorrecte.
```