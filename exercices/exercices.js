//****************************************exercices: calculer une moyenne a partir d'un tableau de note

//avec la boucle for

// function calculerMoyenne(nombres) {
//   let resultat = 0;

//   Utilisez une boucle for pour add tous les nombres
//   for (let i = 0; i < nombres.length; i++) {
//     resultat += nombres[i];
//   }
//   resultat /= nombres.length;

//   return la moyenne
//   console.log(resultat);
//   resultat;
// }

//  Appel de la fonction avec un tableau de nombres
// let moyenne = calculerMoyenne([10, 20, 30, 40, 50]);

//*****************avec la méthode reduce

// function calculerMoyenne(nombres) {
//    Utilisez reduce pour obtenir la somme de tous les nombres
//   let somme = nombres.reduce((acc, nombre) => acc + nombre, 0);

//    Divisez la somme par le nombre d'éléments pour obtenir la moyenne
//   let moyenne = somme / nombres.length;

//    Retournez la moyenne
//   return moyenne;
// }

//  Appel de la fonction avec un tableau de nombres
// let moyenne = calculerMoyenne([10, 20, 30, 40, 50]);

//  Affichage du résultat
// console.log(`La moyenne est : ${moyenne}`);

//*********************************Exercice : Vérification du Palindrome
//Objectif : Écrire une fonction en JavaScript qui vérifie si un mot est un palindrome.

function estPalindrome(string) {
  const normalise = string.toLowerCase().trim()
  const inverseString = normalise.split("").reverse().join("")
  const result = normalise === inverseString
  return `est ce que ${string} est un palindrome : ${result}`
  }
estPalindrome("radar");
estPalindrome("tennis");

// * ceci est un test de couleur
// ? c'est quoi ici
// TODO : faire la fonction
// ! be careful

//******************/

// Exemple 1
// const fruits = ["pomme", "poire", "banane"];
// console.log(fruits.filter(f => f.includes("p")));

// Exemple 2
// const phrase = "bonjour le monde";
// const mots = phrase.split(" ");
// const transform = mots.map(m => m.toUpperCase()).join(" ");

// console.log(transform);

// Méthodes sur Arrays & Strings (version contextuelle)

//****************/ 1️Écris une fonction qui vérifie que **toutes les notes d’une classe** sont supérieures ou égales à 0.  

const grades = [8, 12, 4, 12];

function verifyGrades( grades) { 
  const verify = grades.every(grade => grade > 0)
  return verify
} 

console.log(`Student grades are greater than 0: ${ verifyGrades( grades)}`);


//****************/ 2 Écris une fonction qui vérifie si au moins un étudiant a obtenu la note maximale (20).

const grades2 = [14, 20, 17, 18];

function verifyGradesAbove20 (grades2) {
  const verifyGrades = grades2.some(grade => grade === 20)
  return verifyGrades
}

console.log(`Student grade is egal 20 ?: ${verifyGradesAbove20(grades2)}`);


//******************/ 3 À partir d’une liste de prénoms d’élèves, crée un nouveau tableau contenant uniquement ceux dont le prénom contient plus de 4 lettres.

const students = ["Leo", "Anna", "Clara", "Thomas"];

//map pour parcourrir le tableau
//verifier la longueur du prénom 
//si supérieur stocker dans nouveau tableau

// const newStudents = [] 
// students.forEach( student => {
//  if ( student.length > 4 ) {
//   newStudents.push(student)
//   }
// })

// console.log(newStudents);

// ! plus consise avec filter 

const newStudents = students.filter( student => student.length > 4 );

console.log(newStudents);

//****************/ 4 Trouve le premier produit du magasin dont le prix dépasse 50 €.

const prices = [12, 30, 55, 42, 80];

const goodPrice = prices.find( price => price > 50 )
console.log(`Price above 50 is : ${goodPrice}`);

// const goodPrice = prices.forEach( price => {
//   if ( price > 50 ) {
//     return price[i]
//   }
// } )