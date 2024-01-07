// les boucles

//while "tant que"

let i = 0;
while (i > 10) {
  console.log("Bonjour" + i);
  i += 1;
}

//for "Pour"

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

//for in

//Cette boucle est utilisable pour parcourir un tableau pour un objet
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

//for off
//si on est intéressé que par la valeur des valeur

const notes4 = [2, 19, 8, 12, 3];
const person = {
  lastName: "john",
  firstName: "Didou",
};

for (let note of notes4) {
  console.log(notes4);
}
