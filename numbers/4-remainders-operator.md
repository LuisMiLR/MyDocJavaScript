# Remainder Operator (Opérateur de Reste)

L'**opérateur de reste** (`%`) est utilisé pour obtenir le **reste** de la division d'un nombre par un autre. En particulier, lorsque vous divisez un nombre par deux, cet opérateur vous renvoie soit `0` (si le nombre est pair), soit `1` (si le nombre est impair).

### Exemples avec des nombres pairs :
```javascript
4 % 2; // 0
6 % 2; // 0
8 % 2; // 0
10 % 2; // 0
```
Tous ces résultats sont `0`, ce qui signifie que ces nombres sont **pairs**.

### Exemples avec des nombres impairs :
```javascript
3 % 2; // 1
5 % 2; // 1
7 % 2; // 1
9 % 2; // 1
```
Tous ces résultats sont `1`, ce qui signifie que ces nombres sont **impairs**.

### Conclusion
L'opérateur de reste est particulièrement utile pour vérifier si un nombre est **pair** ou **impair** :
- Si `number % 2 === 0`, alors le nombre est **pair**.
- Si `number % 2 === 1`, alors le nombre est **impair**.
```