/* 
//*********************************************************   Optional chaining (advanced) *****************************************************************************

Dans cette leçon, nous apprendrons comment utiliser le Optional chaining pour accéder aux tableaux et appeler des fonctions.

Utilisation Optional chaining avec des tableaux.

En supposant le code ci-dessous, où la clé temperatures pourrait se trouver undefined :

Dans cette leçon, nous apprendrons comment utiliser le Optional chaining pour accéder aux tableaux et appeler des fonctions.

En supposant le code ci-dessous, où la clé temperatures pourrait être undefined : 
*/

const data = {
  temperatures: [-3, 14, 4],
};

let firstValue = undefined;
if (data.temperatures) {
  firstValue = data.temperatures[0];
}

//Nous pouvons le refactoriser en :
const firstValuee = data.temperatures?.[0];

/* Remarquez comment nous avons utilisé ?.devant [0] pour accéder au premier élément du tableau. 
L'avantage du Optional chaining ici est que si data.temperatures est renvoyé null ou undefined, votre code ne sera pas interrompu. Il court-circuitera et reviendra undefined. C'est pourquoi nous avons pu nous débarrasser de cette if condition.

//********** Utilisation facultative du chaînage avec des fonctions
De même, nous pouvons utiliser le Optional chaining pour appeler des fonctions en utilisant ?.opérateur. Voici l'exemple avant le chaînage facultatif : 
*/

const person = {
  age: 43,
  name: "Sam",
};

let upperCasedName = person.name; // might be undefined
if (person.name) {
  upperCasedName = person.name.toUpperCase();
}

//Dans lequel nous pouvons refactoriser :
const upperCasedNamee = person.name?.toUpperCase();

/* Cela n'appellera la .toUpperCase() méthode que si person.name n'est pas évaluée à null ou undefined.

Si à un moment donné le code ci-dessus n'est pas clair,  essayez d'exécuter votre code sans condition if et sans optional chaining et 
notez qu'il échoue avec des erreurs telles que Cannot read property 'toUpperCase' of undefined.

Le optional chaining vous aide à éviter ces erreurs en renvoyant undefined.

Ainsi, dans le cas où person.name is null ou undefined, person.name?.toUpperCase() court-circuitera et reviendra undefined sans appeler la toUpperCase() méthode : 

const person = {
    age: 43,
};

const upperCasedName = person.name?.toUpperCase(); // undefined


//******* N’abusez pas du chaînage optionnel

Vous pourriez être tenté de commencer à utiliser le chaînage facultatif au lieu de chaque notation par points, mais vous ne devriez pas le faire. 
Une utilisation excessive peut entraîner des bugs inattendus et une mauvaise qualité du code.

Vous pouvez le considérer comme suit : lorsque je (ou d'autres programmeurs) vois ?.dans le code, cela signifie qu'il y a une chance modérée que la valeur renvoie 
undefined. En retour, cela signifie que nous devrions traiter l’affaire à son retour undefined.

Par exemple, le code ci-dessous ne gère pas de nombreux cas, comme un tableau vide :
*/

const sum = (values) => {
  return values?.[0] + values?.[1];
};

sum([2, 3]); // 5
sum([]); // NaN

/* Comme vous pouvez le constater, même si notre code ne se casse pas, sum([]) les retours NaN peuvent à leur tour entraîner des problèmes inattendus plus tard.

Le code ci-dessus peut être corrigé en ajoutant une if condition qui vérifie si nous avons 2 entrées dans le values tableau, sinon nous renvoyons 0.

Si l'on reprend l'exemple de la section précédente, nous n'avons pas besoin ?.toUpperCase?.()ici :

const upperCasedName = person.name?.toUpperCase(); 

En effet, nous supposons que si person.name existe, ce sera une chaîne. Si c'est une chaîne, alors nous aurons la toUpperCase()méthode. Si vous pensez que cette hypothèse n'a pas de sens dans votre cas, par exemple, le nom peut exister mais être un nombre, alors vous pouvez utiliser toUpperCase?.().

Idéalement, TypeScript peut être utilisé pour gérer ces problèmes et appliquer les types dans votre base de code.

//****** Pas de chaînage facultatif pour l'affectation

Le chaînage facultatif n'est utilisé que pour la lecture . Il ne peut pas être utilisé pour des assignements.
Cela signifie que le code ci-dessous n'est pas valide et générera une erreur de syntaxe :

*/
const settings = {};

// ❌ Syntax Error
settings?.theme = "dark";

/* Au lieu de cela, vous pouvez utiliser la syntaxe suivante qui combine le chaînage facultatif et l' &&opérateur logique :
*/
const settings = {};

settings?.theme && (settings.theme = "dark");
console.log(settings); // {}

/* 
Nous vérifions s'il settings?.theme existe. Cela renvoie soit undefined lorsqu'il n'existe pas, soit la valeur de settings.theme (qui peut être n'importe quoi). 
Le && forcera alors la conversion de cette valeur en booléen.

Si c'est vrai, le côté droit de l'expression s'exécutera, en définissant le settings.theme sur "dark". Sinon, lorsque settings?.theme est undefined ou null, 
l' && opérateur court-circuitera et n'exécutera pas le côté droit de son expression.

Cela rend la settings?.theme && (settings.theme = "dark"); ligne de code sécurisée quelle que soit sa settings.themevaleur. Voici l'exemple inverse où settings?.theme 
renvoie une valeur véridique : */
const settings = {
     theme: "light"
};

settings?.theme && (settings.theme = "dark");
console.log(settings); // {theme: "dark"}

/* 
Pour que cette syntaxe fonctionne, vous devez spécifier le ( )côté droit de l'opération ; sinon, vous obtiendrez une erreur en raison de l’ordre de priorité 
des opérateurs. Ainsi, sans (), votre code s'exécutera comme s'il était écrit ainsi : 
*/
(settings?.theme && settings.theme) = "dark"; // ❌ this fails

/* 
//*********** résumer
Un chaînage facultatif peut être utilisé pour les tableaux. La syntaxe est?.[index]
Un chaînage facultatif peut être utilisé pour les fonctions. La syntaxe estfunctionName?.()
Le chaînage facultatif ne peut pas être utilisé pour l’affectation. Il n'est utilisé que pour la lecture . 

//********* Récapitulatif du chapitre
Le chaînage facultatif vous permet d'accéder à une propriété au plus profond d'un objet sans risquer une erreur si l'une des propriétés est nullou undefined.
Dans le cas où l'une des propriétés est nullou undefined, alors le ?.court-circuit sera vers undefined.
Vous ne pouvez pas utiliser de chaînage facultatif sur un objet qui n'existe peut-être pas. L'objet doit exister. Le chaînage facultatif est uniquement utilisé pour accéder à une propriété qui peut exister ou non.
Un chaînage facultatif peut être utilisé pour les tableaux. La syntaxe est?.[index]
Un chaînage facultatif peut être utilisé pour les fonctions. La syntaxe estfunctionName?.()
Le chaînage facultatif ne peut pas être utilisé pour l’affectation. Il n'est utilisé que pour la lecture .


*/