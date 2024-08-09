### Expressions

Une expression est un morceau de code qui se résout (ou s'évalue) en une valeur.
Autrement dit, lorsqu'on exécute une expression, on obtient une valeur en retour.

## Types d'expressions

Il y a deux principaux types d'expressions en JavaScript :

1. Expressions avec effets secondaires : Ce sont des expressions qui, en plus de produire une valeur, modifient l'état de quelque chose dans le programme. Par exemple :

2. Attribution de valeurs : Lorsqu'on assigne une valeur à une variable, comme let x = 5;. Cette expression attribue la valeur 5 à la variable x, et cette attribution elle-même est une expression qui se résout en la valeur attribuée (ici 5).
   Incrémentation ou décrémentation : Comme x++ ou x--, qui augmentent ou diminuent la valeur de x. Ces expressions modifient la valeur de x, mais renvoient aussi la nouvelle valeur de x.

- Expressions purement évaluatives : Ces expressions se contentent de produire une valeur sans modifier l'état du programme. Elles ne font qu'évaluer une opération ou une valeur :

- Expressions arithmétiques : Comme 3 + 4 ou 10 \* 2, qui se résolvent respectivement en 7 et 20.
- Expressions littérales : Comme 42, "Hello, world!", ou true, qui sont directement des valeurs.
  Appels de fonction : Si une fonction retourne une valeur sans effet secondaire, l'appel de cette fonction est une expression évaluative.

exemple:

```js
let a = 10; // Une expression avec effet secondaire (attribution de valeur)
let b = 20; // Une autre expression avec effet secondaire

let sum = a + b; // Une expression évaluative qui calcule la somme de `a` et `b`
console.log(sum); // 30 - une expression avec effet secondaire (l'affichage dans la console)

sum++; // Une expression avec effet secondaire (incrémentation de `sum`)
console.log(sum); // 31
```

Dans cet exemple :

let a = 10; est une expression avec effet secondaire, car elle affecte la valeur 10 à a.

a + b est une expression évaluative, car elle produit simplement une valeur (30 dans ce cas).

sum++ est une expression avec effet secondaire, car elle augmente la valeur de sum.

En résumé, une expression en JavaScript est un morceau de code qui se résout en une valeur, et elle peut soit modifier l'état du programme (avec effets secondaires), soit simplement produire une valeur (pure).
