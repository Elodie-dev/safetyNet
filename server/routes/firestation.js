const express = require('express'),
router = express.Router();

// On import notre userController qui contient les function a appliquer sur nos routes
const firestationController = require('../controllers/firestations')


// <----------- Ci-dessous on definis les routes avec les function du controller associer ----->


// On déclare nos routes sur lesquelles on fait appel a notre controller.
router.get('/', firestationController.getAll);
router.get('/:station', firestationController.getAllStation);
router.get('/one/:id', firestationController.getById);
router.post('/add', firestationController.add);
router.put('/update/:id', firestationController.update);
router.delete('/delete/:id', firestationController.delete);

// On export notre router pour pouvoir l'utiliser dans notre app
module.exports = router;
