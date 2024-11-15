# Implicit conversion & falsy values

Dans cette leçon, nous expliquerons comment la conversion implicite se produit dans les contextes booléens. Par exemple, nous savons que l'instruction `if` attend une condition qui donne un booléen. Mais que se passe-t-il lorsque nous lui donnons une chaîne ou un nombre ?

```javascript
const name = "Sam";
const number = 0;

if (name) {
    console.log("First condition");
}

if (number) {
    console.log("second condition");
}
```

Le code ci-dessus ne produira que "First condition". Le deuxième `console.log` ne s'exécutera pas. Voyons pourquoi.

## Conversion implicite

L'instruction `if` attend une valeur booléenne. Cependant, lorsque vous lui fournissez une valeur d'un autre type, elle la convertit automatiquement en valeur booléenne. C'est ce qu'on appelle **la conversion implicite**, car la conversion s'effectue automatiquement.

Comment les valeurs sont-elles converties en booléen ? Qui décide que `"Sam"` est `true`, tandis que `""` est `false` et que `30` est `true` alors que `0` est `false` ?

C’est là qu’entrent en jeu les valeurs **falsy**.

## Valeurs falsy

En JavaScript, les valeurs ci-dessous seront converties en `false`, et tout le reste sera converti en `true` :

- `false` (déjà un booléen)
- `null`
- `undefined`
- `0` / `-0`
- `NaN`
- `""` (chaîne vide)
- `document.all`

Ces valeurs ci-dessus sont appelées **falsy values** car, une fois converties en booléen, elles seront converties en `false`.

Si vous y réfléchissez, `null`, `undefined`, et `0` représentent tous « rien ». C'est pourquoi ils sont convertis en `false`. La chaîne vide `""` devient également `false`, ce qui est utile dans des contextes comme le DOM, où un champ de texte vide a une valeur de `""` (convertie en `false`).

## Opérateur logique NON (!)

Si vous souhaitez convertir une valeur booléenne en son opposé, vous pouvez utiliser l'opérateur `!` (opérateur logique NON). Voici comment cela fonctionne :

```javascript
!true; // false
!false; // true
```

Ceci est souvent observé dans les conditions `if` comme ci-dessous :

```javascript
// read it as: if NOT name
if (!name) {
    // 
}
```

L'exemple ci-dessus sera revisité une fois que nous en saurons plus sur le DOM.

## Résumer

- La **conversion implicite** se produit lorsque JavaScript attend une valeur booléenne mais reçoit une valeur non booléenne.
- La conversion implicite signifie que JavaScript convertira automatiquement la valeur en booléen.
- Les **valeurs falsy** sont converties en `false`. Tout le reste est converti en `true`.
- Les valeurs falsy les plus courantes sont : `false`, `null`, `undefined`, `0`, `""`, `NaN`.
- L'opérateur logique **NOT** `!` convertit une valeur booléenne en son opposé.
```

