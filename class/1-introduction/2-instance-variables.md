```markdown
# Instance Variables

### Dernière mise à jour : mai 2021

Dans cette leçon, nous explorons comment définir vos propres variables d'instance dans une classe. Les variables d'instance permettent de capturer des données spécifiques à chaque instance d'une classe.

---

## **Définir une classe**

Pour définir une classe, utilisez le mot-clé `class` suivi du nom de la classe. La convention pour les noms de classes est **UpperCamelCase** (aussi appelé PascalCase). Voici quelques exemples :

- Une classe représentant une recette : `Recipe`
- Une classe représentant une recette rapide : `QuickRecipe`
- Une classe représentant un résultat annuel : `YearlyResult`

```javascript
class QuickRecipe {
  // Code de la classe ici
}
```

---

## **Constructeur**

Une classe peut contenir une méthode spéciale appelée `constructor()`, utilisée pour initialiser les propriétés d'une instance.

Lorsque vous créez une nouvelle instance avec le mot-clé `new`, la méthode `constructor()` est automatiquement appelée.

```javascript
class Person {
  constructor() {
    console.log("I was automatically called");
  }
}

const person = new Person(); // Affiche : "I was automatically called"
```

Si le constructeur attend des paramètres, vous pouvez les transmettre lors de l'instanciation :

```javascript
class Person {
  constructor(firstName, lastName) {
    console.log(`${firstName} ${lastName}`);
  }
}

const person = new Person("Sam", "Green"); // Affiche : "Sam Green"
```

---

## **Capturer les paramètres du constructeur**

Les paramètres passés au constructeur (comme `firstName` et `lastName`) ne sont accessibles que dans la méthode `constructor()`. Pour les rendre disponibles dans d'autres méthodes, vous devez les capturer comme **variables d'instance** à l'aide du mot-clé `this`.

```javascript
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName; // Capture dans une variable d'instance
    this.lastName = lastName;   // Capture dans une variable d'instance
  }
}

const person = new Person("Sam", "Green");
```

Ces variables peuvent maintenant être utilisées dans n'importe quelle méthode d'instance.

---

## **Variables d'instance**

### **Qu'est-ce qu'une variable d'instance ?**
- Une **variable d'instance** appartient à une **instance spécifique** d'une classe.
- Chaque instance d'une classe a ses propres variables d'instance, qui peuvent contenir des valeurs différentes.

### Exemple :
```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const person1 = new Person("Alice", 25);
const person2 = new Person("Bob", 30);

console.log(person1.name); // "Alice"
console.log(person2.name); // "Bob"
```

Ici, `name` et `age` sont des variables d'instance, spécifiques à chaque objet `person1` et `person2`.

### **Variables d'instance sans paramètres**
Même si le constructeur ne prend pas de paramètres, vous pouvez définir des valeurs par défaut pour les variables d'instance :

```javascript
class Person {
  constructor() {
    this.name = "John"; // Valeur par défaut
    this.age = 30;      // Valeur par défaut
  }
}

const person = new Person();
console.log(person.name); // "John"
console.log(person.age);  // 30
```

---

## **Résumé**

- **Nom des classes :** Utilisez **UpperCamelCase**.
- **Constructeur :** Initialisez les propriétés des instances.
- **Variables d'instance :** 
  - Capturent les données passées au constructeur.
  - Sont spécifiques à chaque instance.
  - Peuvent être définies avec ou sans paramètres.
- **Instance unique :** Chaque objet créé avec une classe est une instance unique ayant ses propres données.

Exemple récapitulatif :

```javascript
class Person {
  constructor(name, age) {
    this.name = name; // Variable d'instance
    this.age = age;   // Variable d'instance
  }
}

const person1 = new Person("Alice", 25);
const person2 = new Person("Bob", 30);

console.log(person1.name); // "Alice"
console.log(person2.age);  // 30
console.log(person1 === person2); // false
```
```