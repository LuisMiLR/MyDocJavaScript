///string access
// Vous pouvez accéder à un caractère spécifique dans une chaîne en utilisant la syntaxe des crochets [].
// Vous devez fournir l' index de la string auquel vous souhaitez accéder, en commençant par 0.
// Prenons un exemple où la variable languagea la valeur : "JavaScript". Voici comment accéder au 1er caractère, au 2ème et au 3ème :

const languagee = "JavaScript";

languagee[0]; //first character
languagee[1]; //second character
languagee[2]; //third character

//                                 Le combiner avec la longueur               ////////

//Vous pouvez également combiner l'accès aux caractères avec la propriété .length
//Donc, en utilisant la même languagevariable, voici comment en obtenir l'avant-dernier caractère :

const language = "JavaScript";

language[language.length - 2]; // "p" because it's the second to last character from "JavaScript"

//Notez que ce language[ language.length ]sera undefined parce que l’accès aux caractères commence à 0.

/// La methode .at(index)
// Depuis 2022, JavaScript dispose désormais d'une .at()méthode qui lit le caractère à un certain index, qui peut également être négatif.

// Jetons un coup d'œil à quelques exemples :

const languages = "JavaScript";
languages.at(0); // "J"
languages.at(1); // "a"
languages.at(-1); // "t"
languages.at(-2); // "p"

// Le principal cas d’utilisation de la .at()méthode concerne les indices négatifs, ce qui la rend plus facile que de s’appuyer sur la .lengthpropriété. Cependant, vous pouvez utiliser l’approche que vous préférez.

// Lorsqu'un index négatif est spécifié, vous commencez à compter à partir de la fin. -1est le dernier caractère, -2est celui qui le précède, etc.

// Vous pouvez continuer à utiliser la syntaxe des crochets pour tous les autres cas d'utilisation, sachant que cela language[-1]renvoie undéfini. Ainsi, chaque fois que vous souhaitez utiliser un index négatif, vous devez utiliser la .at()méthode.
