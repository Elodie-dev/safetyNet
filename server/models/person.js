// On import l'objet DataTypes qui va nous permettre de définir le type de donnée attendu pour les champs de notre table
const {DataTypes} = require('sequelize');

// On import notre setup de bdd
const bdd = require('./setup');


const personModel = bdd.define('persons', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false
    },
    city: {
        type: DataTypes.STRING,
        allowNull: false
    },
    zip: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {timestamps: false});

// On export notre model qui nous servira a effectuer les requettes sur notre table user
module.exports = personModel;
