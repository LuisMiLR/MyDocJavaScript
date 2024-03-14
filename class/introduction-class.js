/* Introduction aux class

Dernière mise à jour mai 2021
Les classes en JavaScript ont une syntaxe similaire à celle des autres langages de programmation. Ils ont cependant 
un concept d'héritage différent, mais vous n'avez pas à vous en soucier pour l'instant. Nous aborderons cela dans les 
chapitres suivants.

Qu'est-ce qu'une class ?

 Les classes en JavaScript sont un moyen de créer des objets qui partagent certaines caractéristiques ou comportements 
 communs. Imaginez que vous fabriquiez des voitures : toutes les voitures ont des caractéristiques similaires, comme des 
 roues, un moteur et des sièges. En JavaScript, vous pouvez utiliser une classe pour définir ce qu'est une voiture et quelles 
 sont ses caractéristiques de base.

Lorsque votre code commencera à croître, vous aurez quelques dizaines de fonctions dans votre code source. Pour mieux organiser 
votre code, vous pouvez regrouper les fonctions qui exécutent des fonctionnalités similaires dans une seule classe .
C'est l'une des raisons pour lesquelles nous avons des cours . L'autre raison principale est que les classes sont 
réutilisables, jetez un œil à cet exemple : 
*/
// create a new instance of Translation with the word "Table"
const firstTranslation = new Translation("Table");
firstTranslation.isEnglishWord(); //true

// create another instance of Translation with the word "España"
const secondTranslation = new Translation("España");
secondTranslation.isEnglishWord(); //false

/* Ce sont 2 instances différentes de la même classe « Traduction ». Chacune de ces instances agit différemment, en fonction 
du mot que vous lui avez donné. Le premier est un mot anglais donc isEnglishWordrenvoie truetandis que l'autre est un mot 
espagnol donc isEnglishWordrenvoie false. 
Voici comment écrire le code de cette classe de traduction :
*/

class Translation {
  constructor(word) {
    // capture constructor param into instance variable
    // this is explained in the next lesson
    this.word = word;
  }

  isEnglishWord() {
    // returns true when word is English, false otherwise
  }

  isSpanishWord() {
    // returns true when word is Spanish, false otherwise
  }
}

//un autre exemple liée la defi avec les voitures

class Voiture {
  constructor(marque, modèle) {
    this.marque = marque;
    this.modèle = modèle;
  }

  démarrer() {
    return "Vroom Vroom!";
  }
}

/* Nous expliquerons la syntaxe ci-dessus dans un instant, mais pour l'instant, vous devriez voir comment ceux-ci 
isEnglishWord()et isSpanishWord()sont regroupés au sein de la même Translationclasse. */

/* Créer une instance
Pour créer une instance d'une classe, vous devez utiliser le newmot-clé avant le nom de la classe. Par exemple: */

const person1 = new Person("Sam Doe");
const person2 = new Person("Charley Bron");
/* Dans cet exemple, les variables person1 et person2sont des instances de la même classe Person.

Classe contre instance
Il est important de faire la distinction entre une classe et une instance .

Une classe est une usine capable de créer des instances .

Chaque instance est unique
Un autre concept important est que chaque instance que nous créons est unique. Par exemple, si l'on compare person1et person2: */

person1 === person2; // false (they are not the same)

//Nous obtenons false parce qu'il s'agit de 2 instances différentes (mais elles ont été créées à partir du même class Person).

/* résumer
Les class vous permettent de mieux organiser votre code en regroupant votre code (variables & fonctions) dans une seule classe
Les class favorisent la réutilisabilité.
Une classe est une usine capable de créer des instances .
Chaque instance créée à partir d'une classe est unique. */
