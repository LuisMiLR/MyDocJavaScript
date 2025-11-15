# Chapter Recap

- La méthode `.filter()` renvoie un nouveau tableau contenant certains éléments du tableau d'origine, en fonction de la condition que vous spécifiez.

- JavaScript prend votre fonction de rappel et l'appelle pour chaque élément du tableau.

- Pour la méthode `.filter()`, le résultat de la fonction de rappel est crucial. Si elle renvoie `true`, l'élément sera inclus dans le tableau résultant. Sinon, il sera exclu.

- JavaScript ne devine pas automatiquement que le tableau `numbers` devient le paramètre `number` dans votre fonction de rappel. Il appelle simplement votre fonction de rappel avec une valeur pour le premier paramètre que vous avez spécifié.

- Utilisez la convention de dénomination **pluriel -> singulier** lorsque vous utilisez la méthode `.filter()`.

- La méthode `.find()` renvoie le premier élément qui correspond à la condition que vous spécifiez. Si aucun élément n'est trouvé, elle renvoie `undefined`.

- La méthode `.filter()` renvoie toujours un tableau, même s'il est vide.

- La méthode `.map(callback)` permet de transformer un tableau en un autre.

- La méthode `.includes(item)` prend un `item` et renvoie `true` si l'élément existe dans le tableau, sinon elle renvoie `false`.

- La méthode `.join(glue)` renvoie une chaîne d'éléments du tableau, séparés par le "glue" spécifié.
```

