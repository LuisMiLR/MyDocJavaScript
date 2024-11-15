# Revisiting Array Methods (Revisiter les méthodes de tableau)

**Dernière mise à jour : juillet 2024**

Nous allons voir comment utiliser les **fonctions fléchées** avec certaines des méthodes de tableau que nous avons abordées.

---

## Array `.forEach()`

Voici un exemple de la méthode `.forEach()` que nous avons vu dans un chapitre précédent :

```javascript
const grades = [10, 8, 13];

grades.forEach(function(grade) {
    console.log(grade);
});
```

Cette itération peut être réécrite en utilisant des **fonctions fléchées** comme suit :

```javascript
grades.forEach((grade) => {
    console.log(grade);
});
```

De plus, comme une fonction fléchée avec un seul paramètre **n'exige pas de parenthèses autour du paramètre**, vous pouvez écrire :

```javascript
grades.forEach(grade => {
    console.log(grade);
});
```

> **Remarque :** Cette simplification est possible uniquement si la fonction fléchée a un **seul paramètre**. Pour plusieurs paramètres, vous devez conserver les parenthèses `()`.

---

## Array `.filter()`

La même logique s'applique à `.filter()`.

### Exemple classique avec une fonction anonyme :

```javascript
const numbers = [9, 5, 14, 3, 11];

const numbersAboveTen = numbers.filter(function(number) {
    return number > 10;
});
console.log(numbersAboveTen); // [14, 11]
```

### Réécriture avec une fonction fléchée :

```javascript
const numbersAboveTen = numbers.filter(number => {
    return number > 10;
});
```

Ici aussi, vous pouvez supprimer les parenthèses autour de `number` car il n'y a qu'un seul paramètre.

---

## Recap

- Lorsqu'une **fonction fléchée** possède un **seul paramètre sans valeur par défaut**, vous êtes autorisé à supprimer les **parenthèses** autour de ce paramètre.
- Les **fonctions fléchées** permettent de raccourcir les fonctions de rappel utilisées avec des méthodes comme `.forEach()` et `.filter()`.