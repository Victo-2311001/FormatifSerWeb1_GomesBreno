// Importer le module express
import express from 'express';

import salutationsRoute from './salutations.route.js';

// Créer une application express
const app = express();
const PORT = 3001;

app.use(express.json());

app.get('/', (req, res) => {
    res.send("<h1>Mon premier serveur web sur express !</h1>");
});

// On associe la route /api au router importé
app.use('/api', salutationsRoute);


app.listen(PORT, () => {
    console.log(`Serveur démarré: http://127.0.0.1:${PORT}`);
});
