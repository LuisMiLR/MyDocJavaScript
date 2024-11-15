# Optional Chaining

Nous savons, d'après un chapitre précédent, que si une propriété d'objet renvoie `undefined`, nous devons éviter d'accéder à d'autres propriétés (ou d'appeler des méthodes dessus) pour éviter des erreurs. C'est pourquoi vous voyez souvent du code qui ressemble à ceci :

```javascript
// assuming object `user`

let name = undefined;
if (user.details && user.details.name && user.details.name.firstName) {
  name = user.details.name.firstName;
}
```

Nous ne pouvons pas simplement écrire `let name = user.details.name.firstName` si nous soupçonnons que `user.details` pourrait être `null` ou `undefined`. De même pour `user.details.name`. C'est pourquoi nous utilisons une condition `if` et vérifions, étape par étape, que chaque propriété renvoie une valeur.

## Optional Chaining

L'opérateur `?.`, qui fait partie du chaînage optionnel, nous permet de refactoriser tout le code ci-dessus en une seule ligne :

```javascript
// assuming object `user`

const name = user.details?.name?.firstName;
```

L'opérateur `?.` permet d'accéder aux propriétés d'objets sans déclencher d'erreur si une partie de la chaîne est `null` ou `undefined`.

### Explication

- `user.details?.name?.firstName`: Le **chaînage optionnel** est utilisé ici pour vérifier si `user.details` et `user.details.name` existent avant d'accéder à `firstName`. Si l'une de ces propriétés est `null` ou `undefined`, JavaScript renverra `undefined` au lieu de provoquer une erreur.

### Exemples d'utilisation :

```javascript
const user = {
  details: {
    name: {
      firstName: "Sam",
    },
  },
  data: null,
};

user.details?.name?.firstName; // "Sam"
user.data?.id; // undefined
user.children?.names; // undefined
user.details?.parent?.firstName; // undefined

exemple
const user = {
  name: "Luis",
  address: {
    city: "Paris",
  },
};

// Utilisation du chaînage optionnel
console.log(user.address?.city); // "Paris"
console.log(user.address?.zipcode); // undefined, pas d'erreur même si zipcode n'existe pas
```

## Mises en garde

Le **Optional Chaining** a des cas particuliers dont il faut être conscient. Il est important de noter que vous **ne pouvez pas** utiliser le chaînage optionnel sur un objet qui n'existe pas. L'objet doit **exister**. Le chaînage optionnel est utilisé uniquement pour accéder à une propriété qui **peut** exister ou non.

Cela signifie que lorsque vous accédez à `user.details?.name`, vous devez vous assurer qu'il existe bien une variable `user`. Sinon, vous obtiendrez une erreur. Par exemple, si vous n'êtes pas certain que `user` existe, vous pouvez utiliser `user?.details?.name` pour éviter une erreur.

### Exemple :

```javascript
// Wrong usage, will throw an error if `user` is not defined
user.details?.name; 

// Correct usage if unsure whether `user` exists
user?.details?.name;
```

## Résumé

- Le **Optional Chaining** vous permet d'accéder à une propriété profondément imbriquée dans un objet sans risquer une erreur si l'une des propriétés est `null` ou `undefined`.
- Si une propriété est `null` ou `undefined`, le chaînage optionnel court-circuitera et renverra `undefined`.
- Vous ne pouvez pas utiliser le chaînage optionnel sur un objet qui n'existe peut-être pas. L'objet doit exister.
```