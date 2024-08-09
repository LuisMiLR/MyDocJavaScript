//Refactoring if conditions

/*
Dans cette leçon, nous allons aborder un scénario courant dans lequel vous pouvez vous débarrasser complètement des ifconditions et avoir un code bien plus maintenable .

Disons que vous créez une application comme Deliveroo et que vous disposez d'une méthode qui envoie des notifications push à vos utilisateurs, les informant de la progression de leur commande :
*/

const getPushMessage = status => {
    if (status === "received") {
        return "Restaurant started working on your order.";
    } else if (status === "prepared") {
        return "Driver is picking up your food."
    } else if (status === "en_route") {
        return "Driver is cycling your way!";
    } else if (status === "arrived") {
        return "Enjoy your food!";
    } else {
        return "Unknown status";
    }
}

/*
C'est une façon très verbeuse de traiter ce problème. Nous pouvons le refactoriser en créant un objet qui contient tous les messages possibles, le keyde cet objet étant le status. Refactorisons-le :
*/

const getPushMessages = status => {
    const messages = {
        received: "Restaurant started working on your order.",
        prepared: "Driver is picking up your food.",
        en_route: "Driver is cycling your way!",
        arrived: "Enjoy your food!"
    };

    return messages[status] ?? "Unknown status";
}

//Remarquez comment nous avons également utilisécoalescence nullepour gérer le elsecas où celui-ci statusest différent de ceux que nous avons fournis .