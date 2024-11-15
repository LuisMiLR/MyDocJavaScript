# Arrays and Objects

## Immuability

**Dernière mise à jour avril 2024**

L'immuabilité est un concept important que vous rencontrerez souvent en JavaScript, notamment lors du travail avec des bibliothèques ou frameworks frontaux. Mais commençons par voir comment fonctionne l’égalité des tableaux et des objets en JavaScript.

### Comparaison des valeurs simples

Commençons par comparer quelques nombres, chaînes et booléens :

```javascript
1 === 1; // true  
27 === 27; // true  
"hello world" === "hello world"; // true  
"welcome" === "welcome"; // true  
true === true; // true  
false === false; // true
```

Ici, rien d’étonnant, nous comparons des valeurs strictement identiques, donc le résultat est `true`.

### Comparaison des tableaux et objets

Comparons maintenant des tableaux et objets :

```javascript
[] === []; // false  
{} === {}; // false  
[10] === [10]; // false  
{key: "something"} === {key: "something"}; // false
```

Remarquez que même avec `==`, vous obtiendrez toujours `false`. C’est étrange, n'est-ce pas ? Voyons pourquoi cela arrive.

### Tableaux et Objets en JavaScript

Les tableaux et objets sont des objets en JavaScript. Par conséquent, lorsque vous écrivez `[]` ou `{}`, vous créez une nouvelle instance d'un tableau ou d'un objet.

```javascript
new Array(); // crée []
new Object(); // crée {}
```

Chaque fois que vous utilisez `new Array()` ou `new Object()`, vous obtenez une nouvelle instance. Ainsi, `[] === []` ou `{}` === `{}` retourne `false` parce qu’il s’agit de deux instances différentes.

### Exemple

```javascript
const arr1 = new Array();
arr1.push(10);
const arr2 = new Array();
arr2.push(10);
arr1 === arr2; // false
```

Ici, même si les deux tableaux contiennent les mêmes valeurs, ils ne sont pas égaux car ils sont deux instances différentes.

### Affectation d'Objet

Une autre chose à savoir en JavaScript est ce qui se passe lorsque nous attribuons une variable à un objet ou tableau existant. Prenons un exemple :

```javascript
const firstArray = [];
const secondArray = firstArray; // secondArray fait référence à firstArray
console.log(firstArray); // []
console.log(secondArray); // []

firstArray.push(10);
console.log(firstArray); // [10]
console.log(secondArray); // [10]
```

Dans cet exemple, `secondArray` pointe vers `firstArray`, donc toute modification de l'un affecte également l'autre car ils partagent la même référence en mémoire.

### Résumé

- Les tableaux sont des objets en JavaScript.
- `[] === []` retourne `false` parce qu'il compare deux instances différentes de tableaux.
- `{} === {}` retourne `false` parce qu'il compare deux instances différentes d'objets.
- Lorsque vous affectez une variable à un tableau ou objet, elle ne copie pas la valeur, elle fait référence à la même instance.

## Récapitulatif du chapitre

- La triple égalité (`===`) compare les références, pas les valeurs. Pour comparer les valeurs, vous avez besoin d'une égalité profonde (deep equal).
- Un objet immuable est un objet qui ne peut pas être modifié. Si vous devez modifier un objet immuable, vous créez une nouvelle copie en laissant l’original inchangé.
```