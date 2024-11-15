```markdown
# Programmation Orientée Objet (POO)

### Dernière mise à jour : février 2022

---

La **programmation orientée objet (POO)** permet de modéliser le monde réel en utilisant des classes et des objets. Une classe agit comme un modèle permettant de créer des objets partageant des caractéristiques et des comportements communs.

---

## **Exemple de classe avec des méthodes d'instance**

```javascript
class User {
  constructor(firstName, lastName, prefix, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.prefix = prefix;
    this.age = age;
  }

  getFullName() {
    return `${this.prefix}. ${this.firstName} ${this.lastName}`;
  }

  canVote() {
    return this.age >= 18;
  }
}

// Utilisation de la classe
const user1 = new User("Sam", "Doe", "Mrs", 20);
console.log(user1.getFullName()); // "Mrs. Sam Doe"
console.log(user1.canVote()); // true

const user2 = new User("Alex", "Green", "Mr", 17);
console.log(user2.getFullName()); // "Mr. Alex Green"
console.log(user2.canVote()); // false
```

### Points clés :
- `User` est une classe définissant les propriétés (`firstName`, `lastName`, etc.) et les comportements (`getFullName`, `canVote`) d'un utilisateur.
- Chaque utilisateur est une **instance unique** de la classe `User`.
- Les méthodes d'instance sont appelées sur des objets créés à partir de la classe (comme `user1` ou `user2`).

---

## **Comparaison avec une approche procédurale**

### Exemple sans classe :
```javascript
const getFullName = (firstName, lastName, prefix) => {
  return `${prefix}. ${firstName} ${lastName}`;
};

const canVote = (age) => {
  return age >= 18;
};

// Utilisation
console.log(getFullName("Sam", "Doe", "Mrs")); // "Mrs. Sam Doe"
console.log(canVote(20)); // true
console.log(getFullName("Alex", "Green", "Mr")); // "Mr. Alex Green"
console.log(canVote(17)); // false
```

### Différences :
- Dans l'approche procédurale, les données (`firstName`, `lastName`, etc.) et les comportements (`getFullName`, `canVote`) sont séparés.
- En POO, ces éléments sont regroupés dans des objets, ce qui améliore **l'organisation du code**, la **réutilisabilité**, et facilite la modélisation de concepts complexes.

---

## **Appeler une méthode d'instance à partir d'une autre**

Une méthode d'instance peut accéder aux variables d'instance ainsi qu'à d'autres méthodes de la classe en utilisant `this`.

### Exemple :
```javascript
class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  getGreeting() {
    const fullName = this.getFullName(); // Appelle une autre méthode d'instance
    return `Hello ${fullName}`;
  }
}

// Utilisation de la classe
const user = new User("Sam", "Green");
console.log(user.getGreeting()); // "Hello Sam Green"
```

---

## **Résumé du chapitre**

- **Méthodes d'instance :** Fonctions appelées sur une instance d'une classe.
- **Utilisation des variables d'instance :** Les variables capturées dans le constructeur (`constructor`) peuvent être utilisées dans les méthodes avec `this`.
- **Appel de méthode :** Une méthode d'instance peut en appeler une autre en utilisant `this.functionName()`.
- **POO :** Permet de modéliser le monde réel avec des classes et des objets.

```javascript
class User {
  constructor(firstName, lastName, prefix, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.prefix = prefix;
    this.age = age;
  }

  getFullName() {
    return `${this.prefix}. ${this.firstName} ${this.lastName}`;
  }

  canVote() {
    return this.age >= 18;
  }
}

// Exemple d'usage
const user1 = new User("Sam", "Doe", "Mrs", 20);
console.log(user1.getFullName()); // "Mrs. Sam Doe"
console.log(user1.canVote()); // true
```
```