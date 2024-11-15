# Callback Pattern

---

## Qu'est-ce qu'un Callback ?

Un **callback** est une fonction passée en tant qu'argument à une autre fonction, exécutée ultérieurement après l'accomplissement d'une tâche. Ils sont particulièrement utiles pour gérer les opérations **asynchrones**, comme :

- Les requêtes réseau
- Les lectures/écritures de fichiers
- Les interactions utilisateur ou événements

---

## Exemple de Callback avec une Fonction Asynchrone

Voici un exemple simple illustrant le concept de **callback** avec une simulation de requête API :

```javascript
// Simulation d'une fonction asynchrone avec un callback
function fetchDataFromAPI(callback) {
  setTimeout(() => {
    const data = { message: "Data received from API" };
    callback(data); // Appel du callback avec les données obtenues
  }, 1000);
}

// Définition du callback
function handleData(data) {
  console.log(data.message);
}

// Utilisation de la fonction avec le callback
fetchDataFromAPI(handleData);
```

Dans cet exemple :

1. **`fetchDataFromAPI`** :
   - Simule une opération asynchrone avec `setTimeout`.
   - Accepte un **callback** comme argument.
2. **`handleData`** :
   - Est appelée après la réception des données pour les afficher.

---

## Utilisation d'une Fonction Fléchée comme Callback

Au lieu de définir une fonction séparément, vous pouvez utiliser une **fonction fléchée** directement dans l'appel :

```javascript
fetchDataFromAPI((data) => {
  console.log(data.message);
});
```

Cette approche est concise et souvent privilégiée pour les **callbacks simples**, car elle réduit la verbosité.

---

## Comparaison des Approches

### Avec une Fonction Nommée
- Avantages :
  - Meilleure lisibilité pour des **callbacks complexes**.
  - Permet de **réutiliser** la logique dans plusieurs contextes.

```javascript
function handleData(data) {
  console.log(data.message);
}
fetchDataFromAPI(handleData);
```

### Avec une Fonction Fléchée
- Avantages :
  - **Concision**, particulièrement utile pour les **callbacks simples**.
  - Pas besoin de déclarer la fonction séparément.

```javascript
fetchDataFromAPI((data) => {
  console.log(data.message);
});
```

---

## Gestion des "Callback Hell"

Une utilisation excessive des **callbacks imbriqués** peut rendre le code difficile à lire et à maintenir, un phénomène connu sous le nom de **"callback hell"** :

```javascript
fetchDataFromAPI((data) => {
  console.log(data.message);
  fetchAnotherAPI(data.id, (response) => {
    console.log(response);
    fetchThirdAPI(response.key, (result) => {
      console.log(result);
    });
  });
});
```

### Solutions Modernes

Pour résoudre ces problèmes, JavaScript propose :
- **Promesses** : Simplifient la gestion des opérations asynchrones.
- **Async/Await** : Fournissent une syntaxe claire et lisible pour gérer les promesses.

---

## Résumé

- Un **callback est une fonction passée en paramètre** à une autre fonction pour être exécutée ultérieurement.
Il peut être utilisé dans des opérations synchrones (exécutées immédiatement) et asynchrones (exécutées après un délai ou un événement).
Les opérations asynchrones sont les cas les plus courants d'utilisation des callbacks, mais ce n'est pas leur seul usage.
- Les **fonctions fléchées** rendent les **callbacks** plus concis et lisibles.
- Les **callbacks imbriqués** peuvent causer des problèmes de lisibilité (**callback hell**).
- Les alternatives modernes incluent **promesses** et **async/await** pour un code plus propre.