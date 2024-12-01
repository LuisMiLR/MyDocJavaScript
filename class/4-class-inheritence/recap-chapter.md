# **Chapter Recap**

### **Résumé des concepts d'héritage et du mot-clé `super`**

---

## **Concepts clés :**

1. **DRY (Don't Repeat Yourself) :**
   - Un principe fondamental en programmation qui encourage à éviter la duplication de code.

2. **Syntaxe d'héritage :**
   - En JavaScript, l'héritage entre classes s'effectue avec la syntaxe :
     ```javascript
     class Child extends Parent
     ```

3. **Comportement des classes enfants :**
   - Une classe "enfant" hérite automatiquement de toutes les méthodes définies dans la classe "parent".

4. **Utilisation du mot-clé `super` :**
   - Permet d'appeler des fonctions ou le constructeur de la classe parent.
   - Exemple pour appeler le constructeur parent :
     ```javascript
     class Manager extends Employee {
       constructor(firstName, lastName, department) {
         super(firstName, lastName); // Appelle le constructeur parent
         this.department = department; // Initialise les propriétés spécifiques à Manager
       }
     }
     ```

5. **Règles pour `super` dans le constructeur :**
   - Lorsque vous redéfinissez un `constructor()` dans une classe enfant :
     - **Vous devez appeler `super()` en premier** avant d'accéder aux variables ou méthodes d'instance.
     - Oublier cet appel entraînera une erreur.

6. **Appeler les méthodes parent avec `super` :**
   - Vous pouvez utiliser le mot-clé `super` pour invoquer une méthode parent spécifique :
     ```javascript
     class Manager extends Employee {
       getFullName() {
         return super.getFullName() + " [manager]";
       }
     }
     ```

---

## **À venir :**
Dans le prochain chapitre, nous examinerons **l'héritage prototypique**, qui est la base de l'héritage en JavaScript. Cela nous permettra de mieux comprendre le fonctionnement interne de l'héritage et les mécanismes des prototypes.
```