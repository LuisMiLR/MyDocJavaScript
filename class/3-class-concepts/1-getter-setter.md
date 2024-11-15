# Getters et Setters

### Dernière mise à jour : mars 2023

Les getters et setters dans une classe permettent de **valider** ou **modifier** des valeurs avant qu'elles ne soient définies comme propriétés de la classe. Cela permet également d'améliorer la **fiabilité des données**.

---

## **Setter**

Un setter est une méthode spéciale qui est appelée automatiquement lorsqu'une valeur est assignée à une propriété. Il est utilisé pour **valider** ou **convertir** la valeur avant de la stocker.

### Exemple : Validation d'un âge
```javascript
class User {
  set age(value) {
    console.log("age setter");
    this._age = Number.parseInt(value, 10);
  }
}

// Utilisation de la classe
const user = new User();
user.age = "18"; // Appelle set age(value)
console.log(user); // {_age: 18}
```

### Explications :
1. Lors de `user.age = "18"`, le setter `set age(value)` est appelé automatiquement.
2. La valeur `"18"` (chaîne) est convertie en nombre grâce à `Number.parseInt`.
3. La valeur est stockée dans une variable interne `_age` (préfixée par `_` pour indiquer qu'elle est interne).

> **Attention :** Utiliser `this.age` à l'intérieur du setter entraînerait une boucle infinie.

---

## **Getter**

Un getter est une méthode spéciale utilisée pour **récupérer** la valeur d'une propriété. Il permet de **formater** ou **modifier** les données avant de les renvoyer.

### Exemple : Récupération de l'âge
```javascript
class User {
  get age() {
    console.log("age getter");
    return this._age;
  }

  set age(value) {
    console.log("age setter");
    this._age = Number.parseInt(value, 10);
  }
}

// Utilisation de la classe
const user = new User();
user.age = "20"; // Appelle set age(value)
console.log(user.age); // Appelle get age(), retourne 20
```

### Explications :
- Lors de l'accès à `user.age`, le getter `get age()` est appelé.
- Le getter renvoie la valeur de `_age`.

---

## **Combinaison Getter et Setter avec le Constructeur**

Vous pouvez utiliser des getters et setters tout en capturant des paramètres dans le constructeur.

### Exemple :
```javascript
class User {
  constructor(age) {
    this.age = age; // Appelle set age(value)
  }

  get age() {
    console.log("age getter");
    return this._age;
  }

  set age(value) {
    console.log("age setter");
    this._age = Number.parseInt(value, 10);
  }
}

// Utilisation de la classe
const user = new User("30");
console.log(user.age); // 30 (nombre)
user.age = "31";
console.log(user.age); // 31 (nombre)
```

### Points clés :
- Le constructeur utilise le setter pour initialiser l'âge.
- Le getter est utilisé pour récupérer et afficher l'âge.

---

## **Avantages des Getters et Setters**

1. **Validation** : Assurez-vous que les données sont dans le bon format avant de les stocker.
2. **Modification** : Permet de formater ou de transformer les données lors de leur lecture ou écriture.
3. **Fiabilité** : Évite les erreurs en centralisant les validations au moment de l'accès ou de l'affectation.

---

## **Résumé**

- **Setter (`set`)** : Permet de valider ou modifier les valeurs avant qu'elles ne soient affectées.  
  Exemple : `user.age = "18"` appelle automatiquement `set age(value)`.

- **Getter (`get`)** : Permet de lire ou formater des valeurs avant qu'elles ne soient renvoyées.  
  Exemple : `console.log(user.age)` appelle automatiquement `get age()`.

- **Précautions :**
  - Utilisez une variable interne (comme `_age`) pour éviter les boucles infinies.
  - Les setters et getters peuvent être combinés avec des constructeurs pour initialiser les propriétés.

> Les getters et setters rendent le code plus robuste en centralisant la validation et le formatage des données.
```