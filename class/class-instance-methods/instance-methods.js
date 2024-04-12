// ************************************************************** Instance methods (methode d'instance) ****************************************************************
//**********************************************************************************************************************************************************************

/* 

Nous avons déjà parlé de la façon dont les classes regroupent les fonctionnalités communes. Ceci est réalisé en définissant des méthodes d’instance.

Les méthodes d'instance sont des fonctions qui peuvent être appelées sur une instance d'une classe. Prenons un exemple : */

// class definition
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

// class usage
const person = new Person("Sam", "Green");
console.log(person.getFullName()); // "Sam Green"

/* getFullName() s'agit d'une méthode d'instance. Nous l'écrivons dans la définition de la classe, puis nous pouvons l'appeler sur une instance (par exemple 
la variable person).

Vous ne pouvez pas appeler Person.getFullName(). Pour que cela fonctionne, getFullName()il faut une méthode statique. Ceci est expliqué dans le chapitre suivant.

Cela ne fonctionne que sur les instances, c'est pourquoi cela fonctionne  car person cette variable a été affectée à new Person(...) . 


//*****Accéder aux variables d'instance

Dans le chapitre précédent, nous avons capturé  les paramètres constructor dans des variables d'instance. Cela nous permet d'utiliser ces variables d'instance dans 
des méthodes d'instance, tout comme nous l'avons fait ici dans cet exemple.

La getFullName() méthode d'instance utilise les variables d'instance this.firstName et this.lastName.

Ainsi, les variables d'instance sont accessibles dans toutes les méthodes d'instance .

Le code ci-dessous ne fonctionne pas , car firstName et lastName n'est pas défini :


class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName() {
        // ❌ this does NOT work
        return `${firstName} ${lastName}`;
    }
}


? Dans le code ci dessus, `firstName` et `lastName` ne sont pas définis dans la méthode `getFullName()`. Cela est dû au fait que vous utilisez
? simplement `firstName` et `lastName` sans les préfixer par `this`, ce qui signifie que JavaScript tente de trouver des variables
? globales `firstName` et `lastName`, ce qui n'est pas le cas. 

C'est la raison pour laquelle nous avons appris à capturer constructorles paramètres dans le chapitre précédent, car cela nous permettra d'utiliser les valeurs 
que nous avons capturées en les définissant comme variables d'instance.

C'est à cela que this fait référence le mot-clé. Cela fait référence à l'instance actuelle de la classe.

//*Ce que cela signifie :
Lorsque vous déclarez des paramètres dans le constructeur d'une classe en JavaScript, comme vous l'avez fait 
avec `constructor(firstName, lastName)`, vous pouvez "capturer" ces valeurs pour les utiliser dans toute la classe en les définissant comme des variables d'instance. 

Dans le contexte de votre code, les paramètres `firstName` et `lastName` sont capturés dans le constructeur de la classe `Person`. Cela signifie que lorsqu'une 
nouvelle instance de `Person` est créée, les valeurs passées pour `firstName` et `lastName` sont assignées aux propriétés `this.firstName` et `this.lastName`, 
respectivement.

L'avantage de cette approche est que ces valeurs sont alors disponibles pour être utilisées dans n'importe quelle méthode de la classe, car elles sont définies
comme des variables d'instance. Cela signifie que vous pouvez les référencer avec `this.firstName` et `this.lastName`, comme dans votre méthode `getFullName()`.

//****** résumer
Les méthodes d'instance sont des fonctions qui peuvent être appelées sur une instance d'une classe.
Pour pouvoir utiliser des variables d'instance dans une méthode d'instance, vous devez les préfixer avec this.(à condition qu'elles aient été capturées dans le constructor)
À l’intérieur d’une méthode d’instance, thisfait référence à l’instance actuelle de la classe.
*/
