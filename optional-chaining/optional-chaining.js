/* 
Optional chaining (Chainage optionelle) 

Nous savons dans un chapitre précédent que si une propriété d'objet renvoie undefined, alors nous devons éviter d'accéder à d'autres propriétés 
(ou d'appeler des méthodes dessus) afin de ne pas obtenir d'erreur. C'est pourquoi vous voyez souvent du code qui ressemble à ceci :

*/
// assuming object `user`

let name = undefined;
if (user.details && user.details.name && user.details.name.firstName) {
  name = user.details.name.firstName;
}

/* Nous ne pouvons pas écrire directement let name = user.details.name.firstName si nous soupçonnons que, pour une raison quelconque, user.details cela pourrait être null ou undefined. Et pareil pour user.details.name.
C'est pourquoi nous utilisons une condition if et vérifions, étape par étape, que chaque propriété renvoie une valeur.

Entrez le Optional chaining Cela nous permet de refactoriser l'intégralité du code ci-dessus comme suit : 
*/

// assuming object `user`

const namme = user.details?.name?.firstName;

/* Tout le code ci-dessus peut être remplacé par cette seule ligne. 

l'opérateur ?. est utilisé dans le cadre du optional chaining. L'opérateur ?. permet d'accéder à des propriétés d'objets sans provoquer d'erreur si une partie de la chaîne est null ou undefined.

user.details?.name?.firstName : Le chaînage optionnel est utilisé ici pour vérifier si user.details et user.details.name existent avant d'accéder à firstName. 
Si l'une de ces propriétés est null ou undefined, JavaScript arrêtera la recherche et retournera undefined au lieu de déclencher une erreur.



Jetons un coup d'œil à quelques exemples et voyons le résultat du chaînage facultatif :
 */

const user = {
  details: {
    name: {
      firstName: "Sam",
    },
  },
  data: null,
};

user.details?.name?.firstName; // "Sam"
user.data?.id; // undefined
user.children?.names; // undefined
user.details?.parent?.firstName; // undefined

/* Mises en garde
Nous avons décidé de consacrer un chapitre entier Optional chaining car il existe certains cas extrêmes dont vous devez être conscient. 
Nous les décomposerons afin que vous évitiez des problèmes inattendus.

Une remarque importante est que vous ne pouvez pas utiliser de chaînage facultatif sur un objet qui n'existe peut-être pas. 
L'objet doit exister. Le chaînage facultatif est uniquement utilisé pour accéder à une propriété qui peut exister ou non .

Cela signifie que lorsque vous accédez à user.details?., vous devez vous assurer qu'il existe une variable (de n'importe quel type) appelée user. 
Sinon, vous obtenez une erreur .

Vous avez peut-être remarqué que nous avons écrit user.details?.name à la place de user?.details?.name cela parce que nous savons avec certitude que user 
s'agit d'un objet. Nous n’avons donc pas nécessairement besoin d’un Optional chaining pour user.details.

Si vous n'êtes pas sûr qu'il s'agisse user d'un objet, vous pouvez écrire user?.details?.name. Cependant, vous devez toujours vous assurer qu'une variable est user 
définie, sinon vous obtiendrez une erreur.

//***** résumer
Le Optional chaining vous permet d'accéder à une propriété au plus profond d'un objet sans risquer une erreur si l'une des propriétés est null ou undefined.
Dans le cas où l'une des propriétés est null ou undefined, alors le ?.court-circuit renvéra undefined.

Vous ne pouvez pas utiliser de Optional chaining sur un objet qui n'existe peut-être pas. L'objet doit exister. Le Optional chaining est uniquement utilisé pour accéder à une propriété qui peut exister ou non. */
