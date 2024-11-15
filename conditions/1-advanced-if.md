# Advanced `if`

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

Ces deux fonctions auront exactement le même résultat. Cela est dû au fait que le mot-clé `return` quitte la fonction avec un résultat. Ainsi, lorsque `age` est supérieur ou égal à 18, la fonction renverra `true` et le reste du code ne s'exécutera pas.  
Cependant, lorsque l’âge est inférieur à 18, le code dans la condition `if` ne s’exécute pas. La seule ligne exécutée sera donc la dernière : `return false`.

Nous utiliserons cette astuce plus tard dans le cours pour en apprendre davantage sur un modèle courant appelé **retour anticipé**.

## Remarque sur l'héritage

Une note rapide sur l'héritage : si vous rencontrez `==` (double égal) en JavaScript, essayez de le remplacer par `===` (triple égal).  
L'opérateur `==` effectue des conversions inattendues. Il est donc préférable d'utiliser toujours le triple égal.

👍 **Meilleures pratiques** : Utilisez toujours `===` (triple égal) lorsque vous comparez deux valeurs en JavaScript.

Si vous souhaitez en savoir plus sur les raisons pour lesquelles `==` n'est pas recommandé, considérez cet exemple de comparaison :

```javascript
"2" == 2;
```

Cela renverrait `true` car JavaScript essaierait de convertir les deux valeurs en le même type de données.  
Cependant, cette "fonctionnalité" peut mener à des erreurs. Il est préférable d'utiliser `===`, qui ne renvoie `true` que si les deux côtés ont le même type de données **et** la même valeur.

## Résumé

- Lorsque vous avez une condition `if/else` qui renvoie deux résultats différents, il est possible de supprimer le mot-clé `else`.
- Utilisez toujours le triple égal `===` lorsque vous comparez deux valeurs en JavaScript.

Est-ce que cela a été utile ?
```