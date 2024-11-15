# Cas d'utilisation supplémentaires

**Dernière mise à jour avril 2024**  
Examinons d'autres cas d'utilisation. Tous les exemples ci-dessous supposent la variable `tweets` suivante :

```javascript
const tweets = [
    {
        id: 10512,
        message: "Hello Twitter 👋",
        stats: {
            likes: 41,
            retweets: 54
        }
    },
    {
        id: 41241,
        message: "How do you keep track of your notes?",
        stats: {
            likes: 14,
            retweets: 20
        }
    }
];
```

## Conversion en CSV (valeurs séparées par des virgules)
Nous pouvons utiliser les méthodes `.map()` et `.join()` pour convertir un tableau d'objets en une chaîne CSV :

```javascript
const csv = tweets.map(tweet => tweet.message).join(", ");
console.log(csv); // "Hello Twitter 👋, How do you keep track of your notes?"
```
La méthode `.map()` vous permet de spécifier quelle(s) propriété(s) vous souhaitez extraire des objets. Ensuite, vous pouvez appeler `.join()` sur le tableau pour coller les valeurs ensemble sous forme de chaîne.

## Déstructuration d'objet
Lors de l'accès aux propriétés imbriquées, vous pouvez trouver utile d'utiliser la déstructuration d'objet :

```javascript
tweets.forEach(tweet => {
    const {likes, retweets} = tweet.stats;
    console.log(likes, retweets);
});
```

La déstructuration d'objet vous permet d'extraire les propriétés souhaitées directement depuis un objet, ce qui simplifie l'accès aux données imbriquées.
```