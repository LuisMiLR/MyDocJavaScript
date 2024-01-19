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
