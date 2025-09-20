
````markdown
# Les boucles en JavaScript

---

## 🔄 Boucle `while` (« tant que »)

> Permet d’exécuter du code **tant que** la condition est vraie.

```javascript
let i = 0;
while (i < 10) { 
  console.log("Bonjour " + i);
  i += 1;
}
```

---

## 🔁 Boucle `for` 

> Utilisée pour **itérer un nombre de fois défini**.

### Exemple 1 : simple compteur

```javascript
for (let i = 0; i < 10; i++) {
  console.log("Bonjour");
}
```

### Exemple 2 : parcourir un tableau

```javascript
const notes = [2, 19, 8, 12, 3];
for (let i = 0; i < notes.length; i++) {
  console.log(i);        // 0, 1, 2, 3, 4 (index)
  console.log(notes[i]); // 2, 19, 8, 12, 3 (valeurs)
}
```

💡 La boucle `for` est pratique pour parcourir les éléments d’un tableau
ou pour effectuer un nombre d’itérations fixe.

---

## 📌 Boucle `for…in`

> Sert à **itérer sur les clés** d’un objet ou les **index** d’un tableau.  
> Elle n’est pas faite pour parcourir directement les valeurs.

### Exemple avec un tableau

```javascript
const notes = [2, 19, 8, 12, 3];
for (let i in notes) {
  console.log(i);        // 0, 1, 2, 3, 4 (index)
  console.log(notes[i]); // 2, 19, 8, 12, 3 (valeurs via index)
}
```

### Exemple avec un objet

```javascript
const user = { name: "Luis", age: 28 };

for (let key in user) {
  console.log(key);       // name, age
  console.log(user[key]); // Luis, 28
}
```

⚠️ Sur une chaîne, `for...in` renvoie les index, pas les lettres.  
👉 Préférer `for...of` pour les chaînes.

```javascript
const greeting = "Bonjour";
for (let i in greeting) {
  console.log(i); // 0, 1, 2, 3, 4, 5, 6 (index)
}
```

---

## 🔍 Boucle `for…of`

> Permet d’itérer directement sur les **valeurs**.  
> Fonctionne avec les objets **itérables** : tableaux, chaînes, Map, Set, NodeList, etc.  
> Introduite avec ES6 (2015).

### Exemple sur un tableau

```javascript
const notes = [2, 19, 8, 12, 3];
for (let note of notes) {
  console.log(note); // 2, 19, 8, 12, 3
}
```

### Exemple sur une chaîne de caractères

```javascript
const greet = "Bonjour";
for (let letter of greet) {
  console.log(letter); // B o n j o u r
}
```

💡 Différence clé :  
- `for…in` → parcourt les **index/clés**  
- `for…of` → parcourt directement les **valeurs**  
👉 Donc pour les tableaux et chaînes, **privilégie `for...of`**.

---

## ✅ Résumé rapide

- `while` → tant qu’une condition est vraie.  
- `for` → boucle avec compteur défini.  
- `for…in` → parcourt les **clés / index** (utile pour les objets).  
- `for…of` → parcourt directement les **valeurs** (utile pour tableaux, chaînes, etc.).  
````

---

👉 Veux-tu que je te fasse aussi un **schéma visuel (style tableau comparatif)** entre `for`, `for...in` et `for...of` que tu pourrais rajouter à ta doc pour bien voir la différence en un coup d’œil ?
