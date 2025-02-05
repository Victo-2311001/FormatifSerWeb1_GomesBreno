import db from './src/config/db.js';

function recupererSalutations(callback) {
    const requete = `SELECT * FROM salutation`;
  
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
  
  export { recupererSalutations };