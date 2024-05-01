/* Récap du chapitre immuability



Pour récapituler, lorsque l'immuabilité est requise (à cause d'un framework/bibliothèque front-end ou parce que vous ne souhaitez pas mettre à jour
le tableau/objet d'origine), vous devrez en faire une copie avec l' ...opérateur.

Cette copie est appelée copie superficielle car elle ne va que sur 1 niveau de profondeur. Cela signifie que pour un tableau d'objets, si vous 
effectuez une mise à jour des objets du nouveau tableau, les objets de l'ancien tableau seront toujours mis à jour .

Dans le contexte de tableaux d'objets, 1 niveau de profondeur signifie que les objets du nouveau tableau feront toujours référence aux mêmes objets
du tableau d'origine.

La plupart du temps, ce n'est pas un problème car le framework/la bibliothèque frontale détectera un changement (puisque vous avez fourni un nouveau tableau)
Les navigateurs ont récemment livré une fonction appelée structuredClonequi permet de créer un clone profond en JavaScript sans avoir recours à une bibliothèque externe.
Cependant, vous n’en aurez probablement pas besoin. 

************************************************** Récapitulatif du chapitre **********************************************************************
Vous pouvez créer une copie superficielle d'un tableau en utilisant la syntaxe spread ...: [...originalArray].
Cela fonctionne en répartissant les éléments dans un nouveau tableau.
Vous pouvez ajouter de manière immuable un élément à un tableau comme ceci :[...originalArray, newItem]
Vous pouvez créer une copie d'un objet à l'aide de l' ...opérateur :{...originalObject}
Vous pouvez mettre à jour une propriété existante :{...originalObject, property: 'newValue'}

Un objet immuable est un objet qui ne peut pas être modifié. 
Comme nous ne pouvons pas modifier un objet immuable, nous créons un objet entièrement nouveau basé sur 
l'original, laissant l'objet original inchangé.
*/
