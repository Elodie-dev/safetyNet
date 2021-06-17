// On import l'objet DataTypes qui va nous permettre de définir le type de donnée attendu pour les champs de notre table
const {DataTypes} = require('sequelize');

// On import notre setup de bdd
const bdd = require('./setup');


const firestationModel = bdd.define('firestations', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false
    },
    station: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {timestamps: false});

// On export notre model qui nous servira a effectuer les requettes sur notre table user
module.exports = firestationModel;
