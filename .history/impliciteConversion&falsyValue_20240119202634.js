//Implicit conversion & falsy values

//comment la conversion implicite se produit dans des contextes booléens. Par exemple, nous savons
// que l’instruction if attend une condition qui est évaluée comme un booléen. Mais que se passe-t-il lorsque
// nous lui donnons une chaîne ou un nombre ? :

const name = "Sam";
const number = 0;

if (name) {
  console.log("First condition");
}

if (number) {
  console.log("second condition");
}

//Le code ci-dessus sera affiché First conditionuniquement. Le deuxième console.log ne s'exécutera pas. Voyons pourquoi.

//conversion implicite
// L' ifinstruction attend un booléen. Cependant, lorsque vous lui fournissez une valeur d’un autre type, il la convertira
// automatiquement en booléen. C'est ce qu'on appelle une conversion implicite car la conversion se produit automatiquement.

//falsy value
// En JavaScript, les valeurs ci-dessous seront converties en false et tout le reste sera converti en true :

// false(est déjà un booléen)
// null
// undefined
// 0
//-0
//0n ()
// NaN
// ""(chaîne vide)
// Ces valeurs ci-dessus sont appelées falsyvaleurs car, une fois converties en booléens, elles seront converties enfalse .
