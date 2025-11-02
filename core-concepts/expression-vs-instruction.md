

> **Instruction (statement)** vs **Expression**

C'est une **notion fondamentale en JavaScript** :

C’est une différence subtile, mais **très importante** pour bien comprendre le langage et des syntaxes comme les fonctions fléchées, les conditions ternaires, ou encore les retours implicites.

---

## 🟦 1. 📌 **Définition simple**

| Terme           | Définition                                                                                                                              |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| **Expression**  | ✨ Produit une **valeur**. Elle peut être utilisée **à l’intérieur d’une autre expression**.                                             |
| **Instruction** | 🧱 Fait **quelque chose** (déclare, contrôle le flux, exécute), mais **ne renvoie pas directement de valeur** utilisable à cet endroit. |

👉 En gros :

* 📝 **Expression** = quelque chose qui **a un résultat**
* 🧱 **Instruction** = quelque chose qui **fait une action**

---

## 🟨 2. 🧠 **Exemples concrets**

### ✅ **Expressions**

Toutes ces lignes **produisent une valeur** :

```javascript
2 + 3        // produit 5
x * 2        // produit une valeur dépendant de x
"Bonjour"    // produit une chaîne
true         // produit un booléen
x > 10       // produit true ou false
(2 + 3) * 4  // produit 20
```

👉 Ces expressions peuvent être :

* assignées à une variable
* passées en argument à une fonction
* retournées par une fonction

Exemple :

```javascript
const resultat = 2 + 3;   // ✅ 2+3 est une expression
console.log( x * 2 );     // ✅ x*2 est une expression utilisée comme argument
```

---

### 🧱 **Instructions (Statements/déclarations)**

Elles **ne produisent pas de valeur utilisable** directement, elles contrôlent ou déclarent :

```javascript
let x = 2;       // déclaration (instruction)
if (x > 3) { }   // instruction de contrôle
for (let i = 0; i < 5; i++) { }  // est une instruction (en anglais : statement) plus précisément, c’est une boucle for, qui contrôle le flux d’exécution (elle répète une action un certain nombre de fois et elle ne produit aucune valeur que tu pourrais réutiliser ailleurs.
return x;       // instruction de retour (dans une fonction)
break;          // instruction de sortie de boucle
```

Une expression doit pouvoir produire une valeur que tu peux affecter ou passer ailleurs, par exemple :
```javascript
const s = 2 + 3;  // ✅ expression → 5
```

Mais tu ne peux pas faire ça avec une boucle for :
```javascript
const resultat = for (let i = 0; i < 5; i++) { };  
// ❌ Erreur de syntaxe → car "for" est une instruction, pas une expression
``` 

Le mot-clé for ne retourne pas de valeur, il exécute une série d’instructions (dans le bloc { ... }) un certain nombre de fois.


---

## 🟧 3. 🎯 Pourquoi `x * 2` est une **expression**

Dans cette fonction fléchée :

```javascript
const doubler = x => x * 2;
```

* `x * 2` → calcule une valeur
* Cette valeur est **automatiquement retournée** par la fonction

👉 Si c’était une instruction comme `let y = x * 2;`, tu ne pourrais **pas la retourner implicitement**, car une instruction **ne peut pas être utilisée comme une valeur**.

---

## 🟨 4. 📝 Cas typique qui montre bien la différence

```javascript
// ✅ Expression
const a = (2 + 3) * 4;   // ok

// ❌ Instruction dans une expression → erreur
const b = if (true) { 1 } else { 2 };   // ❌ Erreur de syntaxe
```

Mais avec une **expression conditionnelle (ternaire)**, ça fonctionne :

```javascript
const c = true ? 1 : 2;  // ✅ Expression → produit 1 ou 2
```

---

## 🟩 5. 📌 Tableau récapitulatif

|                                                | **Expression**                   | **Instruction (Statement)**         |
| ---------------------------------------------- | -------------------------------- | ----------------------------------- |
| Produit une valeur ?                           | ✅ Oui                            | ❌ Non                               |
| Peut être utilisée dans une autre expression ? | ✅ Oui                            | ❌ Non                               |
| Exemples                                       | `2 + 3`, `x * 2`, `true ? 1 : 2` | `if`, `for`, `let x = 2;`, `return` |
| Retour implicite possible (arrow function) ?   | ✅ Oui                            | ❌ Non                               |

---

## 🧠 Pourquoi cette distinction est utile

* Les **fonctions fléchées** sans accolades **doivent avoir une **expression** après `=>`, car cette expression est retournée implicitement.
* Si tu mets une **instruction**, le moteur JS ne peut pas la « retourner ».

Exemple :

```javascript
const test = () => let x = 2;  // ❌ Erreur → `let` est une instruction
const test2 = () => 2 + 3;    // ✅ Ok → expression
```

---

## ✅ En résumé simple

> 🔸 **Expression** = « donne une valeur » → peut être retournée implicitement
> 🔸 **Instruction** = « fait une action » → doit être écrite dans un bloc avec `{}` et souvent avec `return` explicite si tu veux renvoyer une valeur.

---

