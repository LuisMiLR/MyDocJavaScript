# String Interpolation

En programmation JavaScript, l'interpolation fait référence à une technique permettant d'insérer des variables ou des expressions dans des chaînes de caractères. Cela facilite la création de chaînes dynamiques en combinant du texte statique avec des valeurs variables.

Il existe deux principales méthodes d'interpolation en JavaScript :

## Concaténation de chaînes

Vous pouvez concaténer des chaînes de texte avec des variables ou des expressions à l'aide de l'opérateur de concaténation (`+`). Par exemple :

```javascript
var nom = "John";
var age = 25;

var message = "Bonjour, je m'appelle " + nom + " et j'ai " + age + " ans.";
```

Cependant, cette méthode peut devenir fastidieuse et moins lisible lorsque vous avez plusieurs variables à intégrer.

## Template Literals

Les template literals, introduits dans ECMAScript 6 (ES6), offrent une syntaxe plus propre et plus lisible pour l'interpolation de chaînes. Vous pouvez définir une chaîne de texte en utilisant des backticks (``) et incorporer des variables ou des expressions en les plaçant entre `${}`. Voici un exemple :

```javascript
var nom = "John";
var age = 25;

var message = `Bonjour, je m'appelle ${nom} et j'ai ${age} ans.`;
```

Les template literals rendent le code plus lisible et facilitent l'insertion de variables dans les chaînes de caractères.

L'interpolation en JavaScript est une technique couramment utilisée pour générer des messages dynamiques, des requêtes de base de données, des URL dynamiques, et d'autres opérations où des valeurs variables doivent être incorporées dans des chaînes de texte.
```

