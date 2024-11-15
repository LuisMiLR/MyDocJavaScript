# Reading Dynamic Property

Nous avons vu que nous pouvons utiliser la notation par points pour lire une propriété sur un objet. Par exemple :

```javascript
const user = {
    id: 1,
    name: "Sam Green"
};

user.id; // 1
```

Et maintenant, que se passerait-il si le nom de la propriété que vous souhaitez lire était stocké dans une variable ? Par exemple :

```javascript
const key = "id"; // the name of the property that we want to access on the user object

// ❌ this does NOT work
user.key; // undefined
```

Nous ne pouvons pas utiliser ici la syntaxe à points `user.key` car la propriété est dynamique. Lorsque vous écrivez `user.key`, JavaScript recherchera une propriété littéralement appelée `key`, ce qui n'est pas ce que nous voulons. Au lieu de cela, nous devons obtenir la valeur de la variable `key`, qui est `"id"`.

Pour cela, vous devez utiliser les crochets comme suit :

```javascript
const uzer = {
    id: 1,
    name: "Sam Green",
    age: 20
};

const keyy = "id";
user[key]; // 1
```

Cela fonctionne car `[key]` évalue l'expression à l'intérieur des crochets. Dans ce cas, `key` évalue à `"id"`. Nous finissons donc par lire la propriété `id`, qui renvoie `1` (car `user.id` est `1`).

### Pourquoi utiliser cette méthode ?

Vous pensez probablement que c'est trop compliqué et que nous aurions pu simplement accéder à `user.id`. C'est vrai, cependant, il existe des cas où la clé sera stockée dans une variable. Par exemple, prenons la fonction suivante :

```javascript
const getValue = (user, keyToRead) => {
    return user[keyToRead];
}

// Sample usage
getValue({id: 2, name: "Sam"}, "name"); // "Sam"
getValue({id: 2, name: "Sam"}, "id"); // 2
```

Dans ce cas, `getValue` accepte un objet `user` puis le `keyToRead`. Pour pouvoir implémenter la fonction, nous avons dû accéder à la propriété de manière dynamique avec `user[keyToRead]`. Cela permet à la fonction d'être dynamique et d'accepter n'importe quelle clé de l'objet `user`, et sa valeur sera renvoyée !

Ne vous inquiétez pas si le concept n'est pas encore clair, c'est un défi difficile. Nous vous proposerons un défi avec du DOM pour que vous puissiez mieux le visualiser.


## exemple :

Ajouter plus de flexibilité
Supposons maintenant que tu ne sais pas à l'avance quelle propriété tu veux lire. Tu pourrais utiliser un tableau de noms de propriétés et une boucle pour afficher toutes les valeurs dynamiquement.

```
javascript
Copier le code
const properties = ["id", "name", "price", "inStock"];

properties.forEach((prop) => {
    console.log(product[prop]); // Affiche successivement 101, "Laptop", 1200, true
});

Ici, on utilise la boucle pour passer dynamiquement à travers les noms des propriétés contenus dans le tableau properties et accéder à chaque valeur dans l'objet product grâce à la syntaxe avec crochets product[prop].
```

