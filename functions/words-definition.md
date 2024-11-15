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