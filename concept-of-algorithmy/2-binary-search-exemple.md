**Prenons un exemple concret pour illustrer comment fonctionne la recherche binaire avec un tableau de 10 chiffres.**


### Exemple de Tableau
Supposons que nous avons le tableau trié suivant :
```javascript
const arr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
```

Nous allons chercher la valeur cible `13` dans ce tableau.

### Fonction de Recherche Binaire
Voici la fonction de recherche binaire :
```javascript
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1; // Si la cible n'est pas trouvée
}
```

### Étapes de la Recherche Binaire
1. **Initialisation :**
   ```javascript
   let left = 0;
   let right = arr.length - 1;  // right = 9
   ```

2. **Première Itération :**
   ```javascript
   const mid = Math.floor((left + right) / 2);
   // mid = Math.floor((0 + 9) / 2);
   // mid = Math.floor(9 / 2);
   // mid = Math.floor(4.5);
   // mid = 4
   ```
   - `arr[mid]` = `arr[4]` = `9`
   - `9` est inférieur à `13` (la cible), donc on met à jour `left` :
     ```javascript
     left = mid + 1;  // left = 4 + 1 = 5
     ```

3. **Deuxième Itération :**
   ```javascript
   const mid = Math.floor((left + right) / 2);
   // mid = Math.floor((5 + 9) / 2);
   // mid = Math.floor(14 / 2);
   // mid = 7
   ```
   - `arr[mid]` = `arr[7]` = `15`
   - `15` est supérieur à `13`, donc on met à jour `right` :
     ```javascript
     right = mid - 1;  // right = 7 - 1 = 6
     ```

4. **Troisième Itération :**
   ```javascript
   const mid = Math.floor((left + right) / 2);
   // mid = Math.floor((5 + 6) / 2);
   // mid = Math.floor(11 / 2);
   // mid = 5
   ```
   - `arr[mid]` = `arr[5]` = `11`
   - `11` est inférieur à `13`, donc on met à jour `left` :
     ```javascript
     left = mid + 1;  // left = 5 + 1 = 6
     ```

5. **Quatrième Itération :**
   ```javascript
   const mid = Math.floor((left + right) / 2);
   // mid = Math.floor((6 + 6) / 2);
   // mid = Math.floor(12 / 2);
   // mid = 6
   ```
   - `arr[mid]` = `arr[6]` = `13`
   - `13` est égal à `13`, donc on retourne l'indice :
     ```javascript
     return mid;  // mid = 6
     ```

La fonction retourne l'indice `6`, ce qui est correct car `13` se trouve à l'indice `6` dans le tableau.

### Conclusion

La recherche binaire a trouvé la cible `13` en 4 itérations. Voici le code complet avec le tableau et la cible :
```javascript
const arr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
const target = 13;

function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1; // Si la cible n'est pas trouvée
}

console.log(binarySearch(arr, target));  // Affiche 6
```

Cet exemple montre comment la recherche binaire divise l'espace de recherche par deux à chaque itération, ce qui la rend très efficace pour les grands tableaux triés.