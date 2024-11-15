# **Public Class Fields**

---

### **Dernière mise à jour : mai 2024**

Dans ce chapitre, nous explorons les **champs de classe publics** ainsi que leurs avantages par rapport à la déclaration traditionnelle des variables d'instance dans un constructeur.

---

## **Déclaration traditionnelle avec un constructeur**

La méthode classique pour définir des **variables d'instance** consiste à les déclarer dans le constructeur de la classe :

```javascript
class User {
    constructor() {
        this.votingAge = 18;
    }
}
```

---

## **Nouvelle syntaxe des champs de classe publics**

Avec la nouvelle syntaxe, vous pouvez déclarer des **variables d'instance** directement dans la classe, sans avoir besoin d'un constructeur :

```javascript
class User {
    votingAge = 18;
}
```

- **Avantage :** Simplifie la déclaration des variables d'instance, surtout lorsque le constructeur n'est utilisé que pour initialiser ces variables.

---

## **Combinaison avec un constructeur**

Si vous avez toujours besoin d'un constructeur pour d'autres opérations, vous pouvez combiner la nouvelle syntaxe avec un constructeur :

```javascript
class User {
    votingAge = 18;

    constructor() {
        console.log("Do something else here...");
    }
}
```

---

## **Héritage simplifié avec des champs publics**

Un des principaux avantages de cette syntaxe est sa capacité à simplifier les classes qui héritent d'autres classes.

### **Avec un constructeur traditionnel :**

Lorsque vous héritez d'une classe et que vous devez ajouter de nouvelles variables d'instance, vous devez **surcharger le constructeur** et appeler explicitement `super()` pour invoquer le constructeur de la classe parente :

```javascript
class User {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

class Admin extends User {
    constructor(firstName, lastName) {
        super(firstName, lastName); // Appelle le constructeur de User
        this.permissions = "admin";
    }
}
```

### **Avec les champs de classe publics :**

Avec la nouvelle syntaxe, vous pouvez éviter de surcharger le constructeur si ce n'est pas nécessaire :

```javascript
class Admin extends User {
    permissions = "admin";
}
```

- **Avantage :** La déclaration `this.permissions` est maintenant plus concise.
- Le constructeur est hérité de la classe parent (`User`), et les variables d'instance supplémentaires peuvent être définies directement dans la sous-classe (`Admin`).

---

## **Résumé**

1. **Public class fields** permettent de déclarer des variables d'instance directement dans une classe sans nécessiter un constructeur.
2. Ils simplifient l'écriture des classes, particulièrement lors de l'héritage, en évitant de surcharger le constructeur si ce n'est pas nécessaire.
3. La syntaxe améliore la lisibilité et réduit le risque d'erreurs liées à l'appel de `super()`.

---

### **Pour plus d'informations :** [Public class fields sur MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Public_class_fields)
```