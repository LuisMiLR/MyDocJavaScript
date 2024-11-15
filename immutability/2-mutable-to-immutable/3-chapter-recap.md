# Récapitulatif du chapitre

**Dernière mise à jour : mai 2022**  
Bon travail !

### Résumé de l'immuabilité

Lorsque **l'immuabilité** est requise (en raison d'un framework ou d'une bibliothèque front-end, ou parce que vous ne souhaitez pas mettre à jour le tableau/objet d'origine), il est nécessaire de créer une **copie** avec l'**opérateur spread (`...`)**.

Cette copie est appelée une **copie superficielle**, car elle ne descend qu'à **un seul niveau de profondeur**. Cela signifie que pour un tableau d'objets, si vous mettez à jour les objets du nouveau tableau, les objets de l'ancien tableau seront également mis à jour (car ils pointent vers les mêmes références).

Dans le contexte des tableaux d'objets, "1 niveau de profondeur" signifie que les objets du **nouveau tableau** continuent de référencer les **mêmes objets** du tableau d'origine.

La plupart du temps, ce n'est pas un problème, car les frameworks ou bibliothèques front-end détectent un changement (car vous avez fourni un nouveau tableau).

Les navigateurs proposent une fonction appelée **`structuredClone()`**, qui permet de créer un **clone profond** en JavaScript sans avoir à utiliser de bibliothèque externe. Cependant, vous n'en aurez probablement pas besoin dans la majorité des cas.

### Récapitulatif des opérations immuables

- **Créer une copie superficielle d'un tableau** :  
  Utilisez la syntaxe spread `...`:  
  `const newArray = [...originalArray];`

- **Ajouter un élément de manière immuable à un tableau** :  
  Ajoutez un nouvel élément sans modifier l'original :  
  `const updatedArray = [...originalArray, newItem];`

- **Créer une copie d'un objet** :  
  Utilisez l'opérateur spread `...` :  
  `const newObject = {...originalObject};`

- **Mettre à jour une propriété d'un objet de manière immuable** :  
  Remplacez ou ajoutez une propriété tout en conservant l'original :  
  `const updatedObject = {...originalObject, property: 'newValue'};`
```