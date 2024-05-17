//********************************************************************* what is reduce ? *****************************************************************************
//********************************************************************************************************************************************************************

/*  

Dernière mise à jour avril 2022

Nous aurons un autre chapitre de réduction plus avancé une fois que nous aurons découvert les tableaux d'objets.

La reduce() méthode est un peu compliquée mais nous la détaillerons étape par étape. Ne vous inquiétez pas si vous ne comprenez pas du premier coup. 

?La reduce()méthode est utilisée pour calculer une valeur unique à partir d’un tableau. En d'autres termes, vous réduisez un tableau en une seule valeur.

*Exemple de réduction : somme

Nous pouvons réduire le tableau [5, 10, 5] au nombre 20.
Nous pouvons réduire le tableau [2, 4, 3] au nombre 9.

Vous avez peut-être remarqué que ces deux exemples résument les éléments du tableau. 5 + 10 + 5 = 20 et 2 + 4 + 3 = 9.

C'est l'un des cas d'utilisation les plus courants de reduce(), qui consiste à additionner les éléments du tableau.

*Exemple de réduction : multiplication

Un autre exemple est la multiplication. Par exemple:

On peut réduire le tableau [10, 2, 2] au nombre 40 (10 * 2 * 2 = 40) 

----------------------------------------
Alors la méthode de réduction est-elle une somme ou une multiplication ?
Ce n'est ni l'un ni l'autre. C'est parce que la reduce()méthode accepte le réducteur qui est un rappel que vous devez écrire. Ce rappel 
peut être une somme, une multiplication ou toute autre logique à laquelle vous pourriez penser.

?Réduire est donc une fonction générique qui réduira un tableau en une seule valeur. La façon dont il réduira ce tableau en une seule valeur est configurable 
?par vous le développeur. Vous pouvez configurer cela dans le reducercallback .

Nous ne pensons pas que les choses soient encore claires car nous ne vous avons pas montré le code, mais vous trouverez ci-dessous le récapitulatif 
des concepts les plus importants abordés jusqu'à présent.


//******* résumer
La reduce()méthode est utilisée pour calculer une valeur unique à partir d’un tableau.
En d’autres termes, la reduce()méthode réduit un tableau en une seule valeur.
Les cas d'utilisation les plus courants de la réduction (lorsque vous travaillez avec des tableaux de nombres) sont la somme et la multiplication.
La reduce()méthode utilise un réducteur qui vous permet de configurer la logique de réduction du tableau en un seul nombre.

*/
