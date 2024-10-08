/*Les opérateurs **rest** et **spread** en JavaScript peuvent être confondus car ils utilisent tous deux les trois points (`...`), mais ils ont des fonctions différentes en fonction du contexte dans lequel ils sont utilisés.

### 1. **Rest Operator (`...`)** :

L'opérateur **rest** est utilisé pour collecter plusieurs arguments dans une fonction ou pour regrouper les éléments d'un tableau ou les propriétés d'un objet en un seul.

#### Usage dans une fonction :
Il permet de regrouper tous les arguments supplémentaires passés à une fonction dans un tableau.

*/
function sum(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum(1, 2, 3)); // 6

/*

Dans cet exemple, tous les arguments passés à `sum` sont collectés dans le tableau `numbers` grâce à l'opérateur rest.

#### Usage avec les objets :

Il permet de capturer les propriétés restantes d'un objet après en avoir extrait certaines.

*/
const person = { name: 'Alice', age: 25, city: 'Paris' };
const { name, ...rest } = person;

console.log(name); // 'Alice'
console.log(rest); // { age: 25, city: 'Paris' }

/*
Ici, `name` est extrait de l'objet `person`, et le reste des propriétés (âge et ville) est regroupé dans l'objet `rest`.



### 2. **Spread Operator (`...`)** :

L'opérateur **spread** est utilisé pour "étaler" ou "décomposer" les éléments d'un tableau ou les propriétés d'un objet dans un autre tableau ou objet.

#### Usage avec les tableaux :
Il permet de décomposer un tableau en plusieurs éléments distincts.
*/
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];

console.log(arr2); // [1, 2, 3, 4, 5]

/*
Dans cet exemple, le tableau `arr1` est décomposé, et ses éléments sont ajoutés individuellement à `arr2`.

#### Usage avec les objets :

Il permet de copier ou de fusionner des objets.

*/
const person1 = { name: 'Alice', age: 25 };
const person2 = { ...person1, city: 'Paris' };

console.log(person2); // { name: 'Alice', age: 25, city: 'Paris' }

/*
Ici, les propriétés de `person1` sont décomposées et copiées dans `person2`, avec l'ajout de la propriété `city`.



### En résumé :

- **Rest** : regroupe plusieurs éléments en un seul (argument dans une fonction, propriétés d'un objet, etc.).
- **Spread** : décompose un élément en plusieurs (éléments d'un tableau ou propriétés d'un objet).

Le contexte (fonction ou structure de données) détermine si vous utilisez `...` comme opérateur rest ou spread.
*/

/*
 "Le contexte détermine si vous utilisez `...` comme opérateur rest ou spread" c'est que la manière dont vous utilisez les trois points (`...`) cela change en fonction de la situation dans laquelle vous les placez, et c'est ce contexte qui détermine s'il s'agit de l'opérateur **rest** ou **spread**. Voici  des exemples spécifiques pour clarifier cela :

### 1. **Rest Operator** : 
- Il regroupe des éléments en un seul, et il est utilisé **dans les définitions de fonctions** (pour regrouper les arguments) ou **dans les destructurations** d'objets ou de tableaux (pour capturer le reste des éléments).

#### Exemple dans une fonction (opérateur rest) :
Quand vous utilisez `...` dans la définition des paramètres d'une fonction, c'est l'opérateur rest.

*/
function sum(...numbers) {
  // Ici, ...numbers regroupe tous les arguments dans un tableau appelé numbers
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

sum(1, 2, 3); // Dans ce contexte, 1, 2, et 3 sont regroupés dans un tableau [1, 2, 3]

/*
Ici, `...numbers` regroupe les arguments passés à la fonction dans un seul tableau.

#### Exemple dans la destructuration d'un objet (opérateur rest) :
Quand vous utilisez `...` dans la destructuration d'un objet, il regroupe les propriétés restantes de l'objet.
*/

const personn = { names: 'Alice', age: 25, city: 'Paris' };
const { names, ...resst } = person;

// Ici, ...rest regroupe toutes les autres propriétés de l'objet dans un nouvel objet
console.log(rest); // { age: 25, city: 'Paris' }

/*
Ici, `...rest` regroupe toutes les autres propriétés restantes dans un objet `rest`.



### 2. **Spread Operator** :
- Il décompose ou étale des éléments d'un tableau ou d'un objet dans une nouvelle structure. Il est utilisé **lorsqu'on appelle une fonction** avec des arguments, ou **lorsqu'on copie ou fusionne des objets/tables**.

#### Exemple avec un tableau (opérateur spread) :
Quand vous utilisez `...` dans le contexte où vous **étalez les éléments d'un tableau ou d'un objet**, c'est l'opérateur spread.

*/

const arrs1 = [1, 2, 3];
const arrs2 = [...arrs1, 4, 5]; 
// Ici, ...arr1 étale les éléments de arr1 dans arr2

console.log(arrs2); // [1, 2, 3, 4, 5]

/*

Ici, `...arrs1` étale les éléments de `arrs1` dans un nouveau tableau `arrs2`.

#### Exemple avec un objet (opérateur spread) :
Quand vous utilisez `...` pour **copier ou fusionner des objets**, il étale les propriétés de l'objet source.

*/
const personn1 = { name: 'Alice', age: 25 };
const personn2 = { ...personn1, city: 'Paris' };
// Ici, ...person1 étale les propriétés de person1 dans person2

console.log(personn2); // { name: 'Alice', age: 25, city: 'Paris' }

/*


### Conclusion :

- **Rest** : Vous utilisez `...` **dans les paramètres d'une fonction** ou **dans la destructuration** pour regrouper plusieurs éléments.
- **Spread** : Vous utilisez `...` **dans un appel de fonction** ou **lors de la création/modification de tableaux ou d'objets** pour décomposer/étaler les éléments.

C'est le contexte (si vous définissez des paramètres ou copiez des données) qui détermine si `...` est utilisé comme opérateur rest ou spread*/