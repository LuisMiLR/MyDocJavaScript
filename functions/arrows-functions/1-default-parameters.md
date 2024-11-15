```markdown
# Paramètres par défaut

**Dernière mise à jour : février 2024**

Les paramètres par défaut permettent de donner une valeur par défaut à un ou plusieurs paramètres lorsqu'ils ne sont pas fournis lors de l'appel d'une fonction. Cela permet d'éviter des erreurs ou des résultats inattendus, comme `NaN`.

## Exemple sans paramètres par défaut

Considérons la fonction suivante :

```javascript
function addOne(number) {
    return number + 1;
}

addOne(2); // 3
addOne(5); // 6
addOne();  // que se passe-t-il ?
```

En JavaScript, appeler `addOne()` sans argument ne génère pas d'erreur. Le paramètre `number` reçoit alors la valeur `undefined`, ce qui conduit à `undefined + 1`, donnant `NaN`.

Pour éviter cela, nous pouvons utiliser des **paramètres par défaut**.

## Utilisation des paramètres par défaut

Les paramètres par défaut permettent de définir une valeur par défaut dans la signature de la fonction. Par exemple :

```javascript
function addOne(number = 0) {
    return number + 1;
}

addOne(2); // 3
addOne(5); // 6
addOne();  // 1
```

Lorsque `addOne()` est appelé sans argument, le paramètre `number` prend la valeur par défaut `0`. Cela permet d'éviter d'obtenir `NaN`. Si un argument est fourni, la valeur par défaut est ignorée.

### Exemple avec plusieurs paramètres

```javascript
function welcomeUser(name = "user") {
    return `Hello ${name}`;
}

console.log(welcomeUser("Sam")); // "Hello Sam"
console.log(welcomeUser());      // "Hello user"
```

Dans cet exemple :
- Si un nom est fourni, il est utilisé.
- Sinon, la valeur par défaut `"user"` est utilisée.

## Résumé

- Les paramètres par défaut permettent de définir une valeur à utiliser si un argument n'est pas fourni.
- Ils simplifient le code en éliminant le besoin d'ajouter des conditions `if` pour gérer les valeurs `undefined`.
- Lorsqu'un argument est passé, la valeur par défaut est ignorée.
```