// l'opérator OR '||'

/*
L'opérateur OR `||` en JavaScript est un opérateur logique utilisé pour évaluer deux expressions booléennes. 
Il retourne la première valeur "truthy" qu'il rencontre, ou, si toutes les valeurs sont "falsy", il retourne la dernière valeur.

*Syntaxe de base :

expression1 || expression2


*Fonctionnement :

- Si `expression1` est truthy, elle est immédiatement renvoyée, et `expression2` n'est même pas évaluée.
- Si `expression1` est falsy, l'opérateur continue avec `expression2` et retourne cette dernière valeur, qu'elle soit truthy ou falsy.


* Valeurs **falsy** en JavaScript :

Les valeurs suivantes sont considérées comme **falsy** :
- `false`
- `0`
- -0
- `""` (chaîne vide)
- `null`
- `undefined`
- `NaN`

Toutes les autres valeurs sont truthy.

### Exemples d'utilisation :

#### 1. Retourner la première valeur **truthy**
```javascript
let a = 0;
let b = "Bonjour";
let result = a || b; 
console.log(result); // "Bonjour" 
```



#### 2. Retourner la première valeur truthy ou la dernière falsy
```javascript
let a = null;
let b = undefined;
let c = "Salut";
let result = a || b || c;
console.log(result); // "Salut"
```

Ici, `a` et `b` sont tous les deux falsy (`null` et `undefined`), donc JavaScript retourne la première valeur truthy, qui est `"Salut"`.

#### 3. Utiliser `||` pour définir des valeurs par défaut
L'opérateur `||` est souvent utilisé pour attribuer une valeur par défaut à une variable si elle est indéfinie ou contient une valeur falsy.

```javascript
let nomUtilisateur = null;
let nomAffiche = nomUtilisateur || "Anonyme";
console.log(nomAffiche); // "Anonyme"
```

Ici, comme `nomUtilisateur` est `null` (falsy), la valeur `"Anonyme"` est utilisée comme valeur par défaut.

#### 4. Court-circuitage logique
Le court-circuitage se produit lorsque la première valeur truthy est rencontrée, les expressions suivantes ne sont pas évaluées.

```javascript
let x = 5;
let result = x || console.log("Cette ligne ne sera pas exécutée");
console.log(result); // 5
```

Dans cet exemple, comme `x` est truthy (`5`), le second opérande (`console.log(...)`) n'est jamais exécuté.

#### 5. Exemple avec des valeurs falsy
```javascript
let a = 0;
let b = "";
let c = null;
let d = false;
let e = "valeur";

let result = a || b || c || d || e;
console.log(result); // "valeur"
```

Ici, `a`, `b`, `c`, et `d` sont tous falsy, donc JavaScript continue jusqu'à trouver `e`, qui est truthy et retourne `"valeur"`.

### Attention aux pièges avec `||` :
L'opérateur `||` peut conduire à des comportements inattendus si des valeurs **falsy** comme `0`, `""`, ou `false` sont des valeurs valides que vous voulez conserver.

#### Exemple :
```javascript
let points = 0;
let score = points || 10;
console.log(score); // 10
```

Ici, on pourrait s'attendre à ce que `score` soit `0`, mais comme `0` est falsy, l'opérateur `||` le remplace par la valeur `10`. Si `0` est une valeur valide dans votre contexte, il vaut mieux utiliser l'opérateur de **nullish coalescing** (`??`), qui ne remplace que `null` ou `undefined`.

### Résumé :
- L'opérateur **OR** (`||`) retourne la première valeur **truthy** qu'il rencontre, ou la dernière si toutes les valeurs sont **falsy**.
- Il est souvent utilisé pour fournir des valeurs par défaut.
- Faites attention si vous voulez conserver des valeurs falsy comme `0` ou `""`.

L'opérateur `||` est un outil puissant pour simplifier les vérifications et définir des valeurs par défaut en JavaScript. */