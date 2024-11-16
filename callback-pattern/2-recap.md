# **Récapitulatif du chapitre**

---

### **Dernière mise à jour : avril 2023**

---

### **Points Clés :**

1. **Modèle de Rappel (Callback Pattern) :**
   - Un modèle de programmation où une fonction est passée en tant que paramètre à une autre fonction.
   - Ce rappel est automatiquement exécuté une fois que la première fonction a terminé son exécution avec succès.

2. **But des Rappels :**
   - Les rappels (et les promesses plus tard) permettent à JavaScript de rester non bloquant.
   - Ils garantissent que le navigateur reste réactif à l'entrée de l'utilisateur au lieu de bloquer et d'attendre la fin d'une tâche.

3. **Exemples de Rappels :**
   - Les rappels de réussite peuvent recevoir des arguments (par exemple, les résultats d'un calcul complexe).
   - Une des frustrations avec les rappels est que la seule différence entre un rappel de réussite et un rappel d'erreur réside dans leur ordre dans les paramètres, ce qui peut prêter à confusion.

---

### **Enfer des Rappels (Callback Hell) :**

Les rappels imbriqués deviennent rapidement difficiles à gérer. Voici un exemple :

```javascript
showLoader(() => {
    getWeather((data) => {
        // success callback
        hideLoader(() => {
            enableRefreshButton();
            displayWeather(data, () => {
                logToAnalytics("weather");
            });
        });
    }, () => {
        // error callback
        hideLoader(() => {
            enableRefreshButton();
        });
    });
});
```

- **Observations :**
  - L'appel à `logToAnalytics("weather");` est imbriqué **sur 4 niveaux de profondeur**.
  - La gestion des erreurs n'est pas élégante, ce qui rend le code complexe et difficile à lire.

Cela s'appelle **l'enfer des rappels**. Une telle structure imbriquée et une gestion confuse des erreurs compliquent la maintenance et le débogage du code.

---

### **Prochaines Étapes :**

- Dans le prochain chapitre, nous allons explorer les **promesses**, une méthode pour simplifier le code asynchrone.
- Les promesses offrent une manière plus claire et plus facile à gérer pour gérer les rappels de réussite et d'erreur.

--- 
```