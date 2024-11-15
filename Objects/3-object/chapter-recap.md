# Chapter Recap

_Dernière mise à jour : mai 2023_

Il est possible de vérifier si une clé existe dans un objet à l'aide de l'opérateur `in`. Cet opérateur renvoie `true` si la propriété spécifiée est trouvée dans l'objet, sinon il renvoie `false`.

### Exemple :

```javascript
const person = {
    name: "Alex",
    age: 35
};

if ("name" in person) {
    console.log(person.name);
}
```

- Notez que le nom de la propriété doit être fourni sous forme de chaîne (`"name"`).

Dans le prochain chapitre, vous découvrirez le **chaînage optionnel**, ce qui peut rendre certains cas d'utilisation de l'opérateur `in` moins pertinents. Cependant, l'opérateur `in` est souvent utilisé pour vérifier l'existence d'une clé dans l'objet global `window`.

### Exemple courant avec `window` :

```javascript
if ("ontouchstart" in window) {
    // using a touchscreen
} else {
    // not using a touchscreen
}
```

Cet exemple vérifie si l'utilisateur utilise un appareil avec un écran tactile en cherchant la clé `ontouchstart` dans l'objet `window`. Cela peut être utile dans le développement web pour adapter le comportement en fonction des interactions tactiles.

---

## Récapitulatif du chapitre

- En supposant une variable `name`, voici un exemple de **raccourci d'objet** :

```javascript
const user = { name };
```

Cela est équivalent à écrire :

```javascript
const user = { name: name };
```

- Lorsque vous avez plusieurs appels `console.log`, encapsulez les valeurs avec `{}` pour utiliser le raccourci d'objet. Cela permet de voir le nom de la variable avec sa valeur.

- Tout comme pour la déstructuration d'un tableau, vous pouvez déstructurer des paires clé/valeur (ou des objets imbriqués) à partir d'un objet.

- Il est également possible de déstructurer avec une **valeur par défaut**, ce qui vous permet d'attribuer une valeur par défaut à une propriété si elle n'existe pas dans l'objet.

- Vous pouvez **fusionner des objets** avec l'opérateur `...`. L'ordre des objets est important (pour les clés en double, l'objet le plus à droite l'emportera).
```

