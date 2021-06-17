// On import notre script models qui contient tout nos models
const { restart } = require('nodemon');
const models = require('../models/models.js');

// Ci-dessous on export des fonction qui nous permettre de gerez toutes les actions liée a notre table user ---->
    // [infos] Ces fonction seront accessible a partir de la variable qui require ce fichier [/infos]

exports.getAll = (req, res) => {
    models.Firestation.findAll()
    .then((firestations) => {
        res.status(200).json(firestations);
    })
    .catch((err, error) => {
        res.status(400).json(err + error)
    })
}

exports.getAllStation = (req, res) => {
    models.Firestation.findAll({where: {station: req.params.station}})
    .then((firestations) => {
        res.status(200).json(firestations);
    })
    .catch((err, error) => {
        res.status(400).json(err + error)
    })
}

exports.getById = (req, res) => {
    models.Firestation.findOne({where: {id: req.params.id}})
    .then((firestation) => {
        res.status(200).json(firestation);
    })
    .catch((err, error) => {
        res.status(400).json(err + error)
    })
}

exports.add = (req, res) => {
    models.Firestation.create({address: req.body.address, station: req.body.station})
    .then((firestation) => {
        res.status(200).json(firestation);
    })
    .catch((err, error) => {
        res.status(400).json(err + error)
    })
}

exports.update = (req, res) => {
    models.Firestation.findOne({where: {id: req.params.id}})
    .then((firestation) => {
        if(firestation){
            firestation.update({address: req.body.address, station: req.body.station})
            .then((firestation) => {
                res.status(200).json(firestation)
            })
        }
    })
    .catch((err, error) => {
        res.status(400).json(err + error)
    })
}
exports.delete = (req, res) => {
    models.Firestation.destroy({where: {id: req.params.id}})
    .then((firestation) => {
        res.status(200).json(firestation);
    })
    .catch((err, error) => {
        res.status(400).json(err + error)
    })
}


