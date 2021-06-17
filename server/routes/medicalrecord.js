const express = require('express'),
router = express.Router();

// On import notre userController qui contient les function a appliquer sur nos routes
const medicalrecordController = require('../controllers/medicalrecords')


// <----------- Ci-dessous on definis les routes avec les function du controller associer ----->


// On déclare nos routes sur lesquelles on fait appel a notre controller.
router.get('/', medicalrecordController.getAll);
router.get('/one/:id', medicalrecordController.getById);
router.post('/add', medicalrecordController.add);
router.put('/update/:id', medicalrecordController.update);
router.delete('/delete/:id', medicalrecordController.delete);

// On export notre router pour pouvoir l'utiliser dans notre app
module.exports = router;
