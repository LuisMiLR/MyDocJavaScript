# Qu'est-ce qu'une référence ?

En programmation, une référence permet d'indiquer l'emplacement en mémoire d'un objet ou d'une variable plutôt que de la stocker elle-même. Cela permet d'accéder et de manipuler cet objet ou cette variable de manière flexible et efficace.

## Voici quelques points clés :

- **Accès à la mémoire** : Une référence est utilisée pour accéder à l'emplacement en mémoire où une valeur est stockée. Au lieu de stocker la valeur elle-même, une variable peut contenir une référence qui pointe vers l'emplacement mémoire de la valeur.

- **Objets et structures de données complexes** : Les références sont souvent utilisées avec des objets ou des structures de données complexes, comme des tableaux ou des fonctions.

- **Affectation de variables** : Lorsque vous affectez une variable à une autre, la référence à l'objet ou à la valeur est copiée, pas la valeur elle-même.

### Initialisation d'une variable :

L'initialisation d'une variable se produit lorsque vous attribuez une valeur initiale à une variable pour la première fois.

```javascript
let x = 10;
```

### Affectation de variables :

L'affectation de variables se produit lorsque vous attribuez une nouvelle valeur à une variable qui a déjà été déclarée et initialisée.

```javascript
x = 20;
```

## Pourquoi une référence est une valeur ?

En programmation, une "référence" est souvent considérée comme une "valeur" parce qu'elle peut être manipulée comme telle dans le code. Une référence à un objet, par exemple, peut être stockée dans une variable, passée à une fonction, ou renvoyée comme valeur de retour.

## Qu'est-ce qu'une classe ?

Une classe est un modèle ou un plan qui décrit comment créer un objet. Elle spécifie les propriétés (variables) et les méthodes (fonctions) que les objets créés à partir de cette classe posséderont.

## Qu'est-ce qu'une instance ?

Une instance fait référence à un objet spécifique créé à partir d'une classe ou d'un constructeur. Chaque instance a ses propres valeurs pour les propriétés définies dans la classe, mais partage les méthodes définies dans la classe.

## What is CORS?

CORS, ou Cross-Origin Resource Sharing, est un mécanisme qui permet aux navigateurs web d'autoriser les requêtes HTTP entre des origines (domaines) différents, renforçant ainsi la sécurité tout en facilitant l'accès à des ressources distantes.

## What is Execution Context?

Le contexte d'exécution fait référence à l'environnement dans lequel le code JavaScript est exécuté. Il comprend des variables, des fonctions et la chaîne de portée qui détermine l'accès aux variables pendant l'exécution du code.

## What is Call Stack?

La pile d'appels est une structure de données utilisée par le moteur JavaScript pour gérer l'exécution des appels de fonction. Elle garde une trace du contexte d'exécution des fonctions en cours d'exécution selon le principe LIFO (Last In, First Out).

## What is Hoisting?

Le levage est un comportement JavaScript dans lequel les déclarations de variables et de fonctions sont déplacées vers le haut de leur portée pendant la phase de compilation.

## What is Lexical Scope?

La portée lexicale fait référence à la résolution de la portée des variables et des fonctions en fonction de leur emplacement dans le code source.

## What is Block Scope?

La portée du bloc fait référence à la portée des variables et des fonctions qui sont confinées dans un bloc de code délimité par des accolades `{}`.

## What is Closure?

Une fermeture est une fonctionnalité de JavaScript dans laquelle une fonction interne conserve l'accès aux variables et paramètres de sa fonction externe même après l'exécution de la fonction externe.

## What are First-Class Functions?

Les fonctions de première classe en JavaScript sont des fonctions qui peuvent être traitées comme n'importe quelle autre valeur. Elles peuvent être assignées à des variables, passées comme arguments ou retournées par d'autres fonctions.

## What is the Difference Between Function Statement and Function Expression?

Une déclaration de fonction est définie avec le mot-clé `function` et est hissée (accessible avant sa déclaration dans le code). Une expression de fonction définit une fonction dans le cadre d'une expression, généralement assignée à une variable, et n'est pas hissée.

## What is the Difference Between Parameter and Argument?

Un paramètre est une variable dans une définition de fonction, tandis qu'un argument est la valeur passée à cette fonction lors de son appel.

## What is an Arrow Function?

Une fonction fléchée est une manière concise de définir une fonction introduite dans ES6, avec une syntaxe plus courte et une liaison lexicale de `this`.

## What is a Callback?

Une fonction de rappel est une fonction passée en argument à une autre fonction pour être exécutée après l'achèvement d'une tâche spécifique.

## What are Event Listeners?

Les écouteurs d'événements sont des fonctions qui "écoutent" des événements, comme des clics ou des entrées clavier, pour exécuter du code en réponse.

## What is Garbage Collection?

La collecte des déchets est une technique de gestion de la mémoire où la mémoire occupée par les objets inutilisés est automatiquement récupérée pour éviter les fuites de mémoire.

## What is Blocking the Main Thread?

Le blocage du thread principal fait référence à une situation où des opérations synchrones longues empêchent le thread principal d'une application web de répondre aux actions de l'utilisateur.

## What is a Promise?

Une promesse est un objet représentant l'achèvement ou l'échec éventuel d'une opération asynchrone, facilitant la gestion des tâches asynchrones.

## What are Async and Await?

Async/await simplifie la programmation asynchrone. Une fonction déclarée avec `async` peut utiliser `await` pour suspendre son exécution jusqu'à ce qu'une promesse soit résolue.

## Paradigm

Un paradigme en programmation est un style ou une méthode de programmation qui dicte comment les concepts de base d'un programme sont organisés. Par exemple, la programmation orientée objet (POO) organise le code autour d'objets, tandis que la programmation fonctionnelle organise le code autour de fonctions pures.

## Regression

En développement, une régression désigne un problème ou un bug qui apparaît dans un logiciel après une modification ou une mise à jour. En d'autres termes, une fonctionnalité qui fonctionnait correctement avant une mise à jour cesse de fonctionner ou se comporte de manière incorrecte après l'introduction de nouveaux changements (comme des corrections de bugs, de nouvelles fonctionnalités, ou des améliorations).

Voici quelques exemples courants de régressions :

Régression fonctionnelle : une fonctionnalité existante ne fonctionne plus comme prévu.
Régression de performance : une mise à jour a rendu le logiciel plus lent ou moins efficace.
Régression d'interface utilisateur : l'apparence ou la réactivité de l'interface se dégrade après des modifications.
