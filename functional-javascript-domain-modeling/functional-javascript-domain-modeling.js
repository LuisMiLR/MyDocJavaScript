/* Functional Javascipt Domain Modeling (en français)
Source : 
Raphaël Andrey
Software Developer
1 avril 2024


//***Partie 1: Rappel de quelques principes fondamentaux de la programmation fonctionnelle

//*Les fonctions pures : 
une fonction retourne toujours le même résultat pour le même input et ne provoque aucun effet de bord (mutation en dehors de son scope).

//*L'immutabilité : tous les objets sont immutables, ils ne servent qu'à transporter des données.

//*Les fonctions "first class citizens" : 
une fonction peut être passée en paramètre à d'autres fonctions ou être retournée comme valeur et utiliser les variables du scope de la fonction "mère".

//*Composition de fonctions : 
combiner de petites fonctions réutilisables pour en former de plus grandes (comme des briques de Lego).

//*Récursion : 
les boucles sont remplacées par des fonctions récursives.

//*L'évaluation différée : 
certaines expressions peuvent être déclarées dans le but de récupérer une valeur calculée plus tard dans une autre partie du code.

//*Les Sum Types : 
désignent les types où plusieurs variants sont disponibles, où chaque variant est associé à son propre constructeur.

//*Les Product Types : 
désignent les types qui sont une combinaison de plusieurs types où chaque instance est composée de chacun de ces membres sans exceptions. Les types 
algébriques (ADTs) peuvent être combinés entre eux pour former des types plus complexes.

//*Les entités : 
les entités en programmation fonctionnelle sont des modules composés d'une structure de données et de fonctions associées à cette structure. Elles ont 
pour rôle de garantir les invariants, c'est-à-dire les états incohérents de ladite structure de données. Par exemple, lorsque l'on applique une réductio
fixe sur un produit, le prix ne doit pas devenir négatif, ce qui constitue un invariant de l'entité Product. Ce type de structure de données sera principalement
ou exclusivement constitué de value objects qui peuvent être potentiellement d'un type algébrique. Une nouvelle instance de l'entité sera créée à chaque mutation 
pour respecter le principe d'immutabilité.


//***Partie 2: Pourquoi le modèle de domaine fonctionnel ?

Le Domain modeling permet d'avoir des définitions de type qui servent également de documentation vivante tout au long du projet (avec les tests unitaires). Il permet 
également de produire du code qui reflète ce que les développeurs ont appris du domaine métier de l'application, et de continuer à en découvrir davantage au fil 
des discussions avec les experts du domaine.
Le but est de rendre impossible les états inconsistants dans le cœur du logiciel grâce aux connaissances métier des développeurs, en utilisant de façon optimale
 le système de types et les smart constructors qui auraient été conçus avec cette connaissance du domaine métier.


//***Partie 3: Comment faire avec Javascript ?

Comme vous le savez sûrement, le JavaScript est faiblement et dynamiquement typé, mais pas de panique ! On peut quand même bricoler avec certaines fonctionnalités du
langage pour limiter au mieux les erreurs et rendre impossible les états inconsistants.
Pour l'exemple, j'ai choisi de modéliser un jeu de cartes. 
//*voir images : jeuxDeCarte1 & jeuxDeCarte2 dans le dossier


Dans cet exemple, Rank (figure) et Suit (couleur) sont deux Sum Type. Rank représente les différentes figures possibles d'une carte, et Suit sa couleur. Ils possèdent
tous deux 4 variantes. Nous utilisons ici Object.freeze() pour retourner un objet immuable. Ces types ont été conçus lors d'une discussion avec l'expert du domaine :

Développeur : Qu'est-ce qu'une <Card> ?

Expert : C'est une <Rank> et une <Suit>.

Développeur : D'accord, et qu'est-ce qu'une <Rank> ?

Expert : Il y en a 4 possibles (dans l'exemple) : Ace, King, Queen et Jack. Chacun a une valeur numérique de 10, sauf l'As qui a 11.

Développeur : Et la <Suit> ?

Expert : Il y en a également 4 : Heart, Diamond, Spade et Club. Elles n'ont pas de valeur particulière dans notre cas, mais il faut qu'il y ait toutes les figures pour 
chaque couleur pour que le <Deck> soit complet.
... et ainsi de suite ...

Les développeurs après la séance :
"Le type Card est un type produit composé d'un variant de Rank et d'un variant de Suit, donc une Card peut avoir toutes les combinaisons possibles de Rank et de Suit, 
soit 16 possibilités (dans notre exemple, le jeu de cartes a été raccourci)."

Le code du module Card doit être le reflet de cette conversation. Aucun test, aucun comportement pour l'instant. Ce code sert aussi de documentation pour le modèle de
domaine pour les développeurs. Notez que les constructeurs de Rank et Suit sont privés dans le module de Card, ce qui rend impossible l'appel du constructeur de Card 
avec de mauvaises valeurs qui pourraient rendre le modèle inconsistant.

https://www.linkedin.com/pulse/functional-javascipt-domain-modeling-en-fran%2525C3%2525A7ais-rapha%2525C3%2525ABl-andrey-32nme/?trackingId=nV5XPh%2FgQlqMw5JoRZbEUQ%3D%3D

*/
