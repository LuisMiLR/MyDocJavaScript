//*********** La Mémoire et la Gestion des Objets en JavaScript
//Point 3

/* 
Continuons notre exploration de la gestion de la mémoire en JavaScript, en mettant l'accent sur la libération de mémoire et les bonnes pratiques associées.


//******************************************************* 1. **La Gestion Automatique de la Mémoire :** ************************************************************

JavaScript utilise un système de gestion automatique de la mémoire appelé "Garbage Collection". Ce système identifie et libère automatiquement la
mémoire des objets qui ne sont plus référencés. Cela signifie que lorsque vous n'avez plus de références pointant vers un objet, cet objet devient 
éligible à la suppression par le ramasse-miettes (garbage collector).
*/

let person = {
  name: "John",
  age: 25,
};

// Plus de référence à l'objet
person = null; // L'objet peut être supprimé par le garbage collector

/* //*************************************************** 2. **Références Circulaires :** *************************************************************************

Une référence circulaire se produit lorsqu'un objet a une propriété qui pointe vers un autre objet, et cet autre objet a une propriété qui pointe de nouveau vers
le premier objet. Cela peut entraîner des problèmes avec le garbage collector, car ces objets se référencent mutuellement, empêchant leur libération de mémoire.
*/

let objA = {};
let objB = {};

objA.reference = objB;
objB.reference = objA;

/* //*************************************************************** 3. *Bonnes Pratiques : **********************************************************************

Même si ces objets ne sont plus accessibles par le code, le garbage collector peut ne pas les libérer en raison de la référence circulaire.

/* //***********************************************  Pour bien comprendre revenons un peu en arrière ! ***********************************************************
//*******************************************************************************************************************************************************************

### 1. Introduction à la gestion de la mémoire en JavaScript :

JavaScript est un langage de programmation à typage dynamique qui utilise un modèle de gestion de mémoire appelé "ramasse-miettes" (garbage collection). Contrairement à
 d'autres langages comme C ou C++, où le programmeur est responsable de gérer manuellement la mémoire, JavaScript automatise ce processus pour simplifier
le développement.

### 2. Variables et allocation de mémoire :

En JavaScript, vous déclarez des variables en utilisant les mots-clés `var`, `let` ou `const`. Lorsque vous affectez une valeur à une variable, 
JavaScript alloue de la mémoire pour stocker cette valeur.

var x = 10;
let y = "Hello";
const z = true;


### 3. Types de données et références :

JavaScript gère différents types de données tels que les nombres, les chaînes de caractères, les objets, etc. Lorsque vous affectez un objet à une variable, 
celle-ci contient une référence à l'emplacement mémoire où se trouve cet objet, pas l'objet lui-même.

Exemple :
let obj = { name: "John", age: 30 };

Dans cet exemple, `obj` contient une référence à l'objet `{ name: "John", age: 30 }`.

### 4. Portée des variables et gestion de la mémoire :

Les variables JavaScript ont une portée, ce qui signifie qu'elles existent dans une certaine partie du code. Lorsqu'une variable n'est plus accessible, 
JavaScript peut libérer la mémoire qu'elle occupait.

Exemple :

function exampleFunction() {
    let localVar = "I am a local variable";
    console.log(localVar);
}

exampleFunction(); // "I am a local variable" sera affiché dans la console */
// Une fois la fonction terminée, localVar n'est plus accessible et la mémoire qu'elle occupait peut être libérée

/*
### 5. Références circulaires et fuites de mémoire :

Les fuites de mémoire se produisent lorsque des objets ne sont plus nécessaires mais restent en mémoire car ils sont toujours référencés. Les références circulaires, où deux objets se réfèrent l'un à l'autre, sont une cause fréquente de fuites de mémoire.

Exemple de référence circulaire :

let obj1 = {};
let obj2 = {};

obj1.ref = obj2;
obj2.ref = obj1;

Même si ces objets ne sont plus accessibles depuis le reste du code, ils ne seront pas collectés par le ramasse-miettes
```

### 6. Techniques pour éviter les fuites de mémoire :

- Évitez les références circulaires lorsque cela est possible.
- Assurez-vous de libérer les ressources telles que les écouteurs d'événements ou les timers lorsqu'elles ne sont plus nécessaires.
- Utilisez des outils de débogage et de profilage pour identifier les fuites de mémoire potentielles.



/*  
Minimisez les références inutiles : Évitez de stocker des références longues durées vers des objets dont vous n'avez plus besoin.

Gestion des références circulaires : Si vous utilisez des structures de données avec des références circulaires, assurez-vous de casser ces références au besoin.

Libération Manuelle : Dans certains cas, pour les ressources importantes, libérez manuellement la mémoire en réinitialisant les références à null. 


************************************************************************ Conclusion : ************************************************************************
Comprendre comment JavaScript gère la mémoire et les références est essentiel pour écrire un code efficace et éviter les fuites de mémoire. Bien que le 
garbage collector simplifie la gestion de la mémoire, il est important de rester conscient de la manière dont les objets sont référencés et comment cela 
peut influencer la libération de mémoire. En suivant ces bonnes pratiques, vous pouvez améliorer la performance et la stabilité de vos applications JavaScript.
*/
