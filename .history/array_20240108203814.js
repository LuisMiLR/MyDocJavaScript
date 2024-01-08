// Arrays

// On peut acceder à un élement d'un array
const vegetables = [
  "carrot",
  "broccoli",
  "pepper",
  "cabbage",
  "zucchini",
  "onion",
  "salad",
  "cauliflower",
];
console.log(vegetables[0]); // affichera carrot

//On peut ajouter un element au tableau de cette manière
vegetables[8] = "leek";

// ****Les méthodes Liées au arrays****

//.push pour ajouter un element à la fin d'un tableau
const colors = ["red", "blue", "orange", "yellow", "white", "grey", "purple"];
colors.push("green"); // on ajoute la chaine de caractères "green" à la fin du tableau

//.unshift ajouter un element au début du tableau
colors.unshift("green"); // on ajoute la chaine de caractères "green" au début du tableau

//.pop supprimer un element à la fin du tableau
colors.pop();

//.shift supprimer un element au début du tableau
colors.shift();

//
