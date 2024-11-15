# Objects

_Dernière mise à jour : juillet 2024_

Merci d'être un utilisateur PRO ! Nous vous recommandons de rejoindre notre communauté de discussions GitHub réservée aux utilisateurs PRO, où vous pourrez poser des questions et obtenir des mises à jour sur les produits. Nous avons également une liste de discussions notables où nous discutons de ChatGPT et recommandons des ressources et des conférences pour rester à jour.

Vous pouvez rejoindre la discussion GitHub en cliquant sur l'icône PRO en haut à droite, puis en sélectionnant l'élément de la liste des discussions GitHub.

Certains étudiants préfèrent parcourir le cours à leur propre rythme. Si vous souhaitez débloquer tous les chapitres, veuillez contacter le support via le centre d'aide, et nous serons heureux de vous aider.

## Qu'est-ce qu'un Objet ?

Un **objet** est un type de données qui permet de regrouper plusieurs variables en une seule variable contenant des **clés** et des **valeurs**. Il est souvent utilisé pour représenter ou décrire une entité (par exemple, une personne, un utilisateur, un produit, etc.).

### Création d'un Objet

Voici comment vous pouvez créer un objet :

```javascript
const user = {
    id: 1,
    firstName: "Sam",
    lastName: "Doe",
    age: 20
};
```

💡 **Bonnes pratiques** : En JavaScript, la convention recommandée est d'utiliser la notation camelCase pour les noms de propriétés (par exemple, `firstName` au lieu de `first_name`).

---

## Lire la Valeur d'une Propriété

Pour lire la valeur d'une propriété dans un objet, vous pouvez utiliser la notation par points :

```javascript
const user = {
    id: 1,
    firstName: "Sam",
    lastName: "Doe",
    age: 20
};

user.id; // 1
user.firstName; // "Sam"
user.isAdmin; // undefined (la propriété n'existe pas)
```

💡 **Bonnes pratiques** : Il est conseillé de visualiser les objets avec lesquels vous travaillez en les affichant dans la console. Pour les objets imbriqués, vous pouvez utiliser la console de votre navigateur ou enregistrer directement l'objet dans `console.log()`.

---

## Mise à Jour de la Valeur d'une Propriété

Vous pouvez également mettre à jour une valeur de propriété en utilisant la même notation par points suivie d'un signe égal :

```javascript
const user = {
    id: 1,
    firstName: "Sam",
    lastName: "Doe",
    age: 20
};

user.lastName = "Blue";
user.age = user.age + 1;
console.log(user); // {id: 1, firstName: "Sam", lastName: "Blue", age: 21}
```

⚠️ **Attention** : Vous pouvez mettre à jour la valeur d'une propriété d'un objet défini par `const`. Cela ne signifie pas que la variable est immuable, mais que vous ne pouvez pas la réaffecter. La variable restera un objet, mais son contenu (les propriétés) peut changer.

---

## Résumé

- Un **objet** est un type de données qui permet de regrouper plusieurs variables en une seule variable contenant des **clés** et des **valeurs**.
- En JavaScript, la convention recommandée est d'utiliser la notation **camelCase** pour les noms de propriétés (par exemple, `firstName` au lieu de `first_name`).
- Pour lire ou mettre à jour la valeur d'une propriété, vous pouvez utiliser la **notation par points**.
```

