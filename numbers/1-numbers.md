# Numbers

## Numeric Separator (`_`)

Vous pouvez représenter plus clairement des nombres plus grands en utilisant le séparateur numérique (`_`). Par exemple :

```javascript
let nb = 1_000_000; // 1000000 (1 million)
```

## Converting from Number to String

Bien que rarement utilisé, vous pouvez convertir un nombre en chaîne en appelant la méthode `.toString()`.

```javascript
let answer = 42;
answer.toString(); // "42"
```

### Documentation sur le Web

Si vous consultez la documentation en ligne, vous verrez souvent `String.prototype.toString()`. Pourquoi y a-t-il un prototype ? Cela sera abordé en profondeur plus loin dans ce cours. Pour l'instant, sachez que chaque fois que vous voyez `String.prototype.something()`, cela signifie qu'il existe une méthode `something()` que vous pouvez appeler sur un `String`.

## Résumé

- Pour convertir un nombre en chaîne : `value.toString()`.
- `NaN` signifie "Not a Number" (Pas un Numéro).
- `NaN` est souvent le signe d'un bug.

## Récapitulatif du Chapitre

- Pour convertir un nombre en chaîne : `value.toString()`.
- `NaN` signifie "Not a Number".
- `NaN` est souvent le signe d'un bug.
- Pour convertir une chaîne en nombre : `Number.parseInt(value, 10)`.

  - `Number.parseInt()` est le nom de la fonction que vous appelez.
  - `10` est la base que vous devez spécifier (assurez-vous de toujours préciser la base pour éviter les mauvaises surprises).

- L'opérateur reste (`%`) renvoie le reste de la division entre 2 nombres.
```