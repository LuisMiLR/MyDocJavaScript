# **Private Class Fields**

---

### **Dernière mise à jour : août 2022**

---

### **Résumé du chapitre :**

1. **Champs de classe publics :**
   - Permettent de définir des **variables d'instance** directement dans une classe sans devoir remplacer le constructeur.
   - Simplifient la déclaration et l'initialisation des propriétés.

   **Exemple :**
   ```javascript
   class User {
       votingAge = 18; // Public class field
   }
   ```

2. **Champs de classe privés :**
   - **Inaccessibles** depuis l'extérieur de la classe.
   - Définis à l'aide du préfixe `#`.
   - Protègent les données sensibles ou les méthodes d'assistance en limitant leur accès.

   **Exemple :**
   ```javascript
   class User {
       #votingAge = 18; // Private class field

       get votingAge() {
           return this.#votingAge;
       }

       set votingAge(age) {
           if (age >= 18) {
               this.#votingAge = age;
           }
       }
   }
   ```

   > **Avantages :**
   - Renforce l'**encapsulation** et la sécurité des données.
   - Réduit les risques d'erreurs en restreignant l'accès aux champs privés.

---

### **Prochain chapitre :**
Nous allons explorer un concept fondamental de JavaScript : les **Promises**. Pour bien comprendre les Promises, nous commencerons par introduire le concept de **callback asynchrone**.
```