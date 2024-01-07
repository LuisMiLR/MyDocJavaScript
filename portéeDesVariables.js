// la porter des variables fait référence au contexte dans laquelle une variable est
//déclarer et peut etre utiliser

//**la portée global**//

//une variable déclarer en dehors de toute fonction ou bloc de code est une
//variable globale

const variableGlobale = 10;

function exampleFunction() {
  console.log(variableGlobale); // peut acceder à la variable globale
}

exampleFunction();
console.log(variableGlobale); // peut acceder également en dehors de la fonction

//**la portée local**//

//La variable déclarée à l'intérieur d'une fonction ou d'un bloc de code est une variable
//locale

function exampleFunction2() {
  const variableLocale = 20;
  console.log(variableLocale); // peut acceder à la variable
}

exampleFunction2();
console.log(variableLocale); // génére une erreur car la variable est déclarer dans le la fonction

// il ne faut pas déclarer une variable comme cela
variable = 4;
// car cela revient à la déclarer de cette manière
var variable = 4;

// les variables avec Let et const sont accésibles uniquement dans la fonction
//ou bloc de code déclarer ou dans le bloc enfant
