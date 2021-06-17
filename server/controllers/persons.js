// On import notre script models qui contient tout nos models
const models = require('../models/models.js');

// Ci-dessous on export des fonction qui nous permettre de gerez toutes les actions liée a notre table user ---->
    // [infos] Ces fonction seront accessible a partir de la variable qui require ce fichier [/infos]

exports.getAll = (req, res) => {
    models.Person.findAll()
    .then((persons) => {
        res.status(200).json(persons);
    })
}

exports.getById = (req, res) => {
    models.Person.findOne({where: {id: req.params.id}})
    .then((person) => {
        res.status(200).json(person);
    })
}

exports.add = (req, res) => {
    models.Person.create({firstName: req.body.firstName, lastName: req.body.lastName, address: req.body.address, city: req.body.city, zip: req.body.zip, phone: req.body.phone, email: req.body.email, firestationId: req.body.id_firestation, id_medicalrecord: req.body.id_medicalrecord})
    .then((person) => {
        res.status(200).json(person);
    })
    .catch((err, error) => {
        res.status(400).json(err + error)
    })
}

exports.update = (req, res) => {
    models.Person.findOne({where: {id: req.params.id}})
    .then((person) => {
        if(person){
            person.update({firstName: req.body.firstName, lastName: req.body.lastName, address: req.body.address, city: req.body.city, zip: req.body.zip, phone: req.body.phone, email: req.body.email, id_firestation: req.body.id_firestation, id_medicalrecord: req.body.id_medicalrecord})
            .then((person) => {
                res.status(200).json(person)
            })
        }
    })
    .catch((err, error) => {
        res.status(400).json(err + error)
    })
}

exports.delete = (req, res) => {
    models.Person.destroy({where: {id: req.params.id}})
    .then((person) => {
        res.status(200).json(person);
    })
    .catch((err, error) => {
        res.status(400).json(err + error)
    })
}


