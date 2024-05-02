//************************************************************** static methods chaining ( méthode statiques et chaînage) **********************************************
//*********************************************************************************************************************************************************************

/* 
*fichier 2

Nous avons vu dans le chapitre précédent que les méthodes d'instance sont des méthodes que l'on peut appeler sur une instance d'une classe 
(ex le résultat de new ClassName()).

Cependant, pour certains cas d'utilisation, nous pouvons créer des méthodes qui peuvent être appelées directement sur la classe et non sur l'instance. 
Voici comment nous les utilisons, en supposant une classeConfig :
*/
console.log(Config.getYear()); // for example, 2025

//Remarquez comment nous avons appelé la méthode getYear() directement sur la classe Configplutôt que sur une instance. En fait, si vous l’appelez sur une
//instance, cela ne fonctionne pas car c’est une staticméthode. Voici comment implémenter cette méthode statique :

class Config {
  static getYear() {
    // code to get the current year (for example, 2025)
    const date = new Date();
    return date.getFullYear();
  }
}
/* 
Comme vous pouvez le constater, les méthodes statiques sont des méthodes préfixées par le mot-clé static.

voici deux exemples :

Supposons que nous avons une classe Personne avec une méthode d'instance parler() et une méthode statique compterPersonnes().

//*Méthode d'instance :
*/

class Personne {
  constructor(nom) {
    this.nom = nom;
  }

  parler() {
    console.log(this.nom + " dit bonjour !");
  }
}

// Création d'une instance de Personne
const personne1 = new Personne("Alice");

// Appel de la méthode d'instance
personne1.parler(); // Affiche "Alice dit bonjour !"

//Dans cet exemple, parler() est une méthode d'instance car elle est définie à l'intérieur de la classe Personne et peut être appelée sur chaque instance individuelle de cette classe.

//*Méthode statique :

class Personne {
  constructor(nom) {
    this.nom = nom;
  }

  parler() {
    console.log(this.nom + " dit bonjour !");
  }

  static compterPersonnes() {
    console.log("Il y a un nombre total de personnes.");
  }
}

// Appel de la méthode statique directement sur la classe
Personne.compterPersonnes(); // Affiche "Il y a un nombre total de personnes."Dans cet exemple, compterPersonnes() est une méthode statique car elle est définie avec le mot-clé static. Elle peut être appelée directement sur la classe Personne, sans avoir besoin de créer d'instance de la classe.

/*  Dans cet exemple, compterPersonnes() est une méthode statique car elle est définie avec le mot-clé static. Elle peut être appelée directement 
sur la classe Personne, sans avoir besoin de créer d'instance de la classe.
*/

/*
//***** Quand créer des méthodes statiques ?
Bien que les méthodes statiques soient moins utilisées que les méthodes d'instance, voici quelques questions courantes que vous pouvez vous poser 
et qui vous aideront à décider si la méthode doit être statique :

- Le résultat de cette méthode est-il le même dans toutes les instances de la classe ? Si oui, alors ça devrait l'être static.

- La méthode n'accède-t-elle à aucune variable d'instance de cette classe ? Si oui, cela devrait probablement être le cas static.
Nous discuterons des cas d'utilisation de méthodes statiques dans les frameworks/bibliothèques front-end.


//*Static methods cannot access this.

Étant donné que les méthodes statiques sont appelées sur la classe et non sur une instance, elles ne peuvent pas accéder aux variables d'instance ou aux méthodes 
d'instance. Ainsi, vous ne pouvez pas utiliser this.l’intérieur d’eux.
Si vous avez besoin d’utiliser this.une static méthode à l’intérieur, cela signifie que cela ne devrait pas l’être static.


//***** Method chaining 

/* Vous pouvez parfois rencontrer du chaînage de méthodes, qui est une méthode appelée sur le résultat d’une autre méthode. Par exemple, en supposant une 
classeCourse :
*/
const course = new Course("Learn JavaScript", false);
course.markAsCompleted().setGrade(18).requestCertificate();
/*

Remarquez comment nous invoquons setGrade(18)le résultat de .markAsCompleted(). De même, nous faisons appel .requestCertificate()au résultat de setGrade(18).

Pour que cela fonctionne, ces méthodes d'instance doivent toujours renvoyer this. La référence à l’instance actuelle. Ce faisant, vous pouvez appeler d'autres méthodes sur l'instance car elles renvoient l'instance actuelle.

Donc au lieu d'écrire ceci :
*/

course.markAsCompleted();
course.setGrade(18);
course.requestCertificate();

//Vous pouvez enchaîner les appels de méthode, car chaque méthode renvoie this, ce qui dans cet exemple est l'équivalent de course(l'instance actuelle) :

course.markAsCompleted().setGrade(18).requestCertificate();

//Pour que cela fonctionne, vous devez vous assurer que ces méthodes d'instance renvoientthis :

class Course {
  constructor(name, isCompleted) {
    this.name = name;
    this.isCompleted = isCompleted;
  }

  markAsCompleted() {
    this.isCompleted = true;
    return this; // allows method chaining
  }

  setGrade(grade) {
    this.grade = grade;
    return this; // allows method chaining
  }

  requestCertificate() {
    this.askedForCertificate = true;
    return this; // allows method chaining
  }
}
/*

//****** résumer

- Les méthodes statiques sont appelées directement sur la classe et ne peuvent pas être appelées sur une instance.
- Le résultat d’une méthode est-il le même dans toutes les instances de la classe ? Si oui, alors ça devrait l'être static.
- La méthode n'accède-t-elle à aucune variable d'instance de cette classe ? Si oui, cela devrait probablement être le cas static.
- Le chaînage de méthodes est possible lorsque la méthode d'instance renvoie this.

*/
