/* 
//****************************************************************** Getters et Setters ********************************************************************************
//**********************************************************************************************************************************************************************

*fichier 1
(Dernière mise à jour en mars 2023)

Ce chapitre explique les concepts de classe qui sont relativement moins utilisés par rapport à ceux que nous avons déjà vus auparavant.

//****** Setter

La définition de getters et de setters dans une classe est principalement utilisée pour valider ou modifier certaines valeurs avant qu'elles ne soient définies
comme propriétés sur une classe. Il existe d'autres cas d'utilisation. Nous aborderons également le cas d'utilisation dans les frameworks/bibliothèques front-end.

Prenons un exemple où nous aimerions créer une classe User possédant une age propriété. Cependant, nous aimerions toujours nous assurer que cette age propriété
est un numéro. Pour cela, nous définissons un setter pour la age propriété. Voici à quoi ressemble le setter (le passeur): 
*/

class User {
  set age(value) {
    console.log("age setter");
    this._age = Number.parseInt(value, 10);
  }
}

/* Nous avons ajouté un console.log("age setter") pour que vous puissiez voir quand ce passeur est appelé.
Dans ce setter, nous convertissons le value en un nombre (avec Number.parseInt(string, 10)), puis nous définissons le résultat sur une nouvelle variable d'instance
appelée this._age.

Le '_' ici dans  _age est une convention signifiant que cette propriété est interne à la classe et ne doit pas être accessible de l'extérieur. 
JavaScript a récemment introduit les champs privés (abordés au chapitre public and private fields). 
Cependant, vous pouvez encore rencontrer ce modèle dans de nombreux projets. 

?C'est très important. Si vous définissez accidentellement le résultat sur this.age, vous finissez par créer une boucle infinie. 
?En effet, chaque fois que vous essayez d'accéder à this.age, JavaScript appellera automatiquement ce paramètre. 
?Vous vous retrouvez donc avec une fonction qui continue de s'appeler indéfiniment.

Voyons comment nous pouvons utiliser la classe que nous avons définie ci-dessus :
*/
const user = new User();
user.age = "18";
console.log(user); // {_age: 18}

/* 
Remarquez comment nous pouvons définir la age propriété sur l'user instance en définissant user.age = une certaine valeur.
Dans cet exemple, nous le définissons sur une chaîne "18", qui est ensuite convertie en nombre par le setter. 
Ainsi, le paramètre user.age = appellera la set age(value)fonction et value recevra la chaîne "18".

Ce setter créera ensuite une nouvelle variable d'instance appelée _age et la définira sur 18 (sous forme de nombre). 




(Les Setters en JavaScript
En JavaScript, un setter est une méthode spéciale utilisée pour définir la valeur d'une propriété d'objet. L'utilisation de setters permet un contrôle plus précis
sur la façon dont les valeurs sont assignées à des propriétés d'objet. Cela peut être utile pour valider les données avant leur affectation, pour effectuer
des opérations spécifiques lors de l'affectation d'une valeur, ou pour déclencher des actions supplémentaires.

La syntaxe pour définir un setter dans une classe en JavaScript est la suivante : )
*/
class MaClasse {
  constructor() {
    // Initialisation des propriétés
  }

  set nomPropriete(nouvelleValeur) {
    // Logique de validation ou de traitement
    // Assignation de la nouvelle valeur à la propriété
  }
}

// ********** getter

/* 
?Le problème restant est que si nous essayons d'accéder user.age, nous obtenons undefined. C'est parce que nous n'avons pas défini de a getterpour la agepropriété . 

Allons-y et définissons un getter pour la agepropriété. Nous faisons cela en définissant une get age()fonction comme suit :
*/

class User {
  get age() {
    console.log("age getter");
    return this._age;
  }

  set age(value) {
    console.log("age setter");
    this._age = Number.parseInt(value, 10);
  }
}

//Avec la définition de classe ci-dessus, voici comment nous pouvons l'utiliser :

const user = new User();
user.age = "20"; // calls set age(value)
console.log(user.age); // calls get age(), returns 20 (number)

/* 
Un autre cas d'utilisation des getters consiste à modifier le formatage d'une propriété avant de la renvoyer. Nous le verrons dans l’un des défis suivants.

Vous avez peut-être remarqué que le setterreçoit un valuealors que le getterne le fait pas. En effet, le value (ou tout autre nom de paramètre que vous choisissez) 
fourni au setter est la valeur écrite après le signe égal. Cependant, pour le getter, il n’y a pas de signe égal. Vous lisez seulement la valeur. 

//***Putting it all together (Mettre tous ensemble)

/* 
Vous pouvez toujours utiliser des getters et des setters avec le modèle dans lequel vous capturez les paramètres du constructeur. En effet, chaque fois que vous 
accédez this.agedepuis la classe, cela déclenchera également automatiquement la set age(value) fonction. C'est pourquoi nous avons dû créer une propriété interne 
et l'appeler this._age pour éviter de créer une boucle infinie. */

class User {
  constructor(age) {
    this.age = age; // calls set age(value)
  }

  get age() {
    console.log("age getter");
    return this._age;
  }

  set age(value) {
    console.log("age setter");
    this._age = Number.parseInt(value, 10);
  }
}

//Cela nous permet de définir le agelors de la création d'une nouvelle instance de Usermais également de le modifier ultérieurement :

const user = new User("30");
console.log(user.age); // 30 (number)
user.age = "31";
console.log(user.age); // 31 (number)

/* 

Le résultat final montre que nous avons imposé que agece soit toujours un nombre car nous convertissons toujours la valeur reçue en nombre. 
Vous pouvez également modifier le formatage d'un nombre comme nous le verrons dans les défis suivants. 

Des explications supplémentaire dans les commentaires GitHub : https://github.com/JadJoubranBV/Learn-JavaScript/discussions/398 */

/* 

( Les getters et setters vous permettent de vérifier des choses. Cela signifie que les données sont plus fiables que si vous faisiez les choses directement.

Par exemple, si vous écrivez le Setter, vous pouvez imposer que la valeur transmise soit un nombre et non une chaîne.
De même, vous pouvez également effectuer des vérifications et des manipulations sur le getter si vous le souhaitez.

Cela signifie qu’il est plus difficile de mal utiliser le code et de commettre des erreurs. Vous voulez le faire là où les données sont stockées et non "avant de les stocker" - de cette façon, vous ne pouvez pas oublier de vérifier que la valeur que vous définissez est un nombre et non une chaîne. Il doit être vérifié dans le cadre de sa configuration. 
voir information complémentaire )


//******* résumer
- La définition de getters et de setters dans une classe est principalement utilisée pour valider ou modifier certaines valeurs avant qu'elles ne soient définies comme propriétés sur une classe.
- En supposant une instance user, l'accès user.ageappellera get age()si le getter existe.
- En supposant une instance user, le paramètre user.age = appellera set age(value)si le setter existe.
- Lors de la création de getters et de setters, assurez-vous de préfixer la nouvelle variable d'instance avec an _pour éviter de créer une boucle infinie.

*/
