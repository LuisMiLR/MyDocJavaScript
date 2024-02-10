//Introduction to arrow functions

/*Dans cette leçon, nous apprendrons comment écrire des fonctions fléchées. Une fonction flèche présente 3 avantages principaux :

1 C'est plus court à écrire.
2 Il utilise une portée lexicale (cela sera expliqué dans un chapitre ultérieur car nous devons d'abord en apprendre davantage sur les classes).
3 Il peut bénéficier d’un retour implicite (abordé dans le chapitre suivant).

Voici un exemple de fonction flèche :  */
const sum = (a, b) => {
  return a + b;
};

/* De la fonction à la fonction flèche
Dans cette section, nous allons vous montrer les étapes dont vous avez besoin pour passer d'une fonction à une fonction fléchée. Ces étapes sont utiles lors de l’introduction du concept de fonctions fléchées. Une fois que vous vous y serez habitué, vous pourrez écrire directement une fonction fléchée.

Il existe plusieurs façons d'écrire une fonction en JavaScript.
Vous pouvez soit définir une fonction et lui donner un nom, soit définir une variable et l'attribuer à une fonction anonyme.

Donc la fonction suivante : */

function sum(a, b) {
  return a + b;
}
//Peut s'écrire ainsi :

const sum = function (a, b) {
  return a + b;
};
/* Remarquez comment nous définissons une variable sum, puis nous l'attribuons à une fonction qui prend 2 paramètres aet b.

Maintenant, convertissons cette fonction en fonction flèche .

Vous pouvez le faire en 2 étapes :

supprimer le mot-clé de fonction
ajouter une flèche ( =et >) entre les paramètres (a, b)et l'accolade ouvrante{
Voici à quoi cela ressemblera : 
*/
const sum = (a, b) => {
  return a + b;
};
/* Les fonctions fléchées commencent toujours par les paramètres, suivis de la flèche =>puis du corps de la fonction . 


résumer
Les fonctions fléchées sont plus courtes à écrire.
Les fonctions fléchées commencent toujours par les paramètres, suivis de la flèche =>puis du corps de la fonction.
*/

/********************************  revisiter les methodes des arrays************************** 


Voici l’ .forEach exemple que nous avons vu
*/
const grades = [10, 8, 13];

grades.forEach(function (grade) {
  console.log(grade);
});

//L'itération peut être réécrit à l'aide des fonctions fléchées comme suit :
grades.forEach((grade) => {
  console.log(grade);
});
//De plus, comme la fonction flèche a un paramètre (sans valeur par défaut), vous êtes autorisé à supprimer les
//parenthèses ()entourant le paramètre :

grades.forEach((grade) => {
  console.log(grade);
});

/*******************  Ce n'est le cas que lorsque vous disposez d'un seul paramètre. Plusieurs paramètres doivent être placés entre parenthèses() . 



*******Récapitulatif du chapitre
- Un paramètre est une variable dans une définition de fonction. Lorsqu'une fonction est appelée, les arguments sont les données que vous transmettez dans les paramètres de la méthode.
-Lorsque vous appelez une fonction sans fournir de valeur pour un argument attendu, ce dernier sera par défaut undefined.
- Les paramètres par défaut permettent de donner une valeur par défaut à un ou plusieurs paramètres qui n'ont pas été fournis lors de l'appel de la fonction.
- Les fonctions fléchées sont plus courtes à écrire.
- Les fonctions fléchées commencent toujours par les paramètres, suivis de la flèche =>puis du corps de la fonction.
- Lorsqu'une fonction fléchée a un paramètre sans valeur par défaut, vous êtes autorisé à supprimer les parenthèses autour de ce paramètre.
*/
