concepts et exemples plus avancés en algorithmique.

Nous allons couvrir les types d'algorithmes et de structures de données plus sophistiqués, ainsi que des exemples d'algorithmes courants.

### Types d'Algorithmes

1.  **Algorithmes de Recherche :**

    - **Recherche Linéaire :**  
      Parcourt chaque élément d'une structure de données jusqu'à trouver la valeur recherchée.

      ```javascript
      function linearSearch(arr, target) {
        for (let i = 0; i < arr.length; i++) {
          if (arr[i] === target) {
            return i; // Retourne l'indice de l'élément trouvé
          }
        }
        return -1; // Retourne -1 si l'élément n'est pas trouvé
      }
      ```

      ````

      Exemple :

      ```javascript
      const arr = [2, 4, 6, 8, 10, 12, 14];
      const result = linearSearch(arr, 10);
      ````

      La fonction parcourt chaque élément du tableau, en commençant par l'indice 0.
      Lorsqu'elle arrive à arr[4] = 10, cela correspond à la cible, donc elle renvoie 4.
      result renverra 4, qui est l'indice de la cible 10 dans le tableau.

    - **Recherche Binaire :**
      Utilisée pour les tableaux triés, elle divise le tableau en deux moitiés pour chercher plus efficacement.

      ```javascript
      function binarySearch(arr, target) {
        //binarySearch(arr, target) prend deux arguments : un tableau trié (arr) et une valeur cible (target).
        let left = 0;
        let right = arr.length - 1;

        while (left <= right) {
          const mid = Math.floor((left + right) / 2);

          if (arr[mid] === target) {
            return mid;
          } else if (arr[mid] < target) {
            left = mid + 1;
          } else {
            right = mid - 1;
          }
        }
        return -1;
      }
      ```

    Exemple :

    ```javascript
    const arr = [1, 3, 5, 7, 9, 11, 13];
    const result = binarySearch(arr, 9);
    ```

    Indices initiaux : Le tableau a 7 éléments (arr = [1, 3, 5, 7, 9, 11, 13]), donc left = 0 et right = 6.
    Premier calcul du milieu : (0 + 6) / 2 = 3. arr[3] = 7, qui est inférieur à 9. On met à jour left = 4.
    Deuxième calcul du milieu : (4 + 6) / 2 = 5. arr[5] = 11, qui est supérieur à 9. On met à jour right = 4.
    Troisième calcul du milieu : (4 + 4) / 2 = 4. arr[4] = 9, c'est la cible !
    La valeur 9 se trouve donc à l'index 4 du tableau.

    ```

    ```

2.  **Algorithmes de Tri :**

    - **Tri à Bulles :** Compare chaque paire d'éléments adjacents et les échange si nécessaire.

    ```javascript
    function bubbleSort(arr) {
      for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
          if (arr[j] > arr[j + 1]) {
            [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // Échange
          }
        }
      }
      return arr;
    }
    ```

    - **Tri Rapide (Quicksort) :** Utilise une approche de "divide and conquer" pour trier les éléments en plaçant un pivot et en réorganisant les éléments autour de ce pivot.

    ```javascript
    function quickSort(arr) {
      if (arr.length <= 1) {
        return arr;
      }
      const pivot = arr[Math.floor(arr.length / 2)];
      const left = [];
      const right = [];
      for (let i = 0; i < arr.length; i++) {
        if (i === Math.floor(arr.length / 2)) continue;
        if (arr[i] < pivot) {
          left.push(arr[i]);
        } else {
          right.push(arr[i]);
        }
      }
      return quickSort(left).concat(pivot, quickSort(right));
    }
    ```

### Structures de Données Avancées

1. **Listes Chaînées :**

   - **Définition :** Une liste chaînée est une structure de données linéaire composée de nœuds, où chaque nœud contient une donnée et une référence au nœud suivant.

   ```javascript
   class Node {
     constructor(data) {
       this.data = data;
       this.next = null;
     }
   }

   class LinkedList {
     constructor() {
       this.head = null;
     }

     append(data) {
       const newNode = new Node(data);
       if (!this.head) {
         this.head = newNode;
         return;
       }
       let current = this.head;
       while (current.next) {
         current = current.next;
       }
       current.next = newNode;
     }

     print() {
       let current = this.head;
       while (current) {
         console.log(current.data);
         current = current.next;
       }
     }
   }

   const list = new LinkedList();
   list.append(1);
   list.append(2);
   list.append(3);
   list.print(); // Affiche 1, 2, 3
   ```

2. **Arbres :**

   - **Définition :** Un arbre est une structure de données hiérarchique composée de nœuds, avec un nœud racine et des nœuds enfants.
   - **Arbres Binaires de Recherche (BST) :** Un type d'arbre binaire où chaque nœud a au plus deux enfants, et les valeurs du sous-arbre gauche sont inférieures à la valeur du nœud, tandis que celles du sous-arbre droit sont supérieures.

   ```javascript
   class TreeNode {
     constructor(value) {
       this.value = value;
       this.left = null;
       this.right = null;
     }
   }

   class BinarySearchTree {
     constructor() {
       this.root = null;
     }

     insert(value) {
       const newNode = new TreeNode(value);
       if (!this.root) {
         this.root = newNode;
         return;
       }
       let current = this.root;
       while (true) {
         if (value < current.value) {
           if (!current.left) {
             current.left = newNode;
             return;
           }
           current = current.left;
         } else {
           if (!current.right) {
             current.right = newNode;
             return;
           }
           current = current.right;
         }
       }
     }

     search(value) {
       let current = this.root;
       while (current && current.value !== value) {
         if (value < current.value) {
           current = current.left;
         } else {
           current = current.right;
         }
       }
       return current;
     }
   }

   const bst = new BinarySearchTree();
   bst.insert(10);
   bst.insert(5);
   bst.insert(15);
   console.log(bst.search(5)); // Affiche le nœud contenant 5
   ```

### Algorithmes de Graphes

1. **Parcours en Profondeur (DFS) :**

   - **Définition :** Parcourt un graphe en explorant aussi loin que possible le long de chaque branche avant de reculer.

   ```javascript
   function dfs(graph, start, visited = new Set()) {
     visited.add(start);
     console.log(start);
     for (const neighbor of graph[start]) {
       if (!visited.has(neighbor)) {
         dfs(graph, neighbor, visited);
       }
     }
   }

   const graph = {
     A: ['B', 'C'],
     B: ['D', 'E'],
     C: ['F'],
     D: [],
     E: ['F'],
     F: [],
   };

   dfs(graph, 'A'); // Affiche A, B, D, E, F, C
   ```

2. **Parcours en Largeur (BFS) :**

   - **Définition :** Parcourt un graphe en explorant tous les voisins d'un sommet avant de passer aux voisins de ces voisins.

   ```javascript
   function bfs(graph, start) {
     const queue = [start];
     const visited = new Set();

     while (queue.length > 0) {
       const node = queue.shift();
       if (!visited.has(node)) {
         console.log(node);
         visited.add(node);
         for (const neighbor of graph[node]) {
           queue.push(neighbor);
         }
       }
     }
   }

   const graph = {
     A: ['B', 'C'],
     B: ['D', 'E'],
     C: ['F'],
     D: [],
     E: ['F'],
     F: [],
   };

   bfs(graph, 'A'); // Affiche A, B, C, D, E, F
   ```

### Conclusion

Ces concepts couvrent une grande partie des bases et des structures de données avancées en algorithmique. En les maîtrisant, vous serez bien équipé pour résoudre une grande variété de problèmes de programmation. N'hésitez pas à poser des questions si vous avez besoin de clarifications ou si vous souhaitez explorer d'autres sujets ! \*/
