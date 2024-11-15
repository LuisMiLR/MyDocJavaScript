# Converting a String to a Number

_Dernière mise à jour : juillet 2024_

Dans certains scénarios, vous souhaiterez convertir une chaîne en un nombre. Pour cela, vous devez utiliser la méthode `Number.parseInt()`.

Voici un exemple :

```javascript
let str = "42";
Number.parseInt(str, 10); // 42
```

Il se passe beaucoup de choses ici, alors décomposons-les étape par étape.

Le nom de la fonction est `Number.parseInt()`. Oui, y compris le préfixe `Number`. C'est parce qu'il existe un objet global appelé `Number` qui contient une méthode appelée `parseInt()`.

Cette méthode `Number.parseInt()` attend deux paramètres :

```javascript
Number.parseInt(string, radix);
```

- Le premier paramètre est la chaîne que vous souhaitez convertir en nombre.
- Le deuxième paramètre est la base (`radix`) qui sera utilisée dans la conversion.

### Qu'est-ce que `radix` ?

`radix` représente la base du système numérique que vous souhaitez utiliser. Pour la plupart des cas d'utilisation, vous utiliserez probablement la base 10, qui est le système décimal que nous utilisons dans la vie quotidienne (parce que nous comptons de 0 à 9).

Un autre exemple de base est 2, qui représente le binaire (un système utilisé par les ordinateurs). Si vous souhaitez approfondir ce concept, vous pouvez consulter la [page Wikipédia sur les bases mathématiques](https://fr.wikipedia.org/wiki/Base_math%C3%A9matique).

En résumé, la base sera le plus souvent 10. Si vous n'êtes pas sûr de la base à utiliser, elle est probablement 10.

### Puis-je ignorer le `radix` ?

Même si le `radix` est un paramètre facultatif, vous ne devez pas l'ignorer. En effet, sa valeur par défaut n'est pas toujours 10. Veillez donc à toujours passer le `radix` comme deuxième paramètre.

⚠️ **Attention** : `Number.parseInt(string, radix)` ne prend pas toujours par défaut une valeur de 10.

Si vous essayez `Number.parseInt()` sans spécifier de `radix`, cela peut fonctionner. Cependant, dans certains cas limites (comme des nombres commençant par `0x`), cela pourrait échouer. Pour plus de sécurité, il est recommandé de toujours spécifier le `radix`.

👍 **Bonnes pratiques** : Assurez-vous de toujours spécifier le `radix` pour éviter les mauvaises surprises.

[MDN Documentation sur `Number.parseInt()`](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Number/parseInt)

### Notes sur l'héritage

JavaScript est un langage en constante évolution qui a plus de 25 ans. Il continue de changer et d'évoluer. Les notes d'héritage expliquent certains comportements déroutants ou d'anciennes fonctions que vous avez peut-être rencontrées.

Si vous apprenez JavaScript pour la première fois, vous n'avez pas besoin de passer beaucoup de temps sur ces notes héritées.

🔍 **Note d'héritage** : `Number.parseInt()` et `parseInt()` sont exactement la même chose. Préférez utiliser `Number.parseInt()` plutôt que `parseInt()`.

Dans le passé, `parseInt(string, radix)` était la seule méthode pour convertir des chaînes en nombres. Plus tard, cette fonction a été clonée sous l'objet `Number` pour regrouper les fonctions similaires.

Ils fonctionnent tous les deux de la même manière, mais nous vous recommandons d'utiliser l'approche moderne avec `Number.parseInt()`.

### Cas d'utilisation pour la conversion d'une chaîne en nombre

Il existe plusieurs raisons pour lesquelles vous voudriez convertir une chaîne en nombre. La plus courante est lorsqu'un utilisateur saisit un nombre dans une zone de texte ou que le nombre est lu à partir du DOM (ce qui sera abordé plus tard).

Si vous oubliez de convertir une chaîne en nombre, l'addition prévue pourrait se comporter comme une concaténation :

```javascript
let a = 10;
let b = "20"; // nous avons oublié de le convertir en nombre
a + b; // "1020" (concaténation au lieu de somme)
```

La méthode `Number.parseInt()` va essayer de convertir la chaîne reçue en un nombre. Cela fonctionne généralement lorsque la chaîne commence par un nombre et se termine par des valeurs non numériques :

```javascript
Number.parseInt("123abc", 10); // 123
Number.parseInt("5 meters", 10); // 5
```

## Résumé

- Convertir une chaîne en nombre avec `Number.parseInt(value, 10)`.
- `Number.parseInt()` est le nom de la fonction que vous appelez.
- `10` est la base (`radix`) que vous devez spécifier.
- Assurez-vous de toujours spécifier le `radix` pour éviter les mauvaises surprises.
```
