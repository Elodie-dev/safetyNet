const express = require('express'),
router = express.Router();

// On import notre userController qui contient les function a appliquer sur nos routes
const personController = require('../controllers/persons')


// <----------- Ci-dessous on definis les routes avec les function du controller associer ----->


// On déclare nos routes privées sur lesquelles on fait appel a notre middleware auth puis, notre controller.
router.get('/', personController.getAll);
router.get('/one/:id', personController.getById);
router.post('/add', personController.add);
router.put('/update/:id', personController.update);
router.delete('/delete/:id', personController.delete);

// On export notre router pour pouvoir l'utiliser dans notre app
module.exports = router;
