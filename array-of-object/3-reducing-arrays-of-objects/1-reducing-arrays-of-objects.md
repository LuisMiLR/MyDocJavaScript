# Réduire les tableaux d'objets

**Dernière mise à jour juillet 2022**  
Le concept de réduction n'est pas non plus modifié pour les tableaux d'objets. Cependant, cela devient plus complexe car `current` est maintenant un objet et vous devez suivre plusieurs variables de types différents.

## Réduction des tableaux d'objets

### Rappel de la méthode `reduce()`
La méthode `reduce()` est utilisée pour calculer une valeur unique à partir d'un tableau, en réduisant le tableau à une seule valeur.

Exemple de calcul de somme :
```javascript
const grades = [10, 15, 5];

const sum = grades.reduce((total, current) => { 
    return total + current;
}, 0);
```
- La variable `total` commence avec la valeur `0` (le dernier argument passé à la méthode `reduce()`).
- À chaque itération, la valeur de `total` est mise à jour avec `total + current`.

### Réduction des tableaux d'objets
Pour un tableau d'objets, comme dans l'exemple suivant :
```javascript
const grades = [{ grade: 10 }, { grade: 15 }, { grade: 5 }];
```
La méthode `reduce()` peut être utilisée de manière similaire en accédant aux propriétés des objets via `current.grade` :
```javascript
const sum = grades.reduce((total, current) => {
    return total + current.grade;
}, 0);
```

### Exemple de calcul de l'impact social
Imaginons un tableau d'objets représentant des tweets, où nous souhaitons calculer la somme des "likes" et "retweets" :
```javascript
const tweets = [
    {
        id: 10512,
        stats: {
            likes: 41,
            retweets: 54
        }
    },
    {
        id: 41241,
        stats: {
            likes: 14,
            retweets: 20
        }
    }
];

const socialImpact = tweets.reduce((total, current) => {
    return total + current.stats.likes + current.stats.retweets;
}, 0);
console.log(socialImpact); // 129
```

### Points clés à retenir
- L'argument `current` dans la méthode `reduce()` est un objet lorsque vous travaillez avec des tableaux d'objets.
- Ajoutez un `console.log(current)` pour visualiser l'objet à chaque étape.
- Le deuxième argument de `reduce()` est la valeur de départ pour la variable `total`. Pour une somme, c'est souvent `0`, et pour un produit (multiplication), c'est généralement `1`.

## Résumé
- Les tableaux d'objets peuvent être réduits en une seule valeur, souvent un nombre.
- La principale différence est que `current` devient un objet, donc utilisez `console.log()` pour bien comprendre sa structure.
- La valeur de départ dans une réduction est essentielle. Elle est `0` pour les sommes et `1` pour les produits.
```

