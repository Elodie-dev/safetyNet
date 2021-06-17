const express = require('express'),
dotenv = require('dotenv'),
bodyParser = require('body-parser'),
mysql = require('mysql'),
// On import le setup de notre bdd
bdd = require('./models/setup'),
cors = require('cors');
app = express();

// On appel la method config de dotenv qui nous permet de récuperez les variable contenue dans le .env de notre app
dotenv.config();

// On utilise la dépendance cors pour permettre a un client venant d'une source externe d'effectuer des call sur notre api
app.use(cors());

// On utilise bodyParser pour récupérer et formater les données envoyer a notre api
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Ici on déclare nos routes 
app.use('/firestation', require('./routes/firestation'));
app.use('/medicalrecord', require('./routes/medicalrecord'));
app.use('/person', require('./routes/person'));

// Ici on lance la connexion a la bdd a partir de notre setup
bdd.sync({alter: true})
.then(() => {
    // Une fois la connexion a la bdd finaliser on lance notre api
    app.listen(process.env.PORT, () => {
        console.log("server started on port:" + process.env.PORT);
    })
});


// Config port/server pour test
// const port = process.env.PORT;
// const server = app.listen(port, () => console.log(`Server running on port ${port}`));
// module.exports = server;