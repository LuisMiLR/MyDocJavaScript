# Tableaux d'objets

**Dernière mise à jour avril 2024**

Les tableaux d'objets sont le type de données le plus courant que vous rencontrerez lorsque vous travaillerez dans le développement Web, car la plupart des API (par exemple, une API météo, une API Twitter, etc.) renvoient des **tableaux d'objets**.

D'un point de vue technique, les **tableaux d'objets** n'ont pas de fonctionnalités particulières ni de méthodes supplémentaires. Cependant, compte tenu de leur fréquence, nous avons décidé de leur consacrer trois chapitres afin que vous puissiez vous entraîner, vous entraîner et encore vous entraîner.

## Exemple

Supposons que vous interrogez l'API Twitter ; voici à quoi pourrait ressembler une réponse :

```javascript
const tweets = [
    {
        id: 1080777336298049537,
        message: "Hello Twitter 👋",
        created_at: "2020-01-03 11:46:00",
        author: {
            id: 109215315,
            firstName: "Jad",
            lastName: "Joubran",
            handle: "JoubranJad"
        }
    },
    {
        id: 1080777336298195435,
        message: "How do you keep track of your notes?",
        created_at: "2021-02-19 15:32:00",
        author: {
            id: 109216891,
            firstName: "Sam",
            lastName: "Green",
            handle: "SamGreen"
        }
    }
];
```

Il s'agit d'un tableau de **2 objets**. Notez que la variable `tweets` est un **tableau**. De nombreux développeurs confondent cela car ils voient les objets à l'intérieur du tableau et pensent qu'il s'agit d'un objet. Mais, en fait, il s'agit d'un **tableau d'objets**.

## Accéder aux propriétés

Sachant qu'il s'agit d'un tableau, nous pouvons accéder aux propriétés des tableaux (telles que `.length`) et appeler des méthodes de tableau telles que `.forEach()`, `.map()`, etc.

## Visualisez toujours les objets intérieurs

Un conseil très important lorsque vous travaillez avec des tableaux d'objets, en particulier lors de l'itération sur un tableau d'objets, est d'ajouter `console.log()` tout au long de votre code pour visualiser l'objet que vous recevez dans le rappel.

### Exemple d'itération
En supposant le tableau `tweets` ci-dessus, voici comment l'itérer :

```javascript
tweets.forEach(tweet => {
    console.log(tweet);
});
```

Vous devez réaliser qu'il s'agit d'un objet. Vous pourrez le visualiser dans la console.

### Exemple d'accès à une propriété

Disons que vous souhaitez enregistrer le pseudo de chaque utilisateur :

```javascript
tweets.forEach(tweet => {
    console.log(tweet.author.handle);
});
```

Savoir qu'il s'agit d'un objet vous permet de réaliser que vous devez utiliser la notation par points pour accéder à `author`, puis faire la même chose pour accéder à `handle`.

## Résumé

- Les **tableaux d'objets** sont le type de données le plus courant dans le développement Web, car la plupart des API renvoient des tableaux d'objets.
- Lorsque vous travaillez avec des tableaux d'objets, en particulier lors de l'itération, utilisez `console.log()` pour visualiser les objets à l'intérieur.
```
