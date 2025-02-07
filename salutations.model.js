import db from './src/config/db.js';

function recupererSalutations(callback) {
    const requete = `SELECT * FROM salutations`;
  
    //Récupérer toutes les lignes de la table "salutation"
    db.query(requete, (erreur, resultats) => {
      if (erreur) {
        //On appelle le callback avec l'erreur (s'il y a un erreur)
        return callback(erreur);
      }
      //On retourne les résultats via le callback
      return callback(null, resultats);
    });
  }
  
function filtrerSalutations(langue, callback){
  const requete = `SELECT * FROM salutations where code_langue = ?`;

  db.query(requete, [langue], (erreur, resultats) => {
    if (erreur){
      return callback(erreur);
    }
    return callback(null, resultats);
  });
}  
  
  export { recupererSalutations, filtrerSalutations };