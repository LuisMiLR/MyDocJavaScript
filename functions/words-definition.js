/* what is a function ? 

Une fonction est un bloc d'instruction qui peut être invoqué, c'est à dire exécuté, à différents endroits d'un programme

arguments = il est possible de passer des valeurs dynamique à une fonction, c'est ce que nous appellons des arguments
paramètres = sont les noms définie pour les arguments recu lors de la définition de la fonction voir exemple ((nombre1 et nombre 2))

en JS, les fonctions sont des objects 'Function', elles peuvent être copiées, elles sont passées par référence, elles sont des propriétés

Les définitions de fonction

Il y a 2 manières de définir des fonctions: les déclaration de fonction et les expressions de fonction. 

//**********La déclaration de fonction:

  utilise le mot clé 'function' puis le nom de la fonction, ensuite les parenthèse contenant des parametres (optionnel)
  puis les accolades contenant le bloc d'instruction 
*/

// Avec les paramètres (nombre1 et nombre 2) :
function nom2(param1, param2) {
  // instructions utilisant les valeurs passées
  // en argument
}

/* exemple détaillé */

function additionne(nombre1, nombre2) {
  const resultat = nombre1 + nombre2;
  console.log(resultat);
}

additionne(1, 2); // 3
additionne(42, 59); // 101

/* Nous définission une fonction en utilisant une déclaration de fonction
Le nom de la fonction est additionne

Elle utilise deux paramètre dont les nom sont nombre 1et 2 

Ses instructions sont de définir une variable 'resultat' qui contient le résultat de l'addition des parametres
et d'utiliser cette variable pour afficher le resultat avec un console.log()

nous invoquons la fonctions 1 première fois, c'est à dire que nous demons d'éxécution des instructions, en passant en argument 1 et 2, elle affiche 3
Nous invoquons la fonction une 2eme fois cette fois ci les arguments sont 42 et 59 la fonction affiche 101

il est possible de passer en argument toute valeur JS (primitives et tout object, notament des fonctions)
*/

// *! A noter les primitives sont passées par valeur et les objets par référence, comme pour les assignations !

//*********l'expression de fonction

/* 
 Il existe également une autre définition de fonction possible : l'expression de fonction, qui consiste à assigner une fonction à une 
 variable (une expression de fonction que je rentre dans une variable)
 */

const additionne = function (nombre1, nombre2) {
  const resultat = nombre1 + nombre2;
  console.log(resultat);
};

/* 
 Il y a pas de diférence au niveau de l'execution, cela permet d'utiliser des fonctions anonymes (sans nom)
 
 Vous pouvez cependant également déclarer un nom pour utilser la récursivité.
 c'est le faite d'invoquer une fonction dans la fonction, afin de l'executer jusqu'a une qu'une condition soit remplie:
 */

const factorielle = function f(n) {
  return n < 2 ? 1 : n * f(n - 1);
};

/* 
 La fonction s'invoquera elle-meme jusqu'a ce que n soit inférieur à 2.
 */

/*  
 la recommandation est de toujours utiliser la déclaration de fonction 
 elle est plus lisible et plus simple donc meilleure.
 */

/* 
 il existe une exception, lorsque vous voulez denir conditionnellement une fonction.
 */

//exemple déclaration de fonction:
if (x) {
  function test() {
    console.log("Salut !");
  }
} else {
  function test() {
    console.log("Bonjour !");
  }
}

test(); // Error: test is not defined

// cela est causé par la portée des déclarations de fonction.
//Dans ce cas il faut utiliser une expression de fonction :

//exemple:
let test;
if (x) {
  test = function () {
    console.log("Salut !");
  };
} else {
  test = function () {
    console.log("Bonjour !");
  };
}
test(); // Bonjour !

/*  par defaut, les parametres d'une fonction (nombre 1, nombre 2 ) 
ont une valeur undefined pour cela nous pouvons leurs assigné une valeur par defaut
*/

//il est possible d'utiliser l'operateur ...rest dans les parmetre d'une fonction mais en dernier parametre.

//une fonction dont vous n'avez pas spécifier de valeur de retour 'return', retourne undefined
