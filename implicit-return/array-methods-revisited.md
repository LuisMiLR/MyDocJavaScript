```markdown
# Les méthodes de tableau revisitées

Dans cette leçon, nous revisiterons certaines méthodes de tableau vues précédemment et les réécrirons en utilisant des **fonctions fléchées** et, lorsque possible, le **retour implicite**. Nous examinerons les exemples originaux, puis leurs versions améliorées.

---

## **Filter** (rappel)

### Exemple original avec une fonction classique :

```javascript
const numbers = [9, 5, 14, 3, 11];

const numbersAboveTen = numbers.filter(function(number) {
    return number > 10;
});
console.log(numbersAboveTen); // [14, 11]
```

### Réécrit avec une fonction fléchée :

```javascript
const numbersAboveTen = numbers.filter(number => number > 10);
console.log(numbersAboveTen); // [14, 11]
```

**Lecture :** Nous filtrons les `numbers` pour ne conserver que ceux qui sont strictement supérieurs à 10.

> ⚠️ **Attention :** Une erreur courante est d'écrire :  
> `numbers.filter(number > 10)`  
> Cela ne fonctionne pas, car vous devez d'abord passer le paramètre `number`, puis utiliser la syntaxe fléchée `=>`, et enfin spécifier le corps de la fonction.

---

## **Find** (rappel)

### Exemple original avec une fonction classique :

```javascript
const names = ["Sam", "Alex", "Charlie"];

const result = names.find(function(name) {
  return name === "Alex";
});
console.log(result); // "Alex"
```

### Réécrit avec une fonction fléchée :

```javascript
const result = names.find(name => name === "Alex");
console.log(result); // "Alex"
```

**Lecture :** À partir du tableau `names`, trouvez l'élément `name` qui est égal à `"Alex"`.

---

## **Map** (rappel)

### Exemple original avec une fonction classique :

```javascript
const numbers = [4, 2, 5, 8];

const doubled = numbers.map(function(number) {
    return number * 2;
});
console.log(doubled); // [8, 4, 10, 16]
```

### Réécrit avec une fonction fléchée :

```javascript
const doubled = numbers.map(number => number * 2);
console.log(doubled); // [8, 4, 10, 16]
```

**Lecture :** Créez un nouveau tableau basé sur `numbers`, où chaque élément est multiplié par 2.

---

## Exemple avancé avec une logique plus complexe

Considérons cet exemple avec la méthode `.map()` :

```javascript
const getRaisedGrades = grades => {
    return grades.map(function(grade) {
        if (grade + 1 > 20) {
            return 20;
        }
        return grade + 1;
    }).join(", ");
};
```

### Peut-on utiliser un retour implicite ici ?

Non, car le corps de la fonction contient **plusieurs lignes**, ce qui empêche l'utilisation d'un retour implicite. Cependant, nous pouvons le réécrire avec des fonctions fléchées pour plus de concision :

```javascript
const getRaisedGrades = grades => {
    return grades.map(grade => {
        if (grade + 1 > 20) {
            return 20;
        }
        return grade + 1;
    }).join(", ");
};
```

---

## Points clés

- **Filter** : Renvoie un tableau contenant les éléments qui répondent à une condition.
- **Find** : Renvoie le **premier** élément qui répond à une condition.
- **Map** : Transforme chaque élément d’un tableau en un nouveau tableau.

---

### Résumé

- Utilisez les **fonctions fléchées** pour plus de concision.
- Employez le **retour implicite** lorsque le corps de la fonction est court et contient une seule ligne.
- Si la logique est plus complexe (plusieurs lignes), utilisez un **retour explicite** avec des accolades `{}` et `return`.

Dans les chapitres suivants, nous continuerons à utiliser des fonctions fléchées et le retour implicite chaque fois que cela est approprié.
```
