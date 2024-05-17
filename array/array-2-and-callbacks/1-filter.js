// Array filter

/* Nous explorerons dans ce chapitre davantage de méthodes de tableau tout en découvrant simultanément les rappels.

Une méthode d'un tableau commun est la méthode .filter() 
Lorsque vous appelez cette méthode sur un tableau, vous obtiendrez un autre tableau 
contenant certains éléments du tableau d'origine, en fonction de la condition que vous spécifiez. Prenons un exemple : */
const numbers = [9, 5, 14, 3, 11];

const numbersAboveTen = numbers.filter(function (number) {
  return number > 10;
});
console.log(numbersAboveTen); // [14, 11]

//*Ne pas oublier pas le mot-clé return à l'intérieur de la fonction de rappel .
/* 


//*Array.filter (rappel)
Voyons comment fonctionne le code ci-dessus en décomposant son exécution étape par étape.

La .filter()méthode attend un rappel comme premier argument. Dans notre exemple, le rappel est : */

//function(number) {
//return number > 10;
//}

/*JavaScript prendra votre rappel et l'appellera pour chaque élément du tableau. Notre numberstableau contient 5 éléments, 
il l'appellera donc 5 fois. Chaque fois qu'il appelle cette fonction, il donnera une valeur au numberparamètre que vous avez spécifié dans ce rappel.

-Lors de sa première exécution, il donnera la numbervaleur 9 (le premier élément du tableau).
-La deuxième fois qu'il s'exécutera, il donnera la numbervaleur 5 (le deuxième élément du tableau).
et ainsi de suite jusqu'au dernier élément du tableau.

C'est ainsi que fonctionnent les rappels. Désormais, chaque méthode tableau a un comportement différent 
que nous allons expliquer. Ce comportement dépend souvent du résultat du rappel!!

Dans cet exemple, si la fonction de rappel renvoie true, alors l'élément sera inclus dans le tableau final renvoyé par .filter(). 
Cependant, si la fonction de rappel renvoie false, alors l'élément ne sera pas inclus dans le tableau final.

Cela signifie que si vous avez le code ci-dessous :
*/
numbers.filter(function (number) {
  return true;
});

/* Cela renverra chaque élément du tableau. Vous finirez donc par obtenir une copie du tableau d'origine. 
C'est parce que le rappel renvoie toujours vrai. Ce code n'est pas très utile, mais il sert à vous montrer 
l'importance de ce que renvoie la fonction de rappel et comment cela affecte le résultat de la .filter()méthode.

C'est pourquoi nous avions une condition number > 10. Cette condition renverra soit true ou false en fonction de la valeur du number. 

Comment JavaScript sait-il que chaque élément du numberstableau devient numberl'argument de rappel ? 
Et la réponse à cette question est qu’il ne sait pas !

JavaScript prendra votre rappel et transmettra l'élément du tableau comme premier paramètre à votre fonction de rappel. 
Cela signifie que le code ci-dessous fonctionne (mais n'est pas recommandé) :


résumer
-La .filter()méthode renvoie un nouveau tableau contenant certains éléments du tableau d'origine, en fonction de la condition 
que vous spécifiez.
-JavaScript prendra votre fonction de rappel et l'appellera pour chaque élément du tableau.
-Pour la .filter()méthode, le résultat de la fonction de rappel compte. Quand c'est le cas true, l'élément sera inclus dans le 
tableau résultant. Sinon, ce ne sera pas le cas.
-JavaScript ne peut pas deviner intelligemment que le numberstableau devient le numberparamètre de votre fonction de rappel. 
Ce qu'il fait, c'est qu'il appelle votre fonction de rappel tout en donnant une valeur pour le premier paramètre que vous avez spécifié.
-Utilisez la convention de dénomination pluriel -> singulier lorsque vous utilisez la .filter()méthode.
*/
