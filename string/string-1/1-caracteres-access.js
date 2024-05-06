/* 
//********************************************************************* accès au caractères ***************************************************************************
//*********************************************************************************************************************************************************************

Vous pouvez accéder à un caractère spécifique dans une chaîne en utilisant la syntaxe des crochets[] .

Vous devez fournir l' index du personnage auquel vous souhaitez accéder, en commençant par 0.

Prenons un exemple où la variable languagea la valeur : "JavaScript". Voici comment accéder au 1er personnage, au 2ème et au 3ème :
*/
const language = "JavaScript";

language[0]; //first character
language[1]; //second character
language[2]; //third character
//Si vous souhaitez déboguer votre code et voir le résultat language[1] dans la console, vous devez le consigner sur la console comme suit :

console.log(language[1]);

/*
//********** Combining it with length

Vous pouvez également combiner l'accès aux caractères avec la propriété .length . Donc, en utilisant la même languagevariable, voici comment en obtenir 
l'avant-dernier caractère :

*/
const languages = "JavaScript";

language[languages.length - 2]; // "p" because it's the second to last character from "JavaScript"

/*
Notez que ce language[ language.length ]sera undefinedparce que l’accès aux caractères commence à 0.
Ainsi, pour une chaîne de 9 caractères, 8 est la position du dernier caractère.


//************* La .at(index) méthode
Depuis 2022, JavaScript dispose désormais d'une .at()méthode qui lit le caractère à un certain index, qui peut également être négatif.

Jetons un coup d'œil à quelques exemples :

const language = "JavaScript";
language.at(0); // "J"
language.at(1); // "a"
language.at(-1); // "t"
language.at(-2); // "p"

Le principal cas d’utilisation de la .at()méthode concerne les indices négatifs, 
ce qui la rend plus facile que de s’appuyer sur la .length propriété. Cependant, vous pouvez utiliser l’approche que vous préférez.

Lorsqu'un index négatif est spécifié, vous commencez à compter à partir de la fin. -1 est le dernier caractère, -2est celui qui le précède, etc.

Vous pouvez continuer à utiliser la syntaxe des crochets pour tous les autres cas d'utilisation, sachant que cela language[-1] renvoie undéfini. 
Ainsi, chaque fois que vous souhaitez utiliser un index négatif, vous devez utiliser la .at() méthode.

//******** résumer

- Les crochets [index]sont utilisés pour accéder à un index spécifique à partir d'une chaîne.
- L'index commence à 0. Le premier caractère est donc l'index 0.
- Vous pouvez le combiner avec la longueur d'une chaîne pour obtenir un autre caractère dans une autre position.
- La .at() méthode permet de lire un caractère à un index (qui peut aussi être négatif).


*/
