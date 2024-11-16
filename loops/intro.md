```markdown
# **Définition**

Une **boucle** en programmation est une structure de contrôle qui permet d'exécuter une séquence d'instructions de manière répétée tant qu'une condition spécifique est remplie, ou jusqu'à ce qu'une autre condition soit atteinte.

Les boucles sont un **élément fondamental** en programmation, car elles permettent d'automatiser des tâches répétitives. En **JavaScript**, deux des types de boucles les plus couramment utilisés sont la **boucle `while`** et la **boucle `for`**.

---

## **1. Boucle `while`**

### Définition :
La boucle `while` exécute un bloc d'instructions tant qu'une condition spécifiée reste vraie.

### Syntaxe :

```javascript
while (condition) {
  // instructions à exécuter tant que la condition est vraie
}
```

### Exemple :

```javascript
let count = 0;
while (count < 5) {
  console.log(`Count is: ${count}`);
  count++; // incrémentation pour éviter une boucle infinie
}
```

---

## **2. Boucle `for`**

### Définition :
La boucle `for` regroupe l'**initialisation**, la **condition** et l'**itération** dans une seule ligne, offrant une structure plus compacte.

### Syntaxe :

```javascript
for (initialisation; condition; itération) {
  // instructions à exécuter tant que la condition est vraie
}
```

### Exemple :

```javascript
for (let i = 0; i < 5; i++) {
  console.log(`Iteration: ${i}`);
}
```

---

## **Comparaison et Utilisation**

| Type de Boucle  | Utilisation idéale                                                                 |
|------------------|-----------------------------------------------------------------------------------|
| **Boucle `while`** | Utilisée lorsque vous ne savez pas à l'avance combien de fois la boucle s'exécutera. |
| **Boucle `for`**   | Préférée lorsque vous connaissez le nombre exact d'itérations à effectuer.          |

---

Les deux boucles sont essentielles en **JavaScript** et permettent de gérer des **opérations répétitives**, de parcourir des **séquences de données** et de créer des algorithmes automatisés.
```