/* 
//*************** error handling try and catch (gestion des erreurs try et catch)

La gestion des erreurs est une partie cruciale du développement de logiciels robustes et fiables en JavaScript. 
Voici quelques conseils pour gérer les erreurs de manière appropriée dans votre code :

### 1. Utiliser des blocs try-catch :
- Encadrez les blocs de code potentiellement sujets à des erreurs dans des blocs try-catch pour intercepter et gérer les exceptions qui pourraient survenir.
- Placez le code susceptible de générer une exception dans le bloc `try`, et gérez l'exception dans le bloc `catch`.

### 2. Propager les erreurs :
- Si une fonction ne peut pas gérer une erreur, elle devrait la propager vers son appelant en utilisant `throw`.
- Cela permet à la partie de code supérieure de traiter l'erreur de manière appropriée.

### 3. Utiliser les blocs finally :
- Utilisez les blocs `finally` pour exécuter du code qui doit être exécuté quelle que soit la situation, qu'une exception soit levée ou non.
- Les blocs `finally` sont utiles pour la gestion des ressources, comme la fermeture de fichiers ou de connexions réseau.

### 4. Utiliser les objets Error personnalisés :
- Pour des scénarios spécifiques, vous pouvez créer des objets d'erreur personnalisés en étendant la classe `Error`.
- Cela vous permet de fournir des informations supplémentaires sur l'erreur et d'adapter le comportement de gestion des erreurs en conséquence.

### 5. Gérer les rejets de promesses :
- Si votre code utilise des promesses, assurez-vous de gérer les erreurs en attachant des gestionnaires de rejet (`.catch()`) aux chaînes de promesses.
- Cela vous permet de capturer et de traiter les erreurs survenues lors de l'exécution de tâches asynchrones.

### Exemple :


function diviser(a, b) {
  try {
    if (b === 0) {
      throw new Error("Division par zéro !");
    }
    return a / b;
  } catch (error) {
    console.error("Une erreur est survenue :", error.message);
    // Traitez l'erreur de manière appropriée, par exemple en renvoyant une valeur par défaut ou en propageant l'erreur.
    return NaN; // Renvoie NaN en cas d'erreur de division
  } finally {
    // Exécuté que l'exception soit levée ou non
    console.log("Opération de division terminée.");
  }
}

console.log(diviser(10, 2)); // Affiche: 5
console.log(diviser(10, 0)); // Affiche: Une erreur est survenue : Division par zéro !, Opération de division terminée., NaN


En appliquant ces bonnes pratiques, vous pouvez rendre votre code plus robuste et plus résilient aux erreurs, ce qui améliore l'expérience utilisateur et simplifie le processus de débogage. */
