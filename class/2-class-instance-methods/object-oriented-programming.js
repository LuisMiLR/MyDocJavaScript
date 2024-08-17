/* 
//*********************************************************** Programmation orientée objet *******************************************************************************
//*********************************************************************************************************************************************************************** 

//*fichier 2

Dernière mise à jour en février 2022

Le code que vous avez écrit pour résoudre le dernier défi est un exemple de programmation orientée objet.
La programmation orientée objet (POO) consiste à décrire le monde réel avec des classes (que vous pouvez ensuite instancier, ce qui crée des objets).

Par exemple, la solution du défi précédent :


class User {
    constructor(firstName, lastName, prefix, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.prefix = prefix;
        this.age = age;
    }

    getFullName() {
        return `${this.prefix}. ${this.firstName} ${this.lastName}`;
    }

    canVote() {
        return this.age >= 18;
    }
}

/// Sample usage
const user1 = new User("Sam", "Doe", "Mrs", 20);
console.log(user1.getFullName()); // "Mrs. Sam Doe"
console.log(user1.canVote()); // true
const user2 = new User("Alex", "Green", "Mr", 17);
console.log(user2.getFullName()); // "Mr. Alex Green"
console.log(user2.canVote()); // false

Comparez cela à la manière procédurale de le résoudre (sans classes) :


const getFullName = (firstName, lastName, prefix) => {
    return `${prefix}. ${firstName} ${lastName}`;
}

const canVote = (age) => {
     return age >= 18;
}

/// Sample usage
console.log(getFullName("Sam", "Doe", "Mrs")); // "Mrs. Sam Doe"
console.log(canVote(20)); // true
console.log(getFullName("Alex", "Green", "Mr")); // "Mr. Alex Green"
console.log(canVote(17)); // false

Remarquez que dans cet exemple, nous n'avons pas d'objets. Nous avons juste 2 fonctions et nous les appelons plusieurs fois. D'un autre côté, avec l'exemple POO, 
nous créons un objet user1 qui est une instance de la classe User.

Le regroupement constitue la comparaison la plus évidente entre les deux approches, mais ce n'est pas le seul avantage. La POO possède des fonctionnalités 
supplémentaires telles que les getters, les setters, les méthodes statiques, l'héritage, etc. 
Nous les aborderons dans les chapitres suivants .


*Appeler une méthode d'instance à partir d'une autre

Nous avons vu dans la leçon précédente qu'une méthode d'instance a accès aux variables d'instance définies sur la classe. Ils ont également accès à d'autres méthodes
d'instance sur la classe. Cela signifie qu'une méthode d'instance peut appeler une autre méthode d'instance en utilisant la this.functionName()syntaxe. Par exemple:
*/

class User {
  constructor(firstName, lastName) {
    //les variables encapsulées sont nécessaire lorsqu'elle proviennent de données externes
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  getGreeting() {
    const fullName = this.getFullName(); // call an instance method
    return `Hello ${fullName}`;
  }
}
/*
Remarquez comment le getGreeting()est capable d'utiliser la getFullName()méthode d'instance en l'appelant avec la this.getFullName()syntaxe .

//******** résumer
La programmation orientée objet (POO) consiste à décrire le monde réel avec des classes (que vous pouvez ensuite instancier pour créer des objets).
Une méthode d'instance peut appeler une autre méthode d'instance en utilisant la this.functionName()syntaxe.


----------------------
//***Explication détaillé la programmation orientée objet (POO) en JavaScript, 
//***en mettant l'accent sur les classes et la création d'objets.

En programmation orientée objet, nous cherchons à modéliser le monde réel en définissant des entités appelées objets. Ces objets ont des 
caractéristiques (appelées propriétés) et des actions qu'ils peuvent effectuer (appelées méthodes). Les classes sont essentiellement des modèles pour créer ces objets. 
Jetons un coup d'œil à votre exemple :

class User {
    constructor(firstName, lastName, prefix, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.prefix = prefix;
        this.age = age;
    }

    getFullName() {
        return `${this.prefix}. ${this.firstName} ${this.lastName}`;
    }

    canVote() {
        return this.age >= 18;
    }
}

Dans ce code, `User` est une classe qui définit ce qu'est un utilisateur. Le `constructor` est une méthode spéciale qui est appelée automatiquement lors de la 
création d'une nouvelle instance de la classe. Il initialise les propriétés de l'objet avec les valeurs passées en argument lors de la création de l'objet.

`getFullName()` est une méthode de l'objet `User` qui renvoie le nom complet de l'utilisateur avec son préfixe.

`canVote()` est une autre méthode de l'objet `User` qui détermine si l'utilisateur peut voter en fonction de son âge.

Pour créer un nouvel utilisateur, vous utilisez le mot-clé `new` suivi du nom de la classe, comme ceci : */

const user1 = new User("Sam", "Doe", "Mrs", 20);

/*
Maintenant, `user1` est un objet de type `User` avec les propriétés et les méthodes définies dans la classe.

En comparaison, votre approche procédurale utilise simplement des fonctions pour effectuer les mêmes tâches, mais sans regrouper les données et les comportements 
associés en objets.
La POO offre plusieurs avantages, notamment une meilleure organisation du code, la réutilisabilité et la possibilité de modéliser des concepts complexes 
plus facilement.

En utilisant des classes et des objets, vous pouvez créer des structures de données et des fonctionnalités qui reflètent plus fidèlement les relations 
et les comportements du monde réel.

*/

/* 
//******* récapitulatif du chapitre

Les méthodes d'instance sont des fonctions qui peuvent être appelées sur une instance d'une classe.

Pour pouvoir utiliser des variables d'instance dans une méthode d'instance, vous devez les préfixer avec this.(à condition qu'elles aient été capturées
dans le constructor)

À l’intérieur d’une méthode d’instance, this fait référence à l’instance actuelle de la classe.

La programmation orientée objet (POO) consiste à décrire le monde réel avec des classes (que vous pouvez ensuite instancier, ce qui crée des objets).

Une méthode d'instance peut appeler une autre méthode d'instance en utilisant la this.functionName()syntaxe.
*/
