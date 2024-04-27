/* 
//************************************************** Nullish coalescing (Coalescence nulle) *****************************************************************************
//***********************************************************************************************************************************************************************

file 1

Dernière mise à jour en mars 2022

L'opérateur de fusion nul ?? est un nouvel opérateur introduit dans JavaScript qui vous permet de définir par défaut une certaine valeur lorsque 
le côté gauche est une valeur nulle.

Une valeur nulle est une valeur qui est soit null ou undefined.

Voici un exemple :
*/

const getName = (name) => {
  return name ?? "N/A";
};

console.log(getName("Sam")); // "Sam"
console.log(getName(undefined)); // "N/A"
console.log(getName(null)); // "N/A"

//Remarquez comment lorsque name est une valeur nulle (soit null ou undefined), alors le côté droit de l'opérateur est exécuté. Dans ce cas, "N/A".
//? Cet opérateur est utile pour éviter d'afficher des undefined ou null vers l'interface utilisateur, qui sont souvent signes de bugs.
//Dans la mesure du possible, si vous pouvez fournir une valeur par défaut, vous pouvez utiliser l'opérateur de fusion nul ?? pour afficher cette valeur par défaut.

/* 
Le cas d’utilisation courant de ?? est de fournir une valeur par défaut.
Par exemple, nous affichons ici user si sa valeur n’est pas null/undefined, sinon Anonymous :
*/

//exemple :
let user;

alert(user ?? "Anonymous"); // Anonymous (user is undefined)

//Voici l’exemple avec user attribué à un nom :

let uzer = "John";

alert(uzer ?? "Anonymous"); // John (user is not null/undefined)

//?Voici quelques exemples courants :
/* 
Afficher une chaîne vide "" au lieu de undefined ou null.
Affichage d'une chaîne telle qu'au "Deleted user" lieu d'une valeur nulle ( undefined ou null).
Affichage "N/A"(non applicable) au lieu d'une valeur nulle.

//************* Short circuit

The nullish coalescing operator fera un court-circuit si le côté gauche renvoie une valeur non nulle. Cela signifie qu’il n’exécutera pas le côté droit. 
Par exemple:
*/
const getPlaceholder = () => {
  console.log("getPlaceholder called");
  return "N/A";
};

const sayHello = (name) => {
  return `Hello ${name ?? getPlaceholder()}`;
};

console.log(sayHello("Sam")); // "Hello Sam"

/*

Dans cet exemple, name est une valeur non nulle, donc le name ?? getPlaceholder() court-circuit signifie que la getPlaceholder() fonction ne s'exécutera pas . 
Ainsi, vous ne verrez rien enregistré sur la console.

D'un autre côté, si nous appelons sayHello() (where name is undefined), alors le court-circuit name ?? getPlaceholder() se fera pas et la getPlaceholder()fonction 
s'exécutera. 
Ainsi, vous verrez "getPlaceholder called"connecté à la console.

La variable doit être définie
Semblable à chaînage optionnel, vous ne pouvez utiliser la fusion nulle que lorsque la variable est définie. Ainsi, la variable name (ou toute autre variable que vous utilisez sur le côté gauche de l'opérateur) doit être définie. 


//************* résumer
- L'opérateur de fusion nul ??est un nouvel opérateur introduit dans JavaScript qui vous permet de définir par défaut une certaine valeur lorsque le côté gauche est une valeur nulle.
- Une valeur nulle est une valeur qui est soit nullouundefined .
- L'opérateur de coalescence nul fera un court-circuit si le côté gauche renvoie une valeur non nulle. Cela signifie qu’il n’exécutera pas le côté droit.
- Vous ne pouvez utiliser la fusion nulle que lorsque la variable est définie. */
