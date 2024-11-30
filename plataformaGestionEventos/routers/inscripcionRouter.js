const express = require('express');
const InscripcionController = require('../controllers/inscripcionController');

const router = express.Router();
router.get('/registrar',InscripcionController.obtener)
router.post('/registrar', InscripcionController.crearInscripcion);;
router.delete('/registrar',InscripcionController.eliminarInscripcion);
router.get('/inscripciones',InscripcionController.inscripciones)

module.exports = router;