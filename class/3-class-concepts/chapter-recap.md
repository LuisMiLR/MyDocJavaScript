# Chapter Recap

### Dernière mise à jour : mars 2023

---

## **Points principaux :**

- Les **getters** et **setters** dans une classe :
  - Sont principalement utilisés pour valider ou modifier certaines valeurs avant qu'elles ne soient définies comme propriétés d'une classe.
  - Permettent un contrôle précis lors de l'accès ou de la modification des propriétés.

- **Utilisation des getters et setters :**
  - **Accès** : `user.age` appelle `get age()` si le getter existe.
  - **Modification** : `user.age =` appelle `set age(value)` si le setter existe.
  - **Précaution** : Préfixez la nouvelle variable d'instance avec un `_` (par exemple, `_age`) pour éviter une boucle infinie.

---

## **Méthodes statiques :**
- **Caractéristiques :**
  - Appelées directement sur la classe (par ex. : `ClassName.method()`).
  - Ne peuvent pas être appelées sur une instance.
  - N'accèdent pas aux variables d'instance ou aux méthodes d'instance.
  
- **Quand les utiliser ?**
  - Si le résultat est identique pour toutes les instances de la classe, la méthode doit être déclarée comme `static`.
  - Si la méthode n'a besoin d'accéder à aucune variable d'instance, elle doit probablement être `static`.

---

## **Chaînage de méthodes :**
- Possible lorsque les méthodes d'instance renvoient `this`.
- Permet d'enchaîner plusieurs appels sur le même objet, par exemple :
  ```javascript
  course.markAsCompleted().setGrade(18).requestCertificate();
  ```

---

## **Résumé pratique :**
1. **Getters et Setters :**
   - Valident ou modifient les données au moment de l'accès ou de la modification.
   - Préfixez les variables internes avec un `_` pour éviter les erreurs.

2. **Méthodes statiques :**
   - Utiles pour des logiques indépendantes des instances.
   - Appelées directement sur la classe.

3. **Chaînage de méthodes :**
   - Simplifie l'écriture du code.
   - Requiert que chaque méthode renvoie `this`.

Ces concepts améliorent la clarté, la modularité et la maintenabilité de vos classes en JavaScript.
```