# **Lit Example**

---

### **Dernière mise à jour : juin 2024**

Lit est une petite bibliothèque basée sur les **Web Components**, ce qui signifie que ses composants partagent certaines similarités avec ceux vus dans la leçon précédente. Voici un exemple de composant Lit :

```javascript
import { LitElement, html } from "lit";

class AppCounter extends LitElement {
  static get properties() {
    return {
      size: { type: String },
    };
  }

  constructor() {
    super();
    this.counter = 0;
  }

  connectedCallback() {
    super.connectedCallback();
    console.log("component added to the DOM (first time)");
  }

  firstUpdated() {
    console.log("first update finished");
  }

  handleClick() {
    this.counter += 1;
    this.requestUpdate();
  }

  render() {
    return html`
      <button onclick=${this.handleClick}>Add 1</button>
    `;
  }
}

window.customElements.define("app-counter", AppCounter);
```

---

## **Points clés**

### **1. Méthodes héritées**
- **`connectedCallback()`**
  - Appelée automatiquement lorsque le composant est ajouté au DOM.
  - Nécessite l'appel de `super.connectedCallback()` pour exécuter la version de `LitElement`.

- **`firstUpdated()`**
  - Appelée une fois que le composant est **rendu pour la première fois** dans le DOM.
  - Idéal pour exécuter du code après la mise à jour initiale.

---

### **2. Propriétés réactives**
- **`static get properties()`**
  - Définit les propriétés réactives du composant.
  - Exemple : La propriété `size` de type `String` sera automatiquement créée.

---

### **3. Rendu et mises à jour**
- **`render()`**
  - Retourne du HTML en utilisant la syntaxe de modèle (`html`) fournie par Lit.
  - Appelée automatiquement lorsque le composant doit être rendu ou mis à jour.

- **`requestUpdate()`**
  - Demande une mise à jour manuelle pour que les changements dans les propriétés ou l'état du composant soient rendus.

---

### **4. Méthodes d'instance**
- **`handleClick()`**
  - Méthode définie pour gérer les clics sur le `<button>`.
  - Incrémente `this.counter` et demande une mise à jour via `requestUpdate()`.

---

## **Composant en action**

Voici comment utiliser ce composant dans un fichier HTML :

```html
<app-counter size="large"></app-counter>
```

Lorsque l'utilisateur clique sur le bouton « Add 1 », la valeur de `this.counter` est incrémentée, et le composant se met à jour automatiquement.

---

## **Similitudes avec les Web Components**

- Comme les **Web Components**, Lit utilise `connectedCallback()` et des getters statiques pour observer les propriétés (`properties`).
- La principale différence réside dans le fait que Lit offre un moyen plus convivial pour gérer le rendu avec sa fonction `html` et ses propriétés réactives.

---

### **Résumé**

- Lit est une bibliothèque légère pour créer des composants réutilisables.
- Les composants héritent de `LitElement` et utilisent des méthodes comme `connectedCallback()` et `render()`.
- Les propriétés réactives sont définies via `static get properties()`.
- Lit simplifie le rendu et la mise à jour des composants grâce à sa syntaxe et ses outils natifs.

Considérez Lit comme une solution intermédiaire entre les **Web Components** bruts et des frameworks comme **React**.
```