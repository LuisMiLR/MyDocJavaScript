//ARRAYS AND OBJECTS

//immuability

/* L'immuabilité est un concept important sur lequel vous tomberez par hasard en JavaScript, principalement lorsque vous travaillez avec une bibliothèque/un framework frontal. Mais d’abord, voyons comment fonctionne l’égalité tableau/objet en JavaScript.

Commençons par comparer quelques nombres, chaînes et booléens : 
(egalité stricte) ===  */

1 === 1; //true
27 === 27; //true
"hello world" === "hello world"; //true
"welcome" === "welcome"; //true
true === true; //true
false === false; //true (because they're the same)

/* Il n'y a rien de spécial ici. Nous comparons 2 valeurs exactement identiques, le résultat est donc true.

Essayons maintenant avec des tableaux et des objets : 
*/

// [] === []; //false
// {} === {}; //false
// [10] === [10]; //false
// {key: "something"} === {key: "something"}; //false

/* Remarque : vous obtiendrez toujours falsemême si vous avez utilisé le ==triple égal au lieu du triple égal ===.
C'est bizarre quand même. Pourquoi obtenons-nous false ? 

************************************** Tableaux et objets ***********************************************
Les tableaux et les objets sont tous deux considérés comme des objets en JavaScript.
Lorsque vous écrivez [], cela revient à créer une nouvelle instance de Array.
Lorsque vous écrivez {}, cela revient à créer une nouvelle instance de Object.
*/
new Array(); // creates []
new Object(); // creates {}

/* Revenons en arrière et remplaçons les tableaux et objets des exemples précédents par cette nouvelle syntaxe : */

new Array() === new Array(); //false
new Object() === new Object(); //false

const arr1 = new Array();
arr1.push(10);
const arr2 = new Array();
arr2.push(10);
arr1 === arr2; //false

const obj1 = new Object();
obj1.key = "something";
const obj2 = new Object();
obj2.key = "something";
obj1 === obj2; //false

/* Cela devrait rendre un peu plus claire la raison pour laquelle ils ne sont pas égaux.
new Array()crée une nouvelle instance de tableau.
Chaque fois que vous appelez, new Array()vous obtenez une nouvelle instance, ce qui signifie que new Array()ce n'est certainement pas la même chose,
 new Array()car ce sont toutes deux des instances différentes.

Ainsi, avec les tableaux et objets, nous avons besoin d’une autre approche pour comparer l’égalité du point de vue des valeurs.
Comme dans, nous nous attendions [] === []à ce que ce soit vrai car ce sont tous deux des tableaux vides, mais la façon dont JavaScript fonctionne 
est différente car il vérifie s'il s'agit de la même instance . 


************************************************************ Affectation d'objet **************************************************************************

Il existe une autre fonctionnalité de JavaScript qui peut sembler contre-intuitive et que vous devez connaître : c'est ce qui se produit lorsque nous attribuons 
une variable à un objet (ou un tableau) existant.

Prenons un exemple :
*/
const firstArray = [];
const secondArray = firstArray; // secondArray now points to firstArray
console.log(firstArray); // []
console.log(secondArray); // []

firstArray.push(10);
console.log(firstArray); // [10]
console.log(secondArray); // [10]

/* Vous pourriez être surpris de savoir pourquoi secondArraycontient-il aussi 10 maintenant ? Eh bien, c'est parce que lorsque nous avons créé secondArray = firstArray, 
nous ne copions pas firstArray , mais créons simplement une référence à celui-ci .

Cela signifie firstArrayet secondArray font désormais référence à la même valeur. Techniquement, nous disons qu'ils font référence au même endroit dans la mémoire.
Ainsi, chaque fois que vous modifiez la valeur de l'une des 2 variables, les deux firstArrayet secondArray renverront la même valeur qui a été mise à jour. 


résumer
Les tableaux sont des objets en JavaScript.

[] === []est le même quenew Array() === new Array()
{} === {}est le même quenew Object() === new Object()
[] === []c'est falseparce qu'il compare 2 instances différentes de tableaux
{} === {}c'est falseparce qu'il compare 2 instances différentes d'objets

Lorsque vous affectez une variable à un objet ou à un tableau, elle ne la copie PAS. Il fera uniquement référence à sa valeur.
*/
