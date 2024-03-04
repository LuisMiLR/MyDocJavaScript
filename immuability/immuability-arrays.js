// **immuability Arrays
//Operation sur les arrays immuable

/* Nous avons vu dans le chapitre précédent qu'attribuer un tableau à une nouvelle variable n'en fait pas une nouvelle copie. Ainsi, toute
 modification apportée à cette nouvelle variable affectera également la variable d'origine.

*Vous ne pouvez pas rendre un tableau ou un objet immuable en JavaScript. Cependant, vous pouvez utiliser des méthodes spécifiques pour créer
*une nouvelle copie qui conserverait alors la valeur de la variable d'origine. 
*Nous appelons cela des opérations sur tableau immuable. 


Par exemple, nous pouvons créer une copie superficielle de ce tableau en utilisant la syntaxe spread .... 
Voici comment cela fonctionne:*/
const grades = [10, 20];
const gradesCopy = [...grades];
console.log(gradesCopy); // [10, 20] (new array, not linked to 'grades')

/* 
*La façon dont cela fonctionne est que vous créez un nouveau tableau avec la [ ]syntaxe, et à l'intérieur de ce tableau, 
*vous répartissez les éléments du gradestableau .

*C'est pourquoi cette syntaxe finit par créer une copie plutôt que de pointer vers la même référence. 
*C'est ce qu'on appelle une copie superficielle (contrairement à la copie profonde , nous en parlerons plus à la fin de ce chapitre) .

Cette technique couvre la plupart des scénarios d'immuabilité des tableaux car avec ce nouveau tableau, vous pourrez le manipuler sans
affecter le tableau d'origine.

La plupart des méthodes de tableau que vous connaissez muteront le tableau d'origine. Par exemple, 
.push()mute le tableau.
Il en va de même pour les méthodes moins utilisées telles que .sort().

*Ajout immuable
*Le cas d’utilisation le plus courant de l’immuabilité d’un tableau consiste à ajouter de manière immuable un élément à un tableau. Vous pouvez le faire sur une seule ligne également en utilisant la ...syntaxe :
*/
const gradess = [10, 20];
const updated = [...gradess, 15];
console.log(updated); // [10, 20, 15] (new array, not related to 'grades')
console.log(gradess); // [10, 20] (unchanged)

/* La raison pour laquelle cela fonctionne est que vous créez un nouveau tableau avec la [ ]syntaxe, et à l'intérieur de ce tableau, vous 
répartissez les éléments gradeset y ajoutez une nouvelle valeur qui est 15. 

*Mise à jour/suppression du tableau immuable
*Vous pouvez également mettre à jour un tableau de manière immuable et supprimer un élément de manière immuable à l’aide des méthodes .map()et .filter()
*Même si ce n'est pas l'objet de ce cours, voici un exemple :
*/

const gradez = [10, 20, 15];
const updateds = gradez.filter((grade) => grade !== 20);
console.log(updateds); // [10, 15]
console.log(gradez); // [10, 20, 15] (unchanged)

/* La .filter()méthode renvoie un nouveau tableau (elle n'affecte donc pas celui d'origine). 
Le .filter()rappel dans cet exemple exclut celui gradequi a une valeur de 20. 


*résumer
*Vous pouvez créer une copie superficielle d'un tableau en utilisant la syntaxe spread ...: [...originalArray].
*Cela fonctionne en répartissant les éléments dans un nouveau tableau.
*Vous pouvez ajouter de manière immuable un élément à un tableau comme ceci :[...originalArray, newItem]*/
