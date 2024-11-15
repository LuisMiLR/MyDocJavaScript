# Return Confusion

Dans cette leçon, nous aborderons une confusion courante lorsqu'il s'agit de renvoyer une valeur à l'intérieur d'une fonction qui contient un appel à `.forEach()`.

## Nommer les Variables

Nommer les variables de manière claire permet à vous et aux autres de comprendre le code plus facilement, en particulier lors de l'itération.

Il est toujours judicieux d'utiliser le pluriel pour le tableau et le singulier pour l'élément du tableau. Voici quelques exemples :

- `grades` → l'élément est `grade`
- `people` → l'élément est `person`

Cela peut sembler être un conseil mineur, mais cela fait une grande différence ! 💡

Voici un exemple de code basé sur ce principe :

```javascript
const grades = [10, 14, 15]; // tableau (pluriel)
grades.forEach(function (grade) { // élément du tableau (singulier)
  console.log(grade);
});

const people = ["Sam", "Alex"]; // tableau (pluriel)
people.forEach(function (person) { // élément du tableau (singulier)
  console.log(person);
});
```

## Returning from a Loop

Il y a une erreur courante qui se produit lorsque vous essayez de faire un `return` à partir d'une fonction contenant un appel à `forEach()`. C'est parce qu'il y a deux fonctions imbriquées.

Prenons cette fonction :

```javascript
function logUserIds(userIds) {
  userIds.forEach(function (userId) {
    console.log(userId);
  });
}
```

Et vous souhaitez que cette fonction renvoie `true` une fois qu'elle est terminée. Où placez-vous le `return true` ?

Voici une tentative :

```javascript
function logUserIds(userIds) {
  userIds.forEach(function (userId) {
    console.log(userId);
  });
  return true;
}
```

Le `return true` à l'intérieur de la fonction n'est pas très utile ici, car il est placé après l'appel à `forEach()`. Il va simplement renvoyer `true` après que toutes les itérations de `forEach()` soient terminées.

Dans le contexte de `forEach()`, un `return` à l'intérieur de la fonction de rappel n'arrêtera pas l'itération. La méthode `.forEach()` continue d'exécuter toutes les itérations, même si vous renvoyez quelque chose dans la fonction de rappel. De plus, la méthode `.forEach()` renvoie toujours `undefined`, peu importe ce que vous renvoyez à l'intérieur de la fonction.

### Conclusion

Si vous avez besoin de renvoyer une valeur à partir de la fonction principale, placez-la en dehors de la fonction de rappel `forEach()`, comme dans l'exemple précédent.

```

