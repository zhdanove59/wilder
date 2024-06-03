// Chargement des variables d'environnement depuis le fichier .env
require('dotenv').config();

// Récupération des variables d'environnement
const name = process.env.MY_NAME;
const city = process.env.MY_CITY;
const language = process.env.MY_LANGUAGE;

// Affichage du message
console.log(`I am ${name}, wilder in ${city}, and I love ${language}.`);
