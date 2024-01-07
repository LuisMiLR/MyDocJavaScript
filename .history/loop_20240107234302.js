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
const notes = [2, 19, 8, 12, 3];
for(note in notes)

