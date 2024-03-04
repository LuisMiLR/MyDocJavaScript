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
  let stringReverse = string.split("").reverse().join("");
  let result = stringReverse === string;
  console.log(`est un palindrome ${string} ?  ${result}`);
}
estPalindrome("radar");
estPalindrome("tennis");

// * ceci est un test de couleur
// ? c'est quoi ici
// TODO : faire la fonction
// ! be careful
