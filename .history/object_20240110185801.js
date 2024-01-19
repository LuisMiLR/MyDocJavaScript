// OBJECT

//un object sert à stocker des propriétés alors qu'un tableau sert à stocker une liste par ex liste d'animaux
//L'object sert à stocker les caractéristique de l'animal

//les accolades {} pour déclarer le contenu d'un objet
//des paires clé / valeur séparées par des virgules

const myDog = {
  name: "Rex",
  colors: ["white", "black"],
};

//Pour afficher la valeur d'un objet il faut indiquer entre crochet ou avec dot notation la clé associé à la valeur
console.log(myDog.name); // affichera Rex
console.log(myDog["name"]); // affichera Rex

//⚠️ Il est à noter que lorsque l'on souhaite accéder à la propriété d'un objet dont le nom contient un ou plusieurs espaces,
//il est obligatoire d'utiliser les crochets [].

//Pour ajouter une paire clé/valeur à un objet
mydog.age = 3;

// Pour supprimer une propriété d'un objet on utilise
delete myDog.age;
//l'utilisation de delete n'est pas toujours nécessaire ou recommandée.
//Si vous souhaitez simplement supprimer la valeur d'une propriété sans supprimer la propriété elle-même,
//il peut être plus approprié de définir la valeur de la propriété à undefined ou null.
//Cela dépend du contexte et de la logique de votre application.

////// Méthodes sur objet//////

//****Object.keys(obj)****
//Cette méthode renvoi un tableau de toute les clés de l'objet fournit en parametre 'obj'

// Object  Notez que Object avec une masjuscule est une variable globale dispo en js, similaire à Number comme
// en exemple Number.parsInt()
//la variable globale Object détient des méthodes pertinente pour les objets, l'une d'elle est .keys()
//exemple :

const user = {
  id: 1,
  name: "Sam Green",
  age: 20,
};

const keys2 = Object.keys(user);
console.log(keys2); // ["id", "name", "age"]
//il renvoie un tableau contenant chaque clé de l'objet user.

//Puisque Object.keys()renvoyer un tableau, vous pouvez l'utiliser pour parcourir chaque clé de l'objet et obtenir sa valeur de manière dynamique :

const settings = {
  theme: "Dark",
  version: "2.4.1",
  beta: false,
};

const keys = Object.keys(settings);
console.log(keys); // ["theme", "version", "beta"]
keys.forEach((key) => {
  // log the value of every key dynamically
  console.log(settings[key]);
});

//Le console.log(settings[key])enregistrera la valeur de chaque clé.
//"Dark"
//"2.4.1"
//false

//////////////////////////// remonté d'erreur///////////////////////////

// regardons ce qui se passe lorsque vous accédez à une propriété qui n'existe pas sur un objet.

const person = {
  id: 1,
  firstName: "Sam",
};

// person.firstname; // undefined (firstname au lieu de firstName)
// person.age; // undefined

// Remarquez comment, lorsque nous accédons à une propriété qui n'existe pas (comme age ou mal orthographié firstname), nous obtenons undefined.
// Ce n'est pas une erreur mais cela peut souvent conduire à une erreur si vous essayez d'accéder à une autre propriété ou méthode.
//Par exemple:
// person.age.toUpperCase(); // ❌ Uncaught TypeError: Cannot read property 'toUpperCase' of undefined
// C'est l'une des erreurs les plus courantes que vous verrez en JavaScript

///////////

//[object Object]

//lorsque que l'on voit, [object Object] cela signifie que la .toString()méthode a été automatiquement appelée
//sur un objet, ce qui entraînera[object Object]

///////////
