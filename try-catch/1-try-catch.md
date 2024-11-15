# Try...Catch

**Dernière mise à jour avril 2024**  
À mesure que vous progresserez, vous commencerez à travailler avec du code qui pourrait échouer dans certains cas, par exemple lors d'une requête à une API. Si une erreur survient (comme l'utilisateur refusant de partager sa localisation), votre code pourrait échouer, et c'est là que `try...catch` devient utile.

## Exemple

Si nous tentons d'appeler une fonction qui n'existe pas, une erreur sera générée :
```javascript
console.log("Step 1");
nonExistentFunction(); // ❌ Uncaught ReferenceError: nonExistentFunction is not defined
console.log("Step 2");
```
L'exécution s'arrête, et le message "Step 2" n'apparaît jamais.

### Utilisation de `try...catch`

Envelopper le code qui peut échouer dans un bloc `try...catch` permet de capturer l'erreur sans arrêter l'exécution :
```javascript
console.log("Step 1");
try {
    nonExistentFunction();
} catch (error) {
    console.error(error); // Uncaught ReferenceError: nonExistentFunction is not defined
}
console.log("Step 2");
```
Le code continue de s'exécuter même après l'erreur :
```
"Step 1"
Uncaught ReferenceError: nonExistentFunction is not defined
"Step 2"
```

Dans ce cas, nous utilisons `console.error` pour indiquer qu'il s'agit d'une erreur, mais vous pouvez personnaliser la gestion des erreurs dans le bloc `catch`.

### Pourquoi utiliser `try...catch` ?
`try...catch` est essentiel pour gérer des erreurs inattendues dans le code, surtout lorsqu'il y a des appels à des services externes (comme les API). Cela permet de signaler à l'utilisateur un échec (par exemple, un service non disponible) sans planter le programme.

## Résumé
- Lorsqu'une fonction risque d'échouer, enveloppez-la dans un bloc `try...catch`.
- Cela permet de récupérer l'erreur et de continuer l'exécution du programme.
- Dans le bloc `catch`, vous pouvez gérer l'erreur comme bon vous semble (afficher un message, enregistrer l'erreur, etc.).

```
