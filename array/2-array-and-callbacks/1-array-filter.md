# Array `filter`

Dans ce chapitre, nous explorerons davantage de méthodes de tableau tout en découvrant les callbacks.

Une méthode commune des tableaux est la méthode `.filter()`. Lorsque vous appelez cette méthode sur un tableau, vous obtiendrez un autre tableau contenant certains éléments du tableau d'origine, en fonction de la condition que vous spécifiez. Prenons un exemple :

```javascript
const numbers = [9, 5, 14, 3, 11];

const numbersAboveTen = numbers.filter(function (number) {
  return number > 10;
});
console.log(numbersAboveTen); // [14, 11]
```

💡 **Ne pas oublier** le mot-clé `return` à l'intérieur de la fonction de rappel.

## Comment fonctionne `.filter(callback)`

Voyons comment le code ci-dessus fonctionne en décomposant son exécution étape par étape.

La méthode `.filter()` attend un callback (fonction de rappel) comme premier argument. Dans notre exemple, le callback est :

```javascript
function (number) {
  return number > 10;
}
```

JavaScript prendra votre callback et l'appellera pour chaque élément du tableau. Notre tableau `numbers` contient 5 éléments, il appellera donc la fonction 5 fois. À chaque appel, il passera une valeur au paramètre `number` que vous avez spécifié dans ce callback.

- Lors du premier appel, `number` sera 9 (le premier élément du tableau).
- Au deuxième appel, `number` sera 5 (le deuxième élément du tableau).
- Et ainsi de suite jusqu'au dernier élément du tableau.

C'est ainsi que fonctionnent les callbacks. Chaque méthode de tableau a un comportement différent, que nous expliquerons. Ce comportement dépend souvent du résultat du callback.

Dans cet exemple, si la fonction de rappel renvoie `true`, l'élément sera inclus dans le tableau final renvoyé par `.filter()`. Si la fonction de rappel renvoie `false`, l'élément ne sera pas inclus dans le tableau final.

Cela signifie que si vous avez le code ci-dessous :

```javascript
numbers.filter(function (number) {
  return true;
});
```

Cela renverra chaque élément du tableau, vous obtiendrez donc une copie du tableau d'origine. Ce code n'est pas très utile, mais il sert à montrer l'importance du retour de la fonction de rappel et comment cela affecte le résultat de la méthode `.filter()`.

C'est pourquoi nous utilisons la condition `number > 10`. Cette condition renverra soit `true` soit `false` en fonction de la valeur de `number`.

### Comment fonctionne le passage des arguments dans `filter` ?

Comment JavaScript sait-il que chaque élément du tableau `numbers` devient l'argument `number` dans la fonction de rappel ? La réponse est qu'il ne le sait pas par avance !

JavaScript appelle simplement votre fonction de rappel et passe l'élément du tableau comme premier paramètre à la fonction de rappel. Cela signifie que le code ci-dessous fonctionne (mais n'est pas recommandé) :

```javascript
numbers.filter(function (x) {
  return x > 10;
});
```

## Résumé

- La méthode `.filter()` renvoie un nouveau tableau contenant certains éléments du tableau d'origine, en fonction de la condition que vous spécifiez.
- JavaScript prend votre fonction de rappel et l'appelle pour chaque élément du tableau.
- Pour la méthode `.filter()`, le résultat de la fonction de rappel compte. Si la fonction renvoie `true`, l'élément sera inclus dans le tableau résultant. Sinon, il sera exclu.
- JavaScript ne devine pas que le tableau `numbers` devient l'argument `number` dans votre fonction de rappel. Il appelle simplement votre fonction de rappel et passe une valeur au premier paramètre que vous avez spécifié.
- Utilisez la convention de nommage pluriel → singulier lorsque vous utilisez la méthode `.filter()`.
```

