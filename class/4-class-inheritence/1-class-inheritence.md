```markdown
# Class Inheritance (Héritage de classe)

### Dernière mise à jour : mars 2023

---

## **Introduction à l'héritage**
Un principe clé en programmation est **DRY** (*Don't Repeat Yourself*). Lorsqu'on travaille avec des classes, on peut remarquer que certaines sont très similaires, avec des méthodes identiques ou presque. L'héritage permet de réduire cette duplication.

---

## **Exemple sans héritage**
Prenons les classes suivantes, représentant un **employé** et un **responsable** :

```javascript
class Employee {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  getInitials() {
    return this.firstName[0] + this.lastName[0];
  }
}

class Manager {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  getInitials() {
    return this.firstName[0] + this.lastName[0];
  }

  sendPerformanceReview() {
    console.log(`Sent performance review for current quarter`);
  }
}
```

**Observation :**  
Les deux classes partagent des méthodes communes : `constructor`, `getFullName`, et `getInitials`. Cependant, la classe `Manager` possède une méthode supplémentaire : `sendPerformanceReview`.

---

## **Exemple avec héritage**
L'héritage permet de factoriser le code en faisant en sorte que la classe `Manager` hérite de `Employee` :

```javascript
class Employee {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  getInitials() {
    return this.firstName[0] + this.lastName[0];
  }
}

class Manager extends Employee {
  sendPerformanceReview() {
    console.log(`Sent performance review for current quarter`);
  }
}
```

### **Utilisation :**
```javascript
const manager = new Manager("Sam", "Green");
console.log(manager.getFullName()); // "Sam Green"
console.log(manager.getInitials()); // "SG"
manager.sendPerformanceReview(); // logs "Sent performance review for current quarter"
```

---

## **Surcharge de méthodes**
Vous pouvez personnaliser les méthodes héritées en les **remplaçant** dans la classe enfant. Par exemple, si nous voulons ajouter "(manager)" au nom complet dans `getFullName` :

```javascript
class Manager extends Employee {
  getFullName() {
    return `${this.firstName} ${this.lastName} (manager)`;
  }

  sendPerformanceReview() {
    console.log(`Sent performance review for current quarter`);
  }
}
```

### **Résultat :**
```javascript
const manager = new Manager("Sam", "Green");
console.log(manager.getFullName()); // "Sam Green (manager)"
console.log(manager.getInitials()); // "SG"
```

---

## **Résumé**
1. **Principe DRY :** L'héritage aide à éviter la duplication de code.
2. **Syntaxe d'héritage :** 
   ```javascript
   class Child extends Parent
   ```
3. **Avantages de l'héritage :**
   - La classe enfant hérite automatiquement de toutes les méthodes de la classe parent.
   - Possibilité de personnaliser ou de surcharger les méthodes héritées.
4. **Exemple clé :**
   - Une classe parent `Employee` avec des méthodes communes.
   - Une classe enfant `Manager` qui hérite de `Employee` et ajoute ou personnalise des méthodes.

Dans les prochaines leçons, nous explorerons des exemples avancés d'héritage en JavaScript.
```