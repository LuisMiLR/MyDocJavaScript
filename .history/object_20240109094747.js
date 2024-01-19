// Object

//un object sert à stocker des propriétés alors qu'un tableau sert à stocker une liste par ex liste d'animaux
//un object sert à stocker les caractéristique d'animal

//les accolades {} pour déclarer le contenu d'un objet
//des paires clé / valeur séparées par des virgules

const myDog = {
  name: "Rex",
  colors: ["white", "black"],
};

//pour afficher la valeur d'un objet il faut indiquer entre crochet la clé associé à la valeur
console.log(myDog.name); // affichera Rex
console.log(myDog["name"]); // affichera Rex

//⚠️ Il est à noter que lorsque l'on souhaite accéder à la propriété d'un objet dont le nom contient un ou plusieurs espaces,
//il est obligatoire d'utiliser les crochets.

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
// Notez que Object avec une masjuscule est une variable globale
