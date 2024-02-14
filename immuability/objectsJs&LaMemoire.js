//LES OBJECTS EN JS ET LA MEMOIRE
//Point 1
/* 
En JavaScript, les objets sont des structures de données importantes qui nous permettent de stocker et d'organiser des informations. 
Lorsque vous créez un objet, JavaScript alloue de l'espace mémoire pour stocker cet objet.
Prenons un exemple simple :
 */

// Création d'un objet
const person = {
  name: "John",
  age: 25,
};

/* 

Commençons par comprendre comment les objets sont gérés en mémoire en JavaScript.


************************************************ Les Objets en JavaScript et la Mémoire **********************************************************************

En JavaScript, les objets sont des structures de données importantes qui nous permettent de stocker et d'organiser des informations. Lorsque vous créez un objet, 
JavaScript alloue de l'espace mémoire pour stocker cet objet.

Prenons un exemple simple :*/

// Création d'un objet
const persons = {
  name: "John",
  age: 25,
};
// La variable person contient une référence à l'objet en mémoire, pas les données elles-mêmes.
/* 


************************************************ La Référence à l'Objet ***************************************************************************************

Lorsque vous créez cet objet person, la variable person ne stocke pas directement tout l'objet en elle-même. Au lieu de cela, elle stocke une référence à l'emplacement 
en mémoire où l'objet est stocké.

Pensez à la référence comme à une adresse, indiquant à JavaScript où trouver l'objet. Cela signifie que person ne contient pas les données de l'objet, mais plutôt 
un lien vers l'emplacement en mémoire où ces données sont stockées. 

Conséquences de la Référence
Cela a des implications lorsque vous manipulez des objets. Par exemple, si vous attribuez la valeur d'une variable à une autre, vous ne copiez pas l'objet, mais 
simplement la référence à l'objet.
*/

const personz = {
  name: "John",
  age: 25,
};

const anotherPerson = personz;

/************ Maintenant, anotherPerson fait référence au même objet en mémoire que person. Les modifications apportées à l'un des objets se refléteront dans l'autre, 
car ils pointent tous deux vers la même zone mémoire.

****Conclusion
En résumé, en JavaScript, les objets sont stockés en mémoire, et les variables qui les référencent stockent une référence à l'emplacement en mémoire où l'objet est 
stocké. Comprendre cela est crucial pour éviter les erreurs liées à la manipulation des objets et pour saisir le fonctionnement des assignations de variables 
et des comparaisons d'objets. */
