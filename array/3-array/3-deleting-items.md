# Deleting Items



Supposons que vous ayez un tableau et que vous souhaitiez le vider ; vous pouvez le faire en définissant sa longueur sur 0 :

```javascript
const items = ["Pen", "Paper"];
items.length = 0;

console.log(items); // []
```

Cela fonctionne même si nous utilisons `const` car nous ne réattribuons pas `items`, mais modifions plutôt sa longueur à 0, ce qui finit par supprimer tous les éléments qu'il contient. Le `const` ici garantit que nous aurons toujours un tableau (mais son contenu peut changer).

## `array.splice()`

Vous pouvez également supprimer des éléments spécifiques d'un tableau à l'aide de la méthode `.splice(start[, deleteCount])`.  
**Ne pas confondre `splice` avec une autre méthode appelée `slice`.**

Avez-vous remarqué la syntaxe `[, deleteCount]` ? Vous verrez souvent cette syntaxe dans la documentation, ce qui signifie que le paramètre `deleteCount` est facultatif.

La méthode `.splice(start[, deleteCount])` supprime les éléments du tableau à partir de l'index `start` que vous spécifiez.  
Si aucun `deleteCount` n'est fourni, il supprimera tous les éléments restants à partir de l'index `start`.

Lorsque vous spécifiez un `deleteCount`, il supprimera autant d'éléments à partir de `start` que vous avez indiqué dans `deleteCount`. La définition est plus compliquée que l'exemple, alors regardons quelques exemples :

- Pour supprimer le 1er élément d'un tableau, vous appelez `.splice(0, 1)`.
- Pour supprimer 3 éléments à partir de la 2ème position, vous appelez `.splice(1, 3)`.
- Si vous appelez `.splice(1)`, alors tous les éléments seront supprimés à partir de la 2ème position (index 1).

Essayez toujours de spécifier le 2ème argument pour `splice` afin d'éviter de supprimer de manière inattendue plus d'éléments que nécessaire.

```javascript
const items = ["Pen", "Paper", "Staples"];
const deletedItem = items.splice(0, 1); // supprime un élément à l'index 0
console.log(deletedItem); // ["Pen"]

console.log(items); // ["Paper", "Staples"]
```

Remarquez comment la méthode `.splice` renvoie un tableau des éléments supprimés.

## Résumé

- Vous pouvez vider un tableau en définissant sa longueur sur 0.
- La méthode `.splice(start[, deleteCount])` supprime les éléments du tableau à partir de l'index `start`. Le nombre d'éléments à supprimer est spécifié par `deleteCount`.
- Si vous omettez `deleteCount`, tous les éléments à partir de l'index `start` seront supprimés.
```

