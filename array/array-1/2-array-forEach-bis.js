/* 
//***************************************************************************** Array forEach ************************************************************************
//******************************************************************************************************************************************************************** 


L'itération de tableau est l'un des concepts les plus importants que vous utiliserez en JavaScript.

Disons que nous disposons d'un tableau de notes et que vous souhaitez effectuer une boucle (ou une itération) sur chaque élément de ce tableau. 
Voici comment procéder en JavaScript :
*/
const grades = [10, 8, 13];

grades.forEach(function (grade) {
  /// do something with individual grade
  console.log(grade);
});

/*
?Commencez toujours par un console.log()intérieur de votre .forEachafin de pouvoir visualiser le passage d'un élèment à l'autre .


La .forEach(callback) méthode vous permet d'exécuter la callback fonction pour chaque élément de ce tableau. Les rappels seront expliqués plus en détail 
dans le chapitre suivant. Pour l’instant, commençons par une définition de base.

Un callback est une définition de fonction passée en paramètre à une autre fonction. 
*/
