//*********************************  Implicit conversion & falsy values *******************************************************
//*****************************************************************************************************************************

//****** Implicite conversion (Conversion implicite)

/* La conversion implicite fait référence à la conversion automatique d'un type de données en un autre, effectuée par le moteur JavaScript sans que vous ayez 
explicitement spécifié la conversion. Cela peut se produire dans différentes situations, par exemple lors de l'utilisation d'opérateurs ou de fonctions qui attendent
un certain type de données.

Par exemple, si vous additionnez une chaîne de caractères à un nombre, JavaScript va automatiquement convertir le nombre en une chaîne de caractères pour effectuer
la concaténation :

var x = 5;
var y = "10";
var result = x + y; // JavaScript convertit 5 en "5" puis concatène les chaînes pour obtenir "510"
console.log(result); // Affiche "510"

De même, lors de l'évaluation d'une condition dans une instruction `if`, JavaScript convertira automatiquement une valeur non booléenne en un booléen.
 Par exemple :

let num = 0;
if (num) {
    console.log("La condition est vraie"); // Cette ligne ne sera pas exécutée car 0 est converti en faux
} else {
    console.log("La condition est fausse"); // Cette ligne sera exécutée car 0 est considéré comme faux
}

Cette conversion implicite peut parfois conduire à des résultats inattendus si elle n'est pas prise en compte, donc il est important de bien comprendre
comment JavaScript traite les types de données et les conversions implicites. */

/* comment la conversion implicite se produit dans des contextes booléens. Par exemple, nous savons
 que l’instruction if attend une condition qui est évaluée comme un booléen. Mais que se passe-t-il lorsque
 nous lui donnons une chaîne ou un nombre ? : */

const name = "Sam";
const number = 0;

if (name) {
  console.log("First condition");
}

if (number) {
  console.log("second condition");
}

//Le code ci-dessus sera affiché First condition uniquement. Le deuxième console.log ne s'exécutera pas. Voyons pourquoi.

// L' if instruction attend un booléen. Cependant, lorsque vous lui fournissez une valeur d’un autre type, il la convertira
// automatiquement en booléen. C'est ce qu'on appelle une conversion implicite car la conversion se produit automatiquement.

//*********falsy value
// En JavaScript, les valeurs ci-dessous seront converties en false et tout le reste sera converti en true :

// false(est déjà un booléen)
// null
// undefined
// 0 (number)
// -0 (number)
//0n (BigInt)
// NaN
// "" || [] (chaîne ou tableau vide)

// Ces valeurs ci-dessus sont appelées falsy values car, une fois converties en booléens, elles seront converties en false.
// Si vous y réfléchissez, null et undefined tous 0 ne représentent « rien ». C'est pourquoi ils sont convertis en false.
// Vous pouvez penser la même chose à propos de la chaîne vide "". Cela devient particulièrement utile une fois que nous
//en connaissons le DOM. En effet, si un champ de texte est vide, sa valeur est "". Une fois converti en booléen, ce sera false.

//Logical Not operator(!) (operateur logique non (!) )

// Si vous souhaitez convertir une valeur booléenne en son opposé, vous pouvez utiliser l' !opérateur (opérateur NON logique).
//Voici comment cela fonctionne:

!true; // false
!false; // true

//Cela se voit souvent dans if les conditions :

// read it as: if NOT name
if (!nname) {
  //
}

//****** résumé

// La conversion implicite se produit lorsque JavaScript attend une valeur booléenne mais reçoit une valeur non booléenne.
// La conversion implicite signifie que JavaScript convertira automatiquement la valeur en booléen.
// Les valeurs fausses sont converties en false. Tout le reste est converti en true.
// Les valeurs fausses les plus courantes sont : false, null, undefined, 0, "", NaN.
// L'opérateur logique NOT !convertit une valeur booléenne en son contraire.
