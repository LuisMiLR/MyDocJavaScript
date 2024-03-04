//La Mémoire et la Gestion des Objets en JavaScript
//Point 3

/* 
Continuons notre exploration de la gestion de la mémoire en JavaScript, en mettant l'accent sur la libération de mémoire et les bonnes pratiques associées.


*********************************************************** 1. **La Gestion Automatique de la Mémoire :** ****************************************************

JavaScript utilise un système de gestion automatique de la mémoire appelé "Garbage Collection". Ce système identifie et libère automatiquement la
mémoire des objets qui ne sont plus référencés. Cela signifie que lorsque vous n'avez plus de références pointant vers un objet, cet objet devient 
éligible à la suppression par le ramasse-miettes (garbage collector).

JavaScript utilise un système de gestion automatique de la mémoire appelé "Garbage Collection". Ce système identifie et libère automatiquement la mémoire des objets qui ne sont plus référencés. 
Cela signifie que lorsque vous n'avez plus de références pointant vers un objet, cet objet devient éligible à la suppression par le ramasse-miettes (garbage collector).
*/

let person = {
  name: "John",
  age: 25,
};

// Plus de référence à l'objet
person = null; // L'objet peut être supprimé par le garbage collector

/* ************************************************************ 2. **Références Circulaires :** **************************************************************

Une référence circulaire se produit lorsqu'un objet a une propriété qui pointe vers un autre objet, et cet autre objet a une propriété qui pointe de nouveau vers
le premier objet. Cela peut entraîner des problèmes avec le garbage collector, car ces objets se référencent mutuellement, empêchant leur libération de mémoire.
*/

let objA = {};
let objB = {};

objA.reference = objB;
objB.reference = objA;

// Même si ces objets ne sont plus accessibles par le code, le garbage collector peut ne pas les libérer en raison de la référence circulaire.

/* *************************************************************** 3. *Bonnes Pratiques : **********************************************************************
Minimisez les références inutiles : Évitez de stocker des références longues durées vers des objets dont vous n'avez plus besoin.

Gestion des références circulaires : Si vous utilisez des structures de données avec des références circulaires, assurez-vous de casser ces références au besoin.

Libération Manuelle : Dans certains cas, pour les ressources importantes, libérez manuellement la mémoire en réinitialisant les références à null. 


************************************************************************ Conclusion : ************************************************************************
Comprendre comment JavaScript gère la mémoire et les références est essentiel pour écrire un code efficace et éviter les fuites de mémoire. Bien que le 
garbage collector simplifie la gestion de la mémoire, il est important de rester conscient de la manière dont les objets sont référencés et comment cela 
peut influencer la libération de mémoire. En suivant ces bonnes pratiques, vous pouvez améliorer la performance et la stabilité de vos applications JavaScript.
*/
