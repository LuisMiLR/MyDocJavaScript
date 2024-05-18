/*
 *************************************************** Les fonctions fléchées et leurs différences avec les fonctions classiques. **********************************
 *****************************************************************************************************************************************************************
 */

/* 
    *1. Syntaxe.
    La syntaxe est moins chargée, pouvant ainsi être plus facilement utilisée en tant qu'argument, notamment en tant que fonction callback.
*/
function add(a, b) {
  return a + b;
}
const add2 = (a, b) => a + b;

/* une fonction fléchée est une fonction anonyme (on ne peut pas la nommé)
c'est une expression de de fonction que je rentre dans une variable 

on peut faire de mme avec la fonction classique on peut retirer sont nom (elle devient anomyme et ensuite il faut rentrer l'expression dans une constante) ex:
*/

// const add3 = (a, b) {
//      return a + b;
// };

/* ça fait la meme chose dans les 2 cas, la différence lorsqu'on rentre une fonction dans une variable est au niveau du hosting puisque c'est la constante qui se 
fait issé, pour les expression de fonctions classique dans une constante, on à plus accès aux fonctions avant leur initialisation (c'est a dire que si j'appel la fonction 
avant la fonction j'obtiens une erreur) alors qu'avec la fonction fléché ça fonctionne je peux l'appeller avant l'initialisation.  
ex:

add2()
const add2 = (a, b) => a + b;

avec la fonction classique j'y ai accès avant! parce qu'elle s'est fait hoistind (issé) avant

//********** Regles  
*Les variables se font hoisting et on leur donne une valeur undefined jusqu'au moment qu'elle sont initialiser 
*Les fonctions se font hoisting et sont directeement accéssible des la premiere ligne de code
*/

/* revenons à la fonction fléchée: 

 - elle plus concise et comprend un return implicite ex:
 const add2 = (a, b) => {
   return a + b
 } 
 - au niveau des parametres 
 si j'ai qu'un seul parametre je ne suis pas obligé de le mettre entre parenthèse 

 const add2 = a => a (je prend a je return a tout simplement)

 les fonctions fléchée sont utile quand je les utilise en tant que fonction callback, quand je les passe en tant qu'argument à une fonction d'ordre supérieur, c'est à 
 dire une fonction qui attend une autre fonction en argument ou qui en retourne une autre. ex:
 */
const numbers = [1, 2, 3];
//function arroy
number.forEach((el) => console.log(el)); // la fonction callback: (el) => console.log(el) return l'expression retourné par log
//f. classique
number.forEach(function (el) {
  return console.log(el);
});
/*
    *2. Le mot clé this. 
  
A-  Les fonctions classiques créent un mot clé this lors de leur exécution, en fonction de l'objet qui les appelle.
    Si elles ne sont pas appelées par un objet, this est automatiquement égal à window (l'objet global).

B-  Les fonctions fléchées ne créent pas de this, néanmoins elles peuvent lire le this d'une fonction classique si elles se situent 
    dedans (avec le lexical scoping elle vont avoir accès au contexte de la fonction au dessus).
    Si elles ne sont pas dans l'environnement(donc contexte) une fonction classique, elle lisent le this de l'objet global, car elles 
    sont dans le contexte d'execution global.

A- exemple : 
    const person = {
        age : 45
        getAge: function(){
            const arrowInsideClassic = () => {
                console.log(this)//45
            }
            arrowInsideClassic()
            return this.age
        }
    } 
    console.log(person.getAge()); // this est egale à l'objet person (qui l'appel)  // 45

    si dans la création de la fonction suivante : 

    function foo() {
        console.log(this)
    }
    foo()

    ici c'est l'objet global, car quand je crée une fonction au plus haut niveau, c'est enregistré dans l'objet global c'est comme si j'avais fais ça sous le capeau
    window.foo()

    Qu'est ce qui à appeller ma fonction classique ? window, donc this dans ma fonction classique c'est window
    > lors de l'execution de ma fonction il y a un function execution context qui va notamment crée un objet contenant toute les
    variables qui sont accéssibles et une chaine de scope 'chaine de portée' (ceux à quoi à accès ma fonction) et après ça crée le
    mot this et sa lui donne une valeur en fonction de l'objet qui a appelé cette fonction classique 

    */
/* 
    *3. arguments

    A- Même chose pour l'objet "arguments" qui est crée chez les fonctions classiques, mais pas les fonctions fléchées.
    
    Dans les fonctions classique après la création de this il y a la création de arguments qui vous donne la liste des 
    arguments passées dans un objet qui ressemble à un tableau (voir exemple A)
    Le concept des "arguments" en JavaScript est différent de celui de this. Les "arguments" font référence aux valeurs que vous
    passez à une fonction lorsque vous l'appelez. Ils sont accessibles à l'intérieur de la fonction via le mot-clé arguments.

    Voyons un exemple de argument :
    function myFunction() {
    console.log(this); // Affiche le contexte de 'this'
    console.log(arguments); // Affiche les arguments passés à la fonction
    }
    myFunction(); // Dans ce cas, 'this' fait référence à l'objet global

    A- exemple: 
    //avec une fonction classique
    function faz(){
        console.log(arguments)// donne la liste des arguments
    }
    //avec une fonction fléchée
    const foz = () => {
        console.log(arguments)
    }
    faz(1,2,3,4,5) //crée la liste des arguments
    foz(1,2,3,4,5) // uncaught ReferenceError:arguments is not defined

/*
    *Petit recap pour vous aider avec la valeur de this dans des fonctions classiques vs fléchées (hors fonction constructeur / usestrict)
    
    Fonction classique : 
    1. La fonction est appelée depuis un objet ? this = cet objet.
    2. La fonction n'est pas appelée depuis un objet ? this = objet global window.

    Fonction fléchée :
    1. La fonction fléchée se situe dans une fonction classique ? this = le this de la fonction classique.
    2. La fonction fléchée ne se situe pas dans une fonction classique ? this = objet global window.
*/
