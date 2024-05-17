// Arrays

// On peut acceder à un élement d'un array
const vegetables = [
  "carrot",
  "broccoli",
  "pepper",
  "cabbage",
  "zucchini",
  "onion",
  "salad",
  "cauliflower",
];
console.log(vegetables[0]); // affichera carrot

//on peut consulter également avec la méthode .at() surtout utile pour lire à partir de la fin ex: .at(-2)

//On peut ajouter un element au tableau de cette manière
vegetables[8] = "leek";

// ****Les méthodes Liées au arrays****

//*.push pour ajouter un element à la fin d'un tableau

const colors = ["red", "blue", "orange", "yellow", "white", "grey", "purple"];
colors.push("green"); // on ajoute la chaine de caractères "green" à la fin du tableau

//*.unshift ajouter un element au début du tableau
colors.unshift("green"); // on ajoute la chaine de caractères "green" au début du tableau

//*.pop supprimer un element à la fin du tableau
colors.pop();

//*.shift supprimer un element au début du tableau
colors.shift();

//*.indexOf connaitre la position d'un élement dans un tableau
const colorss = ["pink", "black", "salmon", "gold"];
console.log(colorss.indexOf("pink")); // affichera 0 car "pink" est à la position 0 dans le tableau
//exemple dans une condition if si n'est pas present retourne -1
//if (wordUnique.indexOf(strings[i]) === -1)

//Si l'élément recherché ne se trouve pas dans le tableau, la méthode .indexOf() renvoie -1 :

//*.join convertir un tableau en string
const colorz = ["pink", "black", "salmon", "gold"];
console.log(colorz.join());
//Si l'on exécute le code ci-dessus, le terminal affichera :
//pink,black,salmon,gold

//*Tableaux et const
/* Même si la variable numbers a été définie avec const, nous avons pu y insérer de nouvelles données.
Cela constsignifie que vous ne pouvez attribuer la variable qu'une seule fois lorsqu'elle est définie. Mais cela ne veut pas 
dire que la variable est immuable. Son contenu peut changer.

Quel est l'avantage de le déclarer comme constvous le demandez ? L'avantage est qu'une fois que vous l'avez 
défini comme un tableau, il restera toujours comme un tableau, ce qui signifie que vous pouvez y appeler en toute sécurité des 
méthodes de tableau. Cependant, le contenu du tableau peut changer. */

const numbers = []; // start with empty array
numbers.push(10); // returns 1 (new length of array)
console.log(numbers); // [10] (still an array but content changed)
numbers.push(20); // returns 2 (new length of array)
console.log(numbers); // [10, 20] (still an array but content changed)

//****** Array.every(callback)

/* .every(callback)La méthode Array est renvoyée true lorsque chaque élément du tableau satisfait à la condition fournie dans le rappel .

Voici un exemple : 
*/
const numberzs = [15, 10, 20];

const allAbove10 = numberzs.every((number) => number >= 10); // true
const allAbove15 = numberzs.every((number) => number >= 15); // false

/* 
Remarquez comment all Above 10 est évalué true car chaque élément du numbers tableau est renvoyé true pour la condition number >= 10. Ainsi, le 
rappel number => number >= 10 est appelé pour chaque élément du tableau. Et, si tous les rappels sont retournés true, alors la .every() méthode renverra true. 
Sinon, il reviendra false(si au moins un des rappels est retourné false).

C'est pourquoi all Above 15 est évalué comme false étant donné que tous les éléments du items tableau ne satisfont pas à la condition number >= 15. 
L'un d'eux ( number = 10) est revenu false du rappel. La .every() méthode renvoie donc false. */

//********* Array.some (rappel)
/* 
De même, la .some(callback) méthode Array est renvoyée true lorsqu'au moins un élément du tableau satisfait à la condition fournie dans le rappel 
*/

const numberss = [15, 10, 20];

const someOver18 = numberss.some((number) => number >= 18); // true
const someUnder10 = numberss.some((number) => number < 10); // false

/* Remarquez comment someOver18est évalué truecar au moins un des éléments du numberstableau a été renvoyé truepour la condition number >= 18.
Alors que someUnder10la valeur est false
car aucun des éléments du numberstableau n'a été renvoyé true.

//***************** résumer
.every(callback)La méthode Array est renvoyée truelorsque chaque élément du tableau satisfait à la condition fournie dans le rappel.
La .some(callback)méthode Array est renvoyée truelorsqu'au moins un élément du tableau satisfait à la condition fournie dans le rappel.

*/
