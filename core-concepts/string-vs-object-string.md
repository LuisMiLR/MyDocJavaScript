# Les différences entre les objets `String` et le type primitif pour les chaînes de caractères

En JavaScript, il existe **deux façons** de représenter du texte :

1️⃣ **Les chaînes primitives** (`string primitives`)
2️⃣ **Les objets `String`**

Elles se ressemblent beaucoup mais ne sont pas tout à fait identiques. Voici une explication claire et progressive 

---

## 1. Les chaînes primitives

* Ce sont des **valeurs de type primitif** (`string`).
* Elles sont **immuables** : tu ne peux pas modifier le contenu d’une chaîne primitive, seulement créer une nouvelle valeur.

```js
const texte = "Bonjour";
console.log(typeof texte); // "string"
```

---

## 2. Les objets `String`

* Ce sont des **objets** construits via le constructeur `String`.
* Ils encapsulent une valeur primitive et possèdent des **propriétés** et **méthodes** héritées de `String.prototype`.

```js
const objetString = new String("Bonjour");
console.log(typeof objetString); // "object"
```

➡️ Ici, `objetString` est un **objet**, pas une valeur primitive.

---

## 3. Les comportements en commun

JavaScript est « permissif » :
si tu appelles une méthode (`.toUpperCase()`, `.slice()`, etc.) sur une chaîne primitive, JS crée **temporairement** un objet `String` en coulisse (**boxing**) pour exécuter la méthode, puis le détruit.

```js
const mot = "hello";
console.log(mot.toUpperCase()); // "HELLO"
```

Même si `mot` est une primitive, la méthode fonctionne grâce à ce mécanisme.

---

## 4. Les différences clés

| Aspect                      | Chaîne primitive       | Objet `String`                                                                              |
| --------------------------- | ---------------------- | ------------------------------------------------------------------------------------------- |
| **Création**                | `"texte"` ou `'texte'` | `new String("texte")`                                                                       |
| **Type (`typeof`)**         | `"string"`             | `"object"`                                                                                  |
| **Mutabilité**              | Immuable               | L’objet est mutable (on peut changer ses propriétés), mais la valeur interne reste immuable |
| **Comparaison (`===`)**     | Compare le contenu     | Compare la **référence** de l’objet                                                         |
| **Utilisation recommandée** | ✅                      | ⚠️ (rare)                                                                                   |

**Exemple :**

```js
const prim = "test";
const obj = new String("test");

console.log(prim === obj); // false
console.log(prim == obj);  // true (conversion implicite)
```

* `===` retourne `false` car les types diffèrent.
* `==` force la conversion, donc `true`. (rappel le == compare juste la valeur si le type est différence il y a conversion implicite du type, le === compare le type et la valeur)

---

## 5. Bonnes pratiques

* Utilise **toujours les chaînes primitives**, sauf si tu as une raison particulière d’instancier un objet `String` (cas très rare).
* Les objets `String` compliquent souvent les comparaisons et peuvent générer des bugs subtils.

✅ **À retenir** :

* `"texte"` → valeur primitive (préférée)
* `new String("texte")` → objet enveloppant, rarement nécessaire.

---

## 6. Immutabilité des chaînes primitives

Les **chaînes de caractères primitives** en JavaScript sont **immuables**.

### 🔍 Qu’est-ce que ça veut dire « immuable » ?

Une valeur immuable est un élément que tu **ne peux pas modifier en place**. Si tu essaies de « changer » un caractère dans une chaîne, JavaScript ne modifie pas l’original : il crée une nouvelle chaîne.

### 🧪 Exemple concret

```js
let mot = "bonjour";

// Essai de changer la première lettre
mot[0] = "B";

console.log(mot); // "bonjour" ← rien n’a changé
```

La tentative d’écrire dans `mot[0]` est ignorée, car le contenu d’une chaîne primitive ne peut pas être altéré.

### ✂️ Manipulations = création d’une nouvelle chaîne

Toutes les méthodes (`slice`, `replace`, `toUpperCase`, etc.) **retournent une nouvelle chaîne** au lieu de modifier l’originale.

```js
let original = "hello";
let maj = original.toUpperCase();

console.log(original); // "hello"
console.log(maj);      // "HELLO"
```

➡️ `original` reste inchangée.

📌 **À retenir** :

* Les valeurs primitives de type `string` sont immuables.
* Les « changements » (remplacement, découpage, mise en majuscules…) produisent **une nouvelle valeur**.
* Si tu veux conserver le résultat, tu dois l’assigner à une variable.

---

## 7. Simplicité et cohérence

* Les primitives (`string`, `number`, `boolean`, `null`, `undefined`, `bigint`, `symbol`) partagent toutes cette propriété : elles sont **immuables**.
* Cela rend le langage **cohérent** : tu sais que si tu passes une primitive à une fonction, elle ne pourra pas la modifier.

Exemple :

```js
let phrase = "Bonjour";
phrase = phrase + " tout le monde !";
console.log(phrase); // "Bonjour tout le monde !"
```

---

📌 **Résumé final**

* Les chaînes primitives sont des valeurs simples, immuables, rapides à comparer et à stocker.
* Les objets `String` sont des enveloppes qui offrent des propriétés/méthodes mais qu’on utilise rarement directement.
* JavaScript emploie le **boxing** pour permettre d’appeler des méthodes sur les primitives sans les transformer définitivement en objets.
