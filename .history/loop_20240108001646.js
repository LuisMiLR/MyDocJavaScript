// les boucles

//****while "tant que"****
// permet d executer du code jusqu'a que la condition de sortie soit vérifié
let i = 0;
while (i > 10) {
  console.log("Bonjour" + i);
  i += 1;
}

//****for "Pour"****
//est plus utiliser pour iterer un nombre de fois
//exemple 1
for (let i = 0; i < 10; i++) {
  console.log("Bonjour");
}

//exemple 2
const notes = [2, 19, 8, 12, 3];
for (let i = 0; i < notes.length; i++) {
  console.log(i); //0, 1, 2, 3, 4
  console.log(notes[i]); //permet d'avoir une boucle de parcour de tableau : 2, 19, 8, 12, 3
}
// la boucle for est utile pour parcourir les élements d'un tableau
// ou bien pour faire un nombre d'itération comme dans exemple 1

//****for in****

//Cette boucle est utilisable pour parcourir un tableau ou aussi pour un objet
//c'est une manière raccourcie de le faire par rapport à la boucle for.

const notes2 = [2, 19, 8, 12, 3];
for (let i in notes2) {
  console.log(i); // 0, 1, 2, 3, 4
  console.log(notes2[i]); //permet d'avoir la boucle de parcour de tableau : 2, 19, 8, 12, 3
}

//exemple avec un objet

const notes3 = {
  a: 1,
  b: 3,
};

for (let i in notes3) {
  console.log(i); // dans ce cas la i prend comme valeurs les clés de l'objet
  console.log(notes3[i]);
}

//on peut utiliser for in sur une string
// ça nous donne l'index de la lettre
const greeting = "Bonjour";
for (let letter in greeting) {
  console.log(letter); //0, 1, 2, 3, 4, 5, 6
}
// en effet car une chaine de caractère c'est un tableau de lettre
// si on fait
greeting[0]; //ça donne 'B'

//for off
//si on est intéressé que par la valeur des valeur
// fonctionne que sur quelque chose itérable (les tableaux) et pas un objet

// fait référence au 1er exemple avec le tableau plus haut
//const notes = [2, 19, 8, 12, 3];
for (let note of notes) {
  console.log(note); //0, 1, 2, 3, 4
}

//avec une chaine de caractère le for of
// ça va nous donner chaque lettre de notre mot, contrairement à for in qui donne
//l'index
const greet = "Bonjour";
for (let letter of greet) {
  console.log(letter); //B o n j o u r
}
