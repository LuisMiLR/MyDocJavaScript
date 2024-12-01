# les variables d'une classe

### Dernière mise à jour : dec 2024


---

## **Variable**

Les **variables d'une classe** et les **propriétés d'une classe** sont souvent confondues, mais elles ont des rôles différents. En réalité, le terme "variable d'une classe" est souvent utilisé pour parler de **propriétés** ou de **variables statiques** selon le contexte.

Voici une distinction claire :

---

### 1. **Propriétés d'une classe (instance variables)**

- Les **propriétés** sont des variables qui appartiennent à une instance spécifique de la classe.
- Elles sont définies dans la classe et initialisées généralement dans le constructeur ou directement lors de leur déclaration.
- Elles ne sont accessibles qu'à travers une instance de la classe (`this`).

**Exemple :**

```typescript
class Car {
  model: string; // Propriété (variable d'instance)
  year: number;

  constructor(model: string, year: number) {
    this.model = model;
    this.year = year;
  }

  getCarInfo(): string {
    return `${this.model}, ${this.year}`;
  }
}

// Chaque instance a ses propres propriétés
const car1 = new Car("Toyota", 2020);
const car2 = new Car("Honda", 2018);

console.log(car1.getCarInfo()); // Toyota, 2020
console.log(car2.getCarInfo()); // Honda, 2018
```

Ici, `model` et `year` sont des **propriétés d'instance**, car elles appartiennent à chaque objet créé à partir de la classe `Car`.

---

### 2. **Variables statiques (static variables)**

- Les **variables statiques** appartiennent à la classe elle-même et non aux instances.
- Elles sont partagées par toutes les instances de la classe.
- On les déclare avec le mot-clé `static` et on y accède avec le nom de la classe, et non avec `this`.

**Exemple :**

```typescript
class Counter {
  static count: number = 0; // Variable statique

  increment() {
    Counter.count++; // Accès via le nom de la classe
  }

  static getCount() {
    return Counter.count;
  }
}

// Toutes les instances partagent la même variable statique
const counter1 = new Counter();
const counter2 = new Counter();

counter1.increment();
counter2.increment();

console.log(Counter.getCount()); // 2
```

Ici, `count` est une **variable statique**, et toutes les instances de la classe `Counter` partagent cette même variable.

---

### Différences principales entre propriétés (d'instance) et variables statiques

| **Caractéristique**        | **Propriétés d'instance**                     | **Variables statiques**                     |
|-----------------------------|-----------------------------------------------|---------------------------------------------|
| **Appartenance**            | Appartient à chaque instance                 | Appartient à la classe elle-même            |
| **Accès**                   | Via `this`                                   | Via le nom de la classe                     |
| **Stockage**                | Chaque instance a sa propre copie            | Partagée entre toutes les instances         |
| **Exemple** (accès direct)  | `this.name`                                  | `ClassName.staticVariable`                  |

---

### 3. **Variables locales dans une méthode**

Ce sont des variables définies à l’intérieur des méthodes de la classe. Elles ne sont pas accessibles en dehors de cette méthode, et leur portée est limitée à celle-ci.

**Exemple :**

```typescript
class Calculator {
  add(a: number, b: number): number {
    let result = a + b; // Variable locale à la méthode `add`
    return result;
  }
}

const calc = new Calculator();
console.log(calc.add(3, 4)); // 7
// console.log(result); // Erreur : `result` n'est pas défini en dehors de `add`
```

Ici, `result` est une **variable locale** : elle n’est visible que dans la méthode `add`.

---

### Résumé

1. **Propriétés d'instance** :
   - Variables propres à chaque instance.
   - Utilisées pour stocker des données spécifiques à un objet.

2. **Variables statiques** :
   - Variables appartenant à la classe et partagées par toutes les instances.
   - Utilisées pour des données globales ou des constantes liées à la classe.

3. **Variables locales** :
   - Variables définies dans une méthode.
   - Leur portée est limitée à cette méthode.

### Exemple combiné :

```typescript
class Example {
  static staticVar: number = 42; // Variable statique
  instanceVar: string; // Propriété d'instance

  constructor(instanceVar: string) {
    this.instanceVar = instanceVar;
  }

  printVars(): void {
    let localVar = "I am local"; // Variable locale
    console.log(`Static: ${Example.staticVar}, Instance: ${this.instanceVar}, Local: ${localVar}`);
  }
}

const ex = new Example("Instance Value");
ex.printVars();
// Static: 42, Instance: Instance Value, Local: I am local
```