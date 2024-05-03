/* 
 //******************************************************************** class inheritence ***************************************************************************
 //*******************************************************************************************************************************************************************

 (Héritage de classe)
 
 Un principe important en programmation s'appelle DRY (Don't Repeat Yourself).

Lorsque vous décrivez le monde réel avec des classes, vous remarquerez parfois que certaines classes sont très similaires. En fait, certaines méthodes seraient
exactement la même chose (peut-être avec des noms de variables différents). Par exemple, disons que vous créez des cours pour votre entreprise dans lesquels vous 
avez un employé et un responsable. Voici à quoi ils ressembleraient :
 */
class Employee {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  getInitials() {
    return this.firstName[0] + this.lastName[0];
  }
}

class Manager {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  getInitials() {
    return this.firstName[0] + this.lastName[0];
  }

  sendPerformanceReview() {
    console.log(`Sent performance review for current quarter`);
  }
}

/* 
Remarquez-vous la similitude entre ces classes ? Ils partagent les mêmes constructor(), getFullName(), et getInitials(). La Managerclasse a une méthode d'instance 
supplémentaire appelée sendPerformanceReview()qui n'existe pas pour Employee.

?Ceci est un exemple où nous pouvons utiliser l'héritage pour réduire la duplication. Nous pouvons remarquer que Managerimplémente toutes les méthodes de 
?Employee (et en a des supplémentaires). Ainsi, Managerhérite de Employee. Ce qui signifie que Managertoutes les méthodes définies sur Employee. Voici comment 
?l'écrire, en utilisant le extends mot-clé :
*/
class Employee {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  getInitials() {
    return this.firstName[0] + this.lastName[0];
  }
}

class Manager extends Employee {
  sendPerformanceReview() {
    console.log(`Sent performance review for current quarter`);
  }
}

/* 
?Cela extends Employeeper mettra Manager d'hériter de toutes les méthodes définies sur Employee, c'est pourquoi le code ci-dessous s'exécute avec succès :
 */
const manager = new Manager("Sam", "Green");
manager.sendPerformanceReview(); // logs "Sent performance review for current quarter"
manager.getFullName(); // "Sam Green"
manager.getInitials(); // "SG"

//Remarquez comment nous avons pu appeler les méthodes getFullName()et getInitials()simplement parce que Manager extends depuis Employee.

//***** Méthodes de remplacement
/* 
?Et si nous souhaitons une implémentation différente pour getFullName()? Par exemple, nous aimerions revenir (manager)après le nom complet. 
?Cela est possible en héritage. Vous pouvez remplacer des fonctions. Voici comment:
*/
// assuming the same class definition for Employee

class Manager extends Employee {
  getFullName() {
    return `${this.firstName} ${this.lastName} (manager)`;
  }

  sendPerformanceReview() {
    console.log(`Sent performance review for current quarter`);
  }
}

/* 
Dans cet exemple, la Managerclasse aura les mêmes méthodes constructor()et les mêmes getInitials() méthodes héritées de la Employeeclasse. 
Cependant, nous avons remplacé la getFullName() méthode et ajouté une nouvelle méthode d'instance appelée sendPerformanceReview(). 

?Ainsi, l’héritage réduit la duplication de code sans perdre le contrôle de la personnalisation !

Dans la leçon suivante, nous examinerons des exemples plus avancés d’héritage.


//*********résumer

Un principe important en programmation s'appelle DRY (Don't Repeat Yourself).

class Child extends Parentest la syntaxe de l'héritage en JavaScript.

Lorsqu'une classe "enfant" hérite d'une classe "parent", la classe "enfant" obtiendra automatiquement toutes les méthodes définies sur la classe "parent". 
*/
