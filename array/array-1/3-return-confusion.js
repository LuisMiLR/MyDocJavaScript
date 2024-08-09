//Return confusion

/*
Dans cette leçon, nous aborderons une confusion courante lorsqu'il s'agit de revenir à l'intérieur d'une fonction qui contient un .forEach()appel.

Mais d’abord, parlons un peu plus de la dénomination des variables lors de l’itération.

Nommer les variables
Nommer les variables avec un nom clair permet à vous et aux autres de comprendre le code beaucoup plus facilement. Cela est particulièrement vrai avec l'itération .

Il est donc toujours judicieux d'utiliser le pluriel pour le tableau et le singulier pour l' élément du tableau .
Voici quelques exemples :

notes => l'article est de qualité
personnes => l'élément est une personne
Cela peut sembler être un conseil mineur, mais cela fait une grande différence ! 💡

Voici un exemple de code basé sur ce qui précède :
*/

const grades = [10, 14, 15]; // array (plural)
grades.forEach(function(grade) { // array item (singular)
    console.log(grade);
});


const people = ["Sam", "Alex"]; // array (plural)
people.forEach(function(person) { // array item (singular)
    console.log(person);
});

//returning from loop

/* 
Il y a une erreur courante qui se produit lorsque vous essayez de faire un return à partir d'une fonction qui contient un appel forEach. C'est parce qu'il y a 2 fonctions. Disons que vous avez cette fonction :
*/

function logUserIds(userIds) {
    userIds.forEach(function(userId) {
        console.log(userId);
    });
}
//et vous souhaitez que cette fonction soit return true exécutée une fois terminée. Où placez-vous le return true?

function logUserIds(userIds) {
    userIds.forEach(function(userId) {
        console.log(userId);
    });
    return true; 
}

//L' return trueintérieur de la fonction n'est pas vraiment utile car il va revenir de la fonction de rappel mais il n'y a plus de code à l'intérieur de cette fonction de toute façon. L'itération suivante de la .forEach()fonction se produira toujours. De plus, la .forEach()méthode retournera toujours, undefinedpeu importe ce que vous renvoyez à l'intérieur .