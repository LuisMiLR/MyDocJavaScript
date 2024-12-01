# Instance variable recap

### Dernière mise à jour : mai 2021

---

Les **méthodes d'instance** sont des fonctions définies au sein d'une classe et peuvent être appelées sur ses instances. Voici une exploration de leur fonctionnement et de leur utilité.

---

## **Définir une méthode d'instance**

### Exemple de définition d'une méthode d'instance :

```javascript
// Définition de la classe
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

// Utilisation de la classe
const person = new Person('Sam', 'Green');
console.log(person.getFullName()); // "Sam Green"
```

### Points clés :

- `getFullName()` est une méthode d'instance.
- Elle est définie dans la classe et appelée sur une instance (`person`).
- Vous **ne pouvez pas** appeler `Person.getFullName()` directement car il ne s'agit pas d'une méthode statique (voir chapitre suivant).

---

## **Accéder aux variables d'instance**

### [ rejoint de suite le point 4 pour tout savoir des variables ](../2-class-instance-methods/4-variable.md.md)

Pour accéder aux variables d'instance dans une méthode, vous devez utiliser le mot-clé `this`. Les variables capturées dans le constructeur deviennent accessibles dans toutes les méthodes d'instance de la classe.

### Exemple correct :

```javascript
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
```

### Exemple incorrect :

Le code suivant **ne fonctionne pas** car `firstName` et `lastName` ne sont pas définis :

```javascript
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName() {
    return `${firstName} ${lastName}`; // ❌ Ne fonctionne pas
  }
}
```

**Pourquoi ?**

- `firstName` et `lastName` doivent être précédés par `this` pour indiquer qu'il s'agit de variables d'instance.

---

## **Le rôle du mot-clé `this`**

- `this` fait référence à **l'instance actuelle** de la classe.
- Il permet d'accéder aux variables et méthodes propres à cette instance.

### Exemple explicatif :

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

const person = new Person('Alice', 25);
person.introduce(); // "Hi, my name is Alice and I am 25 years old."
```

---

## **Résumé**

- Une **méthode d'instance** est une fonction qui peut être appelée sur une instance spécifique d'une classe.
- Les variables d'instance capturées dans le constructeur doivent être préfixées par `this` pour être accessibles dans les méthodes.
- À l'intérieur d'une méthode d'instance, `this` fait référence à l'instance actuelle.

---

## **Exercice pratique**

### Définir une classe `Course` avec une méthode d'instance :

```javascript
// Définition de la classe
class Course {
  constructor(name, isCompleted) {
    this.name = name;
    this.isCompleted = isCompleted;
  }

  getDescription() {
    if (this.isCompleted) {
      return `You have completed the ${this.name} course.`;
    } else {
      return `You are currently studying the ${this.name} course.`;
    }
  }
}

// Utilisation de la classe
const course1 = new Course('Learn JavaScript', false);
console.log(course1.getDescription()); // "You are currently studying the Learn JavaScript course."

const course2 = new Course('Learn Programming', true);
console.log(course2.getDescription()); // "You have completed the Learn Programming course."
```
