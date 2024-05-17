/*  
//************************************************************************* Array to string **************************************************************************
//********************************************************************************************************************************************************************


Les tableaux en JavaScript vous permettent de stocker plusieurs éléments dans la même variable. Vous pouvez stocker des nombres, des chaînes, des booléens, des tableaux, des objets et bien plus encore. Ceux-ci peuvent être mélangés au sein d’un même tableau.
Voici quelques exemples:
 */

const users = []; // empty array
const grades = [10, 8, 13, 15]; // array of numbers
const attendees = ["Sam", "Alex"]; // array of strings
const values = [10, false, "John"]; // mixed

//?Nommez les tableaux au pluriel car ils peuvent contenir plusieurs éléments. Cela s'avérera particulièrement utile une fois que nous aurons
//?besoin de parcourir un tableau.

//******* Propriété .length
//Vous pouvez obtenir le nombre d'éléments dans un tableau en utilisant la .lengthpropriété. Par exemple:

[].length; // 0

const gradez = [10, 8, 13, 15];
gradez.length; // 4

//Notez que .length est une propriété (valeur pré-calculée) et non une fonction. C'est pourquoi vous ne devriez pas l'avoir () après.

/* 
//******* Obtenir un élément par index
De la même manière que pour les chaînes, vous pouvez obtenir un élément d’un tableau en utilisant la syntaxe des crochets [] en index commençant par 0.

Par exemple: 
*/
const uzers = ["Sam", "Alex", "Charley"];
uzers[1]; //"Alex"

/* 
Vous pouvez également utiliser la .at(index) méthode qui accepte les indices négatifs, 
ce qui facilite la recherche du dernier élément du tableau. Voici quelques exemples avec .at(): 
*/
const ussers = ["Sam", "Alex", "Charley"];
ussers.at(1); //"Alex"
ussers.at(-2); //"Alex"

//Ajouter un élément
//Vous pouvez ajouter un élément à un tableau en utilisant la .push() méthode

const numbers = [10, 8, 13, 15];
numbers.push(20); // returns 5 (the new length of the array)
console.log(numbers); // [10, 8, 13, 15, 20];

//?Array.push()renvoie la nouvelle longueur du tableau.
/* Comme vous pouvez le voir, numbers.push(20) renvoie 5 qui est la longueur du tableau. 
Ceci est souvent déroutant pour de nombreux développeurs, c'est pourquoi nous le soulignons ici. 
.push()ajoutera un élément au tableau mais renverra également la nouvelle longueur du tableau. 


//*********** Arrays & const


Même si la variable numbersa été définie avec const, nous avons pu y insérer de nouvelles données.
Cela signifie que constvous ne pouvez attribuer la variable qu'une seule fois lorsqu'elle est définie. 
Mais cela ne veut pas dire que la variable est immuable. Son contenu peut changer.

Quel est l'avantage de le déclarer comme const vous le demandez ? L'avantage est qu'une fois que vous l'avez défini comme un tableau, 
il restera toujours comme un tableau, ce qui signifie que vous pouvez y appeler en toute sécurité des méthodes de tableau. 
Mais le contenu du tableau peut changer .
*/

const numberz = []; // start with empty array
numberz.push(10); // returns 1 (new length of array)
console.log(numberz); // [10] (still an array but content changed)
numberz.push(20); // returns 2 (new length of array)
console.log(numberz); // [10, 20] (still an array but content changed)
