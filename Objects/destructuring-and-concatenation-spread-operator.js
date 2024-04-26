/* 
//********************************************************************** Déstructuration et concaténation **************************************************************

Dernière mise à jour en septembre 2022
Tout comme la déstructuration de tableaux, vous pouvez déstructurer des paires clé/valeur (ou des objets imbriqués) d'un objet. Le concept est similaire, sauf que 
vous devez utiliser {}à la place []du côté gauche de l' =opérateur et que vous devez avoir un objet sur le côté droit de l' =opérateur .

Jetons un coup d'œil à quelques exemples. En supposant l'objet suivant :
 */
const config = {
  id: 1,
  isAdmin: false,
  theme: {
    dark: false,
    accessibility: true,
  },
};
//Voici comment accéder à certaines de ses propriétés et créer des variables à partir d'elles :
/* const id = config.id;
const isAdmin = config.isAdmin;
const theme = config.theme; */

//Cela peut être refactorisé avec la déstructuration d'objet comme suit :

const { id, isAdmin, theme } = config;

/* La nouvelle id variable est créée à partir de config.id. Ainsi, les noms de variables doivent correspondre aux noms de clés. Nous aborderons la déstructuration et le renommage dans une section ci-dessous.

Vous pouvez également décider de déstructurer uniquement les variables dont vous avez besoin, par exemple :


const {isAdmin, theme} = config;
La déstructuration d'objets est considérée comme du sucre syntaxique, ce qui signifie qu'elle facilite la lecture du code (une fois que vous vous y êtes habitué). 


//************* Déstructuration avec valeur par défaut
Il est également possible de déstructurer avec une valeur par défaut, ce qui signifie que vous pouvez attribuer une valeur par défaut à une propriété si elle n'existe pas dans l'objet à partir duquel vous effectuez la déstructuration. Par exemple:

*/
const user = {
  id: 1,
  name: "Sam",
};

const { name, isAdmins = false } = user;
console.log(isAdmins); // false

//Comme vous pouvez le voir, isAdminc'est la valeur par défaut falsecar elle n'existe pas sur user.

/* const user = {
    id: 1,
    name: "Sam",
    isAdmin: true
};

const {name, isAdmin = false} = user;
console.log(isAdmin); // true

Alors que, dans cet exemple, il n’a pas été utilisé par défaut falsecar il existe et userest donc simplement déstructuré. */

//********** Destructure and rename

/* Il est également possible de déstructurer et de renommer un objet. Par exemple, disons que vous disposez déjà d'une name variable et que vous souhaitez la 
déstructurer user.name et l'attribuer à une variable appelée userName. Voici comment procéder :


const name = "Document title"; // name variable is already declared

const user = {
    id: 1,
    name: "Sam",
    isAdmin: true
};

/// destructure user.name into variable userName

const {name: userName, isAdmin} = user;
console.log(userName); // "Sam" 


Voici un autre exemple où nous déstructurons user.isAdmin en une nouvelle variable admin (notez que nous la déstructurons et la renommons) :

const user = {
    id: 1,
    name: "Sam",
    isAdmin: true
};

const {id, name, isAdmin: admin} = user;
/// We've renamed isAdmin to admin while destructuring
console.log(admin); // true
*/

//********* concatenation des objets (... spread operator)
//Concaténer des objets
//Dans certains scénarios, vous souhaitez fusionner 2 objets ensemble. Vous pouvez le faire en utilisant l' ...opérateur spread .

const firstPerson = {
  name: "Sam",
  age: 18,
};

const secondPerson = {
  age: 25,
  type: "admin",
};

const mergedObjects = { ...firstPerson, ...secondPerson };
console.log(mergedObjects); // {name: "Sam", age: 25, type: "admin"}

/* 
Remarquez comment le nouvel objet s'est retrouvé avec nameet typeà partir des deux objets. Cependant, concernant le age, puisqu'il existe dans les deux objets, seul le 2ème a persisté.
C'est pourquoi l'ordre des objets est important lors de leur diffusion.

//***************résumer
Tout comme la déstructuration de tableaux, vous pouvez déstructurer des paires clé/valeur (ou des objets imbriqués) d'un objet.
Il est également possible de déstructurer avec une valeur par défaut, ce qui signifie que vous pouvez attribuer une valeur par défaut à une propriété si elle n'existe pas dans l'objet à partir duquel vous effectuez la déstructuration.
Vous pouvez fusionner des objets avec l' ...opérateur. L'ordre des objets est important (pour les clés en double). */
