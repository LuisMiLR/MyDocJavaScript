# **Prototypal Inheritance**

---

### **Qu'est-ce que l'héritage prototypique ?**

Contrairement à de nombreux langages de programmation qui utilisent un **héritage classique**, JavaScript repose sur un **héritage prototypique**. 

Dans l'héritage classique, les classes héritent les unes des autres, ce qui peut entraîner un problème souvent appelé le **problème Gorille/Banane** :

- Vous demandez une banane (`Banana`), mais vous obtenez également un gorille (`Gorilla`) tenant cette banane et toute la jungle (`Jungle`).
- L'héritage classique force une relation hiérarchique qui peut être trop rigide pour certaines situations.

---

### **Comment l'héritage prototypique brille ? ✨**

Avec l'héritage prototypique, JavaScript vous permet de **partager uniquement les méthodes dont vous avez besoin**, sans imposer une structure hiérarchique rigide.

---

## **Exemple : Héritage classique problématique**

Imaginons une structure classique où :

- La classe `Banana` hérite de `Gorilla`.
- `Gorilla` hérite de `Jungle`.

Vous obtenez une hiérarchie complète, même si vous ne voulez que la méthode `peel()` de `Banana` et la méthode `eat()` de `Gorilla`.

---

## **Avec l'héritage prototypique**

En JavaScript, vous pouvez **combiner des méthodes d'objets distincts** pour créer une structure personnalisée. Voici un exemple pratique :

```javascript
// Constructeurs
function Gorilla() {}
function Banana() {}
function GorillaBanana() {}

// Ajouter des méthodes aux prototypes respectifs
Gorilla.prototype.eat = function () {
  console.log("The gorilla eats.");
};

Banana.prototype.peel = function () {
  console.log("The banana is peeled.");
};

// Étendre GorillaBanana avec des méthodes spécifiques
GorillaBanana.prototype.eat = Gorilla.prototype.eat;
GorillaBanana.prototype.peel = Banana.prototype.peel;

// Utiliser GorillaBanana
const hybrid = new GorillaBanana();
hybrid.eat(); // "The gorilla eats."
hybrid.peel(); // "The banana is peeled."
```

---

### **Avantages de l'héritage prototypique**

Avec l'héritage prototypique, vous pouvez :
- **Combiner des fonctionnalités spécifiques** de plusieurs objets.
- Créer des relations d'héritage flexibles sans forcer une hiérarchie rigide.
- Ajouter ou modifier des méthodes pour des objets individuels sans affecter toute une hiérarchie.

---

### **Exemple de combinaisons possibles avec l'héritage prototypique**

Grâce à cette approche, vous pouvez créer des objets combinant des méthodes d'autres objets :

- `Banana.peel() + Jungle.rain()`
- `Jungle.growTree() + Gorilla.sleep() + Banana.grow()`

Cette flexibilité rend l'héritage prototypique idéal pour de nombreux cas d'utilisation modernes en JavaScript.

---

### **Résumé**

- **Héritage classique** : Une structure hiérarchique rigide où les classes héritent entièrement les unes des autres, ce qui peut entraîner une surcharge inutile.
- **Héritage prototypique** : Une approche flexible où vous partagez uniquement les méthodes nécessaires via le prototype.
- En JavaScript, **vous pouvez ajouter ou partager des méthodes à des prototypes spécifiques**, permettant une personnalisation et une modularité accrues.

Dans le chapitre suivant, nous approfondirons la **chaîne de prototypes**, qui explique comment JavaScript trouve et résout les méthodes dans une structure prototypique.
```