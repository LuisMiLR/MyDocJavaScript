/* 
    1. Rest operator
    Les paramètres du reste permettent d'accepter un nombre indéfini d'arguments rendus disponibles sous forme d'un tableau.
*/

function concatenation(...strings) {
  console.log(strings);
  return strings.reduce((acc, cur) => acc + cur);
}

console.log(concatenation("Je ", "suis ", "heureux."));

//dans cet exemple ..strings rassemble tous les arguments passés à la fonction concatenation() dans un tableau appelé strings
// Je peux ensuite manipuler 'strings' comme un tableau ordinaire.

/* 
Utilisation avec les tableaux 

Vous pouvez utilisez également le 'rest operator pour extraire une partie d'un tableau.
*/

const numbers = [1, 2, 3, 4, 5];

const [first, second, ...rest] = numbers;

console.log(first); // Output: 1
console.log(second); // Output: 2
console.log(rest); // Output: [3, 4, 5]

/* 
Dans cet exemple les variables first et second obtiennent les deux éléments du tableau numbers tandis que le rest opérator ...rest rassemble tous les éléments restants du tableau appelé rest


Utilisation avec les parameètres de déstructuration

Vous pouvez également utiliser le rest operator avec les paramètres de déstructuratio pour extraire certaines propriétés d'un objet dans une nouvelle variable, tout en rassemblant les reste des propriétes dans une autre.  
*/

const person = {
  name: "John",
  age: 30,
  country: "USA",
  profession: "Developer",
};

const { name, age, ...others } = person;

console.log(name); // Output: 'John'
console.log(age); // Output: 30
console.log(others); // Output: { country: 'USA', profession: 'Developer' }

/*
Dans cette exemple, les variables name et age obtiennent les propriétés name et age de l'objet person, tandis que le rest operator ...others rassemble 
toutes les autres proprietes dans un objet appelé others

*/

/* 
    2. Les paramètres par défaut.

    Ils permettent de définir une valeur par défaut si un argument correspondant au paramètre en question n'est pas fourni.
*/

function welcoming(userName = "visiteur") {
  return `Bienvenue, ${userName}.`;
}
console.log(welcoming("Paul"));
console.log(welcoming("Sara"));
console.log(welcoming());

// course not finished, to be check elements
