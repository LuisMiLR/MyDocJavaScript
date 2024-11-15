# Refactoring if conditions

Dans cette leçon, nous allons aborder un scénario courant dans lequel vous pouvez vous débarrasser complètement des `if` conditions pour rendre le code plus maintenable.

Disons que vous créez une application comme Deliveroo et que vous avez une méthode qui envoie des notifications push à vos utilisateurs, les informant de la progression de leur commande :

```javascript
const getPushMessage = status => {
    if (status === "received") {
        return "Restaurant started working on your order.";
    } else if (status === "prepared") {
        return "Driver is picking up your food.";
    } else if (status === "en_route") {
        return "Driver is cycling your way!";
    } else if (status === "arrived") {
        return "Enjoy your food!";
    } else {
        return "Unknown status";
    }
};
```

Cette méthode est assez verbeuse. Nous pouvons la **refactoriser** en créant un objet contenant tous les messages possibles, avec la clé de cet objet étant le `status`. Voici la version refactorisée :

```javascript
const getPushMessages = status => {
    const messages = {
        received: "Restaurant started working on your order.",
        prepared: "Driver is picking up your food.",
        en_route: "Driver is cycling your way!",
        arrived: "Enjoy your food!"
    };

    return messages[status] ?? "Unknown status";
};
```

### Explication :
- Nous avons remplacé la série de `if/else` par un objet `messages` où chaque clé correspond à un statut, et chaque valeur est le message associé.
- Nous avons utilisé l'opérateur de **nullish coalescing** (`??`) pour gérer le cas où le `status` ne correspond pas à ceux que nous avons fournis. Si c'est le cas, il retourne `"Unknown status"`.

Cette approche simplifie le code, le rend plus maintenable, et réduit les possibilités d'erreurs liées à des chaînes d'instructions conditionnelles.
``` 

