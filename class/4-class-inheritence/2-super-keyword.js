/* 
//****************************************************************************** super keyword ***********************************************************************
//********************************************************************************************************************************************************************

Dernière mise à jour avril 2024

Reprenons l'exemple de la leçon précédente; cependant, cette fois, le Manager constructeur aura un paramètre supplémentaire appelé department :
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
  constructor(firstName, lastName, department) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.department = department;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  getInitials() {
    return this.firstName[0] + this.lastName[0];
  }

  sendPerformanceReview() {
    console.log(
      `Sent performance review for current quarter in ${this.department}`
    );
  }
}

/* 
Comment pouvons-nous utiliser l’héritage dans cet exemple ? Les constructeurs ne sont plus les mêmes.

C'est ici que nous pouvons utiliser le super mot-clé, qui permet d'appeler des fonctions sur la classe parent.
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
  constructor(firstName, lastName, department) {
    super(firstName, lastName); // super must be called first
    this.department = department;
  }

  sendPerformanceReview() {
    console.log(
      `Sent performance review for current quarter in ${this.department}`
    );
  }
}

/* 
? Le super(firstName, lastName) appelle le Employee constructeur de la classe. Ainsi, super() appelle le constructeur de la classe parent.

Si le constructeur de la classe parent n'a aucun paramètre, vous appelez super(). Sinon, vous pouvez transmettre des paramètres comme nous l'avons fait dans cet exemple 
avec super(firstName, lastName).

Dans cet exemple, la Manager classe finira par avoir 3 variables d'instance this.firstName et this.lastName qui sont définies par le constructeur de Employee, et 
this.department qui sont définies par le Manager constructeur.

Le supermot-clé est souvent utilisé dans les frameworks/bibliothèques front-end. Nous y reviendrons dans un chapitre ultérieur. 


//****** Appel des méthodes de l'instance parent

? C'est un peu moins utilisé, mais vous pouvez également appeler des fonctions sur la classe parent en utilisant le supermot-clé :
*/

// assuming the same class definition for Employee

class Manager extends Employee {
  constructor(firstName, lastName, department) {
    super(firstName, lastName); // super must be called first
    this.department = department;
  }

  sendPerformanceReview() {
    console.log(
      `Sent performance review for current quarter in ${this.department}`
    );
  }

  getFullName() {
    return super.getFullName() + " [manager]";
  }
}

//? Remarquez comment la getFullName()méthode d'instance appelle les Employee's getFullName()avecsuper.getFullName() .

// Sample usage
const manager = new Manager("Sam", "Blue", "Marketing");
console.log(manager.department); // "Marketing"
console.log(manager.getFullName()); // "Sam Blue [manager]"

/* 
//********résumer
Le super mot-clé est utilisé pour appeler des fonctions sur la classe parent.

Lorsque vous remplacez le constructor(), assurez-vous d'appeler super() en premier avant d'accéder à toute autre variable d'instance.

Vous pouvez également appeler des fonctions sur la classe parent en utilisant le super mot-clé, par exemple super.parentMethodName()
 */
