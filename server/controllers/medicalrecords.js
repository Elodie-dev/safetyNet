// On import notre script models qui contient tout nos models
const models = require('../models/models.js');

// Ci-dessous on export des fonction qui nous permettre de gerez toutes les actions liée a notre table user ---->
    // [infos] Ces fonction seront accessible a partir de la variable qui require ce fichier [/infos]

exports.getAll = (req, res) => {
    models.Medicalrecord.findAll()
    .then((medicalrecords) => {
        res.status(200).json(medicalrecords);
    })
}

exports.getById = (req, res) => {
    models.Medicalrecord.findOne({where: {id: req.params.id}})
    .then((medicalrecord) => {
        res.status(200).json(medicalrecord);
    })
}

exports.add = (req, res) => {
    models.Medicalrecord.create({firstName: req.body.firstName, lastName: req.body.lastName, birthdate: req.body.birthdate, medications: req.body.medications, allergies: req.body.allergies})
    .then((medicalrecord) => {
        res.status(200).json(medicalrecord);
    })
    .catch((err, error) => {
        res.status(400).json(err + error)
    })
}

exports.update = (req, res) => {
    models.Medicalrecord.findOne({where: {id: req.params.id}})
    .then((medicalrecord) => {
        if(medicalrecord){
            medicalrecord.update({firstName: req.body.firstName, lastName: req.body.lastName, birthdate: req.body.birthdate, medications: req.body.medications, allergies: req.body.allergies})
            .then((medicalrecord) => {
                res.status(200).json(medicalrecord)
            })
        }
    })
    .catch((err, error) => {
        res.status(400).json(err + error)
    })
}
exports.delete = (req, res) => {
    models.Medicalrecord.destroy({where: {id: req.params.id}})
    .then((medicalrecord) => {
        res.status(200).json(medicalrecord);
    })
    .catch((err, error) => {
        res.status(400).json(err + error)
    })
}


