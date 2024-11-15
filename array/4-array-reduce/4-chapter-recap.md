# Chapter Recap

_Dernière mise à jour : octobre 2022_

Dans un prochain chapitre, nous apprendrons à réduire un tableau d'objets en une seule valeur, en utilisant les concepts que vous avez appris dans ce chapitre.

Le concept de réduction peut être difficile, même pour les développeurs intermédiaires. Ne vous inquiétez donc pas si ce n'est pas encore complètement clair. N'hésitez pas à y revenir dans quelques semaines. Vous pouvez également continuer à utiliser `.forEach()` pour calculer la somme plutôt que `reduce()`. C'est parfaitement normal.

Nous allons vous montrer comment calculer la somme en utilisant `.forEach()` et `.reduce()` afin que vous puissiez voir les similitudes et les différences.

### Utilisation de `.forEach()`

```javascript
let sum = 0;
numbers.forEach(number => {
  sum = sum + number;
});
```

### Utilisation de `.reduce()`

```javascript
const sum = numbers.reduce((total, current) => {
  return total + current;
}, 0);
```

#### Comparaison

- L'une des similitudes est que `initialValue` était `let sum = 0`, mais dans le cas de `reduce()`, c'est maintenant le deuxième argument passé à `.reduce()`.
- Une des différences est que `.forEach()` ne renvoie rien, alors que `.reduce()` renvoie un résultat (dans ce cas, la somme).

L'exemple avec `.reduce()` peut être écrit sur une seule ligne en utilisant un retour implicite :

```javascript
const sum = numbers.reduce((total, current) => total + current, 0);
```

J'ai également publié une vidéo YouTube sur la réduction des tableaux. Notez que la dernière partie de la vidéo contient des réponses aux exercices du chapitre 22 (réduction des tableaux d'objets).

## Récapitulatif du Chapitre

- La méthode `reduce()` est utilisée pour calculer une valeur unique à partir d'un tableau.
- En d’autres termes, la méthode `reduce()` réduit un tableau en une seule valeur.
- Les cas d'utilisation les plus courants de `reduce()` (lorsque vous travaillez avec des tableaux de nombres) sont la **somme** et la **multiplication**.
- La méthode `reduce()` prend un réducteur qui vous permet de configurer la logique de la façon dont le tableau sera réduit en un seul nombre.
- La méthode `reduce()` prend 2 paramètres : `reducer` et `initialValue` – `.reduce(reducer, initialValue)`.
- L'`initialValue` est toujours `0` pour la somme.
- Le **réducteur** est une fonction de rappel qui reçoit 2 paramètres : `total` et `current`.
- `total` (également appelé **accumulateur**) garde une trace du résultat de la méthode de réduction. Par exemple, lors du calcul de la somme, il garde une trace de la somme, étape par étape.
- `current` représente un élément du tableau.
- La méthode `reducer` est appelée pour chaque élément du tableau.
- Pour la multiplication, on utilise une `initialValue` de `1`.

### Réduisez les Erreurs Courantes

1. **Erreurs de syntaxe**  
   En raison du nombre de parenthèses et d'accolades, cela peut devenir compliqué.

2. **Oublier de `return`**  
   Si vous oubliez de `return` dans la fonction de rappel, cela conduira à des valeurs `undefined`, ce qui peut aboutir à un résultat de `NaN`.

3. **Valeur initiale incorrecte**  
   Si vous oubliez de fournir une `initialValue` ou si vous fournissez une `initialValue` incorrecte, cela pourrait conduire à un résultat inattendu (par exemple, `0` dans le cas d'une multiplication).
```