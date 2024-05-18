//***************************************************************** Prototypal inheritance ***************************************************************************
//********************************************************************************************************************************************************************

/* 
De nombreux langages de programmation ont ce qu'on appelle l'héritage classique . Il existe un problème courant avec l'héritage classique, souvent appelé le 
problème Gorille/Banane. En termes simples : vous demandez une banane , mais vous finissez par avoir un gorille tenant la banane et toute la jungle avec 
(une brillante citation de Joe Armstrong, créateur du langage de programmation Erlang) .

En effet, la classBanane hérite du Gorille, qui hérite de la Jungle.

(voir img classical_inheritance)

?Mais et si vous vouliez avoir juste la Banana.peel()méthode et la Gorilla.eat()méthode ? Vous ne pouvez pas faire cela facilement avec l'héritage classique, 
?car vous vous retrouvez avec Banana, Gorilla et Jungle ainsi que toutes leurs méthodes. Et c'est là que l'héritage prototypique en JavaScript brille ✨ .

?Vous pouvez ajouter des méthodes à l' objet prototype d'une fonction. Donc en pseudo-code :

*/
//constructor functions
function Gorilla() {}
function Banana() {}
function GorillaBanana() {}

Gorilla.prototype.eat = function () {
  // ...
};

Banana.prototype.peel = function () {
  // ...
};

// Extend our GorillaBanana with the Gorilla's eat() method
GorillaBanana.prototype.eat = Gorilla.prototype.eat;

// Extend our GorillaBanana with Banana's peel() method
GorillaBanana.prototype.peel = Banana.prototype.peel;

/* 
Ainsi, avec l’héritage prototypique, vous pouvez créer n’importe quel nouvel objet combinant les méthodes d’autres objets. Par exemple:

Banana.peel() + Jungle.rain()
Jungle.growTree() + Gorilla.sleep() + Banane.grow();
*/
