# More String Methods

## `String.split(separator)`

La méthode `.split(separator)` divise la chaîne en un tableau de sous-chaînes en fonction du séparateur que vous fournissez. Par exemple :

```javascript
let apps = "Calculator,Phone,Contacts";
let appsArray = apps.split(",");
console.log(appsArray); // ["Calculator", "Phone", "Contacts"]
```

Pour rappel, l'opposé de String.split(separator) serait Array.join(glue).

## `String.replace(search, replace)`

La méthode `.replace(search, replace)` renvoie une nouvelle chaîne où la **première occurrence** du paramètre `search` que vous fournissez est remplacée par le paramètre `replace`. Par exemple :

```javascript
const message = "You are welcome.";
let newMessage = message.replace(" ", "_"); 
console.log(newMessage); // "You_are welcome." (only the first occurrence is replaced)
console.log(message); // "You are welcome." (original string remains unchanged)
```

Dans cet exemple, nous recherchons le caractère `" "` (espace) et le remplaçons par le caractère `"_"` (soulignement).
👉 Remarquez qu’il **ne remplace que la première correspondance**.

Si vous souhaitez remplacer **toutes les occurrences**, vous pouvez utiliser la méthode **`.replaceAll()`** (voir ci-dessous).
Il est également possible de passer une **expression régulière** comme premier paramètre pour effectuer des correspondances multiples,
mais l’usage de **`.replaceAll()`** est généralement **plus simple**.

🔗 [MDN : String.replace()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/String/replace)

---

## `String.replaceAll(search, replace)`

Cette méthode fonctionne comme la précédente, **à l’exception qu’elle remplacera toutes les occurrences**.

### Exemple

```javascript
const message = "You are welcome.";
message.replaceAll(" ", "_"); // "You_are_welcome";
console.log(message); // "You are welcome" (original string is not changed)
```

🔗 [MDN : String.replaceAll()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll)

---

## 🧩 Bilan

| Méthode                                  | Description                                                               |
| ---------------------------------------- | ------------------------------------------------------------------------- |
| **`String.split(separator)`**            | Divise la chaîne en un tableau en la séparant avec le `separator` fourni. |
| **`String.replace(search, replace)`**    | Remplace **la première occurrence** de `search` par `replace`.            |
| **`String.replaceAll(search, replace)`** | Similaire à `.replace()`, mais remplace **toutes les occurrences**.       |

---
