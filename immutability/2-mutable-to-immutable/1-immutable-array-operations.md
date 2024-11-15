# Immutable array operations

### Opérations sur les tableaux immuables

Nous avons vu dans le chapitre précédent qu'attribuer un tableau à une nouvelle variable n'en fait pas une nouvelle copie. Ainsi, toute modification apportée à cette nouvelle variable affectera également la variable d'origine.

Vous ne pouvez pas rendre un tableau ou un objet immuable en JavaScript. Cependant, vous pouvez utiliser des méthodes spécifiques pour créer une nouvelle copie qui conserverait la valeur de la variable d'origine. Nous appelons cela des **opérations sur tableau immuable**.

### Création d'une copie superficielle

Par exemple, nous pouvons créer une copie superficielle de ce tableau en utilisant la syntaxe spread `...`. Voici comment cela fonctionne :

```javascript
const grades = [10, 20];
const gradesCopy = [...grades];
console.log(gradesCopy); // [10, 20] (nouveau tableau, indépendant de 'grades')
```

La façon dont cela fonctionne est que vous créez un nouveau tableau avec la syntaxe `[]`, et à l'intérieur de ce tableau, vous répartissez les éléments du tableau `grades`. Cela crée une copie plutôt que de pointer vers la même référence. C'est ce qu'on appelle une **copie superficielle** (contrairement à la copie profonde, que nous aborderons plus tard).

### Ajout immuable d'un élément

Vous pouvez ajouter de manière immuable un élément à un tableau avec la syntaxe `...` :

```javascript
const gradesUpdated = [...grades, 15];
console.log(gradesUpdated); // [10, 20, 15] (nouveau tableau, indépendant de 'grades')
console.log(grades); // [10, 20] (inchangé)
```

La syntaxe `[...]` permet de copier les éléments d'origine et d'ajouter de nouveaux éléments dans un nouveau tableau.

### Mise à jour ou suppression immuable

Suppression d'un élément de manière immuable avec la méthode `filter` :

```javascript
const gradesFiltered = grades.filter((grade) => grade !== 20);
console.log(gradesFiltered); // [10]
console.log(grades); // [10, 20] (inchangé)
```

La méthode `.filter()` renvoie un nouveau tableau sans modifier le tableau d'origine. Elle est couramment utilisée pour des opérations comme la suppression d'un élément de manière immuable.

### Résumé

- Vous pouvez créer une copie superficielle d'un tableau avec la syntaxe `...`: `[...originalArray]`.
- Cette technique répartit les éléments d'origine dans un nouveau tableau.
- Vous pouvez ajouter de manière immuable un élément à un tableau : `[...originalArray, newItem]`.
- La méthode `.filter()` permet de mettre à jour ou supprimer un élément de manière immuable sans affecter le tableau d'origine.
```