/* qu'est ce qu'une référence ?

En programmation, une "référence" fait référence à une valeur qui permet d'accéder à une ressource ou à un objet en mémoire. En d'autres termes, une référence 
est une manière d'indiquer l'emplacement en mémoire d'un objet ou d'une variable plutôt que de stocker directement sa valeur.
Voici quelques points clés :

Accès à la mémoire : Une référence est utilisée pour accéder à l'emplacement en mémoire où une valeur est stockée. Au lieu de stocker la valeur 
elle-même, une variable peut contenir une référence qui pointe vers l'emplacement mémoire de la valeur.

Objets et structures de données complexes : Les références sont souvent utilisées avec des objets ou des structures de données complexes. Lorsque vous 
travaillez avec des objets, des tableaux, des fonctions, etc., une référence est souvent utilisée pour accéder à ces entités en mémoire.

Affectation de variables : Lorsque vous affectez une variable à une autre, la référence à l'objet ou à la valeur est copiée, pas la valeur elle-même. 
Cela signifie que les deux variables peuvent faire référence au même emplacement mémoire.
*/

/* qu'est ce qu'une classe ? 
Classe : Une classe est une sorte de modèle ou de plan qui décrit comment créer un objet. Elle spécifie les propriétés (variables) et les méthodes (fonctions) que 
les objets créés à partir de cette classe auront. */

/*
 qu est ce qu'une instance ?

En programmation, une "instance" se réfère à un objet spécifique créé à partir d'une classe ou d'un constructeur. Une classe est un modèle ou un plan qui 
définit la structure et le comportement d'objets, et une instance est un objet concret qui est une occurrence de cette classe.

Voici une explication plus détaillée :
Instance : Une instance est un objet spécifique qui est créé à partir d'une classe. Chaque instance a ses propres valeurs pour les propriétés définies dans 
la classe, mais partage les méthodes définies dans la classe.
*/

/*
cors c'est quoi ?

CORS, ou Cross-Origin Resource Sharing, est un mécanisme qui permet aux navigateurs web d'autoriser les requêtes HTTP entre des domaines différents, renforçant 
ainsi la sécurité tout en facilitant l'accès à des ressources distantes.
*/

/* 
What is Execution Context? 
Le contexte d'exécution fait référence à l'environnement dans lequel le code JavaScript est exécuté. Il comprend des variables, des fonctions et la chaîne de 
portée qui détermine l'accès aux variables pendant l'exécution du code.

What is Call Stack? - Qu’est-ce que la pile d’appels ?
La pile d'appels est une structure de données utilisée par le moteur JavaScript pour gérer l'exécution des appels de fonction. Il garde une trace du contexte d'exécution
des fonctions en cours d'exécution, permettant à JavaScript de gérer les appels de fonction selon le principe LIFO (Last In, First Out).

What is Hoisting? - Qu’est-ce que le levage ?
Le levage est un comportement JavaScript dans lequel les déclarations de variables et de fonctions sont déplacées vers le haut de leur portée pendant la phase de 
compilation. Cela permet d'accéder aux variables et aux fonctions avant leur déclaration effective dans le code.

What is Lexical Scope? - Qu’est-ce que la portée lexicale ?
La portée lexicale fait référence à la résolution de la portée des variables et des fonctions en fonction de leur emplacement physique dans le code source. En 
JavaScript, la portée lexicale est déterminée au moment de l'écriture du code et reste fixe lors de l'exécution.

What is Block Scope? - Qu’est-ce que la portée du bloc ?
La portée du bloc fait référence à la portée des variables et des fonctions qui sont confinées dans un bloc de code, généralement délimitées par des accolades `{}`. 
Les variables déclarées à l'aide de « let » et « const » ont une portée de bloc, ce qui signifie qu'elles ne sont accessibles que dans le bloc dans lequel elles sont définies.

What is Closure? - Qu’est-ce que la fermeture ?
Une fermeture est une fonctionnalité de JavaScript dans laquelle une fonction interne conserve l'accès aux variables et aux paramètres de sa fonction externe même 
une fois l'exécution de la fonction externe terminée. Ce comportement permet des modèles de programmation puissants tels que le maintien de l'état dans la programmation 
fonctionnelle et la création de variables privées.

What are First-Class Functions? - les fonctions de première classe ?
Les fonctions de première classe en JavaScript sont des fonctions qui peuvent être traitées comme n'importe quelle autre valeur. Cela signifie qu'ils peuvent être 
affectés à des variables, passés comme arguments à d'autres fonctions, renvoyés par des fonctions et stockés dans des structures de données. 

What is the Difference Between Function Statement and Function Expression? - Quelle est la différence entre une instruction de fonction et une expression de fonction ?
Une instruction de fonction , également appelée déclaration de fonction, est définie à l'aide du mot-clé `function` suivi d'un nom et d'un bloc de code. Il est 
hissé, c'est-à-dire qu'il est accessible avant sa déclaration effective dans le code.
Une expression de fonction , en revanche, définit une fonction dans le cadre d'une expression, généralement en l'attribuant à une variable. Les expressions de 
fonction ne sont pas hissées comme les déclarations de fonction.

What is the Difference Between Parameter and Argument? 
Un paramètre est une variable dans une définition de fonction. Il agit comme un espace réservé pour les valeurs qui doivent être fournies lorsque la fonction 
est appelée.
Un argument est la valeur réelle transmise à une fonction lorsqu'elle est invoquée. Les arguments sont affectés aux paramètres définis dans la déclaration de fonction.

What is an Arrow Function? (fonction fléchée)
Une fonction flèche est une manière concise de définir une fonction en JavaScript introduite dans ES6. Il fournit une syntaxe plus courte par rapport aux 
expressions de fonction traditionnelles et lie lexicalement la valeur « this », ce qui le rend particulièrement utile pour écrire du code concis et lisible.

What is a Callback? 
Une fonction de rappel est une fonction qui est passée en argument à une autre fonction et qui est exécutée après l'achèvement d'une tâche spécifique ou à une 
heure déterminée. Les rappels sont couramment utilisés dans la programmation asynchrone pour gérer des tâches telles que la gestion des événements, les opérations 
d'E/S asynchrones, etc.

What are Event Listeners? - Que sont les écouteurs d’événements ?
Les écouteurs d'événements sont des fonctions en JavaScript qui écoutent des événements spécifiques qui se produisent, tels que les interactions de l'utilisateur
telles que les clics, les mouvements de la souris ou les entrées au clavier. Ils sont utilisés pour déclencher des actions ou exécuter du code en réponse à ces 
événements.

What is a Garbage Collection? - Qu’est-ce qu’une collecte des déchets ?
Le garbage collection est une technique de gestion de la mémoire utilisée dans les langages de programmation de haut niveau comme JavaScript. Il récupère 
automatiquement la mémoire occupée par les objets qui ne sont plus utilisés, libérant ainsi de la mémoire pour d'autres allocations et évitant les fuites de mémoire.

What is Blocking the Main Thread? - Qu’est-ce qui bloque le fil principal ?
Le blocage du thread principal fait référence à une situation dans laquelle des opérations synchrones de longue durée empêchent le thread d'exécution principal 
d'une application Web de répondre aux entrées de l'utilisateur ou de restituer les mises à jour. Cela peut entraîner des interfaces utilisateur insensibles et une 
dégradation des performances.

What is a Promise? - Qu'est-ce qu'une promesse ?
Une promesse est un objet représentant l’achèvement ou l’échec éventuel d’une opération asynchrone. Il permet d'écrire du code asynchrone de manière plus 
lisible et gérable, facilitant ainsi une meilleure gestion des erreurs et un meilleur flux de contrôle par rapport aux approches traditionnelles basées sur le rappel.

What are Async and Await? - Que sont Async et Await ?
Async/await est une fonctionnalité syntaxique introduite dans ES2017 (ES8) qui simplifie la programmation asynchrone en JavaScript. Le mot-clé « async » est 
utilisé pour déclarer une fonction asynchrone, et le mot-clé « wait » est utilisé pour suspendre l'exécution d'une fonction asynchrone jusqu'à ce qu'une promesse 
soit résolue ou rejetée. Cela permet d'écrire du code asynchrone qui ressemble au code synchrone, ce qui le rend plus facile à comprendre et à maintenir.

Conclusion
En résumé, la maîtrise des bases de JavaScript jette les bases de la maîtrise et de l’innovation en matière de développement Web. Comprendre des concepts tels 
que les contextes d'exécution, les fermetures et le levage permet aux développeurs de créer des applications robustes et efficaces. Adoptez donc ces principes 
fondamentaux, car ils constituent la porte d’entrée pour libérer le véritable potentiel de JavaScript.*/
