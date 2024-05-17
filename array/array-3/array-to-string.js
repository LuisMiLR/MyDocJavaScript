/* 
//***************************************************************************** array to string **********************************************************************
//********************************************************************************************************************************************************************

Voici une astuce intéressante : disons que vous disposez d'un groupe d'utilisateurs et que vous souhaitez que le nom de chaque utilisateur soit séparé par une virgule. 
Comme un export CSV (Comma Separated Values). Comment feriez-vous cela?

Vous connaissez déjà les 2 méthodes dont vous avez besoin pour de telles opérations :

?tout d'abord, vous commencez par un .map() appel pour extraire le name du userstableau, puis vous utilisez .join() pour joindre les éléments du tableau en une 
?seule chaîne 
*/

const users = [
  {
    id: 1,
    name: "Sam Doe",
  },
  {
    id: 2,
    name: "Alex Blue",
  },
];

const userNamesArray = users.map((user) => user.name);
console.log(userNamesArray); // ["Sam Doe", "Alex Blue"];

const csv = userNamesArray.join(", ");
console.log(csv); // "Sam Doe, Alex Blue"

//Vous pouvez également enchaîner ces 2 commandes et l'écrire sur une seule ligne :

const cSv = users.map((user) => user.name).join(", ");
console.log(csv); // "Sam Doe, Alex Blue"
//Plutôt sympa, non ? ✨

/*
L'appliquer au HTML
L'astuce ci-dessus est souvent utilisée pour générer une chaîne HTML à partir d'un tableau. Disons que nous aimerions renvoyer une liste non ordonnée
(a ul avec lides éléments) du users tableau ci-dessus. Au lieu de l'écrire avec .forEach, vous pouvez utiliser l'astuce ci-dessus comme suit :
*/

const html = `<ul>
    ${users.map((user) => `<li>${user.name}</li>`).join("")}
    </ul>`;
console.log(html); // <ul> <li>Sam Doe</li><li>Alex Blue</li> </ul>
/*
Remarquez comment pour chaque user, nous renvoyons un <li>...</li> avec le nom de l'utilisateur à l'intérieur.
Ce qui est très important ici, c'est le .join(""). Si vous oubliez cela, vous obtiendrez le code HTML suivant :
*/
<ul>
  <li>Sam Doe</li>,<li>Alex Blue</li>
</ul>;

/*
En effet, le tableau renvoyé .map() sera automatiquement converti en chaîne par le navigateur. Il appellera automatiquement la .toString() méthode qui insérera une 
virgule après chaque élément du tableau .
Au lieu de cela, vous souhaitez convertir vous-même le tableau en chaîne. Vous pouvez le faire en appelant .join("")avec une chaîne vide comme colle.

Enfin, vous devez envelopper toute la chaîne avec l'ouverture <ul>et la fermeture </ul>.

Vous n'êtes pas nécessairement obligé d'utiliser cette approche, mais nous vous recommandons de vous y habituer car elle (ou une adaptation très similaire) est très fréquemment utilisée dans les bibliothèques/frameworks front-end (React, Angular, lit-element, etc)!

Est-ce que cela a été utile?

*/
