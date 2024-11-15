# Primitive Value (Valeur Primitif)

Les valeurs primitives en JavaScript sont des types de données qui ne sont pas des objets et qui ont une représentation directe en mémoire. Elles sont immuables, ce qui signifie qu'elles ne peuvent pas être modifiées une fois qu'elles ont été créées. 

## Les six types de valeurs primitives en JavaScript :

1. **Number** : Représente les nombres entiers ou décimaux.  
   
2. **String** : Représente une séquence de caractères. Par exemple : `'Bonjour'`, `"JavaScript"`.

3. **Boolean** : Représente une valeur de vérité, soit `true` (vrai) soit `false` (faux).

4. **Undefined** : Représente une valeur non définie. Cela se produit lorsqu'une variable n'a pas été initialisée ou lorsqu'une propriété d'un objet n'existe pas.

5. **Null** : Représente une valeur nulle intentionnelle. Il est souvent utilisé pour indiquer l'absence de valeur ou un pointeur nul.

6. **Symbol** : Introduit dans ECMAScript 6 (ES6), il représente un identifiant unique et immuable utilisé comme clé pour les propriétés des objets.

7. **BigInt** : Introduit dans ECMAScript 2020 (également appelé ES11). Il est utilisé pour représenter des entiers de taille arbitraire, c’est-à-dire qu’il peut stocker des entiers plus grands que ceux pris en charge par le type `Number` standard.

Ces valeurs primitives sont stockées directement dans la pile de mémoire, ce qui les rend plus rapides à manipuler que les objets, qui sont généralement stockés dans le tas de mémoire.

## Type de données non primitif :

- **Object** : Utilisé pour des structures de données plus complexes.
```