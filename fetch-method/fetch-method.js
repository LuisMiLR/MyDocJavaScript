/* le code, pour faire une requette fetch, étape par étape, jusqu'au point où le `return` est défini :

1. Définissez une fonction nommée `translate` avec un paramètre `textToTranslate` :

function translate(textToTranslate) {


2. Déclarez une structure `try...catch` pour gérer les erreurs potentielles :

try {
    /// Code qui peut générer une erreur
} catch (error) {
    /// Gestion des erreurs
}

3. À l'intérieur du bloc `try`, effectuez la requête `fetch` vers l'API de traduction :

const response = await fetch("/server/translate/translate", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({ text: textToTranslate }), //text: est une condition l'API de traduction attendait un objet avec une propriété text contenant le texte à traduire. dans d autre cas comme un signup : 'inscription, l'objet formData contient toutes les données pertinentes pour l'inscription, donc il est utilisé tel quel sans besoin de spécifier une propriété particulière comme text.
});

4. Vérifiez si la réponse de la requête est ok :

if (response.ok) {

5. Si la réponse est ok, analysez la réponse JSON :

const data = await response.json();
console.log(data);

6. Mettez à jour l'état `translatedText` avec le texte traduit :

setTranslatedText(data.text); // liée au jsx translate&learnEasy

7. Sinon, lancez une erreur :

} else {
    throw new Error("Erreur lors de la traduction");
}

8. Gérez les erreurs potentielles dans le bloc `catch` :

} catch (error) {
    console.log("Erreur serveur de traduction:", error.message);
}

9. Assurez-vous de fermer la fonction `translate` :

}

Après ces étapes, vous auriez le corps complet de la fonction `translate`. Cette fonction peut être utilisée pour effectuer la traduction du texte fourni. 
Ensuite, vous pourriez ajouter le reste de votre code pour la partie JSX et le `return`. */

//voici un exemple comment faire un fetch :

// Incorrect: Inadequate error handling
function fetchData() {
  try {
    // Fetch data from an API
    fetch("https://api.example.com/data")
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error.message));
  } catch (error) {
    console.log("Error occurred:", error.message); // This won't catch fetch errors
  }
}

// Correct: Proper error handling with fetch
async function fetchDataCorrect() {
  try {
    const response = await fetch("https://api.example.com/data");
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error occurred:", error.message);
  }
}
/* 
Ces deux codes concernent la récupération de données à partir d'une API en utilisant JavaScript, en particulier la méthode `fetch()` pour effectuer 
des requêtes réseau.

Dans le premier code, la fonction `fetchData()` utilise la méthode `fetch()` pour récupérer des données depuis une API. Cependant, elle incorpore une 
structure `try...catch` pour gérer les erreurs. Malheureusement, cela ne fonctionne pas comme prévu avec les promesses. Les erreurs qui se produisent 
dans les promesses ne peuvent pas être attrapées par un bloc `try...catch`. Ainsi, si une erreur se produit dans la promesse de la méthode 
`fetch()`, elle ne sera pas capturée par le bloc `catch`, ce qui signifie que les erreurs de réseau ou de traitement des données ne seront pas correctement gérées.

Dans le deuxième code, la fonction `fetchDataCorrect()` utilise également la méthode `fetch()` pour récupérer des données depuis une API, mais elle utilise une 
approche asynchrone avec `async/await`. Cette approche permet d'écrire un code plus lisible et plus facile à comprendre. La fonction utilise `await` pour attendre
que la promesse retournée par `fetch()` soit résolue, puis elle vérifie si la réponse est correcte (`response.ok`). Si la réponse n'est pas correcte, elle lance une
nouvelle erreur avec des informations sur le statut de la réponse HTTP. Ensuite, elle utilise à nouveau `await` pour obtenir les données de la réponse, et enfin elle 
les affiche dans la console. Si une erreur se produit à n'importe quelle étape du processus, elle est capturée par le bloc `catch`, qui affiche un message d'erreur 
approprié.
if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);


Dans le deuxième code, lorsque la réponse HTTP n'est pas satisfaisante (`response.ok` est faux), une nouvelle erreur est créée avec le 
message "HTTP error! Status: " suivi du statut de la réponse HTTP (`response.status`). Cela permet de fournir une indication précise de ce qui s'est mal passé lors 
de la récupération des données de l'API.
Ainsi, la différence réside dans le fait que dans le premier code, l'erreur capturée dans le bloc `catch` pourrait provenir de plusieurs sources, tandis que dans 
le deuxième code, l'erreur est spécifiquement liée à un problème avec la réponse HTTP de l'API.
 */
