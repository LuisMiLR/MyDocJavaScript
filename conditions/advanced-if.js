/* Il est parfois possible de supprimer le else. Jetons un coup d'œil à un exemple :

*/
function canVote(age) {
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
}
//Puisque cette fonction effectue deux actions différentes basées sur le résultat de la condition if et de son opposé (else), alors nous pouvons la réécrire en supprimant le elsemot-clé :

function canVote(age) {
  if (age >= 18) {
    return true;
  }
  return false;
}
/*Ces deux fonctions auront exactement le même résultat. C'est parce que le returnmot clé quittera la fonction avec le résultat. Ainsi, lorsque l'âge est supérieur ou égal à 18 ans, la fonction reviendra trueet le reste du code ne s'exécutera pas .
Cependant, lorsque l’âge est inférieur à 18 ans, le code contenu dans la ifcondition ne s’exécute pas. Ainsi, la seule ligne qui s’exécute est la dernière, à savoir return false.

Nous profiterons de cette astuce plus tard dans ce cours pour en apprendre davantage sur un modèle courant appelé retour anticipé .

//******** Remarque sur l'héritage

Une note rapide sur l'héritage. Si vous rencontrez == (double égal) en JavaScript, essayez de le remplacer par === triple égal .
L'opérateur double égal effectue des conversions auxquelles vous ne vous attendriez pas. Tenez-vous-en toujours au triple égal à la place.

Icône des meilleures pratiques
Utilisez toujours triple égal === lorsque vous comparez 2 valeurs en JavaScript .

Si vous souhaitez en savoir plus sur les raisons pour lesquelles ==ce n'est pas recommandé, consultez cette comparaison :

"2" == 2;
Est-ce que cela reviendrait true ou false?

Cela reviendrait true car JavaScript tenterait de convertir les deux valeurs dans le même type de données. S'il vous plaît, ne considérez pas cela 
comme une "fonctionnalité". Au lieu de cela, vous devriez l'éviter et toujours utiliser triple égal ===, qui ne renvoie vrai que si les deux côtés ont le 
même type de données et la même valeur.

//********* résumer
Lorsque vous avez une if/else condition qui renvoie deux résultats différents, il est possible de supprimer le else mot-clé.
Utilisez toujours triple égal (===) lorsque vous comparez 2 valeurs en JavaScript.
Est-ce que cela a été utile?

*/
