# 1. Spread Operator

La syntaxe de **décomposition** (ou spread en anglais) permet de copier les valeurs d'un élément itérable, comme un tableau, une chaîne ou un objet. C'est pratique pour effectuer une copie superficielle ou afficher une liste d'éléments.

### Exemple avec un tableau :

```javascript
const array = [1, 2, 3, { a: 5 }];
```

#### Cas d'utilisation : Étendre ces propriétés en tant qu'argument à une fonction ou une méthode.

```javascript
console.log(...array); // 1 2 3 { a: 5 }
```

#### Créer une copie superficielle (shallow copy) d'un tableau :

```javascript
const shallowArrayCopy = [...array, 4, 5, 6];
array[3].a = 555;
console.log(shallowArrayCopy); // [1, 2, 3, { a: 555 }, 4, 5, 6]
```

### Explications :

1. Cela a permis de copier les **valeurs primitives** (comme les nombres) du tableau `array`.
2. Cependant, lorsqu'un **objet** est présent dans le tableau (par exemple `{ a: 5 }`), il est copié en tant que référence, ce qui signifie que la modification de cet objet dans le tableau original affecte également la copie.

En modifiant `array[3].a = 555`, l'objet dans `shallowArrayCopy` est également mis à jour, car les objets sont copiés par référence, pas par valeur.

### Shallow Copy vs Deep Copy

- Une **shallow copy** (copie superficielle) copie les valeurs primitives, mais pour les objets ou autres types complexes, elle copie la **référence**.
- Une **deep copy** (copie profonde) créerait une copie complète, y compris des objets imbriqués.

---

### Utilisation avec les objets

Cela fonctionne également avec les objets, car les tableaux sont eux-mêmes des objets sous le capot.

```javascript
const obj = {
  name: "Laura",
  age: 16,
};

const shallowObjCopy = { ...obj };
console.log(shallowObjCopy); // { name: "Laura", age: 16 }
```

### Ajouter ou modifier des propriétés :

Vous pouvez également ajouter ou remplacer des propriétés dans l'objet copié.

```javascript
const shallowObjCopy2 = { ...obj, name: "Anna" }; 
console.log(shallowObjCopy2); // { name: "Anna", age: 16 }
```

Dans cet exemple, la propriété `name` a été remplacée par "Anna" car elle existait déjà dans l'objet original.

---

### Utilisation avec les chaînes de caractères

L'opérateur spread fonctionne aussi avec les chaînes de caractères pour les convertir en tableau de caractères.

```javascript
const str = "Le chat saute, le chien court.";
const strCopyArray = [...str];
console.log(strCopyArray); // ['L', 'e', ' ', 'c', 'h', 'a', 't', ' ', 's', 'a', 'u', 't', 'e', ',', ' ', 'l', 'e', ' ', 'c', 'h', 'i', 'e', 'n', ' ', 'c', 'o', 'u', 'r', 't', '.']
```

Dans cet exemple, chaque caractère de la chaîne `str` est étalé dans un tableau `strCopyArray`.

---

### Conclusion :

- L'opérateur **spread** permet d'étendre les éléments d'un tableau, d'un objet ou d'une chaîne dans une nouvelle structure.
- Il peut être utilisé pour créer des copies superficielles (shallow copies) de tableaux ou d'objets, mais attention aux objets imbriqués, car seule la référence est copiée.
- Fonctionne également pour les chaînes de caractères, les décomposant en un tableau de caractères.
```