// On import l'objet DataTypes qui va nous permettre de définir le type de donnée attendu pour les champs de notre table
const {DataTypes} = require('sequelize');

// On import notre setup de bdd
const bdd = require('./setup');


const medicalrecordModel = bdd.define('medicalrecords', {
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
    birthdate: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    medications: {
        type: DataTypes.JSON,
        allowNull: false
    },
    allergies: {
        type: DataTypes.JSON,
        allowNull: false
    }
}, {timestamps: false});

// On export notre model qui nous servira a effectuer les requettes sur notre table user
module.exports = medicalrecordModel;
