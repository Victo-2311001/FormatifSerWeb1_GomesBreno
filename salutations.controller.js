import { recupererSalutations, filtrerSalutations } from './salutations.model.js';

// Fonction pour récupérer toutes les salutations
const getAllSalutations = (req, res) => {
    recupererSalutations((erreur, resultats) => {
      if (erreur) {
        return res.status(500).json({ error: erreur.message });
      }
      res.json(resultats);
    });
  };

const getFiltredSalutations = (req, res) => {
    //Récuperer le code de langue
    const langue = req.query.langue;

    //Si il n'a pas de code de langue définit (sans le ?langue = ) 
    if (!langue) {
        return res.status(400).json({ error: erreur.message });
    }

    filtrerSalutations(langue, (erreur, resultats) => {
        if (erreur) {
          return res.status(500).json({ error: erreur.message });
        }
        res.json(resultats);
      });
}   


export  {
    getAllSalutations,
    getFiltredSalutations
};