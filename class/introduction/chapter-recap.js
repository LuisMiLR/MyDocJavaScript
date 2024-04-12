/* 
//******************************************** Récapitulatif du chapitre ********************************************************

Dernière mise à jour mai 2021
Nous avons déjà parlé de la façon dont les classes regroupent les fonctionnalités communes. Ceci est réalisé en définissant des méthodes d’instance.

Les méthodes d'instance sont des fonctions qui peuvent être appelées sur une instance d'une classe. Prenons un exemple :


/// class definition
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

/// class usage
const person = new Person("Sam", "Green");
console.log(person.getFullName()); // "Sam Green"
le getFullName() est d'une méthode d'instance. Nous l'écrivons dans la définition de la classe, puis nous pouvons l'appeler sur une instance (par exemple 
la variable person).

Vous ne pouvez pas appeler Person.getFullName(). Pour que cela fonctionne, getFullName()il faut une méthode statique. Ceci est expliqué dans le chapitre suivant .

Cela ne fonctionne que sur les instances, c'est pourquoi cela fonctionne personcar cette variable a été affectée ànew Person(...) .

Accéder aux variables d'instance
Dans le chapitre précédent, nous avons capturé constructorles paramètres dans des variables d'instance. Cela nous permet d'utiliser ces variables d'instance dans des méthodes d'instance, tout comme nous l'avons fait ici dans cet exemple.

La getFullName()méthode d'instance utilise les variables d'instance this.firstNameet this.lastName.

Ainsi, les variables d'instance sont accessibles dans toutes les méthodes d'instance .

Le code ci-dessous ne fonctionne pas , car firstNameet lastNamen'est pas défini :


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
C'est la raison pour laquelle nous avons appris à capturer constructorles paramètres dans le chapitre précédent, car cela nous permettra d'utiliser les valeurs que nous avons capturées en les définissant comme variables d'instance.

C'est à cela que thisfait référence le mot-clé. Cela fait référence à l'instance actuelle de la classe .

résumer
Les méthodes d'instance sont des fonctions qui peuvent être appelées sur une instance d'une classe.
Pour pouvoir utiliser des variables d'instance dans une méthode d'instance, vous devez les préfixer avec this.(à condition qu'elles aient été capturées dans le constructor)
À l’intérieur d’une méthode d’instance, thisfait référence à l’instance actuelle de la classe. */
