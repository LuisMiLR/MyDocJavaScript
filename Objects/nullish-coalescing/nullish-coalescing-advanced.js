/* 
//*************************************************************************** nullish coalescing advanced **************************************************************
//**********************************************************************************************************************************************************************

La coalescence nulle peut être utilisée avec chaînage optionnel. L'utilisation principale ici est d'accéder en toute sécurité à une propriété qui pourrait être nulle
tout en pouvant également définir par défaut une certaine valeur. 
Par exemple:
*/
let name = undefined;
if (user.details && user.details.name && user.details.name.firstName) {
  name = user.details.name.firstName;
} else {
  name = "N/A";
}

//Le code ci-dessus peut être refactorisé comme suit :
const Name = user.details?.name?.firstName ?? "N/A";

/* Il peut être déroutant de voir les ?.et ??ensemble sur la même ligne, mais rappelez-vous qu'il s'agit d'opérateurs complètement différents.

Ce qui se passe ici, c'est que si à tout moment ou n'importe quelle partie de cette expression user.details?.name?.firstNamecourt-circuite et revient , nous sautons 
alors sur le côté droit de l' undefined opérateur et passons par défaut à la chaîne .null ?? "N/A" 

?Auparavant, le chaînage facultatif nous permettait d'avoir undefinedune erreur à la place. Mais undefinedce n'est pas souvent utile, parfois vous 
?aimeriez utiliser par défaut une chaîne vide ou une certaine valeur. C'est là que la combinaison d'une fusion nulle et d'un chaînage optionnel s'avère utile.


null vs undefined (nulle ou non défini)

Il peut être difficile de comprendre pourquoi nous avons les deux null et undefined en JavaScript. Nous aimerions donc proposer une distinction à laquelle vous pouvez
réfléchir avant de décider d'utiliser null ou undefined.

undefined signifie que la propriété n'a pas encore été définie. Alors que null signifie que la propriété a été définie mais est vide.

Afin de rendre le concept plus clair, nous allons vous donner un exemple qui illustre la différence :
*/
const user = {
  id: 1,
  name: "Sam",
  age: null,
};

console.log(user.age); // null
console.log(user.birthday); // undefined

/* Nous signifions null ici que la age propriété a été définie, mais n'a pas encore de valeur.
Vous pouvez voir cette distinction lorsque nous essayons de nous connecter user.age et user.birthday. La birthday propriété n'a pas encore été définie, 
c'est pourquoi elle renvoie undefined.

Cela nous a poussé à utiliser la valeur null for age afin que nous puissions clairement dire que la age propriété a été définie mais n'a pas encore de valeur.

Si nous avions donné une valeur undefined à age(ce qui est possible), alors cette distinction ne serait plus vraie.

N'oubliez pas cependant que cette nécessité de faire cette distinction n'est pas très courante. 


//****** Priorité des opérateurs
Il est important de se rappeler que l’opérateur de coalescence nul a une faible priorité d’opérateur. Cela signifie que lorsqu'il est trouvé avec d'autres
opérateurs tels que +ou -et qu'aucune parenthèse n'est utilisée, les autres opérateurs seront évalués en premier. Jetons un coup d'œil à un exemple :
*/

const uzer = {
  id: 1,
};

const result = 2 + uzer.age ?? 18;
console.log(result); // NaN

/* JavaScript l'exécute comme suit : (2 + user.age) ?? 18Because +a une priorité d'opérateur plus élevée que ??.
?Pour éviter de tels problèmes, vous devez placer ??l'utilisation entre parenthèses chaque fois que vous utilisez d'autres opérateurs dans la même expression .

const user = {
     id: 1
}

const result = 2 + (user.age ?? 18);
console.log(result); // 20

//******** résumer
La coalescence nulle peut être utilisée avec un chaînage facultatif.
L'utilisation principale ici est d'accéder en toute sécurité à une propriété qui pourrait être nulle tout en pouvant également définir par défaut une certaine valeur.
undefined vs null: 
undefined signifie que la propriété n'a pas encore été définie. 
Alors que cela null signifie que la propriété a été définie mais est vide.

//****** Récapitulatif du chapitre
L'opérateur de fusion nul ??est un nouvel opérateur introduit dans JavaScript qui vous permet de définir par défaut une certaine valeur lorsque le côté gauche est une valeur nulle.
Une valeur nulle est une valeur qui est soit nullou undefined.
L'opérateur de coalescence nul fera un court-circuit si le côté gauche renvoie une valeur non nulle. Cela signifie qu’il n’exécutera pas le côté droit.
Vous ne pouvez utiliser la fusion nulle que lorsque la variable est définie.
La coalescence nulle peut être utilisée avec un chaînage facultatif.
L'utilisation principale ici est d'accéder en toute sécurité à une propriété qui pourrait être nulle tout en pouvant également définir par défaut une certaine valeur.
undefinedvs. null: undefinedsignifie que la propriété n'a pas encore été définie. D'un autre côté, nullcela signifie que la propriété a été définie mais qu'elle est vide.


*/
