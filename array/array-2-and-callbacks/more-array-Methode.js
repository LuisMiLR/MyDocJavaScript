/* More array methode 

//******* Array map


La .map(callback)méthode permet de transformer un tableau en un autre. 


[4, 2, 5, 8]transformé en [8, 4, 10, 16]. Nous avons doublé chaque élément du tableau d'origine.
["sam", "Alex"]transformé en ["SAM", "ALEX"]. Nous avons mis en majuscule chaque élément du tableau d'origine.

Notez que vous récupérez toujours un tableau contenant le même nombre d'éléments par rapport au tableau d'origine, 
mais chaque élément a probablement subi une transformation .

Dans le premier exemple, la transformation consiste à multiplier chaque nombre par 2.
Dans le deuxième exemple, la transformation consiste à faire appel .toUpperCase()à chaque élément.

Voyons comment nous pouvons mettre en œuvre ces transformations :
*/

const numbers = [4, 2, 5, 8];

const doubled = numbers.map(function (number) {
  return number * 2;
});
console.log(doubled); // [8, 4, 10, 16]

//et

const names = ["sam", "Alex"];
const upperNames = names.map(function (name) {
  return name.toUpperCase();
});

/* Si vous oubliez de le faire returndepuis la fonction de rappel, vous vous retrouverez avec le tableau suivant : 
[undefined, undefined]. En effet, pour chaque élément du tableau d'origine ( ["sam", "Alex"]), vous revenez undefined 
donc le résultat final sera [undefined, undefined].

Une fois que vous faites cette erreur plusieurs fois, cela devient un signal clair que vous avez oublié le mot-clé return. 


//**************** Array includes(item)

La .includes(item)méthode tableau est l'une des méthodes tableau les plus simples car elle nécessite un itemrappel plutôt qu'un rappel 
et renvoie true lorsqu'il item existe dans le tableau et false autrement. Voici un exemple :
*/

const groceries = ["Apple", "Peach", "Tomato"];

groceries.includes("Tomato"); // true
groceries.includes("Bread"); // false

/*  

//*************** Array join(glue) 

Lorsque vous avez un tableau et que vous affichez ce tableau sur une page Web (comme nous le verrons plus tard dans la section DOM 
du cours), le tableau sera automatiquement converti en chaîne. JavaScript invoquera automatiquement la .toString()méthode du tableau 
qui renvoie une chaîne d'éléments du tableau séparés par des virgules. Voici comment cela fonctionne:
*/
const groceriess = ["Apple", "Peach", "Tomato"];
groceriess.toString(); // "Apple,Peach,Tomato"

/* Mais il y a un inconvénient, c'est que vous ne pouvez pas personnaliser la colle qui est insérée entre les éléments du tableau, 
qui est la virgule ,. 

Si vous souhaitez personnaliser la colle, vous pouvez utiliser la .join(glue)méthode :
*/

const groceriez = ["Apple", "Peach", "Tomato"];
groceriez.join("; "); // "Apple; Peach; Tomato"
groceriez.join(" . "); // "Apple . Peach . Tomato"

/* 
//*************** résumer
La méthode array .map(callback)permet de transformer un tableau en un autre.
.includes(item)La méthode tableau prend un itemet renvoie truelorsqu'il itemexiste dans le tableau et falseautrement.
La méthode array .join(glue)renvoie une chaîne d'éléments du tableau séparés par le glue. */
