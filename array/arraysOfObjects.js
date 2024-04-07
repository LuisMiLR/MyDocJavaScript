//Array of object

/*Les tableaux d'objets sont une structure de données très utile et flexible. 
Ils vous permettent de stocker et d'organiser des collections d'objets, où chaque élément du tableau est un objet avec ses propres propriétés et valeurs. 

//*### ************************************* Introduction aux Tableaux d'Objets en JavaScript

#### 1. Définition d'un Objet en JavaScript
un objet est une collection de propriétés, où chaque propriété a un nom (clé) et une valeur associée. Par exemple :

let personne = {
    nom: "John",
    age: 30,
    ville: "Paris"
};

Dans cet exemple, `personne` est un objet avec trois propriétés : `nom`, `age`, et `ville`.


#### 2. Création d'un Tableau d'Objets
Un tableau d'objets est simplement un tableau où chaque élément est un objet. Vous pouvez créer un tableau d'objets de la manière suivante :

let personnes = [
    { nom: "John", age: 30, ville: "Paris" },
    { nom: "Alice", age: 25, ville: "Londres" },
    { nom: "Bob", age: 35, ville: "New York" }
];

Dans cet exemple, `personnes` est un tableau d'objets contenant trois objets représentant différentes personnes.


#### 3. Accès aux Propriétés des Objets dans un Tableau
Pour accéder aux propriétés des objets dans un tableau, vous pouvez utiliser la notation des crochets (`[]`) ou la notation du point (`.`). Par exemple :


console.log(personnes[0].nom); // Affiche "John"
console.log(personnes[1]["age"]); // Affiche 25


#### 4. Parcourir un Tableau d'Objets
Pour parcourir tous les objets dans un tableau, vous pouvez utiliser une boucle `for` ou `forEach`. Par exemple :


// Utilisation d'une boucle for
for (let i = 0; i < personnes.length; i++) {
    console.log(personnes[i].nom);
}

// Utilisation de forEach
personnes.forEach(function(personne) {
    console.log(personne.ville);
});


#### 5. Ajout et Suppression d'Objets dans un Tableau
Vous pouvez ajouter un nouvel objet à un tableau à l'aide de la méthode `push()` et supprimer un objet à l'aide de la méthode `splice()`. Par exemple :


// Ajouter un nouvel objet
personnes.push({ nom: "Emily", age: 28, ville: "Berlin" });

// Supprimer un objet
personnes.splice(1, 1); // Supprime l'objet à l'index 1


Ceci est une introduction de base aux tableaux d'objets en JavaScript. Avec cette connaissance, vous pouvez commencer à manipuler et à travailler avec des collections 
complexes de données dans vos programmes JavaScript. */

//************************************************************* transform arrays of objects ***************************************************************************
//*********************************************************************************************************************************************************************

// Comme nous l'avons étudié précédemment, la .map()méthode array permet de transformer un tableau en un autre tableau de même taille .

// Voici un exemple de .map()ce que nous avons vu précédemment :

const names = ["sam", "Alex"];

const upperNames = names.map((name) => name.toUpperCase());
console.log(upperNames); // ["SAM", "ALEX"]

//Dans cet exemple, nous transformons un tableau de chaînes en un nouveau tableau de chaînes où les éléments sont en majuscules .

// Cela .map()fonctionne de la même manière pour les tableaux d’objets. Vous pouvez transformer
// un tableau d'objets en un nouveau tableau d'objets, ou vous pouvez le transformer en un tableau de chaînes ou un tableau de nombres.
// Cela vous permet d' extraire certaines propriétés d'un tableau d'objets. Voici un exemple :

const tweets = [
  {
    id: 1080777336298049537,
    message: "Hello Twitter 👋",
    created_at: "2020-01-03 11:46:00",
  },
  {
    id: 1080777336298195435,
    message: "How do you keep track of your notes?",
    created_at: "2021-02-19 15:32:00",
  },
];

const messages = tweets.map((tweet) => tweet.message);
console.log(messages); // ["Hello Twitter 👋", "How do you keep track of your notes?"]

// Remarquez comment nous sommes capables d'extraire la messagepropriété de chaque tweet, nous avons donc fini
// par transformer un tableau d'objets ( tweets) en un tableau de chaînes ( messages).

// N'oubliez pas d'être à console.log(tweet)l'intérieur du .map()rappel pour visualiser l'objet .

//Résumé

// Les tableaux d'objets sont le type de données le plus courant que vous rencontrerez lorsque vous travaillez dans le
// développement Web, car la plupart des API (par exemple, une API météo, une API Twitter, etc.) renvoient des tableaux d'objets.
// Un conseil très important lorsque vous travaillez avec des tableaux d'objets, en particulier lors d'une itération sur un tableau
// d'objets, consiste à ajouter console.log()tout au long de votre code pour visualiser l'objet que vous recevez dans le rappel.
