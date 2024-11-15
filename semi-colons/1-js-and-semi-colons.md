# JavaScript et les points-virgules

**Dernière mise à jour janvier 2023**  
_Remarque : cette leçon est tirée du cours Apprendre la programmation. Si vous avez déjà suivi ce cours, vous pouvez soit ignorer cette leçon, soit, mieux encore, la revoir. Cependant, ne sautez pas tout le chapitre, car les leçons suivantes sont spécifiques à ce cours._

## Pourquoi les points-virgules existent-ils dans JavaScript ?
Tous les langages de programmation n'ont pas de points-virgules, mais JavaScript en a, et c'est pour une bonne raison.

Lorsque vous développez un site Web, vous écrivez beaucoup de code JavaScript. Afin de réduire la taille du site Web, nous appliquons souvent un concept appelé _minification_, qui consiste à utiliser un outil pour minifier votre code afin d'économiser des caractères. L'enregistrement de caractères réduit automatiquement la taille du fichier en Ko.

Par exemple :

```javascript
/**
 * @param {string[]} items
 * @param {string} item
 */
const addItem = (items, item) => {
    items.push(item)
    return items
}

/**
 * @param {string[]} items
 */
const exportLowerCasedCSV = items => {
    return items.map(function(item) {
        return item.toLowerCase()
    }).join(", ")
}
```

Après minification, ce code devient :

```javascript
function addItem(items, item) {items.push(item);return items;}function exportLowerCasedCSV(items) {return items.map(function(item) {return item.toLowerCase();}).join(", ");}
```

Le code ci-dessus est plus court de 122 caractères. Pour des fichiers JavaScript volumineux, vous pouvez obtenir une réduction de la taille jusqu'à 40%.

La minification supprime tous les commentaires et espaces vides. Si vous observez de plus près, vous verrez qu'après chaque "ligne" JavaScript, il y a un point-virgule. Les points-virgules indiquent à JavaScript où se termine une instruction, ce qui est particulièrement utile après la minification.

_Remarque : vous ne devez jamais écrire vous-même du code minifié. Il s'agit d'un processus automatisé avec des outils tels que webpack, parcel, ou vite. Écrivez toujours du code propre avec des commentaires, les outils se chargeront de la minification avant la publication du site._

## Résumé
- JavaScript utilise des points-virgules car il est courant de minifier le code avant de publier un site Web.
- Les outils automatisés minimisent le code, vous ne devez pas le faire manuellement.
- La minification consiste à supprimer les commentaires et espaces vides pour tout mettre sur une seule ligne, d'où l'importance des points-virgules pour indiquer la fin d'une instruction.
```
