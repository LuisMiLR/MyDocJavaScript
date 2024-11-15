# Immutable object operations

### Opérations sur les objets immuables

Le même concept abordé dans la dernière leçon s’applique aux objets. Nous devons créer une copie de l'objet au lieu de modifier l'original. Pour ce faire, vous pouvez également utiliser l'opérateur de propagation `...` pour cloner un objet.

```javascript
const user = {
  id: 1,
  age: 23,
};
const cloned = { ...user };
console.log(cloned); // {id: 1, age: 23} (nouvel objet, indépendant de 'user')
```

### Immutable update

Pour mettre à jour un objet de manière immuable, vous devez en faire une copie puis ajouter la nouvelle paire `key: value` qui remplacera la précédente.

```javascript
const users = {
  id: 1,
  age: 23,
};
const clonedUser = {
  ...user,
  age: user.age + 1,
};
console.log(clonedUser); // {id: 1, age: 24} (nouvel objet, indépendant de 'user')
console.log(users); // {id: 1, age: 23} (non modifié)
```

Remarquez comment `age: user.age + 1` remplace la valeur précédente de la propriété `age`.

### Immutable deletion

Bien que moins utilisé, voici comment supprimer de manière immuable une propriété d’un objet. Cela combine la déstructuration d'objet et l'opérateur de propagation `...`.

```javascript
const book = {
  id: 1,
  title: "Harry Potter",
  year: 2017,
  rating: 4.5,
};

// Suppression immuable
const { year, ...rest } = book;
console.log(rest); // { id: 1, title: "Harry Potter", rating: 4.5}
console.log(book); // {id: 1, title: "Harry Potter", year: 2017, rating: 4.5} (non modifié)
```

La raison pour laquelle cela fonctionne est que `{year, ...rest} = book` permet de déstructurer la clé `year` de l'objet `book`. Le reste des propriétés est regroupé dans un nouvel objet appelé `rest`, créant ainsi une copie immuable de `book` sans la propriété `year`.

### Résumé

- Vous pouvez créer une copie d'un objet en utilisant l'opérateur de propagation `...` : `{...originalObject}`
- Vous pouvez mettre à jour une propriété existante : `{...originalObject, property: 'newValue'}`
```

