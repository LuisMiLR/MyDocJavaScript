// **immuability Objects

//Opérations sur les objets immuables

/* Le même concept abordé dans la dernière leçon s’applique aux objets. Nous devons créer une copie de l'objet au lieu de modifier l'original. 
Pour ce faire, vous pouvez également utiliser l' ...opérateur pour cloner un objet :
 */

const user = {
  id: 1,
  age: 23,
};
const cloned = { ...user };
console.log(cloned); // {id: 1, age: 23} (new object not related to 'user')

/* Mise à jour immuable
Pour mettre à jour un objet de manière immuable, vous devez en faire une copie puis ajouter le nouveau key: value qui remplacera le précédent. 
*/
const users = {
  id: 1,
  age: 23,
};
const clonedUser = {
  ...user,
  age: user.age + 1,
};
console.log(clonedUser); // {id: 1, age: 24} (new object not related to 'user')
console.log(users); // {id: 1, age: 23} (unchanged)

//*Remarquez comment age: user.age + 1remplace la valeur précédente de la agepropriété.

/* Suppression immuable
Bien que moins utilisé, voici comment supprimer de manière immuable une propriété d’un objet. C'est une combinaison de déstructuration 
d'objet et d' ...opérateur : */

const book = {
  id: 1,
  title: "Harry Potter",
  year: 2017,
  rating: 4.5,
};

// GOOD: immutable
const { year, ...rest } = book;
console.log(rest); // { id: 1, title: "Harry Potter", rating: 4.5}
console.log(book); // {id: 1, title: "Harry Potter", year: 2017, rating: 4.5} (unchanged)

/* La raison pour laquelle cela fonctionne est que {year, ...rest} = book la valeur de la clé est déstructurée yearde l' bookobjet. C'est similaire 
à la lecture book.year.

Cependant, remarquez comment nous demandons à JavaScript de déstructurer le reste de l'objet avec ...rest. Cela signifie combiner toutes les 
autres clés/valeurs dans un nouvel objet appelé rest. On se retrouve donc avec rest une copie immuable de book l'exclusion de la year propriété ! 


Vous pouvez créer une copie d'un objet à l'aide de l' ...opérateur :{...originalObject}
Vous pouvez mettre à jour une propriété existante :{...originalObject, property: 'newValue'}

Spread Operator : 
*/
const array1 = [1, 2, 3];
const array2 = [...array1, 4, 5, 6];
console.log(array2); // Output: [1, 2, 3, 4, 5, 6]

//Rest Operator :

function myFunction(arg1, arg2, ...rest) {
  console.log(rest);
}

myFunction(1, 2, 3, 4, 5);
// Output: [3, 4, 5]
