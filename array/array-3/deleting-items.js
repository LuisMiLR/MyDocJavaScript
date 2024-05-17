/* 
//***************************************************************** Deleting items ***********************************************************************************
//********************************************************************************************************************************************************************


Dernière mise à jour avril 2024
Supposons que vous ayez un tableau et que vous souhaitiez le vider ; vous pouvez le faire en définissant sa longueur sur 0 :
 */
const items = ["Pen", "Paper"];
items.length = 0;

console.log(items); // []

/* 
Cela fonctionne même si nous l'utilisons const car nous ne réattribuons pas items mais modifions plutôt sa longueur à 0, ce qui finit par supprimer 
tous les éléments qu'il contient. Le const ici garantit que nous aurons toujours un tableau (mais son contenu peut changer). 


//********* array.splice()

Vous pouvez également supprimer des éléments spécifiques d'un tableau à l'aide de la splice(start[, deleteCount])méthode .
!Ne pas confondre splice avec une autre méthode appelée slice.

Avez-vous remarqué la [, deleteCount]syntaxe ? Vous verrez souvent cette syntaxe dans la documentation, ce qui signifie que le deleteCount paramètre est facultatif .

?La .splice(start[, deleteCount])méthode supprime les éléments du tableau à partir de l' start index que vous spécifiez. 
?Si aucun deleteCountn'est fourni, il supprimera tous les éléments restants à partir de l' startindex 

Lorsque vous spécifiez un deleteCount, il supprimera de l'index autant d'éléments que vous avez fournis dans deleteCount l' startindex.
La définition est plus compliquée que l'exemple, nous vous recommandons donc de jeter un œil aux exemples ci-dessous :

- Pour supprimer le 1er élément d'un tableau, vous appelez .splice(0, 1).
- Pour supprimer 3 éléments à partir de la 2ème position, vous appelez .splice(1, 3).
- Si vous appelez .splice(1), alors tous les éléments seront supprimés à partir de la 2ème position (index 1).

?Essayez de toujours spécifier le 2ème argument pour splice afin d'éviter de supprimer de manière inattendue plus d'éléments que nécessaire .
*/

const items = ["Pen", "Paper", "Staples"];
const deletedItem = items.splice(0, 1); // removes one element at index 0
console.log(deletedItem); // ["Pen"]

console.log(items); // ["Paper", "Staples"]

//Remarquez comment la .spliceméthode renvoie un tableau des éléments supprimés

/* 
//*********** résumer
Vous pouvez vider un tableau en définissant sa longueur sur 0.

.splice(start[, deleteCount])supprime les éléments du tableau de l' startindex. Le nombre d'éléments qu'il supprimera est spécifié par deleteCount.

Si vous omettez deleteCount, tous les éléments de l'index seront supprimés start.

*/
