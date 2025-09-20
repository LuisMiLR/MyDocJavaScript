## 1. Programmation impérative
 **Idée principale** : dire **comment faire** les choses, étape par étape.

* On décrit une **suite d’instructions** qui modifient l’état du programme.
* Le programmeur contrôle **le “comment”**.

### Exemple en JavaScript (impératif) :

```js
// On veut une liste des nombres carrés
const numbers = [1, 2, 3, 4, 5];
let squares = [];

for (let i = 0; i < numbers.length; i++) {
  squares.push(numbers[i] * numbers[i]);
}

console.log(squares); // [1, 4, 9, 16, 25]
```

Ici, tu dis explicitement :

* démarre une boucle,
* parcours chaque élément,
* calcule son carré,
* ajoute-le dans un tableau.

---

## 2. Programmation déclarative

👉 **Idée principale** : dire **ce qu’on veut obtenir**, pas comment le faire.

* On décrit **le résultat attendu**, et c’est le langage ou la bibliothèque qui s’occupe du “comment”.
* Le programmeur contrôle **le “quoi”**.

### Exemple en JavaScript (déclaratif) :

```js
const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(n => n * n);

console.log(squares); // [1, 4, 9, 16, 25]
```

Ici, tu dis simplement :

* “Je veux un nouveau tableau avec chaque élément mis au carré”.
  Tu ne gères pas la boucle, c’est `map()` qui s’en occupe.



## 3. Différences clés

| Caractéristique | Impératif                                     | Déclaratif                                                        |
| --------------- | --------------------------------------------- | ----------------------------------------------------------------- |
| **Focus**       | Le *comment* (les étapes)                     | Le *quoi* (le résultat)                                           |
| **Style**       | Suite d’instructions                          | Description du résultat                                           |
| **Exemples**    | Boucles `for`, variables modifiées, `if/else` | `map()`, `filter()`, SQL, React JSX                               |
| **Analogies**   | Donner une recette pas à pas                  | Dire au restaurant “je veux une pizza” (sans préciser la recette) |

---

## 4. Exemples concrets

* **SQL** est déclaratif :

  ```sql
  SELECT name FROM users WHERE age > 18;
  ```

  → tu dis *“je veux tous les noms des utilisateurs majeurs”*, tu ne dis pas comment parcourir la base.

* **Java / C++ classique** est plus impératif : boucles, états, instructions séquentielles.

* **React** est déclaratif :

  ```jsx
  <Button label="Envoyer" />
  ```

  → tu dis ce que tu veux afficher, pas comment le navigateur doit créer le bouton.

---

En résumé :

* **Impératif** : tu donnes un plan d’action détaillé.
* **Déclaratif** : tu exprimes ton intention, la machine gère les détails.


---

### 🌗 Zone grise entre impératif et déclaratif

La séparation entre programmation **impérative** et **déclarative** n’est pas tranchée : il s’agit plutôt d’un **continuum** d’abstraction.
Même lorsqu’un code paraît déclaratif, un moteur exécute souvent des instructions impératives en coulisses (ex. `map()` ou JSX en React).
Plus tu montes en abstraction, plus le style est déclaratif ; plus tu descends dans le détail, plus il devient impératif.
En pratique, la plupart des applications combinent les deux : on exprime l’intention (déclaratif) et on s’appuie sur des bibliothèques ou des API qui implémentent la logique étape par étape (impératif).

---




