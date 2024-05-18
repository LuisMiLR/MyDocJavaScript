//************************************************************************ class vs function *************************************************************************
//********************************************************************************************************************************************************************

/* 
Attention : ce chapitre est essentiellement théorique. Il explique le fonctionnement de l'héritage en JavaScript ainsi que la chaîne de prototypes.
JavaScript n'a pas de vraies classes ! 😨 La classsyntaxe que vous voyez s'appelle sucre syntaxique, un terme sophistiqué pour dire que c'est une syntaxe 
qui rend votre code plus lisible (comme un édulcorant).

*/
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  isSquare() {
    return this.width === this.height;
  }
}
//En fait, si vous interrogez JavaScript sur le type de Rectangle, vous obtiendrez la fonction :
typeof Rectangle; //"function"

/* 
la classe est une fonction
Avant que le classmot-clé ne soit ajouté au langage en 2015, voici comment nous écrivions « classes » :
*/
function Rectangle(width, height) {
  this.width = width;
  this.height = height;
}
//?Cette fonction sert de constructeur. C'est ce qu'on appelle le modèle de constructeur de fonctions en JavaScript .

/* Lorsque vous l'exécutez, new Rectangle(15, 20)il appelle la fonction Rectangleet vous donne une thisvariable à laquelle vous pouvez ajouter 
variables d'instance(comme widthet height).
Cette syntaxe n'est pas simple pour la plupart des développeurs, et vous pouvez parfaitement ressentir cela. Mais ce qui est important, 
c'est de pouvoir le reconnaître. 

//***** Ajout de méthodes d'instance
Si c'est ainsi que vous écrivez un classmodèle de constructeur de fonction, alors comment ajouter une méthode personnalisée ?
*/

//This is the constructor
function Rectangles(width, height) {
  this.width = width;
  this.height = height;
}

// this is an instance method (that you can call on new instances of Rectangle)
// Note: this has to be a function (not an arrow function), will be explained later on in Lexical scope
Rectangle.prototype.isSquare = function () {
  return this.width === this.height;
};

/* 
Pourquoi y a-t-il un prototype et qu'est-ce que c'est ?

C'est probablement la première question qui me vient à l'esprit.

?Vous pouvez considérer le prototypecomme un objet contenant toutes les méthodes d'instance qu'une certaine fonction peut avoir. 
?Ce prototype s'enchaîne dans ce que nous appelons la chaîne des prototypes. Ceci est expliqué dans la leçon suivante .

Ainsi, en attribuant une nouvelle fonction, Rectangle.prototype vous ajoutez une nouvelle méthode d'instance aux instances de Rectangle .
Cela signifie que chaque fois que vous créez un new Rectangle, cette instance aura une méthode d'instance appelée isSquare qui peut accéder aux propriétés de 
l'instance via this.(par exemple, this.widthet this.height).

Encore une fois, la syntaxe n'est pas la meilleure, mais il y a une raison derrière cela, que vous découvrirez dans la prochaine leçon !



//******* Documentation

Si vous jetez un œil à la documentation sur Mozilla Developer Network, vous voyez souvent String.prototype.trim() .
Cela signifie que trim() est une méthode qui peut être appelée sur des instances de String . Cela signifie que trim() peut être appelé sur n'importe quelle nouvelle chaîne que vous créez.


//******* résumer

- La classsyntaxe a été ajoutée en 2015 et doit être utilisée car elle facilite la lecture de la syntaxe.

- A classcrée un functionavec le modèle de constructeur (doit être appelé avec new)

- L'ajout d'une fonction au prototyped'une fonction nous permet d'ajouter une nouvelle méthode personnalisée aux instances de cette fonction.

- Vous n’écrirez probablement pas cette syntaxe vous-même, mais il est important de la comprendre et de pouvoir la reconnaître.

*/
