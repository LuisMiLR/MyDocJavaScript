# Array to String

Voici une astuce intéressante : disons que vous disposez d'un groupe d'utilisateurs et que vous souhaitez que le nom de chaque utilisateur soit séparé par une virgule, comme dans un fichier CSV (Comma Separated Values). Comment feriez-vous cela ?

Vous connaissez déjà les deux méthodes dont vous avez besoin pour de telles opérations :

- Tout d'abord, vous commencez par un appel à `.map()` pour extraire le nom (`name`) du tableau d'utilisateurs (`users`).
- Ensuite, vous utilisez `.join()` pour joindre les éléments du tableau en une seule chaîne.

```javascript
const users = [
  {
    id: 1,
    name: "Sam Doe",
  },
  {
    id: 2,
    name: "Alex Blue",
  },
];

const userNamesArray = users.map((user) => user.name);
console.log(userNamesArray); // ["Sam Doe", "Alex Blue"];

const csv = userNamesArray.join(", ");
console.log(csv); // "Sam Doe, Alex Blue"
```

Vous pouvez également enchaîner ces deux commandes et l'écrire sur une seule ligne :

```javascript
const csv = users.map((user) => user.name).join(", ");
console.log(csv); // "Sam Doe, Alex Blue"
```

Plutôt sympa, non ? ✨

## L'appliquer au HTML

L'astuce ci-dessus est souvent utilisée pour générer une chaîne HTML à partir d'un tableau. Disons que nous aimerions renvoyer une liste non ordonnée (une `<ul>` avec des éléments `<li>`) du tableau `users` ci-dessus. Au lieu de l'écrire avec `.forEach`, vous pouvez utiliser l'astuce précédente comme suit :

```javascript
const html = `<ul>
    ${users.map((user) => `<li>${user.name}</li>`).join("")}
    </ul>`;
console.log(html); // <ul><li>Sam Doe</li><li>Alex Blue</li></ul>
```

Remarquez comment pour chaque utilisateur, nous renvoyons un élément `<li>...</li>` avec le nom de l'utilisateur à l'intérieur. Ce qui est très important ici, c'est l'utilisation de `.join("")`. Si vous oubliez cette étape, vous obtiendrez le code HTML suivant :

```html
<ul>
  <li>Sam Doe</li>,<li>Alex Blue</li>
</ul>
```

En effet, le tableau renvoyé par `.map()` sera automatiquement converti en chaîne par le navigateur, qui appellera automatiquement la méthode `.toString()`, insérant une virgule après chaque élément du tableau.

Au lieu de cela, vous souhaitez convertir vous-même le tableau en chaîne. Vous pouvez le faire en appelant `.join("")` avec une chaîne vide comme séparateur.

Enfin, vous devez envelopper toute la chaîne avec les balises `<ul>` d'ouverture et de fermeture.

Vous n'êtes pas nécessairement obligé d'utiliser cette approche, mais nous vous recommandons de vous y habituer car elle (ou une adaptation très similaire) est très fréquemment utilisée dans les bibliothèques et frameworks front-end (React, Angular, lit-element, etc.).

```

