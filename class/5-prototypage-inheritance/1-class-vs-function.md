```markdown
# **Class vs Function**

---

### **Attention : Ce chapitre est essentiellement théorique.**

JavaScript n'a pas de "vraies" classes ! La syntaxe `class` que vous voyez est du **sucre syntaxique**, un terme utilisé pour décrire une syntaxe qui rend le code plus lisible et élégant.

---

## **Les classes sont des fonctions**

Prenons un exemple avec une classe définie en JavaScript :

```javascript
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  isSquare() {
    return this.width === this.height;
  }
}
```

Si vous interrogez le type de `Rectangle` :

```javascript
typeof Rectangle; // "function"
```

Cela signifie que **les classes en JavaScript sont des fonctions**. La syntaxe `class` rend simplement le code plus lisible.

---

## **Avant le mot-clé `class` (pré-2015)**

Avant 2015, les "classes" étaient écrites avec le **modèle de constructeur de fonctions**. Voici comment cela se faisait :

```javascript
function Rectangle(width, height) {
  this.width = width;
  this.height = height;
}
```

Cette fonction sert de **constructeur**. Lorsque vous utilisez `new Rectangle(15, 20)`, elle crée un nouvel objet et initialise les propriétés.

---

## **Ajout de méthodes d'instance**

Pour ajouter une méthode d'instance, vous utilisiez le **prototype** :

```javascript
function Rectangle(width, height) {
  this.width = width;
  this.height = height;
}

// Ajout d'une méthode d'instance
Rectangle.prototype.isSquare = function () {
  return this.width === this.height;
};
```

Lorsque vous ajoutez une méthode au `prototype`, **toutes les instances de la fonction constructeur partagent cette méthode**. Cela économise de la mémoire, car la méthode n'est pas recréée pour chaque instance.

---

## **Qu'est-ce que le `prototype` ?**

Le `prototype` est un objet qui contient toutes les méthodes d'instance associées à une fonction. 

- Lorsque vous ajoutez une méthode au `prototype`, toutes les instances créées par la fonction constructeur peuvent accéder à cette méthode.
- Cela fait partie de ce qu'on appelle la **chaîne de prototypes**, qui sera expliquée dans le chapitre suivant.

---

## **Exemple avec `String.prototype`**

Si vous consultez la documentation, vous voyez souvent quelque chose comme : `String.prototype.trim()`.

Cela signifie que la méthode `trim()` est définie sur le `prototype` de `String`. Par conséquent, toutes les instances de chaînes (`String`) peuvent utiliser cette méthode.

---

## **Résumé**

1. **Syntaxe `class` :**
   - Ajoutée en 2015 pour rendre le code plus lisible et moderne.
   - Derrière la syntaxe, une `class` est une fonction.

2. **Constructeurs :**
   - Une classe crée une fonction avec un modèle de constructeur.
   - Les constructeurs doivent être appelés avec `new`.

3. **Ajout de méthodes :**
   - Les méthodes d'instance peuvent être ajoutées au `prototype` d'une fonction pour qu'elles soient disponibles pour toutes les instances.

4. **Pourquoi apprendre ceci ?**
   - Même si vous n'écrirez probablement pas cette syntaxe vous-même, il est crucial de la comprendre, car elle constitue la base des classes modernes en JavaScript.

Dans le chapitre suivant, nous explorerons la **chaîne de prototypes**, qui explique comment fonctionne l'héritage en JavaScript.
```