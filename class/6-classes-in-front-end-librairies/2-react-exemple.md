# **React Example**

---

### **Dernière mise à jour : août 2022**

Voici un exemple de composant de classe React :

```javascript
import React, { Component } from "react";

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 1
        };
    }

    // called automatically by React
    componentDidMount() {
        console.log("Component rendered (first time)");
    }

    handleClick(event) {
        this.setState({ counter: this.state.counter + 1 });
    }

    render() {
        // React returns "JSX" (outside of the scope of this course)
        return <button onClick={this.handleClick.bind(this)}>Add 1</button>;
    }
}
```

Il s'agit d'un `<Counter />` composant qui ajoute `1` à chaque fois que vous cliquez dessus.

---

## **Points importants**

### **1. Extending the `Component` class**
- Cet exemple montre un cas d'**héritage** très courant dans les bibliothèques/frameworks front-end.
- Vous définissez une classe qui **hérite** de la classe `Component` fournie par React.
- Par cet héritage, vous avez accès aux méthodes d'instance définies par React.

---

### **2. Méthodes fournies par `Component`**

#### **Méthode `setState()`**
- Dans la méthode `handleClick`, nous appelons `this.setState()`. 
- Cette méthode n'est pas définie dans notre code ; elle est héritée de la classe `Component`.
- `setState()` permet de mettre à jour l'état local de notre composant (`this.state`), ce qui entraîne une re-rendu de l'interface utilisateur.

#### **Méthode `componentDidMount()`**
- Cette méthode est appelée automatiquement par React une fois que le composant a été rendu pour la première fois.
- Cela montre l'avantage de l'héritage : React peut gérer ces appels automatiquement.

#### **Méthode `render()`**
- La méthode `render()` est également appelée automatiquement par React.
- Elle retourne un code JSX (HTML-like syntax in JavaScript) qui détermine ce qui est affiché sur la page.

---

### **3. Utilisation du `constructor()`**
- Dans le `constructor()`, nous recevons un paramètre `props`, un concept spécifique à React.
- Il est **nécessaire** d'appeler `super(props)` pour transmettre `props` au constructeur parent (`Component`).
- Nous définissons ensuite `this.state` pour initialiser l'état de notre composant, qui contient des valeurs susceptibles de changer et d'affecter le rendu.

---

### **Conclusion**

- Dans React, les classes sont principalement utilisées pour **hériter** des fonctionnalités fournies par la classe `Component`.
- Vous définissez ensuite vos propres méthodes d'instance (comme `handleClick`), ainsi que les données initiales dans `this.state`.

---

## **React Hooks**

- Les classes React ont parfois été perçues comme **complexes** en raison des mises à jour d'état et du `this`.
- Pour résoudre cela, l'équipe React a introduit un nouveau concept appelé **React Hooks**. Ces hooks utilisent des **fonctions** à la place des classes.
- Si vous êtes intéressé par React, il est recommandé d'apprendre les hooks, car ils sont devenus la norme moderne.

---

**Note :** Il est préférable de finir ce cours avant de vous plonger dans React ou ses alternatives. Cela vous donnera une base solide pour comprendre les concepts essentiels !
```