```markdown
# Super Keyword

### Dernière mise à jour : avril 2024

---

## **Introduction au mot-clé `super`**

Lorsqu'une classe hérite d'une autre, le mot-clé `super` est utilisé pour appeler le constructeur ou les méthodes de la classe parent. Cela permet de réutiliser et d'étendre les fonctionnalités définies dans la classe parent.

---

## **Appeler le constructeur parent**

Dans l'exemple suivant, la classe `Manager` hérite de `Employee`, mais ajoute une nouvelle propriété `department`. Pour initialiser les propriétés de la classe parent (`firstName` et `lastName`), nous utilisons `super()` :

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
  constructor(firstName, lastName, department) {
    super(firstName, lastName); // Appelle le constructeur de la classe parent
    this.department = department; // Initialisation spécifique à Manager
  }

  sendPerformanceReview() {
    console.log(
      `Sent performance review for current quarter in ${this.department}`
    );
  }
}
```

### **Utilisation :**

```javascript
const manager = new Manager("Sam", "Blue", "Marketing");
console.log(manager.department); // "Marketing"
console.log(manager.getFullName()); // "Sam Blue"
console.log(manager.getInitials()); // "SB"
manager.sendPerformanceReview(); // Logs: Sent performance review for current quarter in Marketing
```

---

## **Appeler les méthodes de la classe parent**

Le mot-clé `super` peut également être utilisé pour appeler des **méthodes** de la classe parent à l'intérieur des méthodes de la classe enfant. Par exemple, pour étendre `getFullName` :

```javascript
class Manager extends Employee {
  constructor(firstName, lastName, department) {
    super(firstName, lastName);
    this.department = department;
  }

  getFullName() {
    return super.getFullName() + " [manager]";
  }

  sendPerformanceReview() {
    console.log(
      `Sent performance review for current quarter in ${this.department}`
    );
  }
}
```

### **Utilisation :**

```javascript
const manager = new Manager("Alex", "Green", "Sales");
console.log(manager.getFullName()); // "Alex Green [manager]"
```

---

## **Règles importantes**

1. **Appeler `super()` dans le constructeur :**
   - Si vous définissez un constructeur dans une classe enfant, vous devez appeler `super()` avant d'accéder à `this`. Omettre cet appel entraîne une erreur.

2. **Appeler des méthodes parent :**
   - Utilisez `super.methodName()` pour appeler une méthode spécifique de la classe parent.

---

## **Résumé**

- Le mot-clé `super` :
  - **Dans un constructeur :** Utilisé pour appeler le constructeur parent.
  - **Dans une méthode :** Permet d'appeler les méthodes de la classe parent.
- **Règle essentielle :** Si un constructeur est défini dans la classe enfant, `super()` doit être appelé avant d'accéder aux variables d'instance.
- L’héritage avec `super` permet de réduire la duplication de code tout en facilitant la personnalisation.

Exemple de workflow d'héritage et utilisation de `super` dans des projets complexes seront abordés dans les chapitres suivants.
```