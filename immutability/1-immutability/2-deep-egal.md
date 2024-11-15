# Deep Equal and Strict Equality

**Dernière mise à jour avril 2024**

L'opérateur de comparaison strict (ou triple égal) `===` est utilisé en JavaScript pour comparer à la fois la valeur et le type des deux opérandes.

### Exemples d'égalité stricte (===)

```javascript
let a = 5;
let b = "5";
console.log(a === b); // false, car les types sont différents

let c = 5;
console.log(a === c); // true, car les valeurs et les types sont identiques
```

### Opérateur d'égalité simple (==)

L'opérateur d'égalité simple `==` compare les valeurs sans prendre en compte leur type. Il effectue une conversion automatique des types si nécessaire.

```javascript
let x = 5;
let y = "5";
console.log(x == y); // true, car '5' est converti en nombre
```

Cette conversion automatique peut conduire à des résultats inattendus. C'est pourquoi l'égalité stricte `===` est souvent préférée, car elle compare à la fois la valeur et le type.

### Comparaison d'objets

Avec l'opérateur `===`, comparer deux objets ou tableaux renverra `false` s'ils ne sont pas la même instance en mémoire, même s'ils contiennent des propriétés identiques.

```javascript
const obj1 = { key: "value" };
const obj2 = { key: "value" };
const obj3 = obj1;

console.log(obj1 === obj2); // false, car ce sont des instances différentes
console.log(obj1 === obj3); // true, car c'est la même instance en mémoire
```

### Qu'est-ce que l'instance en mémoire ?

Lorsque vous créez un objet ou un tableau, il est stocké en mémoire. Comparer deux objets avec `===` signifie vérifier s'ils pointent vers la même adresse mémoire.

```javascript
const firstArray = [];
const secondArray = firstArray; // secondArray pointe vers firstArray
firstArray.push(10);
console.log(firstArray); // [10]
console.log(secondArray); // [10]
```

Ici, `secondArray` pointe vers la même instance que `firstArray`, donc les deux variables reflètent les mêmes modifications.

### Deep Equal

La vérification de l'égalité stricte `===` compare les références, pas les valeurs. Si vous souhaitez comparer les objets ou tableaux par leurs valeurs, vous devez utiliser une technique appelée "deep equal". Cependant, la comparaison en profondeur peut être lente.

### Qu'est-ce que l'immuabilité ?

L'immuabilité signifie qu'un objet ne peut pas être modifié une fois créé. Si vous souhaitez modifier un objet immuable, vous devez en créer une nouvelle copie.

Exemple d'immuabilité avec mise à jour d'un tableau d'objets :

```javascript
const grades = [
  { id: 1, grade: 12, isPassing: false },
  { id: 2, grade: 14, isPassing: true }
];

// Mise à jour d'une propriété de l'objet avec .find()
const entry = grades.find((grade) => grade.id === 1);
entry.isPassing = true;
console.log(grades);
```

Cela mettra à jour l'objet d'origine car nous faisons référence à la même instance.

### Résumé

- `===` compare les références pour les objets, pas les valeurs.
- Pour comparer des valeurs, utilisez une comparaison profonde (deep equal).
- L'immuabilité signifie que vous ne modifiez pas l'objet d'origine mais que vous en créez un nouveau.
```