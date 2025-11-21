# What is `reduce`?

_Dernière mise à jour : avril 2022_

Nous aurons un autre chapitre sur une utilisation plus avancée de la méthode `reduce()` lorsque nous découvrirons les tableaux d'objets.

La méthode `reduce()` peut sembler un peu compliquée, mais nous la détaillerons étape par étape. Ne vous inquiétez pas si vous ne comprenez pas tout du premier coup.

## Qu'est-ce que `reduce()` ?

La méthode `reduce()` est utilisée pour calculer une valeur unique à partir d'un tableau. En d'autres termes, elle réduit un tableau en une seule valeur.

### Exemple de réduction : Somme

Par exemple, on peut réduire le tableau `[5, 10, 5]` en un seul nombre : `20`.  
On peut aussi réduire le tableau `[2, 4, 3]` en un seul nombre : `9`.

Vous aurez remarqué que dans ces deux exemples, nous additionnons les éléments du tableau :  
`5 + 10 + 5 = 20` et `2 + 4 + 3 = 9`.

C'est l'un des cas d'utilisation les plus courants de la méthode `reduce()` : additionner les éléments du tableau.

### Exemple de réduction : Multiplication

Un autre exemple est la multiplication. Par exemple :

On peut réduire le tableau `[10, 2, 2]` en un seul nombre : `40` (`10 * 2 * 2 = 40`).

## Qu'est ce que le reducer

Alors, la méthode reduce est-elle une somme ou une multiplication ? Ce n'est ni l'un ni l'autre. C'est parce que la méthode reduce() accepte le reducer qui est une fonction de rappel que vous devez écrire. Cette fonction de rappel peut être une somme, une multiplication, ou toute autre logique à laquelle vous pourriez penser.

Ainsi, reduce est une fonction générique qui réduira un tableau en une seule valeur. La manière dont elle réduira ce tableau en une seule valeur est configurable par vous, le développeur. Vous pouvez la configurer dans la fonction de rappel reducer.

Nous ne nous attendons pas à ce que les choses soient claires pour l'instant car nous ne vous avons pas encore montré le code, mais ci-dessous vous trouverez le bilan des concepts les plus importants abordés jusqu'à présent.

## Résumé

- La méthode `reduce()` est utilisée pour calculer une valeur unique à partir d’un tableau.
- Elle réduit un tableau en une seule valeur.
- Les cas d'utilisation les plus courants avec des tableaux de nombres sont la somme et la multiplication.
- La méthode `reduce()` utilise un réducteur qui vous permet de configurer la logique pour réduire le tableau en une seule valeur.
```

