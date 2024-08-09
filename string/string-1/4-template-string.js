//Your first template string

`This is a template string`
/*
La seule différence est que les chaînes de modèle commencent et se terminent par un `caractère backtick .*/


/*
Multiline strings

Contrairement aux chaînes entre guillemets simples et doubles, les chaînes de modèles peuvent s'étendre sur plusieurs lignes. Voici un exemple :


let text = `This is a multiline
string that
just works!`
Alors que cela n'aurait pas été possible avec une chaîne normale (guillemets simples ou guillemets doubles).
*/

/*
Interpolation

Les template string prennent en charge l'interpolation ! Cela signifie que vous pouvez écrire une variable dans votre chaîne et obtenir sa valeur. La syntaxe est simple, vous entourez le nom de votre variable d'un signe dollar et d'accolades. Prenons un exemple où nous avons une variable languageavec une valeur deJavaScript .

let language = "JavaScript";
`I am learning ${language}`; //"I am learning JavaScript";
*/

/*
Résumer
Une chaîne de modèle est une chaîne créée avec le caractère backtick :`
Les chaînes de modèle peuvent s'étendre sur plusieurs lignes
Les chaînes de modèle prennent en charge l'interpolation avec la ${variableName}syntaxe
*/