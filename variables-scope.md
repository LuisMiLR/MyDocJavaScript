# La portée des variables

La portée des variables fait référence au contexte dans lequel une variable est déclarée et peut être utilisée. Il existe deux principaux types de portée : **globale** et **locale**.

## La portée globale

Une variable déclarée en dehors de toute fonction ou bloc de code est une variable **globale**. Cela signifie qu'elle peut être accédée depuis n'importe où dans le programme, y compris à l'intérieur des fonctions.

### Exemple :

```javascript
const variableGlobale = 10;

function exampleFunction() {
  console.log(variableGlobale); // Accède à la variable globale
}

exampleFunction();
console.log(variableGlobale); // Accède également à la variable en dehors de la fonction
```

Dans cet exemple, `variableGlobale` est une variable globale et peut être utilisée à l'intérieur de la fonction `exampleFunction` ainsi qu'en dehors de celle-ci.

---

## La portée locale

Une variable déclarée à l'intérieur d'une fonction ou d'un bloc de code est une variable **locale**. Elle n'est accessible que dans cette fonction ou ce bloc de code.

### Exemple :

```javascript
function exampleFunction2() {
  const variableLocale = 20;
  console.log(variableLocale); // Accède à la variable locale
}

exampleFunction2();
console.log(variableLocale); // Génére une erreur car la variable est déclarée dans la fonction
```

Dans cet exemple, `variableLocale` est une variable locale et ne peut être utilisée qu'à l'intérieur de la fonction `exampleFunction2`. Tenter de l'accéder en dehors de la fonction génère une erreur.

---

## Variables non déclarées (dangereuses)

Il ne faut pas déclarer une variable sans utiliser `var`, `let`, ou `const`, car cela revient à la déclarer implicitement comme une variable globale, même si elle est utilisée à l'intérieur d'une fonction ou d'un bloc de code.

### Exemple incorrect :

```javascript
variable = 4; // Ceci est incorrect, car cela revient à la déclarer globalement
```

Cela est équivalent à écrire :

```javascript
var variable = 4;
```

---

## Let et Const dans des blocs de code

Les variables déclarées avec `let` et `const` sont accessibles uniquement dans le bloc de code ou la fonction dans laquelle elles sont déclarées, ainsi que dans les blocs enfants.

### Exemple :

```javascript
if (true) {
  let variableLet = 30;
  const variableConst = 40;
  console.log(variableLet);  // Accès valide
  console.log(variableConst); // Accès valide
}

console.log(variableLet);  // Erreur : variableLet n'est pas définie
console.log(variableConst); // Erreur : variableConst n'est pas définie
```

Dans cet exemple, `variableLet` et `variableConst` sont déclarées dans un bloc `if`, et elles ne sont accessibles que dans ce bloc et non en dehors.

---

## Conclusion

- Les **variables globales** peuvent être utilisées n'importe où dans le code.
- Les **variables locales** ne sont accessibles que dans la fonction ou le bloc de code dans lequel elles sont déclarées.
- **`let`** et **`const`** offrent une meilleure encapsulation des variables en limitant leur portée aux blocs de code spécifiques.
- Évitez de déclarer des variables sans `var`, `let`, ou `const`, car cela peut entraîner des erreurs imprévisibles en rendant la variable globale implicitement.
```