//****************************************************************** Object *********************************************************************************************
//***********************************************************************************************************************************************************************

//********définition
/* 
Un objet est une antité qui possède des propriétés et des méthodes 
- Chaque propriété définit une caractèristique, une information de l'objet (ex: la couleur)
- Chaque méthode défini un comportement, une action de l'objet (ex: ecrire)
*/

//un object sert à stocker des propriétés alors qu'un tableau sert à stocker une liste par ex liste d'animaux
//L'object sert à stocker les caractéristique de l'animal

//les accolades {} pour déclarer le contenu d'un objet
//des paires clé / valeur séparées par des virgules

const myDog = {
  name: "Rex",
  colors: ["white", "black"],
};

//deux façon d'afficher la valeur d'un objet
console.log(myDog.name); // affichera Rex
console.log(myDog["name"]); // affichera Rex

//⚠️ Lorsque l'on souhaite accéder à la propriété d'un objet dont le nom contient un ou plusieurs espaces,
//il est obligatoire d'utiliser les crochets []

//Pour ajouter une paire clé/valeur à un objet
mydog.age = 3;

// Pour supprimer une propriété d'un objet on utilise
delete myDog.age;
/* l'utilisation de delete n'est pas toujours nécessaire ou recommandée.
Pour simplement supprimer la valeur d'une propriété sans supprimer la propriété elle-même,
il peut être plus approprié de définir la valeur de la propriété à undefined ou null.
Cela dépend du contexte et de la logique de votre application. */

//******************************************************************** Méthodes sur objet ********************************************************************************

//****Object.keys(obj)****

//Cette méthode renvoi un tableau de toute les clés de l'objet fournit en parametre 'obj'

// Object avec une masjuscule est une variable globale dispo en js, similaire à Number comme
// en exemple Number.parsInt()

//la variable globale Object à des méthodes pertinente pour les objets, l'une d'elle est .keys()
//exemple :

const user = {
  id: 1,
  name: "Sam Green",
  age: 20,
};

const keys2 = Object.keys(user);
console.log(keys2); // ["id", "name", "age"]
//il renvoie un tableau contenant chaque clé de l'objet user.

//Puisque Object.keys() renvoi un tableau, vous pouvez l'utiliser pour parcourir chaque clé de l'objet et obtenir sa valeur de manière dynamique :

const settings = {
  theme: "Dark",
  version: "2.4.1",
  beta: false,
};

const keys = Object.keys(settings);
console.log(keys); // ["theme", "version", "beta"]
keys.forEach((key) => {
  // log the value of every key dynamically
  console.log(settings[key]);
});
//Le console.log(settings[key]) enregistrera la valeur de chaque clé.
//"Dark"
//"2.4.1"
//false

// ****Objet.values()****
// La méthode Object.value() renvoie un tableau contenant les valeurs des propriétés représentant chaque paire clé/valeur:

const user1 = {
  id: 1,
  name: "Sam Green",
  age: 20,
};

const values = Object.values(user1);
console.log(values); // [1, "Sam Green", 20]

//**** Object.entries() */

//La méthode La Object.entries() renvoie un tableau de tableaux représentant chaque paire clé/valeur:
const user2 = {
  id: 1,
  name: "Sam Green",
  age: 20,
};

const entries = Object.entries(user2);
// La variable inputs renverra le tableau de tableaux suivant :

[
  ["id", 1],
  ["name", "Sam Green"],
  ["age", 20],
];

//C'est particulièrement utile en combinaison avec la déstructuration de tableaux et for..in

//Il est possible de vérifier si une clé existe
//dans un objet à l'aide de l'opérateur in, il renvoie true si la propriété spécifiée est trouvée dans l'objet
//spécifié, sinon il renvoie false

//exemple :
const persons = {
  name: "Alex",
  age: 35,
};

if ("name" in persons) {
  console.log(persons.name);
}
//(le nom de la propriété doit être donné sous forme de chaîne!)

//************** remonté d'erreur

// regardons ce qui se passe lorsque vous accédez à une propriété qui n'existe pas sur un objet.

const person = {
  id: 1,
  firstName: "Sam",
};

// person.firstname; // undefined (firstname au lieu de firstName)
// person.age; // undefined

// Remarquez, lorsque nous accédons à une propriété qui n'existe pas
//(comme age ou mal orthographié firstname), nous obtenons undefined.
// Ce n'est pas une erreur mais cela peut souvent conduire à une erreur si vous essayez d'accéder à une autre propriété ou méthode.

//Exemple:
// person.age.toUpperCase(); // ❌ Uncaught TypeError: Cannot read property 'toUpperCase' of undefined
// C'est l'une des erreurs les plus courantes que vous verrez en JavaScript

// Il est important de savoir lire ce message d'erreur et de comprendre que le problème n'est pas .toUpperCase() mais plutôt l'expression qui
// l'a précédé person.age
// C'est parce que vous appeler undefined.toUpperCase() ce qui n'existe pas.

//********* [object Object]

//lorsque que l'on voit, [object Object] cela signifie que la .toString() méthode a été automatiquement appelée
//sur un objet, ce qui entraînera [object Object]

/* 
Lorsque vous utilisez `console.log()` avec un nombre comme `const number = 10`, JavaScript n'appelle pas la méthode `toString()` sur ce nombre. Les types primitifs
comme les nombres (`number`), les chaînes de caractères (`string`), les booléens (`boolean`), etc., sont affichés directement sans avoir besoin d'appeler `toString()`.

Par conséquent, lorsque vous faites `console.log(number)`, JavaScript affiche simplement la valeur de `number`, qui est `10`, sans avoir besoin de convertir
le nombre en une chaîne de caractères.

La méthode `toString()` est principalement utilisée pour les objets, car elle fournit une représentation sous forme de chaîne de caractères de l'objet. 
Elle est donc appelée lors de l'affichage d'objets avec `console.log()`. */


//******** ASTUCE DE DEBUGAGE

//Le raccourci d’objet peut être utilisé comme une astuce de débogage très utile. Disons que vous avez le code suivant :

const sum = (a, b) => {
  console.log(a); // 1
  console.log(b); // 3
  let total = a + b;
  console.log(total); // 4
  return total;
};

// Sample usage
sum(1, 3);

// Il y a plusieurs console.log appels car nous essayons de déboguer notre code. Cependant, il nous sera difficile de cartographier sur la console quelle valeur
//correspond à quel appel de console.log.
// Pour résoudre ce problème, vous pouvez envelopper chaque variable dans l'appel console.log avec {} afin que le code devienne le suivant :

const sum2 = (a, b) => {
  console.log({ a }); // {a: 1}
  console.log({ b }); // {b: 3}
  let total = a + b;
  console.log({ total }); // {total: 4}
  return total;
};
// Sample usage
sum2(1, 3);
// le raccourci d’objet vous permet de spécifier uniquement la clé
//L'avantage ici est qu'au lieu de vous connecter a, vous vous connectez{a: a}
