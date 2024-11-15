```markdown
# Implicit Return

### Dernière mise à jour en octobre 2023

Lorsque vous omettez d'écrire `return` dans une fonction JavaScript, le langage fournit un **retour implicite** avec la valeur `undefined`. Cela signifie qu'il n'y a pas explicitement de `return undefined`, mais le résultat est néanmoins `undefined`.

---

### Exemple de retour implicite avec `undefined`

```javascript
const sum = (a, b) => {
    a + b;
};

console.log(sum(1, 3)); // undefined
```

Dans cet exemple, `sum(1, 3)` renvoie `undefined` car la fonction ne contient pas de `return` explicite.

---

### Implicit Return avec une fonction fléchée

Les **fonctions fléchées** permettent un retour implicite sous certaines conditions spécifiques. Voici un exemple :

```javascript
// Fonction fléchée avec retour implicite
const sum = (a, b) => a + b;

console.log(sum(1, 3)); // 4
```

**Pourquoi cela fonctionne ?**
- L'instruction unique `a + b` est implicitement retournée sans avoir besoin d'écrire `return`.
- Le retour implicite fonctionne car **toutes les conditions suivantes sont remplies** :
  1. La fonction est une fonction fléchée.
  2. Le corps de la fonction ne contient **qu'une seule instruction**.
  3. Les accolades `{}` et le mot-clé `return` sont omis.

---

### Exemple avec transformation de syntaxe

Prenons un exemple avec une fonction classique :

```javascript
const isLegal = (age) => {
    return age >= 18;
};
```

Transformons-la avec un retour implicite :

1. **Supprimer les accolades**.
2. **Supprimer le mot-clé `return`**.

Cela donne :

```javascript
const isLegal = (age) => age >= 18;
```

### Résultat final :

```javascript
console.log(isLegal(20)); // true
console.log(isLegal(16)); // false
```

---

### Recommandations d'utilisation

- **N'utilisez le retour implicite que si le corps de la fonction est court et clair.**
- Si le retour implicite compromet la **lisibilité** ou la **clarté**, utilisez un `return` explicite.

---

### Bonus : Suppression des parenthèses pour un paramètre unique

Lorsque la fonction n'a qu'un seul paramètre, les parenthèses autour du paramètre peuvent également être omises :

```javascript
const isLegal = age => age >= 18;
```

---

### Résumé

Les conditions pour un retour implicite sont :
1. La fonction doit être une **fonction fléchée**.
2. Le corps de la fonction doit contenir **une seule instruction**.
3. Les accolades `{}` et le mot-clé `return` doivent être omis.

Utilisez le retour implicite pour des fonctions **courtes et simples**. Ne sacrifiez jamais la lisibilité pour utiliser une syntaxe plus concise.

---

Dans le prochain chapitre, nous verrons comment combiner les **fonctions fléchées** avec retour implicite dans les méthodes de tableau !
```