//************* Manipulation d' Objets & Références en js
//point 2

/* Maintenant que nous comprenons que les variables qui stockent des objets contiennent en réalité des références à la mémoire où ces objets sont stockés, 
examinons comment cela affecte la manipulation d'objets.


//********************************************************* 1. Assignation de Références : ****************************************************************
Lorsque vous attribuez la valeur d'une variable à une autre avec des objets, vous copiez la référence à l'objet, pas l'objet lui-même. 
Voyons un exemple : 
*/
const person = {
  name: "John",
  age: 25,
};

const anotherPerson = person; // anotherPerson fait référence au même objet que person
/* 
Maintenant, si nous modifions anotherPerson, cela affectera également person car ils pointent vers la même zone mémoire.


********************************************************** 2. Comparaison d'Objets : *********************************************************************
Lorsque vous comparez des objets avec l'opérateur ===, cela vérifie si les références pointent vers le même emplacement mémoire. Si ce n'est pas 
le cas, même si les objets ont les mêmes propriétés, la comparaison renverra false.
*/
const person1 = {
  name: "John",
  age: 25,
};

const person2 = {
  name: "John",
  age: 25,
};

console.log(person1 === person2); // false, car ce sont deux objets différents en mémoire

/* //******************************************************** 3. Clonage d'Objets : *******************************************************************
Si vous souhaitez créer une copie indépendante d'un objet plutôt qu'une référence partagée, vous devez effectuer un "clonage". Cela peut être fait 
manuellement ou en utilisant des méthodes appropriées.
 */

// Clonage manuel (simplifié, ne fonctionne bien que pour des objets simples)
const clonedPerson = {
  name: person.name,
  age: person.age,
};

// Utilisation de méthodes appropriées (par exemple, Object.assign, spread operator, etc.)
const clonedPerson2 = { ...person };

/* //************************************************** Importance de la Compréhension des Références *************************************************
Comprendre comment les objets sont manipulés en mémoire est crucial pour éviter des erreurs subtilement liées à la manipulation d'objets. Cela devient 
particulièrement important lors du travail avec des structures de données complexes et de la gestion d'états dans les applications JavaScript.

En résumé, les références jouent un rôle central dans la manipulation d'objets en JavaScript, influençant la manière dont les objets sont assignés, 
comparés et clonés. Une compréhension claire de ce concept permet une utilisation plus efficace et sans erreur des objets dans votre code.
 */
