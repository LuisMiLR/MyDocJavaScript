//************************************************************************ Array reduce: sum *************************************************************************
//********************************************************************************************************************************************************************

/* 
Dernière mise à jour juin 2022

Il est temps de jeter un œil au code ! 
Dans cette leçon, nous nous concentrerons sur un cas d'utilisation de la réduction : le calcul de la somme. Ainsi, réduire un tableau de nombres à sa somme.

En supposant le tableau de notes ci-dessous : 
*/

const grades = [10, 15, 5];

//Voici comment calculer sa somme avec réduire :

const sum = grades.reduce((total, current) => {
  return total + current;
}, 0);

/* 

Il se passe beaucoup de choses ici, décomposons-les :

Nous appelons la .reduce() méthode sur le grades tableau.
Nous attribuons le résultat de grades.reduce() à une nouvelle variable appelée sum.
La méthode de réduction prend 2 paramètres : le réducteur et la valeur initiale.

*Réducteur
Le réducteur dans cet exemple est : 
*/

(total, current) => {
  return total + current;
};

/* 
Il s'agit du rappel appliqué à chaque élément du tableau. Cependant, ce rappel prend 2 paramètres : total et current.

?Le total fait toujours référence à la dernière valeur calculée par la fonction de réduction. Vous pouvez souvent voir cela appelé comme accumulator dans la 
?documentation, ce qui est un nom plus correct. Et le current fait référence à un seul élément du tableau. Voyons ce que cela signifie en montrant la valeur de  
?total et current pour chaque étape :
*/
// code that we run
const gradez = [10, 15, 5];

const sums = gradez.reduce((total, current) => {
  return total + current;
}, 0);

/* 
1- La première fois que le rappel s'exécute, total se voit attribuer 0 (en raison de la valeur initiale que nous expliquerons dans un instant) et current sera attribué 
au premier élément du tableau. Donc total = 0 et courant = 10.

2- Ensuite, nous revenons, total + current ce qui est 0 + 10 = 10. La nouvelle valeur de totaldevient désormais 10.

3- Le rappel s'exécute une deuxième fois et cette fois current = 15 (deuxième élément du tableau) et total = 10. 
Nous revenons total + current qui est 10 + 15 = 25. La valeur actuelle de total devient 25.

4- Le rappel s'exécute une troisième fois et cette fois current = 5 (troisième élément du tableau) et total = 25. 
Nous revenons total + current qui est 25 + 5 = 30.

5- Il n'y a plus d'éléments dans le tableau, donc le résultat de la réduction est la valeur finale dont la total valeur est 30.
La somme est donc 30.


*Valeur initiale

La .reduce() méthode accepte 2 paramètres : reducer et initialValue (à ne pas confondre avec les 2 paramètres du reducer qui sont total et current). Nous avons 
expliqué ce reducer qui précède. est initialValue la valeur que nous donnons au total(ou accumulator) la première fois que le rappel est exécuté.

Passer 0 comme initialValue revient à déclarer let sum = 0 lors de l'utilisation .forEach() pour calculer la somme.
C'est la valeur de départ que nous utilisons pour pouvoir calculer la somme.

JavaScript prendra automatiquement votre initialValueet le transmettra à l' total argument dans le réducteur lors de la première exécution du rappel .

Alors, la valeur initiale est-elle toujours 0 ? Lors du calcul du sum oui. Nous discuterons d’autres valeurs dans la prochaine leçon.
 
//********* résumer

- La reduce()méthode prend 2 paramètres : reduceret initialValue. .reduce(reducer, initialValue).
- Le initialValueest toujours 0 pour la somme.
- Le réducteur est une fonction de rappel qui reçoit 2 paramètres : totalet current.
- Le total(également appelé accumulator) garde une trace du résultat de la méthode de réduction. Par exemple, lors du calcul de la somme, il en assure le suivi, étape par étape.
- Le currentreprésente un élément du tableau.
- Le reducerest appelé pour chaque élément du tableau. 
 */
