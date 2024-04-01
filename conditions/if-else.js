//If & else

//Il est parfois possible de supprimer le else. Jetons un coup d'œil à un exemple :
function canVote(age) {
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
}
/* Puisque cette fonction effectue deux actions différentes basées sur le résultat de la condition 
if et de son opposé (else), alors nous pouvons la réécrire en supprimant le elsemot-clé : */

function canVote(age) {
  if (age >= 18) {
    return true;
  }
  return false;
}

/* Ces deux fonctions auront exactement le même résultat. C'est parce que le returnmot clé quittera 
la fonction avec le résultat. Ainsi, lorsque l'âge est supérieur ou égal à 18 ans, la fonction reviendra true 
et le reste du code ne s'exécutera pas .
Cependant, lorsque l’âge est inférieur à 18 ans, le code contenu dans la ifcondition ne s’exécute pas. Ainsi, 
la seule ligne qui s’exécute est la dernière, à savoir return false.

Nous profiterons de cette astuce plus tard dans ce cours pour en apprendre davantage sur un modèle courant appelé retour anticipé . */

////if and boolean
// Chaque fois que vous renvoyez un booléen ( trueou false), il est assez redondant d'utiliser ifand else. Voici un exemple :
function isPassing(grade) {
  if (grade >= 10) {
    return true;
  } else {
    return false;
  }
}

isPassing(12);
/* Ceci est redondant car grade >= 10, à lui seul, il est évalué à vrai ou faux en fonction de la note. Cela signifie 
que vous n'avez pas besoin de l'envelopper avec une instruction if/else.

C'est pourquoi vous pouvez le refactoriser comme ceci : */
function isPassing(grade) {
  return grade >= 10;
}
/* sans utiliser if/else qui renverra toujours un booléen !

Cela ne fonctionne que lorsque vous renvoyez un booléen à partir d'une fonction.

 */

//résumé

/* En utilisant une condition if , vous pouvez exécuter un morceau de code lorsque la condition est évaluée àtrue
-La syntaxe est if (condition)puis des accolades {}enveloppent les lignes de code qui correspondent à cette condition
-Le mot clé else peut être utilisé pour exécuter un autre code basé sur toutes les autres conditions non satisfaites par le if.
-Lorsque vous avez une if/else condition qui renvoie deux résultats différents, il est possible de supprimer le else mot-clé. */
