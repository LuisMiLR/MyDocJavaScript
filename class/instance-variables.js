//*********************************************************************** instance Variables ***************************************************************************
//**********************************************************************************************************************************************************************

/* (Les variables d'instances) 


Dans cette leçon, nous verrons comment définir vos propres variables de classe et d'instance.

//******Définissez votre propre classe

Pour définir une classe, vous devez commencer par le class keyword suivi du nom de la classe.

La convention courante pour le nom de la classe est UpperCamelCase. Voici quelques exemples:

Une classe représentant une recette doit s’appeler Recipe.
Une classe représentant une recette rapide doit s'appeler QuickRecipe.
Une classe représentant un résultat annuel doit être appelée YearlyResult.
class QuickRecipe {

}

//******Constructeur

Lorsque vous créez une nouvelle instance d'une classe, la fonction constructor() sera automatiquement appelée. Par exemple:

/// class definition

class Person {
    constructor() {
        console.log("I was automatically called");
    }
}

/// class usage

const person = new Person; // () are optional when there are no arguments

Le code ci-dessus se connectera "I was automatically called" à la console.

Si le constructeur attend certains paramètres, vous pouvez transmettre certains arguments à l' new Person(...)appel. Ces arguments seront transmis au constructeur. 
Par exemple:

/// class definition

class Person {
    constructor(firstName, lastName) {
        console.log(firstName + " " + lastName);
    }
}

/// class usage

const person = new Person("Sam", "Green");
Le code ci-dessus se connectera "Sam Green"à la console.


//*****Capturer les paramètres du constructeur

Lorsque l'on appelle new Person("Sam", "Green"), les valeurs "Sam"et "Green"sont disponibles respectivement au fur et à mesure firstNameet lastNamedans la 
fonction constructor.

Cependant, ces variables firstName et lastName ne seront pas disponibles dans les autres méthodes de cette classe (que nous découvrirons dans le chapitre suivant). 
Ils ne seront disponibles que dans leconstructor .

C'est pourquoi, nous pouvons les capturer et les enregistrer en tant que //*variables d'instance :


/// class definition

class Person {
    constructor(firstName, lastName) {
        /// capture firstName param into this.firstName instance variable
        this.firstName = firstName;
        /// capture lastName param into this.lastName instance variable
        this.lastName = lastName;
    }
}

/// class usage

const person = new Person("Sam", "Green");
Maintenant que nous avons capturé les (variable d'instance) firstName into this.firstName, nous allons pouvoir l'utiliser this.firstName dans n'importe quelle méthode
d'instance (nous en apprendrons davantage dans le chapitre suivant).


//*****Variables d'instance

Alors, qu’est-ce qu’une variable d’instance ?
Une variable d'instance est une variable qui appartient à une instance spécifique d'une classe.

Une variable d'instance est accessible dans n'importe quelle méthode d'instance. De plus, les variables d'instance ne doivent pas nécessairement être créées 
en capturant un paramètre de constructeur. Par exemple:


/// class definition

class Person {
    constructor(firstName, lastName) {
        /// capture firstName param into this.firstName instance variable
        this.firstName = firstName;
        /// capture lastName param into this.lastName instance variable
        this.lastName = lastName;
        /// set an instance variable (without capturing a constructor param)
        this.votingAge = 18;
    }
}
Si ce qui précède n’est pas clair à 100 %, ne vous inquiétez pas. Cela devrait devenir plus clair dans le prochain chapitre une fois que nous aurons découvert les méthodes d'instance !

//******résumer

La convention courante pour le nom de la classe est UpperCamelCase .
Nous capturons les paramètres du constructeur afin de pouvoir y accéder en dehors du constructeur (dans les méthodes d'instance).*
Une variable d'instance est une variable qui appartient à une instance spécifique d'une classe.
Est-ce que cela a été utile?




*capturer les paramètres du contructeur afin de pouvoir y accéder... : 
Cette phrase fait référence à la pratique courante dans la programmation orientée objet où les paramètres passés au constructeur d'une classe sont capturés et stockés 
dans des variables membres de la classe. Ces variables membres sont ensuite accessibles dans d'autres méthodes de cette même classe.

Voici une explication détaillée :

- Lorsque vous créez une classe en JavaScript (ou dans d'autres langages de programmation orientée objet), vous pouvez définir un constructeur. Ce constructeur est une 
  méthode spéciale appelée lorsqu'une nouvelle instance de la classe est créée.
- Le constructeur peut accepter des paramètres qui sont passés lors de la création de l'instance.
- La phrase mentionne "capturer les paramètres du constructeur", ce qui signifie que ces paramètres sont enregistrés ou assignés à des variables membres de la classe, 
  généralement à l'aide du mot-clé `this`.
- Une fois que les paramètres sont capturés et assignés aux variables membres de la classe, ils peuvent être utilisés dans d'autres méthodes (fonctions) de cette même
  classe. Ces méthodes sont appelées méthodes d'instance car elles sont spécifiques à chaque instance de la classe et peuvent accéder aux données qui lui sont associées.

En résumé, la phrase mentionne simplement le processus de récupération et de stockage des paramètres passés au constructeur de la classe, de sorte qu'ils puissent être 
utilisés dans d'autres parties de la classe, comme les méthodes d'instance. Cela permet à la classe d'accéder aux données fournies lors de la création de chaque 
instance, ce qui est essentiel pour le fonctionnement correct de nombreux programmes orientés objet.

*/
