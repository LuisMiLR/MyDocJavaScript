Récapitulatif du chapitre

Dernière mise à jour novembre 2023  
Continue!

Dans le chapitre suivant, nous allons examiner les méthodes qui modifient les tableaux/objets et découvrir les techniques qui nous permettent de cloner un nouveau tableau/objet, afin de les mettre à jour de manière immuable.

**Récapitulatif du chapitre**

- Les tableaux sont des objets en JavaScript.
- `[] === []` équivaut à `new Array() === new Array()` ; les deux renvoient `false` car ils comparent deux instances différentes.
- `{} === {}` est similaire à `new Object() === new Object()`, et cela renvoie également `false` pour la même raison.
- L'égalité stricte (`===`) compare les références des objets/tableaux et non leurs valeurs.
- Pour comparer les valeurs des objets ou des tableaux, vous devez utiliser une égalité profonde (deep equal).
- La vérification de l'égalité profonde est souvent trop lente pour être utilisée dans les frameworks front-end, c'est pourquoi la comparaison stricte (`===`) est préférée.
- Un objet immuable est un objet qui ne peut pas être modifié. Pour le modifier, il faut créer un nouvel objet basé sur l'original, tout en gardant l'objet initial inchangé.

À bientôt pour explorer comment gérer l'immuabilité avec les tableaux et objets !

🧠 En JavaScript, les objets sont passés par référence et les valeurs primitives sont passées par valeur.