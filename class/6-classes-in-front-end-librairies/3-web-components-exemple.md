# **Web Component Example**

---

### **Dernière mise à jour : avril 2024**

Un **composant Web** est une fonctionnalité native des navigateurs qui permet de créer des composants réutilisables. Voici un exemple de composant Web en JavaScript :

```javascript
class AppDashboard extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: "open" });
        // assuming there's a <template id="dashboard-template">...</template> in the HTML
        const template = document.querySelector("#dashboard-template");
        shadowRoot.appendChild(template.content.cloneNode(true));
    }

    static get observedAttributes() {
        return ["mode", "size"];
    }

    connectedCallback() {
        console.log("AppDashboard rendered (the first time)");
    }
}

window.customElements.define("app-dashboard", AppDashboard);
```

---

## **Points importants**

### **1. Héritage de `HTMLElement`**
- La classe `AppDashboard` hérite de `HTMLElement`, une classe native du navigateur.
- Contrairement à React où il faut importer `Component`, ici, `HTMLElement` est directement disponible.

---

### **2. Méthodes d'instance appelées automatiquement**
- **`connectedCallback()`**
  - Cette méthode est appelée automatiquement lorsque l'élément est ajouté au DOM.
  - Exemple : quand `<app-dashboard>` est rendu sur la page.

---

### **3. Remplacement du constructeur**
- Comme dans les classes React, si vous remplacez le `constructor()`, vous devez appeler `super()` pour exécuter le constructeur de la classe parente (`HTMLElement`).
- Ici, nous utilisons `attachShadow()` pour attacher un DOM **Shadow** (DOM encapsulé) à notre élément personnalisé.

---

### **4. Méthode statique `observedAttributes`**
- **`static get observedAttributes()`**
  - Cette méthode retourne une liste d'attributs que le composant doit observer.
  - Lorsqu'un de ces attributs change (par exemple, `mode="lg"`), le navigateur en informe le composant.
- Pourquoi est-ce une méthode **statique** ?
  - Le navigateur l'appelle directement sur la **classe**, pas sur une instance particulière. Elle n'a donc pas besoin de dépendre d'une instance.

---

## **Exemple d'utilisation**

Avec la définition ci-dessus, voici comment utiliser le composant Web dans une page HTML :

```html
<template id="dashboard-template">
    <style>
        /* Styles encapsulés dans le Shadow DOM */
    </style>
    <div>Welcome to the Dashboard!</div>
</template>

<app-dashboard mode="lg" size="large"></app-dashboard>
```

---

## **Avantages par rapport aux frameworks comme React ou Angular**

1. **Natif au navigateur :**
   - Pas besoin de bibliothèques ou frameworks externes.
   - Compatible avec tous les navigateurs modernes.

2. **Réutilisable et encapsulé :**
   - Les composants Web utilisent le **Shadow DOM**, offrant un encapsulage de style et de comportement.

3. **Observation des attributs :**
   - Les changements d'attributs sur l'élément HTML sont suivis automatiquement via `observedAttributes`.

---

### **Résumé**

- Les composants Web sont définis en créant une classe qui hérite de `HTMLElement`.
- Vous pouvez remplacer des méthodes comme `connectedCallback()` pour réagir aux changements dans le DOM.
- `static get observedAttributes()` permet d'observer les changements d'attributs spécifiés.
- Le DOM Shadow offre un encapsulage natif et propre des styles et comportements.

Considérez cette technologie comme une base légère et native pour créer des composants réutilisables dans vos projets front-end.
```