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

//.push pour ajouter un element à la fin d'un tableau
const colors = ["red", "blue", "orange", "yellow", "white", "grey", "purple"];
colors.push("green"); // on ajoute la chaine de caractères "green" à la fin du tableau

//.unshift ajouter un element au début du tableau
colors.unshift("green"); // on ajoute la chaine de caractères "green" au début du tableau

//.pop supprimer un element à la fin du tableau
colors.pop();

//.shift supprimer un element au début du tableau
colors.shift();

//.indexOf connaitre la position d'un élement dans un tableau
const colorss = ["pink", "black", "salmon", "gold"];
console.log(colorss.indexOf("pink")); // affichera 0 car "pink" est à la position 0 dans le tableau
//exemple dans une condition if si n'est pas present retourne -1
//if (wordUnique.indexOf(strings[i]) === -1)

//Si l'élément recherché ne se trouve pas dans le tableau, la méthode .indexOf() renvoie -1 :

//.join convertir un tableau en string
const colorz = ["pink", "black", "salmon", "gold"];
console.log(colorz.join());
//Si l'on exécute le code ci-dessus, le terminal affichera :
//pink,black,salmon,gold

//Tableaux et const
/* Même si la variable numbersa été définie avec const, nous avons pu y insérer de nouvelles données.
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

//Itérer un tableau avec forEach

/* Une fonction de rappel revient à laisser un numéro de téléphone pour que quelqu'un vous rappelle lorsqu'il est prêt. 
En JavaScript, vous fournissez une fonction de rappel comme argument, qui est appelée lorsque la fonction principale est prête à envoyer le résultat.

Dans le chapitre suivant, nous en apprendrons davantage sur les rappels ainsi que sur les méthodes de tableau supplémentaires que nous utiliserons tout au long du cours. Ces méthodes s'avéreront utiles, surtout lorsque nous travaillerons avec des tableaux d'objets, qui constituent la structure de données la plus courante que vous récupérez des API. */

/* résumer
.forEach(callback)parcourt chaque élément d'un tableau.
Un rappel est une définition de fonction passée en argument à une autre fonction.
Commencez toujours par un console.log()intérieur .forEach()pour visualiser le passage d'un tableau à un élément du tableau (vous pouvez l'ignorer lorsque vous vous y habituerez).
La .forEach()méthode prendra la définition de votre fonction et l'appellera pour chaque élément du tableau. Chaque fois que le rappel est appelé, le premier paramètre représentera l'élément de tableau correspondant. */
