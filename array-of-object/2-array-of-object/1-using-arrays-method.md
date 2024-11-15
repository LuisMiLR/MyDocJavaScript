# Utilisation des méthodes de tableau

**Dernière mise à jour avril 2024**  
Dans cette leçon, nous allons examiner certaines des méthodes de tableau que nous avons vues et leur utilisation avec des tableaux d'objets.  
Encore une fois, il n'y a rien de particulièrement nouveau, mais les défis supplémentaires aident à simuler les problèmes courants que vous rencontrez dans des projets réels.

Tous les exemples de cette leçon utiliseront la variable `tweets` suivante :

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

## Tableau `.filter()`
L'appel de la méthode `.filter()` sur un tableau d'objets renverra un tableau contenant les objets qui passent la condition que vous spécifiez dans le rappel.

```javascript
tweets.filter(tweet => {
    console.log(tweet); // visualiser tweet
    return tweet.stats.likes > 30;
});
```
Le code ci-dessus renvoie un tableau de tweets ayant plus de 30 mentions J'aime. Dans notre exemple, il renverra un tableau contenant le premier tweet.

Remarquez comment nous avons ajouté un `console.log(tweet)` pour visualiser l'objet `tweet` car nous travaillons avec un tableau d’objets (`tweets`).

Une fois que vous êtes à l'aise avec les tableaux d'objets, vous pouvez les réécrire en utilisant des **fonctions fléchées avec retour implicite** :

```javascript
tweets.filter(tweet => tweet.stats.likes > 30);
```

## Tableau `.find()`
L'appel de la méthode `.find()` sur un tableau d'objets renverra le premier objet qui correspond à la condition que vous spécifiez dans le rappel ou `undefined` si aucun objet ne satisfait la condition.

```javascript
const searchId = 41241;
const tweet = tweets.find(tweet => tweet.id === searchId);
console.log(tweet); // {...} (objet du 2ème tweet)
```

## Tableau `.some()`
L'appel de la méthode `.some()` sur un tableau d'objets renvoie `true` lorsqu'au moins un élément du tableau satisfait la condition que vous avez spécifiée dans la fonction de rappel. Sinon, elle renvoie `false`.

```javascript
tweets.some(tweet => tweet.stats.likes > 30); // true (au moins un a plus de 30 likes)
tweets.some(tweet => tweet.stats.likes > 100); // false (aucun tweet ne satisfait cette condition)
```

## Tableau `.every()`
L'appel de la méthode `.every()` sur un tableau d'objets renvoie `true` lorsque **chaque** élément du tableau satisfait la condition que vous avez spécifiée dans la fonction de rappel. Sinon, elle renvoie `false`.

```javascript
tweets.every(tweet => tweet.stats.likes > 10); // true (tous les tweets ont plus de 10 likes)
tweets.every(tweet => tweet.stats.likes > 30); // false (certains tweets n'ont pas plus de 30 likes)
```

## Résumer
- L'appel de la méthode `.filter()` sur un tableau d'objets renverra un tableau contenant les objets qui passent la condition que vous spécifiez dans le rappel.
- L'appel de la méthode `.find()` sur un tableau d'objets renverra le premier objet qui correspond à la condition que vous spécifiez dans le rappel, ou `undefined` si aucun objet ne satisfait la condition.
- L'appel de la méthode `.some()` sur un tableau d'objets renvoie `true` lorsqu'au moins un élément du tableau satisfait la condition que vous avez spécifiée dans la fonction de rappel. Sinon, elle renvoie `false`.
- L'appel de la méthode `.every()` sur un tableau d'objets renvoie `true` lorsque chaque élément du tableau satisfait la condition que vous avez spécifiée dans la fonction de rappel. Sinon, elle renvoie `false`.
```