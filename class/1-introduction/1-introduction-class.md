# Introduction aux classes

### Dernière mise à jour : mai 2021

Les classes en JavaScript ont une syntaxe similaire à celle des autres langages de programmation orientés objet. Elles permettent de créer des objets partageant des caractéristiques ou des comportements communs. Cependant, JavaScript reste un langage orienté objet basé sur les prototypes, même si la syntaxe des classes a été introduite pour faciliter son utilisation par des développeurs habitués aux langages basés sur les classes.

---

## **Qu'est-ce qu'une classe ?**

Les classes permettent d'organiser et de regrouper les fonctionnalités similaires (variables et fonctions) dans une seule entité, tout en favorisant la réutilisabilité du code.

Par exemple, imaginons une classe pour gérer des traductions :

```javascript
class Translation {
  constructor(word) {
    // Capture le paramètre et l'associe à l'instance
    this.word = word;
  }

  isEnglishWord() {
    // Retourne true si le mot est en anglais, sinon false
  }

  isSpanishWord() {
    // Retourne true si le mot est en espagnol, sinon false
  }
}

// Exemple d'utilisation :
const firstTranslation = new Translation("Table");
console.log(firstTranslation.isEnglishWord()); // true

const secondTranslation = new Translation("España");
console.log(secondTranslation.isEnglishWord()); // false
```

---

## **Créer une instance**

Pour créer une instance d'une classe, utilisez le mot-clé `new` :

```javascript
const person1 = new Person("Sam Doe");
const person2 = new Person("Charley Bron");

console.log(person1 === person2); // false (instances différentes)
```

---

## **Syntaxe d'une classe**

Voici un exemple avec une classe représentant des voitures :

```javascript
class Voiture {
  constructor(marque, modèle) {
    this.marque = marque;
    this.modèle = modèle;
  }

  démarrer() {
    return "Vroom Vroom!";
  }
}

const maVoiture = new Voiture("Toyota", "Corolla");
console.log(maVoiture.démarrer()); // "Vroom Vroom!"
```

Les fonctions `démarrer()` et les propriétés `marque` et `modèle` sont regroupées au sein de la classe `Voiture`.

---

## **Classes et instances**

### **Classe**
- Une classe est une **usine** permettant de créer des objets similaires.
- Une classe contient des **propriétés** (variables) et des **méthodes** (fonctions).

### **Instance**
- Une instance est un objet créé à partir d'une classe.
- Chaque instance est unique.

Exemple :

```javascript
const voiture1 = new Voiture("Ford", "Focus");
const voiture2 = new Voiture("Tesla", "Model 3");

console.log(voiture1 === voiture2); // false
```

---

## **Résumé**

- Les classes permettent de mieux organiser le code en regroupant des fonctionnalités similaires.
- Elles favorisent la **réutilisabilité** du code.
- Une classe est une usine permettant de créer des instances.
- Chaque instance créée à partir d'une classe est **unique**.

---

## **Remontée des déclarations (hoisting)**

Contrairement aux fonctions, les déclarations de classes **ne sont pas remontées**. Vous devez déclarer la classe avant de l'utiliser, sinon vous obtiendrez une `ReferenceError` :

```javascript
const p = new Rectangle(); // ReferenceError

class Rectangle {}
```
```