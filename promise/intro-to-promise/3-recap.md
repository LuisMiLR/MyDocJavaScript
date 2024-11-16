# Introduction aux promesses

### Dernière mise à jour : mai 2023

## Métaphore : La promesse comme une commande au restaurant
Une promesse peut être comparée à passer une commande dans un restaurant :
- Vous recevez un **ticket** (objet Promise) indiquant que votre commande est en cours de traitement.
- La commande peut être :
  - **Livrée avec succès** : Résolue.
  - **Annulée** : Rejetée.
- Vous pouvez associer des actions à ces résultats avec `.then()` et `.catch()`.

Nous approfondirons ces états (résolus/rejetés) dans le prochain chapitre.

---

## **Récapitulatif du chapitre**

1. **Clarté des promesses** :
   - Les promesses sont plus faciles à lire et à comprendre que les rappels imbriqués.
   - Les résultats réussis sont gérés avec `.then()` et les erreurs avec `.catch()`.

2. **Exécution différée** :
   - `.then(callback)` planifie le rappel pour un moment futur lorsque la promesse est réalisée avec succès.

3. **Ordre d'exécution** :
   - Le code JavaScript s'exécute toujours de haut en bas.
   - Certaines parties du code, comme les rappels `.then()`, sont mises en file d'attente pour l'avenir.

4. **Utilisation de `.then()`** :
   - `.then(callback)` doit être **enchaîné directement** au résultat d'une fonction retournant une promesse.
   - **Attention** : Ne pas ajouter de point-virgule (`;`) entre l'appel de la fonction et le `.then()`.

---

Exemple :
```javascript
const wait = milliseconds => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, milliseconds);
    });
};

wait(1_000).then(() => {
    console.log("Attendu 1 seconde.");
});
```

**À retenir :**
- `.then()` s'exécute uniquement après la résolution de la promesse.
- Les promesses permettent de rendre le code plus lisible et organisé.
```