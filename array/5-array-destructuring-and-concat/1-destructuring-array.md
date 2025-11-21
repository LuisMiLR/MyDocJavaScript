# Destructuring array  (Décomposition d'un array)

Voici une **version propre, claire et prête à copier dans ta documentation JavaScript**, structurée en Markdown comme tu l’aimes dans *MyDocJavaScript*.

---

# 📘 Déstructuration de tableau (Array Destructuring)

### *Last updated: February 2023*

La **déstructuration de tableau** est une fonctionnalité moderne de JavaScript.
On parle de **sucre syntaxique** (*syntactic sugar*) : cela ne change pas le fonctionnement du langage, mais rend le code **plus lisible** et **plus concis**.

---

## 🔹 Exemple sans déstructuration

Supposons que l’on stocke la `width` et la `height` d’un élément dans un tableau :

```js
const dimensions = [20, 5];

// create variables
const width = dimensions[0];
const height = dimensions[1];

console.log(width);  // 20
console.log(height); // 5
```

Ici, on accède manuellement aux index du tableau (0 et 1).

---

## 🔹 Exemple avec déstructuration

```js
const dimensions = [20, 5];

// create variables
const [width, height] = dimensions;

console.log(width);  // 20
console.log(height); // 5
```

👉 Les deux lignes suivantes :

```js
const width = dimensions[0];
const height = dimensions[1];
```

sont remplacées par **une seule ligne** :

```js
const [width, height] = dimensions;
```

---

## 🔍 Comment ça fonctionne ?

* La position dans les crochets **correspond à l’index du tableau** :

  * `width` prend l’élément à l’index **0**
  * `height` prend l’élément à l’index **1**
* L’ordre est donc **très important**.
* On reconnaît la déstructuration grâce aux **crochets à gauche** du `=`.

---

## 🧩 Exemple dans React (hooks)

Si tu utilises React, tu as sûrement déjà vu :

```jsx
const [counter, setCounter] = useState(0);
```

➡️ C’est **exactement** une déstructuration de tableau.

`useState()` retourne un tableau de 2 éléments :

1. La valeur actuelle
2. La fonction qui permet de mettre à jour cette valeur

On les déstructure immédiatement :

* `counter` ← premier élément
* `setCounter` ← second élément

---

## ✅ Bilan

* La déstructuration est du **sucre syntaxique** : elle simplifie l’écriture.
* **L’ordre est fondamental** : chaque variable correspond à l’index équivalent.
* On identifie la déstructuration grâce aux **crochets `[]` placés avant le `=`**.

---

Voici des exemples de **destructuring** 

tous d'abord avec le tableau `animals` :

```javascript
const animals = ["cat", "dog", "mouse", "lion"];

// Destructuring du tableau
const [first, second, third, fourth] = animals;

console.log(first);  // "cat"
console.log(second); // "dog"
console.log(third);  // "mouse"
console.log(fourth); // "lion"
```

### Autres exemples de destructuring :

1. **Ignorer certains éléments :**
   ```javascript
   const [first, , third] = animals;

   console.log(first);  // "cat"
   console.log(third);  // "mouse"
   ```

2. **Utiliser le reste des éléments avec le rest operator (`...`) :**
   ```javascript
   const [first, ...rest] = animals;

   console.log(first); // "cat"
   console.log(rest);  // ["dog", "mouse", "lion"]
   ```

3. **Valeurs par défaut :**
   Si un élément n'existe pas dans le tableau, une valeur par défaut peut être utilisée :
   ```javascript
   const [first, second, third, fourth, fifth = "elephant"] = animals;

   console.log(fifth); // "elephant"
   ```

Le destructuring est pratique pour extraire des valeurs directement depuis les tableaux ou objets, simplifiant ainsi le code.