# Object Shorthand

_Dernière mise à jour : novmebre 2025_


Une fonctionnalité astucieuse des objets est la syntaxe abrégée des objets **object shorthand**. Supposons que vous ayez une variable age et que vous vouliez créer un objet avec une clé age dont la valeur est la variable age :

```javascript
const age = 18;
const person = {
    name: "John",
    age: age
};
```

Cela paraît un peu redondant (`age: age`), vous pouvez donc simplifier cela comme suit :

```javascript
const age = 18;
const person = {
    name: "John",
    age
};
```

Étant donné que le nom de la propriété est le même que le nom de la variable utilisée comme valeur, vous pouvez supprimer la répétition et ne conserver que `age`.

### Autre exemple :

```javascript
const isAdmin = false;
const darkMode = true;

const settings = {
    isAdmin,
    darkMode
};

console.log(settings); // {isAdmin: false, darkMode: true}
```

---

## Debugging Tip

Le **Object shorthand** (raccourcie d'objet) peut également être utilisé comme une astuce de débogage très utile. Par exemple, supposons que vous ayez le code suivant :

```javascript
const sum = (a, b) => {
    console.log(a); // 1
    console.log(b); // 3
    let total = a + b;
    console.log(total); // 4
    return total;
};

// exemple d'utilisation
sum(1, 3);
```

Il y a plusieurs appels à `console.log()`, ce qui peut rendre difficile de savoir quelle valeur correspond à quel appel. Pour résoudre ce problème, vous pouvez encapsuler chaque variable dans les accolades `{}` lors de l'appel à `console.log()` :

```javascript
const sum = (a, b) => {
    console.log({a}); // {a: 1}
    console.log({b}); // {b: 3}
    let total = a + b;
    console.log({total}); // {total: 4}
    return total;
};

// Sample usage
sum(1, 3);
```

En enveloppant chaque variable avec `{}`, vous utilisez le **raccourci objet**. L'avantage est qu'au lieu de simplement journaliser `a`, vous journalisez `{a: a}`. Cela permet de voir un objet avec la clé (le nom de la variable) et sa valeur.

---

## Résumé

- En supposant une variable `name`, voici un exemple de **raccourci d'objet** : 

```javascript
const user = {name};
```

Cela est équivalent à écrire : 

```javascript
const user = {name: name};
```

- Lorsque vous avez plusieurs appels `console.log()`, encapsulez les valeurs avec `{}` pour utiliser le raccourci d'objet. Cela vous permet de voir le nom de la variable que vous essayez d'enregistrer à côté de sa valeur.
```

