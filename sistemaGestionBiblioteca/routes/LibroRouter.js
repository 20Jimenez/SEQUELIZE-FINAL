const express = require('express');
let LibroController = require('../controllers/LibroController');

let router = express.Router();

router.get('/libro', LibroController.ObtenerLibro);
router.get('/libro/:id', LibroController.ObtenerLibroid);
router.post('/libro', LibroController.crearLibro);
router.put('/libro/:id', LibroController.actualizarLibro);
router.delete('/libro/:id', LibroController.eliminarLibro);
router.get('/masSolicitados', LibroController.obtenerLibrosMasSolicitados); // Informe de libros más solicitados
router.get('/prestamosRecientes', LibroController.obtenerPrestamosRecientes); // Informe de préstamos más recientes

module.exports = router;
