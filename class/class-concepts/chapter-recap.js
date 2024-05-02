/* 
//*************************************************************************************** chapter recap ******************************************************************
//************ Récapitulatif du chapitre

- La définition de getters et de setters dans une classe est principalement utilisée pour valider ou modifier certaines valeurs avant qu'elles ne soient définies 
  comme propriétés sur une classe.

- En supposant une instance user, l'accès user.age appellera get age()si le getter existe.

- En supposant une instance user, le paramètre user.age = appellera set age(value)si le setter existe.

- Lors de la création de getters et de setters, assurez-vous de préfixer la nouvelle variable d'instance avec un "_" pour éviter de créer une boucle infinie.

- Les méthodes statiques sont appelées directement sur la classe et ne peuvent pas être appelées sur une instance.

- Le résultat d’une méthode est-il le même dans toutes les instances de la classe ? Si oui, alors ça devrait l'être static.

- La méthode n'accède-t-elle à aucune variable d'instance de cette classe ? Si oui, cela devrait probablement être le cas static.

- Le chaînage de méthodes est possible lorsque la méthode d'instance renvoie this. 


*/
