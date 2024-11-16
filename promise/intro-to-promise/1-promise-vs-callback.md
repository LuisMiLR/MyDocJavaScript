# Promises vs Callbacks

### Dernière mise à jour : mai 2023

Nous avons vu dans le chapitre précédent que le modèle de **rappel (callback)** peut rapidement devenir difficile à lire et à gérer. 

C’est pourquoi les **promesses** ont été introduites. Examinons leurs avantages avec des exemples.

---

## Exemple : Avant/Après

### Avant (avec les rappels)
```javascript
const temperatures = [10, 5, 3];

sumTemperatures(temperatures, value => {
    console.log(value); // 18 (la somme des températures)
});
```

### Après (avec les promesses)
```javascript
const temperatures = [10, 5, 3];

sumTemperatures(temperatures).then(value => {
    console.log(value); // 18 (la somme des températures)
});
```

### Différence principale
- Avec une promesse, nous utilisons `.then(callback)` pour indiquer ce qui doit se passer après la résolution de la tâche asynchrone.
- Cela rend le code **plus lisible** et montre clairement l'ordre d'exécution.

---

## Gestion des erreurs : Avant/Après

### Avant (avec les rappels)
```javascript
sumTemperatures(temperatures, value => {
    console.log(value); // 18 (la somme des températures)
}, reason => {
    console.error(reason); // gestion des erreurs
});
```

### Après (avec les promesses)
```javascript
sumTemperatures(temperatures)
    .then(value => {
        console.log(value); // 18 (la somme des températures)
    })
    .catch(reason => {
        console.error(reason); // gestion des erreurs
    });
```

### Avantage des promesses
- La distinction entre **succès** (`.then()`) et **échec** (`.catch()`) est claire.
- Les rappels (`.then()` et `.catch()`) sont planifiés de manière explicite pour le futur, rendant le code plus intuitif et facile à suivre.

---

## **Ordre d'exécution**

Votre code JavaScript s'exécute toujours **de haut en bas**, mais certaines parties (comme les promesses) peuvent être **mises en file d'attente pour plus tard**.

Exemple :
```javascript
console.log("A");
wait(1_000).then(() => {
    console.log("B");
});
console.log("C");
```

### Résultat :
```
A
C
B // 1 seconde plus tard
```

### Pourquoi ?
- La ligne `wait(1_000).then(...)` met le rappel `.then()` en file d'attente pour s'exécuter **1 seconde plus tard**.
- Pendant ce temps, le reste du code continue à s’exécuter immédiatement.

---

## **Résumé**

- Les **promesses** sont **plus propres** que les rappels car elles séparent clairement :
  - Les succès : `.then()`
  - Les erreurs : `.catch()`
- Les rappels `.then(callback)` sont planifiés pour le futur, exécutés uniquement lorsque la tâche asynchrone est terminée avec succès.
- JavaScript exécute toujours son code **de haut en bas**, mais certaines parties peuvent être différées pour s’exécuter ultérieurement.

### Prochaines étapes
- Dans les prochains chapitres, nous explorerons davantage `.then()` et son rôle dans les promesses.
- Nous apprendrons également à créer nos propres promesses !
```