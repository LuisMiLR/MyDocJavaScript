# Your First Template String

```javascript
`This is a template string`
```

La seule différence est que les chaînes de modèle commencent et se terminent par un caractère backtick `` ` ``.

## Multiline Strings

Contrairement aux chaînes entourées de guillemets simples ou doubles, les template strings peuvent s'étendre sur plusieurs lignes. Voici un exemple :

```javascript
let text = `This is a multiline
string that
just works!`;
```

Cela n'aurait pas été possible avec une chaîne normale (entre guillemets simples ou guillemets doubles).

## Interpolation

Les template strings prennent en charge l'interpolation ! Cela signifie que vous pouvez insérer une variable directement dans votre chaîne et obtenir sa valeur. La syntaxe est simple : vous entourez le nom de votre variable d'un signe dollar `$` et d'accolades `{}`.

Prenons un exemple avec une variable `language` ayant pour valeur `"JavaScript"` :

```javascript
let language = "JavaScript";
`I am learning ${language}`; // "I am learning JavaScript";
```

## Résumé

- Une template string est une chaîne créée avec le caractère backtick `` ` ``.
- Les template strings peuvent s'étendre sur plusieurs lignes.
- Les template strings prennent en charge l'interpolation avec la syntaxe `${variableName}`.
```