//Reading dynamic property

/*
Nous avons vu que nous pouvons utiliser la notation par points pour lire une propriété sur un objet. Par exemple :
 */

const user = {
    id: 1,
    name: "Sam Green"
};

user.id; // 1
/**
 Et maintenant, que se passerait-il si le nom de la propriété que vous souhaitez lire était stocké dans une variable ? Par exemple :
 */
 const key = "id"; // the name of the property that we want to access on the user object

 // ❌ this does NOT work
 user.key; // undefined 

 /*
  Nous ne pouvons pas utiliser ici la syntaxe à points user.key car la propriété est dynamique. Lorsque vous écrivez , JavaScript recherchera alors une propriété appelée key ce qui n'est pas le cas ici. Au lieu de cela, nous devons obtenir la valeur de la variable key , qui est "id" .

Pour cela, vous devez utiliser les crochets comme suit :
  */
const uzer = {
    id: 1,
    name: "Sam Green",
    age: 20
};

const keyy = "id";
user[key]; // 1

/* 
Cela fonctionne car [key]évaluera l'expression à l'intérieur des crochets. Dans ce cas, keyévalue à "id". Nous finissons donc par lire la propriété idqui renvoie 1 (car user.idest 1) .

Vous pensez probablement que c'est trop compliqué et que nous aurions pu simplement accéder à user.id. C'est vrai, cependant, il existe des cas où la clé sera stockée dans une variable. Par exemple, prenez la fonction ci-dessous :
*/
const getValue = (user, keyToRead) => {
    return user[keyToRead];
}

// Sample usage
getValue({id: 2, name: "Sam"}, "name"); // "Sam"
getValue({id: 2, name: "Sam"}, "id"); // 2

/* 
Dans ce cas, getValueaccepte un objet userpuis le keyToRead. Donc, pour pouvoir implémenter la fonction, nous avons dû accéder à la propriété de manière dynamique avec user[keyToRead].
Cela permet à la fonction d'être dynamique et d'accepter n'importe quelle clé sur l' userobjet, et sa valeur sera renvoyée !

Ne vous inquiétez pas si le concept n'est toujours pas clair, c'est un défi difficile. Nous allons vous proposer un défi avec du DOM pour que vous puissiez mieux le visualiser.
*/