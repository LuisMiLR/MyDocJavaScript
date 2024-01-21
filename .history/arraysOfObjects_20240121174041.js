//transform arrays of objects

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
