/* le code, pour faire une requette fetch, étape par étape, jusqu'au point où le `return` est défini :

1. Définissez une fonction nommée `translate` avec un paramètre `textToTranslate` :

function translate(textToTranslate) {


2. Déclarez une structure `try...catch` pour gérer les erreurs potentielles :

try {
    // Code qui peut générer une erreur
} catch (error) {
    // Gestion des erreurs
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
