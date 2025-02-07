import express from 'express';
import { getAllSalutations, getFiltredSalutations } from './salutations.controller.js';

const router = express.Router();    

router.get('/', (req, res) => {
    res.send("<h1>Bienvenue à mon API</h1>");
});

router.get('/salutations/liste', getAllSalutations);

router.get('/salutations', getFiltredSalutations)

// On exporte le router pour pouvoir l'utiliser dans index.js
export default router;