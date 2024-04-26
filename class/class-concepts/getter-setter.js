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
Remarquez comment nous pouvons définir la agepropriété sur l' userinstance en définissant user.age = une certaine valeur.
Dans cet exemple, nous le définissons sur une chaîne "18", qui est ensuite convertie en nombre par le setter. 
Ainsi, le paramètre user.age = appellera la set age(value)fonction et valuerecevra la chaîne "18".

Ce setter créera ensuite une nouvelle variable d'instance appelée _age et la définira sur 18(sous forme de nombre). 
*/
