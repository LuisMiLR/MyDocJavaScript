
# Operations

_Dernière mise à jour : novembre 2023_

Comme vous pouvez vous y attendre, les nombres peuvent être multipliés et divisés. Nous avons déjà vu un exemple de multiplication au début du cours en utilisant l'opérateur `*`. Pour la division, vous devez utiliser l'opérateur `/`.

## Reste de la division

Vous pouvez également utiliser l'opérateur reste `%` qui renvoie le reste de la division. Voici un exemple :

```javascript
8 % 2; // Le reste de la division est 0
7 % 2; // Le reste de la division est 1
```

Voici comment le reste de la division de `8 % 2` est calculé :

```
8 / 2 = 4
4 / 2 = 2
=> Le reste de la division est 0 car 8 = 4 * 2 + 0
```

Alors que pour `7 % 2` :

On commence par diviser `7` par `2` : `7 / 2 = 3.5`. Ensuite, on prend la partie entière de ce nombre et on ignore la décimale : `3`.

Ensuite, il faut multiplier ce nombre par `2` (le `2` venant de `% 2`) : `3 * 2 = 6`. Finalement, le reste de la division est `7 - 6 = 1`.

D'une autre manière, on peut écrire `7` comme `3 * 2 + 1`. Ce `1` à la fin est le reste de la division.

Nous utiliserons le reste de division dans 2 chapitres pour vérifier si un nombre est pair ou impair.

[MDN Documentation sur l'opérateur reste (%)](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Remainder)

## Méthodes Numériques

Bien qu'il existe d'autres méthodes que vous pouvez appeler sur des nombres, elles ne sont pas très couramment utilisées. Ce qui est généralement utilisé, cependant, est l'objet `Math` qui contient des méthodes telles que `min()`, `max()`, `round()`, etc.

Voici quelques exemples :

```javascript
Math.round(2.1); // 2
Math.round(2.6); // 3
Math.round(2.5); // 3

Math.floor(2.1); // 2
Math.floor(2.6); // 2
Math.floor(2.5); // 2

Math.ceil(2.1); // 3
Math.ceil(2.6); // 3
Math.ceil(2.5); // 3
```

## Résumé

L'opérateur reste (`%`) renvoie le reste de la division entre 2 nombres.
```
