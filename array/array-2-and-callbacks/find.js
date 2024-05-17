//Aray find

/* la .find()méthode qui est un peu similaire dans son fonctionnement.

Commençons par un exemple, cette fois avec un tableau de chaînes : */
const names = ["Sam", "Alex", "Charlie"];

const result = names.find(function (name) {
  return name === "Alex";
});
console.log(result); // "Alex"

/* Lorsque vous appelez la .find(callback)méthode sur un tableau, vous récupérerez le premier élément qui correspond à 
la condition que vous spécifiez. Si aucun article n'a été trouvé, vous recevrez une réponse undefined. 


La condition que nous avons précisée ici est que le name soit égal à "Alex"
Ainsi, la .find(callback)méthode appellera le rappel que vous avez fourni pour chaque élément du tableau jusqu'à ce que l'un des 
rappels renvoie true. Lorsque cela se produit, il cessera d'appeler les rappels restants et vous renverra l'élément pour lequel le rappel 
a été renvoyé true.

Dans notre exemple ci-dessus, voici le rappel :
function(name) {
  return name === "Alex";
}

qui est appelé name = "Sam"(premier élément du tableau). Cependant, le rappel reviendra falsecar name === "Alex"return false. Ainsi, le 
rappel sera rappelé avec la prochaine valeur de name. Cette fois, name = "Alex". Le rappel reviendra truecar name === "Alex"
(la condition à l'intérieur du rappel) renvoie true. Ainsi, la .find()méthode s'arrête et vous renvoie cet élément qui est "Alex".

Remarquez que même s'il y a 2 nombres qui satisfont à la condition, la .find()méthode s'arrête au premier qui satisfait la condition.


Cela nous amènera à la section suivante, qui est .filter()vs .find(). Quelles sont les différences?


//*******.filter() VS .find()

Quelle est la différence entre .filter() et .find()?

La différence réside dans le type de retour de ces 2 méthodes :

La .filter() méthode renvoie toujours un tableau.

La .find() méthode renvoie le premier élément du tableau qui correspond à la condition de rappel ou undefined.
Jetons un coup d'œil à quelques exemples :
*/
const numbers = [9, 5, 14, 3, 11];

// .filter() ALWAYS returns an array
numbers.filter(function (number) {
  return number >= 12;
}); // [14]

// .find() returns the first match or undefined
numbers.find(function (number) {
  return number >= 12;
}); // 14

/* Remarquez comment .filter()renvoie un tableau, même s'il n'y a qu'un seul élément qui correspond à votre condition. En revanche, 
la .find()méthode renverra le premier élément qui correspond à la condition. 

*****.filter() renvoie toujours un tableau. Même s'il correspond à un élément ou à aucun élément .

Examinons maintenant un exemple dans lequel aucun élément ne satisfait à la condition :
*/

const numberss = [9, 5, 14, 3, 11];

// filter() ALWAYS returns an array (even if it's empty)
numberss.filter(function (number) {
  return number >= 15;
}); // []

// .find() returns the first match or undefined (when none of the items satisfy the condition)
numberss.find(function (number) {
  return number >= 15;
}); // undefined

/* Remarquez comment le .filter() a renvoyé un tableau vide et le .find()retourne undefined. 
****************** .find(callback)peut revenir undefined. Vous devrez peut-être envelopper son résultat dans une condition if pour éviter 
des erreurs inattendues si vous finissez par appeler une méthode sur son résultat.******************


résumer
-La .find()méthode renvoie le premier élément qui correspond à la condition que vous spécifiez. Si aucun article n'a été trouvé, vous recevrez une réponse undefined.
-La .filter()méthode renvoie toujours un tableau. Même si c'est vide.

*/
