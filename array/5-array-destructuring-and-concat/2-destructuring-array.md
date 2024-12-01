# Destructuring array  (Décomposition d'un array)


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