# Arrow Functions and Their Differences from Traditional Functions

---

## **1. Syntax**

### Simpler Syntax
Les **fonctions fléchées** utilisent une syntaxe concise, ce qui les rend idéales pour être utilisées comme arguments de **fonctions de rappel (callbacks)**.

### Comparaison

```javascript
// Traditional function
function add(a, b) {
  return a + b;
}

// Arrow function
const add2 = (a, b) => a + b;
```

---

### Functions as Expressions
Les **fonctions fléchées** sont toujours anonymes. Elles sont affectées à des variables pour être utilisées. Voici une équivalence avec une fonction classique :

```javascript
// Traditional function expression
const add3 = function (a, b) {
  return a + b;
};

// Arrow function expression
const add4 = (a, b) => a + b;
```

**Key Difference: Hoisting**
- Les fonctions classiques sont **hoisted** (elles peuvent être appelées avant leur déclaration).
- Les fonctions fléchées assignées à des constantes ne peuvent pas être appelées avant leur déclaration.

---

### Return Implicite
Les **fonctions fléchées** permettent un **return implicite** si la fonction ne contient qu'une seule expression :

```javascript
// With return keyword
const add = (a, b) => {
  return a + b;
};

// Implicit return
const addShort = (a, b) => a + b;
```

### Single Parameter
Si une fonction fléchée a un seul paramètre, les parenthèses autour de ce paramètre sont facultatives :

```javascript
const greet = name => `Hello, ${name}!`;
```

---

### Functions as Callbacks
Les fonctions fléchées sont particulièrement utiles comme **callbacks** dans des **fonctions d'ordre supérieur**.

```javascript
// Arrow function
numbers.forEach((el) => console.log(el));

// Equivalent with a traditional function
numbers.forEach(function (el) {
  console.log(el);
});
```

---

## **2. The `this` Keyword**

### Key Differences
1. **Traditional Functions**
   - Créent leur propre contexte `this` basé sur l'objet appelant.
   - Si elles ne sont pas appelées par un objet, `this` pointe vers l'objet global (`window` en navigateur).

2. **Arrow Functions**
   - **N'ont pas de propre contexte `this`**. Elles héritent du contexte lexical environnant.

---

### Example

```javascript
const person = {
  age: 30,
  getAge: function () {
    const arrowInsideClassic = () => this.age;
    return arrowInsideClassic();
  },
};

console.log(person.getAge()); // 30
```

Dans cet exemple, la fonction fléchée **hérite du contexte `this` de la fonction classique**.

---

## **3. The `arguments` Object**

### Differences in Behavior
1. **Traditional Functions**
   - Ont accès à l'objet `arguments`, qui contient tous les paramètres passés.

```javascript
function sum() {
  console.log(arguments); // Object-like array of passed arguments
}

sum(1, 2, 3); // Outputs: [1, 2, 3]
```

2. **Arrow Functions**
   - **Ne créent pas d'objet `arguments`**. Une erreur sera levée si vous essayez de l'utiliser.

```javascript
const sumArrow = () => {
  console.log(arguments); // ReferenceError: arguments is not defined
};
```

---

## **Summary**

### **Traditional Functions**
1. Créent leur propre contexte `this`.
   - Si appelées depuis un objet : `this` pointe vers cet objet.
   - Sinon, `this` pointe vers l'objet global (`window`).
2. Ont accès à l'objet `arguments`.

### **Arrow Functions**
1. **Inhérent le contexte lexical** (`this`) de l'environnement parent.
2. Ne créent pas d'objet `arguments`.

---

### **Key Recap**

| Fonction           | Contexte `this`         | `arguments` Support |
|--------------------|-------------------------|---------------------|
| **Traditionnelle** | Créé dynamiquement      | Oui                 |
| **Fléchée**        | Hérité lexicalement     | Non                 |