
## Introduction to promise

### Les promesses en JavaScript peuvent sembler complexes au début, mais elles deviennent plus simples une fois que vous comprenez comment elles fonctionnent. Essayons de décomposer tout cela :

---

### 1. **Qu'est-ce qu'une promesse ?**
Une **promesse** est une manière de gérer les opérations asynchrones (des tâches qui prennent du temps, comme attendre une réponse d'un serveur ou un délai). Elle agit comme un objet qui représente une tâche future.

- Une promesse peut être dans l'un de ces états :
  - **Pending (En attente)** : La promesse est en cours de traitement.
  - **Fulfilled (Résolue)** : La tâche a réussi.
  - **Rejected (Rejetée)** : La tâche a échoué.

Quand une promesse est **résolue** ou **rejetée**, un **callback** peut être exécuté en utilisant `.then()` ou `.catch()`.

---

### 2. **Exemple avec la fonction `wait`**

Voici une fonction `wait` qui crée une promesse. Elle utilise `setTimeout` pour simuler une attente avant de résoudre la promesse.

```javascript
const wait = milliseconds => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(); // La promesse est résolue après 'milliseconds'
        }, milliseconds);
    });
};
```

Quand vous appelez `wait(1000)`, cela retourne une promesse qui sera résolue après 1 seconde.

Vous pouvez utiliser `.then()` pour définir ce qui se passe après que la promesse est résolue :

```javascript
wait(1000).then(() => {
    console.log("waited 1 second"); // Ce code est exécuté après 1 seconde.
});
```

- **Pourquoi `then()` fonctionne-t-il ici ?**
  La méthode `.then()` est disponible sur un objet **Promise**. Dans cet exemple, `wait(1000)` retourne une promesse, donc vous pouvez enchaîner `.then()` dessus.

---

### 3. **Erreurs courantes**

#### **Erreur 1 : Appeler `.then()` directement sans objet Promise**
Si vous écrivez ceci :

```javascript
wait(1000); /* ❌ */
.then(() => {
    console.log("This breaks 👎");
});
```

Cela échouera parce que le point-virgule (`;`) termine l'appel à `wait(1000)`. Donc `.then()` est appelé sur **rien**. La bonne façon d'écrire serait :

```javascript
wait(1000)
    .then(() => {
        console.log("This works 👍");
    });
```

#### **Erreur 2 : Essayer d'utiliser une promesse de manière synchrone**
Une autre erreur courante est d'essayer de lire le résultat d'une promesse **avant qu'elle ne soit résolue**, par exemple :

```javascript
const result = wait(1000); // ❌ result contient une promesse, pas encore résolue
console.log(result); // Vous obtiendrez [object Promise]
```

Pour utiliser correctement le résultat, vous devez attendre que la promesse soit résolue avec `.then()` :

```javascript
wait(1000).then(() => {
    console.log("Promesse résolue !");
});
```

---

### 4. **Résumé**
1. Une fonction qui retourne une promesse permet d'utiliser `.then(callback)`.
2. Ne terminez pas l'appel à une fonction retournant une promesse par un `;` si vous voulez enchaîner `.then()`.
3. Le rappel de `.then()` sera planifié pour s'exécuter dans le futur, après la résolution de la promesse. 
4. Les promesses sont une partie essentielle de nombreuses API modernes comme `fetch()` ou `getUserMedia()`, ce qui en fait un concept clé à maîtriser.


---

### 5. **Conseils pratiques**
- Les promesses rendent le code asynchrone plus lisible que les anciens **callbacks imbriqués**.
- Vous pouvez enchaîner plusieurs `.then()` si plusieurs étapes sont nécessaires.
- Pour gérer les erreurs, utilisez `.catch()` :

```javascript
wait(1000)
    .then(() => {
        throw new Error("Test d'erreur !");
    })
    .catch(error => {
        console.error("Erreur attrapée :", error.message);
    });
```

### Concepts liés
- **API Web utilisant des promesses** :
  - `fetch` (à venir dans un chapitre ultérieur)
  - `getUserMedia` (accès caméra/audio)

