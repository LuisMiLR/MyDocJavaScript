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
// L' ifinstruction attend un booléen. Cependant, lorsque vous lui fournissez une valeur d’un autre type, il la convertira
// automatiquement en booléen. C'est ce qu'on appelle une conversion implicite car la conversion se produit automatiquement .
