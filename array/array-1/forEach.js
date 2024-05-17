//forEach (pour chaque)

/* la méthode forEach() est utilisée pour parcourir chaque  élément d'un tableau */
/* L'itération de tableau est l'un des concepts les plus importants que vous utiliserez en JavaScript.

Disons que nous disposons d'un tableau de notes et que vous souhaitez effectuer une boucle (ou une itération) 
sur chaque élément de ce tableau. Voici comment procéder en JavaScript : */
const grades = [10, 8, 13];

grades.forEach(function (grade) {
  // do something with individual grade
  console.log(grade);
});

// ou avec la syntaxe simplifier avec une fonction fléchée:
grades.forEach((grade) => {
  console.log(grade);
});

/* Commencer toujours par un console.log()intérieur de votre .forEach afin de pouvoir visualiser le passage 
d'un tableau à l'autre . 

La .forEach(callback)méthode vous permet d'exécuter la callbackfonction pour chaque élément de ce tableau. Les rappels seront expliqués 
plus en détail dans le chapitre suivant. Pour l’instant, commençons par une définition de base.

/* L'idée principale est d'avoir une fonction (appelée rappel) qui sera exécutée pour chaque élément du tableau. Dans l'exemple ci-dessus, la fonction de rappel est : 

Un rappel est une définition de fonction passée en argument à une autre fonction. Dans notre exemple ci-dessus, voici la fonction de rappel :
*/
/* 
 function(grades ) {
 // do something with individual grade
  console.log(grades);
 } */

/* Cette fonction de rappel reçoit un message gradepuis l'enregistre sur la console. Il s'agit d'une définition de fonction car elle n'est pas exécutée. 
Il définit uniquement le comportement de la fonction. Cependant, cette définition de fonction est passée en argument à la .forEach()méthode : */
grades.forEach(insert_callback_here);

/* Lorsque vous combinez le tableau et la fonction de rappel, vous obtenez le code suivant :*/
grades.forEach(function (grade) {
  // do something with individual grade
  console.log(grade);
});
/* Cela enregistrera chaque note du tableau dans la console. La méthode .forEach() appelle automatiquement la fonction de rappel pour chaque élément du tableau.
Vous obtiendrez donc :
10
8
13 */

/* Vous pouvez donc visualiser les appels de fonction comme suit : */
// this is the callback

/* function(grade) {
  console.log(grade);
} */
// call the callback with grade = 10 (grades[0])
console.log(grade); // will log 10
// call the callback with grade = 8 (grades[1])
console.log(grade); // will log 8
// call the callback with grade = 13 (grades[2])
console.log(grade); // will log 13
/* Remarquez comment la définition de fonction est appelée pour chaque élément du tableau !

Mais qui l'appelle et fournit les différentes valeurs ? Eh bien, JavaScript l'est ! Vous
 fournissez le rappel (définition de la fonction) et le transmettez au .forEach()et JavaScript fait le reste ! */

grades.forEach(function (x) {
  // this works, but avoid using generic variable names
  console.log(x);
});

/* Cela fonctionne donc car JavaScript recherchera le premier paramètre ( x) et appellera le rappel et lui donnera une valeur à xchaque fois.

Même si cela fonctionne, vous devez toujours donner des noms de variables clairs. Nous en parlerons plus dans la prochaine leçon !
 */

/*CALL BACK FUNCTON revient à laisser un numéro de téléphone pour que quelqu'un vous rappelle lorsqu'il est prêt. En JavaScript, vous fournissez une fonction de rappel comme argument, qui est appelée lorsque la fonction principale est prête à envoyer le résultat . */

/* 
//******************** résumer
.forEach(callback)parcourt chaque élément d'un tableau.
Un rappel est une définition de fonction passée en argument à une autre fonction.
Commencez toujours par un console.log()intérieur .forEach()pour visualiser le passage d'un tableau à un élément du tableau 
(vous pouvez l'ignorer lorsque vous vous y habituerez).
La .forEach()méthode prendra la définition de votre fonction et l'appellera pour chaque élément du tableau. Chaque fois 
que le rappel est appelé, le premier paramètre représentera l'élément de tableau correspondant. */

/* Récapitulatif du chapitre
const data = [1, 2, 3]est un tableau contenant 3 nombres.
array.lengthrenvoie le nombre d'éléments à l'intérieur du tableau.
array.push(x)permet d'ajouter la variable x à la fin du tableau.
array.push(x)renvoie la nouvelle longueur du tableau (une fois le push effectué).
Les tableaux définis avec const ne sont pas des constantes car vous pouvez modifier les éléments qu'ils contiennent. Cependant, vous ne pouvez pas les réaffecter à une autre valeur, ils constitueront donc toujours un tableau.
.forEach(callback)parcourt chaque élément d'un tableau.
Un rappel est une définition de fonction passée en argument à une autre fonction.
Commencez toujours par un console.log()intérieur .forEach()pour visualiser le passage d'un tableau à un élément du tableau (vous pouvez l'ignorer lorsque vous vous y habituerez).
La .forEach()méthode prendra la définition de votre fonction et l'appellera pour chaque élément du tableau. Chaque fois que le rappel est appelé, le premier paramètre représentera l'élément de tableau correspondant.
Nommez vos tableaux au pluriel et l'élément du tableau (à l'intérieur du .forEach()) au singulier.
Assurez-vous de placer correctement l' returnintérieur d'une fonction qui contient un .forEach().

*La méthode forEach() ne retourne pas de nouveau tableau, elle est utilisée pour effectuer des actions sur chaque élément d'un tableau sans modifier le tableau d'origine.
*/
