# More String Methods

## `String.split(separator)`

La méthode `.split(separator)` divise la chaîne en un tableau de sous-chaînes en fonction du séparateur que vous fournissez. Par exemple :

```javascript
let apps = "Calculator,Phone,Contacts";
let appsArray = apps.split(",");
console.log(appsArray); // ["Calculator", "Phone", "Contacts"]
```

## `String.replace(search, replace)`

La méthode `.replace(search, replace)` renvoie une nouvelle chaîne où la **première occurrence** du paramètre `search` que vous fournissez est remplacée par le paramètre `replace`. Par exemple :

```javascript
const message = "You are welcome.";
let newMessage = message.replace(" ", "_"); 
console.log(newMessage); // "You_are welcome." (only the first occurrence is replaced)
console.log(message); // "You are welcome." (original string remains unchanged)
```

**Remarque** : La méthode `.replace()` remplace uniquement la **première occurrence** par défaut. Si vous souhaitez remplacer toutes les occurrences, vous pouvez utiliser une expression régulière globale (par exemple, `/ /g`).
```
