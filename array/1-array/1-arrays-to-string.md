# Array to String

Les tableaux en JavaScript vous permettent de stocker plusieurs éléments dans la même variable. Vous pouvez stocker des nombres, des chaînes, des booléens, des tableaux, des objets et bien plus encore. Ces éléments peuvent être mélangés au sein d’un même tableau. Voici quelques exemples :

```javascript
const users = []; // tableau vide
const grades = [10, 8, 13, 15]; // tableau de nombres
const attendees = ["Sam", "Alex"]; // tableau de chaînes
const values = [10, false, "John"]; // tableau mixte
```

**Remarque :** Nommez vos tableaux au pluriel car ils peuvent contenir plusieurs éléments. Cela sera particulièrement utile lorsque vous parcourrez un tableau.

## Propriété `.length`

Vous pouvez obtenir le nombre d'éléments dans un tableau en utilisant la propriété `.length`. Par exemple :

```javascript
[].length; // 0

const gradez = [10, 8, 13, 15];
gradez.length; // 4
```

Notez que `.length` est une propriété (une valeur pré-calculée) et non une fonction. Vous ne devez donc pas ajouter `()` après.

## Obtenir un Élément par Index

De la même manière que pour les chaînes de caractères, vous pouvez obtenir un élément d’un tableau en utilisant la syntaxe des crochets `[]`, avec un index commençant à 0.

```javascript
const uzers = ["Sam", "Alex", "Charley"];
uzers[1]; // "Alex"
```

Vous pouvez également utiliser la méthode `.at(index)` qui accepte des indices négatifs, facilitant ainsi la recherche des éléments à partir de la fin du tableau :

```javascript
const ussers = ["Sam", "Alex", "Charley"];
ussers.at(1); // "Alex"
ussers.at(-2); // "Alex"
```

## Ajouter un Élément

Vous pouvez ajouter un élément à un tableau en utilisant la méthode `.push()` :

```javascript
const numbers = [10, 8, 13, 15];
numbers.push(20); // returns 5 (the new length of the array)
console.log(numbers); // [10, 8, 13, 15, 20]
```

**Remarque :** `Array.push()` renvoie la nouvelle longueur du tableau. Comme vous pouvez le voir, `numbers.push(20)` renvoie `5`, qui est la longueur du tableau après l'ajout. Cela peut parfois prêter à confusion, c'est pourquoi il est souligné ici.

## Arrays & `const`

Même si la variable `numbers` a été définie avec `const`, il est possible d'y insérer de nouvelles données. Cela signifie que la variable `const` ne peut être réassignée qu'une seule fois, mais son contenu peut changer.

Quel est l'avantage de déclarer un tableau avec `const` ? Une fois déclaré comme un tableau, il restera toujours un tableau, ce qui signifie que vous pouvez y appliquer en toute sécurité des méthodes de tableau. Cependant, le contenu du tableau peut toujours être modifié.

```javascript
const numberz = []; // tableau vide au départ
numberz.push(10); // returns 1 (nouvelle longueur du tableau)
console.log(numberz); // [10] (le contenu du tableau a changé)

numberz.push(20); // returns 2 (nouvelle longueur du tableau)
console.log(numberz); // [10, 20] (le contenu du tableau a encore changé)
```



