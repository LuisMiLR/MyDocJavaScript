# If & Else

Il est parfois possible de supprimer le `else`. Jetons un coup d'œil à un exemple :

```javascript
function canVote(age) {
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
}
```

Puisque cette fonction effectue deux actions différentes basées sur le résultat de la condition `if` et de son opposé (`else`), nous pouvons la réécrire en supprimant le mot-clé `else` :

```javascript
function canVote(age) {
  if (age >= 18) {
    return true;
  }
  return false;
}
```

Ces deux fonctions auront exactement le même résultat. Cela s'explique par le fait que le mot-clé `return` quitte la fonction avec un résultat. Ainsi, lorsque l'âge est supérieur ou égal à 18 ans, la fonction renverra `true` et le reste du code ne s'exécutera pas.  
Lorsque l’âge est inférieur à 18 ans, le code dans la condition `if` ne s’exécute pas. La seule ligne exécutée sera donc la dernière : `return false`.

Nous utiliserons cette astuce plus tard dans le cours pour en apprendre davantage sur un modèle courant appelé **retour anticipé**.

## If and Boolean

Chaque fois que vous renvoyez un booléen (`true` ou `false`), il est souvent redondant d'utiliser `if` et `else`. Voici un exemple :

```javascript
function isPassing(grade) {
  if (grade >= 10) {
    return true;
  } else {
    return false;
  }
}
```

Cet exemple est redondant, car `grade >= 10` est une expression qui est évaluée directement en `true` ou `false`. Cela signifie que vous n'avez pas besoin de l'envelopper dans une instruction `if/else`.

Voici comment refactoriser la fonction :

```javascript
function isPassing(grade) {
  return grade >= 10;
}
```

Dans ce cas, vous n'utilisez plus `if/else` car l'expression renverra toujours un booléen !

Cela ne fonctionne que lorsque vous renvoyez un booléen à partir d'une fonction.

## Résumé

- En utilisant une condition `if`, vous pouvez exécuter un morceau de code lorsque la condition est évaluée à `true`.
- La syntaxe est `if (condition)` suivie d'accolades `{}` qui contiennent les lignes de code à exécuter lorsque la condition est remplie.
- Le mot-clé `else` peut être utilisé pour exécuter un autre code basé sur les conditions non satisfaites par le `if`.
- Lorsque vous avez une condition `if/else` qui renvoie deux résultats différents, il est possible de supprimer le mot-clé `else`.
```