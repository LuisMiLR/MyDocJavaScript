//If & else

//Il est parfois possible de supprimer le else. Jetons un coup d'œil à un exemple :
function canVote(age) {
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
}
/* Puisque cette fonction effectue deux actions différentes basées sur le résultat de la condition 
if et de son opposé (else), alors nous pouvons la réécrire en supprimant le elsemot-clé : */
