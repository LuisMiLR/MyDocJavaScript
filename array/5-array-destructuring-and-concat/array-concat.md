# Array Destructuring

_Dernière mise à jour : février 2023_

Vous pouvez concaténer ou fusionner le contenu de plusieurs tableaux dans un nouveau tableau en utilisant la syntaxe de propagation (`...`). Voici un exemple :

```javascript
const lat = [5.234];
const lng = [1.412];
const point = [...lat, ...lng];
console.log(point); // [5.234, 1.412];
```

Le nouveau tableau `point` contient les éléments des deux tableaux `lat` et `lng`.

### Autre Exemple : Ajout d'Éléments

Voici un autre exemple où nous créons un nouveau tableau basé sur un tableau existant et ajoutons de nouveaux éléments :

```javascript
const items = ["Tissues", "Oranges"];
const otherItems = [...items, "Tomatoes"];
console.log(otherItems); // ["Tissues", "Oranges", "Tomatoes"]
```

Nous reviendrons sur la concaténation de tableaux une fois que nous aurons découvert le concept d'immuabilité, un concept important en JavaScript.

---

## Résumé

- Vous pouvez concaténer ou fusionner plusieurs tableaux dans un nouveau tableau en utilisant la syntaxe de propagation (`...`). "Rest Operator"


