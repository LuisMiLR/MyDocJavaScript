//////////////////////////////////////////////// subString //////////////////////////////////////////////////

// Une sous-chaîne est une partie ou une partie d'une chaîne. Par exemple, "rain"est une sous-chaîne de la chaîne "brain"car
// vous pouvez l'obtenir "rain"en prenant les 4 derniers caractères .

// Vous avez souvent besoin d'obtenir quelques caractères d'une chaîne plutôt que la totalité. Nous utilisons donc
// la substringméthode.

//subString signature
// Une signature de fonction vous donne une explication des paramètres que vous devez transmettre pour cette méthode. Jetons
// un coup d'oeil à la signature de substring:

someString.substring(indexStart, indexEnd);

// Cela signifie que lorsque vous appelez substring, vous pouvez lui donner 2 paramètres, le premier pour le indexStartet le second
//pourindexEnd .
// indexStart: la position du premier caractère que vous souhaitez inclure
// indexEnd: la position du premier caractère que vous souhaitez ignorer

const language = "JavaScript";
language.substring(1, 4); //"ava"

// Le indexEndparamètre est facultatif, ce qui signifie que vous pouvez transmettre le indexStartet il supposera qu'il indexEndest
// identique à la longueur de la chaîne. Voici un exemple :

language.substring(4); //"Script"

//exemple
function skipFirstCharacter(text) {
  return text.substring(1);
}

// Sample usage - do not modify
console.log(skipFirstCharacter("Xcode")); // "code"
console.log(skipFirstCharacter("Hello")); // "ello"

////////////////////////// ne pas utiliser subStr() methode car elle est obsolete
