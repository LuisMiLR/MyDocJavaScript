# Reading Dynamic Property (lecture de propriété dynamique)

_Last updated: February 2024_

Dans le premier chapitre sur les Objets, nous avons vu que nous pouvions utiliser la **notation par points** pour lire une propriété sur un objet.

```js
const user = {
    id: 1,
    name: "Sam Green"
};

user.id; // 1
````

---

## 🔹 Propriété stockée dans une variable

Que se passe-t-il si le nom de la propriété que vous souhaitez lire est stocké dans une variable ?

```js
const key = "id"; // le nom de la propriété à laquelle nous voulons accéder

// ❌ cela ne fonctionne PAS
user.key; // undefined
```

Ici, `user.key` cherche une propriété **nommée "key"**, ce qui n’existe pas dans l’objet.

---

## ✅ Accès dynamique avec les crochets `[]`

Pour lire une propriété dont le nom est dynamique, vous devez utiliser la syntaxe avec crochets :

```js
const user = {
    id: 1,
    name: "Sam Green",
    age: 20
};

const key = "id";
user[key]; // 1
```

Cette syntaxe fonctionne car :

* `key` contient `"id"`
* `user[key]` devient `user["id"]`
* ce qui renvoie `1`

---

## ✅ Exemple fonctionnel : fonction dynamique

```js
const getValue = (user, keyToRead) => {
    return user[keyToRead];
};

// Exemple d'utilisation
getValue({id: 2, name: "Sam"}, "name"); // "Sam"
getValue({id: 2, name: "Sam"}, "id"); // 2
```

Cette fonction est **dynamique** : elle accepte n’importe quelle clé et renvoie la valeur correspondante.

---

# Object.keys()

La méthode `Object.keys(obj)` renvoie un **tableau contenant toutes les clés** d'un objet.

```js
const user = {
    id: 1,
    name: "Sam Green",
    age: 20
};

const keys = Object.keys(user);
console.log(keys); // ["id", "name", "age"]
```

👉 `Object` (avec un O majuscule) est une variable **globale JavaScript** contenant des méthodes utiles pour les objets.
`Object.keys()` accepte n’importe quel objet en paramètre.

---

## 🧪 Mise en pratique

Puisque `Object.keys()` renvoie un tableau, vous pouvez parcourir chaque clé et obtenir sa valeur dynamiquement :

```js
const settings = {
    theme: "Dark",
    version: "2.4.1",
    beta: false
};

const keys = Object.keys(settings);
console.log(keys); // ["theme", "version", "beta"]

keys.forEach(key => {
    console.log(settings[key]);
});
```

Résultat :

```
"Dark"
"2.4.1"
false
```

---

# ✅ Bilan

* ❌ La notation par points ne fonctionne pas avec une propriété dynamique
* ✅ Utiliser la syntaxe `object[key]`
* `object[key]` évalue d’abord `key`, puis lit la propriété correspondante
* `Object.keys(obj)` renvoie un tableau contenant toutes les clés de l'objet

