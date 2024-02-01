///string access
// Vous pouvez accéder à un caractère spécifique dans une chaîne en utilisant la syntaxe des crochets [].
// Vous devez fournir l' index de la string auquel vous souhaitez accéder, en commençant par 0.
// Prenons un exemple où la variable languagea la valeur : "JavaScript". Voici comment accéder au 1er caractère, au 2ème et au 3ème :

const languagee = "JavaScript";

languagee[0]; //first character
languagee[1]; //second character
languagee[2]; //third character

// Le combiner avec la longueur
//Vous pouvez également combiner l'accès aux caractères avec la propriété .length
//Donc, en utilisant la même languagevariable, voici comment en obtenir l'avant-dernier caractère :

const language = "JavaScript";

language[language.length - 2]; // "p" because it's the second to last character from "JavaScript"

//Notez que ce language[ language.length ]sera undefined parce que l’accès aux caractères commence à 0.
