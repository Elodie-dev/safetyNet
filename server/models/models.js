// On import notre model person que l'on export sous la clé Person
    // [infos] l'idée ici est de centraliser tous nos models dans un seul fichier [/infos]


    const Person = require('./person');
    const Firestation = require('./firestation');
    const Medicalrecord = require('./medicalrecord');
    
    Firestation.hasMany(Person);
    Person.belongsTo(Medicalrecord, {foreignKey: 'id_medicalrecord'});
    
    
    exports.Person = Person;
    exports.Firestation = Firestation;
    exports.Medicalrecord = Medicalrecord;
    
    