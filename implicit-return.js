//********************************************************* Implicit Return (retour implicite) ***********************************************************************

/* Lorsque vous négligez d'inclure l'instruction `return` dans une fonction JavaScript, le résultat obtenu est implicitement 
défini comme `undefined`. L'adjectif "implicite" indique que bien que le `return` ne soit pas explicitement écrit, 
le résultat est néanmoins déduit, ce qui signifie qu'à défaut d'une valeur de retour spécifique, la fonction renverra 
automatiquement `undefined`. 

exemple : 
*/
const sum = (a, b) => {
  a + b;
};

sum(1, 3); // undefined

/* Comme vous pouvez le voir, sum(1, 3)renvoie undefined car nous n'avions pas de return mot-clé dans le corps de la fonction.

Cependant, avec les fonctions fléchées, vous pouvez implicitement renvoyer le résultat de la fonction dans certaines conditions 
très spécifiques. Commençons par un exemple puis nous expliquerons comment nous y sommes arrivés : 
*/

// this works 👍 (implicit return)
const sums = (a, b) => a + b;

sums(1, 3); // 4

/* Alors, comment se fait-il que cet exemple fonctionne et que le précédent ne fonctionne pas ? Ni l’un ni l’autre n’incluent 
le return mot-clé. L'un d'eux fonctionne et l'autre revient indéfini. En effet, pour le retour implicite au travail, vous devez 
remplir toutes les conditions suivantes :

1 Votre fonction doit être une fonction fléchée.
2 Le corps de la fonction ne doit être qu'une seule instruction . Cela signifie que vous devez supprimer les accolades.
3 Vous devez supprimer le return mot-clé car le corps de la fonction est une seule instruction.
Lorsque toutes ces conditions sont remplies, la fonction flèche renverra implicitement le résultat de son corps de fonction 
(qui n'est qu'une seule ligne). 

Prenons un autre exemple : */

const isLegal = (age) => {
  return age >= 18;
};

/* Utilisons maintenant le retour implicite par :

1 supprimer les accolades
2 supprimer le return mot-clé 
*/
const isLegals = (age) => age >= 18;

/* La syntaxe peut paraître bizarre au début, mais une fois que vous vous y serez habitué, vous vous rendrez compte qu'elle est 
vraiment élégante. Voici comment vous pouvez le lire :
isLegal est une fonction qui prend l'âge et renvoie le résultat de l'expression age >= 18. 

***************** N'utilisez le retour implicite que lorsque le corps de la fonction est court et d'une seule ligne. Ne sacrifiez 
jamais la lisibilité et la clarté du code pour utiliser une certaine fonctionnalité .

Le retour implicite ne fonctionne que lorsqu'il y a une seule instruction à l'intérieur de la fonction (et que les accolades et return 
le mot-clé sont omis).

Aller plus loin
Comme mentionné dans le chapitre précédent, lorsque vous n'avez qu'un seul paramètre, vous pouvez supprimer les parenthèses autour 
du paramètre. Le code ci-dessus devient :
*/

const isLegalz = (age) => age >= 18;

/* résumer
Voici les conditions de retour implicite :
Votre fonction doit être une fonction fléchée.
Le corps de la fonction ne doit être qu'une seule instruction . Cela signifie que vous devez supprimer les accolades.
Vous devez supprimer le returnmot-clé car le corps de la fonction est une seule instruction.
N'utilisez le retour implicite que lorsque le corps de la fonction est court et d'une seule ligne. Ne sacrifiez jamais la lisibilité et la clarté du code pour utiliser une certaine fonctionnalité.
Le retour implicite ne fonctionne que lorsqu'il y a une seule instruction à l'intérieur de la fonction (et que les accolades et returnle mot-clé sont omis). */
