# Static Methods and Method Chaining

### Dernière mise à jour : février 2022

Dans ce chapitre, nous abordons les **méthodes statiques** et le **chaînage de méthodes**, deux concepts fondamentaux pour structurer et simplifier votre code.

---

## **Méthodes statiques**

### Définition
Les méthodes statiques sont des méthodes qui sont appelées directement sur la classe, et non sur ses instances.

### Exemple : Méthode statique
```javascript
class Config {
  static getYear() {
    const date = new Date();
    return date.getFullYear();
  }
}

// Appel direct sur la classe
console.log(Config.getYear()); // Exemple : 2025
```

Dans cet exemple, `getYear()` est une méthode statique qui renvoie l'année actuelle. Elle est appelée sur la classe `Config` et non sur une instance de cette classe.

---

## **Méthode d'instance vs méthode statique**

### Exemple : Méthode d'instance
```javascript
class Person {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} dit bonjour !`);
  }
}

// Utilisation
const person = new Person("Alice");
person.speak(); // Affiche : "Alice dit bonjour !"
```

### Exemple : Méthode statique
```javascript
class Person {
  static countPeople() {
    console.log("Il y a un nombre total de personnes.");
  }
}

// Utilisation
Person.countPeople(); // Affiche : "Il y a un nombre total de personnes."
```

---

## **Quand utiliser des méthodes statiques ?**

Posez-vous les questions suivantes :
1. **Le résultat de la méthode est-il identique pour toutes les instances ?**
   - Si oui, elle devrait être déclarée `static`.

2. **La méthode n'accède-t-elle à aucune variable d'instance ?**
   - Si oui, elle devrait être `static`.

> **Attention :** Les méthodes statiques ne peuvent pas accéder à `this` ou aux variables d'instance.

---

## **Chaînage de méthodes**

### Définition
Le **chaînage de méthodes** permet d'appeler plusieurs méthodes en séquence sur le même objet. Chaque méthode renvoie `this`, ce qui permet d'enchaîner les appels.

### Exemple : Chaînage de méthodes
```javascript
class Course {
  constructor(name, isCompleted) {
    this.name = name;
    this.isCompleted = isCompleted;
  }

  markAsCompleted() {
    this.isCompleted = true;
    return this; // Permet le chaînage
  }

  setGrade(grade) {
    this.grade = grade;
    return this; // Permet le chaînage
  }

  requestCertificate() {
    this.askedForCertificate = true;
    return this; // Permet le chaînage
  }
}

// Utilisation
const course = new Course("Learn JavaScript", false);
course
  .markAsCompleted()
  .setGrade(18)
  .requestCertificate();
```

Dans cet exemple, les trois méthodes `markAsCompleted`, `setGrade` et `requestCertificate` renvoient `this`, permettant d'enchaîner les appels.

---

## **Résumé**

- Les **méthodes statiques** :
  - Sont appelées directement sur la classe.
  - Ne peuvent pas accéder aux variables ou méthodes d'instance.
  - Conviennent aux cas où la logique est indépendante des données spécifiques à une instance.

- Le **chaînage de méthodes** :
  - Permet d'appeler plusieurs méthodes successivement sur le même objet.
  - Requiert que chaque méthode renvoie `this`.

Ces concepts facilitent une écriture plus concise, modulaire et maintenable dans vos classes.
```