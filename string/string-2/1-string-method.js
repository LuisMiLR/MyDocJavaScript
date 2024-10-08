//String.trim()

/* 
Cette méthode est particulièrement utile lorsque vous travaillez avec le DOM et que vous vous attendez à ce que l'utilisateur saisisse du texte. Les utilisateurs saisiront parfois, par accident, un caractère d'espace vide au début ou à la fin d'une zone de texte.

Supposons, par exemple, que vous demandiez à l'utilisateur son nom et qu'il saisisse " Sam"plutôt que "Sam". Cela peut entraîner des problèmes dans certains scénarios (par exemple, les adresses e-mail).

La solution à ce problème consiste à utiliser la .trim()méthode qui supprime tous les caractères d'espacement de début (au début) et de fin (à la fin) .

*/
const name = "  Sam Blue ";
names.trim(); // "Sam Blue"

//String .startsWith() and .endsWith()

/*
La .startsWith(substring)méthode renvoie true lorsque le substring est trouvé au début de la chaîne et false dans le cas contraire.
Le .endsWith(substring) fonctionne de la même manière mais pour la fin de la chaîne.
*/

const sentence = "Hello there. Welcome!";

sentence.startsWith("H"); // true
sentence.startsWith("Hello"); // true
sentence.startsWith("Hey"); // false
sentence.startsWith("Sam"); // false

sentence.endsWith("."); // false
sentence.endsWith("!"); // true
sentence.endsWith("Welcome!"); // true
sentence.endsWith("Welcome"); // false

//String .includes(substring)

/*
La .includes(substring) méthode renvoie true lorsque le substring peut être trouvé n'importe où dans la chaîne et false sinon.
cette methode s'utilise également avec les arrays
*/

const sentences = "Hello there. Welcome!";

sentence.includes("there"); // true
sentence.includes("W"); // true
sentence.includes("Hello"); // true
sentence.includes("Hey"); // false
sentence.includes("Sam"); // false
sentence.includes("."); // true
sentence.includes("!"); // true