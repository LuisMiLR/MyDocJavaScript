Voici la version en markdown avec les titres en anglais, comme demandé :

```markdown
# Substring

Une sous-chaîne est une partie ou une section d'une chaîne. Par exemple, "rain" est une sous-chaîne de la chaîne "brain" car vous pouvez obtenir "rain" en prenant les 4 derniers caractères.

Vous avez souvent besoin d'obtenir quelques caractères d'une chaîne plutôt que la totalité. Pour cela, nous utilisons la méthode `substring()`.

## `substring()` Signature

Une signature de fonction vous donne une explication des paramètres que vous devez transmettre pour cette méthode. Jetons un coup d'œil à la signature de `substring()` :

```javascript
someString.substring(indexStart, indexEnd);
```

Cela signifie que lorsque vous appelez `substring()`, vous pouvez lui donner deux paramètres : le premier pour `indexStart` et le second pour `indexEnd`.

- `indexStart` : la position du premier caractère que vous souhaitez inclure.
- `indexEnd` : la position du premier caractère que vous souhaitez ignorer.

```javascript
const language = "JavaScript";
language.substring(1, 4); // "ava"
```

Le paramètre `indexEnd` est facultatif, ce qui signifie que si vous ne le fournissez pas, la méthode prendra tous les caractères jusqu'à la fin de la chaîne. Voici un exemple :

```javascript
language.substring(4); // "Script"
```

### Exemple

```javascript
function skipFirstCharacter(text) {
  return text.substring(1);
}

// Sample usage - ne pas modifier
console.log(skipFirstCharacter("Xcode")); // "code"
console.log(skipFirstCharacter("Hello")); // "ello"
```

**Note** : N'utilisez pas la méthode `substr()` car elle est obsolète.
```

## Autres informations

- Une sous-chaîne est une partie d'une chaîne. Par exemple, "rain" est une sous-chaîne de "brain".
- Vous avez souvent besoin d'obtenir quelques caractères d'une chaîne plutôt que la totalité. Nous utilisons donc la méthode `substring()`.

## `substring()` Signature

- Une signature de fonction vous donne une explication des paramètres que vous devez transmettre pour cette méthode. Jetons un coup d'œil à la signature de `substring` :

```javascript
someString.substring(indexStart, indexEnd);
```

- Cela signifie que lorsque vous appelez `substring()`, vous pouvez lui donner 2 paramètres, le premier pour `indexStart` et le second pour `indexEnd`.
- `indexStart`: la position du premier caractère que vous souhaitez inclure
- `indexEnd`: la position du premier caractère que vous souhaitez ignorer

## Exemple

```javascript
const language = "JavaScript";
language.substring(1, 4); // "ava"
```

Le paramètre `indexEnd` est facultatif, ce qui signifie que vous pouvez passer `indexStart` et il prendra tout le reste jusqu'à la fin. Voici un exemple :

```javascript
language.substring(4); // "Script"
```

```javascript
function skipFirstCharacter(text) {
  return text.substring(1);
}

// Sample usage - do not modify
console.log(skipFirstCharacter("Xcode")); // "code"
console.log(skipFirstCharacter("Hello")); // "ello"
```

**Note** : N'utilisez pas `substr()` car il est obsolète.
```

il est meme plus pratique d'utiliser la méthode slice() qui fonctionne de la meme manière sur les strings et les arrays
voir fiche slice()