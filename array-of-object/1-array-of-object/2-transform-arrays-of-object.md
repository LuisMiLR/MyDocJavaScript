# Transformer des tableaux d'objets

**Dernière mise à jour avril 2024**

Comme nous l'avons étudié précédemment, la méthode `.map()` permet de **transformer un tableau** en un autre tableau de la même taille.

## Exemple avec `.map()`

Voici un exemple que nous avons vu auparavant :

```javascript
const names = ["sam", "Alex"];

const upperNames = names.map(name => name.toUpperCase());
console.log(upperNames); // ["SAM", "ALEX"]
```

Dans cet exemple, nous transformons un tableau de chaînes en un **nouveau tableau de chaînes** où les éléments sont en majuscules.

## Utilisation de `.map()` avec des tableaux d'objets

Le fonctionnement est similaire pour les **tableaux d'objets**. Vous pouvez transformer un tableau d'objets en un nouveau tableau d'objets, ou vous pouvez le transformer en un tableau de chaînes ou de nombres. Cela vous permet d'**extraire certaines propriétés** d'un tableau d'objets.

### Exemple d'extraction de propriété :

```javascript
const tweets = [
    {
        id: 1080777336298049537,
        message: "Hello Twitter 👋",
        created_at: "2020-01-03 11:46:00"
    },
    {
        id: 1080777336298195435,
        message: "How do you keep track of your notes?",
        created_at: "2021-02-19 15:32:00"
    }
];

const messages = tweets.map(tweet => tweet.message);
console.log(messages); // ["Hello Twitter 👋", "How do you keep track of your notes?"]
```

Dans cet exemple, nous avons extrait la propriété `message` de chaque tweet, transformant ainsi un **tableau d'objets** (`tweets`) en un **tableau de chaînes** (`messages`).

### Bonnes pratiques

N'oubliez pas d'utiliser `console.log(tweet)` dans le rappel de `.map()` pour **visualiser l'objet** que vous manipulez.

## Résumé

- La méthode `.map()` permet de transformer un tableau en un autre tableau de même taille.
- Vous pouvez utiliser `.map()` pour transformer des tableaux d'objets en un **nouveau tableau d'objets**, ou pour extraire certaines **propriétés** et les transformer en un tableau de chaînes ou de nombres.
```