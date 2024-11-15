# Insertion automatique de points-virgules

**Dernière mise à jour avril 2024**  
ASI (Automatic Semi-colon Insertion) est un concept en JavaScript que nous expliquerons dans cette leçon.

Certaines instructions spécifiques en JavaScript doivent se terminer par un point-virgule. Ainsi, si le programmeur les omet, le moteur JavaScript placera automatiquement un point-virgule. C'est ce qu'on appelle **l'insertion automatique de point-virgule** (ASI) et cela ne s'applique que dans des cas très spécifiques.

Voici les déclarations les plus courantes dans lesquelles l'ASI s'applique :
- `let`/`const` déclarations de variables.
- `import`/`export` déclarations.
- `return`.

Vous pouvez consulter la liste complète sur [MDN](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Lexical_grammar#automatique_s%C3%A9parateur_dinsertion).

### Exemple d'ASI en action :
Vous pouvez écrire du JavaScript pendant des années sans connaître le concept d'ASI. Cependant, les développeurs le rencontrent principalement lorsqu'ils commencent à travailler avec React et écrivent du code qui ressemble à ce qui suit :

```javascript
function App() {
    return 
        <div>
            Hello
        </div>
}
```

Notez que la syntaxe ci-dessus n'est ni JavaScript ni HTML ; elle s'appelle JSX (utilisée en React). Si vous n'avez jamais travaillé avec React, ne vous inquiétez pas pour l'exemple.

Le problème avec le code ci-dessus est que JavaScript placera automatiquement un point-virgule après le mot-clé `return`, donc cette fonction renvoie effectivement `undefined`. Voici à quoi cela ressemblera une fois que le moteur JavaScript aura effectué l'ASI :

```javascript
function App() {
    return; // (équivaut à return undefined)
        <div>
            Hello
        </div>
}
```

C'est ici que la plupart des développeurs découvrent le concept d'ASI.

### Solution :
La solution serait d'avoir le `return` sur une seule ligne : `return <div>`, puis le reste peut aller sur des lignes différentes. ASI ne casserait pas cette structure car le point-virgule irait à la fin de l'expression.

Alternativement, vous pouvez résoudre ce problème en ouvrant une parenthèse après le mot-clé `return`, ce qui indique au moteur JavaScript qu'il doit s'attendre à une expression. Ainsi, il placera le point-virgule après la parenthèse fermante correspondante :

```javascript
function App() {
    return (
        <div>
            Hello
        </div>
    )
}
```

### Résumé
Certaines instructions spécifiques en JavaScript doivent se terminer par un point-virgule. Ainsi, si le programmeur les omet, le moteur JavaScript placera automatiquement un point-virgule. C'est ce qu'on appelle **l'insertion automatique de point-virgule (ASI)** et cela ne s'applique que dans des cas très spécifiques.
L'exemple le plus courant d'ASI est celui avec le mot-clé `return` (principalement lors de l'écriture de code React avec JSX).
```

