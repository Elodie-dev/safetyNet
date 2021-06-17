// On import ici la dépendance sequelize
const Sequelize = require('sequelize');

// Ici on crée un setup de connexion a la bdd
    // [alert] ceci ne lance pas la connexion a la bdd [/alert]
const bdd = new Sequelize("safetynet", "root", "", {
    host: "localhost",
    dialect: 'mysql'
});


// On export notre setup
    // [infos] on s'en servira pour lancé la connexion a la bdd et pour définir nos models [/infos]
module.exports = bdd;
