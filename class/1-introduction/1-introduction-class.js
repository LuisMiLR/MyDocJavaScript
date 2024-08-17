/* 

//************************************************************** Introduction aux class ********************************************************************
//********************************************************************************************************************************************************** 

(Dernière mise à jour mai 2021)

Les classes en JavaScript ont une syntaxe similaire à celle des autres langages de programmation. 
Ils ont cependant un concept d'héritage différent, mais vous n'avez pas à vous en soucier pour l'instant. Nous aborderons cela dans les 
chapitres suivants.


*Introduction aux langages orientés objet basés sur les classes

Il existe deux grands types de langages orientés objet : ceux basés sur les classes, et ceux basés sur les prototypes.

Le JavaScript est un langage orienté objet basé sur la notion de prototypes, mais la plupart des langages supportant l’orienté objet sont basés sur les classes.

Le modèle objet des langages orientés objet basés sur les classes est conçu autour de deux entités différentes : les classes et les objets.

Une classe est un plan général qui va servir à créer des objets similaires. Le code d’une classe va généralement être composé de propriétés et de méthodes dont vont hériter les objets qui vont être créés à partir de la classe.

Une classe va également contenir une méthode constructeur qui va être appelée automatiquement dès qu’on va créer un objet à partir de notre classe et va nous permettre d’initialiser les propriétés d’un objet.

Une classe pour les langages basés sur les classes va être plus ou moins l’équivalent d’un constructeur pour les langages prototypés comme le JavaScript.

*Class en JS 

Si je vous parle de ces deux modèle d'objet, c’est parce que le JavaScript a également dans ses dernières versions introduit un mot clef class qui va nous permettre de créer des architectures objets similaires à ce qu’on a vu au-dessus.

Attention cependant : le JavaScript est toujours un langage orienté objet à prototypes et, en tâche de fond, il va convertir nos « classes » selon son modèle prototypes.

Les classes JavaScript ne sont donc qu’une nouvelle syntaxe qui nous est proposée par le JavaScript notamment pour les gens plus habitués à travailler avec des langages orientés objet basés sur les classes.

Retenez bien qu’on va pouvoir imiter la forme des langages basés sur les classes mais que dans le fond le JavaScript reste un langage prototypé.


*Qu'est-ce qu'une class ? 

 Les classes en JavaScript sont un moyen de créer des objets qui partagent certaines caractéristiques ou comportements 
 communs. Imaginez que vous fabriquiez des voitures : toutes les voitures ont des caractéristiques similaires, comme des 
 roues, un moteur et des sièges. En JavaScript, vous pouvez utiliser une classe pour définir ce qu'est une voiture et quelles 
 sont ses caractéristiques de base.

Lorsque votre code commencera à croître, vous aurez quelques dizaines de fonctions dans votre code source. Pour mieux organiser 
votre code, vous pouvez regrouper les fonctions qui exécutent des fonctionnalités similaires dans une seule classe .
C'est l'une des raisons pour lesquelles nous avons des class. L'autre raison principale est que les classes sont 
réutilisables, jetez un œil à cet exemple : 
*/

// create a new instance of Translation with the word "Table"
const firstTranslation = new Translation("Table");
firstTranslation.isEnglishWord(); //true

// create another instance of Translation with the word "España"
const secondTranslation = new Translation("España");
secondTranslation.isEnglishWord(); //false

/* 
Ce sont 2 instances différentes de la même classe « Traduction » Chacune de ces instances agit différemment, en fonction 
du mot que vous lui avez donné. Le premier est un mot anglais donc isEnglishWordrenvoie true tandis que l'autre est un mot 
espagnol donc isEnglishWord renvoie false. 

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

//un autre exemple liée aux les voitures

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

/* 
//*Créer une instance

Pour créer une instance d'une classe, vous devez utiliser le mot-clé new avant le nom de la classe. Par exemple: */

const person1 = new Person("Sam Doe");
const person2 = new Person("Charley Bron");
/* Dans cet exemple, les variables person1 et person2 sont des instances de la même classe Person.

//*Classe contre instance

Il est important de faire la distinction entre une classe et une instance .

Une classe est une usine capable de créer des instances .

Chaque instance est unique
Un autre concept important est que chaque instance que nous créons est unique. Par exemple, si l'on compare person1 et person2: */

person1 === person2; // false (they are not the same)

//Nous obtenons false parce qu'il s'agit de 2 instances différentes (mais elles ont été créées à partir du même class Person).

/* 
//******** résumer

Les class vous permettent de mieux organiser votre code en regroupant votre code (variables & fonctions) dans une seule classe

Les class favorisent la réutilisabilité.

Une classe est une usine capable de créer des instances.

Chaque instance créée à partir d'une classe est unique. 


*Remontée des déclarations (hoisting)
Les déclarations de fonctions sont remontées dans le code. En revanche, ce n'est pas le cas pour les déclarations de classes. Ainsi, il est nécessaire de déclarer la classe avant de l'instancier. Dans le cas contraire, on obtient une ReferenceError :

js
Copy to Clipboard
const p = new Rectangle(); // ReferenceError

class Rectangle {}
*/
