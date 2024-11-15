# ESLint

**Dernière mise à jour avril 2024**  
En ce qui concerne le format de code, il existe un autre concept connexe appelé **style de code**.

Le style de code est l'ensemble des règles et des directives qu'une certaine équipe/personne/entreprise utilise lors du développement d'un projet. Vous n'avez pas nécessairement besoin d'avoir un style de code, cependant, avoir un style de code peut rendre votre code moins sujet aux bugs, prévenir certains bugs à l'avance, tout en rendant votre code plus homogène.

Avoir un code homogène dans une grande équipe est important pour améliorer la maintenance à long terme du projet.

L'outil le plus populaire pour appliquer/recommander certains styles de code en JavaScript s'appelle **ESLint**.

## Configurer ESLint pour VSCode

Si vous n'avez pas encore `node` ou `npm` installés, vous pouvez ignorer cette section pour l'instant et y revenir plus tard après avoir terminé le cours. N'oubliez pas que vous pouvez ajouter cette leçon à vos favoris en cliquant sur l'icône de signet pour ne pas l'oublier.

### Étapes pour installer ESLint :
1. Ouvrez **VSCode**, cliquez sur l'onglet **Extensions**, puis recherchez **ESLint**.
2. Cliquez sur le premier résultat **ESLint** et appuyez sur le bouton **Installer**.
3. À la racine de votre projet, exécutez la commande :
   ```bash
   npm init @eslint/config
   ```
4. Répondez aux questions suivantes :
   - **Comment souhaitez-vous utiliser ESLint ?**  
     Pour vérifier la syntaxe et détecter les problèmes.
   - **Quel type de modules votre projet utilise-t-il ?**  
     Modules JavaScript (import/export).
   - **Quel framework votre projet utilise-t-il ?**  
     Aucun de ceux-ci.
   - **Votre projet utilise-t-il TypeScript ?**  
     Non.
   - **Où votre code s'exécute-t-il ?**  
     Navigateur.
   - **Voulez-vous les installer maintenant ?**  
     Oui.
   - **Quel gestionnaire de paquets souhaitez-vous utiliser ?**  
     npm.

5. Maintenant, revenez à votre éditeur. Vous commencerez à voir des surlignages dans votre code si vous avez des erreurs. Par exemple, vous pouvez essayer d'écrire :
   ```javascript
   let x = 2;
   ```
   Vous verrez probablement une erreur comme :  
   *"Une valeur est attribuée à « x » mais n'est jamais utilisée."*

### En savoir plus sur les règles ESLint
Pour consulter toutes les possibilités de configuration, vous pouvez explorer les [pages des règles ESLint](https://eslint.org/docs/rules/).

## Résumé
- Le **style de code** est un ensemble de règles et de directives qu'une équipe ou un développeur utilise pour écrire du code de manière cohérente.
- L'outil le plus populaire pour appliquer et recommander certains styles de code en JavaScript est **ESLint**.
```

