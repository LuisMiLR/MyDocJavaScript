

````markdown
# Les boucles en JavaScript

---

## 🔄 Boucle `while` (« tant que »)

> Permet d’exécuter du code **tant que** la condition est vrai.

```javascript
let i = 0;
while (i > 10) {
  console.log("Bonjour" + i);
  i += 1;
}
````

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
  console.log(i);        // 0, 1, 2, 3, 4
  console.log(notes[i]); // 2, 19, 8, 12, 3
}
```

💡 La boucle `for` est pratique pour parcourir les éléments d’un tableau
ou pour effectuer un nombre d’itérations fixe.

---

## 📌 Boucle `for…in`

> Sert à **itérer sur les clés** d’un objet ou d’un tableau.
> Plus concise qu’un `for` classique.

### Exemple avec un tableau

```javascript
const notes2 = [2, 19, 8, 12, 3];
for (let i in notes2) {
  console.log(i);       // 0, 1, 2, 3, 4
  console.log(notes2[i]); // 2, 19, 8, 12, 3
}
```

### Exemple avec un objet

```javascript
const notes3 = { a: 1, b: 3 };

for (let i in notes3) {
  console.log(i);        // a, b
  console.log(notes3[i]); // 1, 3
}
```

### Exemple avec une chaîne de caractères

```javascript
const greeting = "Bonjour";
for (let letter in greeting) {
  console.log(letter); // 0, 1, 2, 3, 4, 5, 6
}

// Une string est comme un tableau de lettres :
greeting[0]; // 'B'
```

---

## 🔍 Boucle `for…of`

> Permet d’itérer directement sur les **valeurs** (fonctionne sur les objets itérables : tableaux, chaînes…).

### Sur un tableau

```javascript
const notes = [2, 19, 8, 12, 3];
for (let note of notes) {
  console.log(note); // 2, 19, 8, 12, 3
}
```

### Sur une chaîne de caractères

```javascript
const greet = "Bonjour";
for (let letter of greet) {
  console.log(letter); // B o n j o u r
}
```

> 💡 Contrairement à `for…in` qui renvoie l’**index**,
> `for…of` renvoie directement chaque **valeur**.

---

```
