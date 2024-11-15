# **Private Class Fields**

---

### **Dernière mise à jour : août 2022**

Les **champs de classe privés** permettent de restreindre l'accès aux propriétés et méthodes d'une classe uniquement à l'intérieur de celle-ci. Ils offrent une solution robuste pour protéger les données sensibles ou les méthodes d'assistance.

---

## **Simuler des variables privées avec une convention**

Avant l'introduction des champs privés, les développeurs utilisaient une **convention** en préfixant les variables avec un underscore (`_`) pour indiquer qu'elles étaient censées être privées :

```javascript
class User {
    constructor() {
        this._votingAge = 18; // meant as private
    }
}

const user = new User();
console.log(user._votingAge); // 18 (Accessible from outside, but shouldn't be!)
```

Cependant, cette convention n'empêche pas réellement l'accès depuis l'extérieur.

---

## **Variables d'instance privées**

Avec les **champs privés**, vous pouvez marquer une variable comme inaccessible depuis l'extérieur de la classe en la préfixant avec un `#` :

```javascript
class User {
    #votingAge = 18;
}
```

### **Caractéristiques :**

1. **Inaccessibilité extérieure :**
   - Les variables marquées `#` ne peuvent pas être lues ou modifiées depuis l'extérieur de la classe.
   - On y accède uniquement via `this.#variable` à l'intérieur de la classe.

2. **Déclaration obligatoire :**
   - Les champs privés doivent être définis en dehors du constructeur avant d'être utilisés.
   - **Exemple incorrect :**
     ```javascript
     class User {
         constructor() {
             this.#votingAge = 18; // ❌ Error
         }
     }
     ```
   - **Exemple correct :**
     ```javascript
     class User {
         #votingAge;
         
         constructor() {
             this.#votingAge = 18; // ✅ Works
         }
     }
     ```

---

## **Exemple avec un getter et un setter**

Les getters et setters permettent de lire ou de modifier des champs privés tout en contrôlant les valeurs acceptées.

```javascript
class User {
    #votingAge = 18;

    get votingAge() {
        return this.#votingAge;
    }

    set votingAge(age) {
        if (age >= 18) {
            this.#votingAge = age;
        }
    }
}

// Usage
const user = new User();
console.log(user.votingAge); // 18
user.votingAge = 10; // Not updated because age < 18
console.log(user.votingAge); // 18
user.votingAge = 20; // Updated
console.log(user.votingAge); // 20
```

### **Avantages :**
- **Protection des données** : Le setter empêche les valeurs invalides (âge < 18 dans cet exemple).
- **Lecture sécurisée** : Le getter fournit un accès en lecture sans exposer directement la variable.

---

## **Méthodes d'instance privées**

Les **méthodes privées** sont utilisées pour des opérations internes et ne peuvent être appelées qu'à l'intérieur de la classe.

```javascript
class User {
    constructor(age) {
        this.age = age;
        this.#logAge();
    }

    #logAge() {
        console.log(this.age);
    }
}

const user = new User(20);
// user.#logAge() // ❌ Error: Private method
```

- La méthode `#logAge()` est accessible uniquement dans la classe via `this.#logAge()`.
- Elle ne peut pas être appelée directement depuis une instance.

---

## **Résumé**

1. **Champs privés :**
   - Préfixés avec `#`.
   - Inaccessibles depuis l'extérieur de la classe.

2. **Utilisation :**
   - **Protéger les données sensibles** avec des getters et setters.
   - **Limiter l'accès** aux méthodes d'assistance.

3. **Bénéfices :**
   - Améliore l'encapsulation des données.
   - Réduit les erreurs en empêchant les modifications accidentelles.

---

### **Pour plus d'informations :** [Private Class Fields sur MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields)
```