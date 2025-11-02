# Qu’est-ce qu’une Fonction ?

---

## Définition

Une **fonction** est un bloc d'instructions conçu pour effectuer une tâche spécifique et peut être exécuté (invoqué) à différents endroits dans un programme.

- **Arguments** : Valeurs passées dynamiquement à une fonction lors de son invocation.
- **Paramètres** : Noms définis pour les arguments dans la définition de la fonction (par exemple, `nombre1` et `nombre2`).

En JavaScript :
- Les fonctions sont des objets du type `Function`.
- Elles peuvent être copiées, passées par référence et utilisées comme propriétés.

---

## Définitions des Fonctions

Il existe deux façons principales de définir des fonctions :
1. **Les déclarations de fonction**.
2. **Les expressions de fonction**.

---

### Déclaration de Fonction

Une **déclaration de fonction** utilise le mot-clé `function`, suivi de :
1. Le **nom de la fonction**.
2. Des parenthèses contenant des **paramètres optionnels**.
3. Des accolades contenant le corps de la fonction.

```javascript
function additionne(nombre1, nombre2) {
  const resultat = nombre1 + nombre2;
  console.log(resultat);
}

additionne(1, 2); // 3
additionne(42, 59); // 101
```

- **Explications** :
  - `additionne` est le nom de la fonction.
  - La fonction prend deux paramètres : `nombre1` et `nombre2`.
  - Elle définit une variable `resultat` pour stocker la somme des paramètres.
  - Elle affiche ensuite `resultat` dans la console.

- **Invocation** :
  - `additionne(1, 2)` passe les arguments `1` et `2` aux paramètres et affiche `3`.
  - `additionne(42, 59)` affiche `101`.

---

### Expression de Fonction

Une **expression de fonction** assigne une fonction à une variable. Les fonctions définies de cette manière peuvent être **anonymes** (sans nom).

```javascript
const additionne = function (nombre1, nombre2) {
  const resultat = nombre1 + nombre2;
  console.log(resultat);
};
```

- **Exemple de Fonction Récursive** :
  Une expression de fonction avec un nom peut s'appeler elle-même de manière récursive.

```javascript
const factorielle = function f(n) {
  return n < 2 ? 1 : n * f(n - 1);
};
```

- **Comment ça fonctionne** :
  - La fonction `f` s'appelle elle-même jusqu'à ce que la condition `n < 2` soit remplie.

---

## Recommandation

- Préférez **les déclarations de fonction** pour une meilleure lisibilité et simplicité.
- Utilisez **les expressions de fonction** pour définir des fonctions de manière conditionnelle ou dynamique.

---

### Exemple Conditionnel

Les **déclarations de fonction** peuvent causer des problèmes liés à leur portée :

```javascript
if (x) {
  function test() {
    console.log("Salut !");
  }
} else {
  function test() {
    console.log("Bonjour !");
  }
}

test(); // Erreur : test n'est pas défini
```

Pour éviter cela, utilisez des **expressions de fonction** :

```javascript
let test;
if (x) {
  test = function () {
    console.log("Salut !");
  };
} else {
  test = function () {
    console.log("Bonjour !");
  };
}
test(); // Affiche en fonction de la condition
```


**pourquoi ?**
 
Pourquoi dans le premier cas (avec `function test() {}`)
le code **provoque une erreur de portée (scope)**, alors que dans le second cas (avec `test = function() {}`)
tout fonctionne ? 🤔

C’est une **subtilité liée à la portée des déclarations de fonction** dans les **blocs (`if`, `else`, `for`, etc.)**.


---

## 1Ce qu’il se passe dans le premier code

```javascript
if (x) {
  function test() {
    console.log("Salut !");
  }
} else {
  function test() {
    console.log("Bonjour !");
  }
}

test(); // ❌ Erreur : test n'est pas défini
```

### 🧠 En apparence

On pourrait penser :

> "Je déclare `test()` dans un `if`, donc selon la condition, j’aurai une version ou l’autre."

Mais ce n’est **pas ce qui se passe réellement**.

---

## 2️⃣ Les déclarations de fonction ne sont **pas prévues** pour être dans des blocs conditionnels

En JavaScript, une **function declaration** :

```js
function test() { ... }
```

est censée être :

* soit **globale**
* soit **déclarée dans une fonction**
* mais **pas à l’intérieur d’un `if` ou `else`**


---

## 🧠 3️⃣ Pourquoi l’erreur “test n’est pas défini”

En ES6 (le JavaScript moderne utilisé aujourd’hui) :

* Une **déclaration de fonction dans un bloc (`if`, `else`, etc.)** est **limitée à ce bloc**.
* Autrement dit, elle est **portée localement à l’intérieur des `{}`**.

### 👉 Donc ici :

```javascript
if (x) {
  function test() {
    console.log("Salut !");
  }
}
```

`test` n’existe **qu’à l’intérieur du bloc `if { ... }`**.
Dès que tu sors du `if`, elle est **hors de portée (scope)**.

Et comme tu fais :

```javascript
test(); // ici, on est dehors
```

➡️ JavaScript te dit : **ReferenceError: test is not defined**

---

## 4️⃣ Ce qui change dans la **version avec expression de fonction**

```javascript
let test;
if (x) {
  test = function () {
    console.log("Salut !");
  };
} else {
  test = function () {
    console.log("Bonjour !");
  };
}
test(); // ✅ Fonctionne
```

Ici :

* Tu **déclares `test` une seule fois** (avec `let test;`)
* Puis tu **lui assignes une valeur différente** selon la condition.

Donc :

* `test` **existe dans la portée du bloc courant** (la portée du script ici)
* et après le `if/else`, elle a bien une valeur utilisable

✅ Résultat :

```js
test(); // affiche "Salut !" ou "Bonjour !" selon x
```

---

## 🧭 5️⃣ Schéma visuel de la portée (scope)

| Étape                           | Déclaration                    | Portée de `test`         | Accessible après le `if` ? |
| ------------------------------- | ------------------------------ | ------------------------ | -------------------------- |
| Avec `function test() {}`       | Dans chaque bloc `if` / `else` | Limitée à ce bloc        | ❌ Non                      |
| Avec `let test = function() {}` | Dans la portée englobante      | Globale (dans le script) | ✅ Oui                      |

---

## 🧠 6️⃣ Comment retenir ça

> 🧩 **Les déclarations de fonction (`function test() {}`) sont hoistées et attachées à la portée du bloc où elles se trouvent.**
> ⚠️ Donc dans un `if`, elles ne sortent **pas** de ce bloc.

> ✅ **Les expressions de fonction (`let test = function() {}`)**, elles, se comportent comme des variables normales.
> Tu peux donc les déclarer, les réaffecter, et les utiliser ensuite sans problème.

---

## 🧪 7️⃣ Petit test pour visualiser :

```javascript
if (true) {
  function inside() {
    console.log("Inside block");
  }
}

console.log(typeof inside); // ❌ "undefined" (pas accessible ici)
```

Mais :

```javascript
let inside;
if (true) {
  inside = function() {
    console.log("Inside block");
  };
}

console.log(typeof inside); // ✅ "function"
```

---

## Notes sur les Paramètres

1. **Paramètres par défaut** :
   - Vous pouvez définir des valeurs par défaut pour les paramètres, ce qui les rend optionnels.

   ```javascript
   function saluer(nom = "Utilisateur") {
     console.log(`Bonjour, ${nom} !`);
   }

   saluer(); // "Bonjour, Utilisateur !"
   saluer("Sam"); // "Bonjour, Sam !"
   ```

2. **Opérateur Rest** :
   - L'opérateur `...rest` peut être utilisé pour collecter des arguments supplémentaires sous forme de tableau.

   ```javascript
   function somme(...nombres) {
     return nombres.reduce((acc, num) => acc + num, 0);
   }

   console.log(somme(1, 2, 3, 4)); // 10
   ```

3. **Valeur de retour** :
   - Une fonction sans instruction `return` explicite retourne `undefined`.

   ```javascript
   function pasDeRetour() {}
   console.log(pasDeRetour()); // undefined
   ```