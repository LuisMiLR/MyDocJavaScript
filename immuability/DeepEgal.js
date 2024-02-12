/* ******************************************************************* Deep egale ******************************************************************

En comparant 2 objets avec ===, nous avons vu que s'ils n'étaient pas la même instance, nous obtiendrons false .
C'est parce qu'il === s'agit de comparer les références plutôt que les valeurs. 

le comportement de l'opérateur === (strictement égal) lors de la comparaison de deux objets en JavaScript. Lorsque vous utilisez === pour comparer 
deux objets, il vérifie si les deux objets sont exactement la même instance en mémoire. Si ce n'est pas le cas, la comparaison retourne false, 
même si les objets ont des propriétés identiques.
Deux objets avec les mêmes propriétés et valeurs ne sont pas considérés comme égaux avec === s'ils ne sont pas la même instance physique.

c est quoi "la même instance en mémoire."?
"La même instance en mémoire" signifie que deux variables ou références pointent vers la même zone de la mémoire de l'ordinateur, c'est-à-dire qu'elles 
font référence au même objet physique. En JavaScript, lorsque vous créez un objet, cet objet est stocké en mémoire, et la variable qui référence cet 
objet ne contient pas directement l'objet lui-même, mais plutôt une référence à l'emplacement en mémoire où l'objet est stocké.

Voici un exemple pour illustrer cela :
*/
const obj1 = { key: "value" };
const obj2 = { key: "value" };
const obj3 = obj1;

console.log(obj1 === obj2); // false, car obj1 et obj2 ne sont pas la même instance en mémoire
console.log(obj1 === obj3); // true, car obj1 et obj3 sont la même instance en mémoire

/*
Dans cet exemple, obj1 et obj2 sont deux instances distinctes en mémoire, même si leurs propriétés sont les mêmes. obj3 est une 
référence à la même instance en mémoire que obj1.


Lorsque vous utilisez l'opérateur === pour comparer deux objets, il vérifie si les deux variables ou références pointent vers la même adresse mémoire. Si c'est le cas, 
ils sont considérés comme étant la même instance en mémoire, et l'opération de comparaison renvoie true. Si les variables pointent vers des emplacements mémoire 
différents, même si les objets qu'elles référencent ont des propriétés identiques, la comparaison avec === renverra false.

Si vous souhaitez comparer par valeurs, alors ce que vous recherchez 
s'appelle deep égal. 

Les navigateurs ont récemment livré une fonction appelée structuredClone qui permet de créer un clone profond en JavaScript sans avoir recours à une bibliothèque
externe (comme lodash– nous en apprenons plus lodashau chapitre 69).
Cependant, vous devez faire attention à ne pas appeler de telles méthodes très fréquemment, car cela pourrait nuire aux performances de votre application.

C'est pourquoi les bibliothèques/frameworks front-end n'utilisent pas une stratégie d'égalité profonde lorsqu'ils comparent leur état (avant et après), mais
utilisent plutôt le === (égalité stricte) parce que c'est extrêmement rapide.
C'est pourquoi vous devez mettre à jour l'état de manière immuable (qu'il s'agisse d'un tableau ou d'un objet).


***************************************************************** Qu’est-ce que l’immuabilité ? ************************************************************

Un objet immuable est un objet qui ne peut pas être modifié. Comme nous ne pouvons pas (ou parfois ne devrions pas) modifier un objet immuable, nous créons 
un objet entièrement nouveau basé sur l'original, laissant l'objet d'origine inchangé.

Dans ce chapitre, il est important que vous compreniez pourquoi l'immuabilité est nécessaire, comment === fonctionne et que l'affectation d'une variable à un objet 
ne le clonera pas (mais pointera plutôt vers la même référence).
Dans le chapitre suivant, nous apprendrons les opérations les plus courantes pour mettre à jour de manière immuable des tableaux et des objets, ainsi que les 
méthodes courantes qui sont mutables et celles qui sont immuables.

Jetez un œil à cet exemple :
*/
const grades = [
  {
    id: 1,
    grade: 12,
    isPassing: false, // we need to update this to true
  },
  {
    id: 2,
    grade: 14,
    isPassing: true,
  },
];

/* Nous devons mettre à jour la note avec id = 1 pour que la isPassing propriété soit définie sur true. Utilisons la .find()méthode Array pour trouver l'objet 
à l'intérieur du tableau d'objetsgrades : 
*/

// find the entry with id = 1
const entry = grades.find((grade) => grade.id === 1);
// set it to passing
entry.isPassing = true;
console.log(grades); // ?

//Que pensez-vous qu'il va se passer maintenant quand vous console.log(grades)?

/* La isPassing propriété sera mise à jour true car lorsque nous avons attribué const entry = à l'objet résultant de grades.find(), nous n'avons pas créé de copie 
de cet objet mais nous faisons plutôt référence au même objet .
Ainsi, le console.log(grades)vous montrera le tableau d'objets mis à jour suivant : 
*/

[
  {
    id: 1,
    grade: 12,
    isPassing: true, // it got updated
  },
  {
    id: 2,
    grade: 14,
    isPassing: true,
  },
];

/* résumer
Triple égal (égalité strict) === consiste à comparer les références plutôt que les valeurs. Si vous souhaitez comparer par valeurs, alors ce que vous recherchez s'appelle deep égal .
Deep Equal est trop lent pour être utilisé dans les frameworks/bibliothèques front-end, c'est pourquoi la plupart d'entre eux s'appuient sur la vérification de l'égalité
avec ===. Un objet immuable est un objet qui ne peut pas être modifié. Comme nous ne pouvons pas (ou parfois ne devrions pas) modifier un objet immuable, 
nous créons un objet entièrement nouveau basé sur l'original, laissant l'objet d'origine inchangé. */

//voir aussi le fichier object & memoire en complément
