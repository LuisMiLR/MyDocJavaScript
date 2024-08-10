//Implicit conversion & falsy values

/*Dans cette leçon, nous expliquerons comment la conversion implicite se produit dans les contextes booléens. Par exemple, nous savons que l' ifinstruction attend une condition qui donne un booléen. Mais que se passe-t-il lorsque nous lui donnons une chaîne ou un nombre ?
*/
const name = "Sam";
const number = 0;

if (name) {
    console.log("First condition");
}

if (number) {
    console.log("second condition")
}

//Le code ci-dessus ne produira First conditionque des résultats. Le deuxième console.log ne s'exécutera pas. Voyons pourquoi.

/*
Conversion implicite

L' ifinstruction attend une valeur booléenne. Cependant, lorsque vous lui fournissez une valeur d'un autre type, elle la convertit automatiquement en valeur booléenne. On parle alors de conversion implicite, car la conversion s'effectue automatiquement.

Comment les valeurs sont-elles converties en booléen ? Qui décide que "Sam"is true, while ""is falseet 30is truewhile 0is false?

C’est là qu’entrent en jeu les valeurs fausses.

Valeurs fausses

En JavaScript, les valeurs ci-dessous seront converties en false, et tout le reste sera converti en true:

false (est déjà un booléen)
null
undefined
0 /-0
NaN
"" (string vide)
document.all

Ces valeurs ci-dessus sont appelées falsy value car, une fois converties en booléen, elles seront converties en false.
*/

/*
Si vous y réfléchissez, null, undefinedet 0représentent tous « rien ». C'est pourquoi ils sont convertis en false.
Vous pouvez penser la même chose à propos de la chaîne vide "". Cela deviendra particulièrement utile une fois que nous aurons appris à connaître le DOM. En effet, si un champ de texte est vide, sa valeur est "". Une fois converti en booléen, ce sera false.

Opérateur logique NON (!)
Si vous souhaitez convertir une valeur booléenne en son opposé, vous pouvez utiliser l' !opérateur (opérateur logique NON). Voici comment cela fonctionne :


!true; // false
!false; // true
Ceci est souvent observé dans if eles conditions suivantes :


// read it as: if NOT name
if (!name) {
    // 
}
L'exemple ci-dessus sera revisité une fois que nous en saurons plus sur le DOM.

Logo MDNNON logique sur MDN


Résumer
La conversion implicite se produit lorsque JavaScript attend une valeur booléenne mais reçoit une valeur non booléenne.
La conversion implicite signifie que JavaScript convertira automatiquement la valeur en booléen.
Les valeurs fausses sont converties en false. Tout le reste est converti en true.
Les valeurs fausses les plus courantes sont : false, null, undefined, 0, "", NaN.
L'opérateur logique NOT !convertit une valeur booléenne en son opposé.
*/
