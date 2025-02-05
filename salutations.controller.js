import { salutations } from './salutations.model.js';

// Fonction pour récupérer toutes les salutations
const getAllSalutations = (req, res) => {
    res.json(salutations);
};

// Fonction pour récupérer une salutation aléatoire, éventuellement filtrée par langue
const getRandomSalutation = (req, res) => {
    const { langue } = req.query;  // Récupère le paramètre "langue" de la query string (URL)

    // Si un paramètre langue est fourni, on filtre les salutations par langue
    let filteredSalutations = salutations;
    if (langue) {
        filteredSalutations = salutations.filter(salutation => salutation.code_langue === langue);
    }

    // Si aucune salutation n'est trouvée après le filtrage (ou si le code de langue est incorrect)
    if (filteredSalutations.length === 0) {
        res.statusCode = 404;
        res.end(`Erreur, le code de langue ${langue} n'existe pas`);
    }

    // Si des salutations filtrées existent, on sélectionne une salutation aléatoire
    const randomIndex = Math.floor(Math.random() * filteredSalutations.length);
    const randomSalutation = filteredSalutations[randomIndex];

    // On renvoie la salutation aléatoire au format JSON
    res.json(randomSalutation);
};

// Fonction pour ajouter une salutation
const addSalutation = (req, res) => {
    const { code_langue, langue, message } = req.body;

    // Vérifie si tous les paramètres sont présents
    if (!code_langue || !langue || !message) {
        return res.status(400).json({ message: "Erreur, les paramètres code_langue, langue et message sont obligatoires" });
    }

    // Ajoute la nouvelle salutation
    salutations.push({ code_langue, langue, message });

    res.json({
        message: "Salutation ajoutée",
        salutation: message
    });
};

export  {
    getAllSalutations,
    getRandomSalutation,
    addSalutation
};