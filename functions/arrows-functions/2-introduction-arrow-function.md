# Arrow Functions

Nous allons découvrir comment écrire des fonctions fléchées. Une fonction fléchée présente trois avantages principaux :

1. **C'est plus court à écrire.**
2. **Elle utilise la portée lexicale** (cela sera expliqué dans un chapitre ultérieur lorsque nous aborderons les classes).
3. **Elle peut bénéficier d’un retour implicite** (cela sera expliqué dans le chapitre suivant).

Voici un exemple de fonction fléchée :

```javascript
const sum = (a, b) => {
    return a + b;
};
```

Si vous n'avez jamais vu de fonction fléchée, la syntaxe peut paraître étrange au début. Cependant, une fois habitué (cela peut prendre quelques jours), vous remarquerez qu'elle est facile à lire et à écrire.

---

## From Function to Arrow Function

Dans cette section, nous vous montrerons comment convertir une fonction classique en fonction fléchée. Ces étapes sont utiles pour introduire le concept des fonctions fléchées. Une fois que vous vous serez habitué, vous pourrez écrire directement des fonctions fléchées.

### Exemple de fonction classique

Vous pouvez définir une fonction de différentes manières en JavaScript. Par exemple :

```javascript
function sum(a, b) {
    return a + b;
}
```

Cette fonction peut aussi être écrite ainsi :

```javascript
const sum = function(a, b) {
    return a + b;
};
```

Ici, nous définissons une variable `sum` et lui assignons une fonction anonyme prenant deux paramètres `a` et `b`.

---

### Conversion en fonction fléchée

Convertir cette fonction en fonction fléchée se fait en **deux étapes** :

1. **Supprimez le mot-clé `function`.**
2. **Ajoutez une flèche (`=>`) entre les paramètres `(a, b)` et l’accolade ouvrante `{`.**

Cela donne :

```javascript
const sum = (a, b) => {
    return a + b;
};
```

Les fonctions fléchées commencent toujours par les paramètres, suivis de la flèche `=>`, puis du corps de la fonction.

---

## Are Functions Obsolete?

Non. Vous pouvez continuer à écrire des fonctions classiques, elles ne sont pas obsolètes. C'est pourquoi les 8 premiers chapitres de ce cours utilisaient des fonctions normales. Il est essentiel de savoir les écrire, car elles sont encore très courantes.

Cependant, il est recommandé d'utiliser des fonctions fléchées en raison de leurs avantages.

---

## Recap

- **Les fonctions fléchées sont plus courtes à écrire.**
- **Elles commencent par les paramètres, suivis de la flèche `=>`, puis du corps de la fonction.**