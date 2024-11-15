### Deep copy

En JavaScript, une **deep copy** (copie profonde) crée une nouvelle structure indépendante des objets imbriqués, contrairement à une **shallow copy** (copie superficielle) qui copie uniquement les références des objets imbriqués.

Voici quelques méthodes pour réaliser une deep copy en JavaScript :

### 1. Utiliser `JSON.stringify()` et `JSON.parse()`

Cette méthode simple convertit l'objet en chaîne JSON, puis le reconvertit en objet. Cependant, elle a quelques limitations : elle ne fonctionne pas bien avec les fonctions, `undefined`, et les objets complexes comme les dates ou les objets DOM.

```js
const original = { a: 1, b: { c: 2 } };
const deepCopy = JSON.parse(JSON.stringify(original));

console.log(deepCopy); // { a: 1, b: { c: 2 } }
```

### Limitations :
- Les fonctions ne sont pas copiées.
- Les valeurs `undefined` ne sont pas préservées.
- Les objets comme les dates ou les maps sont convertis en chaînes JSON, perdant ainsi leurs propriétés originales.

### 2. Utiliser `structuredClone()` (recommandé)

L'API `structuredClone()` est une méthode native moderne qui réalise une deep copy en tenant compte des objets complexes tels que les dates, les `Map`, les `Set`, et même des structures récursives. 

```js
const original = { a: 1, b: { c: 2 }, d: new Date() };
const deepCopy = structuredClone(original);

console.log(deepCopy); // Copie profonde de l'objet, incluant la date
```

### 3. Utiliser une librairie comme `Lodash`

Si vous préférez une solution plus robuste qui gère tous les types de données complexes (par exemple, fonctions, objets DOM, etc.), vous pouvez utiliser une librairie externe comme **Lodash** :

```bash
npm install lodash
```

Ensuite, vous pouvez utiliser la fonction `cloneDeep` de Lodash :

```js
const _ = require('lodash');

const original = { a: 1, b: { c: 2 } };
const deepCopy = _.cloneDeep(original);

console.log(deepCopy); // { a: 1, b: { c: 2 } }
```

### 4. Copier récursivement avec une fonction

Si vous ne souhaitez pas utiliser de bibliothèque externe et que vous avez besoin d'une solution personnalisée, vous pouvez implémenter une fonction de copie profonde récursive :

```js
function deepCopy(obj) {
  if (obj === null || typeof obj !== 'object') {
    return obj; // Retourner la valeur primitive ou null
  }

  // Gérer les tableaux
  if (Array.isArray(obj)) {
    return obj.map(item => deepCopy(item));
  }

  // Gérer les objets
  const copy = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      copy[key] = deepCopy(obj[key]);
    }
  }
  return copy;
}

const original = { a: 1, b: { c: 2 } };
const deepCopyObj = deepCopy(original);

console.log(deepCopyObj); // { a: 1, b: { c: 2 } }
```

### Conclusion

- **`JSON.stringify()` et `JSON.parse()`** : simple mais avec des limitations.
- **`structuredClone()`** : une méthode native, plus fiable et moderne.
- **Lodash (`cloneDeep`)** : idéal si vous voulez une solution prête à l'emploi avec toutes les fonctionnalités.
- **Fonction récursive** : une solution manuelle pour plus de contrôle.