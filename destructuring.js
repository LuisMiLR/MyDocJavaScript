/* 
1. Destructuring.

L'affectation par décomposition consiste à créer des variables à partir des propriétés d'un objet ou des éléments d'un tableau.
on va "unpack" ce qu'on veut
*/

/* A. Affecter les propriétés d'un objet. */

const userObj = {
  userName: "Karl",
  age: 44,
  country: "Germany",
};

//la syntaxe de l'affection par décomposition destructuring :

// const { country, age, userName } = userObj;
/* 
qu'est ce que j'ai fais ? j'ai crée 3 const country, age, userName, qui correspondent exactement aux propriétés de l'objet et ces const ont pris la
valeur de ces proprietes. c'est un moyen de définir des variables plus facilement
qu'est ce que j'ai fais j'ai crée 3 constantes 'country, age, userName ' qui correspondent à ces proprietés
c'est un moyen de construire des variables plus facilement,  l'ordre dans la destructuration n'as pas d importance, nous sommes pas obliger de prendre 
toutes les proprietés
*/

// *Donner un nom différent aux constantes

// const { userName: mainName, age: exactAge, country: origin } = userObj;

//donne donc un nouveau nom au propriété de l'objet

// *Créer des constantes par défaut, au cas où les props n'existent pas.

const { country, sport = "football", beverage = "beer" } = userObj;
console.log(country, sport, beverage); //football

/* ça ajoute sport: football, beverage: beer, en valeur par defaut, uniquement  par défault si dans l'objet original ne contient pas ces propriete ex : 
si dans l'objet sport: basketball // ca prend la valeur de propriété original
console.log(sport)//basketball
*/

// *Combiner un nom différent et des valeurs par défaut.

/* 
const {userName: mainName = "hanz" } = userObj
console.log(mainName)//karl (car la valeur existe sinon ça serait hanz)
*/

// *Affecter les props d'un objet attendu en paramètre

const numbers = {
  num1: 50,
  num2: 40,
};
function foo({ num1, num2 }) {
  return num1 + num2;
}
console.log(foo(numbers));

/* Dans la fonction foo on sais qu'on attend un objet, dans les composants react on verra qu'on attend toujours la meme chose dans les props de manière générale
au lieu d'utiliser les propriétés avec la dot notation (numbers.num1) on peut faire du destructuring dans le parametre

//*sans destructuring

function foo(num1, num2) {
  return numbers.num1 + numbers.num2;
}
console.log(foo(numbers));

*/

/* B. Affecter les valeurs d'un tableau. */

const animals = ["cat", "dog", "mouse", "lion"];

// *valeur par défaut et ignorer des valeur

// *affecter le reste d'un tableau

// *Fonctionne aussi avec les strings

//course not finished, to be checked
