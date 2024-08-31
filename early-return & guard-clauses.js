//early return ou guard clauses

/*
La pratique consistant à structurer des conditions if sans utiliser else est souvent appelée "early return" ou "guard clauses" en anglais.
  
Les concepts d'early return et de guard clause sont très similaires, et dans de nombreux cas, ils peuvent être utilisés de manière interchangeable. Cependant, il y a une légère différence de nuance entre les deux termes.


*Early Return

Concept : Un early return est une technique où vous quittez une fonction dès que possible lorsque certaines conditions sont remplies. Le but est de simplifier le flux de contrôle de la fonction en réduisant la profondeur d'imbrication.

Usage : L'early return est souvent utilisé pour gérer des conditions spécifiques, des exceptions ou des cas spéciaux au début d'une fonction, afin que le code principal ne soit pas encombré par des branches conditionnelles.

Exemple :
  */

function calculateDiscount(price, discount) {
    if (discount <= 0) {
      return price;  // Early return si le discount est invalide
    }
  
    return price - (price * discount);
  }
  
  /*

*Guard Clause

Concept : Une guard clause est une condition placée au début d'une fonction (ou d'une section de code) pour "garder" ou protéger le code principal contre des situations indésirables. C'est une sorte de filtre qui assure que le code principal ne sera exécuté que si certaines conditions sont remplies.

Usage : Les guard clauses sont utilisées pour éliminer des cas exceptionnels ou non désirés dès le début, permettant ainsi au code principal de la fonction de rester propre et concentré sur son objectif principal.

Exemple :
  */

function processOrder(order) {
    if (!order) {
      return 'Invalid order';  // Guard clause pour protéger contre les ordres nulls ou indéfinis
    }
  
    if (order.items.length === 0) {
      return 'No items in the order';  // Guard clause pour vérifier la présence d'articles
    }
  
    // Traitement principal de la commande
    return 'Order processed';
  }
  
  /*

*Différences Subtiles

Intentions :

Early Return : Souvent utilisé pour sortir rapidement d'une fonction si une condition est remplie.
Guard Clause : Utilisé pour vérifier et filtrer les préconditions avant de poursuivre le traitement principal de la fonction.

Emplacement :

Early Return : Peut se produire à n'importe quel endroit de la fonction où il est logique de quitter immédiatement.
Guard Clause : Typiquement placée au début de la fonction pour s'assurer que les conditions initiales sont respectées avant de procéder.


*Conclusion

Bien que les concepts soient très proches, la différence principale réside dans leur utilisation et leur intention :

Guard Clause : Conçu pour protéger le corps principal de la fonction en vérifiant les préconditions dès le début.
Early Return : Utilisé pour simplifier le flux de contrôle en sortant d'une fonction dès qu'une condition spécifique est remplie.
Dans la pratique, les deux techniques sont souvent utilisées ensemble et peuvent se recouvrir, ce qui rend les termes parfois interchangeables selon le contexte.
  */