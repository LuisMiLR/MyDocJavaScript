# Récapitulatif du chapitre : Les méthodes d'instance

### Dernière mise à jour : mai 2021

Dans ce chapitre, nous avons appris à regrouper les fonctionnalités communes au sein de classes en définissant des **méthodes d'instance**. Une méthode d'instance est une fonction qui peut être appelée sur une instance spécifique d'une classe.

---

## **Définir une méthode d'instance**

### Exemple :
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

const person = new Person("Sam", "Green");
console.log(person.getFullName()); // "Sam Green"
```

Dans cet exemple :
- `getFullName()` est une **méthode d'instance**.  
- Elle utilise les **variables d'instance** `this.firstName` et `this.lastName` capturées dans le constructeur.

---

## **Appeler une méthode d'instance**

Les méthodes d'instance doivent être appelées sur une **instance** de la classe. Par exemple, vous ne pouvez pas appeler `Person.getFullName()` directement, car cette méthode n'est pas statique. Pour l'appeler, il faut une instance, comme dans `person.getFullName()`.

---

## **Accéder aux variables d'instance**

### Correct :
Pour accéder aux variables d'instance dans une méthode, vous devez utiliser le mot-clé `this` :

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

### Incorrect :
Le code suivant ne fonctionne pas, car il manque `this` avant `firstName` et `lastName` :

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

---

## **Rôle du mot-clé `this`**

- `this` fait référence à l'**instance actuelle** de la classe.
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

const person = new Person("Alice", 25);
person.introduce(); // "Hi, my name is Alice and I am 25 years old."
```

Ici, `this.name` et `this.age` font référence aux propriétés de l'instance `person`.

---

## **Résumé**

- Une **méthode d'instance** est une fonction appelée sur une instance spécifique d'une classe.
- Les **variables d'instance** doivent être préfixées par `this` pour être utilisées dans une méthode.
- `this` fait référence à l'instance actuelle de la classe, permettant d'accéder aux propriétés et méthodes de cette instance.

Les méthodes d'instance sont essentielles pour créer des classes robustes et réutilisables dans vos projets.
