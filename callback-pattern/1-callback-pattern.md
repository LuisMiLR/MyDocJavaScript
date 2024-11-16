```markdown
# **The Callback Pattern**

---

### **Dernière mise à jour : mai 2023**

--- ( ce chapitre vient avant les promises en point d'étape)

### **Introduction :**

Les **callbacks** (ou rappels) sont un modèle de programmation où une fonction est passée en tant que **paramètre** à une autre fonction. Cette fonction sera exécutée une fois que la tâche principale de la première fonction sera terminée.

---

### **Exemple de callback :**

```javascript
welcomeUser("Sam", () => {
    console.log("Done welcoming user");
});
```

- Dans cet exemple :
  - `welcomeUser` accepte deux paramètres : le **nom** de l'utilisateur et une **fonction de rappel** (callback).
  - La fonction de rappel est exécutée après que `welcomeUser` ait terminé son travail.

**Implémentation de `welcomeUser` :**

```javascript
const welcomeUser = (name, callback) => {
    setTimeout(() => {
        console.log(`Welcome ${name}`);
        callback(); // Appelle la fonction de rappel
    }, 1_000);
};
```

- **`setTimeout`** simule une tâche asynchrone qui dure 1 seconde avant d'appeler la fonction de rappel.

---

### **Pourquoi les callbacks ?**

Les **performances** sont la raison principale de l'existence des callbacks. Voici les avantages :

1. **JavaScript reste non bloquant :**
   - Le reste du code continue de s'exécuter pendant que des tâches longues (comme `setTimeout`) sont planifiées.
   - Par exemple, si une fonction prend 1 seconde pour s'exécuter, les callbacks permettent au navigateur de rester **réactif** et d'éviter les blocages.

2. **Modèle d'exécution efficace :**
   - En planifiant certaines fonctions pour le futur, JavaScript permet au navigateur de gérer des tâches importantes, comme la saisie de l'utilisateur, sans interruption.

---

### **Résumé :**

1. **Le modèle de callback** est une méthode dans laquelle une **fonction** est passée en tant que paramètre à une autre fonction.
   - Cette fonction est exécutée automatiquement après que la tâche principale est terminée.

2. **Importance des callbacks :**
   - Ils empêchent JavaScript de **bloquer** l'exécution.
   - Ils maintiennent le navigateur **réactif** aux interactions de l'utilisateur.

3. **Limitation des callbacks :**
   - Bien que pratiques, les callbacks peuvent parfois rendre le code difficile à lire, surtout lorsqu'ils sont imbriqués. Cela a conduit à l'introduction des **promesses**, qui seront explorées dans le chapitre suivant.
```