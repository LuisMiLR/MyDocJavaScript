# Promise State (état de promesse)


### Dernière mise à jour : mai 2023

## **Les trois états d'une promesse :**

1. **`pending`** : La promesse est en attente. Elle est en cours de traitement et n'est pas encore terminée.
2. **`fulfilled`** : La promesse a été accomplie avec succès.
3. **`rejected`** : La promesse a échoué. *(Nous aborderons cet état dans le prochain chapitre.)*

---

## **État `pending` et transition vers `fulfilled`**

### Exemple d'une promesse en attente :
```javascript
const wait = milliseconds => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, milliseconds);
    });
};

console.log(wait(1_000)); // Promise {<pending>}
```
- Lorsqu'une promesse est crée, elle commence dans l'état `pending`.  
- La console affiche `Promise {<pending>}` pour montrer que la promesse est en cours.

---

### Transition vers l'état `fulfilled` :
Si nous enregistrons la promesse après son achèvement :
```javascript
const result = wait(1_000);
console.log(result); // Promise {<pending>}

result.then(() => {
    console.log(result); // Promise {<fulfilled>: undefined}
});
console.log(result); // Promise {<pending>}
```

#### Déroulement :
1. **`console.log(result)` avant `then`** : La promesse est encore `pending` car le délai n'est pas écoulé.
2. **À l'intérieur de `.then()`** : Une fois que la promesse est accomplie, elle passe à l'état `fulfilled`.
3. **Dernière ligne `console.log(result)`** : Elle montre toujours `pending` car votre code JavaScript s'exécute de haut en bas. La promesse est accomplie après cette ligne.

---

## **Que permettent les promesses ?**

Les promesses :
- Commencent par l'état `pending` et passent à `fulfilled` (ou `rejected`) dans le futur.
- Permettent d'exécuter des rappels (`.then()`) uniquement lorsque la promesse est `fulfilled`.

---

### **Résumé**
- Une promesse peut être dans l'un des 3 états : `pending`, `fulfilled`, ou `rejected`.
- Toutes les promesses commencent par l'état `pending`.
- Lorsque la promesse est accomplie avec succès, elle passe à l'état `fulfilled`.
- Les promesses vous permettent de planifier un rappel pour s'exécuter une fois que la promesse a été terminée avec succès.
```