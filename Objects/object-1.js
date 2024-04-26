//****************************************************************** Object *********************************************************************************************
//***********************************************************************************************************************************************************************

//********définition
/* 
Un objet est une antité qui possède des propriétés et des méthodes 
- Chaque propriété définit une caractèristique, une information de l'objet (ex: la couleur)
- Chaque méthode défini un comportement, une action de l'objet (ex: ecrire)
*/

//un object sert à stocker des propriétés alors qu'un tableau sert à stocker une liste par ex liste d'animaux
//L'object sert à stocker les caractéristique de l'animal

//les accolades {} pour déclarer le contenu d'un objet
//des paires clé / valeur séparées par des virgules

const myDog = {
  name: "Rex",
  colors: ["white", "black"],
};

//deux façon d'afficher la valeur d'un objet
console.log(myDog.name); // affichera Rex
console.log(myDog["name"]); // affichera Rex

//⚠️ Lorsque l'on souhaite accéder à la propriété d'un objet dont le nom contient un ou plusieurs espaces,
//il est obligatoire d'utiliser les crochets []

//Pour ajouter une paire clé/valeur à un objet
mydog.age = 3;

// Pour supprimer une propriété d'un objet on utilise
delete myDog.age;
/* l'utilisation de delete n'est pas toujours nécessaire ou recommandée.
Pour simplement supprimer la valeur d'une propriété sans supprimer la propriété elle-même,
il peut être plus approprié de définir la valeur de la propriété à undefined ou null.
Cela dépend du contexte et de la logique de votre application. 

?C'est une bonne idée de visualiser les objets avec lesquels vous travaillez en les connectant à la console. 
?Cependant, les objets imbriqués ne sont pas développés dans la console de ce cours. Vous pouvez soit utiliser la console de votre navigateur, 
?soit, de préférence, consoler directement l'objet imbriqué.

*/

//************ Mise à jour de la valeur de la propriété
//Vous pouvez également mettre à jour la valeur d'une propriété en utilisant la même notation par points suivie d'un signe égal :

const user = {
  id: 1,
  firstName: "Sam",
  lastName: "Doe",
  age: 20,
};

user.lastName = "Blue";
user.age = user.age + 1;
console.log(user); // {id: 1, firstName: "Sam", lastName: "Blue", age: 21}

//?Vous pouvez mettre à jour la valeur de la propriété d'un objet défini par constcar constcela ne signifie pas que la variable est une constante, cela signifie
//?simplement que vous ne pouvez pas la réaffecter. Ainsi, la variable est toujours un objet, mais son contenu (propriétés) peut changer.

/* 
//********* résumer
Un objet est un type de données qui vous permet de regrouper plusieurs variables en une seule variable contenant des clés et des valeurs.
En JavaScript, la convention recommandée est camelCase pour les noms de propriétés (par exemple firstNameau lieu de first_name).
Pour lire ou mettre à jour la valeur d'une propriété, vous pouvez utiliser la notation par points . */

/* 
//******** Récapitulatif du chapitre
Un objet est un type de données qui vous permet de regrouper plusieurs variables en une seule variable contenant des clés et des valeurs.
En JavaScript, la convention recommandée est camelCase pour les noms de propriétés (par exemple firstNameau lieu de first_name).
Pour lire ou mettre à jour la valeur d'une propriété, vous pouvez utiliser la notation par points . */
