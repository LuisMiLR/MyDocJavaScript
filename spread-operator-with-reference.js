/* 
    1. Spread operator 

    La syntaxe de décomposition (en fr) permet de copier les valeurs d'un élément itérable, comme un tableau, une chaîne ou un objet.
    C'est pratique pour effectuer une copie superficielle ou afficher une liste.
*/

const array = [1, 2, 3, { a: 5 }];

// 1 cas d'utilisation je peux étendre ces propriétés en tant qu'argument à une fonction ou une méthode
console.log(...array); //1 2 3

const shallowArrayCopy = [...array, 4, 5, 6];
array[3].a = 555;
console.log(shallowArrayCopy); // [1 2 3 4 5 6]
/* 
1 ça a permis de copier les valeur primitives (numbers)
2 que se passe t'il si on ajoute un objet dans array {a:5}? 
ça va certe le copier dans le tableau shallowArrayCopy mais ce sera une valeur de référence, c'est à dire que la référence ce sera 
const array = [1, 2, 3, { a: 5 }]; et pas la copie
Si je change par la suite en mettant array[3].a = 555 et que je le log ensuite console.log(shallowArrayCopy); const array = [1, 2, 3, { a: 5555 }];
Bizarre ? non c'est parce que les objets sont des valeurs de références et non pas des valeurs primitives, quand je copie { a: 5 } je copie une référence à 
cette place la : { a: 5 } dans la mémoire, c'est ce qu'on appel une shallow copy (ça copie bien les élèment primitives mais pas les élèments de réfèrence) ça fait un réfèrence dans la mémoire originelle 
shallow copie = deep copie
*/

//ça fonctionne avec les objets, d'ailleurs un tableau est objet sous le capeau

const obj = {
  name: "Laura",
  age: 16,
};

const shallowObjCopy = { ...obj };
console.log(shallowObjCopy); // ça me copie les proprietés de obj {name:"Laura", age:26}

//je peux également en rajouter ex: dogName :"tim"
//const shallowObjCopy = { ...obj, dogName :"tim" };
console.log(shallowObjCopy); // {name:"Laura", age:26, dogName :"tim"}

// si une propriété est rajoutée alors qu'elle provient d'un objet copié, elle sera remplacée.
const shallowObjCopy2 = { ...obj, name: "Anna" }; //
console.log(shallowObjCopy2); //{name:"Anna", age:26, dogName :"tim"} si vous récrivez sur une propriété deja présente elle sera remplacer

// Fonctionne également avec les chaînes de caractères
const str = "Le chat saute, le chien court.";
const strCopyArray = [...str];
console.log(strCopyArray); // on obtient un tableau avec toute les strings séparer par des virgules
