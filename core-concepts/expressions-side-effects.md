

````markdown
# Expressions en JavaScript : avec ou sans effets de bord

## 1. Définition

une **expression** est un morceau de code qui peut être évalué pour retourner une valeur. En d'autre terme c'est comme une petite équation que le langage peut calculer et résoudre pour retourner un résultat (valeur).

On distingue deux grandes catégories :

- **Expressions sans effet de bord** : elles retournent uniquement une valeur.  
- **Expressions avec effet de bord** : elles retournent une valeur et modifient l’état du programme.

---

## 2. Expressions sans effet de bord

>> Ce sont des expressions **pures** : elles calculent une valeur **sans rien changer** ailleurs.  
Elles donnent toujours le même résultat pour les mêmes entrées.

### Exemples :
```js
2 + 3              // renvoie 5
"Hello".toUpperCase()  // renvoie "HELLO"
Math.max(10, 20)   // renvoie 20
````

Ces expressions **ne modifient pas l’état du programme** : elles se contentent de retourner une valeur.

---

## 3. Expressions avec effet de bord

>> En plus de retourner une valeur, elles **modifient une variable, une structure, ou interagissent avec l’extérieur**.



### Définition simple d’effet de bord :
Un effet de bord (side effect) en JavaScript, c’est quand une expression ou une fonction **fait autre chose que juste retourner une valeur**, par exemple en **modifiant une variable, une structure de données ou l’environnement extérieur** (console, DOM, API…).

---

### Exemple sans effet de bord

```js
2 + 3   // renvoie 5, rien ne change ailleurs
```

### Exemple avec effet de bord

```js
let x = 5;
x++;    // modifie la variable x (passe de 5 à 6)
```

---

En résumé :
**Effet de bord = un changement dans le programme ou dans le monde extérieur (mémoire, variables, affichage, etc.).**



### Exemples :

```js
let x = 5;
x++;                

const arr = [1, 2];
arr.push(3);        // modifie le tableau arr → [1, 2, 3]

console.log("Salut");   // affiche dans la console

document.body.innerHTML = "Bonjour !"; // modifie la page HTML
```

➡️ Ici, le programme ou l’environnement change **après l’exécution** de l’expression.

---

## 4. Tableau comparatif

| Type d’expression      | Caractéristique principale                | Exemples                                                                     |
| ---------------------- | ----------------------------------------- | ---------------------------------------------------------------------------- |
| **Sans effet de bord** | retourne et une valeur, ne change rien        | `2+3`, `"JS".toLowerCase()`, `Math.sqrt(16)`                                 |
| **Avec effet de bord** | retourne une valeur + change quelque chose | `x++`, `arr.push(42)`, `console.log("Hi")`, `document.body.innerHTML = "ok"` |

---

## 5. Pourquoi c’est important ?

* Les **expressions sans effet de bord** sont **prévisibles** et faciles à tester.
* Les **effets de bord** sont parfois nécessaires (afficher, modifier, sauvegarder…), mais ils rendent le code moins prévisible et plus difficile à déboguer.
* En programmation fonctionnelle, on cherche à **limiter les effets de bord** pour garder un code plus fiable et maintenable.

---

## 6. Résumé

* **Sans effet de bord** → juste une valeur (aucun changement).
* **Avec effet de bord** → valeur + modification (mémoire, variables, structures, ou extérieur).

```
